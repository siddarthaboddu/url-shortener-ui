import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { UrlService } from '../services/url.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-short-url-redirect',
  templateUrl: './short-url-redirect.component.html',
  styleUrls: ['./short-url-redirect.component.css']
})
export class ShortUrlRedirectComponent implements OnInit {

  shortCode :string;

  constructor(private route :ActivatedRoute, 
    @Inject(DOCUMENT) private document: Document,
    private urlService :UrlService,
    private notificationService :NotificationService) { }

  ngOnInit(): void {
    this.shortCode = this.route.snapshot.params['shortCode'];

    this.redirectToLongUrl(this.shortCode);
  }

  async redirectToLongUrl(shortCode :string){
    this.urlService.getLongUrl(shortCode)
    .then(response=>{
        console.log("long url response: ",response);
        this.redirectToUrl(response.longUrl);
      }
    ).catch(error=>{
      console.log(error);
      this.notificationService.triggerNotification("ERROR Encountered","error");
    })
  }

  redirectToUrl(url :string){
    this.document.location.href = url;
  }

}
