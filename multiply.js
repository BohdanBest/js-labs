function multiply(a, b) {
  let result = 0;
  const absB = Math.abs(b);
  for (let i = 0; i < absB; i++) {
    result += a;
  }
  return b < 0 ? -result : result;
}

var output = multiply(4, 7);
console.log(output);