
function getComputerChoice() {
    let x = Math.random();
    if (x <= 1 / 3) {
        return "rock"
    } else if (x <= 2 / 3) {
        return "paper"
    } else { return "scissors" }
}

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors")
}

function playGame() {
    let humanScore = 0
    let computerScore = 0


    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It’s a tie!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    if (humanScore < computerScore) { console.log(`Computer Wins`) } else if (humanScore > computerScore) { console.log(`Human Wins!`) } else { console.log(`It is a tie`) }

}

playGame()
