const inputDo = document.getElementById("inputDo")
const listDo = document.getElementById("listDo")
const button = document.getElementById("button")
const countDo = document.getElementById("countDo")
const idCheck = document.getElementById("cbox1")
const done = document.getElementById("done")
let statusCheck = "";

const tasks = [
  { id: 1, tarea: "Comida Perros", state: false },
  { id: 2, tarea: "Meditar", state: false },
  { id: 3, tarea: "Repasar estudio", state: false },
  { id: 4, tarea: "Estudiar", state: false },
  { id: 5, tarea: "Trabajar", state: false },
];
let add = function () {
  let html = "";
  for (chore of tasks) {
    if (chore.state == true) {
      statusCheck = "checked";
    } else {
      statusCheck = "";
    }

    html += `<li>${chore.tarea} <input onclick="checked1(${chore.id})" type="checkbox" id="c${chore.id}" value="first_checkbox" ${statusCheck}> <button onclick="deleteTask(${chore.id})"> Eliminar </button></li>`;
  }

  listDo.innerHTML = html;
  countDo.innerHTML = "Tareas: " + tasks.length;
  done.innerHTML =
    "Realizadas: " + tasks.filter(({ state }) => state === true).length;
  console.log(tasks);
};
let checked1 = (id) => {
  const index = tasks.findIndex((ele) => ele.id == id);
  if (document.querySelector("#c" + id).checked == true) {
    tasks[index].state = true;
  } else {
    tasks[index].state = false;
  }
  add();
};

button.addEventListener("click", () => {
  const newTask = inputDo.value;
  if (newTask == "") {
    alert("No ingresaste tareas");
  } else {
    tasks.push({ id: Date.now(), tarea: newTask, state: false });
    inputDo.value = "";

    add();
  }
});

let deleteTask = (id) => {
  const index = tasks.findIndex((ele) => ele.id == id);
  tasks.splice(index, 1);
  let html = "";
  for (chore of tasks) {
    html += `<li>${chore.tarea} <input onclick="checked1(${chore.id})" type="checkbox" id="opt1" value="first_checkbox"> <button onclick="deleteTask(${chore.id})"> Eliminar </button></li>`;
  }
  add();
  listDo.innerHTML = html;
  countDo.innerHTML = "Tareas: " + tasks.length;
};
add();
