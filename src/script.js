const p1 = document.querySelector("p:nth-child(2)");
console.log(p1);

const p2 = document.querySelector("p:nth-child(3)");
console.log(p2);

const p3 = document.querySelector("p:nth-child(4)");
console.log(p3);

function fahrenheit(p1) {
  const result = (p1 * 9) / 5 + 32;
  return `hasil dari konversi suhu celcius ke fahrenheit adalah ${result}`;
}

function kelfin(p2) {
  const result = p2 + 273;
  return `hasil dari konversi suhu celcius ke kelvin adalah ${result}`;
}
function reamur(p3) {
  const result = (p3 * 4) / 5;
  return `hasil dari konversi suhu celcius ke reamur adalah ${result}`;
}

p1.textContent = fahrenheit(20);
p2.textContent = kelfin(20);
p3.textContent = reamur(20);
