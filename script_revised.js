function getComputerChoice() {
    return ['water', 'fire', 'earth'][Math.floor(Math.random() * 3)];
}

function determineOutcome(playerSelection, computerSelection) {
    return playerSelection === computerSelection ? "It's a tie" :
        (playerSelection === "water" && computerSelection === "fire") || 
        (playerSelection === "fire" && computerSelection === "earth") || 
        (playerSelection === "earth" && computerSelection === "water") ? 
        `You win this round!\n ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}` :
        `You lose this round!\n ${playerSelection.toUpperCase()} is beaten by ${computerSelection.toUpperCase()}`;
}

function finalMessage() {
    return playerScore > computerScore 
        ? "You are the Master of Elements" 
        : "Your computer is the Master of Elements";
}

const water_element = document.querySelector('#water');
const fire_element = document.querySelector('#fire');
const earth_element = document.querySelector('#earth');

const result = document.querySelector('.result-text');
const roundResult = document.createElement('h3');

water_element.addEventListener('click', () => {
    roundResult.textContent = determineOutcome('water', getComputerChoice());
    result.appendChild(roundResult);
});

fire_element.addEventListener('click', () => {
    roundResult.textContent = determineOutcome('fire', getComputerChoice());
    result.appendChild(roundResult);
});

earth_element.addEventListener('click', () => {
    roundResult.textContent = determineOutcome('earth', getComputerChoice());
    result.appendChild(roundResult);
});