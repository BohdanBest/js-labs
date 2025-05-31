const citiesData = {
  ger: [
    { value: "berlin", name: "Berlin" },
    { value: "munich", name: "Munich" },
    { value: "hamburg", name: "Hamburg" },
    { value: "frankfurt", name: "Frankfurt" },
  ],
  usa: [
    { value: "newyork", name: "New York" },
    { value: "losangeles", name: "Los Angeles" },
    { value: "chicago", name: "Chicago" },
    { value: "houston", name: "Houston" },
  ],
  ukr: [
    { value: "kyiv", name: "Kyiv" },
    { value: "lviv", name: "Lviv" },
    { value: "odesa", name: "Odesa" },
    { value: "kharkiv", name: "Kharkiv" },
  ],
};

const countryNames = {
  ger: "🇩🇪 Germany",
  usa: "🇺🇸 USA",
  ukr: "🇺🇦 Ukraine",
};

const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const resultElement = document.getElementById("result");

function updateCitiesList() {
  const selectedCountry = countrySelect.value;

  citiesSelect.innerHTML = "";

  if (selectedCountry === "") {
    citiesSelect.disabled = true;
    citiesSelect.innerHTML =
      '<option value="">-- Спочатку оберіть країну --</option>';
    updateResult();
    return;
  }

  citiesSelect.disabled = false;

  citiesSelect.innerHTML = '<option value="">-- Оберіть місто --</option>';

  const cities = citiesData[selectedCountry];
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.value;
    option.textContent = city.name;
    citiesSelect.appendChild(option);
  });

  updateResult();
}

function updateResult() {
  const selectedCountry = countrySelect.value;
  const selectedCity = citiesSelect.value;

  if (selectedCountry === "") {
    resultElement.textContent =
      "Виберіть країну та місто для відображення результату";
    return;
  }

  if (selectedCity === "") {
    resultElement.innerHTML = `Обрана країна: <span class="country-flag">${countryNames[selectedCountry]}</span>`;
    return;
  }

  const cityData = citiesData[selectedCountry].find(
    (city) => city.value === selectedCity
  );
  const cityName = cityData ? cityData.name : selectedCity;

  resultElement.innerHTML = `
        Обрана країна: <span class="country-flag">${countryNames[selectedCountry]}</span><br>
        Обране місто: <strong>${cityName}</strong>
    `;
}

countrySelect.addEventListener("change", updateCitiesList);
citiesSelect.addEventListener("change", updateResult);

updateCitiesList();
