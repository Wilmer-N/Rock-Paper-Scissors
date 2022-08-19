let playerScore = 0;
let computerScore = 0;


game()

function game(){
    for (let i = 0; i < 5; i++) {

//This section takes in to values (min, max) and puts out a random value inbetween and including them//
function randomNumbers(min, max){
	return Math.round(Math.random() * (max - min)) + min;
}


//uses the the random number from randomNumbers and converts it to a string and stores that in the const computerSelection
function getComputerChoice(choice){
    if (choice === 1){
        return "rock";
    }else if (choice === 2){
        return "paper";
    }else {
        return "scissors";
    }
}
const computerSelection = getComputerChoice(randomNumbers(1, 3));

// makes the player enter ther input and makes it all lowercase
const playerSelection = prompt("choose").toLowerCase()

//the logig behind what will get loged after each input and who wil get the point
function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return (`${playerSelection} vs ${computerSelection} is a draw`);
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore += 1;
        return (`u loose! ${computerSelection} beats ${playerSelection}`);
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore += 1;
        return (`u loose! ${computerSelection} beats ${playerSelection}`);
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore += 1;
        return (`u loose! ${computerSelection} beats ${playerSelection}`);
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore += 1;
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore += 1;
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore += 1;
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }else{
        return ("invalid input")
    }
}





playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection))

// logs the score
console.log(`Player has: ${playerScore / 2}`)
console.log(`Computer has: ${computerScore / 2}`)

}}

