// Einfache Interaktivität: Farbe der linken Spalte ändern
const btn = document.getElementById("colorBtn");
const leftCol = document.querySelector(".left-column");

btn.addEventListener("click", () => {
  const colors = ["#e6f2ff", "#d1ffd6", "#ffe6cc", "#f2d9ff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  leftCol.style.backgroundColor = randomColor;
});
