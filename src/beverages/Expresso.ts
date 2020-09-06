import { Beverage } from './Beverage.js';

export class Expresso extends Beverage {
	public getDescription(): string {
		return 'Expresso';
	}

	public getCost(): number {
		return 65.0;
	}
}
