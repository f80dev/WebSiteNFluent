import {Component, Input, OnInit} from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {

  @Input("data") data:any;
  svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor() { }

  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
        .append("svg")
        .attr("width", this.width + (this.margin * 2))
        .attr("height", this.height + (this.margin * 2))
        .append("g")
        .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  ngOnInit(): void {
    this.createSvg();

  }

}
