import * as d3 from 'd3';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
} from '@angular/core';
import { D3TooltipComponent } from './d3-tooltip.component';

@Injectable()
export class D3TooltipService {

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  /**
   * This method returns a function that can be called with d3.Selection.call(). It adds
   * a tooltip/popover to the selection's elements which instantiates and inserts a component
   * specified by the first parameter.
   * 
   * @param component The component class to insert into the tooltip
   * @param inputsFactory A function which returns an object for input values to the component
   * @param options Options for the returned tooltip function
   */
  createFromComponent<T = any>(
    component: any,
    inputsFactory: Function = (d?) => { return {}; },
    outputsFactory: Function = () => { return {}; },
    options: ITooltipOptions = Object.assign({}, DEFAULT_OPTIONS)
  ): (selection) => void {
    let d3TooltipService = this;
    return function (selection) {

      // the timer id for the timer set to open the tooltip
      let openDelayTimeout;
      let offDelayTimeout;

      // component reference to the opened tooltip if there is one
      let openTooltipRef: ComponentRef<D3TooltipComponent>;
      let elementThatTriggeredTooltip: Element;
      
      // object which stores the coordinates to anchor the tooltip
      let position: ITooltipPosition;
      
      // the intermittent event handler for window mousemoves,
      // added when options.location is 'mouse'
      let mousemove = (event: MouseEvent) => {
        position.top = event.pageY;
        position.left = event.pageX;
      };

      // add the d3 handlers
      selection
        // MOUSEENTER
        .on('mouseenter.ngx_d3_tooltip', function(d: T) {

          // Cache the element
          let el = this as Element;

          // Check if this tooltip is already open.
          // If so, abort removal and leave.
          if (el === elementThatTriggeredTooltip) {
            clearTimeout(offDelayTimeout);
            return;
          }

          // Remove any previous mousemove listener
          window.removeEventListener('mousemove', mousemove);

          // Reset the previous position
          position = {
            top: 0,
            left: 0
          };
          
          // Get the anchor point in the document:

          // 'mouse'
          if (options.location === 'mouse') {
            
            // set initial coords from mouseenter event
            mousemove(d3.event);

            // update coords to open with as mouse moves within element
            window.addEventListener('mousemove', mousemove);
          
            // element
          } else if (options.location === 'element') {

            // use the bounding rect of the element to set the position
            let elDimensions = el.getBoundingClientRect();
            position.left = elDimensions.left + elDimensions.width / 2;
            position.top = elDimensions.top + elDimensions.height / 2;

          }

          // Clear any previous timer to open a popup and start a new one
          if (openDelayTimeout) {
            clearTimeout(openDelayTimeout);
          }
          openDelayTimeout = setTimeout(() => {
            
            // Remove the mousemove listener
            window.removeEventListener('mousemove', mousemove);

            // Remove any old tooltip hanging around
            if (openTooltipRef) {
              d3TooltipService.removeTooltip(openTooltipRef);
            }
            
            // Show the tooltip
            openTooltipRef = d3TooltipService.showTooltip(position, component, inputsFactory(d), outputsFactory(), options);

            // Store the element for comparison in mouseleave
            elementThatTriggeredTooltip = el;

            // Listen for mouseenter on the tooltip to prevent closing it
            let openTooltipEl = d3TooltipService.getDomElementFromComponentRef(openTooltipRef);
            openTooltipEl
              .addEventListener('mouseenter', () => {
                clearTimeout(offDelayTimeout);
              });
            openTooltipEl
              .addEventListener('mouseleave', () => {
                offDelayTimeout = setTimeout(() => {
                  d3TooltipService.removeTooltip(openTooltipRef);
                  openTooltipRef = null;
                  elementThatTriggeredTooltip = null;
                }, options.offDelay);
              });

          }, options.delay);
        })
        .on('mouseleave.ngx_d3_tooltip', function(d) {

          // Clear any tracking
          window.removeEventListener('mousemove', mousemove);
          clearTimeout(openDelayTimeout);

          // If this is the element which is being left, initiate
          // removal. This may be cancelled by mouse entering tooltip
          if (openTooltipRef && elementThatTriggeredTooltip === this) {
            offDelayTimeout = setTimeout(() => {
              d3TooltipService.removeTooltip(openTooltipRef);
              openTooltipRef = null;
              elementThatTriggeredTooltip = null;
            }, options.offDelay);
          }
          
        });
    };
  }

  showTooltip(position: ITooltipPosition, component: any, inputs: any, outputs: any, options: ITooltipOptions): ComponentRef<D3TooltipComponent> {
    // credit: https://medium.com/@caroso1222/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6
    // 1. Create a component reference from the component 
    const componentRef = this.cfr
      .resolveComponentFactory(D3TooltipComponent)
      .create(this.injector);

    // 2. Add any inputs and outputs
    const instance = componentRef.instance;
    instance.position = position;
    instance.options = options;
    instance.component = component;
    instance.inputs = inputs;
    instance.outputs = outputs;
    instance.loadComponent();

    // 3. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 4. Get DOM element from component
    const domElem = this.getDomElementFromComponentRef(componentRef);

    // 5. Append DOM element to the body
    document.body.appendChild(domElem);

    return componentRef;
  }

  removeTooltip(tooltipRef: ComponentRef<D3TooltipComponent>) {
    tooltipRef.instance.isVisible = false;
    setTimeout(() => {
      this.appRef.detachView(tooltipRef.hostView);
      tooltipRef.destroy();
    }, 1000);
  }

  createFromTemplate(templateString: string) {

  }

  private getDomElementFromComponentRef(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }

}

export interface ITooltipPosition {
  top: number;
  left: number;
}

export interface ITooltipOptions {
  // How long before tooltip appears
  delay: number;
  // How long after mouseout the tooltip disappears
  offDelay: number;
  // Where the tooltip is anchored (not to be confused with position)
  location: 'mouse' | 'element';
  // The direction from the anchor that the tooltip opens up from
  position: 'auto' | 'top' | 'left' | 'bottom' | 'right' | 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
  // Additional classes added to the visible tooltip element.
  cssClasses?: string;
};

export const DEFAULT_OPTIONS: ITooltipOptions = {
  delay: 1000,
  offDelay: 1000000,
  location: 'mouse',
  position: 'topRight',
  cssClasses: ''
};
