import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as forge from 'node-forge';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss']
})
export class MacComponent implements OnInit {

  plaintext: string;    // User input plaintext
  ctime: any;           // Client current time
  ptoken: any;          // Public token
  stoken: any;          // Secret token
  mac: any;             // Mac value
  key: any;             // One-time secret key
  msg: string;          // Server reply message

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onMacSubmit() {
    this.ctime = new Date().getTime().toString();
    this.ptoken = localStorage.getItem('ptoken');
    this.stoken = localStorage.getItem('stoken');
    this.key = this.authService.getKey(this.ctime, this.stoken);
    const plaintextUtf8 = forge.util.encodeUtf8(this.plaintext);
    this.mac = this.authService.getMac(plaintextUtf8, this.key);

    this.authService.macMessage(plaintextUtf8, this.ctime, this.ptoken, this.mac).subscribe(data => {
      console.log(data);
      this.msg = data.msg;
    });
  }

}
