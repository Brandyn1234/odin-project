function getComputerChoice() {
    let computerChoice = options[(Math.floor(Math.random() * options.length))];
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            return (`You: ${playerChoice}\nComputer: ${computerChoice}\nDraw! Try Again!`);
        }
        else if (computerChoice === "paper") {
            return (`You: ${playerChoice}\nComputer: ${computerChoice}\nYou Lose! Try Again!`);
        }
        else if (computerChoice === "scissors") {
            return (`You: ${playerChoice}\nComputer: ${computerChoice}\nYou Win!`);
        }
    }
    
}

const options = ["rock", "paper", "scissors"];
let playerChoice = prompt("Rock, paper, or scissors?");
let playerLowerCase = playerChoice.toLowerCase();
let computerChoice = getComputerChoice();
console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));