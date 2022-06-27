function computerPlay() {
    const number = Math.floor(Math.random() * 3);
    if (number == 0) return 'Rock';
    if (number == 1) return 'Scissors';
    if (number == 2) return 'Paper';
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        playerScore++;
        return `You WIN! Rock beats Scissors. Score ${playerScore} to ${computerScore}`;
    }
    if (playerSelection == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        return `You Lose! Paper covers Rock! Score: ${playerScore} to ${computerScore}`;
    }
    if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        return `You Lose! Scissors cuts Paper. Score ${playerScore} to ${computerScore}`;
    }
    if (playerSelection == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        return `You Win! Paper covers Rock! Score: ${playerScore} to ${computerScore}`;
    }
    if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        computerScore++;
        return `You Lose! Rock beats Scissors!. Score ${playerScore} to ${computerScore}`;
    }
    if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        return `You Win! Scissors beats Paper. Score: ${playerScore} to ${computerScore}`;
    }
    return `Its a Draw! Try again!! Score: ${playerScore} to ${computerScore}`;
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
