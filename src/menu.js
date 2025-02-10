import Image1 from "./images/second.jpg";
import Image2 from "./images/third.jpg";
import Image3 from "./images/six.jpg";
import Image4 from "./images/five.jpg";
import Image6 from "./images/seven.jpg";
import Image5 from "./images/four.jpg";

export function element2() {
  const images = [Image1, Image2, Image3, Image4 , Image5, Image6 ];

  let imageNumber = images.length;
  let image = [];
  let divs = [];

  const element = document.createElement("div");
  element.classList.add("menu");

  const section1 = document.createElement("div");
  const section2 = document.createElement("div");
  for (let i = 0; i < imageNumber; i++) {
    divs[i] = document.createElement("div")
    image[i] = document.createElement("img");
    image[i].classList.add("menuImages");
    image[i].src = images[i];
    divs[i].appendChild(image[i]);
    section2.appendChild(divs[i]);
  }

  section1.classList.add("menuText");
  section2.classList.add("menuPicture");

  const sectionName = document.createElement("p");
  const heroHeading = document.createElement("h1");
  const text = document.createElement("p");

  sectionName.textContent = "Welcome to a Feast of Flavors!";
  heroHeading.textContent = "Our Special Dishes";
  text.textContent = "Embark on a culinary journey with our world-class meals, crafted with passion and the finest ingredients. Every bite is an experience worth savoring!";  

  sectionName.classList.add("section-name");
  heroHeading.classList.add("hero-heading");
  text.classList.add("hero-text");

  section1.append(sectionName, heroHeading, text);
  element.append(section1, section2);

  return element;
}
