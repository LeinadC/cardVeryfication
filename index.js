import {checkCardNumber} from './checkNumb.js';
import tests from './tests.js';

tests();

function output(input){
	const newEl = document.createElement('li');
	const newText = document.createTextNode(`${input} - ${checkCardNumber(parseInt(input))}`);
	newEl.appendChild(newText);
	const position = document.querySelector('#output');
	position.appendChild(newEl);
}
function input(){
	const element = document.querySelector('#cardNumber');
	console.log(typeof element.value);
	output(element.value);
	element.value = null;
}
const button = document.getElementById('bttn');
button.addEventListener('click', input, false);