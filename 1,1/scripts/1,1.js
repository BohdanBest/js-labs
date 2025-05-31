function changeFirstThird(id) {
  var element = document.getElementById(id);
  if (element.style.color === "black" || element.style.color === "") {
    element.style.color = "white";
    element.style.backgroundColor = "blue";
  } else {
    element.style.color = "black";
    element.style.backgroundColor = "yellow";
  }
}

function changeSecond() {
  var element = document.all[1];
  if (element.style.color === "red" || element.style.color === "") {
    element.style.color = "white";
    element.style.backgroundColor = "green";
  } else {
    element.style.color = "red";
    element.style.backgroundColor = "white";
  }
}
