import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { UrlService } from '../services/url.service';
import { NotificationService } from '../services/notification.service';
import { Url } from '../models/url';

@Component({
  selector: 'app-short-url-redirect',
  templateUrl: './short-url-redirect.component.html',
  styleUrls: ['./short-url-redirect.component.css']
})
export class ShortUrlRedirectComponent implements OnInit {

  shortCode :string;
  loading :boolean;
  urlForm :Url;
  isPasswordDialogVisible :boolean;
  hide :boolean;

  urlResponse :Url;

  constructor(private route :ActivatedRoute, 
    @Inject(DOCUMENT) private document: Document,
    private urlService :UrlService,
    private notificationService :NotificationService) { 
    }

  ngOnInit(): void {
    this.shortCode = this.route.snapshot.params['shortCode'];
    this.loading = true;
    this.urlForm = new Url();
    this.isPasswordDialogVisible = false;
    this.hide = true;
    this.redirectToLongUrl(this.shortCode);
  }

  async redirectToLongUrl(shortCode :string){
    this.urlService.getLongUrl(shortCode)
    .then(response=>{
        console.log("long url response: ",response);
        this.urlResponse = response;
        if(response.passwordHash){
          this.showPasswordDialog();
        }
        else{
          this.redirectToUrl(response.longUrl);
        }
      }
    ).catch(error=>{
      console.log(error);
      this.notificationService.triggerNotification("ERROR Encountered","error");
    })
  }

  redirectToUrl(url :string){
    this.document.location.href = url;
  }

  showPasswordDialog(){
    this.loading = false;
    this.isPasswordDialogVisible = true;
  }

  validatePassword(urlForm :Url){
    this.urlForm.shortUrl = this.urlResponse.shortUrl;

    console.log("validation password request",urlForm);

    this.urlService.validUrlPassword(urlForm)
    .then(response=>{
      console.log("response status :",response);
      console.log("before boolean iff : ",response.status);
      console.log("what going into if : ",Boolean(response.status));
      if(response.status == "true"){
        
        console.log(this.urlForm);
        this.notificationService.triggerNotification("Redirecting to Url", "success");
        this.redirectToUrl(this.urlResponse.longUrl);
      }
      else{
        this.notificationService.triggerNotification("Wrong Credentials", "error");
      }
    })
    .catch(error=>{
      console.log(error);
      this.notificationService.triggerNotification("ERROR Encountered","error");
    })
  }


}
