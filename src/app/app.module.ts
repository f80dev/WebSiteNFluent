import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import { CursorComponent } from './cursor/cursor.component';
import { GraphtileComponent } from './graphtile/graphtile.component';
import { ScatterComponent } from './scatter/scatter.component';

@NgModule({
  declarations: [
    AppComponent,
    CursorComponent,
    GraphtileComponent,
    ScatterComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatGridListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
