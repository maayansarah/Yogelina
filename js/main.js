// toggla meny
const menuButtonEl = document.querySelector("#menu-button");
const menuEl = document.querySelector("#menu");

menuButtonEl.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  if (menuEl.classList.contains("open")) {
    menuEl.classList.remove("open");
  } else {
    menuEl.classList.add("open");
  }
}

// validera formulär
