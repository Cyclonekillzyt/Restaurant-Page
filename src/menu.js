import secondImage from "./images/second.jpg";
import thirdImage from "./images/third.jpg";
import fourImage from "./images/four.jpg";
import fifthImage from "./images/five.jpg"

export function element2() {
  const element = document.createElement("div");
  element.classList.add("menu");

  const section1 = document.createElement("div");
  const section2 = document.createElement("div");
  const image = document.createElement("img");

  image.classList.add("image");
  image.src = secondImage;
  section1.classList.add("heroText");
  section2.classList.add("heroPicture");

  const sectionName = document.createElement("p");
  const heroHeading = document.createElement("h1");
  const text = document.createElement("p");
  const addButton = document.createElement("button");

  sectionName.textContent = "Our Special Dishes";
  heroHeading.textContent = "Fried Chicken";
  text.textContent =
    " Lorem ipsum dolor sit";
  addButton.textContent = "Order Now";

  section1.append(sectionName, heroHeading, text, addButton);
  section2.appendChild(image);
  element.append(section1, section2);

  return element;
}