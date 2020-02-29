import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { multi } from './data';

@Component({
  selector: 'app-all-visits-chart',
  templateUrl: './all-visits-chart.component.html',
  styleUrls: ['./all-visits-chart.component.css']
})
export class AllVisitsChartComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }


  single: any[];
  multi: any[];

  view: any[] = [innerWidth, 350];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Visits';

  colorScheme = {
    domain: ['#c2185b']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }
}
