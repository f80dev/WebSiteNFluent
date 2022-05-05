import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements OnInit {
  @Input("text") text: string="";
  @Input("pretext") pretext: string="";
  @Input("rotate") rotate: boolean=true;
  @Input("cursor") cursor="|";
  @Input("speed") speed=30;


  screen_text: string="";
  position=0;
  sens: number=1;
  to_write: string="";
  handle: number=0;

  constructor() { }

  ngOnInit(): void {
    this.handle=setInterval(()=>{this.keyboard();},this.speed);
    this.to_write=this.text;
  }

  keyboard(){
    if(Math.random()<0.5)return;
    if(this.sens<0){
      this.screen_text=this.screen_text.substring(0,this.screen_text.length-1);
      if(this.screen_text.length==0)this.sens=1;
    } else {
      if(this.to_write[0]=="|"){
        this.sens=-1;
      } else {
        this.screen_text=this.screen_text+this.to_write[0];
      }
      this.to_write=this.to_write.substring(1);
      if(this.to_write.length==0){
        if(this.rotate){
          this.to_write=this.text;
        } else {
          clearInterval(this.handle);
        }
      }
    }
  }

}
