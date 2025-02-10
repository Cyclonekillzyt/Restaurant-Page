import orderImage1 from "./images/first.jpg";
import orderImage2 from "./images/second.jpg";
import orderImage3 from "./images/third.jpg";

export function orderPage() {
  const element = document.createElement("div");
  element.classList.add("cta");

  const section1 = document.createElement("div");
  const section2 = document.createElement("div");
  section1.classList.add("orderText");
  section2.classList.add("orderItems");

  const sectionName = document.createElement("p");
  const heroHeading = document.createElement("h1");
  const text = document.createElement("p");

  sectionName.textContent = "Place Your Order";
  heroHeading.textContent = "Deliciousness Delivered to You";
  text.textContent =
    "Choose from our menu and place your order with ease. Freshly made, just for you!";

  sectionName.classList.add("section-name");
  heroHeading.classList.add("hero-heading");
  text.classList.add("hero-text");

  section1.append(sectionName, heroHeading, text);

  const menuItems = [
    { name: "Grilled Chicken", image: orderImage1, price: "$12.99" },
    { name: "Cheese Burger", image: orderImage2, price: "$9.99" },
    { name: "Pasta Alfredo", image: orderImage3, price: "$14.99" },
  ];

  menuItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menuItem");

    const image = document.createElement("img");
    image.src = item.image;
    image.classList.add("menuImage");

    const itemName = document.createElement("h2");
    itemName.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = item.price;
    price.classList.add("price");

    const orderButton = document.createElement("button");
    orderButton.textContent = "Order Now";
    orderButton.classList.add("orderButton");

    itemDiv.append(image, itemName, price, orderButton);
    section2.appendChild(itemDiv);
  });

  element.append(section1, section2);
  return element;
}
