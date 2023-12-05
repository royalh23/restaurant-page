import Map from "./images/restaurant-location.png";

function loadContactPage() {
  const main = document.querySelector(".main");
  const contactLink = document.querySelector(".contact");

  // Create Elements
  const infoContact = document.createElement("div");
  const phoneNumber = document.createElement("div");
  const location = document.createElement("div");
  const map = new Image();
  map.src = Map;
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

export default loadContactPage;