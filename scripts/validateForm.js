function checkQuantity(fld) {
  const value = fld.value;
  if (isNaN(value) || value <= 0) {
    alert("Будь ласка, введіть коректну кількість (число більше 0).");
    fld.focus();
    fld.select();
    return false;
  }
  return true;
}

function validateForm() {
  const item = document.F1.item.value;
  const material = document.F1.material.value;
  const quantity = document.F1.quantity.value;
  let errors = "";

  if (item === "") errors += "виріб\n";
  if (material === "") errors += "матеріал\n";
  if (quantity === "" || isNaN(quantity) || quantity <= 0)
    errors += "кількість\n";

  if (errors === "") {
    document.F1.action = "process_order.php";
    return true;
  } else {
    alert("Введіть:\n" + errors);
    return false;
  }
}
