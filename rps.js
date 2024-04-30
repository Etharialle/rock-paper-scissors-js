let humanScore = 0;
let computerScore = 0;
let winner;
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    //Math.Random returns a number between 0 and 1;
    //Math.floor * 3 will then return 0, 1, or 2) which can be used for the array position;
    let computerChoice = Math.floor(Math.random() * 3);
    computerChoice = choices[computerChoice];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose One: Rock, Paper, Scissors");
    //force user input to be a string
    humanChoice = String(humanChoice);
    humanChoice = humanChoice.toLocaleLowerCase();
    if (choices.includes(humanChoice)) {
        return humanChoice;
    } else {
        console.log("You must choose rock, paper, or scissors!");
        getHumanChoice();
        return humanChoice;
    }
}

function evalRound(humanChoice, computerChoice) {
    if ((computerChoice === 'rock' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'rock')) {
        humanScore++;
        winner = 1;
        return winner;
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')) {
        computerScore++;
        winner = 0;
        return winner;
    //Add else if to compare draw and then use human choice undefined to count as a loss
    } else {
        winner = 2;
        return winner
    }
}

function playRound() {
    let cChoice = getComputerChoice();
    let hChoice = getHumanChoice();
    winner = evalRound(hChoice, cChoice);
    console.log("Your choice was: " + hChoice);
    console.log("Computer's choice was: " + cChoice);
    if (winner === 1) {
        console.log("You Won!");
    } else if (winner === 0) {
        console.log("You Lost!")
    } else {
        console.log ("Draw!");
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
        console.log("Your Score: " + humanScore);
        console.log("Computer's Score: " + computerScore);
    }
    if (humanScore > computerScore) {
        console.log("You're the overall winner!");
        return;
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
        return;
    } else {
        console.log("It's a draw!")
    }
}

game();
