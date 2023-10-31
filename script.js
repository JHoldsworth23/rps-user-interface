function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2: 
            return 'scissors';
    }
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