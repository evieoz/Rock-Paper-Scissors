let playerCharacter = "mickey";
let computerCharacter = "minnie";

let userScore = 0;
let computerScore = 0;
let gameOver = false;

function selectGender(gender) {
  const playerImg = document.getElementById("player-img");
  const playerLabel = document.getElementById("player-label");
  const computerImg = document.getElementById("computer-img");

  switch (gender) {
  case "male":
    playerCharacter = "mickey";
    computerCharacter = "minnie";
    playerImg.src = "mickey.png";
    playerLabel.textContent = "YOU: MICKEY";
    computerImg.src = "minnie.png";
    break;

  case "female":
    playerCharacter = "minnie";
    computerCharacter = "mickey";
    playerImg.src = "minnie.png";
    playerLabel.textContent = "YOU: MINNIE";
    computerImg.src = "mickey.png";
    break;

  default:
    console.log("Invalid gender selected");
}

  document.getElementById("genderScreen").style.display = "none";
  document.getElementById("gameContainer").style.display = "block";
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(user, computer) {
  if (user === computer) return "TIE";

  if (
    (user === "rock" && computer === "scissor") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissor" && computer === "paper")
  ) {
    return "YOU WON!";
  }

  return "COMPUTER WON!";
}


function playGame(userChoice) {
  if (gameOver) return;

  const computerChoice = getComputerChoice();

  document.getElementById("user-hand").src =
    userChoice + (playerCharacter === "mickey" ? "1.png" : "2.png");

  document.getElementById("computer-hand").src =
    computerChoice + (computerCharacter === "mickey" ? "1.png" : "2.png");

  const result = determineWinner(userChoice, computerChoice);
  document.getElementById("round-winner").textContent = result;

  if (result === "YOU WON!") {
    userScore++;
    document.getElementById("user-score").textContent = userScore;
    launchConfetti();
  } else if (result === "COMPUTER WON!") {
    computerScore++;
    document.getElementById("computer-score").textContent = computerScore;
  }

  checkGameOver();
}


function checkGameOver() {
  if (userScore === 3) {
    document.getElementById("match-winner").textContent =
      "YOU WON THE MATCH!";
    disableChoices();
    gameOver = true;
  }

  if (computerScore === 3) {
    document.getElementById("match-winner").textContent =
      "COMPUTER WON THE MATCH!";
    disableChoices();
    gameOver = true;
  }
}

function disableChoices() {
  document.querySelectorAll(".UserChoice img").forEach(img => {
    img.style.pointerEvents = "none";
    img.style.opacity = "0.5";
  });
}

function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor =
      `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDuration = 1 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2500);
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  gameOver = false;

  document.getElementById("user-score").textContent = 0;
  document.getElementById("computer-score").textContent = 0;
  document.getElementById("round-winner").textContent = "";
  document.getElementById("match-winner").textContent = "";

  document.getElementById("user-hand").src =
    playerCharacter === "mickey" ? "rock1.png" : "rock2.png";

  document.getElementById("computer-hand").src =
    computerCharacter === "mickey" ? "rock1.png" : "rock2.png";

  document.querySelectorAll(".UserChoice img").forEach(img => {
    img.style.pointerEvents = "auto";
    img.style.opacity = "1";
  });
}
