import Chef from "./images/chef.png";

function loadWebsite() {
  // Create Elements
  const content = document.getElementById("content");
  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");
  const copyrightOne = document.createElement("div");
  const copyrightTwo = document.createElement("div");

  const restaurantName = document.createElement("div");
  const navbar = document.createElement("div");
  const navbarList = document.createElement("ul");
  const homeLink = document.createElement("li");
  const menuLink = document.createElement("li");
  const contactLink = document.createElement("li");

  const infoHome = document.createElement("div");
  const infoOne = document.createElement("div");
  const infoTwo = document.createElement("div");
  const chefImg = new Image();
  chefImg.src = Chef;
  chefImg.alt = "Smiling chef image";
  const infoThree = document.createElement("div");

  // Set element's text content
  restaurantName.textContent = "Royal's Pizza";
  homeLink.textContent = "Home";
  menuLink.textContent = "Menu";
  contactLink.textContent = "Contact";

  infoOne.textContent = "Best pizza in your country";
  infoTwo.textContent = "Made with love since 2002";
  infoThree.textContent = "Order online or visit us!";

  copyrightOne.innerHTML = "Chef image by<a href='https://wequassett.com/experience/supper-club-wequassett/'>WEQUASSETT</a>";
  copyrightTwo.innerHTML = "Background image by<a href='https://www.freepik.com/free-photo/baking-delicious-pizza-with-wood-fired-oven_37516237.htm#query=pizza%20in%20oven&position=0&from_view=search&track=ais&uuid=7f0fb8c3-ac0c-4ab3-a395-03ef925ee354'>Freepik</a>";

  // Add required classes to elements
  header.classList.add("header");
  restaurantName.classList.add("restaurant-name");
  navbar.classList.add("navbar");
  homeLink.classList.add("home");
  homeLink.classList.add("selected");
  menuLink.classList.add("menu");
  contactLink.classList.add("contact");

  main.classList.add("main");
  infoHome.classList.add("info-home");
  chefImg.classList.add("chef-img");

  footer.classList.add("footer");
  copyrightOne.classList.add("copyright");
  copyrightTwo.classList.add("copyright");

  // Append elements accordingly
  navbarList.append(homeLink, menuLink, contactLink);
  navbar.append(navbarList);
  header.append(restaurantName, navbar);

  infoHome.append(infoOne, infoTwo, chefImg, infoThree);
  main.append(infoHome);

  footer.append(copyrightOne, copyrightTwo);

  content.append(header, main, footer);
}

export default loadWebsite;