import { TestBed } from '@angular/core/testing';

import { OnethreethreeService } from './onethreethree.service';

describe('OnethreethreeService', () => {
  let service: OnethreethreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnethreethreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
