import { TestBed } from '@angular/core/testing';

import { OnethreefourService } from './onethreefour.service';

describe('OnethreefourService', () => {
  let service: OnethreefourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnethreefourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
