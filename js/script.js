let isCelsiusToFahrenheit = true;

function formatTemperature(temp) {
  return Number.isInteger(temp) ? temp.toString() : temp.toFixed(2);
}

// Konversi form
function konversitemperature() {
  const input1 = document.getElementById("input1");
  const inputValue = input1.value.trim();

  // Validasi jika input kosong
  if (inputValue === "") {
    alert("Silahkan masukkan angka terlebih dahulu!");
    input1.focus();
    return;
  }

  // Validasi jika input mengandung huruf atau karakter selain angka dan titik
  if (!/^-?\d*\.?\d+$/.test(inputValue)) {
    alert("Hanya angka yang diperbolehkan!");
    input1.value = "";
    input1.focus();
    return;
  }

  const input = parseFloat(inputValue);

  if (!isNaN(input)) {
    let result, calculation;
    if (isCelsiusToFahrenheit) {
      result = (input * 9) / 5 + 32;
      calculation = `${input}°C × (9/5) + 32 = ${formatTemperature(result)}°F`;
    } else {
      result = ((input - 32) * 5) / 9;
      calculation = `(${input}°F - 32) × 5/9 = ${formatTemperature(result)}°C`;
    }
    document.getElementById("input2").value = formatTemperature(result);
    document.getElementById("calculation").value = calculation;
  }
}

// Reset Form
function resetform() {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("calculation").value = "";
}

// Reverse Form
function reverseconversion() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const label1 = document.querySelector("label[for='input1']");
  const label2 = document.querySelector("label[for='input2']");
  const instruction = document.getElementById("instruction");

  [input1.value, input2.value] = [input2.value, input1.value];

  if (isCelsiusToFahrenheit) {
    label1.textContent = "Celcius (°C) :";
    label2.textContent = "Fahrenheit (°F) :";
    instruction.textContent =
      "Masukkan suhu derajat Celsius (°C) ke kotak dibawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F).";
  } else {
    label1.textContent = "Fahrenheit (°F) :";
    label2.textContent = "Celcius (°C) :";
    instruction.textContent =
      "Masukkan suhu derajat Fahrenheit (°F) ke kotak dibawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celsius (°C).";
  }

  document.getElementById("calculation").value = "";

  if (input1.value) {
    konversiTemperature();
  }
}
