import {Component, OnInit} from '@angular/core';
import {Tile} from "./graphtile/graphtile.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'nFluentWeb';
  tiles: Tile[] = [
    {title:"Innovate",text: 'use NFT technology to offfer new services, generate new revenues',color: 'lightblue'},
    {title:"create NFTs",text: 'mint NFTs containing any digital asset', color: 'lightblue'},
    {title:"sell NFTs",text: 'on your store/marketplace,thanks to a distributror',  color: 'lightblue'},
    {title:"regulate NFTs",text: 'secure/control transactions, grant revenues/benefits',  color: 'lightblue'},
    {title:"track NFTs",text: 'blockchain explorers,analytics web tools',  color: 'lightblue'},
    {title:"promote NFTs",text: 'use resellers’ marketplace,awareness on social channels IG, Twttr, Discord', color: 'lightblue'},
  ];
  services:Tile[]=[
    {title:"CONSULTING SERVICES",text: "", color: 'lightgreen'},
    {title:"SMART CONTRACT SETUP",text: "", color: 'lightgreen'},
    {title:"API CONNECTION",text: "", color: 'lightgreen'},
    {title:"IGNITION & MONITORING",text: "", color: 'lightgreen'},
  ];

  xnft_position=[
    {label:"AUCTION",x:-3,y:3,logo:""},
    {label:"BENEFITS",x:2,y:3,logo:""},
    {label:"ROYALTIES",x:5,y:3,logo:""},
    {label:"GOVERNANCE",x:2,y:3,logo:""},
    {label:"CORE ATTRIBUTES",x:0,y:0,logo:""},
    {label:"CERTIFICATES",x:-5,y:-1,logo:""},
    {label:"RESALE",x:-2,y:-1,logo:""}
  ]

  ngOnInit(): void {

  }
}
