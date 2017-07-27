import { TestBed, inject } from '@angular/core/testing';

import { BackEndCallsService } from './back-end-calls.service';

describe('BackEndCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackEndCallsService]
    });
  });

  it('should be created', inject([BackEndCallsService], (service: BackEndCallsService) => {
    expect(service).toBeTruthy();
  }));
});
