import { TestBed, inject } from '@angular/core/testing';

import { RESTApiService } from './rest-api.service';

describe('RESTApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RESTApiService]
    });
  });

  it('should be created', inject([RESTApiService], (service: RESTApiService) => {
    expect(service).toBeTruthy();
  }));
});
