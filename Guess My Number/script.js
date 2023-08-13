"use strict";
const guess = document.querySelector(".guess");
const checkbtn = document.querySelector(".check");
const resetBtn = document.querySelector(".again");
let resultMessage = document.querySelector(".message");
let score = document.querySelector(".score");
let presentScore = Number(score.textContent);
let questionMark = document.querySelector(".number");
let highScore = document.querySelector(".highscore");

let numToGuess = Math.floor(Math.random() * 20) + 1;

function setMessage(elName, text) {
  return (elName.textContent = String(text));
}

function logicChecker() {
  let guessedNum = Number(guess.value);
  console.log(guessedNum, numToGuess);
  if (!guessedNum) {
    setMessage(resultMessage, "You haven't guessed yet!");
  } else if (guessedNum > numToGuess) {
    setMessage(resultMessage, "Guessed value is HIGH");
    setMessage(questionMark, "⬆️");
    presentScore -= 1;
    setMessage(score, presentScore);
  } else if (guessedNum < numToGuess) {
    setMessage(resultMessage, "Guessed value is LOW");
    setMessage(questionMark, "⬇️");
    presentScore -= 1;
    setMessage(score, presentScore);
  } else if (guessedNum === numToGuess) {
    setMessage(resultMessage, "You are the Winner 🎉");
    setMessage(questionMark, "✅");
    checkbtn.disabled = true;
    guess.disabled = true;
    checkbtn.style.background = "gray";
    guess.style.color = "gray";
    if (Number(highScore.textContent) <= presentScore) {
      setMessage(highScore, presentScore);
    }
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
