/* eslint-disable */
import "bootstrap";
import "./style.css";

// window.onload = function() {
//   //write your code here

//   let randomNumber = Math.floor(Math.random() * 12 + 1);

//   console.log(randomCardSuites);
// };

// document.getElementsByClassName("upLeft")[0].innerHTML = "♥";

// document.getElementsByClassName("upLeft")[0].innerHTML = "♠";

// document.getElementsByClassName("upLeft")[0].innerHTML = "♣";

window.onload = function() {
  let randomCardSuites = Math.floor(Math.random() * 4 + 1);
  if (randomCardSuites == 1) {
    document.getElementsByClassName("upLeft")[0].innerHTML = "♥";
    document.getElementsByClassName("downRight")[0].innerHTML = "♥";
    document.getElementsByClassName("upLeft")[0].style.color = "red";
    document.getElementsByClassName("downRight")[0].style.color = "red";
  } else if (randomCardSuites == 2) {
    document.getElementsByClassName("upLeft")[0].innerHTML = "♠";
    document.getElementsByClassName("downRight")[0].innerHTML = "♠";
  } else if (randomCardSuites == 3) {
    document.getElementsByClassName("upLeft")[0].innerHTML = "♣";
    document.getElementsByClassName("downRight")[0].innerHTML = "♣";
  } else if (randomCardSuites == 4) {
    document.getElementsByClassName("upLeft")[0].innerHTML = "♦";
    document.getElementsByClassName("downRight")[0].innerHTML = "♦";
    document.getElementsByClassName("upLeft")[0].style.color = "red";
    document.getElementsByClassName("downRight")[0].style.color = "red";
  }

  document.getElementsByClassName("cardNumber")[0].innerHTML = Math.floor(
    Math.random() * 12 + 1
  );
};
