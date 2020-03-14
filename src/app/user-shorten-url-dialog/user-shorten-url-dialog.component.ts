import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Url } from '../models/url';

@Component({
  selector: 'app-user-shorten-url-dialog',
  templateUrl: './user-shorten-url-dialog.component.html',
  styleUrls: ['./user-shorten-url-dialog.component.css']
})
export class UserShortenUrlDialogComponent implements OnInit {

  urlForm :Url;
  isPasswordEnabled :boolean;
  hide :boolean;

  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<UserShortenUrlDialogComponent>) {
      this.urlForm = new Url();
      this.isPasswordEnabled = false;
      this.hide = true;
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

}
