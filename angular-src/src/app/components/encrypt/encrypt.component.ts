import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import * as forge from 'node-forge';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent implements OnInit {

  plaintext: string;  // User input
  ctime: any;         // Client current time
  ptoken: any;        // Public token
  stoken: any;        // Secret token
  key: any;           // Generated one-time secret key
  encrypted: any;     // Ciphertext
  decrypted: any;     // Deciphered plaintext

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onEncryptSubmit() {
    this.ctime = new Date().getTime().toString();
    this.ptoken = localStorage.getItem('ptoken');
    this.stoken = localStorage.getItem('stoken');
    this.key = this.authService.getKey(this.ctime, this.stoken);
    this.encrypted = this.authService.getEncrypt(this.plaintext, this.key);

    this.authService.encryptedMessage(this.encrypted, this.ctime, this.ptoken).subscribe(data => {
      if (data.decrypted) {
        this.decrypted = forge.util.decodeUtf8(data.decrypted.data);
      }
    });
  }

}
