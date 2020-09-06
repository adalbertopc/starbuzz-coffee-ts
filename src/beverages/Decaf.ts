import { Beverage } from './Beverage.js';

export class Decaf extends Beverage {
	public getDescription(): string {
		return 'Expresso';
	}

	public getCost(): number {
		return 50.0;
	}
}
