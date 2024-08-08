console.log("ayyy")

function getComputerChoice() {

   let computerChoice = '';
   let number = Math.floor(Math.random() * 3);
   if (number === 0) {
    computerChoice = "rock";
   } else if (number === 1) {
    computerChoice = "paper";
   } else if (number === 2) {
    computerChoice = "scissors";
   }
   return computerChoice
    
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?")
    if (humanChoice.toLowerCase() === "rock") {
    console.log("You chose rock"); 
    } else if (humanChoice.toLowerCase() === "paper") {
    console.log("You chose paper");
    } else if (humanChoice.toLowerCase() === "scissors") {
    console.log("You chose scissors")
    }
}
getHumanChoice();