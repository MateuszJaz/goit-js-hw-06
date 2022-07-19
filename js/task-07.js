const sizeSlider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const setFontSize = () => {
  let sliderValue = sizeSlider.value + "px";
  text.style.fontSize = sliderValue;
};

sizeSlider.addEventListener("input", setFontSize);
