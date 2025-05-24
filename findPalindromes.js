function findPalindromes(sentence) {
  let words = sentence.toLowerCase().split(/\s+/);
  return words.filter((word) => word === word.split("").reverse().join(""));
}
console.log(findPalindromes("Madam Arora teaches malayalam"));