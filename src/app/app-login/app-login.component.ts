import { Component, OnInit } from '@angular/core';
import { Properties } from './../properties';
import { Router } from '@angular/router';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { AuthService } from '../services/auth-service.service';
@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  APP_NAME : String = Properties.APP_NAME; 

  email :String;
  password :String;
  
  wrongCredentials: boolean;

  constructor(private router :Router, private authService :AuthService) { }

  ngOnInit() {
  }

  login(){
    console.log("login interpolation email ",this.email," and password {}",this.password);
    console.log(this.authService);
    this.wrongCredentials = false;
    if(this.email && this.password){
      console.log("logging in");
      this.authService.login(this.email, this.password).then((response)=>{
        console.log(response);
        if(response == true)
          this.router.navigateByUrl('/home');
        else{
          this.wrongCredentials = true;
        }
      });
    }
  }
}
