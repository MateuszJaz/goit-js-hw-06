function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBodyColor = (body, span) => {
  body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor();
  span = document.querySelector(".color");
  span.textContent = body.style.backgroundColor;
};

const button = document.querySelector(".change-color");
button.addEventListener("click", changeBodyColor);
