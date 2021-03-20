document.addEventListener("DOMContentLoaded", function() {
  const buttonAddTask = document.querySelector("#buttonTask");
  buttonAddTask.addEventListener("click", takeData);
  let taskListPending = [];
  let id = 0;

  function takeData () {
    let titleTask = document.querySelector("#titleTask").value;

    let templateTask = `
    <li id="taskLi" class="task">
      <p class="title">${titleTask}</p>
    </li>
    `;

    if (titleTask == "") {
      alert("Complete field");
    } else {
      //New Task
      let newTask = document.querySelector("#tasks");
      newTask.innerHTML += templateTask;

      //Task item List
      var taskLi = document.querySelector("#taskLi");
      taskLi.setAttribute("id", id++);

      //Button Done
      const buttonTaskDone = document.createElement("button");
      buttonTaskDone.classList.add('removeButton');
      buttonTaskDone.innerHTML = '<i class="fas fa-check-circle"></i>';

      //Add button in task item
      taskLi.appendChild(buttonTaskDone);

      //Pending Task amount
      let pendingAmount = document.querySelector("#amountPending");
      taskListPending.push(titleTask);
      pendingAmount.innerHTML = taskListPending.length;
    }
  };
})

