import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';
import { NotificationService } from '../services/notification.service';
import { Url } from '../models/url';
import { Properties } from '../properties';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  APP_NAME : String = Properties.APP_NAME;

  fetchingShortenedURL: boolean = false;

  originalUrl: String = "";
  shortUrl: String;
  shortUrlFetchingStatus: String;

  listOfUrls: Url[] = [];
  
  constructor(private notificationService: NotificationService, private urlService: UrlService) {
   }

  ngOnInit() {
  }

  shortenFreeUrl(url: String){

    if(!this.urlService.validUrl(url)){
      this.notificationService.triggerNotification("invalid URL","error");
      return;
    }

    this.fetchingShortenedURL = true;
    this.notificationService.triggerNotification("Generating short Url", "default");
    this.urlService.freeShortenUrl(url).then(data=>{
      console.log("short url : ",data.shortUrl);
      this.shortUrlFetchingStatus = "SUCCESSFUL";
      this.notificationService.triggerNotification("Short URL : "+data.shortUrl, "success");
      this.notificationService.triggerNotification("free Short URLs left for today : "+data.usageLeft, "info" )
      
      let urlDetail: Url = new Url();
      urlDetail.originalUrl = url;
      urlDetail.shortUrl = data.shortUrl;

      this.listOfUrls = [urlDetail, ...this.listOfUrls];

      console.log(this.listOfUrls);

    }).catch((error)=>{
      console.error(error.message);
      if(error.message == "BANDWIDTH_LIMIT_EXCEEDED"){
        this.shortUrlFetchingStatus = "BANDWIDTH_LIMIT_EXCEEDED"
        this.notificationService.triggerNotification("maximum free URLs per day is exceeded, signup for more URLs","warning")
      }
      else{
        this.shortUrlFetchingStatus = "INTERNAL_SERVER_ERROR";
        this.notificationService.triggerNotification("failed to generate Short URL","error");
      }
    }).finally(()=>{
      this.fetchingShortenedURL=false;
    });
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

  removeUrlFromList(index: number): void{
    if(index>-1)
      this.listOfUrls.splice(index,1);
  }
}
