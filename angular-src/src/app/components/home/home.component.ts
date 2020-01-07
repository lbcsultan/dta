import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as forge from 'node-forge';
const pki = forge.pki;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentTime: any;
  nonceHex: any;
  caCertPem: any;
  signatureHex: any;
  verified: any;
  caCommon: any;
  caOrganization: any;
  caOU: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.connectHome().subscribe(data => {
      this.currentTime = new Date(data.currentTime);  // Server current time
      this.nonceHex = data.nonceHex;
      this.caCertPem = data.caCertPem;
      this.signatureHex = data.signatureHex;

      let caCert = pki.certificateFromPem(data.caCertPem);
      let caPublicKey = caCert.publicKey;
      let signature = forge.util.hexToBytes(data.signatureHex);
      let clientTime = new Date().getTime();          // Client current time
      let diff = clientTime - data.currentTime;

      let md = forge.md.sha1.create();
      md.update(data.currentTime, 'utf8');
      md.update(data.nonceHex, 'utf8');
      let result = caPublicKey.verify(md.digest().bytes(), signature);
      if (result == true && diff < 100000) {
        this.verified = result;
        localStorage.setItem('caCert', data.caCertPem);
      }

      this.caCommon = caCert.subject.getField('CN').value;
      this.caOrganization = caCert.subject.getField('O').value;
      this.caOU = caCert.subject.getField('OU').value;
    })
  }

}
