import { loadPage } from "./onLoad";
import "./nav.css";
import "./animation.css";
import "./hero.css";
import { nav } from "./nav.js";

document.addEventListener('DOMContentLoaded', () => {
    loadPage();
    nav();
})
