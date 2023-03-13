function playRound () {

    const playerOptions = document.querySelectorAll('.pChoice');
    let playerChoice = null;
    let cptChoice = null;


    /*Find player choice variable, trigger computer choice and log player choice to Gamelog */
    function getPlayerChoice() {
        playerOptions.forEach(Option => {
          Option.addEventListener('click', e => {
            playerChoice = e.target.id;
            console.log(`You have chosen ${playerChoice}!`);
            runComputerChoice ();
          });
        });
      }



    /*Find Computer Choice Variable each time getPlayerChoice is called, and log to gameLog*/

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
          } else if ( (playerChoice === 'Earth' && cptChoice === 'Fire') ||
                      (playerChoice === 'Wind' && cptChoice === 'Earth') ||
                      (playerChoice === 'Fire' && cptChoice === 'Wind')) {
          result = 2; // player wins
          } else { 
            result = 3; /*pc win*/
          }  
          
          console.log(`Result ${result}`);
          updateGameLog(result);
        };


        function updateGameLog(result) {
          let playerScore = 0;
          let computerScore = 0;
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
              playerScore++;
              console.log('Player Score: ' + playerScore);
              break;
            case 3:
              resultTextBox.textContent = 'Maurice White wins!';
              computerScore++;
              console.log('Computer Score : ' + computerScore);
              break;
          }
        }
        
        getPlayerChoice();
      }
      
      playRound();