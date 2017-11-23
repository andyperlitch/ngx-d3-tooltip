import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3TooltipComponent } from './d3-tooltip.component';
import { D3TooltipService } from './d3-tooltip.service';
import { D3TooltipHostDirective } from './d3-tooltip-host.directive';

export { D3TooltipHostDirective } from './d3-tooltip-host.directive';
export { D3TooltipComponent } from './d3-tooltip.component';
export { D3TooltipService, ITooltipOptions, ITooltipPosition } from './d3-tooltip.service';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [D3TooltipComponent],
  declarations: [D3TooltipComponent, D3TooltipHostDirective],
  providers: [D3TooltipService],
  exports: [D3TooltipComponent]
})
export class D3TooltipModule { }
