var timer = document.querySelector("#timer"); 
var highScore = document.querySelector("#score");
var body = document.querySelector("body");

var header= document.createElement("header");
header.textContent= "Coding Quiz!";
body.appendChild(header);

var intro= document.createElement("p");
intro.textContent= "Please answer the following code related questions before time runs out! Remeber for every correct answer you will gain a point, but for every incorrect answer you will lose a point.";


var question= document.createElement("h1");
question.textContent= q;



