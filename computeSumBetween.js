function computeSumBetween(num1, num2) {
  if (num2 <= num1) return 0;
  let sum = 0;
  for (let i = num1; i < num2; i++) {
    sum += i;
  }
  return sum;
}

var output = computeSumBetween(2, 5);
console.log(output);
