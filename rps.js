let humanScore = 0;
let computerScore = 0;
let winner;
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    computerChoice = choices[computerChoice];
    return computerChoice;
}

function evalRound(humanChoice, computerChoice) {
    if ((computerChoice === 'rock' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'rock')) {
        humanScore++;
        winner = 'You';
        return [winner, humanScore, computerScore];
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')) {
        computerScore++;
        winner = 'Computer';
        return [winner, humanScore, computerScore];
    } else {
        winner = 'Draw';
        return [winner, humanScore, computerScore];
    }
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    [winner, humanScore, computerScore] = evalRound(humanChoice, computerChoice);
    console.log("Your choice was: " + humanChoice);
    console.log("Computer's choice was: " + computerChoice);
    document.getElementById('hScore').innerText = humanScore;
    document.getElementById('cScore').innerText = computerScore;
    document.querySelector("#round-result").setAttribute("style", "visibility: visible");
    if (winner === 'You') {
        document.getElementById('round-match').innerText = humanChoice + " beats " + computerChoice;
        document.getElementById('round-winner').innerText = "*** You Win! ***";
        document.querySelector("#" + humanChoice).setAttribute("style", "background-color: #00FF00");
        console.log("You Won!");
        return;
    }
    if (winner === 'Computer') {
        document.getElementById('round-match').innerText = computerChoice + " beats " + humanChoice;
        document.getElementById('round-winner').innerText = "*** Computer Wins! ***";
        document.querySelector("#" + humanChoice).setAttribute("style", "background-color: #FF0000");
        console.log("You Lost!")
        return;
    }
    if (winner === 'Draw') {
        document.getElementById('round-match').innerText = humanChoice + " vs. " + computerChoice;
        document.getElementById('round-winner').innerText = "*** It's a Draw! ***";
        document.querySelector("#" + humanChoice).setAttribute("style", "background-color: #555555");
        console.log ("Draw!");
        return;
    }
    return;
}

function game(humanChoice) {
    document.querySelector("button").setAttribute("style", "background-color: buttonface");
    //verify a winner hasn't been decided
    if (humanScore > 4 || computerScore > 4) {
        window.alert("The game has ended, press \"Play Again\" to start over");
        return;
    }
    playRound(humanChoice);
    if (humanScore >= 5 || computerScore >= 5) {
        document.getElementById('game-winner').innerText = winner + " Won!";
        document.querySelector("#restart").setAttribute("style", "visibility: visible");
        return;
    }
    
    return;
}

function restartGame() {
    document.querySelector("#restart").setAttribute("style", "visibility: hidden");
    document.querySelector("#round-result").setAttribute("style", "visibility: hidden");
    humanScore = 0;
    computerScore = 0;
    document.getElementById('hScore').innerText = humanScore;
    document.getElementById('cScore').innerText = computerScore;
    document.getElementById('round-match').innerText = "";
    document.getElementById('round-winner').innerText = "";
    document.getElementById('game-winner').innerText = "";
}

//event listeners
const rock = document.querySelector("#rock");
rock.addEventListener("click", function (event) {
    game("rock");
  });

const paper = document.querySelector("#paper");
paper.addEventListener("click", function (event) {
    game("paper");
  });

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function (event) {
      game("scissors");
    });

const playAgain = document.querySelector("#play-again");
playAgain.addEventListener("click", function () {
    restartGame();
    });5