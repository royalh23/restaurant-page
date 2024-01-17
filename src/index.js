import "./style.css";
import loadPage from "./load-page";
import loadWebsite from "./website";

loadWebsite();

const navLinks = document.querySelectorAll(".navbar li");
navLinks.forEach(link => link.addEventListener("click", loadPage));