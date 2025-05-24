var myTxt = document.querySelector("h1.n2");
var myFont = document.querySelectorAll(".myclass");
for (var i = 0; i < myFont.length; i++) {
  myFont[i].style.fontSize = "35px";
}
myTxt.innerHTML = "Привіт, студенте!";
var person = prompt("Як Вас звати", "Петро");
if (person != null) {
  myTxt.innerHTML = "Я вітаю Вас " + person + "!" + "<br>" + " ";
}
myTxt.style.color = "red";
