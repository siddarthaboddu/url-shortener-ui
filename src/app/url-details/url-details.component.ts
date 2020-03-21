import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.css']
})
export class UrlDetailsComponent implements OnInit, OnChanges {

  @Input() urlId :any;

  constructor() { }

  ngOnInit(): void {
    this.populateUrlDetails(this.urlId);
  }

  ngOnChanges(changes :SimpleChanges){
    console.log(changes);
    this.populateUrlDetails(this.urlId);
  }

  populateUrlDetails(id :any){
    console.log(id);
  }

}
