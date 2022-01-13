// create a function that will randomly return 1 of the following: "Rock", "Paper", "Scissors". this function will be the computer's play

function computerSelection() {
  // Use math.random to get a value between 0 and 2 (note: end is not inclusive)
  // Floor it to get rid of decimals so numbers stay between 0-2
  let computerMove = Math.floor(Math.random() * 3);

  // this works, but what's a simpler way of getting a random value from a set?
  
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
  // make these constant values, like boolean or integer, and return those
  // the function header should describe what each output value means
  // going even further than that would be to make it a constant or enum to make working in IDE easier due to intellisense
  let lose = `${computerPlay} beats ${playerSelection}. You lose!`;
  let win = `${playerSelection} beats ${computerPlay}. You win!`;

  // any time you can make something constant, make it constant
  // when you're repeating the same raw strings over-and-over, you can make it constant
  // this helps avoiding typos
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
    // what if both playerSelection and computerPlay are invalid values?
    // i.e. playerSelection = "foobar" and computerPlay = "foobar"
    // this shouldn't happen in the context of the program, but the user can give arbitrary input
    // what if you want to update this to make it between two players, such that computerPlay is also aribtrary input?
  } else if (playerSelection === computerPlay) {    
    return "It's a tie!";
    // input validation should happen at the start of the function, rather than in the processing logic
    // if the input is bad, then you don't want to do anything else in the function.
    // you've already done work at this point when you know it's not going to be useful since the input is bad.
  } else {
    return `${playerSelection} is not valid. Please try again with one of these options: [Rock, Paper, Scissors]`;
  }
}

// write another function called game(). use the previous function that plays a single round of RPS inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end

function game() {
  const winningScore = 2;
  let computerWins = 0;
  let playerWins = 0;
  // why does rounds start at 1?
  let rounds = 1;

  while (playerWins < winningScore && computerWins < winningScore) {
    const playerMove = capitalize(prompt("What's your move?: "));
    const computerMove = computerSelection();
    const roundResult = playRPS(playerMove, computerMove);

    console.log(`Current round: ${rounds}`);

    // change roundResult to use the returned value
    // how can you further simplify this if block?
    if (roundResult.search("You win!") > -1) {
      playerWins++;
      console.log(roundResult);
    } else if (roundResult.search("You lose!") > -1) {
      computerWins++;
      console.log(roundResult);
    } else {
      console.log(roundResult);
    }
    // in what case do you not want to increment the round?
    // look closely at the problem description
    rounds++;
  }

  const finalResult = `
    Number of Rounds: ${rounds - 1}
    Scores:
    You: ${playerWins}
    Computer: ${computerWins}`;

  // this works, but is harder to maintain
  // how could you calculate which contestant won with fewer variables tracking?
  if (playerWins === winningScore) {
    console.log(`You win! ${finalResult}`);
  } else {
    console.log(`You lost...${finalResult}`);
  }
}
