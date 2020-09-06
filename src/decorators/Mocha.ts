import { Beverage } from '../beverages/Beverage.js';
import { CondimentDecorator } from './CondimentDecorator.js';

export class Mocha extends CondimentDecorator {
	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	getDescription(): string {
		return `${this.beverage.getDescription()} with mocha`;
	}
	getCost(): number {
		return this.beverage.getCost() + 20.0;
	}
}
