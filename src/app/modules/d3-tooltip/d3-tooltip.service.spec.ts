import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import * as d3 from 'd3';
import { Component, DebugElement, ElementRef, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { D3TooltipService, ITooltipOptions } from './d3-tooltip.service';
import { D3TooltipHostDirective } from './d3-tooltip-host.directive';
import { D3TooltipComponent } from './d3-tooltip.module';

let outSpy: jasmine.Spy;
let ttOptions: ITooltipOptions;
let ins, outs;

// The example component that will be made into the tooltip
@Component({
  template: `
    <h3>{{ title }}</h3>
    <button class="click-button" (click)="out.emit('boop')">beep</button>
  `,
  selector: 'test-tooltip-component'
})
class TestTooltipComponent {
  @Input()
  title: string = 'foo';
  @Output()
  out: EventEmitter<string> = new EventEmitter<string>();
}

// The example component rendering d3
@Component({
  template: '',
  selector: 'pie-chart'
})
class PieChartComponent implements OnInit {
  constructor(private el: ElementRef, private tipService: D3TooltipService) {}
  ngOnInit(): void {    
    d3.select(this.el.nativeElement)
      .append('svg')
      .selectAll('rect')
      .data(['red', 'green', 'blue'])
      .enter()
      .append('rect')
      .attr('width', 30)
      .attr('height', 30)
      .attr('x', (d, i) => 35 * i)
      .attr('y', (d, i) => 35 * i)
      .attr('fill', d => d)
      .attr('id', d => d)
      .call(this.tipService.createFromComponent<string>(
        TestTooltipComponent,
        ins,
        outs,
        ttOptions
      ))
  }
}

// The module to import for this test suite
@NgModule({
  imports: [CommonModule],
  entryComponents: [TestTooltipComponent, D3TooltipComponent],
  declarations: [TestTooltipComponent, D3TooltipComponent, D3TooltipHostDirective]
})
class TestTooltipServiceModule { }

describe('D3TooltipService', () => {

  let testModule;
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let redSquare: SVGElement;

  let service: D3TooltipService;
  let setup;

  beforeEach(async(() => {
    outSpy = jasmine.createSpy('out');
    ttOptions = {
      delay: 246,
      offDelay: 135
    };
    ins = (color: string) => {
      return { title: color };
    };
    outs = () => {
      return { out: outSpy }
    };
    testModule = TestBed.configureTestingModule({
      providers: [D3TooltipService],
      declarations: [PieChartComponent],
      imports: [TestTooltipServiceModule]
    });
    setup = () => {
      testModule.compileComponents();
      fixture = TestBed.createComponent(PieChartComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      de = fixture.debugElement;
      redSquare = (de.nativeElement as HTMLElement).querySelector('#red') as SVGRectElement;
    };
    
  }));

  afterEach(() => {
    let allTips = document.querySelectorAll('d3-tooltip');
    for (let i = 0; i < allTips.length; i++) {
      allTips[i].remove();
    }
  });

  it('should be created', inject([D3TooltipService], (s: D3TooltipService) => {
    setup();
    service = s;
    expect(service).toBeTruthy();
  }));

  describe('the hover behavior', () => {

    describe('when location is mouse', () => {
      
      beforeEach(async(() => {
        setup();
      }));

      it('should open the tooltip after the specified time', fakeAsync(() => {
        redSquare.dispatchEvent(new MouseEvent('mouseenter'));
        expect(document.querySelectorAll('.ngx-d3-tooltip').length).toBe(0);
        tick(247);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(document.querySelectorAll('.ngx-d3-tooltip').length).toBe(1);
          redSquare.dispatchEvent(new MouseEvent('mouseleave'));
          tick(136);
          expect(document.querySelectorAll('.ngx-d3-tooltip').length).toBe(1);
          tick(1000);
          expect(document.querySelectorAll('.ngx-d3-tooltip').length).toBe(0);
        });
      }));

      it('should not open if mouseleave is called on the element before the delay time', fakeAsync(() => {
        redSquare.dispatchEvent(new MouseEvent('mouseenter'));
        expect(document.querySelectorAll('.ngx-d3-tooltip').length).toBe(0);
        setTimeout(() => {
          redSquare.dispatchEvent(new MouseEvent('mouseleave'));
          fixture.detectChanges();
        }, 200);
        tick(247);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(document.querySelectorAll('.ngx-d3-tooltip').length).toBe(0);
        });
      }));

      it('should place the tooltip at the pageY and pageX of the mouse event', fakeAsync(() => {
        redSquare.dispatchEvent(new MouseEvent('mouseenter', {
          clientX: 12,
          clientY: 10
        }));
        tick(247);
        let tt = document.querySelector('d3-tooltip') as HTMLElement;
        expect(tt.style.left).toBe('12px');
        expect(tt.style.top).toBe('10px');
      }));

      describe('when there is subsequent mousemoves on the element after mouseenter and before mouseleave but before the tooltip opens', () => {

        it('should open from the last mousemove event', fakeAsync(() => {
          redSquare.dispatchEvent(new MouseEvent('mouseenter', {
            clientX: 12,
            clientY: 10
          }));
          tick(200);
          window.dispatchEvent(new MouseEvent('mousemove', {
            clientX: 15,
            clientY: 16
          }));
          tick(1470);
          fixture.detectChanges();
          let tt = document.querySelector('d3-tooltip') as HTMLElement;
          expect(tt.style.left).toBe('15px');
          expect(tt.style.top).toBe('16px');
        }))

      });

      it('should cancel a scheduled close timer if the user hovers back on to the element', fakeAsync(() => {
        redSquare.dispatchEvent(new MouseEvent('mouseenter'));
        tick(247);
        let tt = document.querySelector('d3-tooltip');
        redSquare.dispatchEvent(new MouseEvent('mouseleave'));
        tick(100);
        redSquare.dispatchEvent(new MouseEvent('mouseenter'));
        tick(100);
        expect(document.querySelector('d3-tooltip')).toBe(tt);
      }));

      it('should cancel a scheduled close time if the user hovers over the tooltip itself', fakeAsync(() => {
        redSquare.dispatchEvent(new MouseEvent('mouseenter'));
        tick(247);
        let tt = document.querySelector('d3-tooltip');
        redSquare.dispatchEvent(new MouseEvent('mouseleave'));
        tick(100);
        tt.dispatchEvent(new MouseEvent('mouseenter'));
        tick(100);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(document.querySelector('d3-tooltip')).toBe(tt);
        });
      }));

      it('should scheduled a close time if the user unhovers over the tooltip itself', fakeAsync(() => {
        redSquare.dispatchEvent(new MouseEvent('mouseenter'));
        tick(247);
        let tt = document.querySelector('d3-tooltip');
        redSquare.dispatchEvent(new MouseEvent('mouseleave'));
        tick(135);
        tt.dispatchEvent(new MouseEvent('mouseenter'));
        tick(100);
        tt.dispatchEvent(new MouseEvent('mouseleave'));
        tick(1001 + 137);
        fixture.detectChanges();
        expect(document.querySelectorAll('d3-tooltip').length).toBe(0);
      }));

      it('should close when the scheduled close time expires after the user triggers mouseleave', fakeAsync(() => {
        redSquare.dispatchEvent(new MouseEvent('mouseenter'));
        tick(247);
        let tt = document.querySelector('d3-tooltip');
        redSquare.dispatchEvent(new MouseEvent('mouseleave'));
        tick(11137);
        fixture.detectChanges();
        expect(document.querySelectorAll('d3-tooltip').length).toBe(0);
      }));

    });

    describe('when location is element', () => {
      
      beforeEach(async(() => {
        ttOptions.location = 'element';
        setup();
      }));

      it('should put the tooltip in the center of the element', fakeAsync(() => {
        redSquare.dispatchEvent(new MouseEvent('mouseenter', {
          clientX: 12,
          clientY: 10
        }));
        tick(247);
        fixture.detectChanges();
        let tt = document.querySelector('d3-tooltip') as HTMLElement;
        let left = tt.style.left;
        let top = tt.style.top;
        window.dispatchEvent(new MouseEvent('mousemove', {
          clientX: 13,
          clientY: 16
        }));
        tick(1470);
        fixture.detectChanges();
        expect(tt.style.left).toBe(left);
        expect(tt.style.top).toBe(top);
      }));

    });

    describe('when no ins or outs are provided', () => {
      beforeEach(async(() => {
        ttOptions = undefined;
        ins = undefined;
        outs = undefined;
        setup();
      }));

      it('should work okay', fakeAsync(() => {
        redSquare.dispatchEvent(new MouseEvent('mouseenter'));
        expect(document.querySelectorAll('.ngx-d3-tooltip').length).toBe(0);
        tick(1001); // the default value is 1000
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(document.querySelectorAll('.ngx-d3-tooltip').length).toBe(1);
          redSquare.dispatchEvent(new MouseEvent('mouseleave'));
          tick(1001); // the default value is 1000
          expect(document.querySelectorAll('.ngx-d3-tooltip').length).toBe(1);
          tick(1001);
          expect(document.querySelectorAll('.ngx-d3-tooltip').length).toBe(0);
        });
      }));

    });

  });
    
});
