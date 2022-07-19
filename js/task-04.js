let counterValue = 0;

const btnDec = document.querySelector(`button[data-action="decrement"]`);
const btnInc = document.querySelector(`button[data-action="increment"]`);
const counter = document.querySelector("span#value");

counter.textContent = `${counterValue}`;

const handleClickInc = () => {
  counter.textContent = `${(counterValue += 1)}`;
};

const handleClickDec = () => {
  counter.textContent = `${(counterValue -= 1)}`;
};

btnDec.addEventListener("click", handleClickDec);
btnInc.addEventListener("click", handleClickInc);
