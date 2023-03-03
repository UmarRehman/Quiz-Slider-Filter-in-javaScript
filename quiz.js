const data = [
  {
    id: 1,
    question: "which fish is actually a fish?",
    answers: [
      { answer: "swordfish", iscorrect: true },
      { answer: "jellyfish", iscorrect: false },
      { answer: "starfish", iscorrect: false },
      { answer: "crayfish", iscorrect: false },
    ],
  },
  {
    id: 2,
    question: "a flutter is a group of",
    answers: [
      { answer: "bees", iscorrect: false },
      { answer: "jellyfish", iscorrect: false },
      { answer: "butterflies", iscorrect: true },
      { answer: "crayfish", iscorrect: false },
    ],
  },
  {
    id: 3,
    question: "a group of which animal group is a wake?",
    answers: [
      { answer: "bees", iscorrect: false },
      { answer: "vultures", iscorrect: true },
      { answer: "ant", iscorrect: false },
    ],
  },
];
const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;
const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};
play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});
const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";
  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answer: ${correctCount}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answer: ${wrongCount}`;
  resultScreen.querySelector(".score").textContent = `Score : ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `<div class="answer">
    <input name="answer" type="radio" id=${index} value=${item.iscorrect} />
    <label for=${index} >${item.answer}</label>
  </div>`
    )
    .join("");
  selectAnswer();
};
const selectAnswer = () => {
  console.log(answersContainer);
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e.target.value);
      selectedAnswer = e.target.value;
    });
  });
};
const submitAnswer = () => {
  submit.addEventListener("click", () => {
    console.log(selectedAnswer);
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("select an answer");
  });
};
showQuestion(qIndex);
submitAnswer();
