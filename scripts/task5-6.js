let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , z] = arr;

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;

document.addEventListener("DOMContentLoaded", function () {
  const task5Result = document.getElementById("task5-result");
  task5Result.innerHTML = `
        <p>console.log(x): "${x}"</p>
        <p>console.log(y): "${y}"</p>
        <p>console.log(z): "${z}"</p>
    `;

  const task6Result = document.getElementById("task6-result");
  task6Result.innerHTML = `
        <p>console.log(name2): "${name2}"</p>
        <p>console.log(age2): ${age2}</p>
        <p>console.log(name4): "${name4}"</p>
        <p>console.log(age4): ${age4}</p>
    `;
});
