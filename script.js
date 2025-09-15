let list = []

const titleEL = document.getElementById("title");
const addEL = document.getElementById("add");
const clearEL = document.getElementById("clear");
const ulEL = document.getElementById("ul");
const liEL = document.querySelectorAll("li");
loadList();

function add() {
  if (!titleEL.value.trim()) return;
  list.push({ str: titleEL.value, value: true });
  rendorList();
  titleEL.value = "";
  saveList()
}

function rendorList() {
  let string = "";
  for (let i = 0; i < list.length; i++) {
    string += `
        <li class="${list[i].value ? "" : "checked"}">
            <span onclick="checking(${i})">
            ${list[i].str}
            </span>
            <button class="delButton" onclick="delItem(${i})">
            ❌
            </button>
        </li>
        `;
  }

  ulEL.innerHTML = string;
}

function clearList() {
  ulEL.innerHTML = "";
  list = [];
  saveList()
}

function checking(index) {
  list[index].value = !list[index].value;
  rendorList();
  saveList()
}

function delItem(index) {
  list.splice(index, 1);
  rendorList();
  saveList()
}

function saveList(){
  localStorage.setItem("tasks",JSON.stringify(list))
}

function loadList() {
  const saved = localStorage.getItem("tasks")
  if (saved) list = JSON.parse(saved)
    rendorList()
}
