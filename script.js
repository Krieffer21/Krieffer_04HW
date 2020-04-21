var timer = document.querySelector("#timer");
timer.textContent= "Timer: 100"; 
var highScore = document.querySelector(".score");
var body = document.querySelector("body");

var header= document.createElement("header");
header.textContent= "Coding Quiz!";
body.appendChild(header);

var intro= document.createElement("p");
intro.textContent= "Please answer the following code related questions before time runs out! Remeber for every correct answer you will gain a point, but for every incorrect answer you will lose a point.";
body.appendChild(intro);

function updateTimer() {
    secondsLeft--;
    timer.textContent= "Timer: " + secondsLeft;
}

var secondsLeft = 100;
var timerInterval;
function setTime() {
  timerInterval = setInterval(updateTimer, 1000);
}



var question= document.createElement("h1");
question.textContent= q;

var answer1= document.createElement("button");
answer1.textContent= var a;
var answer2= document.createElement("button");
answer1.textContent= var b;
var answer3= document.createElement("button");
answer1.textContent= var c;
var answer2= document.createElement("button");
answer1.textContent= var d;



