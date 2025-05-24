function findMinLengthOfThreeWords(word1, word2, word3) {
  return [word1.length, word2.length, word3.length].reduce((min, len) =>
    len < min ? len : min
  );
}

var output = findMinLengthOfThreeWords("a", "b", "see");
console.log(output);