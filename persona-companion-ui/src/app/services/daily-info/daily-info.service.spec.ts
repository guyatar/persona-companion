import { TestBed, inject } from '@angular/core/testing';

import { DailyInfoService } from './daily-info.service';

describe('DailyInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyInfoService]
    });
  });

  it('should be created', inject([DailyInfoService], (service: DailyInfoService) => {
    expect(service).toBeTruthy();
  }));
});
