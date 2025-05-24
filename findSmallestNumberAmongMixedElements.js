function findSmallestNumberAmongMixedElements(arr) {
  const numbers = arr.filter((item) => typeof item === "number");
  return numbers.length === 0 ? 0 : Math.min(...numbers);
}

var output = findSmallestNumberAmongMixedElements([
  4,
  ["lincoln"],
  9,
  ["octopus"],
]);
console.log(output);
