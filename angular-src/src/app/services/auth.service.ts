import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Login, UserNoPW } from '../models/User';
import { JwtHelperService } from '@auth0/angular-jwt';

import * as forge from 'node-forge';
const pki = forge.pki;

// Basic header option
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ptoken: any;          // Public token
  stoken: any;          // Secret token
  userNoPW: UserNoPW;   // Logged in user information without password

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) { }

  // 0. API Connection
  prepEndpoint(ep) {
    // 1. localhost service
    // return 'http://localhost:3000/' + ep;

    // 2. Heroku cloud porting
    return ep;
  }

  // 1. Connecting Home, distribute server certificate
  connectHome(): Observable<any> {
    const homeUrl = this.prepEndpoint('users/home');
    return this.http.get(homeUrl, httpOptions);
  }

  // 2. Register new user
  registerUser(register): Observable<any> {
    const registerUrl = this.prepEndpoint('users/register');
    return this.http.post<User>(registerUrl, register, httpOptions);
  }

  // 3. ID/Pass login
  authenticateUser(login): Observable<any> {
    const loginUrl = this.prepEndpoint('users/authenticate');
    return this.http.post(loginUrl, login, httpOptions);
  }

  // 4. One-click easy login
  authenticateSigUser(): Observable<any> {
    const privateKeyPem = localStorage.getItem('privateKey');
    const privateKey = pki.privateKeyFromPem(privateKeyPem);
    const certPem = localStorage.getItem('cert');
    const currentTime = new Date().getTime();
    const cert = pki.certificateFromPem(certPem);
    const username = cert.subject.getField('CN').value;

    // Signature generation on username, currentTime
    let md = forge.md.sha1.create();
    md.update(username, 'utf8');
    md.update(currentTime, 'utf8');
    const signature = privateKey.sign(md);
    const signatureHex = forge.util.bytesToHex(signature);

    // Easy login request
    const request = {
      username: username,
      currentTime: currentTime,
      signatureHex: signatureHex,
      certPem: certPem
    };

    const loginUrl = this.prepEndpoint('users/authenticateSig');
    return this.http.post(loginUrl, request, httpOptions);
  }

  // 5. Profile page using dual-token authentication (DTA)
  getProfile(ptoken, ctime, auth): Observable<any> {
    // Http header option for DTA
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ptoken,
        'Ctime': ctime,
        'Auth': auth
      })
    };

    const profileUrl = this.prepEndpoint('users/profile');
    return this.http.get(profileUrl, httpOptions1);
  }

  // 6. Blog page using standard JWT authentication
  getBlog(): Observable<any> {
    // http header option for JWT
    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.ptoken
      })
    };

    const blogUrl = this.prepEndpoint('users/blog');
    return this.http.get(blogUrl, httpOptions2);
  }

  // 7. Show user list
  getList(): Observable<any> {
    const listUrl = this.prepEndpoint('users/list');
    return this.http.get(listUrl, httpOptions);
  }

  // 8. Message encryption using one-time secret key
  encryptedMessage(encrypted, ctime, ptoken): Observable<any> {
    // http header option for message encryption
    const httpOptions3 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ptoken,
        'Ctime': ctime,
        'Enc': encrypted
      })
    };

    const encryptUrl = this.prepEndpoint('users/encrypt');
    return this.http.get(encryptUrl, httpOptions3);
  }

  getEncrypt(plaintext, key) {
    let plaintextUtf8 = forge.util.encodeUtf8(plaintext);
    let key1 = forge.util.hexToBytes(key);
    let cipher = forge.cipher.createCipher('AES-ECB', key1);
    cipher.start();
    cipher.update(forge.util.createBuffer(plaintextUtf8, 'binary'));
    cipher.finish();
    let ciphertext = cipher.output;
    return forge.util.bytesToHex(ciphertext);
  }

  // 9. Message authentication using one-time secret key
  macMessage(plaintext, ctime, ptoken, mac): Observable<any> {
    // http header option for message authentication
    const httpOptions4 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ptoken,
        'Ctime': ctime,
        'Mac': mac,
        'Plaintext': plaintext
      })
    };

    const macUrl = this.prepEndpoint('users/mac');
    return this.http.get(macUrl, httpOptions4);
  }

  getMac(plaintext, key) {
    let md = forge.md.sha256.create();
    md.update(plaintext + key);
    return md.digest().toHex();
  }

  // 10. Issuing certificate
  certRequest(request): Observable<any> {
    // Key generation
    let keyPair = pki.rsa.generateKeyPair(2048);
    let publicKey = keyPair.publicKey;
    let privateKey = keyPair.privateKey;
    let publicKeyPem = pki.publicKeyToPem(publicKey);
    let privateKeyPem = pki.privateKeyToPem(privateKey);

    // Storing private key
    localStorage.setItem('privateKey', privateKeyPem);

    // Certificate request. UTF-8 encoding.
    const req = {
      country: forge.util.encodeUtf8(request.country),
      state: forge.util.encodeUtf8(request.state),
      locality: forge.util.encodeUtf8(request.locality),
      organization: forge.util.encodeUtf8(request.organization),
      orgUnit: forge.util.encodeUtf8(request.orgUnit),
      common: request.common, // common = username should be English
      publicKey: publicKeyPem
    }

    const certUrl = this.prepEndpoint('users/cert');
    return this.http.post(certUrl, req, httpOptions);
  }

  // Other utility functions
  // 1. Store user data in LocalStorage
  storeUserData(ptoken, stoken, userNoPW) {
    localStorage.setItem('ptoken', ptoken);
    localStorage.setItem('stoken', stoken);
    localStorage.setItem('userNoPW', JSON.stringify(userNoPW));
    this.ptoken = ptoken;
    this.stoken = stoken;
    this.userNoPW = userNoPW;
  }

  // 2. Delete user info in logout
  logout() {
    this.ptoken = null;
    this.stoken = null;
    this.userNoPW = null;
    localStorage.removeItem('ptoken');
    localStorage.removeItem('stoken');
    localStorage.removeItem('userNoPW');
  }

  // 3. Check loggedIn state using JWT
  loggedIn() {
    return !this.jwtHelper.isTokenExpired(this.ptoken);
  }

  // 4. Generate one-time key
  getKey(ctime, stoken) {
    let md = forge.md.sha256.create();
    md.update(ctime + stoken);
    const key = md.digest().toHex();
    return key;
  }

  // 5. Generate one-time auth
  computeAuth(ctime, stoken) {
    let md = forge.md.sha256.create();
    md.update(ctime + stoken);
    return md.digest().toHex();
  }

  // 6. Store certificate
  storeCert(cert, caCert) {
    localStorage.setItem('cert', cert);
    localStorage.setItem('caCert', caCert);
  }
}


