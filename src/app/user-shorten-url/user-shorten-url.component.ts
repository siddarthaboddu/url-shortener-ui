import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserShortenUrlDialogComponent } from '../user-shorten-url-dialog/user-shorten-url-dialog.component';
import { UrlService } from '../services/url.service';
import { NotificationService } from '../services/notification.service';
import { Url } from '../models/url';
import { UserShortenUrlResponseDialogComponent } from '../user-shorten-url-response-dialog/user-shorten-url-response-dialog.component';

@Component({
  selector: 'app-user-shorten-url',
  templateUrl: './user-shorten-url.component.html',
  styleUrls: ['./user-shorten-url.component.css']
})
export class UserShortenUrlComponent implements OnInit {

  loading :boolean;

  userShortenUrlFormDialogRef :MatDialogRef<UserShortenUrlDialogComponent>;
  userShortenUrlResponseDialogRef :MatDialogRef<UserShortenUrlResponseDialogComponent>;

  constructor(public dialog: MatDialog,
    private urlService :UrlService,
    private notificationService :NotificationService) { }

  ngOnInit(): void {
  }

  openShortenUrlFormDialog(){
    this.userShortenUrlFormDialogRef = this.dialog.open(UserShortenUrlDialogComponent, {
      width: '500px'
    });

    this.userShortenUrlFormDialogRef.componentInstance.submitUrlEvent.subscribe(($event)=>{
      console.log("event back to parent ,: ", $event);
      console.log("event back to parent ,: ", $event);
      console.log("event back to parent ,: ", $event);
      this.userShortenUrl($event);
    });

    this.userShortenUrlFormDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openShortUrlResponseDialog(urlResponse :Url){
    this.userShortenUrlResponseDialogRef = this.dialog.open(UserShortenUrlResponseDialogComponent, {
      width: '500px',
      data: urlResponse
    });

    this.userShortenUrlResponseDialogRef.afterClosed().subscribe(result=>{
      console.log("url response dialog : ", result);
    });
  }

  userShortenUrl(urlForm :Url){
    if(!this.urlService.validUrl(urlForm.longUrl)){
      this.notificationService.triggerNotification("invalid URL", "error");
      return;
    }
    this.loading = true;
    this.notificationService.triggerNotification("Generating short Url", "default");
    
    let urlResponseFromModal;
    this.urlService.userShortenUrl(urlForm).then((urlResponse)=>{
      console.log("component response: ",urlResponse);

      // this.openShortUrlResponseDialog(urlResponse);
      urlResponseFromModal = urlResponse;
    })
    .catch(error=>{
      console.log("component error: ",error);
    })
    .finally(()=>{
      setTimeout(()=>{
          this.loading = false;

          if(urlResponseFromModal){
            this.userShortenUrlFormDialogRef.close();
            this.openShortUrlResponseDialog(urlResponseFromModal);
          }
          else{
            this.notificationService.triggerNotification("ERROR Experienced, please try again later", "error");
          }

        }, 500);
    });
  }



}
