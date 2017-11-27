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
  title: string;
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
        (color: string) => {
          return { title: color };
        },
        () => {
          return { out: outSpy }
        },
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

  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let redSquare: SVGElement;

  let service: D3TooltipService;

  beforeEach(async(() => {
    outSpy = jasmine.createSpy('out');
    ttOptions = {
      delay: 246,
      offDelay: 135
    };
    TestBed.configureTestingModule({
      providers: [D3TooltipService],
      declarations: [PieChartComponent],
      imports: [TestTooltipServiceModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    redSquare = (de.nativeElement as HTMLElement).querySelector('#red') as SVGRectElement;
    
  }));

  it('should be created', inject([D3TooltipService], (s: D3TooltipService) => {
    service = s;
    expect(service).toBeTruthy();
  }));

  describe('the hover behavior', () => {
    
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

  });

});
