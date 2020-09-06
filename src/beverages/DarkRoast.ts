import { Beverage } from './Beverage.js';
export class DarkRoast extends Beverage {
	public getDescription(): string {
		return 'Dark Roast';
	}

	public getCost(): number {
		return 40.0;
	}
}
