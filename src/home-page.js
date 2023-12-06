import Chef from "./images/chef.png";

function loadHomePage() {
  const main = document.querySelector(".main");
  const homeLink = document.querySelector(".home");

  // Create Elements
  const infoHome = document.createElement("div");
  const infoOne = document.createElement("div");
  const infoTwo = document.createElement("div");
  const chefImg = new Image();
  chefImg.src = Chef;
  chefImg.alt = "Smiling chef image";
  const infoThree = document.createElement("div");

  // Set element's text content
  infoOne.textContent = "Best pizza in your country";
  infoTwo.textContent = "Made with love since 2002";
  infoThree.textContent = "Order online or visit us!";

  // Add required classes to elements
  homeLink.classList.add("selected");
  infoHome.classList.add("info-home");
  chefImg.classList.add("chef-img");

  // Append elements accordingly
  infoHome.append(infoOne, infoTwo, chefImg, infoThree);
  main.append(infoHome);
}

export default loadHomePage;