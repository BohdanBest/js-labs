function getProductOfAllElementsAtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
    return 0;
  }
  return obj[key].reduce((product, num) => product * num, 1);
}

var obj = {
  key: [1, 2, 3, 4],
};
var output = getProductOfAllElementsAtProperty(obj, "key");
console.log(output);
