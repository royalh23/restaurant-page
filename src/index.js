import "./style.css";
import loadPage from "./load-page";
import loadHomePage from "./home-page";

(() => {
  loadHomePage();

  const navLinks = document.querySelectorAll(".navbar li");
  navLinks.forEach(link => link.addEventListener("click", loadPage));
})();