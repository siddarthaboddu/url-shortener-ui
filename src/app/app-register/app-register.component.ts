import { Component, OnInit } from '@angular/core';
import { Properties } from '../properties';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent implements OnInit {
  APP_NAME : String = Properties.APP_NAME; 
  
  userForm: User;
  isRegisterSuccessful: boolean = undefined;

  constructor(private router :Router, private authService :AuthService) { }

  ngOnInit() {
    this.userForm = new User();
  }

  register(){
    if(this.userForm.firstName && this.userForm.lastName && this.userForm.email && this.userForm.password){
        this.authService.register(this.userForm).then((isRegisterSuccessful)=>{
          this.isRegisterSuccessful = isRegisterSuccessful;
        });
    }
  }

}
