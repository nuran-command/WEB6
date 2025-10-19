// Task 0
console.log("Name: Nurdan");
console.log("Group: Your Group");
alert("Hello, JavaScript World!");

// Task 1
let nameVar = "Nurdan";
let age = 20;
let isStudent = true;

console.log("String:", nameVar);
console.log("Number:", age);
console.log("Boolean:", isStudent);

let sum = 10 + 5;
let product = 4 * 3;
console.log("Sum:", sum, "Product:", product);

console.log("Concatenated string:", "Hello " + nameVar + "!");

// Task 2
function changeText() {
  document.getElementById("paragraph").textContent = "Paragraph text changed!";
}

// Task 3
function changeBackground() {
  document.getElementById("colorBox").style.backgroundColor = "red";
}
function changeFontSize() {
  document.getElementById("colorBox").style.fontSize = "20px";
}

// Task 4
function addItem() {
  const list = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
}
function removeItem() {
  const list = document.getElementById("itemList");
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
}

// Task 5
const box = document.getElementById("hoverBox");
box.addEventListener("mouseover", () => box.style.backgroundColor = "red");
box.addEventListener("mouseout", () => box.style.backgroundColor = "grey");

// Task 6
document.getElementById("inputField").addEventListener("keyup", function() {
  document.getElementById("outputText").textContent = this.value;
});

// Task 7
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (!name || !email || !password) {
    error.textContent = "All fields are required!";
  } else {
    error.textContent = "";
    alert("Form submitted successfully!");
  }
});

// Task 8
let tasks = [];
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  tasks.push(taskText);
  input.value = "";
  renderTasks();
}
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}