
/*Find player choice variable */
const playerOptions = document.querySelectorAll('.pChoice');
let playerOption = null;

function getPlayerChoice() {
    playerOptions.forEach(Option => {
      Option.addEventListener('click', e => {
      let playerOption = e.target.id;
        console.log(playerOption);
      });
    });
    return playerOption;
  }

let playerChoice = getPlayerChoice();








/*Find Computer Choice Variable*/

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
console.log(computerChoice);

