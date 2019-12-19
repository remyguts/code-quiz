$(document).ready(function() {
  
  //var timer = Object(timer);
  var startBtn = document.getElementById('startBtn');
  var answerBtnOne = document.getElementById('answer-buttonone');
  var answerBtnTwo = document.getElementById('answer-buttontwo');
  var answerBtntThree = document.getElementById('answer-buttonthree');
  var answerBtnFour = document.getElementById('answer-buttonfour');
  var highscoreBtn = document.getElementById('highscoreBtn');
  var c = 200;
  startBtn.addEventListener("click", startQuiz);
//start game is here
  function startQuiz() {
    //console.log('Started')
    
    startBtn.classList.add('hide');

  

    
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
function timer001() {
  c = c - 1;
  if (c < 200) {
    timer.innerHTML = c;
  }
  if (c < 1) {
    window.clearInterval(update);
  }
}
update = setInterval("timer001()", 1000);
var score = 0;
})

;