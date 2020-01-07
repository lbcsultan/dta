import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import * as forge from 'node-forge';

const pki = forge.pki;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  username: string;
  password1: string;
  password2: string;
  password: string;
  age: number;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {

    // Get Server certificate
    const caCertPem = localStorage.getItem('caCert');
    const caCert = pki.certificateFromPem(caCertPem);
    const caPublicKey = caCert.publicKey;

    // Check two password inputs
    if (this.password1 !== this.password2) {
      this.flashMessage.show('Two password inputs are not equal', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Generate new user info
    const userInfo = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password1,
      age: this.age
    };

    const userInfoJson = JSON.stringify(userInfo);

    // Check all input fields
    if (!this.validateService.validateRegister(userInfo)) {
      this.flashMessage.show('Fill out all required fields!', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Validate email address
    if (!this.validateService.validateEmail(userInfo.email)) {
      this.flashMessage.show('Use correct email address!', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Encrypt Login Info with Server's public key
    let key = forge.random.getBytesSync(16); // Random Session Key for AES encryption
    let cipher = forge.cipher.createCipher('AES-ECB', key);
    cipher.start();
    cipher.update(forge.util.createBuffer(userInfoJson, 'binary'));
    cipher.finish();
    let ciphertext = cipher.output;  // Encrypted userInfo
    let ciphertextHex = forge.util.bytesToHex(ciphertext);
    let encryptedKey = caPublicKey.encrypt(key, 'RSA-OAEP');  // PublicKey-encrypted session key
    let encryptedKeyHex = forge.util.bytesToHex(encryptedKey);

    // Encrypted Login Info
    const register = {
      ciphertextHex: ciphertextHex,
      encryptedKeyHex: encryptedKeyHex
    }

    // Register New User
    this.authService.registerUser(register).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });

  }
}
