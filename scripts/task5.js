const messageBox = document.getElementById("messageBox");
const button = document.getElementById("interactiveButton");

function showMessage(text, className) {
  messageBox.textContent = text;
  messageBox.className = className;
}

button.addEventListener("click", function () {
  showMessage("I was pressed!", "message-pressed");
});

button.addEventListener("mouseenter", function () {
  showMessage("Mouse on me!", "message-hover");
});

button.addEventListener("mouseleave", function () {
  showMessage("Mouse is not on me!", "message-out");
});

showMessage("Наведіть курсор на кнопку або натисніть її", "");
