function flipEveryChunks(str, n) {
  let result = "";
  for (let i = 0; i < str.length; i += n) {
    let chunk = str.slice(i, i + n);
    result += chunk.split("").reverse().join("");
  }
  return result;
}

var input = "a short example";
var output = flipEveryChunks(input, 5);
console.log(output);
