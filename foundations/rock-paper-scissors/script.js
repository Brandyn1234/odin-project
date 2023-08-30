function Game() {

    // player score  //
    let playerscore = 0;
    const playercontainer = document.querySelector('.player-score');
    const span = document.createElement('span');
    span.textContent = playerscore;
    playercontainer.appendChild(span);
    console.log(playercontainer);
    // testing code above //

    // computer score //
    let computerscore = 0;
    const computercontainer = document.querySelector('.computer-score');
    const cpuspan = document.createElement('span');
    cpuspan.textContent = computerscore;
    computercontainer.appendChild(cpuspan);




    updateScreen = () => {
        const img = document.querySelectorAll('.image-container');
        img.forEach(imgs => {
        imgs.addEventListener('click', (e)=>{
        let playerchoice = e.target.id;
    
        getComputerChoice = () => {
            const options = ["rock", "paper", "scissors"];
            let computerChoice = options[(Math.floor(Math.random() * options.length))];
            return computerChoice;
        }
    
        let computerchoice = getComputerChoice();
        
        // Game Logic //
        console.log(computerchoice);
        if (playerchoice === "rock") {
            if (computerchoice === "rock") {
                span.textContent = ++playerscore;
                cpuspan.textContent = ++computerscore;
            }
    
            else if (computerchoice === "paper") {
                span.textContent = ++playerscore;
                cpuspan.textContent = ++computerscore;
            }
    
            else if (computerchoice === "scissors") {
                span.textContent = ++playerscore;
                cpuspan.textContent = ++computerscore;
            }
        }
        
        if (playerchoice === "paper") {
            /* To-do placeholder text*/ 
        }
    
        if (playerchoice === "scissors") {
            /* to-do placeholder text */
        }

        if (playerscore > 5 || computerscore > 5) {
            alert("Game Over");
            playerscore = 0;
            span.textContent = playerscore;
            computerscore = 0;
            cpuspan.textContent = computerscore; 
        }
    
        
    
        });  
        });

    }

    updateScreen();
}

Game();