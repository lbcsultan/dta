import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  name: string;
  username: string;
  email: string;
  age: number;
  ptoken: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ptoken = localStorage.getItem('ptoken');

    this.authService.getBlog().subscribe(blog => {
      this.name = blog.user.name;
      this.username = blog.user.username;
      this.email = blog.user.email;
      this.age = blog.user.age;
    }, err => {
      console.log(err);
      return false;
    });

  }

}
