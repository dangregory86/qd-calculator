import { Component } from '@angular/core';
import { EquationServiceOneOne } from '../services/equations.service';
import { OneoneService } from '../services/oneone.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: [ 'home.page.scss' ]
})
export class HomePage {
	esItems: string[] = [
		'Igloo rear',
		'Igloo side',
		'Igloo front',
		'Igloo door - non compliant',
		'Igloo door - traversed',
		'Igloo rear - non compliant',
		'Igloo side - non compliant',
		'Igloo front - non compliant',
		'Heavy walled building',
		'Heavy walled building - light roof',
		'Light walled building - traversed',
		'Light walled building - untraversed',
		'Open stack - traversed',
		'Open stack - untraversed',
		'Process building - with protective roof - traversed',
		'Process building - without protective roof - traversed',
		'Process building - traversed',
		'Transfer shed < 10 persons traversed',
		'Transfer shed > 10 persons traversed',
		'Transfer shed < 10 persons untraversed',
		'Transfer shed > 10 persons untraversed',
		'Low density usage roads',
		'Medium density usage roads',
		'High density usage roads',
		'Inhabited building or place of assembly',
		'Vulnerable constructions',
		'Office - < 20 persons',
		'Office - >= 20 persons',
		'Office or amenity changing facility',
		'Overhead power grid - Supergrid',
		'Overhead power grid - Normal',
		'Overhead power grid - Minor',
		'POL facilities - protected or underground',
		'POL facilities - Unprotected, aboveground vital',
		'POL facilities - Unprotected, aboveground, nonvital',
		'POL facilities - Small Quantities',
		'Boiler houses - Manned or Vital',
		'Boiler houses - Unmanned, non-vital',
		'Boiler houses - Unmanned, local'
	];

	constructor(private equatinService: EquationServiceOneOne, private oneoneService: OneoneService) {}

	calculate() {
		console.log(this.esItems[7], this.oneoneService.checkDistance('pes-ir', this.esItems[7], 450));
		console.log(this.esItems[25], this.oneoneService.checkDistance('pes-ir', this.esItems[25], 1000));
	}
}
