let playerScore = 0;
let computerScore = 0;

function game(){
    for (let i = 0; i < 5; i++) {
        
function randomNumbers(min, max){
	return Math.round(Math.random() * (max - min)) + min;
}



function getComputerChoice(choice){
    if (choice === 1){
        return "rock";
    }else if (choice === 2){
        return "paper";
    }else {
        return "scissors";
    }
}


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
const playerSelection = prompt("choose").toLowerCase()
const computerSelection = getComputerChoice(randomNumbers(1, 3));
playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection))
console.log(`Player has: ${playerScore / 2}`)
console.log(`Computer has: ${computerScore / 2}`)

}}

game()