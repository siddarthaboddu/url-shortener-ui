import { Component, OnInit, Input } from '@angular/core';
import { graphData } from './data';
import * as shape from 'd3-shape';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-url-visits-chart',
  templateUrl: './url-visits-chart.component.html',
  styleUrls: ['./url-visits-chart.component.css']
})
export class UrlVisitsChartComponent implements OnInit {

  @Input() urlId :any;


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

  onResize(event) {
    this.view = [event.target.innerWidth*(55/100) , 300];
  }

  single: any[];

  graphData: any[];
  graphDataDaily: any[];
  graphDataMonthly: any[];

  graphType :string;
  graphFrequency :string;

  view: any[] = [innerWidth*(55/100), 300];

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
    return this.urlService.fetchOneMonthUrlVisitsHistory(this.urlId);
  }

  fetchMonthlyDetails() :Promise<any>{
    return this.urlService.fetchOneYearUrlVisitsHistory(this.urlId);
  }
}
