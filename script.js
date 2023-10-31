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

function game() {
    for ( let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(determineOutcome(playerSelection, computerSelection));
    }
}

game();