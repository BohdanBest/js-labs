function isNumb(fld) {
  let t = fld.value;
  for (let i = 0; i < t.length; i++) {
    let ch = t.charAt(i);
    if ((ch < "0" || ch > "9") && !(ch == "," || ch == "." || ch == "-")) {
      alert("Не цифра");
      fld.focus();
      fld.select();
      return false;
    }
  }
  return true;
}

function selectRow() {
  let select = document.getElementById("rowSelect");
  let selectedIndex = select.value;

  if (selectedIndex === "") {
    document.getElementById("newQuantity").value = "";
    document.getElementById("newPrice").value = "";
    return;
  }

  let table = document.getElementById("goodsTable");
  let row = table.getElementsByTagName("tbody")[0].rows[selectedIndex];

  let quantity = row.cells[2].innerHTML;
  let price = row.cells[3].innerHTML;

  document.getElementById("newQuantity").value = quantity;
  document.getElementById("newPrice").value = price;
}

function updateRow() {
  let select = document.getElementById("rowSelect");
  let selectedIndex = select.value;

  if (selectedIndex === "") {
    alert("Будь ласка, оберіть товар для редагування");
    return;
  }

  let newQuantity = document
    .getElementById("newQuantity")
    .value.replace(",", ".");
  let newPrice = document.getElementById("newPrice").value.replace(",", ".");

  if (newQuantity === "" || newPrice === "") {
    alert("Будь ласка, заповніть всі поля");
    return;
  }

  if (isNaN(newQuantity) || isNaN(newPrice)) {
    alert("Введіть коректні числові значення");
    return;
  }

  if (parseFloat(newQuantity) < 0 || parseFloat(newPrice) < 0) {
    alert("Кількість та ціна повинні бути позитивними числами");
    return;
  }

  let table = document.getElementById("goodsTable");
  let row = table.getElementsByTagName("tbody")[0].rows[selectedIndex];

  row.cells[2].innerHTML = parseFloat(newQuantity).toFixed(0);
  row.cells[3].innerHTML = parseFloat(newPrice).toFixed(2);

  let sum = parseFloat(newQuantity) * parseFloat(newPrice);
  row.cells[4].innerHTML = sum.toFixed(2);

  updateTotalSum();

  alert("Дані успішно оновлено!");
}

function updateTotalSum() {
  let table = document.getElementById("goodsTable");
  let tbody = table.getElementsByTagName("tbody")[0];
  let totalSum = 0;

  for (let i = 0; i < tbody.rows.length; i++) {
    let sum = parseFloat(tbody.rows[i].cells[4].innerHTML);
    totalSum += sum;
  }

  document.getElementById("totalSum").innerHTML =
    "<strong>" + totalSum.toFixed(2) + "</strong>";
}

function addNewRow() {
  document.getElementById("addSection").style.display = "block";
  document.getElementById("newName").value = "";
  document.getElementById("addQuantity").value = "";
  document.getElementById("addPrice").value = "";
}

function confirmAdd() {
  let name = document.getElementById("newName").value.trim();
  let quantity = document.getElementById("addQuantity").value.replace(",", ".");
  let price = document.getElementById("addPrice").value.replace(",", ".");

  if (name === "" || quantity === "" || price === "") {
    alert("Будь ласка, заповніть всі поля");
    return;
  }

  if (isNaN(quantity) || isNaN(price)) {
    alert("Введіть коректні числові значення для кількості та ціни");
    return;
  }

  if (parseFloat(quantity) < 0 || parseFloat(price) < 0) {
    alert("Кількість та ціна повинні бути позитивними числами");
    return;
  }

  let table = document.getElementById("goodsTable");
  let tbody = table.getElementsByTagName("tbody")[0];

  let newRow = tbody.insertRow();
  let rowCount = tbody.rows.length;

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);

  cell1.innerHTML = rowCount;
  cell2.innerHTML = name;
  cell3.innerHTML = parseFloat(quantity).toFixed(0);
  cell3.className = "quantity";
  cell4.innerHTML = parseFloat(price).toFixed(2);
  cell4.className = "price";

  let sum = parseFloat(quantity) * parseFloat(price);
  cell5.innerHTML = sum.toFixed(2);
  cell5.className = "sum";

  let select = document.getElementById("rowSelect");
  let option = document.createElement("option");
  option.value = rowCount - 1;
  option.text = rowCount + ". " + name;
  select.appendChild(option);

  updateTotalSum();

  cancelAdd();

  alert("Новий товар успішно додано!");
}

function cancelAdd() {
  document.getElementById("addSection").style.display = "none";
}

function deleteRow() {
  let select = document.getElementById("rowSelect");
  let selectedIndex = select.value;

  if (selectedIndex === "") {
    alert("Будь ласка, оберіть товар для видалення");
    return;
  }

  if (!confirm("Ви впевнені, що хочете видалити цей товар?")) {
    return;
  }

  let table = document.getElementById("goodsTable");
  let tbody = table.getElementsByTagName("tbody")[0];

  tbody.deleteRow(selectedIndex);

  for (let i = 0; i < tbody.rows.length; i++) {
    tbody.rows[i].cells[0].innerHTML = i + 1;
  }

  updateSelectOptions();

  document.getElementById("newQuantity").value = "";
  document.getElementById("newPrice").value = "";

  updateTotalSum();

  alert("Товар успішно видалено!");
}

function updateSelectOptions() {
  let select = document.getElementById("rowSelect");
  let table = document.getElementById("goodsTable");
  let tbody = table.getElementsByTagName("tbody")[0];

  select.innerHTML = '<option value="">-- Оберіть товар --</option>';

  for (let i = 0; i < tbody.rows.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i + 1 + ". " + tbody.rows[i].cells[1].innerHTML;
    select.appendChild(option);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateTotalSum();
});
