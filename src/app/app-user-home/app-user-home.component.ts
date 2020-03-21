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
  
  urlId :any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  populateUrlDetails($event){
    console.log("received event ",$event);
    this.urlId = $event;
  }

}
