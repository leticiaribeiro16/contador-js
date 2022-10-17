let count = 0;

const currentNumber = document.getElementById('currentNumber');

function adicionar() {
	count++;
	currentNumber.innerHTML = count;
}

function tirar() {
	count--;
	currentNumber.innerHTML = count;
}

