const startQuiz_btn = document.querySelector(".btn-start");
console.log(startQuiz_btn);

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
  {
    question: "Commonly used data types include",
    answers: {
      1: " abc",
      2: " def",
      3: "ghi",
      4: "jkl",
    },
    correctAnswer: 6,
  },
  {
    question: "Commonly used data types include",
    answers: {
      1: " abc",
      2: " def",
      3: "ghi",
      4: "jkl",
    },
    correctAnswer: 7,
  },
  {
    question: "Commonly used data types include",
    answers: {
      1: " abc",
      2: " def",
      3: "ghi",
      4: "jkl",
    },
    correctAnswer: 8,
  },
  {
    question: "Commonly used data types include",
    answers: {
      1: " abc",
      2: " def",
      3: "ghi",
      4: "jkl",
    },
    correctAnswer: 9,
  },
  {
    question: "Commonly used data types include",
    answers: {
      1: " abc",
      2: " def",
      3: "ghi",
      4: "jkl",
    },
    correctAnswer: 10,
  },
];

// Check if quiz is started
let start = false;

function startQuiz() {
  start = true;
  if (start) {
    console.log("Quiz started");
  }
}

startQuiz_btn.addEventListener("click", startQuiz);
