import loadHomePage from "./home-page";
import loadMenuPage from "./menu-page";
import loadContactPage from "./contact-page";

function addEventListeners() {
  const navLinks = document.querySelectorAll(".navbar li");
  navLinks.forEach(link => link.addEventListener("click", loadPage));
}

function loadPage(e) {
  const content = document.getElementById("content");

  switch (e.target.textContent) {
    case "Home":
      content.textContent = "";
      loadHomePage();
      addEventListeners();
      break;
    case "Menu":
      content.textContent = "";
      loadMenuPage();
      addEventListeners();
      break;
    case "Contact":
      content.textContent = "";
      loadContactPage();
      addEventListeners();
      break;
  }
}

export default loadPage;