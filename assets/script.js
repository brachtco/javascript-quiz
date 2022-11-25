/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score*/

//create variables
//document.querySelector /.getElementById
var startButton = document.querySelector(".start-button");
var score = document.querySelector(".highscores");
var questionsEl = document.querySelector("#questionsEl");
var timer = document.querySelector(".timer");
var choices = document.querySelector(".choices");
var result = document.querySelector(".result");
var result = document.querySelector(".showAnswer");
var savedInitials = document.getElementById("#save-initials");
var scoreCount = document.getElementById("#saved-score");
var saveButton = document.getElementById("#save-button");

//quiz variables
var timerCount = 30;
//var showQuestion = [];
var questions = [
  {
    question: "Javascript is a ____-side programming language",
    choices: ["Client", "Server", "Both", "None"],
    correctAnswer: "Both",
  },
  {
    question: "How do you find the min of x and y using Javascript?",
    choices: ["min(x,y)", "Math.min(x,y)", "Math.min(xy)", "min(xy)"],
    correctAnswer: "Math.min(x,y)",
  },

  {
    question:
      "Which Javascript label catches all the values except for the ones specified?",
    choices: ["catch", "label", "try", "default"],
    correctAnswer: "default",
  },

  {
    //change question
    question: "Which attribute needs to be changed to make elements visible?",
    choices: ["visibility", "visibile", "invisibility", "invisible"],
    correctAnswer: "visible",
  },

  {
    question: "What language defines the behavior of a web page?",
    choices: ["HTML", "CSS", "XML", "Javascript"],
    correctAnswer: "Javascript",
  },
];
var currentQuestion = {};
var acceptAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

//start game -- timer starts first question appears
//incorrect answer -- time is subtracted from the clock
function startQuiz() {
  questionCounter = 0;
  score = 0;
  availableQuestions = questions;
  nextQuestion();
}

//answer question -- click answer button -- alerts
function nextQuestion() {
  choices.innerHTML = "";
  currentQuestion = availableQuestions[questionCounter];
  console.log(questionsEl);
  questionsEl.innerHTML = currentQuestion.question;
  for (i = 0; i < currentQuestion.choices.length; i++) {
    var choicebtn = document.createElement("button");
    var choice_para = document.createElement("p");
    choicebtn.innerHTML = currentQuestion.choices[i];
    choicebtn.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(event.target.innerHTML);
      var targetEl = event.target;
      if (targetEl.innerHTML === currentQuestion.correctAnswer) {
        alert("Correct Answer");
        score = score + 10;
        questionCounter++;
        nextQuestion();
      } else {
        alert("Incorrect Answer");
        timerCount = timerCount - 5;
        questionCounter++;
        nextQuestion();
      }
    });

    choice_para.append(choicebtn);
    choices.append(choice_para);
  }
}

function startTimer() {
  var timerInterval = setInterval(function () {
    timerCount--;
    timer.textContent = timerCount;

    if (timerCount === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function saveInitals() {
  var initals = localStorage.getItem("saved-initials");

  if (!initals) {
    return;
  }

  savedInitials.textContent = initals;
}

//saveButton.addEventListener("click", function(event) {
//event.preventDefault();

//var initials = document.getElementById("#save-initials").value;

//localStorage.setItem("saved-iniitals");

saveInitals();

//});

//add event listener click starhttps://github.com/brachtco/javascript-quiz/wikit button
startButton.addEventListener("click", function () {
  startQuiz();
  startTimer();
});

  startButton.addEventListener("click", startQuiz);
