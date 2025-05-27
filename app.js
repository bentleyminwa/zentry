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

  const deleteIcon = document.createElement("img");
  deleteIcon.classList.add("delete-icon");
  deleteIcon.src = "images/trash.png";

  li.appendChild(deleteIcon);
  saveTask();
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
      saveTask();
    } else if (e.target.tagName === "IMG") {
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
