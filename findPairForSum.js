function findPairForSum(arr, sum) {
  let seen = new Set();
  for (let num of arr) {
    let complement = sum - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }
  return [];
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // Output: [2, 4] or [3, 3] depending on the input array
