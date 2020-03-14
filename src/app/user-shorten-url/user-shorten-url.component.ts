import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserShortenUrlDialogComponent } from '../user-shorten-url-dialog/user-shorten-url-dialog.component';

@Component({
  selector: 'app-user-shorten-url',
  templateUrl: './user-shorten-url.component.html',
  styleUrls: ['./user-shorten-url.component.css']
})
export class UserShortenUrlComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openShortenUrlDialog(){
    const dialogRef = this.dialog.open(UserShortenUrlDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
