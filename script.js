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
    waterElement.disabled = true;
    fireElement.disabled = true;
    earthElement.disabled = true;

    mainSection.innerHTML = `
        <div>
            <h1>${finalMessage()}</h1>
            <h3>Final Score:</h3>
            <div>
                <p>Player: ${playerScore} </p>
                <p>Computer: ${computerScore}</p>
            </div>
            <button class="restart-btn">Play Again?</button>
        </div>
    `;
    
    const restart = document.querySelector('.restart-btn');
    restart.addEventListener('click', () => {
        window.location.reload();
    });
}

function finalMessage() {
    return playerScore > computerScore 
        ? "You are the Master of Elements" 
        : "Your Computer is the Master of Elements";
}

const mainSection = document.querySelector('#main-section');
const original = mainSection.innerHTML;

const waterElement = document.querySelector("#water");
const fireElement = document.querySelector("#fire");
const earthElement = document.querySelector("#earth");

const result = document.querySelector(".result-text");
const roundResult = document.createElement("h3");

const playerElement = document.querySelector(".player-choice");
const computerElement = document.querySelector(".computer-choice");

const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
let playerScore = 0;
let computerScore = 0;

waterElement.addEventListener("click", () => {
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

fireElement.addEventListener("click", () => {
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

earthElement.addEventListener("click", () => {
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