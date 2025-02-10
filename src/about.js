import restaurant from "./images/restaurant_interior.jpg"

export function element3() {
  const element = document.createElement("div");
  element.classList.add("about");

  const section1 = document.createElement("div");
  const section2 = document.createElement("div");
  const section3 = document.createElement("div");
  const image = document.createElement("img");

  section1.classList.add("heroText");
  section2.classList.add("aboutValues");
  section3.classList.add("aboutCTA");
  image.classList.add("aboutImage");

  const sectionName = document.createElement("p");
  const heroHeading = document.createElement("h1");
  const text = document.createElement("p");

  sectionName.textContent = "Discover Our Story";
  heroHeading.textContent = "Passion on Every Plate";
  text.textContent =
    "At Resto , we believe that great food brings people together. Our journey started with a simple mission—to create unforgettable flavors with fresh, high-quality ingredients. Every dish is crafted with love, tradition, and a touch of innovation. Come and experience the taste that keeps our guests coming back for more!";

  section1.append(sectionName, heroHeading, text);

  const valuesHeading = document.createElement("h2");
  valuesHeading.textContent = "Why Choose Us?";
  const valuesList = document.createElement("ul");
  const values = [
    "✨ Fresh & Locally Sourced Ingredients",
    "🔥 Cooked to Perfection with Passion",
    "🍽️ A Unique Blend of Tradition & Innovation",
    "🌿 Healthy and Sustainable Choices",
    "💖 A Dining Experience You’ll Remember",
  ];

  values.forEach((val) => {
    const li = document.createElement("li");
    li.textContent = val;
    valuesList.appendChild(li);
  });

  section2.append(valuesHeading, valuesList);

  const ctaHeading = document.createElement("h2");
  const ctaText = document.createElement("p");
  const ctaButton = document.createElement("button");

  ctaHeading.textContent = "Join Us for an Unforgettable Meal!";
  ctaText.textContent =
    "Reserve a table or order online to enjoy the magic of our flavors.";
  ctaButton.textContent = "View Menu";
  ctaButton.classList.add("cta-button");
  image.src = restaurant;

  section3.append(ctaHeading, ctaText, image, ctaButton);


  element.append(section1, section2, section3);

  return element;
}
