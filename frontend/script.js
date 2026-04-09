const API = "http://127.0.0.1:5000/tasks";

let allTasks = [];

async function fetchTasks() {
  const res = await fetch(API);
  allTasks = await res.json();
  displayTasks(allTasks);
}

function displayTasks(tasks) {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span>${task.title}</span>
      <div>
        <button onclick="toggleTask('${task.id}')">✔</button>
        <button onclick="deleteTask('${task.id}')">❌</button>
      </div>
    `;

    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");

  if (!input.value.trim()) {
    alert("Enter a task!");
    return;
  }

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: input.value })
  });

  input.value = "";
  fetchTasks();
}

async function toggleTask(id) {
  await fetch(`${API}/${id}`, { method: "PATCH" });
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  fetchTasks();
}

function filterTasks(type) {
  if (type === "completed") {
    displayTasks(allTasks.filter(t => t.completed));
  } else if (type === "pending") {
    displayTasks(allTasks.filter(t => !t.completed));
  } else {
    displayTasks(allTasks);
  }
}

fetchTasks();
