function mapBuilder(keysArray, valuesArrays) {
  const map = new Map();
  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArrays[i]);
  }
  return map;
}

document.addEventListener("DOMContentLoaded", function () {
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  let map = mapBuilder(keys, values);

  const sizeElement = document.getElementById("size");
  sizeElement.textContent = `map.size: ${map.size}`;

  const valueElement = document.getElementById("value");
  valueElement.textContent = `map.get(2): "${map.get(2)}"`;
});
