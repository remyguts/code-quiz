$(document).ready(function() {
  
  var timer = Object(timer);
  var startBtn = document.getElementById('startBtn');
  var answerBtnOne = document.getElementById('answer-buttonone');
  var answerBtnTwo = document.getElementById('answer-buttontwo');
  var answerBtntThree = document.getElementById('answer-buttonthree');
  var answerBtnFour = document.getElementById('answer-buttonfour');
  var highscoreBtn = document.getElementById('highscoreBtn');
  
  startBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    console.log('Started')

  }

document.getElementById("text").style.visibility = "hidden";
    document.getElementById("start-button").style.visibility = "hidden";
    document.getElementById("choice0").style.visibility = "visible";
    document.getElementById("choice1").style.visibility = "visible";
    document.getElementById("choice2").style.visibility = "visible";
    document.getElementById("choice3").style.visibility = "visible";
    
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

var score = 0;
})

;