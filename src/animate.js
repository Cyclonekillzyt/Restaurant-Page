export function animateBackground() {
  const elements = document.querySelectorAll(".scroll-item");
  let currentIndex = 0;
  const intervalTime = 5000;

  function animate() {
    let currentElement = elements[currentIndex];
    let nextIndex = (currentIndex + 1) % elements.length;
    let nextElement = elements[nextIndex];

    currentElement.style.animation = "scroll 1s linear forwards";

    setTimeout(() => {
      nextElement.style.display = "block";
      nextElement.style.animation = "fromLeft 1s linear forwards";
      currentElement.style.display = "none";
    }, 100);

    currentIndex = nextIndex;
  }
  setInterval(animate, intervalTime);
}


