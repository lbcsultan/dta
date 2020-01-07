import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  age: number;
  ptoken: any;  // Public token
  stoken: any;  // Secret token
  ctime: any;   // Client current time
  auth: any;    // One-time auth info

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ctime = new Date().getTime().toString();
    this.ptoken = localStorage.getItem('ptoken');
    this.stoken = localStorage.getItem('stoken');
    this.auth = this.authService.computeAuth(this.ctime, this.stoken);

    this.authService.getProfile(this.ptoken, this.ctime, this.auth).subscribe(profile => {
      this.name = profile.userNoPW.name;
      this.username = profile.userNoPW.username;
      this.email = profile.userNoPW.email;
      this.age = profile.userNoPW.age;
    }, err => {
      console.log(err);
      this.authService.logout();
      this.router.navigate(['login']);
      return false;
    });
  }
}
