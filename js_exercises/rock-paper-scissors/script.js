let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let round = 0;

// this works, but what's a simpler way of getting a random value from a set?

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

// this function is doing too much stuff
// it's purpose is to compare the two inputs and identify which one won
// instead it's also incrementing round count and scores
// that should be left to the parent function which calls this function
// that makes this function way more maintainable
// i.e. if you were to add a third player, then this function needs to add logic both to compare 3 inputs and to count scores
// counting scores should be up to the parent function which controls the logic of the overall game
function playRPS(playerSelection, computerSelection = getRandomChoice()) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
    round++;
  }

  // make these constant values, like boolean or integer, and return those
  // the function header should describe what each output value means
  // going even further than that would be to make it a constant or enum to make working in IDE easier due to intellisense
  // any time you can make something constant, make it constant
  // when you're repeating the same raw strings over-and-over, you can make it constant
  // this helps avoiding typos
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    round++;
    roundWinner = "player";
  }
  // why is this a separate if instead of an if-else?
  if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS")
  ) {
    computerScore++;
    round++;
    roundWinner = "computer";
  }

  console.log(`Round ${round}`);
  console.log("Player Score: ", playerScore);
  console.log("Computer Score: ", computerScore);

  // what does this function know of the concept of "rounds"?
  
  if (roundWinner === "computer") {
    console.log("The computer won this round.");
  } else if (roundWinner === "player") {
    console.log("You won this round!");
  } else {
    console.log("It was a tie!");
  }
}

// 5 is repeated everywhere - how can you simplify this?
// i.e. how do you minimze the changes to your code if you want to make the # of rounds won 10 instead of 5?
function winOrLose() {
  if (playerScore === 5) {
    console.log("You win!");
  }

  if (computerScore === 5) {
    console.log("You lost!");
  }
}

function gameOver() {
  return playerScore !== 5 && computerScore !== 5;
}

/////////////////////////////////////////////////////

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  if (gameOver()) {
    playRPS("ROCK");
    winOrLose();
  }
});
paperBtn.addEventListener("click", () => {
  if (gameOver()) {
    playRPS("PAPER");
    winOrLose();
  }
});
scissorsBtn.addEventListener("click", () => {
  if (gameOver()) {
    playRPS("SCISSORS");
    winOrLose();
  }
});

// this unittest is now stateful
// i.e. you can have unitTest here, but if you add unitTest2 in a separate function,
// you need to restart the program because the round and win counters are still from the previous unitTest call
function unitTest() {
  // Player = Rock
  playRPS("ROCK", "ROCK");
  playRPS("ROCK", "SCISSORS");
  playRPS("ROCK", "PAPER");
  // Player = PAPER
  playRPS("PAPER", "ROCK");
  playRPS("PAPER", "SCISSORS");
  playRPS("PAPER", "PAPER");
  // Player = SCISSORS
  playRPS("SCISSORS", "ROCK");
  playRPS("SCISSORS", "SCISSORS");
  playRPS("SCISSORS", "PAPER");
}

unitTest();
