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
  
  currentUser : any;

  constructor(private authServicePrivate: AuthService) { 
    this.authService = authServicePrivate;
    let userDetails : string = localStorage.getItem("current_user");
    if(userDetails){
      console.log("user details : ",userDetails);
      this.currentUser = JSON.parse(userDetails);
    }
  }

  ngOnInit() {
  }

}
