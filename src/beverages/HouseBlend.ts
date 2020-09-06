import { Beverage } from './Beverage.js';

export class HouseBlend extends Beverage {
	public getDescription(): string {
		return 'House Blend';
	}

	public getCost(): number {
		return 25.0;
	}
}
