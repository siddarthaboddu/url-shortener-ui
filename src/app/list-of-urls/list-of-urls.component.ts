import { Component, OnInit, Input } from '@angular/core';
import { Url } from '../models/url';
import { UrlService } from '../services/url.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-list-of-urls',
  templateUrl: './list-of-urls.component.html',
  styleUrls: ['./list-of-urls.component.css']
})
export class ListOfUrlsComponent implements OnInit {

  urls: Url[];

  constructor(private urlService: UrlService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.fetchLinks();
  }

  fetchLinks() {
    this.urlService.fetchAllUrls().then((data)=>{
      this.urls = data;
    }).catch(error=>{
      this.notificationService.triggerNotification("Error encountered", "error");
      this.urls = [];
    });
  }

}
