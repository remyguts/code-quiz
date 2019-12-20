$(document).ready(function() {
  //var timer = Object(timer);
  var startBtn = document.getElementById("startBtn");
  var answerBtnOne = document.getElementById("answer-buttonone");
  var answerBtnTwo = document.getElementById("answer-buttontwo");
  var answerBtntThree = document.getElementById("answer-buttonthree");
  var answerBtnFour = document.getElementById("answer-buttonfour");
  var highscoreBtn = document.getElementById("highscoreBtn");
  var timerElement = document.getElementById("timer");
  var currentTime = 200;
  var score = 0;

  //start game is here
  function startQuiz() {
    //console.log('Started')

    startBtn.classList.add("hide");
    setInterval(timer, 1000);

    // generateQueztion()

    document.getElementById("startBtn").style.visibility = "hidden";
    document.getElementById("answer-buttonone").style.visibility = "visible";
    document.getElementById("answer-buttontwo").style.visibility = "visible";
    document.getElementById("answer-buttonthree").style.visibility = "visible";
    document.getElementById("answer-buttonfour").style.visibility = "visible";
  }
  //question area
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


  startBtn.addEventListener("click", startQuiz);

});
