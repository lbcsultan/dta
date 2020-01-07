import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserNoPW } from 'src/app/models/User';
import * as forge from 'node-forge';
const pki = forge.pki;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  userNoPW: UserNoPW;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  // ID/Pass login
  onLoginSubmit() {
    // Get ca certificate
    let caCertPem = localStorage.getItem('caCert');
    let caCert = pki.certificateFromPem(caCertPem);
    let caPublicKey = caCert.publicKey;

    // Build up LoginInfo
    const loginInfo = {
      username: this.username,
      password: this.password
    }
    let loginInfoJson = JSON.stringify(loginInfo);

    // Encrypt LoginInfo with CA's public key
    let key = forge.random.getBytesSync(16); // Random Session Key for AES encryption
    let cipher = forge.cipher.createCipher('AES-ECB', key);
    cipher.start();
    cipher.update(forge.util.createBuffer(loginInfoJson, 'binary'));
    cipher.finish();
    let ciphertext = cipher.output;  // Encrypted userInfo
    let ciphertextHex = forge.util.bytesToHex(ciphertext);
    let encryptedKey = caPublicKey.encrypt(key, 'RSA-OAEP');  // Encrypted session key with server's public key
    let encryptedKeyHex = forge.util.bytesToHex(encryptedKey);

    // Encrypted LoginInfo.
    const loginInfoEnc = {
      ciphertextHex: ciphertextHex, // Encrypted userInfo
      encryptedKeyHex: encryptedKeyHex // Encrypted session key with server's public key
    }

    this.authService.authenticateUser(loginInfoEnc).subscribe(data => {
      if (data.success) {

        // Recover UserInfo
        let ciphertextToHex = data.ciphertextToHex;
        let ciphertext = forge.util.hexToBytes(ciphertextToHex);
        let decipher = forge.cipher.createDecipher('AES-ECB', key);
        decipher.start();
        decipher.update(forge.util.createBuffer(ciphertext, 'binary'));
        decipher.finish();
        let recovered = decipher.output;
        let recoveredParse = JSON.parse(recovered);
        let ptoken = recoveredParse.ptoken;
        let stoken = recoveredParse.stoken;
        let userNoPW = recoveredParse.userNoPW;

        this.userNoPW = userNoPW;

        // Store Token and User Info
        this.authService.storeUserData(ptoken, stoken, userNoPW);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.router.navigate(['dashboard']);  //Logged in and Redirect to dashboard
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        this.router.navigate(['login']);  // Login failed and redirect to Login page
      }
    });
  }

  // One-click easy login using digital signature
  onLoginSigSubmit() {
    this.authService.authenticateSigUser().subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.ptoken, data.stoken, data.userNoPW);
        this.flashMessage.show('Easy login successful', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['login']);
      }
    });
  }
}
