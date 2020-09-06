import { Beverage } from '../beverages/Beverage.js';
import { CondimentDecorator } from './CondimentDecorator.js';

export class Soy extends CondimentDecorator {
	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	getDescription(): string {
		return `${this.beverage.getDescription()} with soy`;
	}
	getCost(): number {
		return this.beverage.getCost() + 15.0;
	}
}
