function rodEl() {
  var z = document.all.B.bgColor;
  if (z != "#777777") {
    z = "#777777";
  } else {
    z = "#AAAAAA";
  }
  document.all.B.bgColor = z;
}

function D_l() {
  window.event.cancelBubble = true;
  var z = document.all.k1.style.backgroundColor;
  if (z != "red") {
    z = "red";
  } else {
    z = "green";
  }
  document.all.k1.style.backgroundColor = z;
}

function D_2(thi) {
  window.event.cancelBubble = true;
  var z = thi.style.backgroundColor;
  if (z == "#ff00ff" || z == "rgb(255, 0, 255)") {
    z = "#00ffff";
  } else {
    z = "#ff00ff";
  }
  thi.style.backgroundColor = z;
}

function H_l() {
  window.event.cancelBubble = true;
  var z = document.all.HH.style.color;
  if (z == "#aa00aa" || z == "rgb(170, 0, 170)") {
    z = "#00ffff";
  } else {
    z = "#aa00aa";
  }
  document.all.HH.style.color = z;
}
