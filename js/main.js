// ladda dark-mode
if (localStorage.getItem("isDarkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// toggla meny
const menuButtonEl = document.querySelector("#menu-button");
const menuEl = document.querySelector("#menu");

menuButtonEl.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menuEl.classList.contains("open")) {
    menuEl.classList.remove("open");
  } else {
    menuEl.classList.add("open");
  }
}

// dark-mode funktion
const darkModeButtonEl = document.querySelector("#dark-mode-button");

darkModeButtonEl.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    localStorage.setItem("isDarkMode", "true");
  } else {
    localStorage.removeItem("isDarkMode");
  }
}
