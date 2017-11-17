import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { D3TooltipModule } from './modules/d3-tooltip/d3-tooltip.module';

import { AppComponent } from './app.component';
import { InteractivePieChartComponent } from './components/interactive-pie-chart/interactive-pie-chart.component';
import { SliceTooltipComponent } from './components/slice-tooltip/slice-tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    InteractivePieChartComponent,
    SliceTooltipComponent
  ],
  imports: [
    BrowserModule,
    D3TooltipModule
  ],
  entryComponents: [SliceTooltipComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
