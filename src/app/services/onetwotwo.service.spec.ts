import { TestBed } from '@angular/core/testing';

import { OnetwotwoService } from './onetwotwo.service';

describe('OnetwotwoService', () => {
  let service: OnetwotwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnetwotwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
