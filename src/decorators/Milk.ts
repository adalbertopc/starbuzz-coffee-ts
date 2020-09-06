import { Beverage } from '../beverages/Beverage.js';
import { CondimentDecorator } from './CondimentDecorator.js';

export class Milk extends CondimentDecorator {
	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	getDescription(): string {
		return `${this.beverage.getDescription()} with milk`;
	}
	getCost(): number {
		return this.beverage.getCost() + 10.0;
	}
}
