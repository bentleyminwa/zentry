const switchBtn = document.querySelector(".switchBtn");
const sunIcon = document.querySelector(".sunIcon");
const moonIcon = document.querySelector(".moonIcon");
const app = document.getElementById("app");

function toggleTheme() {
  const currentTheme = app.getAttribute("data-theme");

  let newTheme;
  if (currentTheme === "dark") {
    newTheme = "light";
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
  } else {
    newTheme = "dark";
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
  }

  app.setAttribute("data-theme", newTheme);
}

switchBtn.addEventListener("click", toggleTheme);
