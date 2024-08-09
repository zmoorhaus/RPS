console.log("ayyy")

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {

    
    let number = Math.floor(Math.random() * 3);
    let computerChoice;

    if (number === 0) {
    computerChoice = "rock";
    } else if (number === 1) {
    computerChoice = "paper";
    } else if (number === 2) {
     computerChoice = "scissors";
    }
    console.log("Computer chose " + computerChoice);
    return computerChoice;
     
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
     return humanChoice;
 }


function playRound() {

    let userChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    

    if ((computerChoice === "rock" && userChoice === "scissors") 
    || (computerChoice === "paper" && userChoice === "rock" )
    || (computerChoice === "scissors" && userChoice === "paper")) {
    computerScore++
    alert(`Computer wins!\nComputer: ${computerScore}\nYou: ${humanScore}`)
    } else if ((computerChoice === "rock" && userChoice === "paper") 
    || (computerChoice === "paper" && userChoice === "scissors")
    || (computerChoice === "scissors" && userChoice === "rock")) {
    humanScore++
    alert(`You win! Computer: ${computerScore}, you: ${humanScore}`)
    } else if (computerChoice === userChoice) {
        alert("TIE")
    } else {
        return "ERROR";
    }
}

playRound();
