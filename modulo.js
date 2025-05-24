function modulo(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return NaN;
  if (num2 === 0) return NaN;
  if (num1 === 0) return 0;
  let quotient = Math.floor(Math.abs(num1) / Math.abs(num2));
  let remainder = Math.abs(num1) - Math.abs(num2) * quotient;
  return num1 < 0 ? -remainder : remainder;
}

var output = modulo(25, 4);
console.log(output);