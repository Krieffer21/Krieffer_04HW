# Krieffer_04HW

## Code Quiz
  This homework assignment was to create and style a timed code quiz with multiple-choice questions in javascript that is also mobile view friendly. When a question is answered incorrectly time is subtracted from the timer, if a question is answered correctly give the next question. The quiz also features a high scores page so after they finish the quiz or run out of time they can submit their high score. 

### Questions and Answers
 questionsAnswers in an array of objects where each object stores a quiz question, the multiple choice answers and the correct answer. It is part of the function letsGo.     

![alt text](https://github.com/Krieffer21/Krieffer_04HW/blob/master/Assets/quiz.png)

### Start Quiz
  When the start quiz button is clicked it starts the quiz. It ensures that the quiz questions are restarted from the first question. 

![alt text](https://github.com/Krieffer21/Krieffer_04HW/blob/master/Assets/startQuiz.png)

### Timer
  The screenshot below shows the timer set up to count down. If the timer runs out of time it ends the quiz.

![alt text](https://github.com/Krieffer21/Krieffer_04HW/blob/master/Assets/timer.png) 

### Answer Options
  For every answer option, if clicked on will check if it's the correct answer, if it was the correct answer it will go to the next question unless it is the last question, then it will end the quiz. If was the incorrect answer then it will deduct time from the timer every time it is clicked on, specifically 10 seconds.

![alt text](https://github.com/Krieffer21/Krieffer_04HW/blob/master/Assets/answers.png)

### Quiz gif
  The gif below shows the functioning quiz. When the start quiz button is clicked you are prompted through the questions. For every wrong answer time is deducted, for every correct answer you are prompted the next question. When the quiz ends you are asked to submit your initials. When the submit button is clicked you are taken to the high scores page where you can choose to go back or clear the highscores. 
  
![](https://github.com/Krieffer21/Krieffer_04HW/blob/master/Assets/quiz.gif)

