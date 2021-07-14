import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { Sub3Component } from './sub3/sub3.component';
import { Sub4Component } from './sub4/sub4.component';
import { Sub5Component } from './sub5/sub5.component';


@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    Sub3Component,
    Sub4Component,
    Sub5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
