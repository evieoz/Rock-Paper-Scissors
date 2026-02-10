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

    document.getElementById("user-hand").src = "rock1.png";
    document.getElementById("computer-hand").src = "rock2.png"; 
  } else {
    playerCharacter = "minnie";
    computerCharacter = "mickey";

    playerImg.src = "minnie.png";
    playerLabel.textContent = "YOU: MINNIE";
    computerImg.src = "mickey.png";

    document.getElementById("user-hand").src = "rock2.png";
    document.getElementById("computer-hand").src = "rock1.png";
  }

  genderScreen.style.display = "none";
  document.getElementById("gameContainer").style.display = "block";
}

function getUserChoice(userInput) {
  let handSuffix;
  if (playerCharacter === "mickey") {
    handSuffix = "1.png";
  } else {
    handSuffix = "2.png";
  }
  document.getElementById("user-hand").src = userInput + handSuffix;
  return userInput;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const choice = choices[Math.floor(Math.random() * 3)];
  let handSuffix;
  if (computerCharacter === "mickey") {
    handSuffix = "1.png";
  } else {
    handSuffix = "2.png";
  }
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
  const result = determineWinner(userChoice, computerChoice);

  document.getElementById("round-winner").textContent = result;

  if (result === "YOU WON!") {

    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");


      const shapes = ["0%", "50%", "25%"]; 
      confetti.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];

      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.width = 8 + Math.random() * 12 + "px";
      confetti.style.height = 8 + Math.random() * 12 + "px";
      confetti.style.animationDuration = 1 + Math.random() * 2 + "s";
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 2500);
    }

    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.style.left = Math.random() * window.innerWidth + "px";
      sparkle.style.width = 4 + Math.random() * 6 + "px";
      sparkle.style.height = sparkle.style.width;
      sparkle.style.animationDuration = 1 + Math.random() * 1.5 + "s";
      sparkle.style.opacity = Math.random();
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 2000);
    }
  }
}