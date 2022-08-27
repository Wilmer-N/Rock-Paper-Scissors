let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button")


game()
function game(){
function playerChoice (e){
    function randomNumbers(min, max){
        return Math.round(Math.random() * (max - min) + min);
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
    let computer = getComputerChoice(randomNumbers(1, 3))
    let player = e.target.id
    function playRound(playerSelection, computerSelection){
        if (playerSelection === computerSelection){
            console.log(`${playerSelection} vs ${computerSelection} is a draw`);
        }else if (playerSelection === "rock" && computerSelection === "paper"){
            computerScore += 1;
            console.log(`u loose! ${computerSelection} beats ${playerSelection}`);
        }else if(playerSelection === "paper" && computerSelection === "scissors"){
            computerScore += 1;
            console.log(`u loose! ${computerSelection} beats ${playerSelection}`);
        }else if(playerSelection === "scissors" && computerSelection === "rock"){
            computerScore += 1;
            console.log(`u loose! ${computerSelection} beats ${playerSelection}`);
        }else if(playerSelection === "scissors" && computerSelection === "paper"){
            playerScore += 1;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }else if(playerSelection === "paper" && computerSelection === "rock"){
            playerScore += 1;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }else if(playerSelection === "rock" && computerSelection === "scissors"){
            playerScore += 1;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }else{
            console.log("invalid input")
        }
        const computerScoreText = document.querySelector("#computerScore")
        const playerScoreText = document.querySelector("#playerScore")
        computerScoreText.textContent = `Computer has: ${computerScore}`
        playerScoreText.textContent = `Player has: ${playerScore}`
        
    }
    if (computerScore == 5 || playerScore == 5){
        const won = document.querySelector("#won")
        if(computerScore == 5){
            won.textContent = "Computer won"
        }else{
            won.textContent = "Player won"
        }return
    }
    playRound(player, computer)
}

buttons.forEach(btn => {
    btn.addEventListener("click", playerChoice)
});


//the logig behind what will get loged after each input and who wil get the point



// logs the score


}
