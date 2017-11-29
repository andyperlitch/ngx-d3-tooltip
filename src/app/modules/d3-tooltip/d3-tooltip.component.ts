import {
  ViewEncapsulation,
  ViewChild,
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  AfterViewInit,
  HostBinding
} from '@angular/core';
import { ITooltipPosition, ITooltipOptions } from './d3-tooltip.service';
import { D3TooltipHostDirective } from './d3-tooltip-host.directive';

@Component({
  selector: 'd3-tooltip',
  templateUrl: './d3-tooltip.component.html',
  styleUrls: ['./d3-tooltip.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class D3TooltipComponent implements OnInit {

  @Input()
  component: any;

  @Input()
  position: ITooltipPosition;

  @Input()
  options: ITooltipOptions;

  @Input()
  inputs: any;

  @Input()
  outputs: any;

  /**
   * Controls a class which sets the element opacity to 1 when present.
   */
  isVisible = false;

  /**
   * Element where the component gets inserted
   */
  @ViewChild(D3TooltipHostDirective)
  componentHost: D3TooltipHostDirective;


  @HostBinding('style.top')
  get cssTop() {
    return `${this.position.top}px`;
  }

  @HostBinding('style.left')
  get cssLeft() {
    return `${this.position.left}px`;
  }

  get cssClasses() {
    return `${this.options.position} ${this.options.cssClasses}`;
  }

  constructor(private cfr: ComponentFactoryResolver) {
  }

  loadComponent() {
    let componentFactory = this.cfr.resolveComponentFactory(this.component);

    let viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    Object.keys(this.inputs).forEach(k => {
      componentRef.instance[k] = this.inputs[k];
    });
    Object.keys(this.outputs).forEach(k => {
      componentRef.instance[k].subscribe(this.outputs[k]);
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 1);
  }

}
