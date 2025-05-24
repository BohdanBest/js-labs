function sumDigits(num) {
  let str = Math.abs(num).toString();
  let sum = 0;
  for (let digit of str) {
    sum += parseInt(digit);
  }
  return num < 0 ? -sum : sum;
}

var output = sumDigits(1148);
console.log(output);