const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config/database');
const forge = require('node-forge');
const fs = require('fs');

const pki = forge.pki;

const caCertPem = fs.readFileSync('caCert.pem', 'utf8');
const caPrivateKeyPem = fs.readFileSync('caPrivateKey.pem', 'utf8');
const caCert = pki.certificateFromPem(caCertPem);
const caPrivateKey = pki.privateKeyFromPem(caPrivateKeyPem);

// 1. Register new user 
router.post('/register', (req, res, next) => {
  const ciphertextHex = req.body.ciphertextHex;
  const encryptedKeyHex = req.body.encryptedKeyHex;

  let ciphertext = forge.util.hexToBytes(ciphertextHex);
  let encryptedKey = forge.util.hexToBytes(encryptedKeyHex);
  let decryptedKey = caPrivateKey.decrypt(encryptedKey, 'RSA-OAEP');
  let decipher = forge.cipher.createDecipher('AES-ECB', decryptedKey);
  decipher.start();
  decipher.update(forge.util.createBuffer(ciphertext, 'binary'));
  decipher.finish();
  let recovered = decipher.output;
  let recoveredParse = JSON.parse(recovered);

  let name = recoveredParse.name;
  let email = recoveredParse.email;
  let username = recoveredParse.username;
  let password = recoveredParse.password;
  let age = recoveredParse.age;

  let newUser = new User({
    name: name,
    email: email,
    username: username,
    password: password,
    age: age
  });

  User.getUserByUsername(newUser.username, (err, user) => {
    if (err) throw err;
    if (user) {
      return res.json({ success: false, msg: "Same ID exists. Try another ID!" });
    } else {
      User.addUser(newUser, (err, user) => {
        console.log(user);
        if (err) {
          res.json({ success: false, msg: 'User registration failed!' });
        } else {
          res.json({ success: true, msg: 'User registration succeed!' });
        }
      });
    }
  });
});

// 2. Authenticate, ID/Pass Login
router.post('/authenticate', (req, res, next) => {
  const ciphertextHex = req.body.ciphertextHex;
  const encryptedKeyHex = req.body.encryptedKeyHex;
  let ciphertext = forge.util.hexToBytes(ciphertextHex);
  let encryptedKey = forge.util.hexToBytes(encryptedKeyHex);
  let decryptedKey = caPrivateKey.decrypt(encryptedKey, 'RSA-OAEP');
  let decipher = forge.cipher.createDecipher('AES-ECB', decryptedKey);
  decipher.start();
  decipher.update(forge.util.createBuffer(ciphertext, 'binary'));
  decipher.finish();
  let recovered = decipher.output;
  let recoveredParse = JSON.parse(recovered);

  let username = recoveredParse.username;
  let password = recoveredParse.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {

        const ptoken = 'JWT ' + jwt.sign({ data: user }, config.secret, {
          expiresIn: 604800 // default expiration : 1 week
        });

        const stoken = 'JWT ' + jwt.sign({ data: ptoken }, config.secret, {
          noTimestamp: true // stoken does not require timestamp 
        });

        const userInfo = {
          ptoken: ptoken,
          stoken: stoken,
          userNoPW: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            age: user.age
          }
        }

        let userInfoJson = JSON.stringify(userInfo);

        let cipher = forge.cipher.createCipher('AES-ECB', decryptedKey);
        cipher.start();
        cipher.update(forge.util.createBuffer(userInfoJson, 'binary'));
        cipher.finish();
        let ciphertext = cipher.output;  // Encrypted userInfo
        let ciphertextToHex = forge.util.bytesToHex(ciphertext);

        return res.json({
          success: true,
          ciphertextToHex: ciphertextToHex
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  });
});

// 3. AuthenticateSig, One-click easy login  
router.post('/authenticateSig', (req, res, next) => {
  const username = req.body.username;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: "User not found!" });
    }

    const currentTime = req.body.currentTime;
    const signatureHex = req.body.signatureHex;
    const certPem = req.body.certPem;
    const cert = pki.certificateFromPem(certPem);
    const publicKey = cert.publicKey;
    const signature = forge.util.hexToBytes(signatureHex);
    const common = cert.subject.getField('CN').value;
    const currentTime1 = new Date().getTime();
    const diffTime = currentTime1 - currentTime;

    let md = forge.md.sha1.create();
    md.update(username, 'utf8');
    md.update(currentTime, 'utf8');
    let verified1 = publicKey.verify(md.digest().bytes(), signature);
    let verified2 = caCert.verify(cert);
    let verified3;
    if (diffTime < 1000000) verified3 = true;
    let verified4;
    if (username == common) verified4 = true;

    if (verified1 == true && verified2 == true && verified3 == true && verified4 == true) {
      const ptoken = 'JWT ' + jwt.sign({ data: user }, config.secret, {
        expiresIn: 604800 // default expiration : 1 week 
      });

      const stoken = 'JWT ' + jwt.sign({ data: ptoken }, config.secret, {
        noTimestamp: true // stoken does not require timestamp
      });

      res.json({
        success: true,
        ptoken: ptoken,
        stoken: stoken,
        userNoPW: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          age: user.age
        }
      });
    } else {
      return res.json({
        success: false,
        msg: 'Login not successful. Something wrong... '
      });
    }
  });
});

// 4. Home, Connecting home to distribute server certificate 
router.get('/home', (req, res, next) => {
  let currentTime = new Date().getTime();
  let nonce = forge.random.getBytesSync(16); // Random Nonce
  let nonceHex = forge.util.bytesToHex(nonce);
  let md = forge.md.sha1.create();
  md.update(currentTime, 'utf8');
  md.update(nonceHex, 'utf8');
  let signature = caPrivateKey.sign(md);
  let signatureHex = forge.util.bytesToHex(signature);

  res.json({
    currentTime: currentTime,
    nonceHex: nonceHex,
    caCertPem: caCertPem,
    signatureHex: signatureHex
  });
});

// 5. Profile, Dual-token authentication   
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const ptoken = req.headers.authorization;   // ptoken 
  const ctime = req.headers.ctime;            // Current time of client  
  const auth1 = req.headers.auth;             // One-time auth received from client  
  const stoken = 'JWT ' + jwt.sign({ data: ptoken }, config.secret, {
    noTimestamp: true
  });

  let md = forge.md.sha256.create();
  md.update(ctime + stoken);
  const auth2 = md.digest().toHex();  // Server-generated one-time auth  

  const stime = new Date().getTime();  // Server current time 
  const diff = stime - ctime.valueOf();  // Time difference 

  if (auth1 == auth2 && diff < 100000) {
    // Return user info without password 
    res.json({
      userNoPW: {
        name: req.user.name,
        username: req.user.username,
        email: req.user.email,
        age: req.user.age
      }
    });
  }
});

// 6. Blog, using JWT authentication  
router.get('/blog', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.json({ user: req.user });
});

// 7. List, SHow user list 
router.get('/list', (req, res, next) => {
  User.getAll((err, users) => {
    if (err) throw err;
    res.json(users);
  });
});

// 8. Encrypt, message encryption using one-time secret key 
router.get('/encrypt', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const ptoken = req.headers.authorization;
  const ctime = req.headers.ctime;
  const encrypted = req.headers.enc;
  const stoken = 'JWT ' + jwt.sign({ data: ptoken }, config.secret, {
    noTimestamp: true
  });

  let md = forge.md.sha256.create();
  md.update(ctime + stoken);
  let key = md.digest();
  let encrypted1 = forge.util.hexToBytes(encrypted, 128);
  let decipher = forge.cipher.createDecipher('AES-ECB', key);
  decipher.start();
  decipher.update(forge.util.createBuffer(encrypted1, 'binary'));
  decipher.finish();
  let decrypted = decipher.output;
  res.json({ decrypted: decrypted });
});

// 9. Mac, message authentication using one-time secret key 
router.get('/mac', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const ptoken = req.headers.authorization;
  const ctime = req.headers.ctime;
  const plaintext = req.headers.plaintext;
  const mac1 = req.headers.mac;             // MAC received from client  
  const stoken = 'JWT ' + jwt.sign({ data: ptoken }, config.secret, {
    noTimestamp: true
  });

  let md = forge.md.sha256.create();
  md.update(ctime + stoken);
  let key = forge.util.bytesToHex(md.digest());

  let md1 = forge.md.sha256.create();
  md1.update(plaintext + key);
  let mac2 = forge.util.bytesToHex(md1.digest());

  if (mac1 == mac2) {
    res.json({ msg: 'Success. Message authenticity verified!' });
  } else {
    res.json({ msg: 'Failure. Something wrong on the message...' });
  }

});

// 10. Issuing certificate 
router.post('/cert', (req, res, next) => {
  let cert = pki.createCertificate();
  cert.publicKey = pki.publicKeyFromPem(req.body.publicKey);
  cert.serialNumber = '01';

  cert.validity.notBefore = new Date();
  cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);
  var userAttrs = [{
    shortName: 'CN',
    value: req.body.common
  }, {
    shortName: 'C',
    value: req.body.country
  }, {
    shortName: 'ST',
    value: req.body.state
  }, {
    shortName: 'L',
    value: req.body.locality
  }, {
    shortName: 'O',
    value: req.body.organization
  }, {
    shortName: 'OU',
    value: req.body.orgUnit
  }];
  cert.setSubject(userAttrs);

  var caAttrs = [{
    shortName: 'CN',
    value: caCert.subject.getField('CN').value
  }, {
    shortName: 'C',
    value: caCert.subject.getField('C').value
  }, {
    shortName: 'ST',
    value: caCert.subject.getField('ST').value
  }, {
    shortName: 'L',
    value: caCert.subject.getField('L').value
  }, {
    shortName: 'O',
    value: caCert.subject.getField('O').value
  }, {
    shortName: 'OU',
    value: caCert.subject.getField('OU').value
  }];
  cert.setIssuer(caAttrs);

  cert.setExtensions([{
    name: 'basicConstraints',
    cA: true
  }, {
    name: 'keyUsage',
    keyCertSign: true,
    digitalSignature: true,
    nonRepudiation: true,
    keyEncipherment: true,
    dataEncipherment: true
  }, {
    name: 'extKeyUsage',
    serverAuth: true,
    clientAuth: true,
    codeSigning: true,
    emailProtection: true,
    timeStamping: true
  }, {
    name: 'nsCertType',
    client: true,
    server: true,
    email: true,
    objsign: true,
    sslCA: true,
    emailCA: true,
    objCA: true
  }, {
    name: 'subjectAltName',
    altNames: [{
      type: 6, // URI
      value: 'http://example.org/'
    }, {
      type: 7, // IP
      ip: '127.0.0.1'
    }]
  }, {
    name: 'subjectKeyIdentifier'
  }]);

  cert.sign(caPrivateKey);

  return res.json({
    success: true,
    cert: pki.certificateToPem(cert),
    caCert: caCertPem
  });

});

module.exports = router;