/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant-location.png */ "./src/images/restaurant-location.png");

function loadContactPage() {
  const main = document.querySelector(".main");
  const contactLink = document.querySelector(".contact");

  // Create Elements
  const infoContact = document.createElement("div");
  const phoneNumber = document.createElement("div");
  const location = document.createElement("div");
  const map = new Image();
  map.src = _images_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__;
  map.alt = "Restaurant location on map";

  // Set element's text content
  phoneNumber.textContent = "📞 +994-50-123-45-67";
  location.textContent = "🏠 Sulh street 21, Baku, Azerbaijan";

  // Add required classes to elements
  contactLink.classList.add("selected");
  infoContact.classList.add("info-contact");

  // Append elements accordingly
  infoContact.append(phoneNumber, location, map);
  main.append(infoContact);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chef.png */ "./src/images/chef.png");

function loadHomePage() {
  const main = document.querySelector(".main");
  const homeLink = document.querySelector(".home");

  // Create Elements
  const infoHome = document.createElement("div");
  const infoOne = document.createElement("div");
  const infoTwo = document.createElement("div");
  const chefImg = new Image();
  chefImg.src = _images_chef_png__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");



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
      (0,_home_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
      addEventListeners();
      break;
    case "Menu":
      main.textContent = "";
      homeLink.classList.remove("selected");
      contactLink.classList.remove("selected");
      (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
      addEventListeners();
      break;
    case "Contact":
      main.textContent = "";
      homeLink.classList.remove("selected");
      menuLink.classList.remove("selected");
      (0,_contact_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
      addEventListeners();
      break;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_salsiccia_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/salsiccia.png */ "./src/images/salsiccia.png");
/* harmony import */ var _images_gamberi_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/gamberi.png */ "./src/images/gamberi.png");
/* harmony import */ var _images_pepe_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pepe.png */ "./src/images/pepe.png");
/* harmony import */ var _images_disgustoso_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/disgustoso.png */ "./src/images/disgustoso.png");
/* harmony import */ var _images_colorato_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/colorato.png */ "./src/images/colorato.png");
/* harmony import */ var _images_pomodoro_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pomodoro.png */ "./src/images/pomodoro.png");






function loadMenuPage() {
  const main = document.querySelector(".main");
  const menuLink = document.querySelector(".menu");

  // Create Elements
  const infoMenu = document.createElement("div");
  const salsiccia = document.createElement("div");
  const gamberi = document.createElement("div");
  const pepe = document.createElement("div");
  const disgustoso = document.createElement("div");
  const colorato = document.createElement("div");
  const pomodoro = document.createElement("div");
  const salsicciaImg = new Image();
  const gamberiImg = new Image();
  const pepeImg = new Image();
  const disgustosoImg = new Image();
  const coloratoImg = new Image();
  const pomodoroImg = new Image();
  salsicciaImg.src = _images_salsiccia_png__WEBPACK_IMPORTED_MODULE_0__;
  salsicciaImg.alt = "Salsiccia pizza";
  gamberiImg.src = _images_gamberi_png__WEBPACK_IMPORTED_MODULE_1__;
  gamberiImg.alt = "Gamberi pizza";
  pepeImg.src = _images_pepe_png__WEBPACK_IMPORTED_MODULE_2__;
  pepeImg.alt = "Pepe pizza";
  disgustosoImg.src = _images_disgustoso_png__WEBPACK_IMPORTED_MODULE_3__;
  disgustosoImg.alt = "Disgustoso pizza";
  coloratoImg.src = _images_colorato_png__WEBPACK_IMPORTED_MODULE_4__;
  coloratoImg.alt = "Colorato pizza";
  pomodoroImg.src = _images_pomodoro_png__WEBPACK_IMPORTED_MODULE_5__;
  pomodoroImg.alt = "Pomodor pizza";
  const salsicciaTitle = document.createElement("div");
  const gamberiTitle = document.createElement("div");
  const pepeTitle = document.createElement("div");
  const disgustosoTitle = document.createElement("div");
  const coloratoTitle = document.createElement("div");
  const pomodoroTitle = document.createElement("div");
  const salsicciaIngredients = document.createElement("div");
  const gamberiIngredients = document.createElement("div");
  const pepeIngredients = document.createElement("div");
  const disgustosoIngredients = document.createElement("div");
  const coloratoIngredients = document.createElement("div");
  const pomodoroIngredients = document.createElement("div");

  // Set element's text content
  salsicciaTitle.textContent = "Salsiccia";
  gamberiTitle.textContent = "Gamberi";
  pepeTitle.textContent = "Pepe";
  disgustosoTitle.textContent = "Disgustoso";
  coloratoTitle.textContent = "Colorato";
  pomodoroTitle.textContent = "Pomodoro";
  salsicciaIngredients.textContent = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil";
  gamberiIngredients.textContent = "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil";
  pepeIngredients.textContent = "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil";
  disgustosoIngredients.textContent = "Tomato sauce, Bacon, Pineapple, Olives, Basil";
  coloratoIngredients.textContent = "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil";
  pomodoroIngredients.textContent = "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli";

  // Add required classes to elements
  menuLink.classList.add("selected");
  infoMenu.classList.add("info-menu");
  salsiccia.classList.add("pizza");
  gamberi.classList.add("pizza");
  pepe.classList.add("pizza");
  disgustoso.classList.add("pizza");
  colorato.classList.add("pizza");
  pomodoro.classList.add("pizza");
  salsicciaTitle.classList.add("pizza-title");
  gamberiTitle.classList.add("pizza-title");
  pepeTitle.classList.add("pizza-title");
  disgustosoTitle.classList.add("pizza-title");
  coloratoTitle.classList.add("pizza-title");
  pomodoroTitle.classList.add("pizza-title");
  salsicciaIngredients.classList.add("pizza-ingredients");
  gamberiIngredients.classList.add("pizza-ingredients");
  pepeIngredients.classList.add("pizza-ingredients");
  disgustosoIngredients.classList.add("pizza-ingredients");
  coloratoIngredients.classList.add("pizza-ingredients");
  pomodoroIngredients.classList.add("pizza-ingredients");

  // Append elements accordingly
  salsiccia.append(salsicciaImg, salsicciaTitle, salsicciaIngredients);
  gamberi.append(gamberiImg, gamberiTitle, gamberiIngredients);
  pepe.append(pepeImg, pepeTitle, pepeIngredients);
  disgustoso.append(disgustosoImg, disgustosoTitle, disgustosoIngredients);
  colorato.append(coloratoImg, coloratoTitle, coloratoIngredients);
  pomodoro.append(pomodoroImg, pomodoroTitle, pomodoroIngredients);
  infoMenu.append(salsiccia, gamberi, pepe, disgustoso, colorato, pomodoro);
  main.append(infoMenu);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chef.png */ "./src/images/chef.png");

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
  chefImg.src = _images_chef_png__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/fancy-font.woff2 */ "./src/fonts/fancy-font.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/roboto.woff2 */ "./src/fonts/roboto.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/roboto-bold.woff2 */ "./src/fonts/roboto-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/oven-pizza.jpg */ "./src/images/oven-pizza.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "FancyFont";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: "Roboto";
  src: 
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}),
    url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  color: white;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: cover;  
  background-attachment: fixed;
  background-repeat: no-repeat; 
}

#content {
  display: flex;
  flex-direction: column;
  height: inherit;
}

.header, .info-home, .info-menu, .info-contact, .footer {
  background-color: rgba(0, 0, 0, 0.5);
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 25px 0;
  margin-bottom: 50px;
}

.restaurant-name {
  font-family: "FancyFont", sans-serif;
  font-size: 3.5rem;
}

.navbar > ul {
  display: flex;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  cursor: pointer;
  list-style-type: none;
  font-size: 1.4rem;
  padding: 20px 20px;
  transition: 0.2s ease-in-out;
}

li:hover {
  transform: translateY(-5px);
}

.selected {
  border-bottom: 2px solid white;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
}

.info-home, .info-menu, .info-contact {
  font-size: 1.4rem;
  width: 650px;
}

.info-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px 100px;
}

.chef-img {
  width: 300px;
  height: 300px;
  clip-path: circle();
}

.info-menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  padding: 30px;
}

.pizza {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.7);
}

.pizza-title {
  font-size: 2rem;
  font-weight: bold;
}

.pizza-ingredients {
  text-align: center;
  font-size: 1.1rem;
}

.info-menu img {
  width: 130px;
  height: 80px;
}

.info-contact {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
}

.info-contact img {
  width: 100%;
  height: 400px;
}

.footer {
  display: flex;
  justify-content: center;
  gap: 100px;
  font-size: 1.1rem;
  padding: 10px 20px;
  margin-top: 50px;
}

.copyright {
  display: flex;
  gap: 5px;
}

a, a:visited {
  color: white;
  border: none;
  outline: none;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAkC;AACpC;;AAEA;EACE,qBAAqB;EACrB;;2CAEgC;AAClC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,aAAa;EACb,SAAS;EACT,UAAU;EACV,yDAA8C;EAC9C,sBAAsB;EACtB,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["@font-face {\n  font-family: \"FancyFont\";\n  src: url(./fonts/fancy-font.woff2);\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: \n    url(./fonts/roboto.woff2),\n    url(./fonts/roboto-bold.woff2);\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background-image: url(./images/oven-pizza.jpg);\n  background-size: cover;  \n  background-attachment: fixed;\n  background-repeat: no-repeat; \n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n}\n\n.header, .info-home, .info-menu, .info-contact, .footer {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  padding: 25px 0;\n  margin-bottom: 50px;\n}\n\n.restaurant-name {\n  font-family: \"FancyFont\", sans-serif;\n  font-size: 3.5rem;\n}\n\n.navbar > ul {\n  display: flex;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  cursor: pointer;\n  list-style-type: none;\n  font-size: 1.4rem;\n  padding: 20px 20px;\n  transition: 0.2s ease-in-out;\n}\n\nli:hover {\n  transform: translateY(-5px);\n}\n\n.selected {\n  border-bottom: 2px solid white;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1 0 auto;\n}\n\n.info-home, .info-menu, .info-contact {\n  font-size: 1.4rem;\n  width: 650px;\n}\n\n.info-home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  padding: 50px 100px;\n}\n\n.chef-img {\n  width: 300px;\n  height: 300px;\n  clip-path: circle();\n}\n\n.info-menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 30px;\n  padding: 30px;\n}\n\n.pizza {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  padding: 30px;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.pizza-title {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.pizza-ingredients {\n  text-align: center;\n  font-size: 1.1rem;\n}\n\n.info-menu img {\n  width: 130px;\n  height: 80px;\n}\n\n.info-contact {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  padding: 50px;\n}\n\n.info-contact img {\n  width: 100%;\n  height: 400px;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n  font-size: 1.1rem;\n  padding: 10px 20px;\n  margin-top: 50px;\n}\n\n.copyright {\n  display: flex;\n  gap: 5px;\n}\n\na, a:visited {\n  color: white;\n  border: none;\n  outline: none;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/fancy-font.woff2":
/*!************************************!*\
  !*** ./src/fonts/fancy-font.woff2 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3f0ff28f420da0283fc.woff2";

/***/ }),

/***/ "./src/fonts/roboto-bold.woff2":
/*!*************************************!*\
  !*** ./src/fonts/roboto-bold.woff2 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "227c93190fe7f82de3f8.woff2";

/***/ }),

/***/ "./src/fonts/roboto.woff2":
/*!********************************!*\
  !*** ./src/fonts/roboto.woff2 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b009a76ad6afe4ebd301.woff2";

/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30b0126e2c7c65df21b9.png";

/***/ }),

/***/ "./src/images/colorato.png":
/*!*********************************!*\
  !*** ./src/images/colorato.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16638ff23489422a5d03.png";

/***/ }),

/***/ "./src/images/disgustoso.png":
/*!***********************************!*\
  !*** ./src/images/disgustoso.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34362ada84919363d765.png";

/***/ }),

/***/ "./src/images/gamberi.png":
/*!********************************!*\
  !*** ./src/images/gamberi.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39cec0b6bfec797325ef.png";

/***/ }),

/***/ "./src/images/oven-pizza.jpg":
/*!***********************************!*\
  !*** ./src/images/oven-pizza.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2bb7eae9b7865b7b089.jpg";

/***/ }),

/***/ "./src/images/pepe.png":
/*!*****************************!*\
  !*** ./src/images/pepe.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c8c231f8597e0da675e.png";

/***/ }),

/***/ "./src/images/pomodoro.png":
/*!*********************************!*\
  !*** ./src/images/pomodoro.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1896a43718b529295942.png";

/***/ }),

/***/ "./src/images/restaurant-location.png":
/*!********************************************!*\
  !*** ./src/images/restaurant-location.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d4ead59a4044100f85f.png";

/***/ }),

/***/ "./src/images/salsiccia.png":
/*!**********************************!*\
  !*** ./src/images/salsiccia.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f1a48a94a2ff7cfbbe3.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./website */ "./src/website.js");



(() => {
  (0,_website__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const navLinks = document.querySelectorAll(".navbar li");
  navLinks.forEach(link => link.addEventListener("click", _load_page__WEBPACK_IMPORTED_MODULE_1__["default"]));
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFh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LGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsa0RBQVEsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXAgZnJvbSBcIi4vaW1hZ2VzL3Jlc3RhdXJhbnQtbG9jYXRpb24ucG5nXCI7XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XG5cbiAgLy8gQ3JlYXRlIEVsZW1lbnRzXG4gIGNvbnN0IGluZm9Db250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1hcCA9IG5ldyBJbWFnZSgpO1xuICBtYXAuc3JjID0gTWFwO1xuICBtYXAuYWx0ID0gXCJSZXN0YXVyYW50IGxvY2F0aW9uIG9uIG1hcFwiO1xuXG4gIC8vIFNldCBlbGVtZW50J3MgdGV4dCBjb250ZW50XG4gIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gXCLwn5OeICs5OTQtNTAtMTIzLTQ1LTY3XCI7XG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gXCLwn4+gIFN1bGggc3RyZWV0IDIxLCBCYWt1LCBBemVyYmFpamFuXCI7XG5cbiAgLy8gQWRkIHJlcXVpcmVkIGNsYXNzZXMgdG8gZWxlbWVudHNcbiAgY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBpbmZvQ29udGFjdC5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250YWN0XCIpO1xuXG4gIC8vIEFwcGVuZCBlbGVtZW50cyBhY2NvcmRpbmdseVxuICBpbmZvQ29udGFjdC5hcHBlbmQocGhvbmVOdW1iZXIsIGxvY2F0aW9uLCBtYXApO1xuICBtYWluLmFwcGVuZChpbmZvQ29udGFjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0UGFnZTsiLCJpbXBvcnQgQ2hlZiBmcm9tIFwiLi9pbWFnZXMvY2hlZi5wbmdcIjtcblxuZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcblxuICAvLyBDcmVhdGUgRWxlbWVudHNcbiAgY29uc3QgaW5mb0hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mb1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoZWZJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY2hlZkltZy5zcmMgPSBDaGVmO1xuICBjaGVmSW1nLmFsdCA9IFwiU21pbGluZyBjaGVmIGltYWdlXCI7XG4gIGNvbnN0IGluZm9UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gU2V0IGVsZW1lbnQncyB0ZXh0IGNvbnRlbnRcbiAgaW5mb09uZS50ZXh0Q29udGVudCA9IFwiQmVzdCBwaXp6YSBpbiB5b3VyIGNvdW50cnlcIjtcbiAgaW5mb1R3by50ZXh0Q29udGVudCA9IFwiTWFkZSB3aXRoIGxvdmUgc2luY2UgMjAwMlwiO1xuICBpbmZvVGhyZWUudGV4dENvbnRlbnQgPSBcIk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyFcIjtcblxuICAvLyBBZGQgcmVxdWlyZWQgY2xhc3NlcyB0byBlbGVtZW50c1xuICBob21lTGluay5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIGluZm9Ib21lLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWhvbWVcIik7XG4gIGNoZWZJbWcuY2xhc3NMaXN0LmFkZChcImNoZWYtaW1nXCIpO1xuXG4gIC8vIEFwcGVuZCBlbGVtZW50cyBhY2NvcmRpbmdseVxuICBpbmZvSG9tZS5hcHBlbmQoaW5mb09uZSwgaW5mb1R3bywgY2hlZkltZywgaW5mb1RocmVlKTtcbiAgbWFpbi5hcHBlbmQoaW5mb0hvbWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZVBhZ2U7IiwiaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tIFwiLi9ob21lLXBhZ2VcIjtcbmltcG9ydCBsb2FkTWVudVBhZ2UgZnJvbSBcIi4vbWVudS1wYWdlXCI7XG5pbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3QtcGFnZVwiO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmJhciBsaVwiKTtcbiAgbmF2TGlua3MuZm9yRWFjaChsaW5rID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRQYWdlKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKGUpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdFwiKTtcblxuICBzd2l0Y2ggKGUudGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgbWVudUxpbmsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgY29udGFjdExpbmsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgbG9hZEhvbWVQYWdlKCk7XG4gICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaG9tZUxpbmsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgY29udGFjdExpbmsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgbG9hZE1lbnVQYWdlKCk7XG4gICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaG9tZUxpbmsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgbWVudUxpbmsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XG4gICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7IiwiaW1wb3J0IFNhbHNpY2NpYSBmcm9tIFwiLi9pbWFnZXMvc2Fsc2ljY2lhLnBuZ1wiO1xuaW1wb3J0IEdhbWJlcmkgZnJvbSBcIi4vaW1hZ2VzL2dhbWJlcmkucG5nXCI7XG5pbXBvcnQgUGVwZSBmcm9tIFwiLi9pbWFnZXMvcGVwZS5wbmdcIjtcbmltcG9ydCBEaXNndXN0b3NvIGZyb20gXCIuL2ltYWdlcy9kaXNndXN0b3NvLnBuZ1wiO1xuaW1wb3J0IENvbG9yYXRvIGZyb20gXCIuL2ltYWdlcy9jb2xvcmF0by5wbmdcIjtcbmltcG9ydCBQb21vZG9ybyBmcm9tIFwiLi9pbWFnZXMvcG9tb2Rvcm8ucG5nXCI7XG5cbmZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5cbiAgLy8gQ3JlYXRlIEVsZW1lbnRzXG4gIGNvbnN0IGluZm9NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2Fsc2ljY2lhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZ2FtYmVyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBlcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaXNndXN0b3NvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sb3JhdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwb21vZG9ybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3Qgc2Fsc2ljY2lhSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGdhbWJlcmlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgcGVwZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBkaXNndXN0b3NvSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGNvbG9yYXRvSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHBvbW9kb3JvSW1nID0gbmV3IEltYWdlKCk7XG4gIHNhbHNpY2NpYUltZy5zcmMgPSBTYWxzaWNjaWE7XG4gIHNhbHNpY2NpYUltZy5hbHQgPSBcIlNhbHNpY2NpYSBwaXp6YVwiO1xuICBnYW1iZXJpSW1nLnNyYyA9IEdhbWJlcmk7XG4gIGdhbWJlcmlJbWcuYWx0ID0gXCJHYW1iZXJpIHBpenphXCI7XG4gIHBlcGVJbWcuc3JjID0gUGVwZTtcbiAgcGVwZUltZy5hbHQgPSBcIlBlcGUgcGl6emFcIjtcbiAgZGlzZ3VzdG9zb0ltZy5zcmMgPSBEaXNndXN0b3NvO1xuICBkaXNndXN0b3NvSW1nLmFsdCA9IFwiRGlzZ3VzdG9zbyBwaXp6YVwiO1xuICBjb2xvcmF0b0ltZy5zcmMgPSBDb2xvcmF0bztcbiAgY29sb3JhdG9JbWcuYWx0ID0gXCJDb2xvcmF0byBwaXp6YVwiO1xuICBwb21vZG9yb0ltZy5zcmMgPSBQb21vZG9ybztcbiAgcG9tb2Rvcm9JbWcuYWx0ID0gXCJQb21vZG9yIHBpenphXCI7XG5cbiAgY29uc3Qgc2Fsc2ljY2lhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBnYW1iZXJpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwZXBlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaXNndXN0b3NvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2xvcmF0b1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG9tb2Rvcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3Qgc2Fsc2ljY2lhSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBnYW1iZXJpSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwZXBlSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaXNndXN0b3NvSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2xvcmF0b0luZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG9tb2Rvcm9JbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gU2V0IGVsZW1lbnQncyB0ZXh0IGNvbnRlbnRcbiAgc2Fsc2ljY2lhVGl0bGUudGV4dENvbnRlbnQgPSBcIlNhbHNpY2NpYVwiO1xuICBnYW1iZXJpVGl0bGUudGV4dENvbnRlbnQgPSBcIkdhbWJlcmlcIjtcbiAgcGVwZVRpdGxlLnRleHRDb250ZW50ID0gXCJQZXBlXCI7XG4gIGRpc2d1c3Rvc29UaXRsZS50ZXh0Q29udGVudCA9IFwiRGlzZ3VzdG9zb1wiO1xuICBjb2xvcmF0b1RpdGxlLnRleHRDb250ZW50ID0gXCJDb2xvcmF0b1wiO1xuICBwb21vZG9yb1RpdGxlLnRleHRDb250ZW50ID0gXCJQb21vZG9yb1wiO1xuICBzYWxzaWNjaWFJbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgSG9tZW1hZGUgc2F1c2FnZSwgR2FybGljLCBCYXNpbFwiO1xuICBnYW1iZXJpSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBTaHJpbXBzLCBGZXRhIGNoZWVzZSwgT2xpdmVzLCBCYXNpbFwiO1xuICBwZXBlSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBDaGlsbGkgZmxha2VzLCBPbGl2ZXMsIEJhc2lsXCI7XG4gIGRpc2d1c3Rvc29JbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IFwiVG9tYXRvIHNhdWNlLCBCYWNvbiwgUGluZWFwcGxlLCBPbGl2ZXMsIEJhc2lsXCI7XG4gIGNvbG9yYXRvSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBPbmlvbiwgUGVwcGVyLCBDaGFtcGlnbm9ucywgQmFzaWxcIjtcbiAgcG9tb2Rvcm9JbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgT25pb24sIEZldGEgY2hlZXNlLCBDaGlsbGlcIjtcblxuICAvLyBBZGQgcmVxdWlyZWQgY2xhc3NlcyB0byBlbGVtZW50c1xuICBtZW51TGluay5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIGluZm9NZW51LmNsYXNzTGlzdC5hZGQoXCJpbmZvLW1lbnVcIik7XG4gIHNhbHNpY2NpYS5jbGFzc0xpc3QuYWRkKFwicGl6emFcIik7XG4gIGdhbWJlcmkuY2xhc3NMaXN0LmFkZChcInBpenphXCIpO1xuICBwZXBlLmNsYXNzTGlzdC5hZGQoXCJwaXp6YVwiKTtcbiAgZGlzZ3VzdG9zby5jbGFzc0xpc3QuYWRkKFwicGl6emFcIik7XG4gIGNvbG9yYXRvLmNsYXNzTGlzdC5hZGQoXCJwaXp6YVwiKTtcbiAgcG9tb2Rvcm8uY2xhc3NMaXN0LmFkZChcInBpenphXCIpO1xuICBzYWxzaWNjaWFUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGl6emEtdGl0bGVcIik7XG4gIGdhbWJlcmlUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGl6emEtdGl0bGVcIik7XG4gIHBlcGVUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGl6emEtdGl0bGVcIik7XG4gIGRpc2d1c3Rvc29UaXRsZS5jbGFzc0xpc3QuYWRkKFwicGl6emEtdGl0bGVcIik7XG4gIGNvbG9yYXRvVGl0bGUuY2xhc3NMaXN0LmFkZChcInBpenphLXRpdGxlXCIpO1xuICBwb21vZG9yb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS10aXRsZVwiKTtcbiAgc2Fsc2ljY2lhSW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcInBpenphLWluZ3JlZGllbnRzXCIpO1xuICBnYW1iZXJpSW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcInBpenphLWluZ3JlZGllbnRzXCIpO1xuICBwZXBlSW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcInBpenphLWluZ3JlZGllbnRzXCIpO1xuICBkaXNndXN0b3NvSW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcInBpenphLWluZ3JlZGllbnRzXCIpO1xuICBjb2xvcmF0b0luZ3JlZGllbnRzLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1pbmdyZWRpZW50c1wiKTtcbiAgcG9tb2Rvcm9JbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKFwicGl6emEtaW5ncmVkaWVudHNcIik7XG5cbiAgLy8gQXBwZW5kIGVsZW1lbnRzIGFjY29yZGluZ2x5XG4gIHNhbHNpY2NpYS5hcHBlbmQoc2Fsc2ljY2lhSW1nLCBzYWxzaWNjaWFUaXRsZSwgc2Fsc2ljY2lhSW5ncmVkaWVudHMpO1xuICBnYW1iZXJpLmFwcGVuZChnYW1iZXJpSW1nLCBnYW1iZXJpVGl0bGUsIGdhbWJlcmlJbmdyZWRpZW50cyk7XG4gIHBlcGUuYXBwZW5kKHBlcGVJbWcsIHBlcGVUaXRsZSwgcGVwZUluZ3JlZGllbnRzKTtcbiAgZGlzZ3VzdG9zby5hcHBlbmQoZGlzZ3VzdG9zb0ltZywgZGlzZ3VzdG9zb1RpdGxlLCBkaXNndXN0b3NvSW5ncmVkaWVudHMpO1xuICBjb2xvcmF0by5hcHBlbmQoY29sb3JhdG9JbWcsIGNvbG9yYXRvVGl0bGUsIGNvbG9yYXRvSW5ncmVkaWVudHMpO1xuICBwb21vZG9yby5hcHBlbmQocG9tb2Rvcm9JbWcsIHBvbW9kb3JvVGl0bGUsIHBvbW9kb3JvSW5ncmVkaWVudHMpO1xuICBpbmZvTWVudS5hcHBlbmQoc2Fsc2ljY2lhLCBnYW1iZXJpLCBwZXBlLCBkaXNndXN0b3NvLCBjb2xvcmF0bywgcG9tb2Rvcm8pO1xuICBtYWluLmFwcGVuZChpbmZvTWVudSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51UGFnZTsiLCJpbXBvcnQgQ2hlZiBmcm9tIFwiLi9pbWFnZXMvY2hlZi5wbmdcIjtcblxuZnVuY3Rpb24gbG9hZFdlYnNpdGUoKSB7XG4gIC8vIENyZWF0ZSBFbGVtZW50c1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29weXJpZ2h0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29weXJpZ2h0VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG5hdmJhckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgY29uc3QgaW5mb0hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mb1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoZWZJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY2hlZkltZy5zcmMgPSBDaGVmO1xuICBjaGVmSW1nLmFsdCA9IFwiU21pbGluZyBjaGVmIGltYWdlXCI7XG4gIGNvbnN0IGluZm9UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gU2V0IGVsZW1lbnQncyB0ZXh0IGNvbnRlbnRcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIlJveWFsJ3MgUGl6emFcIjtcbiAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbWVudUxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICBpbmZvT25lLnRleHRDb250ZW50ID0gXCJCZXN0IHBpenphIGluIHlvdXIgY291bnRyeVwiO1xuICBpbmZvVHdvLnRleHRDb250ZW50ID0gXCJNYWRlIHdpdGggbG92ZSBzaW5jZSAyMDAyXCI7XG4gIGluZm9UaHJlZS50ZXh0Q29udGVudCA9IFwiT3JkZXIgb25saW5lIG9yIHZpc2l0IHVzIVwiO1xuXG4gIGNvcHlyaWdodE9uZS5pbm5lckhUTUwgPSBcIkNoZWYgaW1hZ2UgYnk8YSBocmVmPSdodHRwczovL3dlcXVhc3NldHQuY29tL2V4cGVyaWVuY2Uvc3VwcGVyLWNsdWItd2VxdWFzc2V0dC8nPldFUVVBU1NFVFQ8L2E+XCI7XG4gIGNvcHlyaWdodFR3by5pbm5lckhUTUwgPSBcIkJhY2tncm91bmQgaW1hZ2UgYnk8YSBocmVmPSdodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL2Jha2luZy1kZWxpY2lvdXMtcGl6emEtd2l0aC13b29kLWZpcmVkLW92ZW5fMzc1MTYyMzcuaHRtI3F1ZXJ5PXBpenphJTIwaW4lMjBvdmVuJnBvc2l0aW9uPTAmZnJvbV92aWV3PXNlYXJjaCZ0cmFjaz1haXMmdXVpZD03ZjBmYjhjMy1hYzBjLTRhYjMtYTM5NS0wM2VmOTI1ZWUzNTQnPkZyZWVwaWs8L2E+XCI7XG5cbiAgLy8gQWRkIHJlcXVpcmVkIGNsYXNzZXMgdG8gZWxlbWVudHNcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBob21lTGluay5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBtZW51TGluay5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgaW5mb0hvbWUuY2xhc3NMaXN0LmFkZChcImluZm8taG9tZVwiKTtcbiAgY2hlZkltZy5jbGFzc0xpc3QuYWRkKFwiY2hlZi1pbWdcIik7XG5cbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGNvcHlyaWdodE9uZS5jbGFzc0xpc3QuYWRkKFwiY29weXJpZ2h0XCIpO1xuICBjb3B5cmlnaHRUd28uY2xhc3NMaXN0LmFkZChcImNvcHlyaWdodFwiKTtcblxuICAvLyBBcHBlbmQgZWxlbWVudHMgYWNjb3JkaW5nbHlcbiAgbmF2YmFyTGlzdC5hcHBlbmQoaG9tZUxpbmssIG1lbnVMaW5rLCBjb250YWN0TGluayk7XG4gIG5hdmJhci5hcHBlbmQobmF2YmFyTGlzdCk7XG4gIGhlYWRlci5hcHBlbmQocmVzdGF1cmFudE5hbWUsIG5hdmJhcik7XG5cbiAgaW5mb0hvbWUuYXBwZW5kKGluZm9PbmUsIGluZm9Ud28sIGNoZWZJbWcsIGluZm9UaHJlZSk7XG4gIG1haW4uYXBwZW5kKGluZm9Ib21lKTtcblxuICBmb290ZXIuYXBwZW5kKGNvcHlyaWdodE9uZSwgY29weXJpZ2h0VHdvKTtcblxuICBjb250ZW50LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRXZWJzaXRlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2ZhbmN5LWZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3JvYm90by53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvcm9ib3RvLWJvbGQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9vdmVuLXBpenphLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZhbmN5Rm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmhlYWRlciwgLmluZm8taG9tZSwgLmluZm8tbWVudSwgLmluZm8tY29udGFjdCwgLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMwcHg7XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnJlc3RhdXJhbnQtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZhbmN5Rm9udFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLm5hdmJhciA+IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmxpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG4uc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4uaW5mby1ob21lLCAuaW5mby1tZW51LCAuaW5mby1jb250YWN0IHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHdpZHRoOiA2NTBweDtcbn1cblxuLmluZm8taG9tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbiAgcGFkZGluZzogNTBweCAxMDBweDtcbn1cblxuLmNoZWYtaW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBjbGlwLXBhdGg6IGNpcmNsZSgpO1xufVxuXG4uaW5mby1tZW51IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5waXp6YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4ucGl6emEtdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGl6emEtaW5ncmVkaWVudHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uaW5mby1tZW51IGltZyB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaW5mby1jb250YWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uaW5mby1jb250YWN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbn1cblxuYSwgYTp2aXNpdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckI7OzJDQUVnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YseURBQThDO0VBQzlDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZhbmN5Rm9udFxcXCI7XFxuICBzcmM6IHVybCguL2ZvbnRzL2ZhbmN5LWZvbnQud29mZjIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogXFxuICAgIHVybCguL2ZvbnRzL3JvYm90by53b2ZmMiksXFxuICAgIHVybCguL2ZvbnRzL3JvYm90by1ib2xkLndvZmYyKTtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvb3Zlbi1waXp6YS5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmhlYWRlciwgLmluZm8taG9tZSwgLmluZm8tbWVudSwgLmluZm8tY29udGFjdCwgLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nOiAyNXB4IDA7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmFuY3lGb250XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbn1cXG5cXG4ubmF2YmFyID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLmluZm8taG9tZSwgLmluZm8tbWVudSwgLmluZm8tY29udGFjdCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHdpZHRoOiA2NTBweDtcXG59XFxuXFxuLmluZm8taG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xcbn1cXG5cXG4uY2hlZi1pbWcge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGNsaXAtcGF0aDogY2lyY2xlKCk7XFxufVxcblxcbi5pbmZvLW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5waXp6YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4ucGl6emEtdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5waXp6YS1pbmdyZWRpZW50cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmluZm8tbWVudSBpbWcge1xcbiAgd2lkdGg6IDEzMHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4uaW5mby1jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuLmluZm8tY29udGFjdCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5jb3B5cmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5hLCBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vbG9hZC1wYWdlXCI7XG5pbXBvcnQgbG9hZFdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiO1xuXG4oKCkgPT4ge1xuICBsb2FkV2Vic2l0ZSgpO1xuXG4gIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZiYXIgbGlcIik7XG4gIG5hdkxpbmtzLmZvckVhY2gobGluayA9PiBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkUGFnZSkpO1xufSkoKTsiXSwibmFtZXMiOlsiTWFwIiwibG9hZENvbnRhY3RQYWdlIiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhY3RMaW5rIiwiaW5mb0NvbnRhY3QiLCJjcmVhdGVFbGVtZW50IiwicGhvbmVOdW1iZXIiLCJsb2NhdGlvbiIsIm1hcCIsIkltYWdlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJDaGVmIiwibG9hZEhvbWVQYWdlIiwiaG9tZUxpbmsiLCJpbmZvSG9tZSIsImluZm9PbmUiLCJpbmZvVHdvIiwiY2hlZkltZyIsImluZm9UaHJlZSIsImxvYWRNZW51UGFnZSIsImFkZEV2ZW50TGlzdGVuZXJzIiwibmF2TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZFBhZ2UiLCJlIiwibWVudUxpbmsiLCJ0YXJnZXQiLCJyZW1vdmUiLCJTYWxzaWNjaWEiLCJHYW1iZXJpIiwiUGVwZSIsIkRpc2d1c3Rvc28iLCJDb2xvcmF0byIsIlBvbW9kb3JvIiwiaW5mb01lbnUiLCJzYWxzaWNjaWEiLCJnYW1iZXJpIiwicGVwZSIsImRpc2d1c3Rvc28iLCJjb2xvcmF0byIsInBvbW9kb3JvIiwic2Fsc2ljY2lhSW1nIiwiZ2FtYmVyaUltZyIsInBlcGVJbWciLCJkaXNndXN0b3NvSW1nIiwiY29sb3JhdG9JbWciLCJwb21vZG9yb0ltZyIsInNhbHNpY2NpYVRpdGxlIiwiZ2FtYmVyaVRpdGxlIiwicGVwZVRpdGxlIiwiZGlzZ3VzdG9zb1RpdGxlIiwiY29sb3JhdG9UaXRsZSIsInBvbW9kb3JvVGl0bGUiLCJzYWxzaWNjaWFJbmdyZWRpZW50cyIsImdhbWJlcmlJbmdyZWRpZW50cyIsInBlcGVJbmdyZWRpZW50cyIsImRpc2d1c3Rvc29JbmdyZWRpZW50cyIsImNvbG9yYXRvSW5ncmVkaWVudHMiLCJwb21vZG9yb0luZ3JlZGllbnRzIiwibG9hZFdlYnNpdGUiLCJjb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkZXIiLCJmb290ZXIiLCJjb3B5cmlnaHRPbmUiLCJjb3B5cmlnaHRUd28iLCJyZXN0YXVyYW50TmFtZSIsIm5hdmJhciIsIm5hdmJhckxpc3QiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9