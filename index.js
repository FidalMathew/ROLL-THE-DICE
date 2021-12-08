"use strict";
let score = 0;
let randomVar;
let trialNumber = 1;
let buttonVal = document.getElementsByTagName("button");
let result = document.getElementById("result");
let report = document.getElementById("text-init-loading");
let timeS = document.getElementById("timeS");
let dice = document.getElementById("dice");
const Clicked = (e) => {
  let userSelectedNumber = (e.target.innerText);
  dice.src = `img/${randomVar}.png`;
  document.getElementById("text-user-selected").innerHTML = userSelectedNumber;
  document.getElementById("text-user-selected").style.visibility="visible";
  if (randomVar == userSelectedNumber) {
    result.style.color = "#1CE1BE";
    result.innerHTML = "You guess it right!";
    score++;
    document.getElementById("text-total-score").innerHTML = score;
    playSoundSuccess();
  } else {
    result.style.color = "#FF6D2E";
    result.innerHTML = "Sorry, it was a wrong number!";
    playSoundFailure();
  }
  Array.from(buttonVal).forEach(element => {
    element.disabled = true;
    element.classList.toggle("disabled");
  });
  trialNumber++;
  document.getElementById("text-ttrial-number").innerHTML = trialNumber;
}
const load = () => {
  report.innerHTML = `<h2>Loading...</h2>
    <span style="font-size:15px;">
      The game will start in few seconds!
    </span>`;
  document.getElementById('h').style.display = "none";
  document.getElementById('result').style.display = "none";
  document.getElementById("text-user-selected").style.visibility="hidden";
  Array.from(buttonVal).forEach(element => {
    element.addEventListener("click", Clicked);
    element.disabled = false;
    element.classList.add("disabled");
  });
  setTimeout(() => {
    report.style.visibility="hidden";
    document.getElementById('h').style.display = "block";
    document.getElementById('result').style.display = "block";
  }, 6000);
}
const DisplayTime = () => {
  let timesecond = 9;
  setInterval(() => {
    timeS.innerHTML = timesecond;
    timesecond--;
    if (timesecond == 0) {
      timesecond = 10;
    }
  }, 1000);
}
const addNewRandom = () => {
  setInterval(() => {
    randomVar = Math.floor(Math.random() * 6) + 1;
    dice.src = `img/load.gif`;
    dice.style.width = "37.5%";
    result.innerHTML = "";
    document.getElementById("text-user-selected").style.visibility="hidden";
    Array.from(buttonVal).forEach(element => {
      element.disabled = false;
      element.classList.remove("disabled");
    });
  }, 10000);
}

function playSoundSuccess() {
  var audio = new Audio("./assets/audio/success-1-6297.mp3");
  audio.play();
}
function playSoundFailure() {
  var audio = new Audio("./assets/audio/negative_beeps-6008.mp3");
  audio.play();
}

window.onload = () => {
  load();
  DisplayTime();
  addNewRandom();
}