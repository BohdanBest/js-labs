function updateWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  document.getElementById("windowWidth").textContent = width;
  document.getElementById("windowHeight").textContent = height;

  const aspectRatio = (width / height).toFixed(2);
  document.getElementById("aspectRatio").textContent = aspectRatio + ":1";

  const area = (width * height).toLocaleString();
  document.getElementById("area").textContent = area;

  const maxWidth = screen.width || 1920;
  const percentage = (width / maxWidth) * 100;
  document.getElementById("sizeBar").style.width = percentage + "%";
}

window.addEventListener("resize", updateWindowSize);

window.addEventListener("load", updateWindowSize);

updateWindowSize();
