import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  selectedUrlId: any;

  @Output() clickEvent = new EventEmitter();

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

  
  emitUrlId(id :any){
    console.log("emitted ",id);
    this.selectedUrlId = id;
    console.log(this.selectedUrlId, "selected ur");
    this.clickEvent.emit(id);
  }
}
