const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

const listItem = () => {
  for (const ingredient of ingredients) {
    const liElem = document.createElement("li");
    liElem.textContent = ingredient;
    liElem.classList.add("item");
    list.append(liElem);
  }
};
console.log(listItem());
