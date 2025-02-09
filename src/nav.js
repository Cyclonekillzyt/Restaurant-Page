export function nav() {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const aboutBtn = document.getElementById("about");
  const ctaBtn = document.getElementById("cta");
  const homeSection = document.querySelector(".home");
  const menuSection = document.querySelector(".menu");
  const aboutSection = document.querySelector(".about");

  function initLoad (item){
    item.style.visibility = "hidden";
    item.style.opacity = "0";
    item.style.position = "absolute";
    item.style.pointerEvents = "none";
    item.style.zIndex = "0";
    item.style.transition = "opacity 0.5s ease-in-out";
  }

  function showSection(section) {
    [homeSection, menuSection, aboutSection].forEach(sec => {
      initLoad(sec)
    });

    section.style.visibility = "visible";
    section.style.opacity = "1";
    section.style.position = "relative";
    section.style.pointerEvents = "auto";
    section.style.zIndex = "1";

    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  homeBtn.addEventListener("click", () => showSection(homeSection));
  menuBtn.addEventListener("click", () => showSection(menuSection));
  aboutBtn.addEventListener("click", () => showSection(aboutSection));
  ctaBtn.addEventListener("click", () => showSection(homeSection));

  return {initLoad}
}
