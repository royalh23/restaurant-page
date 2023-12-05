import Salsiccia from "./salsiccia.png";
import Gamberi from "./gamberi.png";
import Pepe from "./pepe.png";
import Disgustoso from "./disgustoso.png";
import Colorato from "./colorato.png";
import Pomodoro from "./pomodoro.png";

function loadMenuPage() {
  const main = document.querySelector(".main");

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
  salsicciaImg.src = Salsiccia;
  salsicciaImg.alt = "Salsiccia pizza";
  gamberiImg.src = Gamberi;
  gamberiImg.alt = "Gamberi pizza";
  pepeImg.src = Pepe;
  pepeImg.alt = "Pepe pizza";
  disgustosoImg.src = Disgustoso;
  disgustosoImg.alt = "Disgustoso pizza";
  coloratoImg.src = Colorato;
  coloratoImg.alt = "Colorato pizza";
  pomodoroImg.src = Pomodoro;
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

export default loadMenuPage;