$(document).ready(function () {
  var startBtn = document.getElementById("startBtn");
  var highscoreBtn = document.getElementById("highscoreBtn");
  var timerElement = document.getElementById("timer");
  var currentTime = 200;
  var questionElement = document.getElementById("questions");
  var answerButtonsEl = document.getElementById("answer-buttons");
  var score = 0;
  var initials = "";
  var highScore = document.getElementById("highscore");
  var questionIndex = 0;
  var timerId;
  startBtn.addEventListener("click", startQuiz);
  //start game is here
  function startQuiz() {
    //console.log('Started')

    startBtn.classList.add("hide");

    timerId = setInterval(timer, 1000);

    // generateQueztion()
    generateQuestions();
  }
  //question area
  function generateQuestions() {
    questionElement.textContent = "";

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
      var choice = document.createElement("button");
      choice.textContent = currentQuestionChoices[i];
      choice.addEventListener("click", function (event) {
        if (questions[0].answer === event.currentTarget.innerText) {
          console.log("right answer");
        } else {
          console.log("wrong answer");

          //minus off current time variable

          currentTime = currentTime - 15;
        }
        questionIndex++;
        console.log("what question?", questionIndex);
        questionElement.textContent = questions[questionIndex].title;
        answerButtonsEl;

        console.log(answerButtonsEl.children);
        answerButtonsEl.children[0];
        console.log(answerButtonsEl.children[0]);
        answerButtonsEl.children[0].textContent =
          questions[questionIndex].choices[0];
        answerButtonsEl.children[1].textContent =
          questions[questionIndex].choices[1];
        answerButtonsEl.children[2].textContent =
          questions[questionIndex].choices[2];
        answerButtonsEl.children[3].textContent =
          questions[questionIndex].choices[3];
      });

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
    },
    {
      title: "Which is not a name of one of the instructors?",
      choices: ["Spencer", "Dane", "Elrey", "Aaragorn"],
      answer: "Aaragorn"
    },
    {
      title: "A common tool for checking code is_______",
      choices: ["API", "function", ".append", "console.log"],
      answer: "alerts"
    },
    {
      title: "which is not a source for coding information?",
      choices: ["W3 Schools", "Code Academy", "Stack Overflow", "Spotify"],
      answer: "alerts"
    }
  ];

  //timer area
  function timer() {
    // Decrement time
    currentTime--;
    // Update timer element with current time
    timerElement.textContent = currentTime;

    if (currentTime <= 0 || questionIndex === questions.length) {
      alert("Game Over");
      localStorage.setItem("highscore", currentTime);
      clearInterval(timerId);
      initials += prompt("what is your intitals?");

      //console.log(initials);

      localStorage.setItem(initials);

      // Run function Game Over
    }
  }

  // ... stores initials local storage
  // displays initials and time on highscore sheet

  console.log(timerElement);

  const form = document.querySelector("form");
  const ul = document.querySelector("ul");
  const button = document.querySelector("button");
  const input = document.getElementById("item");

  const liMaker = text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  };

  //form.addEventListener("submit", function () {
    // e.preventDefault()

    liMaker(input.value);
    input.value = "";
  });
  let itemsArray = [];

  localStorage.setItem("items", JSON.stringify(itemsArray));
  const data = JSON.parse(localStorage.getItem("items"));

  //e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));

  data.forEach(item => {
    liMaker(item);
  });

  button.addEventListener("click", function () {
    localStorage.clear();
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  });

