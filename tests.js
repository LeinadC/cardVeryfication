import {Luhn, mastercard, visa, americanExpress, checkCardNumber} from './checkNumb.js';

function tests(){
	function veryfy(input, goal){
		if(input === goal) return 'passed';
		else return 'FAILED';
	}

	const objectForTestLuhn = {
		"31752280": true,
		"3175228": false,
		"7159234454": true,
		"715923445": false
	}
	for(let [key, value] of Object.entries(objectForTestLuhn)){
		console.log(`Luhn function: ${veryfy(Luhn(key), value)}`);
	}

	const objectForTestMastercard = {
		"5122222222222222": true,
		"3122222222222222": false,
		"5211111111111111": true,
		"5359234451111111": true,
		"5432333333232332": true,
		"5523453463564444": true,
		"5634534534534534": false,
		"53324324": false,
		"54234234234234242": false
	}
	for(let [key, value] of Object.entries(objectForTestMastercard)){
		console.log(`mastercard function: ${veryfy(mastercard(key), value)}`);
	}

	const objectForTestVisa = {
		"4122222222222222": true,
		"3122222222222222": false,
		"4711111111111": true,
		"5359234451111111": false,
		"5432333333232": false,
		"5634534534534534": false,
		"43324324": false,
		"44234234234234242": false
	}
	for(let [key, value] of Object.entries(objectForTestVisa)){
		console.log(`visa function: ${veryfy(visa(key), value)}`);
	}
		
	const objectForTestAmericanExpress = {
		"342222222222222": true,
		"372234435344343": true,
		"3411111111111111": false,
		"3759234451111111": false,
		"543233333323233": false,
		"352345346356444": false,
		"5634534534534534": false,
		"37324324": false,
		"3423423423423427": false
	}
	for(let [key, value] of Object.entries(objectForTestAmericanExpress)){
		console.log(`americanExpress function: ${veryfy(americanExpress(key), value)}`);
	}
		
	const objectForTestcheckCardNumber = {
		"371449635398431": "American Express",
		"5555555555554444": "Mastercard",
		"4012888888881881": "Visa",
		"53592a4451111111": "Nieprawidłowy",
		"asas": "Nieprawidłowy",
		"5555555555554-44": "Nieprawidłowy",
	}
	for(let [key, value] of Object.entries(objectForTestcheckCardNumber)){
		key = parseInt(key);
		console.log(`checkCardNumber function: ${veryfy(checkCardNumber(key), value)}`);
	}
}
export default tests;