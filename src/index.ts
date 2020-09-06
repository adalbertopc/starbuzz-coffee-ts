//Bebidas
import { Beverage } from './beverages/Beverage.js';
import { HouseBlend } from './beverages/HouseBlend.js';
import { DarkRoast } from './beverages/DarkRoast.js';
import { Decaf } from './beverages/Decaf.js';
import { Expresso } from './beverages/Expresso.js';
//Complementos
import { Milk } from './decorators/Milk.js';
import { Soy } from './decorators/Soy.js';
import { Mocha } from './decorators/Mocha.js';

let cafe1: Beverage = new DarkRoast();
console.log(`${cafe1.getDescription()} cost: ${cafe1.getCost()}`);
cafe1 = new Milk(cafe1);
console.log(`${cafe1.getDescription()} cost: ${cafe1.getCost()}`);
