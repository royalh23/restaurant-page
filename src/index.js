import "./style.css";
import loadHomePage from "./home-page";
import loadMenuPage from "./menu-page";
import loadContactPage from "./contact-page";

(() => {
  loadHomePage();

  const navLinks = document.querySelectorAll("navbar > li");
  navLinks.forEach(link => link.addEventListener("click", loadPage));
})();