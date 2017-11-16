import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { D3TooltipModule } from './modules/d3-tooltip/d3-tooltip.module';

import { AppComponent } from './app.component';
import { InteractivePieChartComponent } from './components/interactive-pie-chart/interactive-pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    InteractivePieChartComponent
  ],
  imports: [
    BrowserModule,
    D3TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
