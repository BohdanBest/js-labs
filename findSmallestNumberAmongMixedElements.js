function findSmallestNumberAmongMixedElements(arr) {
  let numbers = arr.filter((item) => typeof item === "number");
  if (numbers.length === 0) return "";
  return Math.min(...numbers);
}
var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output);
