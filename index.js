function computerPlay() {
    const number = Math.random() * 3;
    if (number <= 1) {
        return 'Rock';
    } else if (number >= 2) {
        return 'Scissors';
    } else {
        return 'Paper';
    }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        playerScore++;
        return `You WIN! Rock beats Scissors. Score ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        return `You lose! Paper co Rock! Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        return `You Lose! Scissors cut paper. Score ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        return `You Win! paper covers rock! Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        computerScore++;
        return `You lose! rock beats Scissors!. Score ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        return `You Win! Scissors beat paper. Score: ${playerScore} to ${computerScore}`;
    } else return `Its a Draw!! Try again!! Score: ${playerScore} to ${computerScore}`;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Type: Rock, Paper, or Scissors');
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
    } else console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
}

game();
