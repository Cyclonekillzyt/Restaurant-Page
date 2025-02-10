export function nav() {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const aboutBtn = document.getElementById("about");
  const ctaBtn = document.getElementById("cta");
  const homeSection = document.querySelector(".home");
  const menuSection = document.querySelector(".menu");
  const aboutSection = document.querySelector(".about");
  const ctaSection = document.querySelector(".cta");

  function initLoad (item){
    item.style.display = "none";
  }

  function showSection(section) {
    [homeSection, menuSection, aboutSection, ctaSection].forEach(sec => {
      initLoad(sec)
    });

    section.style.display = "flex";

    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  }

  homeBtn.addEventListener("click", () => showSection(homeSection));
  menuBtn.addEventListener("click", () => showSection(menuSection));
  aboutBtn.addEventListener("click", () => showSection(aboutSection));
  ctaBtn.addEventListener("click", () => showSection(ctaSection));

  return {initLoad}
}
