function getComputerChoice() {
    return ["water", "fire", "earth"][Math.floor(Math.random() * 3)];
}

function emojiElement(element) {
    switch (element) {
        case "water":
            return "💧";
        case "fire":
            return "🔥";
        case "earth":
            return "🍃";
    }
}

function determineOutcome(playerSelection, computerSelection) {
    return playerSelection === computerSelection ? "It's a tie" :
        (playerSelection === "water" && computerSelection === "fire") || 
        (playerSelection === "fire" && computerSelection === "earth") || 
        (playerSelection === "earth" && computerSelection === "water") ? 
        `You win this round! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}` :
        `You lose this round! ${playerSelection.toUpperCase()} is beaten by ${computerSelection.toUpperCase()}`;
}

function updateScore(result) {
    textArray = result.split(" ");
    if (textArray.includes("win")) {
        playerScore++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
    } else if (textArray.includes("lose")) {
        computerScore++;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }

    return (playerScore === 5 || computerScore === 5) ? true : false;
}

function gameOver() {
    water_element.disabled = true;
    fire_element.disabled = true;
    earth_element.disabled = true;

    mainSection.innerHTML = `
        <div>
            <h1>${finalMessage()}</h1>
            <h3>Final Score:</h3>
            <p>Player: ${playerScore} - Computer: ${computerScore}</p>
            <button>Play Again?</button>
        </div>
    `;
}

function finalMessage() {
    return playerScore > computerScore 
        ? "You are the Master of Elements" 
        : "Your computer is the Master of Elements";
}

const mainSection = document.querySelector('#main-section');
const original = mainSection.innerHTML;

const water_element = document.querySelector("#water");
const fire_element = document.querySelector("#fire");
const earth_element = document.querySelector("#earth");

const result = document.querySelector(".result-text");
const roundResult = document.createElement("h3");

const playerElement = document.querySelector(".player-choice");
const computerElement = document.querySelector(".computer-choice");

const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
let playerScore = 0;
let computerScore = 0;

water_element.addEventListener("click", () => {
    const playerSelection = "water";
    const computerSelection = getComputerChoice();

    roundResult.textContent = determineOutcome(playerSelection, computerSelection);
    playerElement.textContent = emojiElement(playerSelection);
    computerElement.textContent = emojiElement(computerSelection);
    result.appendChild(roundResult);

    if (updateScore(roundResult.textContent)) {
        console.log("End the GAME!");
        gameOver();
    }
});

fire_element.addEventListener("click", () => {
    const playerSelection = "fire";
    const computerSelection = getComputerChoice();

    roundResult.textContent = determineOutcome(playerSelection, computerSelection);
    playerElement.textContent = emojiElement(playerSelection);
    computerElement.textContent = emojiElement(computerSelection);
    result.appendChild(roundResult);

    if (updateScore(roundResult.textContent)) {
        console.log("End the GAME!");
        gameOver();
    }
});

earth_element.addEventListener("click", () => {
    const playerSelection = "earth";
    const computerSelection = getComputerChoice();

    roundResult.textContent = determineOutcome(playerSelection, computerSelection);
    playerElement.textContent = emojiElement(playerSelection);
    computerElement.textContent = emojiElement(computerSelection);
    result.appendChild(roundResult);

    if (updateScore(roundResult.textContent)) {
        console.log("End the GAME!");
        gameOver();
    }
});