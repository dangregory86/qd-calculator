import { TestBed } from '@angular/core/testing';

import { EquationServiceOneOne } from './equations.service';

describe('EquationsService', () => {
	let service: EquationServiceOneOne;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(EquationServiceOneOne);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
