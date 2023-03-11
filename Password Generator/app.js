"use strict";

const empty = "",
  uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "!@#$%^&*=-_";

const passOptLength = document.getElementById("length"),
  passOptUCase = document.getElementById("uppercase"),
  passOptLCase = document.getElementById("lowercase"),
  passOptnumber = document.getElementById("numbers"),
  passOptsymbol = document.getElementById("symbols"),
  generateBtn = document.querySelector(".generate"),
  password = document.querySelector(".password");

generateBtn.addEventListener("click", () => {
  let initialPassword = empty;
});
