let playerChoice = prompt("Rock, paper, or scissors?");
var options = ["rock", "paper", "scissors"];
let computerChoice = options[(Math.floor(Math.random() * options.length))];
console.log(computerChoice);