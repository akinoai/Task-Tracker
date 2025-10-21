const container = document.getElementById("tasks-container");
const enterButton = document.getElementById("enterButton");
const inputStroke = document.getElementById("inputStroke");

enterButton.addEventListener("click", addNewTask);

function addNewTask() {
  const text = inputStroke.value.trim(); // отримуємо текст без пробілів
  if (text === "") return;

  const newTask = `<div class="task">
          <label class="checkbox">
            <input type="checkbox" />
            <span class="checkmark"></span>
            ${text}
          </label>

          <button class="binButton">
            <img class="bin" src="/icons/delete_black.svg" />
          </button>
        </div>`;

  container.innerHTML += newTask;
  inputStroke.value = "";
}
