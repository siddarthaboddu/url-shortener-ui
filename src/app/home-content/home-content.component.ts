import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  fetchingShortenedURL: boolean = false;

  originalUrl: String = "";
  shortUrl: String;
  shortUrlFetchingStatus: String;
  
  constructor(private notificationService: NotificationService, private urlService: UrlService) {
   }

  ngOnInit() {
  }

  shortenFreeUrl(url: String){
    this.fetchingShortenedURL = true;
    this.notificationService.triggerNotification("Generating short Url", "default");
    this.urlService.freeShortenUrl(url).then(data=>{
      console.log("short url : ",data.shortUrl);
      this.shortUrlFetchingStatus = "SUCCESSFUL";
      this.notificationService.triggerNotification("Short URL : "+data.shortUrl, "success");
      this.notificationService.triggerNotification("free Short URLs left for today : "+data.usageLeft, "info" )
    }).catch((error)=>{
      console.error(error.message);
      if(error.message == "BANDWIDTH_LIMIT_EXCEEDED"){
        this.shortUrlFetchingStatus = "BANDWIDTH_LIMIT_EXCEEDED"
        this.notificationService.triggerNotification("maximum free URLs per day is exceeded","warn")
      }
      else{
        this.shortUrlFetchingStatus = "INTERNAL_SERVER_ERROR";
        this.notificationService.triggerNotification("failed to generate Short URL","error");
      }
    }).finally(()=>{
      this.fetchingShortenedURL=false;
    });
  }
}
