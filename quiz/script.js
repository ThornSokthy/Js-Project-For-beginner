const data = [
  {
    id: 1,
    qusetion: "តើទន្លេណាដែលវែងជាងគេលើពិភពលោក?",
    answers: [
      {
        answer: "ទន្លេ Nile",
        isCorrect: true,
      },
      { answer: "ទន្លេ Amazon", isCorrect: false },
      { answer: "ទន្លេ Mississippi", isCorrect: false },
      { answer: "ទន្លេ Yangtze", isCorrect: false },
    ],
  },
  {
    id: 2,
    qusetion:
      "តើ​ប្រទេស​ណា​ដែល​ត្រូវ​បាន​គេ​ស្គាល់​ថា​ជា​ដែនដី​នៃ​ព្រះអាទិត្យ​រះ?",
    answers: [
      {
        answer: "សហរដ្ឋអាមេរិក",
        isCorrect: false,
      },
      { answer: "អូស្ត្រាលី", isCorrect: false },
      { answer: "អ៊ីតាលី", isCorrect: false },
      { answer: "ជប៉ុន", isCorrect: true },
    ],
  },
  {
    id: 3,
    qusetion: "តើជញ្ជាំងប៊ែរឡាំងដួលរលំនៅឆ្នាំណា?",
    answers: [
      {
        answer: "1986",
        isCorrect: false,
      },
      { answer: "1987", isCorrect: false },
      { answer: "1988", isCorrect: false },
      { answer: "1989", isCorrect: true },
    ],
  },
  {
    id: 4,
    qusetion: "តើសហរដ្ឋអាមេរិកប្រកាសឯករាជ្យនៅឆ្នាំណា?",
    answers: [
      {
        answer: "1775",
        isCorrect: false,
      },
      { answer: "1776", isCorrect: true },
      { answer: "1777", isCorrect: false },
      { answer: "1778", isCorrect: false },
    ],
  },
  {
    id: 5,
    qusetion: "តើរាជធានីនៃប្រទេសកម្ពុជាឈ្មោះអ្វី?",
    answers: [
      { answer: "ក្រុងព្រះសីហនុ ", isCorrect: false },
      { answer: "កំពង់ចាម", isCorrect: false },
      { answer: "ភ្នំពេញ", isCorrect: true },
      { answer: "សៀមរាប", isCorrect: false },
    ],
  },
  {
    id: 6,
    qusetion: "តើមួយណាជារូបិយប័ណ្ណខ្មែរ?",
    answers: [
      { answer: "គីប  ", isCorrect: false },
      { answer: "ក្រូណា ", isCorrect: false },
      { answer: "បាត ", isCorrect: false },
      { answer: "រៀល ", isCorrect: true },
    ],
  },
  {
    id: 7,
    qusetion: "តើ​ព្យញ្ជនៈ និង​ស្រៈ​ខ្មែរ​មាន​ប៉ុន្មាន​ក្នុង​ភាសា​ខ្មែរ?",
    answers: [
      { answer: "33 ព្យញ្ជនៈ 24 ស្រៈ ", isCorrect: false },
      { answer: "ព្យញ្ជនៈ ៣៥ ស្រៈ ២៣", isCorrect: false },
      { answer: "33 ព្យញ្ជនៈ 23 ស្រៈ", isCorrect: true },
      { answer: "២៣ ព្យញ្ជនៈ ៣៣ ស្រៈ", isCorrect: false },
    ],
  },
  {
    id: 8,
    qusetion: "តើ​សាសនា​ណា​​ដែល​ប្រជាជន​កម្ពុជា​ភាគ​ច្រើន​គោរព?",
    answers: [
      { answer: "មូស្លីម ", isCorrect: false },
      { answer: "គ្រិស្តសាសនា", isCorrect: false },
      { answer: "ព្រហ្មញ្ញសាសនា ", isCorrect: false },
      { answer: "ពុទ្ធសាសនា ", isCorrect: true },
    ],
  },
  {
    id: 9,
    qusetion: "តើរបាំប្រពៃណីខ្មែរជាអ្វី?",
    answers: [
      { answer: " របាំអប្សរា ", isCorrect: true },
      { answer: "រាំឆាយ៉ាម ", isCorrect: false },
      { answer: " របាំទំនើប ", isCorrect: false },
      { answer: "របាំបាឡេ  ", isCorrect: false },
    ],
  },
  {
    id: 10,
    qusetion: "តើភាសាខ្មែរផ្លូវការជាអ្វី?",
    answers: [
      { answer: " ហ្វីលីពីន ", isCorrect: false },
      { answer: "វៀតណាម ", isCorrect: false },
      { answer: " ខ្មែរ ", isCorrect: true },
      { answer: "កម្ពុជា", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const qusetion = document.querySelector(".question");
const answerContainer = document.querySelector(".answer-container");
const submitBtn = document.querySelector(".submit");
const playBtn = document.querySelector(".play");

let quIndex = 0;

let correctCount = 0;
let wrongCount = 0;
let selectedAnswer;

const playAgain = () => {
  quIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  showQuestion(quIndex);
};

playBtn.addEventListener("click", () => {
  gameScreen.style.display = "block";
  resultScreen.style.display = "none";
  playAgain();
});

function showResult() {
  gameScreen.style.display = "none";
  resultScreen.style.display = "block";

  resultScreen.querySelector(
    ".correct-answer"
  ).textContent = `Correct Answer: ${correctCount}`;
  resultScreen.querySelector(
    ".wrong-answer"
  ).textContent = `Wrong Answer: ${wrongCount}`;
  resultScreen.querySelector(".score").textContent = `Score: ${
    correctCount * 10
  }`;
}

const showQuestion = (quNum) => {
  if (quIndex === data.length) {
    showResult();
  }
  selectedAnswer = null;
  qusetion.textContent = data[quNum].qusetion;
  answerContainer.innerHTML = data[quNum].answers
    .map(
      (item, index) =>
        `
        <div class="answer">
          <input type="radio" name="answer" id="${index}" value="${item.isCorrect}" />
          <label for="${index}">${item.answer}</label>
        </div>
        `
    )
    .join("");

  selectAnswer();
};

function selectAnswer() {
  answerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
}

function submitAnswer() {
  submitBtn.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      quIndex++;
      showQuestion(quIndex);
    } else alert("Select an Answer!!");
  });
}

showQuestion(quIndex);
submitAnswer();
