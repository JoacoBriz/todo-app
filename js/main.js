let buttonAddTask = document.getElementById("buttonTask");
buttonAddTask.addEventListener("click", takeData);

var taskList = [];
console.log(taskList);

function takeData () {
  let titleTask = document.getElementById("titleTask").value;

  let templateTask = `
  <li>
  <h3>${titleTask}</h3>
  </li>
  `;

  if (titleTask == "") {
    alert("Complete field");
  } else {
    let newTask = document.getElementById("tasks");
    newTask.innerHTML += templateTask;
    taskList.push(titleTask);
  }
};