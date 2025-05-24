function isIsogram(str) {
  str = str.toLowerCase();
  let seen = new Set();
  for (let char of str) {
    if (seen.has(char)) return false;
    seen.add(char);
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
