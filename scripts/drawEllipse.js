function drawEllipse() {
  let a = parseInt(document.getElementById("axisA").value);
  let b = parseInt(document.getElementById("axisB").value);
  let method = document.querySelector('input[name="method"]:checked').value;

  clearDrawing();

  switch (method) {
    case "pixels":
      drawEllipsePixels(a, b);
      break;
    case "svg":
      drawEllipseSVG(a, b);
      break;
    case "canvas":
      drawEllipseCanvas(a, b);
      break;
  }
}

function drawEllipsePixels(a, b) {
  let container = document.getElementById("pixelContainer");
  container.style.display = "block";

  let centerX = 250;
  let centerY = 200;

  for (let t = 0; t <= 2 * Math.PI; t += 0.02) {
    let x = centerX + a * Math.cos(t);
    let y = centerY + b * Math.sin(t);

    let pixel = document.createElement("div");
    pixel.className = "pixel-point";
    pixel.style.left = Math.round(x) + "px";
    pixel.style.top = Math.round(y) + "px";
    container.appendChild(pixel);
  }
}

function drawEllipseSVG(a, b) {
  let svg = document.getElementById("drawingSVG");
  svg.style.display = "block";

  let centerX = 250;
  let centerY = 200;

  let ellipse = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse"
  );
  ellipse.setAttribute("cx", centerX);
  ellipse.setAttribute("cy", centerY);
  ellipse.setAttribute("rx", a);
  ellipse.setAttribute("ry", b);
  ellipse.setAttribute("fill", "none");
  ellipse.setAttribute("stroke", "#007bff");
  ellipse.setAttribute("stroke-width", "2");

  svg.appendChild(ellipse);
}

function drawEllipseCanvas(a, b) {
  let canvas = document.getElementById("drawingCanvas");
  let ctx = canvas.getContext("2d");
  canvas.style.display = "block";

  let centerX = 250;
  let centerY = 200;

  ctx.beginPath();
  ctx.ellipse(centerX, centerY, a, b, 0, 0, 2 * Math.PI);
  ctx.strokeStyle = "#007bff";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function clearDrawing() {
  let pixelContainer = document.getElementById("pixelContainer");
  pixelContainer.innerHTML = "";
  pixelContainer.style.display = "none";

  let svg = document.getElementById("drawingSVG");
  svg.innerHTML = "";
  svg.style.display = "none";

  let canvas = document.getElementById("drawingCanvas");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.display = "none";

  let method = document.querySelector('input[name="method"]:checked').value;
  switch (method) {
    case "pixels":
      pixelContainer.style.display = "block";
      break;
    case "svg":
      svg.style.display = "block";
      break;
    case "canvas":
      canvas.style.display = "block";
      break;
  }
}

window.onload = function () {
  document.getElementById("pixelContainer").style.display = "block";
};
