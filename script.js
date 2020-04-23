var timer = document.querySelector("#timer");
timer.textContent = "Timer: 100"; 
var highScore = document.querySelector(".score");
var body = document.querySelector("body");
    // Defining the quiz questions, answers and correct answers.  
    var questionsAnswers = [
        { q: "Which of the following data types represents an object?", 
          a: ["var x = 21;","var x = \'Billy\'","var x = \'Billy Bob\'","var x = {name:Billy};"],
          c: "var x = {name:Billy};" },
    
        { q: "How would you call the following function. function example() { alert(\“Pick me!\”); }",
          a: ["(Pick Me!)", "alert(Pick me!);", "example();", "Return function();"],
          c: "example();" },
    
        { q: "Which of the following is an example of an array?",
          a: ["var cat = [\“cute\”, \“furry\”, \“sleepy\”];", "var cat = true;", "var cat = (cute, furry, sleepy);", "var cat = \“cute\”, \“furry\”, \“sleepy\”;"],
          c: "var cat = [\“cute\”, \“furry\”, \“sleepy\”];"},
    
        { q: "math.random(); is used for which of the following?",
          a: ["Does math", "Returns a random number", "Nothing", "Makes me happy"],
          c: "Returns a random number" },
    
        { q: "A variable declared in the overall script outside of any  function is?",
          a: ["A Lazy variable", "A Local variable", "A Useless variable", "A Global variable"],
          c: "A Global variable" }
    ];
// Header for the starting page
var header = document.createElement("header");
header.textContent = "Coding Quiz!";
body.appendChild(header);

// Starting prompt for quiz
var intro = document.createElement("p");
intro.textContent = "Please answer the following code related questions before time runs out! Remeber for every correct answer you will gain a point, but for every incorrect answer you will lose a point.";
body.appendChild(intro);

// Assigning start quiz text to the start button.
var start = document.querySelector ("button");
start.textContent = "Start Quiz";
// Inserting the button into the HTML file.
body.appendChild(start);

// when clicked start quiz & timer
start.addEventListener("click", function() {
    // Display the first question and answer options.
    askQuestion(questionsAnswers[0].q, questionsAnswers[0].a);
    setTime(); 
    // no longer display start message and button when taking quiz
    start.remove();
    intro.remove();
});

// Displays the time on the timer and counts down.
function updateTimer() {
    secondsLeft--;
    timer.textContent= "Timer: " + secondsLeft;
    // When the timer reaches 0 end the game. 
    if (secondsLeft == 0) {
        // call function endGame()
        // function endGame();

    }
}

var secondsLeft = 100;
var timerInterval;
function setTime() {
  timerInterval = setInterval(updateTimer, 1000);
}

var currentQ = 0;
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

        answer1.addEventListener("click", function() {
            if (answer1.textContent === questionsAnswers[currentQ].c ) {
                currentQ++;
                askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);
            }
            else {secondsLeft--;}
        });
        answer2.addEventListener("click", function() {
            if (answer2.textContent === questionsAnswers[currentQ].c ) {
                currentQ++;
                askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);
            }
            else {secondsLeft--;}
        
        });
        answer3.addEventListener("click", function() {
            if (answer3.textContent === questionsAnswers[currentQ].c ) {
                currentQ++;
                askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);
            }
            else {secondsLeft--;}
        
        });
        answer4.addEventListener("click", function() {
            if (answer4.textContent === questionsAnswers[currentQ].c ) {
                currentQ++;
                askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);
            }
            else {secondsLeft--;}
        
        });
        
    }
    question.textContent = q;
    answer1.textContent = a[0];
    answer2.textContent = a[1];
    answer3.textContent = a[2];
    answer4.textContent = a[3];
}

function endGame() {
    var end = document.createElement("h1");
    end.textContent="All done!";
    body.appendChild(end);

    var giveScore = document.createElement("h1");
    giveScore.textContent="Your final score is " + " secondsLeft";
    body.appendChild(giveScore);

    var submitHighScore = document.querySelector ("button");
    submitHighScore.textContent = "submit";
    body.appendChild(submitHighScore);

}



