function formatTemperature(temp) {
  return Number.isInteger(temp) ? temp.toString() : temp.toFixed(2);
}

function konversiTemperature() {
  const celcius = parseFloat(document.getElementById("celciusInput").value);
  if (!isNaN(celcius)) {
    const fahrenheit = (celcius * 9) / 5 + 32;
    document.getElementById("fahrenheitResult").value =
      formatTemperature(fahrenheit);
    document.getElementById(
      "calculation"
    ).value = `${celcius}°C × (9/5) + 32 = ${formatTemperature(fahrenheit)}°F`;
  }
}

function resetForm() {
  document.getElementById("celciusInput").value = "";
  document.getElementById("fahrenheitResult").value = "";
  document.getElementById("calculation").value = "";
}

function reverseConversion() {
  const fahrenheit = parseFloat(
    document.getElementById("fahrenheitResult").value
  );
  if (!isNaN(fahrenheit)) {
    const celcius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById("celciusInput").value = formatTemperature(celcius);
    document.getElementById(
      "calculation"
    ).value = `(${fahrenheit}°F - 32) × 5/9 = ${formatTemperature(celcius)}°C`;
  } else {
    alert("Mohon konversi suhu Celcius terlebih dahulu");
  }
}

document
  .getElementById("conversionForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });
