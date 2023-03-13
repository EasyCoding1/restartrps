
/*Find player choice variable, trigger computer choice and log player choice to Gamelog */
const playerOptions = document.querySelectorAll('.pChoice');
let playerOption = null;

function getPlayerChoice() {
    playerOptions.forEach(Option => {
      Option.addEventListener('click', e => {
        playerOption = e.target.id;
        console.log('You have chosen ' + playerOption + '!');
        runComputerChoice ();
        const cpTextBox = document.querySelector('.gameLogTL');
        cpTextBox.textContent = 'You pick  ' + playerOption + '!';
      });
    });
    return playerOption;
  }

let playerChoice = getPlayerChoice();








/*Find Computer Choice Variable each time getPlayerChoice is called, and log to gameLog*/

function runComputerChoice() {

    function getComputerChoice() {
      let cptChoice;
        let computerOption = Math.floor(Math.random() * 3);
        if (computerOption === 0) {
          cptChoice = 'Earth';
        } else if (computerOption === 1) {
          cptChoice = 'Wind';
        } else if (computerOption === 2){
          cptChoice = 'Fire';
        }
        return cptChoice;
    };

    let computerChoice = getComputerChoice();
    console.log('Computer picks : ' + computerChoice + '!');
    const cpTextBox = document.querySelector('.gameLogTR')
    cpTextBox.textContent = 'Maurice White picks ' + computerChoice + '!';
  }


function playRound () {
  let result;
  const playerChoice = getPlayerChoice();
  const cptChoice = runComputerChoice();

    function determineWinner (playerChoice, cptChoice) {
      if (playerChoice == cptChoice) {  
      result = 1; /*draw*/
      } else if (playerChoice == 'Earth' && cptChoice == 'Fire') {
        result = 2; /*player win*/
      } else if (playerChoice == 'Wind' && cptChoice == 'Earth') {
        result = 2; /*player win*/
      } else { 
        result = 3; /*pc win*/
      }  
      console.log(result);

    };
    let roundResult = determineWinner(playerChoice, cptChoice);
    const gameLogBT = document.querySelector('.gameLogB');
    gameLogBT.textContent = roundResult;
  }
  playRound();
  