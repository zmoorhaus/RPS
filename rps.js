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
    
    return computerChoice;
     
 }

 

 const rock = document.createElement("button");
 const rockPic = document.createElement('img');
 rockPic.src = "rock.jpeg";
 rock.id = "rock";
 rock.appendChild(rockPic);

 const paper = document.createElement("button");
 const paperPic = document.createElement('img');
 paperPic.src = "paper.jpg";
 paper.id = "paper";
 paper.appendChild(paperPic);


 const scissors = document.createElement("button")
 const scissorsPic = document.createElement('img');
 scissorsPic.src = "scissors.jpeg";
 scissors.id = "scissors";
 scissors.appendChild(scissorsPic);

 const page = document.getElementById('page');

 const rps = document.getElementById('rps');
 rps.append(rock, paper, scissors);

 const buttons = document.querySelectorAll("button");

 let textSpace = document.getElementById('textSpace');


 
 buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let userChoice = button.id;
        let round = playGame(userChoice)
        
    });


 });
 

function playGame(userChoice) {
  
    let computerChoice = getComputerChoice();
    

    if ((computerChoice === "rock" && userChoice === "scissors") 
    || (computerChoice === "paper" && userChoice === "rock" )
    || (computerChoice === "scissors" && userChoice === "paper")) {
    computerScore++
    textSpace.innerHTML = `${userChoice} vs. ${computerChoice}<br>Computer wins this round!<br>You: ${humanScore} Computer: ${computerScore} `;
    } else if ((computerChoice === "rock" && userChoice === "paper") 
    || (computerChoice === "paper" && userChoice === "scissors")
    || (computerChoice === "scissors" && userChoice === "rock")) {
    humanScore++
    textSpace.innerHTML = `${userChoice} vs. ${computerChoice}<br>You win this round!<br>You: ${humanScore} Computer: ${computerScore}`;
    } else if (computerChoice === userChoice) {
        textSpace.innerHTML = `${userChoice} vs. ${computerChoice}<br>Tie!<br>You: ${humanScore} Computer: ${computerScore}`;
    }

    if (computerScore + humanScore === 5) {
        if (computerScore === humanScore) {
            alert("THAT IS A TIE GAME") 
        } else if (computerScore > humanScore) {
        textSpace.textContent = "COMPUTER WINS THE GAME!";
        } else if (humanScore > computerScore) {
        textSpace.textContent = "YOU WIN THE GAME!";
        }
        computerScore = 0;
        humanScore = 0;
    }
}



   

