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

const info = <HTMLInputElement>document.querySelector('#info');
let coffee = <HTMLInputElement>document.getElementById('coffees');
const formulario = <HTMLFormElement>document.getElementById('formu');

const enviarFormulario = (e) => {
	e.preventDefault();

	if (coffee.value === '') {
		alert('Elige tu bebida');
		return;
	}

	const Nmilk: number = parseInt(
			(<HTMLInputElement>document.getElementById('Nmilk')).value
		),
		Nsoy: number = parseInt(
			(<HTMLInputElement>document.getElementById('Nsoy')).value
		),
		Nmocha: number = parseInt(
			(<HTMLInputElement>document.getElementById('Nmocha')).value
		);

	let cafe: Beverage;
	let costoAgregados: number = 0;

	switch (coffee.value) {
		case 'HB':
			cafe = new HouseBlend();
			break;
		case 'DR':
			cafe = new DarkRoast();
			break;
		case 'Df':
			cafe = new Decaf();
			break;
		case 'Exp':
			cafe = new Expresso();
			break;
		default:
			console.log('Trollo');
	}
	if (Nmilk == 0 && Nsoy == 0 && Nmocha == 0) {
		info.innerHTML = `${cafe.getDescription()} <b>cost:</b> ${cafe.getCost()} pesos`;
	} else {
		if (Nmilk > 0) {
			costoAgregados += (Nmilk - 1) * 10;
			cafe = new Milk(cafe);
		}

		if (Nsoy > 0) {
			costoAgregados += (Nsoy - 1) * 15;
			cafe = new Soy(cafe);
		}

		if (Nmocha > 0) {
			costoAgregados += (Nmocha - 1) * 20;
			cafe = new Mocha(cafe);
		}
	}
	info.style.border = ' 1px solid #ccc';

	formulario.reset();
	info.innerHTML = `<p>${cafe.getDescription()}</p> <p><b> cost: </b> ${
		cafe.getCost() + costoAgregados
	} pesos</p>`;
	setTimeout(() => {
		info.innerHTML = '<p></p>';
		info.style.border = 'none';
	}, 5000);
};

formulario.addEventListener('submit', enviarFormulario);
