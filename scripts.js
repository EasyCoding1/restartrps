const startGameBtn = document.querySelector('#start-game-btn');

startGameBtn.addEventListener('click', () => {
  playRound();
});





function playRound () {
  const playerOptions = document.querySelectorAll('.pChoice');
  let playerChoice = null;
  let cptChoice = null;
  let playerScore = 0;
  let computerScore = 0;

  function getPlayerChoice() {
    playerOptions.forEach(Option => {
      Option.addEventListener('click', e => {
        playerChoice = e.target.id;
        console.log(`You have chosen ${playerChoice}!`);
        runComputerChoice ();
      });
    });
  }

  function runComputerChoice(){
    let computerOption = Math.floor(Math.random() * 3);

    if (computerOption === 0) {
      cptChoice = 'Earth';
    } else if (computerOption === 1) {
      cptChoice = 'Wind';
    } else {
      cptChoice = 'Fire';
    }

    console.log(`Computer picks ${cptChoice}!`)
    determineWinner();
  }

  function determineWinner () {
    let result = null;

    if (playerChoice === cptChoice) {  
      result = 1; /*draw*/
    } else if ((playerChoice === 'Earth' && cptChoice === 'Fire') ||
               (playerChoice === 'Wind' && cptChoice === 'Earth') ||
               (playerChoice === 'Fire' && cptChoice === 'Wind')) {
      result = 2; // player wins
    } else { 
      result = 3; /*pc win*/
    }  
    
    console.log(`Result ${result}`);
    updateGameLog(result);
    changeScore(result);
  }

  function updateGameLog(result) {
    const playerTextBox = document.querySelector('.gameLogTL');
    playerTextBox.textContent = `You picked ${playerChoice}!`;
    const computerTextBox = document.querySelector('.gameLogTR');
    computerTextBox.textContent = `Maurice White picked ${cptChoice}!`;
    const resultTextBox = document.querySelector('.gameLogB');
          
    switch (result) {
      case 1:
        resultTextBox.textContent = 'It is a draw!';
        break;
      case 2:
        resultTextBox.textContent = 'You win!';
        break;
      case 3:
        resultTextBox.textContent = 'Maurice White wins!';
        break;
    }

    const playerScoreBox = document.querySelector('.playerScore');
    const computerScoreBox = document.querySelector('.computerScore');

    playerScoreBox.textContent = `Player Score: ${playerScore}`;
    computerScoreBox.textContent = `Computer Score: ${computerScore}`;
  }

  function changeScore(result) {
    if (result === 1) {
      playerScore++;
    } else if (result === 2) {
      computerScore++;
    }

    console.log(`Player Score is ${playerScore}`);
    console.log(`Computer Score is ${computerScore}`);

    const playerScoreBox = document.querySelector('.playerScore');
    const computerScoreBox = document.querySelector('.computerScore');

    playerScoreBox.textContent = `Player Score: ${playerScore}`;
    computerScoreBox.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
      const playAgain = confirm(`Game Over! Do you want to play again?`);

      if (playAgain) {
        playerScore = 0;
        computerScore = 0;
        updateGameLog(0);
        getPlayerChoice();
      } else {
        alert(`Thanks for playing!`);
      }
    }
  }

  getPlayerChoice();
}
