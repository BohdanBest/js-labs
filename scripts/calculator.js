function checkFunction(fld) {
  const value = fld.value;
  if (value === "") {
    alert("Будь ласка, оберіть тригонометричну функцію.");
    fld.focus();
    return false;
  }
  return true;
}

function checkAngle(fld) {
  const value = fld.value;
  if (isNaN(value)) {
    alert("Будь ласка, введіть коректне число для кута.");
    fld.focus();
    fld.select();
    return false;
  }
  return true;
}

function calculate() {
  const func = document.querySelector('select[name="function"]').value;
  const angle = document.querySelector('input[name="angle"]').value;
  let errors = "";

  if (func === "") errors += "тригонометричну функцію\n";
  if (angle === "" || isNaN(angle)) errors += "кут\n";

  if (errors !== "") {
    alert("Введіть:\n" + errors);
    return;
  }

  const radians = (angle * Math.PI) / 180;
  const expression = "Math." + func + "(" + radians + ")";
  const result = eval(expression);
  document.getElementById(
    "result"
  ).innerHTML = `${func}(${angle}°) = ${result.toFixed(4)}`;
}
