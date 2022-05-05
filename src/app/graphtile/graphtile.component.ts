import {Component, Input, OnInit} from '@angular/core';


export interface Tile {
  color: string;
  text: string;
  title:string;
}


@Component({
  selector: 'app-graphtile',
  templateUrl: './graphtile.component.html',
  styleUrls: ['./graphtile.component.css']
})
export class GraphtileComponent implements OnInit {
  @Input("data") tiles:Tile[]=[];
  @Input("width") width:string="300px";
  @Input("margin") margin:string="30px";

  constructor() { }

  ngOnInit(): void {
  }

}
