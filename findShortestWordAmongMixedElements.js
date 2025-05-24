function findShortestWordAmongMixedElements(arr) {
  let words = arr.filter((item) => typeof item === "string");
  if (words.length === 0) return "";
  return words.reduce(
    (shortest, word) => (word.length < shortest.length ? word : shortest),
    words[0]
  );
}

var output = findShortestWordAmongMixedElements([4, "two", 2, "three"]);
console.log(output);
