function getComputerChoice() {
    let choices = ["rock","paper","scissors"]
    let randomNumber = Math.round(Math.random() * 10) % 3
    return choices[randomNumber]
}

function determineWinner(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock": {
            switch(computerChoice) {
                case "rock": {
                    gameState = 0
                    break
                }
                case "paper": {
                    gameState = 2
                    break
                }
                case "scissors": {
                    gameState = 1
                    break
                }
            }
            break
        }
        case "paper": {
            switch(computerChoice) {
                case "rock": {
                    gameState = 1
                    break
                }
                case "paper": {
                    gameState = 0
                    break
                }
                case "scissors": {
                    gameState = 2
                    break
                }
            }
            break
        }
        case "scissors": {
            switch(computerChoice) {
                case "rock": {
                    gameState = 2
                    break
                }
                case "paper": {
                    gameState = 1
                    break
                }
                case "scissors": {
                    gameState = 0
                    break
                }
            }
            break
        }
    }
    return gameState;
}

function refreshUIOnGameWin(gameState, humanChoice, computerChoice) {
    switch(gameState) {
        case 0: {
            divResults.textContent = `Draw! ${humanChoice} is the same as ${computerChoice}`;
            break;
        }
        case 1: {
            divResults.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            computerLives--;
            break;
        }
        case 2: {
            divResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            humanLives--;
            break;
        }
    }
    if(humanLives == 0) {
        divLives.textContent = 'You lost the game!';
        computerLives = 5;
        humanLives = 5;
    }
    else if(computerLives == 0) {
        divLives.textContent = 'You won the game!';
        computerLives = 5;
        humanLives = 5;
    }
    else {
        divLives.textContent = `Your lives: ${humanLives} Computer's lives: ${computerLives}`;
    }
}

function playRound(humanChoice, computerChoice) {
    let gameState = determineWinner(humanChoice, computerChoice);
    refreshUIOnGameWin(gameState, humanChoice, computerChoice);
}

function playGame(humanChoice) {
    playRound(humanChoice.toLowerCase(), getComputerChoice().toLowerCase());
}

let buttonRock = document.querySelector("#button-rock");
let buttonPaper = document.querySelector("#button-paper");
let buttonScissors = document.querySelector("#button-scissors");

buttonRock.addEventListener('click',
    () => playGame('rock')
);
buttonPaper.addEventListener('click',
    () => playGame('paper')
);
buttonScissors.addEventListener('click',
    () => playGame('scissors')
);

let divLives = document.querySelector("#lives");
let divResults = document.querySelector("#result");

let humanLives = 5;
let computerLives = 5;
