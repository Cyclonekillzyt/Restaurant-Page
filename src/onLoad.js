import { element1 } from "./home.js";
import { element2 } from "./menu.js";
import { element3 } from "./about.js";
import { nav } from "./nav.js";
import { orderPage } from "./orderPage.js";

export function loadPage() {
  const content = document.getElementById("content");
  const heroSection = document.createElement("div");
  heroSection.classList.add("heroSection");

  heroSection.appendChild(element1());
  heroSection.appendChild(element2());
  heroSection.appendChild(element3());
  heroSection.appendChild(orderPage());

  content.appendChild(heroSection);
  const loading = nav();
  const menuSection = document.querySelector(".menu");
  const aboutSection = document.querySelector(".about");
  const orderSection = document.querySelector(".cta");
  loading.initLoad(menuSection);
  loading.initLoad(aboutSection);
  loading.initLoad(orderSection)
}
