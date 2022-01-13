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

// write another function called game(). use the previous function that plays a single round of RPS inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end

function game() {
  let winningScore = 2;
  let computerWins = 0;
  let playerWins = 0;
  let rounds = 0;

  while (playerWins < winningScore && computerWins < winningScore) {
    let playerMove = capitalize(prompt("What's your move?: "));
    let computerMove = computerSelection();
    let roundResult = playRPS(playerMove, computerMove);

    console.log(`Current round: ${rounds}`);

    if (roundResult.search("You win!") > -1) {
      playerWins++;
      console.log(roundResult);
      rounds++;
    } else if (roundResult.search("You lose!") > -1) {
      computerWins++;
      console.log(roundResult);
      rounds++;
    } else {
      console.log(roundResult);
      rounds++;
    }
  }

  if (playerWins === winningScore) {
    console.log(`You win!
    Number of Rounds: ${rounds}
    Scores:
    You: ${playerWins}
    Computer: ${computerWins}`);
  } else {
    console.log(`You lost...
    Number of Rounds: ${rounds}
    Scores:
    You: ${playerWins}
    Computer: ${computerWins}`);
  }
}
