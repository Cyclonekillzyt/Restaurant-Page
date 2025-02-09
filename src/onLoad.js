import { element1 } from "./home.js";
import { element2 } from "./menu.js";
import { element3 } from "./about.js";
import { nav } from "./nav.js";

export function loadPage() {
  const content = document.getElementById("content");
  const heroSection = document.createElement("div");
  heroSection.classList.add("heroSection");

  heroSection.appendChild(element1());
  heroSection.appendChild(element2());
  heroSection.appendChild(element3());

  content.appendChild(heroSection);
  const loading = nav();
  const menuSection = document.querySelector(".menu");
  const aboutSection = document.querySelector(".about");
  loading.initLoad(menuSection);
  loading.initLoad(aboutSection);
}
