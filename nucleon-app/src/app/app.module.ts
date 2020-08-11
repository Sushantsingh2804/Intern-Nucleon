import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {  CustomInputDirective } from "./Custom-Input/Custom-Input.directive";

@NgModule({
  declarations: [
    AppComponent,
    CustomInputDirective

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
