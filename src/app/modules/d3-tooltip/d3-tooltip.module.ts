import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3TooltipComponent } from './d3-tooltip.component';
import { D3TooltipService } from './d3-tooltip.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [D3TooltipComponent],
  providers: [D3TooltipService],
  exports: [D3TooltipComponent]
})
export class D3TooltipModule { }
