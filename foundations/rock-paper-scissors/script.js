function Game() {

    let playerscore = 0;
    const playercontainer = document.querySelector('.player-score');
    const span = document.createElement('span');
    span.textContent = playerscore;
    playercontainer.appendChild(span);

    let computerscore = 0;
    const computercontainer = document.querySelector('.computer-score');
    const cpuspan = document.createElement('span');
    cpuspan.textContent = computerscore;
    computercontainer.appendChild(cpuspan);

    eventListener = () => {
        const img = document.querySelectorAll('.image-container');
        img.forEach(imgs => {
        imgs.addEventListener('click', (e)=>{
        let playerchoice = e.target.id;

        getComputerChoice = () => {
            const options = ["rock", "paper", "scissors"];
            let computerChoice = options[(Math.floor(Math.random() * options.length))];
            return computerChoice;
        }
    
        resetScore = () => {
            playerscore = 0;
            span.textContent = playerscore;
            computerscore = 0;
            cpuspan.textContent = computerscore;
        }

        let computerchoice = getComputerChoice();
        
        // Game Logic //
        console.log(computerchoice);
    
        if (playerchoice === "rock") {
            if (computerchoice === "rock") {
                document.getElementById("demo").textContent = "It's a tie! You both chose rock";
            }
    
            else if (computerchoice === "paper") {
                cpuspan.textContent = ++computerscore;
                document.getElementById("demo").textContent = "You lose! You chose rock, computer chose paper";
            }
    
            else if (computerchoice === "scissors") {
                span.textContent = ++playerscore;
                document.getElementById("demo").textContent = "You win! You chose rock, computer chose scissors";
            }
        }
        
        if (playerchoice === "paper") {
            if (computerchoice === "rock") {
                span.textContent = ++playerscore;
                document.getElementById("demo").textContent = "You win! You chose paper, computer chose rock";
            }
    
            else if (computerchoice === "paper") {
                document.getElementById("demo").textContent = "It's a tie! You both chose paper";
            }
    
            else if (computerchoice === "scissors") {
                cpuspan.textContent = ++computerscore;
                document.getElementById("demo").textContent = "You lose! You chose paper, computer chose scissors";
            }
        }
    
        if (playerchoice === "scissors") {
            if (computerchoice === "rock") {
                cpuspan.textContent = ++computerscore;
                document.getElementById("demo").textContent = "You lose! You chose scissors, computer chose rock";
            }
    
            else if (computerchoice === "paper") {
                span.textContent = ++playerscore;
                document.getElementById("demo").textContent = "You win! You chose scissors, computer chose paper";
            }
    
            else if (computerchoice === "scissors") {
                document.getElementById("demo").textContent = "It's a tie! You both chose scissors";
            }
        }

        if (playerscore >= 5) {
            document.getElementById("demo").textContent = "You win! Play Again?";
            resetScore();
        }

        if (computerscore >= 5) {
            document.getElementById("demo").textContent = "You lose! Play Again?";
            resetScore();
        }
        
        });  
        });

    }

    eventListener();
}

Game();