import { DarkRoast } from './beverages/DarkRoast.js';
//Complementos
import { Milk } from './decorators/Milk.js';
var cafe1 = new DarkRoast();
console.log(cafe1.getDescription() + " cost: " + cafe1.getCost());
cafe1 = new Milk(cafe1);
console.log(cafe1.getDescription() + " cost: " + cafe1.getCost());
