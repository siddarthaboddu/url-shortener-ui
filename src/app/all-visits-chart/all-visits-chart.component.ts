import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';
import { UrlService } from '../services/url.service';
import { resolve } from 'dns';

@Component({
  selector: 'app-all-visits-chart',
  templateUrl: './all-visits-chart.component.html',
  styleUrls: ['./all-visits-chart.component.css']
})
export class AllVisitsChartComponent implements OnInit {

  // constructor() { }
  whichGraph :string;

  interpolation = shape.curveLinear;

  ngOnInit(): void {

    this.graphType = "bar-graph";
    this.graphFrequency = "DAILY";
    
    this.fetchDailyDetails().then(
      response => {this.graphDataDaily = response; this.showData(this.graphFrequency)}
    )

    this.fetchMonthlyDetails().then(
      response => { this.graphDataMonthly = response;}
    )


  }


  single: any[];

  graphData: any[];
  graphDataDaily: any[];
  graphDataMonthly: any[];

  graphType :string;
  graphFrequency :string;

  view: any[] = [innerWidth, 350];

  onResize(event) {
    this.view = [event.target.innerWidth , 350];
  }

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
    domain: ['#00897B']
  };

  constructor(private urlService :UrlService) {
    // Object.assign(this, {graphData});
  }

  onSelect(event) {
    console.log(event);
  }

  showGraph(graph: string){
    this.whichGraph = graph;
    this.populateGraph(graph);
  }

  populateGraph(graph: string){
    if(graph == 'bar-graph'){
      this.single = [...this.graphData];
    }
    else{
      this.single = [{
        "name" : "Visits Graph",
        "series" : [...this.graphData]
      }]
    }

    this.graphType = graph;

  }

  showData(frequency: string){
    if(frequency == 'MONTHLY'){
      this.graphData = [...this.graphDataMonthly];
    }
    else{
      this.graphData = [...this.graphDataDaily];
    }
    this.graphFrequency = frequency;
    this.showGraph(this.graphType);
  }

  fetchDailyDetails() :Promise<any>{
    return this.urlService.fetchOneMonthAllVisitsHistory();
  }

  fetchMonthlyDetails() :Promise<any>{
    return this.urlService.fetchOneYearAllVisitsHistory();
  }
}
