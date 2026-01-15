// script

function addTask(){
  let taskInput = document.getElementById("task").value;
  let dueDate = document.getElementById("due-date").value;
  let category = document.getElementById("category").value;
  let status = document.getElementById("status").value;
  let taskList = document.getElementById("task-list");



  if (taskInput && dueDate) {
    let li = document.createElement("li");
    li.innerHTML = (`${taskInput} - ${category} - ${status}<span>${new Date(dueDate).toLocaleDateString()}</span>`);
    taskList.appendChild(li);

    let timeDiff= new Date(dueDate) - new Date();
    if (timeDiff > 0) {
      setTimeout(() => alert(`Master Wayne, your task "${taskInput}" is due today!`), timeDiff);
    }
  }
}

let button1 = document.getElementById("addbtn");

button1.addEventListener("click",addTask);