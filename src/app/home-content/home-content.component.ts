import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor(private notificationService: NotificationService) {
   }

  ngOnInit() {
  }

  triggerNotification(){
    this.notificationService.triggerNotification("trigger notitication");
  }

}
