function updateColorStatus(color) {
  document.getElementById("colorStatus").textContent = color;
}

document.getElementById("btn1").addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
  updateColorStatus("синій");
});

document.getElementById("btn2").addEventListener("dblclick", function () {
  document.body.style.backgroundColor = "pink";
  updateColorStatus("рожевий");
});

document.getElementById("btn3").addEventListener("mousedown", function () {
  document.body.style.backgroundColor = "brown";
  updateColorStatus("коричневий");
});

document.getElementById("btn3").addEventListener("mouseup", function () {
  document.body.style.backgroundColor = "white";
  updateColorStatus("білий");
});

document.getElementById("btn3").addEventListener("mouseleave", function () {
  document.body.style.backgroundColor = "white";
  updateColorStatus("білий");
});

document.getElementById("testLink").addEventListener("mouseover", function () {
  document.body.style.backgroundColor = "yellow";
  updateColorStatus("жовтий");
});

document.getElementById("testLink").addEventListener("mouseout", function () {
  document.body.style.backgroundColor = "white";
  updateColorStatus("білий");
});

document.getElementById("testLink").addEventListener("click", function (e) {
  e.preventDefault();
});
