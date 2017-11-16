import { TestBed, inject } from '@angular/core/testing';

import { D3TooltipService } from './d3-tooltip.service';

describe('D3TooltipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [D3TooltipService]
    });
  });

  it('should be created', inject([D3TooltipService], (service: D3TooltipService) => {
    expect(service).toBeTruthy();
  }));
});
