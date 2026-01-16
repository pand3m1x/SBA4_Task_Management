// script

let taskList = document.getElementById("task-list");

function addTask(){
  let taskInput = document.getElementById("task").value;
  let dueDate = document.getElementById("due-date").value;
  let category = document.getElementById("category").value;
  let status = document.getElementById("status").value;

        // <select id="status">
        //     <option value="not-started">🌑</option>
        //     <option value="in-progress">🚧</option>
        //     <option value="completed">✔️</option>
        //     <option value="paused">💤</option>
        // </select>
  let dropdown = document.createElement("select");
  let not_started = document.createElement("option") //because of function use parenthys (method(function))
  not_started.value = "not-started" //object doesn't need parenthysys (property(variable))
  not_started.innerText = "🌑"
  dropdown.appendChild(not_started) //append is method
  
  let in_progress = document.createElement("option") //because of function use parenthys (method(function))
  in_progress.value = "in-progress" //object doesn't need parenthysys (property(variable))
  in_progress.innerText = "🚧"
  dropdown.appendChild(in_progress) //append is method

  let completed = document.createElement("option")
  completed.value = "completed"
  completed.innerText = "✔️"
  dropdown.appendChild(completed)

  let paused = document.createElement("option")
  paused.value = "paused"
  paused.innerText = "💤"
  dropdown.appendChild(paused)

  dropdown.value = status


  if (taskInput && dueDate) {
    let li = document.createElement("li");
    li.innerHTML = (`${taskInput} - ${category} <span>${new Date(dueDate).toLocaleDateString()}</span>`); //if I want back in task bar - ${status}
    li.appendChild(dropdown)
    taskList.appendChild(li);
    li.appendChild(editbtn);
    li.appendChild(trashbtn);
    console.log(li);

    let timeDiff= new Date(dueDate) - new Date();
    if (timeDiff > 0) {
      setTimeout(() => alert(`Master Wayne, your task "${taskInput}" is due today!`), timeDiff);
    }
    
    // let editbtn = document.createElement("editbutton");
    //   editbtn.value = "edit";
    //   editbtn.innerText = "✏️";
    //   editbtn.onclick = function(event){
    //     console.log(event.target)
    //     event.target.parentElement.append(li);
    //   }

    // let trashbtn = document.createElement("deletebutton");
    //   trashbtn.value = "delete";
    //   trashbtn.innerText = "🗑️";
    //   trashbtn.onclick = function(event){
    //     console.log(event.target)
    //     event.target.parentElement.remove()
    //   }

  }
}

let button1 = document.getElementById("addbtn");

button1.addEventListener("click",addTask);


let editbtn = document.createElement("editbutton");
  editbtn.value = "edit";
  editbtn.innerText = "✏️";
  editbtn.onclick = function(event){
    console.log(event.target)
    event.target.parentElement.append(li)
  }


let trashbtn = document.createElement("deletebutton");
  trashbtn.value = "delete";
  trashbtn.innerText = "🗑️";
  trashbtn.onclick = function(event){
    console.log(event.target)
    event.target.parentElement.remove()
  }


// li.appendChild(editbtn);

//taskList.appendChild(li);

// function editTask(){
// }

// let editbtn = document.getElementById("editbtn");
// editbtn.addEventListener("click", editTask);

function clearTasks(){
  let taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
}

let button2 = document.getElementById("clearbtn");  
button2.addEventListener("click", clearTasks);
