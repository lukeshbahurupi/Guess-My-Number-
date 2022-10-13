"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

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
    // document.querySelector(".message").textContent = "⛔ No Number!";
    displayMassage("⛔ No Number!");
    // when is game win!!
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMassage("🎉 Correct Number!");
    // document.querySelector(".number").textContent = secretNumber;
    displaySecretNum(secretNumber);

    if (score > update) {
      update = score;
      document.querySelector(".highscore").textContent = update;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      // guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      displayMassage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      --score;
      //   document.querySelector(".score").textContent = score;
      displayScore(score);
    } else {
      //   document.querySelector(".message").textContent = "😢 You lost the game!";
      displayMassage("😢 You lost the game!");
      //   document.querySelector(".score").textContent = score = 0;
      displayScore(0);
    }
  }
  // when is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈 Too High!";
  //       --score;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "😢 You lost the game!";
  //       document.querySelector(".score").textContent = score = 0;
  //     }
  //     // when is too low
  //   } else {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too Low!";
  //       --score;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "😢 You lost the game!";
  //       document.querySelector(".score").textContent = score = 0;
  //     }
  //   }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMassage("Start guessing...");
  //   document.querySelector(".score").textContent = score;
  displayScore(score);
  //   document.querySelector(".number").textContent = "?";
  displaySecretNum("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
