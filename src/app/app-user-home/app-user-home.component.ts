import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-app-user-home',
  templateUrl: './app-user-home.component.html',
  styleUrls: ['./app-user-home.component.css']
})
export class AppUserHomeComponent implements OnInit {

  links: [];

  constructor(private urlService: UrlService) { }

  ngOnInit() {
  }

  fetchLinks(){
    this.urlService.fetchAllLinks().then((data)=>{
      this.links = data;
    });
  }

}
