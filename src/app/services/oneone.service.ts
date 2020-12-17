import { Injectable } from '@angular/core';
import { EquationServiceOneOne } from './equations.service';

@Injectable({
	providedIn: 'root'
})
export class OneoneService {
	max: number = 250000;
	constructor(private equationService: EquationServiceOneOne) {}

	public checkDistance(pes: string, es: string, distance: number) {
		switch (pes) {
			case 'pes-ir':
				return this.qtlAllowedir(es, distance);
			case 'pes-is':
				return this.qtlAllowedis(es, distance);
			case 'pes-if':
				return this.qtlAllowedif(es, distance);
			case 'pes-hws':
			case 'pes-hwf':
			case 'pes-hwlr':
			case 'pes-lwt':
				return this.qtlAllowed4(es, distance);
			case 'pes-lwu':
			case 'pes-ost':
			case 'pes-osu':
			default:
				console.log(`something went wrong ${pes} doesnt exist`);
		}
	}

	private qtlAllowedir(es: string, dist: number) {
		switch (es) {
			case 'Igloo rear':
			case 'Igloo side':
				return this.equationService.calcD3(dist);
			case 'Igloo front':
			case 'Igloo door - non compliant':
			case 'Igloo door - traversed':
			case 'Igloo rear - non compliant':
				return this.equationService.calcD4(dist);
			case 'Igloo side - non compliant':
				return this.equationService.calcD6(dist);
			case 'Igloo front - non compliant':
			case 'Heavy walled building':
			case 'Heavy walled building - light roof':
			case 'Light walled building - traversed':
			case 'Light walled building - untraversed':
			case 'Open stack - traversed':
			case 'Open stack - untraversed':
				return this.equationService.calcD4(dist);
			case 'Process building - with protective roof - traversed':
				return this.equationService.calcD10(dist);
			case 'Process building - without protective roof - traversed':
			case 'Process building - traversed':
				if (dist < 270) {
					return 0;
				}
				return this.equationService.calcD18(dist);
			case 'Transfer shed < 10 persons traversed':
			case 'Transfer shed < 10 persons untraversed':
				return this.equationService.calcD7(dist);
			case 'Transfer shed > 10 persons traversed':
			case 'Transfer shed > 10 persons untraversed':
				if (dist < 270) {
					return 0;
				}
				return this.equationService.calcD18(dist);
			case 'Low density usage roads':
				return this.equationService.calcD12(dist * 2);
			case 'Medium density usage roads':
				return this.equationService.calcD16(dist);
			case 'High density usage roads':
			case 'Inhabited building or place of assembly':
				return this.equationService.calcD14(dist);
			case 'Vulnerable constructions':
				return this.equationService.calcD14(dist / 2);
			case 'Office - < 20 persons':
				return this.equationService.calcD16(dist);
			case 'Office - >= 20 persons':
				return this.equationService.calcD14(dist);
			case 'Office or amenity changing facility':
				return 250000;
			case 'Overhead power grid - Supergrid':
				return this.equationService.calcD14(dist);
			case 'Overhead power grid - Normal':
				return this.equationService.calcD11(dist);
			case 'Overhead power grid - Minor':
				return this.equationService.calcD10(dist);
			case 'POL facilities - protected or underground':
				if (dist < 25) {
					return 0;
				}
				return this.equationService.calcD7(dist * 0.5);
			case 'POL facilities - Unprotected, aboveground vital':
			case 'POL facilities - Unprotected, aboveground, nonvital':
				return this.equationService.calcD13(dist);
			case 'POL facilities - Small Quantities':
				return 10;
			case 'Boiler houses - Manned or Vital':
				return this.equationService.calcD13(dist);
			case 'Boiler houses - Unmanned, non-vital':
				return this.equationService.calcD8(dist);
			case 'Boiler houses - Unmanned, local':
				return 45;
			default:
				console.log(`something went wrong ${es} doesnt exist`);
		}
	}

	private qtlAllowedis(es: string, dist: number) {
		switch (es) {
			case 'Igloo rear':
			case 'Igloo side':
				return this.equationService.calcD3(dist);
			case 'Igloo front':
			case 'Igloo door - non compliant':
			case 'Igloo door - traversed':
			case 'Igloo rear - non compliant':
				return this.equationService.calcD4(dist);
			case 'Igloo side - non compliant':
				return this.equationService.calcD6(dist);
			case 'Igloo front - non compliant':
			case 'Heavy walled building':
			case 'Heavy walled building - light roof':
			case 'Light walled building - traversed':
			case 'Light walled building - untraversed':
			case 'Open stack - traversed':
			case 'Open stack - untraversed':
				return this.equationService.calcD4(dist);
			case 'Process building - with protective roof - traversed':
				return this.equationService.calcD10(dist);
			case 'Process building - without protective roof - traversed':
			case 'Process building - traversed':
				if (dist < 270) {
					return 0;
				}
				return this.equationService.calcD10(dist);
			case 'Transfer shed < 10 persons traversed':
			case 'Transfer shed < 10 persons untraversed':
				return this.equationService.calcD7(dist);
			case 'Transfer shed 10 persons traversed':
			case 'Transfer shed 10 persons untraversed':
				if (dist < 270) {
					return 0;
				}
				return this.equationService.calcD10(dist);
			case 'Low density usage roads':
				return this.equationService.calcD12(dist * 2);
			case 'Medium density usage roads':
				return this.equationService.calcD17(dist);
			case 'High density usage roads':
			case 'Inhabited building or place of assembly':
				return this.equationService.calcD15(dist);
			case 'Vulnerable constructions':
				return this.equationService.calcD15(dist / 2);
			case 'Office - < 20 persons':
				return this.equationService.calcD17(dist);
			case 'Office - >= 20 persons':
				return this.equationService.calcD15(dist);
			case 'Office or amenity changing facility':
				return this.max;
			case 'Overhead power grid - Supergrid':
				return this.equationService.calcD15(dist);
			case 'Overhead power grid - Normal':
				return this.equationService.calcD11(dist);
			case 'Overhead power grid - Minor':
				return this.equationService.calcD10(dist);
			case 'POL facilities - protected or underground':
				if (dist < 25) {
					return 0;
				}
				return this.equationService.calcD7(dist * 0.5);
			case 'POL facilities - Unprotected, aboveground vital':
			case 'POL facilities - Unprotected, aboveground, nonvital':
				return this.equationService.calcD13(dist);
			case 'POL facilities - Small Quantities':
				if (dist < 10) {
					return 0;
				}
				return this.max;
			case 'Boiler houses - Manned or Vital':
				return this.equationService.calcD13(dist);
			case 'Boiler houses - Unmanned, non-vital':
				return this.equationService.calcD8(dist);
			case 'Boiler houses - Unmanned, local':
				if (dist < 45) {
					return 0;
				}
				return this.max;
			default:
				console.log(`something went wrong ${es} doesnt exist`);
		}
	}

	private qtlAllowedif(es: string, dist: number) {
		switch (es) {
			case 'Igloo rear':
				return this.equationService.calcD4(dist);
			case 'Igloo side':
				return this.equationService.calcD5(dist);
			case 'Igloo front':
				return this.equationService.calcD7(dist);
			case 'Igloo door - non compliant':
			case 'Igloo door - traversed':
				return this.equationService.calcD9(dist);
			case 'Igloo rear - non compliant':
			case 'Igloo side - non compliant':
				return this.equationService.calcD6(dist);
			case 'Igloo front - non compliant':
				return this.equationService.calcD9(dist);
			case 'Heavy walled building':
			case 'Heavy walled building - light roof':
			case 'Light walled building - traversed':
				return this.equationService.calcD7(dist);
			case 'Light walled building - untraversed':
				return this.equationService.calcD9(dist);
			case 'Open stack - traversed':
				return this.equationService.calcD4(dist);
			case 'Open stack - untraversed':
				return this.equationService.calcD9(dist);
			case 'Transfer shed < 10 persons traversed':
			case 'Transfer shed < 10 persons untraversed':
				return this.equationService.calcD7(dist);
			case 'Transfer shed > 10 persons traversed':
				return this.equationService.calcD7(dist);
			case 'Transfer shed > 10 persons untraversed':
				if (dist < 270) {
					return 0;
				}
				return this.equationService.calcD12(dist);
			case 'Medium density usage roads':
				return this.equationService.calcD11(dist);
			case 'High density usage roads':
			case 'Inhabited building or place of assembly':
				return this.equationService.calcD13(dist);
			case 'Vulnerable constructions':
				return this.equationService.calcD12(dist / 2);

			case 'Office - < 20 persons':
				return this.equationService.calcD11(dist);
			case 'Office - >= 20 persons':
				return this.equationService.calcD13(dist);
			case 'Overhead power grid - Supergrid':
				return this.equationService.calcD13(dist);
			default:
				return this.qtlAllowedir(es, dist);
		}
	}

	private qtlAllowed4(es: string, dist: number) {
		switch (es) {
			case 'Igloo rear':
			case 'Igloo side':
				return this.equationService.calcD5(dist);
			case 'Igloo front':
				return this.equationService.calcD8(dist);
			case 'Igloo door - non compliant':
			case 'Igloo door - traversed':
				return this.equationService.calcD9(dist);
			case 'Igloo rear - non compliant':
			case 'Igloo side - non compliant':
				return this.equationService.calcD6(dist);
			case 'Igloo front - non compliant':
				return this.equationService.calcD9(dist);
			case 'Heavy walled building':
			case 'Heavy walled building - light roof':
			case 'Light walled building - traversed':
				return this.equationService.calcD4(dist);
			case 'Light walled building - untraversed':
				return this.equationService.calcD9(dist);
			case 'Open stack - traversed':
				return this.equationService.calcD4(dist);
			case 'Open stack - untraversed':
				return this.equationService.calcD9(dist);
			case 'Process building - with protective roof - traversed':
				return this.equationService.calcD10(dist);
			case 'Process building - without protective roof - traversed':
				if (dist < 270) {
					return 0;
				}
				return this.equationService.calcD10(dist);
			case 'Process building - traversed':
				if (dist < 270) {
					return 0;
				}
				return this.equationService.calcD13(dist);
			case 'Transfer shed < 10 persons traversed':
				return this.equationService.calcD7(dist);
			case 'Transfer shed < 10 persons untraversed':
				return this.equationService.calcD10(dist);
			case 'Transfer shed > 10 persons traversed':
				if (dist < 270) {
					return 0;
				}
				return this.equationService.calcD10(dist);
			case 'Transfer shed > 10 persons untraversed':
				if (dist < 270) {
					return 0;
				}
				return this.equationService.calcD13(dist);
			case 'Low density usage roads':
				return this.equationService.calcD12(dist * 2);
			case 'Medium density usage roads':
				if (dist < 270) {
					return 0;
				}
				return this.equationService.calcD11(dist);
			case 'High density usage roads':
			case 'Inhabited building or place of assembly':
				return this.equationService.calcD13(dist);
			case 'Vulnerable constructions':
				return this.equationService.calcD12(dist / 2);
			case 'Office - < 20 persons':
				return this.equationService.calcD11(dist);
			case 'Office - >= 20 persons':
				return this.equationService.calcD12(dist);
			case 'Office or amenity changing facility':
				return this.max;
			case 'Overhead power grid - Supergrid':
				return this.equationService.calcD13(dist);
			case 'Overhead power grid - Normal':
				return this.equationService.calcD11(dist);
			case 'Overhead power grid - Minor':
				return this.equationService.calcD10(dist);
			case 'POL facilities - protected or underground':
				if (dist < 25) {
					return 0;
				}
				return this.equationService.calcD7(dist * 0.5);
			case 'POL facilities - Unprotected, aboveground vital':
			case 'POL facilities - Unprotected, aboveground, nonvital':
				return this.equationService.calcD13(dist);
			case 'POL facilities - Small Quantities':
				if (dist < 10) {
					return 0;
				}
				return this.max;
			case 'Boiler houses - Manned or Vital':
				return this.equationService.calcD13(dist);
			case 'Boiler houses - Unmanned, non-vital':
				return this.equationService.calcD8(dist);
			case 'Boiler houses - Unmanned, local':
				if (dist < 45) {
					return 0;
				}
				return this.max;
			default:
				console.log(`something went wrong ${es} doesnt exist`);
		}
	}
}
