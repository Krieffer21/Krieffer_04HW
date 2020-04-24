var timer = document.createElement("div");
var body = document.querySelector("body");
var scoreList = [];

letsGo();
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
    function letsGo() {

        var highScore = document.createElement("button");
        highScore.textContent = "High Scores!";
        body.appendChild(highScore);

        timer.textContent = "Timer: 100"; 
        body.appendChild(timer);

        // Header for the starting page
        var header = document.createElement("header");
        header.textContent = "Coding Quiz!";
        body.appendChild(header);

        // Starting prompt for quiz
        var intro = document.createElement("p");
        intro.textContent = "Please answer the following code related questions before time runs out! Remeber for every correct answer you will gain a point, but for every incorrect answer you will lose a point.";
        body.appendChild(intro);

        // Assigning start quiz text to the start button.
        var start = document.createElement ("button");
        start.textContent = "Start Quiz";
        // Inserting the button into the HTML file.
        body.appendChild(start);

        // when clicked start quiz & timer
        start.addEventListener("click", function() {
            // Display the first question and answer options.
            question = undefined;
            currentQ = 0;
            askQuestion(questionsAnswers[0].q, questionsAnswers[0].a);

            setTime(); 
            // no longer display start messages and button when taking quiz
            start.remove();
            intro.remove();
            header.remove();
            highScore.remove();
        });
        highScore.addEventListener("click", function(){
            start.remove();
            intro.remove();
            header.remove();
            highScore.remove();
            scorePage();
        });    
}

// Displays the time on the timer and counts down.
function updateTimer() {
    secondsLeft--;
    timer.textContent= "Timer: " + secondsLeft;
    // When the timer reaches 0 end the game. 
    if (secondsLeft <= 0) {
        // call function endGame()
        endGame();
    }
}

// Defining the timer start time. 
var secondsLeft = 100;
var timerInterval;
// Setting the starting time.
function setTime() {
  timerInterval = setInterval(updateTimer, 1000);
}

//  Global question and answer variables. 
var currentQ = 0;
var question; 
var answer1;
var answer2;
var answer3;
var answer4;

// The following function asks the questions and diplays the answers as buttons.
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

        // When an answer button is clicked on check that it was the correct answer.
        answer1.addEventListener("click", function() {
            // Check the current question was answered correctly.
            if (answer1.textContent === questionsAnswers[currentQ].c ) {
                // Check if the was the last question if so,
                if (currentQ==4) {
                    // run endGame function.
                    endGame();
                }
                // If this wasn't the last question, go to the next question.
                else {
                    currentQ++;
                    askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);}  
            }
            // If the answer is wrong deduct time from secondsLeft.
            else {secondsLeft = secondsLeft - 10;}
        });
        answer2.addEventListener("click", function() {
            if (answer2.textContent === questionsAnswers[currentQ].c ) {
                if (currentQ==4) {
                    endGame();
                }
                else {
                    currentQ++;
                    askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);}  
            }
            else {secondsLeft = secondsLeft - 10;}
        });
        answer3.addEventListener("click", function() {
            if (answer3.textContent === questionsAnswers[currentQ].c ) {
                if (currentQ==4) {
                    endGame();
                }
                else {
                    currentQ++;
                    askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);}  
            }
            else {secondsLeft = secondsLeft - 10;}
        });
        answer4.addEventListener("click", function() {
            if (answer4.textContent === questionsAnswers[currentQ].c ) {
                if (currentQ==4) {
                    endGame();
                }
                else {
                    currentQ++;
                    askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);}  
            }
            else {secondsLeft = secondsLeft - 10;}
        });
    }
    // This writes the question and answers in text and assigns the answer an index number. 
    question.textContent = q;
    answer1.textContent = a[0];
    answer2.textContent = a[1];
    answer3.textContent = a[2];
    answer4.textContent = a[3];
}

// The function endGame lets the user know the game is over and to submit their score.
function endGame() { 
    clearInterval(timerInterval);

    question.remove();
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();

    // Adding the header1 to the HTML, 'All done!'.
    var end = document.createElement("h1");
    end.textContent="All done!";
    body.appendChild(end);

    // Shows the player their final score as the time they had left, if any. 
    var giveScore = document.createElement("h1");
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    giveScore.textContent = "Your final score is " + secondsLeft;
    body.appendChild(giveScore);

    var initials = document.createElement("p");
    initials.textContent = "Please enter your initials in the box below and submit your highscore!";
    body.appendChild(initials);

    var textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("name", "initials");
    body.appendChild(textBox);

    var submitHighScore = document.createElement("button");
    submitHighScore.textContent = "submit";
    body.appendChild(submitHighScore);
    
    submitHighScore.addEventListener("click", function() {
            if (textBox.value == "") {
                alert ("Invalid response! Please enter your initials in the box below.");
            }
            else {
                scoreList.push({
                    initials:textBox.value, score:secondsLeft});
                end.remove();
                giveScore.remove();
                initials.remove();
                textBox.remove();
                submitHighScore.remove();
                scorePage();
            }
    });
}

function scorePage() {

    var highHeader = document.createElement("header");
    highHeader.textContent = "High Scores!";
    body.appendChild(highHeader);


    var scores = document.createElement("ol");
    body.appendChild(scores);
    for (var i = 0; i < scoreList.length; i++) {  
        var list = document.createElement("li");
        list.textContent = scoreList[i].initials + " - " + scoreList[i].score;
        scores.appendChild(list);   
    }

    var clearScores = document.createElement("button");
    clearScores.textContent = "Clear High Scores";
    body.appendChild(clearScores);
        // clear scores 

    var goBack = document.createElement("button");
    goBack.textContent = "Go Back!";
    body.appendChild(goBack);

// refreshes the page but doesn't delete the local storage. 
    goBack.addEventListener("click",function() {
        highHeader.remove();
        scores.remove();
        clearScores.remove();
        goBack.remove();
        letsGo();
    });
}


