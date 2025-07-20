function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"]
    let randomNumber = Math.round(Math.random() * 10) % 3
    return choices[randomNumber]
}

function getHumanChoice() {
    let input = prompt("Your choice: ")
    return input
}

function playRound(humanChoice, computerChoice) {
    let gameState = 0
    switch(humanChoice.toLowerCase()) {
        case "rock": {
            switch(computerChoice.toLowerCase()) {
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
            switch(computerChoice.toLowerCase()) {
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
            switch(computerChoice.toLowerCase()) {
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
    switch(gameState) {
        case 0: {
            console.log(`Draw! ${humanChoice} is the same as ${computerChoice}`)
            break
        }
        case 1: {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
            break
        }
        case 2: {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
            break
        }
    }
}

function playGame() {
    while(true) {
        playRound(getHumanChoice(),getComputerChoice())
        console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`)
    }
}

let humanScore = 0
let computerScore = 0

playGame()
