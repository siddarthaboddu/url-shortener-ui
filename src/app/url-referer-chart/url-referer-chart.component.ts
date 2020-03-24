import { Component, OnInit } from '@angular/core';
import { refererData } from './data';

@Component({
  selector: 'app-url-referer-chart',
  templateUrl: './url-referer-chart.component.html',
  styleUrls: ['./url-referer-chart.component.css']
})
export class UrlRefererChartComponent implements OnInit {
  refererData: any[];
  view: any[] = [innerWidth*(55/100), 250];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  
  colorScheme = "cool";

  constructor() {
    Object.assign(this, { refererData });
  }

  ngOnInit(){

  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
