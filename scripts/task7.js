function mul(...args) {
  const numbers = args.filter((arg) => typeof arg === "number");
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, val) => acc * val, 1);
}

document.addEventListener("DOMContentLoaded", function () {
  const result1 = document.getElementById("result1");
  result1.textContent = `mul(1, "str", 2, 3, true) = ${mul(
    1,
    "str",
    2,
    3,
    true
  )}`;

  const result2 = document.getElementById("result2");
  result2.textContent = `mul(null, "str", false, true) = ${mul(
    null,
    "str",
    false,
    true
  )}`;
});
