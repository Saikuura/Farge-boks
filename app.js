const colorPickerSecondary = document.getElementById("color-picker-secondary");
const colorPickerPrimary = document.getElementById("color-picker-primary");
const colorPickerTertiary = document.getElementById("color-picker-tertiary");
const primaryColor = document.getElementsByClassName("primary-color")
const secondaryColor = document.getElementsByClassName("secondary-color")
const tertiaryColor = document.getElementsByClassName("tertiary-color")
const heroSection = document.getElementById("hero");
const heroImg = document.getElementById("hero-img");
window.onload = loadImage();

function changeColor(colorPicker, className) {
  document.querySelectorAll(`${className}`).forEach(function (ele) {
    ele.style.backgroundColor = colorPicker.value;
  });
}

colorPickerSecondary.addEventListener("input", function () {
  changeColor(colorPickerSecondary, ".secondary");
  changeColor(colorPickerSecondary, ".secondary-color");
});

colorPickerPrimary.addEventListener("input", function () {
  changeColor(colorPickerPrimary, ".primary");
  changeColor(colorPickerPrimary, ".primary-color");
});

colorPickerTertiary.addEventListener("input", function () {
  changeColor(colorPickerTertiary, ".tertiary");
  changeColor(colorPickerTertiary, ".tertiary-color");
});

heroSection.addEventListener("click", handleHeroClick);

function handleHeroClick() {
  heroSection.removeEventListener("click", handleHeroClick);
  console.log("hero section clicked");
  // Lager elementene som skal legges til pop-upen
  let popUp = document.createElement("div");
  let popUpUrlInput = document.createElement("input");
  let popUpButton = document.createElement("button");
  popUp.id = "pop-up";
  popUpUrlInput.id = "pop-up-url-input";
  popUpButton.id = "pop-up-button";

  // Variabel for styling av pop-up
  let popUpStyle =
    "display:flex; flex-direction:column; position: fixed; top: 50%; right: 0%; transform: translate(-50%, -50%); padding: 5rem; background-color: white; border: 1px solid black; z-index: 1000; border-radius: 10px;";
  // Setter tekst på knappen og klassene btn og tertiary, tertiary for å fungere med fargevelgeren
  popUpButton.innerText = "Set Image";
  popUpButton.className = "btn tertiary";
  // Setter styling på pop-upen fra variabelen popUpStyle
  popUp.style = popUpStyle;
  // Setter type og placeholder på inputen
  popUpUrlInput.type = "text";
  popUpUrlInput.placeholder = "Enter image url";
  popUpUrlInput.classList.add("PopUpInput")
  // Appender child til heroSection. Så legger til pop-up divven, inputen og knappen inne i heroSection
  heroSection.appendChild(popUp);
  popUp.appendChild(popUpUrlInput);
  popUp.appendChild(popUpButton);

  popUpButton.onclick = function (event) {
    // Setter src på bildet til urlen som er skrevet inn i inputen
    event.stopPropagation();
    console.log("Removing pop-up")
    heroImg.src = popUpUrlInput.value;
    popUp.remove();
    heroSection.addEventListener("click", handleHeroClick);
};
}

function loadImage() {
  heroImg.src = "https://th.bing.com/th/id/OIG2.X3bfSqbg5eNw49GBE2QG?pid=imgGn"; // Set the source of the image
  heroImg.alt = "Hero image"; // Set the alt text of the image
  var heroImgStyle = "width: min-content; height: min-content; object-fit: contain;"; // Set the style of the image
  // heroImg.style = heroImgStyle; // Apply the style to the image
}
