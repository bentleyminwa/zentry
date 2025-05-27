const taskInput = document.getElementById("taskInput");
const form = document.querySelector("form");
const taskList = document.getElementById("taskList");

function addTask(e) {
  e.preventDefault();

  const task = taskInput.value.trim();

  const li = document.createElement("li");
  li.innerHTML = task;
  taskList.appendChild(li);
  taskInput.value = "";

  // const deleteIcon = document.createElement("img");
  // deleteIcon.classList.add("delete-icon");
  // deleteIcon.src = "images/trash.png";

  // trash icon
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");

  svg.innerHTML = `
    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
  `;

  svg.classList.add("delete-icon");

  li.appendChild(svg);
  saveTask();
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
      saveTask();
    } else if (e.target.tagName === "svg") {
      e.target.parentElement.remove();
      saveTask();
    }
  },
  false
);

form.addEventListener("submit", addTask);

function saveTask() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks");
}
loadTasks();
