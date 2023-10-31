function getComputerChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function determineOutcome(playerSelection, computerSelection) {
    return playerSelection === computerSelection ? "It's a tie" : 
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper") ? `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}` :
        `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const container = document.querySelector('#container');
const div = document.createElement('div');

let playerScore = 0;
let computerScore = 0;
const scoreboard = document.createElement('h2');

rock.addEventListener('click', () => {
    div.textContent = determineOutcome('rock', getComputerChoice());
    container.appendChild(div);

    textArray = div.textContent.split(" ")

    if (textArray.includes("win!")) {
        playerScore++;
    } else if (textArray.includes("lose!")) {
        computerScore++;
    }

    scoreboard.textContent = `${playerScore} - ${computerScore}`;
    container.appendChild(scoreboard);
});

paper.addEventListener('click', () => {
    div.textContent = determineOutcome('paper', getComputerChoice());
    container.appendChild(div);

    textArray = div.textContent.split(" ")

    if (textArray.includes("win!")) {
        playerScore++;
    } else if (textArray.includes("lose!")) {
        computerScore++;
    }

    scoreboard.textContent = `${playerScore} - ${computerScore}`;
    container.appendChild(scoreboard);
});

scissors.addEventListener('click', () => {
    div.textContent = determineOutcome('scissors', getComputerChoice());
    container.appendChild(div);
    
    textArray = div.textContent.split(" ")

    if (textArray.includes("win!")) {
        playerScore++;
    } else if (textArray.includes("lose!")) {
        computerScore++;
    }

    scoreboard.textContent = `${playerScore} - ${computerScore}`;
    container.appendChild(scoreboard);
});

if (playerScore === 5 || computerScore === 5) {

}