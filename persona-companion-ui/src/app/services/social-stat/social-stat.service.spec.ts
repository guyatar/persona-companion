import { TestBed, inject } from '@angular/core/testing';

import { SocialStatService } from './social-stat.service';

describe('SocialStatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialStatService]
    });
  });

  it('should be created', inject([SocialStatService], (service: SocialStatService) => {
    expect(service).toBeTruthy();
  }));
});
