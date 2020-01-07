import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userString: string;
  name: string;
  ptoken: string;
  stoken: string;
  certPem: string;
  caCertPem: string;

  constructor() { }

  ngOnInit() {
    this.userString = localStorage.getItem('userNoPW');
    this.name = JSON.parse(this.userString).name;
    this.ptoken = localStorage.getItem('ptoken');
    this.stoken = localStorage.getItem('stoken');
    this.certPem = localStorage.getItem('cert');
    this.caCertPem = localStorage.getItem('caCert');
  }

}
