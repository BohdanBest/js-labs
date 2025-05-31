let isDragging = false;
let startX, startY;
let initialLeft, initialTop;

const dragSquare = document.getElementById("dragSquare");
const dragArea = document.getElementById("dragArea");
const coordinates = document.getElementById("coordinates");
const resetBtn = document.getElementById("resetBtn");
const centerBtn = document.getElementById("centerBtn");

const SQUARE_SIZE = 50;
const AREA_WIDTH = 500;
const AREA_HEIGHT = 500;

function updateCoordinates() {
  const left = parseInt(dragSquare.style.left) || 10;
  const top = parseInt(dragSquare.style.top) || 10;
  coordinates.textContent = `Позиція: (${left}, ${top})`;
}

function constrainPosition(x, y) {
  const maxX = AREA_WIDTH - SQUARE_SIZE;
  const maxY = AREA_HEIGHT - SQUARE_SIZE;

  return {
    x: Math.max(0, Math.min(x, maxX)),
    y: Math.max(0, Math.min(y, maxY)),
  };
}

function startDrag(e) {
  isDragging = true;
  dragSquare.classList.add("dragging");

  const rect = dragArea.getBoundingClientRect();
  startX = (e.clientX || e.touches[0].clientX) - rect.left;
  startY = (e.clientY || e.touches[0].clientY) - rect.top;

  initialLeft = parseInt(dragSquare.style.left) || 10;
  initialTop = parseInt(dragSquare.style.top) || 10;

  e.preventDefault();

  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchmove", drag, { passive: false });
  document.addEventListener("touchend", stopDrag);
}

function drag(e) {
  if (!isDragging) return;

  e.preventDefault();

  const rect = dragArea.getBoundingClientRect();
  const currentX = (e.clientX || e.touches[0].clientX) - rect.left;
  const currentY = (e.clientY || e.touches[0].clientY) - rect.top;

  const deltaX = currentX - startX;
  const deltaY = currentY - startY;

  let newLeft = initialLeft + deltaX;
  let newTop = initialTop + deltaY;

  const constrainedPos = constrainPosition(newLeft, newTop);

  dragSquare.style.left = constrainedPos.x + "px";
  dragSquare.style.top = constrainedPos.y + "px";

  updateCoordinates();
}

function stopDrag() {
  if (!isDragging) return;

  isDragging = false;
  dragSquare.classList.remove("dragging");

  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("touchmove", drag);
  document.removeEventListener("touchend", stopDrag);
}

function resetPosition() {
  dragSquare.style.left = "10px";
  dragSquare.style.top = "10px";
  updateCoordinates();

  dragSquare.style.transition = "all 0.5s ease";
  setTimeout(() => {
    dragSquare.style.transition = "all 0.2s ease";
  }, 500);
}

function centerSquare() {
  const centerX = (AREA_WIDTH - SQUARE_SIZE) / 2;
  const centerY = (AREA_HEIGHT - SQUARE_SIZE) / 2;

  dragSquare.style.left = centerX + "px";
  dragSquare.style.top = centerY + "px";
  updateCoordinates();

  dragSquare.style.transition = "all 0.5s ease";
  setTimeout(() => {
    dragSquare.style.transition = "all 0.2s ease";
  }, 500);
}

dragSquare.addEventListener("mousedown", startDrag);
dragSquare.addEventListener("touchstart", startDrag, { passive: false });
resetBtn.addEventListener("click", resetPosition);
centerBtn.addEventListener("click", centerSquare);

dragSquare.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

updateCoordinates();

dragSquare.addEventListener("mouseenter", function () {
  if (!isDragging) {
    this.style.transform = "scale(1.05)";
  }
});

dragSquare.addEventListener("mouseleave", function () {
  if (!isDragging) {
    this.style.transform = "scale(1)";
  }
});

document.addEventListener("keydown", function (e) {
  const currentLeft = parseInt(dragSquare.style.left) || 10;
  const currentTop = parseInt(dragSquare.style.top) || 10;
  let newLeft = currentLeft;
  let newTop = currentTop;

  const step = e.shiftKey ? 10 : 1;

  switch (e.key) {
    case "ArrowLeft":
      newLeft = currentLeft - step;
      break;
    case "ArrowRight":
      newLeft = currentLeft + step;
      break;
    case "ArrowUp":
      newTop = currentTop - step;
      break;
    case "ArrowDown":
      newTop = currentTop + step;
      break;
    default:
      return;
  }

  e.preventDefault();
  const constrainedPos = constrainPosition(newLeft, newTop);
  dragSquare.style.left = constrainedPos.x + "px";
  dragSquare.style.top = constrainedPos.y + "px";
  updateCoordinates();
});
