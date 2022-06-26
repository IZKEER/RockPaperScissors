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
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerScore++;
        return `You WIN! Rock beats Scissors. Score ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        computerScore++;
        return `You lose! Paper beats Rock! Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore++;
        return `You WIN! Scissors beats Paper. Score ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        computerScore++;
        return `You lose! Scissors beats Paper! Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore++;
        return `You WIN! Scissors beats Paper!. Score ${playerScore} to ${computerScore}`;
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
