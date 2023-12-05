import loadHomePage from "./home-page";
import loadMenuPage from "./menu-page";
import loadContactPage from "./contact-page";

function addEventListeners() {
  const navLinks = document.querySelectorAll(".navbar li");
  navLinks.forEach(link => link.addEventListener("click", loadPage));
}

function loadPage(e) {
  const content = document.getElementById("content");
  const main = document.querySelector(".main");

  switch (e.target.textContent) {
    case "Home":
      content.textContent = "";
      loadHomePage();
      addEventListeners();
      break;
    case "Menu":
      main.textContent = "";
      loadMenuPage();
      addEventListeners();
      break;
    case "Contact":
      main.textContent = "";
      loadContactPage();
      addEventListeners();
      break;
  }
}

export default loadPage;