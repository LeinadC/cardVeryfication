function Luhn(input){
	input = [...input].map(e => parseInt(e));
	const oneBeforeLastIndex = input.length - 2;
	let firstHalf = input.filter((e, i) => {
		const indexDifference = oneBeforeLastIndex - i;
		if(indexDifference%2 === 0) return e;
	});
	firstHalf = firstHalf.map(e => e*2);
	const secondHalf = input.filter((e, i) => {
		const indexDifference = oneBeforeLastIndex - i;
		if(indexDifference%2 !== 0) return e;
	});
	const sum = [...firstHalf, ...secondHalf].map(e => {
		if(e > 9) return e = e%10+1;
		else return e;
	}).reduce((a, b) => a+b);
	return sum%10 === 0 ? true : false;
}
function mastercard(input){
	if(input.length !== 16) return false;
	let startingNumb = [];
	const startCase = 51;
	const endCase = 55;
	for(let i=startCase; i<=endCase; i++){
		startingNumb.push(input.startsWith(`${i}`));
	}
	if(startingNumb.every(e => e === false)) return false;
	return true;
}
function visa(input){
	if(input.length !== 16 && input.length !== 13) return false;
	if(!input.startsWith('4')) return false;
	return true;
}
function americanExpress(input){
	if(input.length !== 15) return false;
	if(!input.startsWith('34') && !input.startsWith('37')) return false;
	return true;
}
function checkCardNumber(input){
	if(typeof input !== 'number') return 'Nieprawidłowy';
	input = `${input}`;
	if(mastercard(input) && Luhn(input)) return 'Mastercard';
	else if(visa(input) && Luhn(input)) return 'Visa';
	else if(americanExpress(input) && Luhn(input)) return 'American Express';
	else return 'Nieprawidłowy';
}

export {Luhn, mastercard, visa, americanExpress, checkCardNumber};
