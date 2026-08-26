/**
 * Projekt 01 — Stimmungslicht
 *
 * Kernidee:
 * 1. Nutzer ändert Farbe / Helligkeit
 * 2. Wir schreiben CSS-Variablen am <html>-Element
 * 3. CSS reagiert automatisch (kein manuelles Style-Gehacke nötig)
 */

const DEFAULT_COLOR = "#2a9d8f";
const DEFAULT_BRIGHTNESS = 70;

/** Kleine Palette für den Zufalls-Button — gerne erweitern! */
const PALETTE = [
  "#2a9d8f",
  "#e76f51",
  "#264653",
  "#e9c46a",
  "#f4a261",
  "#457b9d",
  "#a8dadc",
  "#bc6c25",
];

const root = document.documentElement;
const colorInput = document.getElementById("color");
const brightnessInput = document.getElementById("brightness");
const randomBtn = document.getElementById("random");
const resetBtn = document.getElementById("reset");
const readout = document.getElementById("rgb-readout");

/**
 * Hex (#rrggbb) → { r, g, b }
 * Nützlich, um Werte lesbar anzuzeigen.
 */
function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;

  const num = Number.parseInt(full, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function updateReadout(hex) {
  const { r, g, b } = hexToRgb(hex);
  readout.textContent = `RGB ${r} · ${g} · ${b}`;
}

/**
 * Schreibt die aktuellen Werte in CSS-Variablen.
 * Danach kümmert sich styles.css um das Aussehen.
 */
function applyMood(color, brightness) {
  root.style.setProperty("--farbe", color);
  root.style.setProperty("--helligkeit", `${brightness}%`);
  colorInput.value = color;
  brightnessInput.value = String(brightness);
  updateReadout(color);
}

function onColorChange(event) {
  applyMood(event.target.value, Number(brightnessInput.value));
}

function onBrightnessChange(event) {
  applyMood(colorInput.value, Number(event.target.value));
}

function onRandom() {
  const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  const brightness = 45 + Math.floor(Math.random() * 50);
  applyMood(color, brightness);
}

function onReset() {
  applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);
}

colorInput.addEventListener("input", onColorChange);
brightnessInput.addEventListener("input", onBrightnessChange);
randomBtn.addEventListener("click", onRandom);
resetBtn.addEventListener("click", onReset);

// Startzustand setzen
applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);
