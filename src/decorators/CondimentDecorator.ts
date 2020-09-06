import { Beverage } from '../beverages/Beverage.js';

export abstract class CondimentDecorator extends Beverage {
	protected beverage: Beverage;
}
