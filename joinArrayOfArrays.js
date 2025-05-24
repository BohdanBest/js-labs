function joinArrayOfArrays(arr) {
  return [].concat(...arr);
}

var output = joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]]);
console.log(output);