document.addEventListener("DOMContentLoaded", function() {
  const buttonAddTask = document.querySelector("#buttonTask");
  buttonAddTask.addEventListener("click", takeData);
  let taskListPending = [];
  let id = 1;

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
      taskLi.innerHTML += templateTask;

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

      //Delete Task
      function taskDone() {
        console.log(id);
        taskLi.removeChild(newTask);
      }

      //Pending Task amount
      let pendingAmount = document.querySelector("#amountPending");
      taskListPending.push(titleTask);
      pendingAmount.innerHTML = taskListPending.length;
    }
  };
});

