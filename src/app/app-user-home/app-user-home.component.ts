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

  links: Url[];

  constructor(private urlService: UrlService, private notificationService: NotificationService) { }

  ngOnInit() {
  }

  fetchLinks() {
    this.urlService.fetchAllUrls().then((data)=>{
      this.links = data;
    }).catch(error=>{
      this.notificationService.triggerNotification("Error encountered", "error");
      this.links = [];
    });
  }

}
