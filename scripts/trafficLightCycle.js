const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");

function setLight(activeLight) {
  redLight.classList.remove("active");
  yellowLight.classList.remove("active");
  greenLight.classList.remove("active");
  activeLight.classList.add("active");
}

function trafficLightCycle() {
  setLight(redLight);
  setTimeout(() => {
    setLight(yellowLight);
    setTimeout(() => {
      setLight(greenLight);
      setTimeout(trafficLightCycle, 4000);
    }, 2000);
  }, 4000);
}

trafficLightCycle();
