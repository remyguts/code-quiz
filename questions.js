$(document).ready(function() {
  
  var startBtn = document.getElementById("startBtn");
  var highscoreBtn = document.getElementById("highscoreBtn");
  var timerElement = document.getElementById("timer");
  var currentTime = 200;
  var questionElement = document.getElementById("questions");
  var answerButtonsEl = document.getElementById("answer-buttons")
  var score = 0;
  var questionIndex = 0;
  startBtn.addEventListener("click", startQuiz);
  //start game is here
  function startQuiz() {
    //console.log('Started')

    startBtn.classList.add("hide");
    
    setInterval(timer, 1000);

    // generateQueztion()
    generateQuestions();
  }
  //question area
  function generateQuestions() {
    questionElement.textContent = "";

    $("#questions").empty();

    // Whatever your title div
    // Empty it
    // Replace it with new title from questions object

    // Loop through choices
    // Create a button
    // Give each a class with the answer
    // Make textContent equal to questions.choices[i]
    // Append button

    questionElement.textContent = questions[0].title;
    let currentQuestionChoices = questions[0].choices;
    for (i in currentQuestionChoices) {
      var choice = document.createElement('button');
      choice.textContent = currentQuestionChoices[i];
      choice.addEventListener('click', function(event) {

        // do something here!
        if (questions[0].answer === event.currentTarget.innerText) 
      {
        console.log("right answer");
        
        

        

      }
      else {
        console.log("wrong answer");
      }
      questionIndex++;
        console.log("what question?",questionIndex);
      questionElement.textContent = questions[questionIndex].title;
      answerButtonsEl;

      console.log(answerButtonsEl.children);
      answerButtonsEl.children[0];
      console.log(answerButtonsEl.children[0]);
      answerButtonsEl.children[0].textContent = questions[questionIndex].choices[0];
      answerButtonsEl.children[1].textContent = questions[questionIndex].choices[1]; 
      answerButtonsEl.children[2].textContent = questions[questionIndex].choices[2];
      answerButtonsEl.children[3].textContent = questions[questionIndex].choices[3];
    })

      answerButtonsEl.appendChild(choice);
    }


    // for (var i = 0; i < questions.choices.length; ++i) {
    //   var answerBtn = $("<button>");
    //   answerBtn.textContent(questions.choices[i]);
    //   $("#buttons").append(buttonElement);
    // }
  }
// if answer clicked is the same as the "answer" for that current question, then move to next question and add to score. 
// once done with question advance to next number in index

  var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
  ];
  //timer area
  function timer() {
    // Decrement time
    currentTime--;
    // Update timer element with current time
    timerElement.textContent = currentTime;

    if (currentTime === 0) {
      // Run function Game Over
    }
  }
});
