document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('input').forEach( node => node.addEventListener('keypress', e => {
    if(e.keyCode == 13) {
      takeData();
      e.preventDefault();
    };
  }))
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
        console.log(id);
        taskLi.removeChild(newTask);
        if (taskDone){
          taskListPending = taskListPending.filter((i) => i !== newTask);
          pendingAmount.textContent = taskListPending.length;
        };
      };

    };
  };
});

