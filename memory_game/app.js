const cardArray = [
  {
    name: "fries",
    img: "image/fries.png",
  },
  {
    name: "cheeseburger",
    img: "image/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "image/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "image/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "image/milkshake.png",
  },
  {
    name: "pizza",
    img: "image/pizza.png",
  },
  {
    name: "fries",
    img: "image/fries.png",
  },
  {
    name: "cheeseburger",
    img: "image/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "image/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "image/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "image/milkshake.png",
  },
  {
    name: "pizza",
    img: "image/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid-container");
const resultDisplay = document.getElementById("result");

let cardChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "image/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid-container img");
  const cardOne = cardsChosenIds[0];
  const cardTwo = cardsChosenIds[1];

  if (cardOne === cardTwo) {
    cards[cardOne].setAttribute("src", "image/blank.png");
    cards[cardTwo].setAttribute("src", "image/blank.png");
  }
  if (cardChosen[0] === cardChosen[1]) {
    // alert("You found a match!");
    cards[cardOne].setAttribute("src", "image/white.png");
    cards[cardTwo].setAttribute("src", "image/white.png");
    cards[cardOne].removeEventListener("click", flipCard);
    cards[cardTwo].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[cardOne].setAttribute("src", "image/blank.png");
    cards[cardTwo].setAttribute("src", "image/blank.png");
    // alert("Sorry, Try again!");
  }
  resultDisplay.textContent = "Score: " + cardsWon.length;
  cardChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations you found them all !🎉";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
