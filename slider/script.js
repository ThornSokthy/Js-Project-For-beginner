const ARROW_LEFT = document.querySelector("#arrow-left");
const ARROW_RIGHT = document.querySelector("#arrow-right");
const SLIDER = document.querySelector(".slider");
const IMAGES = document.querySelectorAll(".image");
const BOTTOM = document.querySelector(".bottom");

let sliderNumber = 1;
let lenght = IMAGES.length;

for (let i = 0; i < lenght; i++) {
  const div = document.createElement("div");
  div.className = "button";
  BOTTOM.appendChild(div);
}

const BOTTOMS = document.querySelectorAll(".button");
BOTTOMS[0].style.background = "white";

const resetBG = () => {
  BOTTOMS.forEach((button) => {
    button.style.background = "transparent";
  });
};

BOTTOMS.forEach((button, index) => {
  button.addEventListener("click", () => {
    resetBG();
    SLIDER.style.transform = `translateX(-${index * 600}px)`;
    sliderNumber = index + 1;
    BOTTOMS[index].style.background = "white";
  });
});

function nextSlide() {
  SLIDER.style.transform = `translateX(-${sliderNumber * 600}px)`;
  sliderNumber++;
}

function firstSlide() {
  SLIDER.style.transform = `translateX(0px)`;
  sliderNumber = 1;
}

function prevSlide() {
  SLIDER.style.transform = `translateX(-${(sliderNumber - 2) * 600}px)`;
  sliderNumber--;
}

function lastSlide() {
  SLIDER.style.transform = `translateX(-${(lenght - 1) * 600}px)`;
  sliderNumber = lenght;
}

const changeColor = () => {
  resetBG();
  BOTTOMS[sliderNumber - 1].style.background = "white";
};

ARROW_RIGHT.addEventListener("click", () => {
  sliderNumber < lenght ? nextSlide() : firstSlide();
  changeColor();
});

ARROW_LEFT.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : lastSlide();
  changeColor();
});

setInterval(() => {
  sliderNumber < lenght ? nextSlide() : firstSlide();
  changeColor();
}, 10000);
