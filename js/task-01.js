const numOfCategories = document.querySelectorAll("ul#categories>li").length;
const category = document.querySelectorAll("h2");
const elements = document.querySelectorAll(".item>ul");

console.log("Number of categories:", numOfCategories);
for (let i = 0; i < numOfCategories; i++) {
  console.log("");
  console.log("Category :", category[i].textContent);
  console.log("Elements :", elements[i].children.length);
}
