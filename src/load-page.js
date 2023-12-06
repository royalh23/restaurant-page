import loadHomePage from "./home-page";
import loadMenuPage from "./menu-page";
import loadContactPage from "./contact-page";

function addEventListeners() {
  const navLinks = document.querySelectorAll(".navbar li");
  navLinks.forEach(link => link.addEventListener("click", loadPage));
}

function loadPage(e) {
  const main = document.querySelector(".main");
  const homeLink = document.querySelector(".home");
  const menuLink = document.querySelector(".menu");
  const contactLink = document.querySelector(".contact");

  switch (e.target.textContent) {
    case "Home":
      main.textContent = "";
      menuLink.classList.remove("selected");
      contactLink.classList.remove("selected");
      loadHomePage();
      addEventListeners();
      break;
    case "Menu":
      main.textContent = "";
      homeLink.classList.remove("selected");
      contactLink.classList.remove("selected");
      loadMenuPage();
      addEventListeners();
      break;
    case "Contact":
      main.textContent = "";
      homeLink.classList.remove("selected");
      menuLink.classList.remove("selected");
      loadContactPage();
      addEventListeners();
      break;
  }
}

export default loadPage;