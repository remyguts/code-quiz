$(document).ready(function() {
  //var timer = Object(timer);
  var startBtn = document.getElementById("startBtn");
  var highscoreBtn = document.getElementById("highscoreBtn");
  var timerElement = document.getElementById("timer");
  var currentTime = 200;
  var questionElement = document.getElementById("questions");
  var answerButtonsEl = document.getElementById("answer-buttons")
  var score = 0;
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
      choice.addEventListener('click', function() {
        // do something here!
      })
      answerButtonsEl.appendChild(choice);
    }

    // for (var i = 0; i < questions.choices.length; ++i) {
    //   var answerBtn = $("<button>");
    //   answerBtn.textContent(questions.choices[i]);
    //   $("#buttons").append(buttonElement);
    // }
  }

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
