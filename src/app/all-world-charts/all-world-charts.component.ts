import { Component, OnInit } from '@angular/core';
import { AutofillMonitor } from '@angular/cdk/text-field';

@Component({
  selector: 'app-all-world-charts',
  templateUrl: './all-world-charts.component.html',
  styleUrls: ['./all-world-charts.component.css']
})
export class AllWorldChartsComponent implements OnInit {

  chart :any = {}
  marginLeft :number = 20;

  constructor() {
  this.chart.type = "GeoChart";
  this.chart.title= "World Map";
  this.chart.data = [
    ['India', 20],
    ['Japan', 30],
    ["Pakistan", 5],
    ["Australia", 6],
    ["China", 70]
  ];
  this.chart.options = {
    colors: ['#009688'],
    is3D: true,
    animation: {
      duration: 1000,
      easing: 'out',
    },
    backgroundColor: '#374046',
    legend: {
      position: "top",
      alignment: "",
      textStyle: {
              color: "#999"
          }
    },
    height: innerWidth*(5/10),
    }
    ;

    this.marginLeft = innerWidth * (0.1/1);
  }

  ngOnInit(): void {
    // marginLeft
  }

  onResize(event){
    this.chart.options.width = event.target.innerWidth * (0.5/1);
    this.marginLeft = event.target.innerWidth * (0.2/1);
  }

}
