"use strict";
const guess = document.querySelector(".guess");
const checkbtn = document.querySelector(".check");
const resetBtn = document.querySelector(".again");
let resultMessage = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let questionMark = document.querySelector(".number");
// let presentScore = Number(score.textContent); // It is better to have the direct number instead of depending on DOM
let presentScore = 20;
let HS = 0;

let numToGuess = Math.trunc(Math.random() * 20) + 1;

function setMessage(elName, text) {
  return (elName.textContent = String(text));
}

function logicChecker() {
  let guessedNum = Number(guess.value);
  if (presentScore > 1) {
    if (!guessedNum) {
      setMessage(resultMessage, "You haven't guessed yet!");
    } else if (guessedNum !== numToGuess) {
      setMessage(
        resultMessage,
        guessedNum > numToGuess
          ? "Guessed value is HIGH"
          : "Guessed value is LOW"
      );
      setMessage(questionMark, guessedNum > numToGuess ? "⬆️" : "⬇️");
      presentScore--;
      setMessage(score, presentScore);
    } else if (guessedNum === numToGuess) {
      setMessage(resultMessage, "You are the Winner 🎉");
      setMessage(questionMark, "✅");
      checkbtn.disabled = true;
      guess.disabled = true;
      checkbtn.style.background = "gray";
      guess.style.color = "gray";
      if (HS <= presentScore) {
        setMessage(highScore, presentScore);
        HS = presentScore;
      }
    }
  } else {
    setMessage(resultMessage, "YOU FAILED");
    setMessage(score, 0);
    checkbtn.disabled = true;
    guess.disabled = true;
    checkbtn.style.background = "gray";
    guess.style.color = "gray";
  }
  return;
}

function reset() {
  setMessage(resultMessage, "Start Guessing...");
  setMessage(score, 0);
  setMessage(questionMark, "?");
  presentScore = 20;
  guess.value = "";
  numToGuess = Math.floor(Math.random() * 20) + 1;
  checkbtn.disabled = false;
  guess.disabled = false;
  checkbtn.style.background = "white";
  guess.style.color = "white";
}

checkbtn.addEventListener("click", logicChecker);
resetBtn.addEventListener("click", reset);
