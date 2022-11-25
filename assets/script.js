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
//document.querySelector
var startButton = document.querySelector(".start-button");
var score = document.querySelector(".highscores");
var questions = document.querySelector("qa-container");
var timer = document.querySelector(".timer")
//quiz variables

var showQuestion = [];
var questions = [
    {
    question: "Javascript is a ____-side programming language",
    answers: [
        {text: "Client", correct: false,
        text: "Server", correct: false,
        text: "Both", correct: true,
        text: "None", correct: false}
    ]
    question: "How do you find the min of x and y using Javascript?",
    answers: [
	{text: "min(x,y), correct: false,
	text: "Math.min(x,y)", correct: true,
	text: "Math.min(xy)", correct: false,
	text: "min(xy)", correct: false}
    ]

    question: "Which Javascript label catches all the values except for the ones specified?",
	answers:
    {text: "catch", correct: false,
	text: "label", correct: false,
	text: "try", correct: false,
	text: "default", correct: true}

    question: "To insert a Javascript into an HTML page, which tag is used?",
	answers [
    {text: "<script=@java>", correct: false,
	text: "<javascript>", correct: false,
	text: "<script>", correct: true,
	text: "<js></js>" correct: false}
    ]

    question: "What language defines the behavior of a web page?"
    answers: [
	(text: "HTML", correct: false,
	text: "CSS", correct: false,
	text: "XML" correct: false,
	text: "Javascript", correct: true}

]
}
]

var answers = [];



function startQuiz() {
    console.log("Start");
}

function rendershowQuestion() {

}
//add event listener click start button

//start game -- timer starts first question
//answer question --input
//correct answer --second question
//incorrect answer --time is subracted from the clock
//all questions answered of timer reaches 0 --game is over
//game over save my initials and my score

/*if (startButton) {
    startButton.addEventListener('click', () => {
      console.log("startButton");
    });
  }*/

  startButton.addEventListener("click", startQuiz);