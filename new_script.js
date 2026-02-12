const taskList = document.getElementById('task-list');
const addBtn = document.getElementById('addbtn');
const clearBtn = document.getElementById('clearbtn');
console.log("Add button:", addBtn);
console.log("Clear button:", clearBtn);
console.log("Task list:", taskList);
// {
//   text: "Train Batman",
//   dueDate: "2026-02-01",
//   category: "Work",
//   completed: false
// }

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
  console.log("Rendering task:", task);
  const li = document.createElement('li');
  li.dataset.index = index;
    
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox";
  checkbox.className = "complete-checkbox";
  checkbox.checked = task.completed;

  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.textContent = task.text;

  const metaSpan = document.createElement("span");
  metaSpan.className = "task-meta";
  metaSpan.textContent = new Date(task.dueDate).toLocaleString();
  
  const editBtn = document.createElement("button");
  editBtn.dataset.action = "edit";
  editBtn.textContent = "✏️";

  const deleteBtn = document.createElement("button");
  deleteBtn.dataset.action = "delete";
  deleteBtn.textContent = "🗑️";

  li.append(checkbox, textSpan, metaSpan, editBtn, deleteBtn);

  if (task.completed) {
    li.classList.add("completed");
  }
  taskList.appendChild(li);
  });
}

function addTask() {
  console.log("addTask triggered");

  const text = document.getElementById("task").value;
  const dueDate = document.getElementById("due-date").value;
  const category = document.getElementById("category").value;

  console.log({ text, dueDate, category });

  if (!text || !dueDate) {
    console.warn("Missing text or due date");
    return;
  }
  
  tasks.push({
    text,
    dueDate,
    category,
    completed: false
  });

  renderTasks();
}

addBtn.addEventListener("click", addTask);

taskList.addEventListener("click", function (event) {
  const li = event.target.closest("li");
  if (!li) return;

  const index = li.dataset.index;

  if (event.target.dataset.action === "delete") {
    tasks.splice(index, 1);
  }

  if (event.target.dataset.action === "edit") {
    const span = li.querySelector(".task-text");

    const input = document.createElement("input");
    input.type = "text";
    input.value = tasks[index].text;
    input.classList.add("edit-input");

    span.replaceWith(input);
    input.focus();

    console.log("Editing task at index:",index);

    input.addEventListener("blur",() => {
      saveEdit(index, input.value);
    });

    input.addEventListener("keydown",(e) => {
      if (e.key === "Enter") {
        saveEdit(index, input.value);
      }
    })
  }

  renderTasks();
});

function saveEdit(index, newText){
  console.log("Saving edit:", newText);

  if (!newText.trim()) {
    console.warn("Empty edit prevented");
    // renderTasks();
    return;
  }
  tasks[index].text = newText.trim();
  renderTasks();
}

taskList.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    const li = event.target.closest("li");
    tasks[li.dataset.index].completed = event.target.checked;
    renderTasks();
  }
});

clearBtn.addEventListener("click", function () {
  tasks = [];
  renderTasks();
});

function scheduleReminder(task) {
  const timeDiff = new Date(task.dueDate) - new Date();

  if (timeDiff > 0) {
    setTimeout(() => {
      alert(`🦇 Master Wayne, "${task.text}" is due today.`);
    }, timeDiff);
  }
}

// 🧩 How to Resume Later

// When you come back, you can say any of these:

// “Resume Pennysworth from the checkpoint.”

// “Let’s add localStorage to Pennysworth.”

// “Help me implement inline editing next.”

// If you paste your current JS, we can pick up mid-function with no problem.


// TEXT GRAVEYARD


// taskList.innerHTML = '';
  // tasks.forEach((task, index) => {
  //   const li = document.createElement('li');
  //   li.dataset.index = index;

  //   li.innerHTML = `
  //   <input type =  "checkbox" class = "complete-checkbox" ${task.completed ? 'checked' : ''}>
  //   <span class = "task-text"> ${task.text}</span>
  //   <span class = "task-meta">
  //     ${task.dueDate} • ${new Date(task.dueDate).toLocaleDateString()}
  //   </span>
  //   <button data-action="edit">✏️</button>
  //   <button data-action="delete">🗑️</button>
  //   `;

    // const newText = prompt(
    //   "Edit task:",
    //   tasks[index].text
    // );
    // if (newText) tasks[index].text = newText;