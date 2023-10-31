function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'ROCK';
        case 1: 
            return 'PAPER';
        case 2: 
            return 'SCISSORS';
    }
}

function playRound(playerSelection, computerSelection) {
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

console.log(playRound("rock", getComputerChoice().toLowerCase()));