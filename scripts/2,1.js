let isClicked = false;

function toggleClickStyle() {
  const element = document.getElementById("clickText");
  if (!isClicked) {
    element.style.fontSize = "48pt";
    element.style.color = "white";
    element.style.backgroundColor = "lightblue";
  } else {
    element.style.fontSize = "";
    element.style.color = "";
    element.style.backgroundColor = "";
  }
  isClicked = !isClicked;
}

function setGreenBackground() {
  document.getElementById("holdText").style.backgroundColor = "green";
}

function setYellowBackground() {
  document.getElementById("holdText").style.backgroundColor = "yellow";
}

function setRedBackground() {
  document.getElementById("hoverText").style.backgroundColor = "red";
}

function setBlueBackground() {
  document.getElementById("hoverText").style.backgroundColor = "blue";
}
