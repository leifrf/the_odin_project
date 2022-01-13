let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let round = 0;

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

function playRPS(playerSelection, computerSelection = getRandomChoice()) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
    round++;
  }

  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    round++;
    roundWinner = "player";
  }

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

  if (roundWinner === "computer") {
    console.log("The computer won this round.");
  } else if (roundWinner === "player") {
    console.log("You won this round!");
  } else {
    console.log("It was a tie!");
  }
}

function winOrLose() {
  if (playerScore === 5) {
    console.log("You win!");
  }

  if (computerScore === 5) {
    console.log("You lost!");
  }
}

/////////////////////////////////////////////////////

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  if (playerScore !== 5 && computerScore !== 5) {
    playRPS("ROCK");
    winOrLose();
  }
});
paperBtn.addEventListener("click", () => {
  if (playerScore !== 5 && computerScore !== 5) {
    playRPS("PAPER");
    winOrLose();
  }
});
scissorsBtn.addEventListener("click", () => {
  if (playerScore !== 5 && computerScore !== 5) {
    playRPS("SCISSORS");
    winOrLose();
  }
});

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
