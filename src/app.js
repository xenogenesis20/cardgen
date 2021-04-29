/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// <!-- ♦ ♥ ♠ ♣ -->

window.onload = function() {
  let suitRandom = Math.floor(Math.random() * 4) + 1;
  let suitNum = Math.floor(Math.random() * 12) + 1;
  let theCard = document.querySelector("#theCard");
  let theSuit1 = document.querySelector("#suit1");
  let theSuit2 = document.querySelector("#suit2");
  let bignum = document.querySelector("#number");

  if (suitRandom == 1) {
    theCard.className += " heart";
    theSuit1.innerHTML = "♥";
    theSuit2.innerHTML = "♥";
    bignum.style.color = " black";
    bignum.innerHTML = `${suitNum}`;
    bignum.className += " centered bignum";
  }
  if (suitRandom == 2) {
    theCard.className += " spade";
    theSuit1.innerHTML = "♠";
    theSuit2.innerHTML = "♠";
    bignum.style.color = " black";
    bignum.innerHTML = `${suitNum}`;
    bignum.className += " centered bignum";
  }
  if (suitRandom == 3) {
    theCard.className += " diamond";
    theSuit1.innerHTML = "♦";
    theSuit2.innerHTML = "♦";
    bignum.style.color = " black";
    bignum.innerHTML = `${suitNum}`;
    bignum.className += " centered bignum";
  }
  if (suitRandom == 4) {
    theCard.className += " club";
    theSuit1.innerHTML = "♣";
    theSuit2.innerHTML = "♣";
    bignum.style.color = " black";
    bignum.innerHTML = `${suitNum}`;
    bignum.className += " centered bignum";
  }
};
