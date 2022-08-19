function randomNumbers(min, max){
	return Math.round(Math.random() * (max - min)) + min;
}

function getComputerChoice(choice){
    if (choice === 1){
        console.log("rock")
    }else if (choice === 2){
        console.log("paper")
    }else {
        console.log("scissors")
    }
}

getComputerChoice(randomNumbers(1, 3))