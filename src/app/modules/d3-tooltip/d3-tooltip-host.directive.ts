import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[d3TooltipHost]'
})
export class D3TooltipHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
