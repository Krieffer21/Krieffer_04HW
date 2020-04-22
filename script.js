var timer = document.querySelector("#timer");
timer.textContent = "Timer: 100"; 
var highScore = document.querySelector(".score");
var body = document.querySelector("body");
    var q1 = "Which of the following data types represents an object?" ;
    var a1 = ["var x = 21;","var x = \'Billy\'","var x = \'Billy Bob\'","var x = {name:Billy};"];
    var q2 = "How would you call the following function. function example() { Alert (\“Pick me!\”); }";
    var a2 = ["(Pick Me!)", "Alert (Pick me!);", "example();", "Return function ();"];
    var q3 = "Which of the following is an example of an array?"
    var a3 = ["var cat = [\“cute\”, \“furry\”, \“sleepy\”];", "var cat = true;", "var cat = (cute, furry, sleepy);", "var cat = \“cute\”, \“furry\”, \“sleepy\”;"];
    var q4 = "Math.random(); is used for which of the following?";
    var a4 = ["Does math", "Returns a random number", "Nothing", "Makes me happy"];
    var q5 = "A variable declared in the overall script outside of any function is?";
    var a5 = ["A Lazy variable", "A Local variable", "A Useless variable", "A Global variable"];

var header = document.createElement("header");
header.textContent = "Coding Quiz!";
body.appendChild(header);

var intro = document.createElement("p");
intro.textContent = "Please answer the following code related questions before time runs out! Remeber for every correct answer you will gain a point, but for every incorrect answer you will lose a point.";
body.appendChild(intro);

var start = document.querySelector ("button");
start.textContent = "Start Quiz";
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
        question = document.createElement("h1");
        body.appendChild(question); 
        answer1 = document.createElement("button");
        body.appendChild(answer1);
        answer2 = document.createElement("button");
        body.appendChild(answer2);
        answer3 = document.createElement("button");
        body.appendChild(answer3);
        answer4 = document.createElement("button");
        body.appendChild(answer4);   
    }
    question.textContent = q;
    answer1.textContent = a[0];
    answer2.textContent = a[1];
    answer3.textContent = a[2];
    answer4.textContent = a[3];
}



