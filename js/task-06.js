const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");

const validation = () => {
  if (input.value.length == dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", validation);
