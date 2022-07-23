const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("ul.gallery");

gallery.style.listStyle = "none";
gallery.style.padding = "0px";
gallery.style.gap = "10px";
gallery.style.display = "flex";
gallery.style.flexDirection = "column";
gallery.style.alignItems = "baseline";
gallery.style.justifyContent = "center";

const galleryHTML = images.map((image) => {
  const listItem = document.createElement("li");
  listItem.insertAdjacentHTML(
    "afterbegin",
    `<img src="${image.url}" alt="${image.alt}" width="300" style ="border-radius: 5px;" />
      `
  );
  listItem.classList.add("item");
  return listItem;
});

gallery.append(...galleryHTML);
