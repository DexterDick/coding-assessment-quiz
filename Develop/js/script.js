const startQuiz_btn = document.querySelector(".btn-start");
const questionEL = document.querySelector("h1");
const timeCountEL = document.querySelector(".timeCount");
const mainEL = document.querySelector("main");

const quizQuestions = [
  {
    question: "Commonly used data types include",
    answers: {
      1: " abc",
      2: " def",
      3: "ghi",
      4: "jkl",
    },
    correctAnswer: 1,
  },
  {
    question: "Commonly used data types include",
    answers: {
      1: " abc",
      2: " def",
      3: "ghi",
      4: "jkl",
    },
    correctAnswer: 2,
  },
  {
    question: "Commonly used data types include",
    answers: {
      1: " abc",
      2: " def",
      3: "ghi",
      4: "jkl",
    },
    correctAnswer: 3,
  },
  {
    question: "Commonly used data types include",
    answers: {
      1: " abc",
      2: " def",
      3: "ghi",
      4: "jkl",
    },
    correctAnswer: 4,
  },
  {
    question: "Commonly used data types include",
    answers: {
      1: " abc",
      2: " def",
      3: "ghi",
      4: "jkl",
    },
    correctAnswer: 5,
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

    // load first question in array:
    loadQueston(questionCount);
    const olEL = document.querySelector("ol");
    olEL.addEventListener("click", function (e) {
      checkAnswer(e, questionCount);
    });
  }
}

function loadQueston(questionNumber) {
  questionEL.innerText = quizQuestions[questionNumber].question;
  document.querySelector("main p").remove();
  document.querySelector(".btn-start").remove();
  const olEL = document.createElement("ol");

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
  const hrEL = document.createElement("hr");
  const h2El = document.createElement("h2");

  event.preventDefault();
  if (event.target.nodeName === "A") {
    if (
      Number(event.target.dataset.key) ===
      Number(quizQuestions[questionCount].correctAnswer)
    ) {
      console.log("good answer");
      mainEL.appendChild(hrEL);
      h2El.innerText = "Correct!";
      mainEL.appendChild(h2El);
    } else {
      console.log("wrong Anawer");
      mainEL.appendChild(hrEL);
      h2El.innerText = "Wrong!";
      mainEL.appendChild(h2El);
      console.log(
        `test: ${quizQuestions[questionCount].correctAnswer} event: ${event.target.dataset.key}`
      );
    }
  }
}

startQuiz_btn.addEventListener("click", startQuiz);
