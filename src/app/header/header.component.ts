import { Component, OnInit } from '@angular/core';
import { Properties } from "./../properties";
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  APP_NAME : String = Properties.APP_NAME;

  authService: AuthService;
  
  constructor(private authServicePrivate: AuthService) { 
    this.authService = authServicePrivate;
  }

  ngOnInit() {
  }

}
