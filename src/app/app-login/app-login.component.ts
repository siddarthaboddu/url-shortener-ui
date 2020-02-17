import { Component, OnInit } from '@angular/core';
import { Properties } from './../properties';
@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  APP_NAME : String = Properties.APP_NAME;
  constructor() { }

  ngOnInit() {
  }

}
