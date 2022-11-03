const startQuiz_btn = document.querySelector(".btn-start");
const questionEL = document.querySelector("h1");
const timeCountEL = document.querySelector(".timeCount");
const mainEL = document.querySelector("main");

const quizQuestions = [
  {
    question: "A loop that never ends is referred to as a(n)_________.",
    answers: {
      1: "While loop",
      2: "Infinite loop",
      3: "Recursive loop",
      4: "for loop",
    },
    correctAnswer: 2,
  },
  {
    question:
      "_______ is the process of finding errors and fixing them within a program.",
    answers: {
      1: "Compiling",
      2: "Executing",
      3: "Debugging",
      4: "Scanning",
    },
    correctAnswer: 3,
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: {
      1: "var",
      2: "let",
      3: "Both A and B",
      4: "None of the above",
    },
    correctAnswer: 3,
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answers: {
      1: "getElementbyId()",
      2: "getElementsByClassName()",
      3: "none of the above",
      4: "Both A and B",
    },
    correctAnswer: 4,
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript_____?",
    answers: {
      1: "stringify()",
      2: "parse()",
      3: "convert",
      4: "None of the above",
    },
    correctAnswer: 1,
  },
];

// Check if quiz is started
let start = false;
let count = 0;

timeCountEL.textContent = count;

// 1. show landing page  set timer to zero
// 2.  start quiz when start quiz button is clicked
// 3. ininilize and start timmer and load first question
// 4. choose answer. if correct display correct else wrong!
// 5. display final score of timer
// 6  submit and save to local storage final score
// 7. display highscores - allow user to click go back button or clear high scores to remove high scores from local storage.

function startQuiz() {
  let questionCount = 0;
  start = true;
  const intervalID = setInterval(startTimer, 1000);

  function startTimer() {
    count += 1;
    timeCountEL.textContent = count;
    if (count === 60) {
      clearInterval(intervalID);

      // End test and show score
    }
  }

  if (start) {
    console.log("Quiz started");
    document.querySelector("main p").remove();
    document.querySelector(".btn-start").remove();
    // load first question in array:
    loadQueston(questionCount);
  }
}

function loadQueston(questionNumber) {
  if (quizQuestions.length !== questionNumber) {
    questionEL.innerText = quizQuestions[questionNumber].question;
  } else {
    questionEL.innerText = "All Done";
    return;
  }

  const olEL = document.createElement("ol");
  olEL.addEventListener("click", function (e) {
    checkAnswer(e, questionNumber);
  });

  mainEL.appendChild(olEL);
  for ([key, ans] of Object.entries(quizQuestions[questionNumber].answers)) {
    const liEL = document.createElement("li");
    const aEL = document.createElement("a");
    aEL.setAttribute("href", "#");
    aEL.setAttribute("data-key", key);
    aEL.innerText = ans;
    liEL.appendChild(aEL);
    olEL.appendChild(liEL);
  }
}

function checkAnswer(event, questionCount) {
  event.preventDefault();
  if (event.target.nodeName === "A") {
    if (
      Number(event.target.dataset.key) ===
      Number(quizQuestions[questionCount].correctAnswer)
    ) {
      nextQuestion("Correct!", questionCount);
    } else {
      nextQuestion("Wrong!", questionCount);
    }
  }
}

function nextQuestion(answer, questionCount) {
  const hrEL = document.createElement("hr");
  const h2El = document.createElement("h2");
  mainEL.appendChild(hrEL);
  h2El.innerText = answer;
  mainEL.appendChild(h2El);
  setTimeout(function () {
    hrEL.remove();
    h2El.remove();
    // Go to next question

    document.querySelector("ol").remove();

    loadQueston(questionCount);
  }, 1000);
  questionCount += 1;
}

startQuiz_btn.addEventListener("click", startQuiz);
