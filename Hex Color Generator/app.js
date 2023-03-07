"use strict";

let hexValue = document.querySelector(".hex");
const generate = document.querySelector(".generate");

function randomColor() {
  //   let randomHex = "#";
  //   for (let i = 1; i <= 6; i++) {
  //     const randomNum = Math.floor(Math.random() * 16);
  //     const hex = randomNum.toString(16);
  //     randomHex += hex;
  //   }

  //   hexValue.textContent = randomHex;
  //   document.body.style.backgroundColor = randomHex;
  const randomNum = Math.random();
  const hex = randomNum.toString(16).substring(2, 8);
  const randomHex = "#" + hex;
  hexValue.textContent = randomHex;
  document.body.style.backgroundColor = randomHex;
}

generate.addEventListener("click", randomColor);
