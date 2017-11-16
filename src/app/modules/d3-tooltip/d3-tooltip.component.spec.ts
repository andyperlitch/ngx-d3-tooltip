import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3TooltipComponent } from './d3-tooltip.component';

describe('D3TooltipComponent', () => {
  let component: D3TooltipComponent;
  let fixture: ComponentFixture<D3TooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3TooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
