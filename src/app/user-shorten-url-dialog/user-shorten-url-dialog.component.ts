import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Url } from '../models/url';
import { UrlService } from '../services/url.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-user-shorten-url-dialog',
  templateUrl: './user-shorten-url-dialog.component.html',
  styleUrls: ['./user-shorten-url-dialog.component.css']
})
export class UserShortenUrlDialogComponent implements OnInit {

  urlForm :Url;
  isPasswordEnabled :boolean;
  hide :boolean;
  loading :boolean;

  @Output() submitUrlEvent :EventEmitter<Url> = new EventEmitter<Url>();


  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<UserShortenUrlDialogComponent>, 
    private urlService :UrlService,
    private notificationService :NotificationService) {
      this.urlForm = new Url();
      this.isPasswordEnabled = false;
      this.hide = true;
      this.loading = false;
    }

  onNoClick(): void {
    this.dialogRef.close(this.urlForm);
  }

  onChange($event: MatSlideToggleChange) {
    console.log($event);
    if($event.checked == true){
      this.urlForm.isPasswordProtected = true;
      this.urlForm.password = "";
      this.isPasswordEnabled = true;
    }
    else{
      this.urlForm.password = "";
      this.urlForm.isPasswordProtected = false;
      this.isPasswordEnabled = false;
    }
  }

  submit(urlForm :Url){
    if(!this.urlService.validUrl(this.urlForm.longUrl)){
      this.notificationService.triggerNotification("invalid URL", "error");
      return;
    }
    this.submitUrlEvent.emit(urlForm);
    console.log("emmited from child compoenent: ", urlForm);
    // this.onNoClick();
  }

 

}
