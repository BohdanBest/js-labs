function changeCSS() {
  const textElement = document.getElementById("text");

  textElement.style.color = "orange";
  textElement.style.fontSize = "20px";
  textElement.style.fontFamily = "Comic Sans MS, cursive";
}

function resetCSS() {
  const textElement = document.getElementById("text");

  textElement.style.color = "";
  textElement.style.fontSize = "";
  textElement.style.fontFamily = "";
}
