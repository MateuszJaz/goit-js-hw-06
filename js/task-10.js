function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const boxes = document.querySelector("div#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const createBoxes = (amount) => {
  let box = "";
  let size = 20;
  for (let i = 1; i <= amount; i += 1) {
    size += 10;
    box += `<div class="box" style="background-color: ${getRandomHexColor()}; height: ${size}px; width: ${size}px;"></div>`;
  }
  boxes.insertAdjacentHTML("afterbegin", box);
};

const destroyBoxes = () => {
  while (boxes.firstChild) boxes.firstChild.remove();
};

btnCreate.addEventListener("click", (event) => {
  createBoxes(input.value);
});
btnDestroy.addEventListener("click", destroyBoxes);
