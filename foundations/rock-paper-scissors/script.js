function Game() {

    const img = document.querySelectorAll('.image-container');
    img.forEach(imgs => {
    imgs.addEventListener('click', (e)=>{
    let playerchoice = e.target.id;
    /*console.log(playerchoice);*/


    getComputerChoice = () => {
        const options = ["rock", "paper", "scissors"];
        let computerChoice = options[(Math.floor(Math.random() * options.length))];
        return computerChoice;
    }

    let computerchoice = getComputerChoice();

    console.log(computerchoice);

    if (playerchoice === "rock") {
        if (computerchoice === "rock") {
            console.log("It's a Tie!");
        }

        else if (computerchoice === "paper") {
            console.log("You Lose!");
        }

        else if (computerchoice === "scissors") {
            console.log("You Win!");
        }
    }
    
    if (playerchoice === "paper") {
        /* To-do placeholder text*/ 
    }

    if (playerchoice === "scissors") {
        /* to-do placeholder text */
    }

    });  
    });
}

Game();