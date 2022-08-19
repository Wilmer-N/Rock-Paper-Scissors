function randomNumbers(min, max){
	return Math.round(Math.random() * (max - min)) + min;
}

console.log(randomNumbers(1, 3))