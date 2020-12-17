import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EquationServiceOneOne {
	constructor() {}
	// TODO refactor
	public calcD1(dist: number) {
		let answer = dist / 0.35;
		answer = answer ** 3;
		return answer;
	}
	public calcD2(dist: number) {
		let answer = dist / 0.44;
		answer = answer ** 3;
		return answer;
	}
	public calcD3(dist: number) {
		let answer = dist / 0.5;
		answer = answer ** 3;
		return answer;
	}
	public calcD4(dist: number) {
		let answer = dist / 0.8;
		answer = answer ** 3;
		return answer;
	}
	public calcD5(dist: number) {
		let answer = dist / 1.1;
		answer = answer ** 3;
		return answer;
	}
	public calcD6(dist: number) {
		let answer = dist / 1.8;
		answer = answer ** 3;
		return answer;
	}
	public calcD7(dist: number) {
		let answer = dist / 2.4;
		answer = answer ** 3;
		return answer;
	}
	public calcD8(dist: number) {
		let answer = dist / 3.6;
		answer = answer ** 3;
		return answer;
	}
	public calcD9(dist: number) {
		let answer = dist / 4.8;
		answer = answer ** 3;
		if (answer > 4000) {
			answer = this.calcD10(dist);
		}
		return answer;
	}
	public calcD10(dist: number) {
		let answer = dist / 8;
		answer = answer ** 3;
		return answer;
	}
	public calcD11(dist: number) {
		let answer = Math.sqrt(dist);
		answer = answer ** 3;
		if (answer > 2500 && answer <= 4500) {
			answer = dist / 3.6;
			answer = answer ** 2;
		}
		if (answer > 4500) {
			answer = dist / 14.8;
			answer = answer ** 3;
		}
		return answer;
	}
	public calcD12(dist: number) {
		let answer = dist / 22.2;
		answer = answer ** 3;
		return answer;
	}
	public calcD13(dist: number) {
		let answer = dist / 1.5;
		answer = Math.sqrt(answer);
		answer = answer ** 3;
		if (answer > 2500 && answer <= 4500) {
			answer = dist / 5.5;
			answer = answer ** 2;
		}
		if (answer > 4500) {
			answer = dist / 22.2;
			answer = answer ** 3;
		}
		return answer;
	}
	public calcD14(dist: number) {
		if (dist < 400) {
			return 0;
		}
		let answer = dist / 15.5;
		answer = answer ** 3;
		return answer;
	}
	public calcD15(dist: number) {
		if (dist < 400) {
			return 0;
		}
		let answer = dist / 19;
		answer = answer ** 3;
		return answer;
	}
	public calcD16(dist: number) {
		if (dist < 270) {
			return 0;
		}
		let answer = dist / 11;
		answer = answer ** 3;
		return answer;
	}
	public calcD17(dist: number) {
		if (dist < 270) {
			return 0;
		}
		let answer = dist / 14;
		answer = answer ** 3;
		return answer;
	}
	public calcD18(dist: number) {
		let answer = dist / 6;
		answer = answer ** 3;
		return answer;
	}
}

export class EquationServiceOneTwo {
	public calc(d: string, dist: number) {
		let answer = 0;
		switch (d) {
			case 'D1':
				answer = dist / 0.22;
				return answer ** 2;
			case 'D2':
				answer = dist / 3.2;
				return answer ** 3;
			case 'D3':
				answer = dist / 4.3;
				return answer ** 3;
			case 'D4':
				answer = dist / 6.4;
				return answer ** 3;
			case 'D5':
				answer = dist / 0.22;
				return answer ** 2;
			case 'D6':
				answer = dist / 3.2;
				return answer ** 3;
			case 'D7':
				answer = dist / 4.3;
				return answer ** 3;
			case 'D8':
				answer = dist / 6.4;
				return answer ** 3;
			default:
				console.log('Equation service 1.3, error');
		}
	}
}

export class EquationServiceOneThree {
	public calc(d: string, dist: number) {
		let answer = 0;
		switch (d) {
			case 'D1':
				answer = dist / 0.22;
				return answer ** 2;
			case 'D2':
				answer = dist / 3.2;
				return answer ** 3;
			case 'D3':
				answer = dist / 4.3;
				return answer ** 3;
			case 'D4':
				answer = dist / 6.4;
				return answer ** 3;
			default:
				console.log('Equation service 1.3, error');
		}
	}
}
