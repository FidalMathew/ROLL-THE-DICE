"use strict";
let score = 0;
let randomVar;
let trialNumber = 1;
let playMusic = true;
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
    //playSoundSuccess();
    playSound("right");
  } else {
    result.style.color = "#FF6D2E";
    result.innerHTML = "Sorry, it was a wrong number!";
    //playSoundFailure();
    playSound("wrong");
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
    <span style="font-size:0.7em;">
      The game will start in few seconds!
    </span>`;
  document.getElementById('h').style.visibility="hidden";
  result.style.visibility="hidden";
  document.getElementById("text-user-selected").style.visibility="hidden";
  Array.from(buttonVal).forEach(element => {
    element.addEventListener("click", Clicked);
    element.disabled = false;
    element.classList.add("disabled");
  });
  setTimeout(() => {
    report.style.visibility="hidden";
    document.getElementById('h').style.visibility="visible";
  }, 6000);
}
const DisplayTime = () => {
  let timesecond = 9;
  setInterval(() => {
    timeS.innerHTML = timesecond;
    timesecond--;
    if (timesecond == 0) {
      result.style.color = "#FFFFFF";
      result.innerHTML="Can you guess it?";
      result.style.visibility="visible";
      timesecond = 10;
    }
  }, 1000);
}
const addNewRandom = () => {
  setInterval(() => {
    randomVar = Math.floor(Math.random() * 6) + 1;
    dice.src = `img/load.gif`;
    dice.style.width = "37.5%";
    // result.innerHTML = "";
    document.getElementById("text-user-selected").style.visibility="hidden";
    Array.from(buttonVal).forEach(element => {
      element.disabled = false;
      element.classList.remove("disabled");
    });
  }, 10000);
}
function musicImageHandler(){
  if (playMusic){
    playMusic = false;
    document.getElementById("image-music").src = `img/music-off.png`;
  }else{
    playMusic = true;
    document.getElementById("image-music").src = `img/music-on.png`;
  }
}
function playSound(state){
  if(playMusic){
    if (state == "right"){
      var audio = new Audio("./assets/audio/success-1-6297.mp3");
      audio.play();
    }else if(state == "wrong"){
      var audio = new Audio("./assets/audio/negative_beeps-6008.mp3");
      audio.play();
    }
  } 
}
window.onload = () => {
  load();
  DisplayTime();
  addNewRandom();
}