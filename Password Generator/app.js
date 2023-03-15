"use strict";

const empty = "",
  uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "!@#$%^&*=-_";

const passOptLength = document.getElementById("length"),
  passOptUCase = document.getElementById("uppercase"),
  passOptLCase = document.getElementById("lowercase"),
  passOptNumber = document.getElementById("numbers"),
  passOptSymbol = document.getElementById("symbols"),
  generateBtn = document.querySelector(".generate"),
  password = document.getElementById("password"),
  copyBtn = document.querySelector(".fa");

generateBtn.addEventListener("click", () => {
  let initialPassword = empty;
  passOptUCase.checked ? (initialPassword += uCase) : "";
  passOptLCase.checked ? (initialPassword += lCase) : "";
  passOptNumber.checked ? (initialPassword += number) : "";
  passOptSymbol.checked ? (initialPassword += symbol) : "";

  password.value = generatePassword(passOptLength.value, initialPassword);
});

function generatePassword(passLength, initialPassword) {
  let pass = "";

  for (let i = 0; i < passLength; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  navigator.clipboard.writeText(password.value).then(() => {
    copyBtn.classList.remove("fa-copy");
    copyBtn.classList.add("fa-check");
    copyBtn.style.color = "green";
    setTimeout(() => {
      copyBtn.style.color = "";
      copyBtn.classList.remove("fa-check");
      copyBtn.classList.add("fa-copy");
    }, 1000);
  });
});
