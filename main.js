const computerPlay= () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0){
      return 'Rock';
    }
    else if (randomNumber === 1){
      return 'Paper';
    }
    else if (randomNumber === 2){
    return 'Scissor';
    }
      }
  console.log(computerPlay());


  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
       return `It's a tie! you both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
       return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
       return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
       return "You win! Scissors beats Paper";
    } else {
       return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
 }
 
 const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
 const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection))

 function playTimes(total) {
    if (total < 5) {
      console.log(total);
    } else {
      var finalWinner = winnerSelection();
      document.getElementById("winner").innerHTML = 'The result after 5 matches is that ' + finalWinner;
    }
  }
  
  //function that determines winner
  function winnerSelection() {
    if (win > lost && win > draw) {
      return 'You win!!!';
    } else if (lost > win && lost > draw) {
      return 'You lose =(';
    } else return 'It is a draw'
  }

  