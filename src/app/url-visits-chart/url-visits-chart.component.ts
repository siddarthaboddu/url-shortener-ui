import { Component, OnInit } from '@angular/core';
import { graphData } from './data';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-url-visits-chart',
  templateUrl: './url-visits-chart.component.html',
  styleUrls: ['./url-visits-chart.component.css']
})
export class UrlVisitsChartComponent implements OnInit {

  // constructor() { }
  whichGraph :string;

  interpolation = shape.curveLinear;

  ngOnInit(): void {
    this.showGraph("bar-graph");
  }


  single: any[];
  multi: any[];

  view: any[] = [innerWidth*(55/100), 200];

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
