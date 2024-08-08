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