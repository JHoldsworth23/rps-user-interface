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

rock.addEventListener('click', () => {
    console.log('rock')
});

paper.addEventListener('click', () => {
    console.log('paper')
});

scissors.addEventListener('click', () => {
    console.log('scissors')
});