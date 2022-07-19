const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  let li = document.createElement("li");
  li.innerText = ingredient;
  list.appendChild(li);
  li.classList.add("item");
});
