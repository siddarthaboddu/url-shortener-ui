import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { graphData } from './data';
import * as shape from 'd3-shape';

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
    this.showGraph("bar-graph");
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
    domain: ['#00897B']
  };

  constructor() {
    Object.assign(this, {graphData});
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
      this.single = graphData;
    }
    else{
      this.single = [{
        "name" : "Visits Graph",
        "series" : graphData
      }]
    }
  }

  showData(frequency: string){
    
  }
}
