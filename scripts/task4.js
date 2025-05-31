const originalOptions = [
  { value: "apple", text: "Яблуко" },
  { value: "banana", text: "Банан" },
  { value: "orange", text: "Апельсин" },
  { value: "grape", text: "Виноград" },
  { value: "strawberry", text: "Полуниця" },
  { value: "pineapple", text: "Ананас" },
];

function updateItemCount() {
  const select = document.getElementById("itemSelect");
  const count = select.options.length;
  document.getElementById("itemCount").textContent = count;
  document.getElementById("deleteButton").disabled = count === 0;
}

function deleteSelectedItem() {
  const select = document.getElementById("itemSelect");
  const selectedIndex = select.selectedIndex;

  if (selectedIndex >= 0) {
    select.remove(selectedIndex);
    updateItemCount();

    if (select.options.length === 0) {
      alert("Всі елементи видалено!");
    }
  }
}

function resetAllItems() {
  const select = document.getElementById("itemSelect");

  select.innerHTML = "";

  originalOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    select.appendChild(optionElement);
  });

  updateItemCount();
}

document
  .getElementById("deleteButton")
  .addEventListener("click", deleteSelectedItem);
document.getElementById("resetButton").addEventListener("click", resetAllItems);

updateItemCount();
