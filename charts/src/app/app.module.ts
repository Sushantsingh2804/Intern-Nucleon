import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from "ng2-charts";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { MyBarChartComponent } from "./my-bar-chart/my-bar-chart.component";


const appROUTES : Routes = [
{path:'/bar-charts',component:MyBarChartComponent},
]

@NgModule({
  declarations:[
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(appROUTES),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
