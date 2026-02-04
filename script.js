let playerCharacter = "mickey";
let computerCharacter = "minnie";

function selectGender(gender) {
  const playerImg = document.getElementById("player-img");
  const playerLabel = document.getElementById("player-label");
  const computerImg = document.getElementById("computer-img");
  const genderScreen = document.getElementById("genderScreen");

  if (gender === "male") {
    playerCharacter = "mickey";
    computerCharacter = "minnie";

    playerImg.src = "mickey.png";
    playerLabel.textContent = "YOU: MICKEY";
    computerImg.src = "minnie.png";
  } else {
    playerCharacter = "minnie";
    computerCharacter = "mickey";

    playerImg.src = "minnie.png";
    playerLabel.textContent = "YOU: MINNIE";
    computerImg.src = "mickey.png";
  }

  genderScreen.style.display = "none";
}

function getUserChoice(userInput) {
  const handSuffix = playerCharacter === "minnie" ? "1.png" : "1.png";
  document.getElementById("user-hand").src = userInput + handSuffix;
  return userInput;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const choice = choices[Math.floor(Math.random() * 3)];

  const handSuffix = computerCharacter === "minnie" ? "2.png" : "2.png";
  document.getElementById("computer-hand").src = choice + handSuffix;

  return choice;
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

function playGame(userInput) {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();

  document.getElementById("round-winner").textContent =
    determineWinner(userChoice, computerChoice);
}
