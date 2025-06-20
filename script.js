const wheel = document.getElementById("wheel");
const result = document.getElementById("result");
const button = document.getElementById("spinButton");

let currentRotation = 0;

button.addEventListener("click", () => {
  const randomDeg = Math.floor(Math.random() * 360);
  const spins = 5;
  const totalRotation = spins * 360 + randomDeg;

  currentRotation += totalRotation;
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    const finalDeg = currentRotation % 360;
    if (finalDeg < 180) {
      result.textContent = "Результат: ДА!";
    } else {
      result.textContent = "Результат: НЕТ!";
    }
  }, 3000);
});
