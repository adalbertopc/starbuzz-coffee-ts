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

//Interfaz
let cafe1: Beverage = new HouseBlend();
console.log(`${cafe1.getDescription()} cuesta: ${cafe1.getCost()} pesos`);
cafe1 = new Milk(cafe1);
console.log(`${cafe1.getDescription()} cuesta: ${cafe1.getCost()} pesos`);
