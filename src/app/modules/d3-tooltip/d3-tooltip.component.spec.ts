import { Component, Input, Output, NgModule, EventEmitter, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { D3TooltipHostDirective } from './d3-tooltip-host.directive';
import { D3TooltipComponent } from './d3-tooltip.component';

const TEST_TITLE = 'test title';


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

@NgModule({
  entryComponents: [TestTooltipComponent],
  declarations: [TestTooltipComponent]
})
class TestTooltipModule {}

describe('D3TooltipComponent', () => {
  let component: D3TooltipComponent;
  let fixture: ComponentFixture<D3TooltipComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let outputSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestTooltipModule],
      declarations: [ D3TooltipComponent, D3TooltipHostDirective ]
    })
    .compileComponents();

    outputSpy = jasmine.createSpy('out');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3TooltipComponent);
    component = fixture.componentInstance;
    component.component = TestTooltipComponent;
    component.position = {
      top: 100,
      left: 100
    };
    component.options = {};
    component.inputs = { title: TEST_TITLE };
    component.outputs = { out: outputSpy };
    component.loadComponent();
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take inputs', () => {
    let actual = (de.query(By.css('h3')).nativeElement as HTMLElement).textContent;
    expect(actual).toBe(TEST_TITLE);
  });

  it('should take outputs as subscribe listeners', () => {
    let button = de.query(By.css('.click-button'));
    button.triggerEventHandler('click', {});
    expect(outputSpy).toHaveBeenCalledWith('boop');
  });

  it('should start without the visibility class', () => {
    let ttEl = de.query(By.css('.ngx-d3-tooltip'));
    expect(ttEl.classes).not.toContain('ngx-d3-tooltip_visible');
  });

  it('should add the visibility class after a brief timeout', fakeAsync(() => {
    let ttEl = de.query(By.css('.ngx-d3-tooltip'));
    tick(1);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(ttEl.classes).toContain('ngx-d3-tooltip_visible');
    });
  }));

});
