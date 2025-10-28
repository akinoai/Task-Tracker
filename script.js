const container = document.getElementById("tasks-container");
const enterButton = document.getElementById("enterButton");
const inputStroke = document.getElementById("inputStroke");

enterButton.addEventListener("click", addNewTask);
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addNewTask();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches('.task input[type="checkbox"]')) {
    const task = event.target.closest(".task");
    task.classList.toggle("completed", event.target.checked);
  }
});

document.addEventListener("click", (event) => {
  // перевіряємо, чи клік був саме по кнопці видалення
  if (event.target.closest(".binButton")) {
    const task = event.target.closest(".task");
    if (task) {
      task.remove(); // видаляємо елемент із DOM
    }
  }
});

function addNewTask() {
  const text = inputStroke.value.trim();
  if (text === "") return;

  const el = document.createElement("div");
  el.className = "task";
  el.innerHTML = `
    <label class="checkbox">
      <input type="checkbox" />
      <span class="checkmark"></span>
      ${text}
    </label>
    <button class="binButton">
      <img class="bin" src="/icons/delete_black.svg" />
    </button>
  `;

  container.prepend(el);
  inputStroke.value = "";
}
