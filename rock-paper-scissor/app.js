const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll(".btn");
let userChoice;
let computerChoice;
let result;

possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  computerChoice = Math.floor(Math.random() * possibleChoice.length);
  if (computerChoice === 1) computerChoice = "rock";
  else if (computerChoice === 2) computerChoice = "paper";
  else computerChoice = "scissor";

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (userChoice === "rock" && computerChoice === "paper")
    result = "You lose !😢";
  else if (userChoice === "rock" && computerChoice === "scissor")
    result = "You Win !😎";
  else if (userChoice === "scissor" && computerChoice === "paper")
    result = "You Win !😎";
  else if (userChoice === "paper" && computerChoice === "scissor")
    result = "You Lose !😎";
  else if (userChoice === "paper" && computerChoice === "rock")
    result = "You Win !😎";
  else if (userChoice === "scissor" && computerChoice === "rock")
    result = "You Lose !😎";
  else if (userChoice === "paper" && computerChoice === "rock")
    result = "You Win !😎";
  else result = "Its a draw !🎉";

  resultDisplay.innerHTML = result;
}
