"use strict";

let score = 20;
let update = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let displayMassage = function (message) {
  document.querySelector(".message").textContent = message;
};
let displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
let displaySecretNum = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   when no number
  if (!guess) {

    displayMassage("⛔ No Number!");
    // when is game win!!
  } else if (guess === secretNumber) {

    displayMassage("🎉 Correct Number!");

    displaySecretNum(secretNumber);

    if (score > update) {
      update = score;
      document.querySelector(".highscore").textContent = update;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
  } else if (guess !== secretNumber) {
    if (score > 1) {
  
      displayMassage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      --score;
  
      displayScore(score);
    } else {

      displayMassage("😢 You lost the game!");

      displayScore(0);
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMassage("Start guessing...");

  displayScore(score);

  displaySecretNum("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
