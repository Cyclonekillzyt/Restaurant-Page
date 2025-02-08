import { element1 } from "./element1.js";
import { element2 } from "./element2.js";
import { element3 } from "./element3.js";
import { animateBackground } from "./animate.js";

export function loadPage() {
  const content = document.getElementById("content");

  const heroSection = document.createElement("section");
  heroSection.classList.add("heroSection");
  heroSection.appendChild(element1());
  heroSection.appendChild(element2());
  heroSection.appendChild(element3());
  content.appendChild(heroSection);
  animateBackground();
}
