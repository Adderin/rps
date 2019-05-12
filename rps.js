const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
  return userInput;
} else {
  console.log('Error!');
}
};
function getComputerChoice() {
  switch (Math.floor(Math.random()*3)) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  default:
    return 'scissors';
}
}
function determineWinner(userChoice,computerChoice) {
  if(userChoice === computerChoice) {
    return 'A draw!'
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer won';
    }
    else {
      return 'Player won';
    }
  }
  else if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer won';
    }
    else {
      return 'Player won';
    }
  }
  else if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Computer won';
    }
    else {
      return 'Player won';
    }
}
}

function playGame() {
var userChoice = getUserChoice('paper');
var computerChoice = getComputerChoice();
console.log(userChoice,computerChoice);
console.log(determineWinner(userChoice,computerChoice));
}
playGame();