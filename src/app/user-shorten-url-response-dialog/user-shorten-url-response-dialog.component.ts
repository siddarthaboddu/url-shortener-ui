import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Url } from '../models/url';
import { NotificationService } from '../services/notification.service';
import { Properties } from '../properties';


@Component({
  selector: 'app-user-shorten-url-response-dialog',
  templateUrl: './user-shorten-url-response-dialog.component.html',
  styleUrls: ['./user-shorten-url-response-dialog.component.css']
})
export class UserShortenUrlResponseDialogComponent implements OnInit {

  url :Url;

  SHORT_URL_PREFIX :string = Properties.SHORT_URL_PREFIX

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private notificationService :NotificationService) {
    console.log("data inside constructor of dialog response: ",data);
    this.url = data;
   }

  ngOnInit(): void {
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
