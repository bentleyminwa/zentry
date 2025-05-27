const app = document.querySelector("#app");
const headerContent = document.querySelector(".header-content");

const switchBtn = document.createElement("img");
switchBtn.src = "images/sun.png";
switchBtn.classList.add("switchBtn");
headerContent.appendChild(switchBtn);

function toggleTheme() {
  const currentTheme = app.getAttribute("data-theme");

  let newTheme;
  if (currentTheme === "dark") {
    newTheme = "light";
    switchBtn.src = "images/moon.png";
  } else {
    newTheme = "dark";
    switchBtn.src = "images/sun.png";
  }

  app.setAttribute("data-theme", newTheme);
}

function saveThemePreference(theme) {
  localStorage.setItem("theme", theme);
}

switchBtn.addEventListener("click", toggleTheme);
