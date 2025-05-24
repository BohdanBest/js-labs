function getLengthOfShortestElement(arr) {
  if (arr.length === 0) return 0;
  return Math.min(...arr.map((word) => word.length));
}

var output = getLengthOfShortestElement(["one", "two", "free"]);
console.log(output);
