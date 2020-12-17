import { TestBed } from '@angular/core/testing';

import { OnetwooneService } from './onetwoone.service';

describe('OnetwooneService', () => {
  let service: OnetwooneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnetwooneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
