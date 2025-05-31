let animationId = null;
let isRunning = false;
let t = 0;
let R = 100;
let speed = 5;
let centerX = 250;
let centerY = 250;

const square = document.getElementById("square");
const startStopBtn = document.getElementById("startStopBtn");
const radiusSlider = document.getElementById("radiusSlider");
const speedSlider = document.getElementById("speedSlider");
const radiusValue = document.getElementById("radiusValue");
const speedValue = document.getElementById("speedValue");

function initPosition() {
  const x = centerX + R - 15;
  const y = centerY - 15;
  square.style.left = x + "px";
  square.style.top = y + "px";
}

function moveInCircle() {
  const x = centerX + R * Math.cos(t) - 15;
  const y = centerY + R * Math.sin(t) - 15;

  square.style.left = x + "px";
  square.style.top = y + "px";

  t += speed * 0.02; 

  if (t >= 2 * Math.PI) {
    t = 0;
  }

  if (isRunning) {
    animationId = requestAnimationFrame(moveInCircle);
  }
}

function toggleAnimation() {
  if (isRunning) {
    isRunning = false;
    cancelAnimationFrame(animationId);
    startStopBtn.textContent = "Запустити";
    startStopBtn.style.background = "#ff6b6b";
  } else {
    isRunning = true;
    startStopBtn.textContent = "Стоп";
    startStopBtn.style.background = "#4ecdc4";
    moveInCircle();
  }
}

function updateRadius() {
  R = parseInt(radiusSlider.value);
  radiusValue.textContent = R;
  if (!isRunning) {
    initPosition();
  }
}

function updateSpeed() {
  speed = parseInt(speedSlider.value);
  speedValue.textContent = speed;
}

startStopBtn.addEventListener("click", toggleAnimation);
radiusSlider.addEventListener("input", updateRadius);
speedSlider.addEventListener("input", updateSpeed);

initPosition();

square.addEventListener("mouseenter", function () {
  if (isRunning) {
    this.style.transform = "scale(1.2) rotate(45deg)";
  }
});

square.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1) rotate(0deg)";
});
