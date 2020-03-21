import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Url } from '../models/url';
import { UrlService } from '../services/url.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.css']
})
export class UrlDetailsComponent implements OnInit, OnChanges {

  @Input() urlId :any;

  urlDetails: Url;
  fetchingUrlDetails: boolean;

  constructor(private urlService :UrlService) { }

  ngOnInit(): void {
    this.populateUrlDetails(this.urlId);
  }

  ngOnChanges(changes :SimpleChanges){
    console.log(changes);
    this.populateUrlDetails(this.urlId);
  }

  populateUrlDetails(id :any){
    console.log("populating Url Details for Url Id", id);
    this.fetchingUrlDetails = true;
    this.urlService.fetchUrlDetails(id)
    .then(response=>{
      console.log(response);
      this.urlDetails = response;
    })
    .catch(error=>{
      console.error(error);
    })
    .finally(()=>{
      setTimeout(()=>{
        this.fetchingUrlDetails = false;
      },500)
    })
  }

}
