// Selecting DOM elements
const resetGameBtn = document.querySelector('#start-game-btn');
const playerOptions = document.querySelectorAll('.pChoice');
const playerScoreBox = document.querySelector('.playerScore');
const computerScoreBox = document.querySelector('.computerScore');
const playerTextBox = document.querySelector('.gameLogTL');
const computerTextBox = document.querySelector('.gameLogTR');
const resultTextBox = document.querySelector('#winText');
let playerScore = 0;
let computerScore = 0;

// reset game function
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateGameLog(0, undefined, undefined);
}

// event listener to the reset game button
resetGameBtn.addEventListener('click', () => {
  resetGame();
});

// event listenes to player choice buttons
playerOptions.forEach(option => {
  option.addEventListener('click', e => {
    const playerChoice = e.currentTarget.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateGameLog(result, playerChoice, computerChoice);
  });
});


function getComputerChoice() {
  const computerOption = Math.floor(Math.random() * 3);

  if (computerOption === 0) {
    return 'Earth';
  } else if (computerOption === 1) {
    return 'Wind';
  } else {
    return 'Fire';
  }
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 1; // draw
  } else if (
    (playerChoice === 'Earth' && computerChoice === 'Fire') ||
    (playerChoice === 'Wind' && computerChoice === 'Earth') ||
    (playerChoice === 'Fire' && computerChoice === 'Wind')
  ) {
    playerScore++;
    updateScore(playerScoreBox);
    return 2; // player wins
  } else {
    computerScore++;
    updateScore(computerScoreBox);
    return 3; // computer wins
  }
}

function updateScore(scoreElement) {
  scoreElement.classList.add("score-update");
  setTimeout(() => {
    scoreElement.classList.remove("score-update");
  }, 1000);
}

function updateGameLog(result, playerChoice, computerChoice) {
  playerTextBox.textContent = `You picked ${playerChoice}!`;
  computerTextBox.textContent = `Maurice White picked ${computerChoice}!`;

  switch (result) {
    case 1:
      resultTextBox.textContent = 'It is a draw!';
      break;
    case 2:
      resultTextBox.textContent = 'You win!';
      indicateWinner(playerScoreBox);
      break;
    case 3:
      resultTextBox.textContent = 'Maurice White wins!';
      indicateWinner(computerScoreBox);
      break;
    default:
      resultTextBox.textContent = '';
      break;
  }

  playerScoreBox.textContent = `Player Score: ${playerScore}`;
  computerScoreBox.textContent = `Computer Score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    let message;

    if (playerScore === 5) {
      message = 'You WIN! Do you want to play again?';
    } else {
      message = 'You LOSE! Do you want to play again?';
    }

    const playAgain = confirm(message);

    if (playAgain) {
      resetGame();
    } else {
      alert(`Thanks for playing!`);
    }
  }
}

function indicateWinner(winnerElement) {
  winnerElement.classList.add("win-indicator");
  setTimeout(() => {
    winnerElement.classList.remove("win-indicator");
  }, 1000);
}


const soundButton = document.querySelector('#soundTog');
const backgroundMusic = document.querySelector('#background-music');


soundButton.addEventListener('click', () => {
  // Toggle the audio 
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    soundButton.textContent = "Mute";
  } else {
    backgroundMusic.pause();
    soundButton.textContent = "Sound";
  }
});

// Start the background music
backgroundMusic.play();


  