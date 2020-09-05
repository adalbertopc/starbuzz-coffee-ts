//Bebidas
abstract class Beverage {
	public abstract getDescription(): string;
	public abstract getCost(): number;
}

class HouseBlend extends Beverage {
	public getDescription(): string {
		return 'House Blend';
	}

	public getCost(): number {
		return 25.0;
	}
}

class DarKRoast extends Beverage {
	public getDescription(): string {
		return 'Dark Roast';
	}

	public getCost(): number {
		return 40.0;
	}
}

class Decaf extends Beverage {
	public getDescription(): string {
		return 'Expresso';
	}

	public getCost(): number {
		return 50.0;
	}
}
class Expresso extends Beverage {
	public getDescription(): string {
		return 'Expresso';
	}

	public getCost(): number {
		return 65.0;
	}
}

//Complementos

abstract class CondimentDecorator extends Beverage {
	protected beverage: Beverage;
}

class Milk extends CondimentDecorator {
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
class Soy extends CondimentDecorator {
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

class Mocha extends CondimentDecorator {
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
