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
    const result = determineOutcome('rock', getComputerChoice());
    console.log(result);
});

paper.addEventListener('click', () => {
    const result = determineOutcome('rock', getComputerChoice());
    console.log(result);
});

scissors.addEventListener('click', () => {
    const result = determineOutcome('rock', getComputerChoice());
    console.log(result);
});