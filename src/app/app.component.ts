import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'url-shortener-ui';
  
  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    console.log("inside AppComponent ngOnInit() method");
    if(this.authService.isExpired()){
      console.log("inside AppComponent ngOnInit() method : isexpired is true");
      this.authService.logout();
      this.router.navigateByUrl("/");
    }  
  }
}
