const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");

  } else {

    let li = document.createElement("li");

    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

  }
  inputBox.value = "";
}