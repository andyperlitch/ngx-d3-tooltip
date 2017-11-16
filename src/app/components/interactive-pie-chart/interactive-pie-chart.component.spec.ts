import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivePieChartComponent } from './interactive-pie-chart.component';

describe('InteractivePieChartComponent', () => {
  let component: InteractivePieChartComponent;
  let fixture: ComponentFixture<InteractivePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractivePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractivePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
