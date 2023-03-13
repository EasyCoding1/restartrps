const playerChoices = document.querySelectorAll('.pChoice');


function getPlayerChoice() {
    playerChoices.forEach(choice => {
      choice.addEventListener('click', e => {
      let playerChoice = e.target.id;
        console.log(playerChoice);
      });
    });
  }

getPlayerChoice();






function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
 }

 const computerChoice = getComputerChoice();
 console.log(computerChoice);
