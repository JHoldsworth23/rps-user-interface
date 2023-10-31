function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2: 
            return 'scissors';
    }
}

function determineOutcome(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    }
    
    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    }

    return  `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
}
