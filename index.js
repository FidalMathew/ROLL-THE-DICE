"use strict";

let score = 0;
let randomVar;

let buttonVal = document.getElementsByTagName("button");
let result = document.getElementById("result");
let report = document.getElementById("report");
let timeS = document.getElementById("timeS");
let dice = document.getElementById("dice");



const Clicked = (e) => {
    let selectVar = (e.target.innerText);

    dice.src = `img/${randomVar}.png`;        //To change the dice picture           

    document.getElementById("SV").innerHTML = selectVar;


    if (randomVar == selectVar) {
        result.style.color = "#1CE1BE";
        result.innerHTML = "Guess was right!";
        score++;
        document.getElementById("CV").innerHTML = score;

    }
    else {
        result.style.color = "#FF6D2E";
        result.innerHTML = "Guess was wrong!";
    }


    Array.from(buttonVal).forEach(element => {
        element.disabled = true;
        element.classList.toggle("disabled");
    });

}




const load = () => {
    report.innerHTML = "loading game will start in a few seconds!";
    document.getElementById('h').style.display = "none";
    document.getElementById('result').style.display = "none";

    Array.from(buttonVal).forEach(element => {

        element.addEventListener("click", Clicked); //added event click

        element.disabled = false;
        element.classList.add("disabled");

    });


    setTimeout(() => {
        document.getElementById('report').style.display = "none";
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
    document.getElementById("SV").innerHTML = "_";


        Array.from(buttonVal).forEach(element => {

            element.disabled = false;
            element.classList.remove("disabled");

        });

    }, 10000);

}



window.onload = () => {

    load();
    DisplayTime();
    addNewRandom();
}



