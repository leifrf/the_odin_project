// create a function that will randomly return 1 of the following: "Rock", "Paper", "Scissors". this function will be the computer's play

function computerSelection() {
  // Use math.random to get a value between 0 and 2 (note: end is not inclusive)
  // Floor it to get rid of decimals so numbers stay between 0-2
  let computerMove = Math.floor(Math.random() * 3);

  if (computerMove === 0) {
    // 0 = Rock
    return "Rock";
  } else if (computerMove === 1) {
    // 1 = Paper
    return "Paper";
  } else {
    // 2 = Scissors
    return "Scissors";
  }
}

// Make prompt case insensitive
function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

// write a function that plays a single round of Rock, Paper Scissors (RPS). The function takes 2 parameters (playerSelection, computerSelection). Then it returns a string that declares the winner of the round so: "You Lose! Paper beats Rock!" note: make sure to return values, not console.log(). But you can use console.log() to test your code

function playRPS(playerSelection, computerPlay = computerSelection()) {
  let lose = `${computerPlay} beats ${playerSelection}. You lose!`;
  let win = `${playerSelection} beats ${computerPlay}. You win!`;

  if (playerSelection === "Rock" && computerPlay === "Paper") {
    return lose;
  } else if (playerSelection === "Rock" && computerPlay === "Scissors") {
    return win;
  } else if (playerSelection === "Scissors" && computerPlay === "Rock") {
    return lose;
  } else if (playerSelection === "Scissors" && computerPlay === "Paper") {
    return win;
  } else if (playerSelection === "Paper" && computerPlay === "Scissors") {
    return lose;
  } else if (playerSelection === "Paper" && computerPlay === "Rock") {
    return win;
  } else if (playerSelection === computerPlay) {
    return "It's a tie!";
  } else {
    return `${playerSelection} is not valid. Please try again with one of these options: [Rock, Paper, Scissors]`;
  }
}

const rockBtnElement = document.querySelector("#rock");
const paperBtnElement = document.querySelector("#paper");
const scissorsBtnElement = document.querySelector("#scissors");

function game() {
  const winningScore = 5;
  let computerWins = 0;
  let playerWins = 0;
  let rounds = 1;
  let playerMove = "";

  rockBtnElement.addEventListener("click", () => {
    if (playRPS("Rock")) {
      playerMove === "Rock";
    }
  });

  paperBtnElement.addEventListener("click", () => {
    if (playRPS("Paper")) {
      playerMove === "Paper";
    }
  });
  scissorsBtnElement.addEventListener("click", () => {
    if (playRPS("Scissors")) {
      playerMove === "Scissors";
    }
  });

  const computerMove = computerSelection();
  const roundResult = playRPS(playerMove, computerMove);

  console.log(`Current round: ${rounds}`);

  if (roundResult.search("You win!") > -1) {
    playerWins++;
    console.log(roundResult);
  } else if (roundResult.search("You lose!") > -1) {
    computerWins++;
    console.log(roundResult);
  } else {
    console.log(roundResult);
  }
  rounds++;

  const finalResult = `
    Number of Rounds: ${rounds - 1}
    Scores:
    You: ${playerWins}
    Computer: ${computerWins}`;

  if (playerWins === winningScore) {
    console.log(`You win! ${finalResult}`);
  } else {
    console.log(`You lost...${finalResult}`);
  }
}
