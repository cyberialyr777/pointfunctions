const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");

startBtn.onclick = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
};

exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

continueBtn.onclick = () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");

  showQuestions(0);
};

let questionCount = 0;

const nextBtn = document.querySelector(".next-btn");
const beforeBtn = document.querySelector(".before-btn");

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
  } else {
    console.log("Preguntas compleradas");
  }
};

beforeBtn.onclick = () => {
      questionCount--;
      showQuestions(questionCount);
}

const optionList = document.querySelector(".option-list");

function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = `<div class="option"><span>${questions[index].options[0]}<span></div>
    <div class="option"><span>${questions[index].options[1]}<span></div>
    <div class="option"><span>${questions[index].options[2]}<span></div>
    <div class="option"><span>${questions[index].options[3]}<span></div>`;

  optionList.innerHTML = optionTag;
  const option = document.querySelector('.option');
  for (let i = 0; i < option.lenght; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

function optionSelected(answer) {
    let userAnswer = answer .textContent;
    console.log(userAnswer);
}

function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent
}