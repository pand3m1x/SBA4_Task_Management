// script

let taskList = document.getElementById("task-list");

//general task function

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

      // <select id="category">
      //       <option value="work">Work</option>
      //       <option value="Personal">Personal</option>
      //       <option value="Urgent">Urgent</option>
      //   </select>
      //do I need this to make the edit button work for categorys? 

  if (taskInput && dueDate) {
    let li = document.createElement("li");
    li.innerHTML = (`${taskInput} - ${category} <span>${new Date(dueDate).toLocaleDateString()}</span>`); // (if I want back in task bar) - ${status}
    li.appendChild(dropdown);

    let editbtn = document.createElement("editbtn");
    editbtn.id = "editbtn"
    editbtn.innerText = "✏️";
    editbtn.onclick = function(){
      // let span = prompt("Edit your task:", `${taskInput} - ${category}`); //Is this where I try to splice? How do I edit directly in the element/line/field?
    }
    li.appendChild(editbtn);
   
    let trashbtn = document.createElement("deletebtn");
    trashbtn.id = "trashbtn"; //this should let me edit in css?
    trashbtn.innerText = "🗑️";
    trashbtn.onclick = function(event){
      event.target.parentElement.remove();
    }
    li.appendChild(trashbtn);

    taskList.appendChild(li);
    console.log(li);

    let timeDiff= new Date(dueDate) - new Date();
    if (timeDiff > 0) {
      setTimeout(() => alert(`Master Wayne, your task "${taskInput}" is due today!`), timeDiff); //how do I get this to trigger?
      console.log(timeDiff);
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

//add button for tasks
let button1 = document.getElementById("addbtn");

button1.addEventListener("click",addTask);

function clearTasks(){
  let taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
}

let button2 = document.getElementById("clearbtn");  
button2.addEventListener("click", clearTasks);


//              --trash pile for later--

// Move below into function add task and stop fighting the function for use of its variables?
// // tricky edit button
// let editbtn = document.createElement("editbutton"); // do I need to add a span element? Do I need to replicate what exists in the function?
//   editbtn.value = "edit";
//   editbtn.innerText = "✏️";
//   editbtn.onclick = function(event){
//     console.log(event.target)
//     event.target.parentElement.append(li)
//   }

// // delete button (And it works!)
// let trashbtn = document.createElement("deletebutton");
//   trashbtn.value = "delete";
//   trashbtn.innerText = "🗑️";
//   trashbtn.onclick = function(event){
//     console.log(event.target)
//     event.target.parentElement.remove()
//   }


// li.appendChild(editbtn);

//taskList.appendChild(li);

// function editTask(){
// }

// let editbtn = document.getElementById("editbtn");
// editbtn.addEventListener("click", editTask);

// Clear all tasks button (and this works too!)