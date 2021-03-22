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
      //New Task
      let taskLi = document.querySelector("#taskLi");
      taskLi.insertAdjacentHTML("beforeend", templateTask);

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

      //Delete Task
      function taskDone() {
        taskLi.removeChild(newTask);

        if (taskDone){
          taskListPending = taskListPending.filter((i) => i !== newTask);
          pendingAmount.textContent = taskListPending.length;
          showTaskDone();
        };

        //Move Task to Done Section
        function showTaskDone() {
          let taskLiDone = document.querySelector("#doneTasks");
          taskLiDone.insertAdjacentHTML("beforeend", templateTask);

          //Task item List
          var taskDone = document.querySelector("#tasks");
          taskDone.setAttribute("id", id++);

          //Button Remove
          const buttonTaskRemove = document.createElement("button");
          buttonTaskRemove.classList.add('removeButton');
          buttonTaskRemove.innerHTML = '<i class="far fa-trash-alt"></i>';
          buttonTaskRemove.addEventListener("click", taskRemove);

          taskDone.appendChild(buttonTaskRemove);

          function taskRemove() {
            taskLiDone.removeChild(taskDone);
          };

          //Button Return
          const buttonTaskReturn = document.createElement("button");
          buttonTaskReturn.classList.add('removeButton');
          buttonTaskReturn.innerHTML = '<i class="fas fa-undo-alt"></i>';
          buttonTaskReturn.addEventListener("click", taskReturn);

          taskDone.appendChild(buttonTaskReturn);

          //Return Task to Pending Section
          function taskReturn() {
            taskLiDone.removeChild(taskDone);
            let taskLi = document.querySelector("#taskLi");
            taskLi.insertAdjacentHTML("beforeend", templateTask);

            var taskRemove = document.querySelector("#tasks");
                      taskDone.setAttribute("id", id++);
            taskRemove.appendChild(buttonTaskRemove);

            buttonTaskRemove.onclick = function () {
              taskLi.removeChild(taskRemove);
            };
          };
        };
      };


    };
  };
});

