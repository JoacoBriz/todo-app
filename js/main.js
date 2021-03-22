document.addEventListener("DOMContentLoaded", function() {
  //Button Enter On
  document.querySelectorAll('input').forEach( node => node.addEventListener('keypress', e => {
    if(e.keyCode == 13) {
      takeData();
      e.preventDefault();
    };
  }))

  const buttonAddTask = document.querySelector("#buttonTask");
  buttonAddTask.addEventListener("click", takeData);
  let taskListPending = [];
  let id = 0;

  function takeData () {
    let titleTask = document.querySelector("#titleTask").value;
    let templateTask = `
    <li id="tasks" class="task">
      <p class="title">${titleTask}</p>
    </li>
    `;

    if (titleTask == "") {
      alert("Complete field");

    } else {
      //Pending Task List 
      let tasksPending = document.querySelector("#tasksPending");
      tasksPending.insertAdjacentHTML("beforeend", templateTask);

      //Task item List
      var newTask = document.querySelector("#tasks");
      newTask.setAttribute("id", id++);

      //Button Done
      const buttonTaskDone = document.createElement("button");
      buttonTaskDone.classList.add('removeButton');
      buttonTaskDone.innerHTML = '<i class="fas fa-check-circle"></i>';
      buttonTaskDone.addEventListener("click", taskDone);

      //Add button in task item
      newTask.appendChild(buttonTaskDone);

      //Pending Task amount
      let pendingAmount = document.querySelector("#amountPending");
      taskListPending.push(newTask);
      pendingAmount.textContent = taskListPending.length;

      //Remove Task
      function taskDone() {
        tasksPending.removeChild(newTask);
        if (taskDone){
          taskListPending = taskListPending.filter((i) => i !== newTask);
          pendingAmount.textContent = taskListPending.length;
          showTaskDone();
        };

        //Move Task to Done Section
        function showTaskDone() {
          // let id = 0;
          let templateTaskDone = `
          <li id="taskDone" class="task">
            <p class="title">${titleTask}</p>
          </li>
          `

          //Task Done List
          let tasksDone = document.querySelector("#doneTasks");
          tasksDone.insertAdjacentHTML("beforeend", templateTaskDone);

          // Task Done Item
          let newTaskDone = document.querySelector("#taskDone");
          // taskDone.setAttribute("id", id++);

          //Button Delete
          const buttonTaskDelete = document.createElement("button");
          buttonTaskDelete.classList.add('removeButton');
          buttonTaskDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
          buttonTaskDelete.addEventListener("click", deleteTask);

          //Add button Delete
          newTaskDone.appendChild(buttonTaskDelete);

          //Delete Task
          function deleteTask() {
            tasksDone.removeChild(newTaskDone);
          };
          
          //Button Return
          const buttonTaskReturn = document.createElement("button");
          buttonTaskReturn.classList.add('removeButton');
          buttonTaskReturn.innerHTML = '<i class="fas fa-undo-alt"></i>';
          buttonTaskReturn.addEventListener("click", returnTask);

          //Add button Return
          newTaskDone.appendChild(buttonTaskReturn);

          //Return Task
          function returnTask() {
            tasksDone.removeChild(newTaskDone);
            takeData();
          };
        };
      };


    };
  };
});

