import { Component, OnInit } from '@angular/core';
import { Properties } from './../properties';
import { Router } from '@angular/router';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { AuthService } from '../services/auth-service.service';
import { NotificationService } from '../services/notification.service';
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

  constructor(private router :Router, private authService :AuthService, private notificationService: NotificationService) { }

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
        if(response == "SUCCESS"){
          this.router.navigateByUrl('/home');
          this.notificationService.triggerNotification("Login Successful","success");
        }
        // else{
        //   this.wrongCredentials = true;
        //   this.notificationService.triggerNotification("Login Failed, invalid credentials", "error");
        // }
      }).catch(errorMsg=>{
        if(errorMsg == "BAD_CREDENTIALS"){
          this.notificationService.triggerNotification("Login Failed, invalid credentials", "error");
        }
        if(errorMsg == "ERROR_EXPERIENCED"){
          this.notificationService.triggerNotification("Error Experienced", "error");
        }
      });
    }
  }
}
