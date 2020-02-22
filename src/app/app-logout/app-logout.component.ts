import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-app-logout',
  templateUrl: './app-logout.component.html',
  styleUrls: ['./app-logout.component.css']
})
export class AppLogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigateByUrl("/"); 
    this.notificationService.triggerNotification("Logout successful", "success");
  }

}
