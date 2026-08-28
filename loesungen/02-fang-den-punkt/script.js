const dot = document.getElementById("dot");
const score = document.getElementById("score");
let punkte = 0;

dot.addEventListener("click", function () {
  punkte = punkte + 1;
  score.textContent = "Punkte: " + punkte;
  dot.style.left = Math.random() * 70 + "%";
  dot.style.top = Math.random() * 55 + 25 + "%";
  if (punkte >= 10) {
    score.textContent = "Gewonnen!";
    dot.textContent = ":)";
  }
});
