import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliceTooltipComponent } from './slice-tooltip.component';

describe('SliceTooltipComponent', () => {
  let component: SliceTooltipComponent;
  let fixture: ComponentFixture<SliceTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliceTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliceTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
