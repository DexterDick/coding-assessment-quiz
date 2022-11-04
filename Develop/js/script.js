const startQuiz_btn = document.querySelector(".btn-start");
const submitBtn = document.querySelector("input");
const questionEL = document.querySelector("h1");
const timeCountEL = document.querySelector(".timeCount");
const mainEL = document.querySelector("main");
const hrEL = document.createElement("hr");
const formEL = document.createElement("form");
const divEL = document.createElement("div");
const divEL2 = document.createElement("div");
const labelEL = document.createElement("label");
const inputEL = document.createElement("input");
const inputEL2 = document.createElement("input");
const pEL = document.createElement("p");

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
let intervalID;
let start = false;
let count = 60;

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
  intervalID = setInterval(startTimer, 1000);

  function startTimer() {
    count -= 1;
    timeCountEL.textContent = count;
    if (count === 0) {
      clearInterval(intervalID);
      document.querySelector("ol").remove();
      endQuiz();
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
    clearInterval(intervalID);
    endQuiz();

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
      // wrong answer remove time -5 from score
      count -= 5;
      nextQuestion("Wrong!", questionCount);
    }
  }
}

function nextQuestion(answer, questionCount) {
  const h2El = document.createElement("h2");
  mainEL.appendChild(hrEL);
  h2El.innerText = answer;
  mainEL.appendChild(h2El);
  setTimeout(function () {
    hrEL.remove();
    h2El.remove();
    document.querySelector("ol").remove();
    // Go to next question
    loadQueston(questionCount);
  }, 1000);
  questionCount += 1;
}

function endQuiz() {
  questionEL.innerText = "All Done";

  pEL.innerText = `Your final sore is ${count}.`;
  mainEL.appendChild(pEL);
  mainEL.appendChild(hrEL);
  labelEL.setAttribute("for", "initials");
  labelEL.innerText = "Enter initials: ";
  inputEL.setAttribute("type", "text");
  inputEL.setAttribute("required", "");
  inputEL.setAttribute("name", "initials");
  divEL.appendChild(labelEL);
  inputEL2.setAttribute("type", "submit");
  inputEL2.className = "submit-score";
  divEL2.appendChild(inputEL2);
  labelEL.appendChild(inputEL);
  formEL.appendChild(divEL);
  formEL.appendChild(divEL2);
  mainEL.appendChild(formEL);
}

startQuiz_btn.addEventListener("click", startQuiz);

formEL.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.matches(".submit-score")) {
    localStorage.setItem(document.querySelector("input").value, count);
    document.querySelector("input").value = "";
    pEL.remove();
    hrEL.remove();
    formEL.remove();
    questionEL.innerText = "High scores";

    const olhighScoreEL = document.createElement("ol");
    mainEL.appendChild(olhighScoreEL);

    for ([key, score] of Object.entries(localStorage)) {
      const liScoreLEL = document.createElement("li");
      liScoreLEL.innerText = ` ${key}-${score}`;
      olhighScoreEL.appendChild(liScoreLEL);
    }

    const divEL = document.createElement("div");
    const goBtnEL = document.createElement("button");
    goBtnEL.innerText = "Go back";
    const clearBtnEL = document.createElement("button");
    clearBtnEL.innerText = "Clear high Scores";
    divEL.appendChild(goBtnEL);
    divEL.appendChild(clearBtnEL);
    mainEL.appendChild(divEL);

    goBtnEL.addEventListener("click", function () {
      location.reload();
    });

    clearBtnEL.addEventListener("click", function () {
      localStorage.clear();
    });
  }
});
