import { TestBed } from '@angular/core/testing';

import { OneoneService } from './oneone.service';

describe('OneoneService', () => {
  let service: OneoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
