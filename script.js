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

function capitalizeWord(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function playRound(playerSelection) {
    const computerSelection = ["water", "fire", "earth"][Math.floor(Math.random() * 3)];;
    
    roundResult.textContent = determineOutcome(playerSelection, computerSelection);
    playerElement.textContent = emojiElement(playerSelection);
    computerElement.textContent = emojiElement(computerSelection);
    result.appendChild(roundResult);

    if (updateScore(roundResult.textContent)) {
        gameOver();
    }
}

function determineOutcome(playerSelection, computerSelection) {
    return playerSelection === computerSelection ? "It's a tie" :
        (playerSelection === "water" && computerSelection === "fire") || 
        (playerSelection === "fire" && computerSelection === "earth") || 
        (playerSelection === "earth" && computerSelection === "water") ? 
        `You win this round! ${capitalizeWord(playerSelection)} beats ${capitalizeWord(computerSelection)}` :
        `You lose this round! ${capitalizeWord(playerSelection)} is beaten by ${capitalizeWord(computerSelection)}`;
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
    const mainSection = document.querySelector('#main-section');
    mainSection.innerHTML = `
        <div class="restart">
            <h1 class="winner-text">${finalMessage()}</h1>
            <h3 class="score-heading">Final Score:</h3>
            <div class="final-score flex-center">
                <p class="score-text">Player: ${playerScore} </p>
                <p class="score-text">Computer: ${computerScore}</p>
            </div>
            <hr>
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
    playRound('water');
});

fireElement.addEventListener("click", () => {
    playRound('fire');
});

earthElement.addEventListener("click", () => {
    playRound('earth');
});
