function getProperty(obj, key) {
  return obj[key];
}

function addProperty(obj, key) {
  obj[key] = true;
  return obj[key];
}

function removeProperty(obj, key) {
  delete obj[key];
}

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function getLengthOfWord(word) {
  return word.length;
}

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}

function isGreaterThan(num1, num2) {
  return num1 > num2;
}

function isEven(num) {
  return num % 2 === 0;
}

function isSameLength(word1, word2) {
  return word1.length === word2.length;
}

function isEvenAndGreaterThanTen(num) {
  return num % 2 === 0 && num > 10;
}

function computeAreaOfATriangle(base, height) {
  return 0.5 * base * height;
}

let obj = { name: "John", age: 30 };
console.log(getProperty(obj, "name")); 
console.log(addProperty(obj, "isStudent"));
console.log(obj); 
removeProperty(obj, "age");
console.log(obj);
console.log(getFullName("John", "Doe"));
console.log(getLengthOfWord("Hello"));
console.log(getLengthOfTwoWords("Hello", "World"));
console.log(isGreaterThan(10, 5));
console.log(isEven(4));
console.log(isSameLength("Hello", "World"));
console.log(isEvenAndGreaterThanTen(12)); 
console.log(computeAreaOfATriangle(4, 5));
