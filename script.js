var timer = document.querySelector("#timer");
timer.textContent= "Timer: 100"; 
var highScore = document.querySelector(".score");
var body = document.querySelector("body");
var q1 = "ksdlvjbndlfj";
var a1 = ["jefnafj","jfdsbk","fdjas","sfjdkbv"];

var header= document.createElement("header");
header.textContent= "Coding Quiz!";
body.appendChild(header);

var intro= document.createElement("p");
intro.textContent= "Please answer the following code related questions before time runs out! Remeber for every correct answer you will gain a point, but for every incorrect answer you will lose a point.";
body.appendChild(intro);

var start = document.querySelector ("button");
start.textContent= "Start Quiz";
body.appendChild(start);

start.addEventListener("click", function() {
    event.preventDefault();
    // when clicked start quiz
})



function updateTimer() {
    secondsLeft--;
    timer.textContent= "Timer: " + secondsLeft;
}

var secondsLeft = 100;
var timerInterval;
function setTime() {
  timerInterval = setInterval(updateTimer, 1000);
}

var question; 
var answer1;
var answer2;
var answer3;
var answer4;

function askQuestion(q,a) {
    if (question == undefined){
        question= document.createElement("h1");
        body.appendChild(question); 
        answer1= document.createElement("button");
        body.appendChild(answer1);
        answer2= document.createElement("button");
        body.appendChild(answer2);
        answer3= document.createElement("button");
        body.appendChild(answer3);
        answer4= document.createElement("button");
        body.appendChild(answer4);   
    }
    question.textContent= q;
    answer1.textContent= a[0];
    answer2.textContent= a[1];
    answer3.textContent= a[2];
    answer4.textContent= a[3];
}



