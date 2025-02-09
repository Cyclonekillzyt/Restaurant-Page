import thirdImage from "./images/third.jpg";

export function element3() {
  const element = document.createElement("div");
  element.classList.add("about");

  const section1 = document.createElement("div");
  const section2 = document.createElement("div");
  const image = document.createElement("img");

  image.classList.add("image");
  image.src = thirdImage;
  section1.classList.add("heroText");
  section2.classList.add("heroPicture");

  const sectionName = document.createElement("p");
  const heroHeading = document.createElement("h1");
  const text = document.createElement("p");
  const addButton = document.createElement("button");

  sectionName.textContent = "Our Special Dishes";
  heroHeading.textContent = "Fried Chicken";
  text.textContent =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maxime laboriosam, molestiae tempore commodi optio fuga reprehenderit ";
  addButton.textContent = "Order Now";

  section1.append(sectionName, heroHeading, text, addButton);
  section2.appendChild(image);
  element.append(section1, section2);

  return element;
}
