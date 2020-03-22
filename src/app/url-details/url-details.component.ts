import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Url } from '../models/url';
import { UrlService } from '../services/url.service';
import { timingSafeEqual } from 'crypto';
import { Properties } from '../properties';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.css']
})
export class UrlDetailsComponent implements OnInit, OnChanges {

  @Input() urlId :any;

  urlDetails: Url;
  fetchingUrlDetails: boolean;

  SHORT_URL_PREFIX :string = Properties.SHORT_URL_PREFIX

  constructor(private urlService :UrlService, private notificationService :NotificationService) { }

  ngOnInit(): void {
    if(this.urlId)
      this.populateUrlDetails(this.urlId);
  }

  ngOnChanges(changes :SimpleChanges){
    console.log(changes);
    if(this.urlId)
      this.populateUrlDetails(this.urlId);
  }

  populateUrlDetails(id :any){
    console.log("populating Url Details for Url Id", id);
    this.fetchingUrlDetails = true;
    this.urlService.fetchUrlDetails(id)
    .then(response=>{
      console.log(response);
      this.urlDetails = response;
    })
    .catch(error=>{
      console.error(error);
    })
    .finally(()=>{
      setTimeout(()=>{
        this.fetchingUrlDetails = false;
      },500)
    })
  }


  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.notificationService.triggerNotification("Copied URL to clipboard")
  }


}
