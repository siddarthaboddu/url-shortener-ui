import { Component, OnInit } from '@angular/core';
import { Properties } from "./../properties";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  APP_NAME : String = Properties.APP_NAME;

  constructor() { }

  ngOnInit() {
  }

}
