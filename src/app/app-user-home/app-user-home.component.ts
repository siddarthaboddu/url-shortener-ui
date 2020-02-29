import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';
import { Url } from '../models/url';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-app-user-home',
  templateUrl: './app-user-home.component.html',
  styleUrls: ['./app-user-home.component.css']
})
export class AppUserHomeComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }



}
