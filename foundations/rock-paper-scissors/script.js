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
    
    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return (`You: ${playerChoice}\nComputer: ${computerChoice}\nYou Win!`);
        }
        else if (computerChoice === "paper") {
            return (`You: ${playerChoice}\nComputer: ${computerChoice}\nDraw! Try Again!`);
        }
        else if (computerChoice === "scissors") {
            return (`You: ${playerChoice}\nComputer: ${computerChoice}\nYou Lose! Try Again!`);
        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return (`You: ${playerChoice}\nComputer: ${computerChoice}\nYou Lose! Try Again!`);
        }
        else if (computerChoice === "paper") {
            return (`You: ${playerChoice}\nComputer: ${computerChoice}\nYou Win!`);
        }
        else if (computerChoice === "scissors") {
            return (`You: ${playerChoice}\nComputer: ${computerChoice}\nDraw! Try Again!`);
        }
    }
}

function game() {
    let numOfRounds = 5;
    let playing = true;
    while (playing) {
    let playerChoice = prompt("Rock, paper, or scissors?");
    let playerLowerCase = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(playRound(playerLowerCase, computerChoice));
    numOfRounds--;
    if (numOfRounds === 0){
        playing = false;
    }
    }
}

const options = ["rock", "paper", "scissors"];
console.log(game());

