const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("tasks");


// Event Listeners
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      addTask();
  }
});


// Functions

// Add new task
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.innerHTML = `
          ${taskText} <button class="delete">Delete</button>
      `;
      taskList.appendChild(newTask);
      taskInput.value = "";
  }
}

// Delete existing task
taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
  }
});