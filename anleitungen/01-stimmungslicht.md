# Anleitung 01 — Stimmungslicht (Selbstbau)

Du baust ein interaktives Licht: Farbe wählen, Helligkeit drehen, Raum ändert sich.

## Auf dem Handy

Nicht diese Markdown-Datei in Cursor öffnen — das landet wieder im Chat.

Stattdessen die **Lern-App im Handy-Browser** öffnen:

**[Stimmungslicht-App öffnen](https://rawcdn.githack.com/Bvault1420/creative/ba2aeafce170d1c5521945e80b25ecb373c05701/lernen/index.html)**

Dort: Anleitung lesen (kompletter Code + jede Zeile erklärt) → selbst im Tab **Code** abschreiben **oder** übernehmen → Vorschau. Bei Problemen zurück in den Chat.

---

**Am Computer:** Tippe den Code selbst. Nach jedem Schritt im Browser prüfen.  
**Arbeitsordner:** `projekte/01-stimmungslicht/`  
**Lösung (später):** `loesungen/01-stimmungslicht/` — erst anschauen, wenn du fertig bist oder steckenbleibst.

---

## Was du am Ende kannst

- Eine HTML-Seite strukturieren
- Mit CSS Farben, Layout und Übergänge steuern
- Mit JavaScript auf Klicks/Eingaben reagieren
- CSS-Variablen aus JS setzen

---

## Vorbereitung

### 1. Editor

Öffne den Ordner `projekte/01-stimmungslicht/` in Cursor (oder deinem Editor).

### 2. Drei leere Dateien anlegen

Lege diese Dateien **im Arbeitsordner** an (noch fast leer ist ok):

- `index.html`
- `styles.css`
- `script.js`

### 3. Lokalen Server starten

Im Terminal:

```bash
cd projekte/01-stimmungslicht
python3 -m http.server 5173
```

Browser öffnen: **http://localhost:5173**

Nach jeder Änderung: Seite neu laden (F5).

> Wenn der Server schon läuft, nicht nochmal starten. Zum Stoppen: im Terminal `Ctrl+C`.

---

## Schritt 1 — HTML-Grundgerüst

**Ziel:** Eine gültige Seite, die „Hallo“ zeigt.

### In `index.html` schreiben:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stimmungslicht — creative</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Stimmungslicht</h1>
    <p>Seite lädt — Schritt 1 ok.</p>

    <script src="script.js"></script>
  </body>
</html>
```

### Kurz erklärt

| Teil | Bedeutung |
|------|-----------|
| `<!DOCTYPE html>` | Sagt dem Browser: das ist HTML5 |
| `lang="de"` | Sprache der Seite |
| `<head>` | Meta-Infos, Titel, CSS-Link — nicht sichtbar als Inhalt |
| `<body>` | Was du siehst |
| `link … styles.css` | CSS-Datei einbinden |
| `script … script.js` | JS-Datei einbinden (am Ende vom body) |

### Check

- [ ] http://localhost:5173 zeigt die Überschrift
- [ ] Tab-Titel heißt „Stimmungslicht — creative“

**Steckenbleiben?** Prüfe Dateiname genau `index.html` und dass der Server im richtigen Ordner läuft.

---

## Schritt 2 — CSS: Basis & Variablen

**Ziel:** Dunkler Hintergrund, lesbare Schrift, zentrale Farb-Variablen.

### Oben in `index.html` im `<head>` (vor dem CSS-Link) Google Fonts einfügen:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

### In `styles.css`:

```css
:root {
  --farbe: #2a9d8f;
  --helligkeit: 70%;
  --text: #f4f0e8;
  --ink: #12151a;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  font-family: "Outfit", sans-serif;
  color: var(--text);
  background: var(--ink);
}
```

### Jede Zeile — so bleibt sie sitzen

| Zeile | Merkbild |
|------|-----------|
| `:root {` | Der Zettel der ganzen Seite. Ein Ort, nicht sieben Kopien. |
| `--farbe: #2a9d8f;` | Ein Name für die Stimmung. JS tauscht später nur diesen Namen. |
| `--helligkeit: 70%;` | Wie stark das Licht steht. |
| `--text: #f4f0e8;` | Creme auf Dunkel — lesbar, nicht grell. |
| `--ink: #12151a;` | Die Nacht der Seite. |
| `*, *::before, *::after` | Sternchen = wirklich jedes Element, plus CSS-Geisterstücke. |
| `box-sizing: border-box;` | Die Kiste wird von außen gemessen. Futter ist schon in der Breite. |
| `html, body { margin: 0; }` | Den Browser-Rand abschneiden. Wir bestimmen den Abstand. |
| `min-height: 100%;` | Kein halbes Blatt — mindestens Fensterhöhe. |
| `font-family: "Outfit", sans-serif;` | Outfit zuerst, sonst serifenlos — nie Times als Unfall. |
| `color: var(--text);` | Nicht raten: den Namen vom Zettel holen. |
| `background: var(--ink);` | Hintergrund vom selben Zettel. Ein Tausch färbt beides. |

In der Handy-App gilt das für **jeden Schritt**: kompletter Code zum Abschreiben, darunter Zeile für Zeile.

### Check

- [ ] Seite ist dunkel, Text hell
- [ ] Schrift wirkt nicht mehr wie Browser-Standard (Arial/Times)

---

## Schritt 3 — Atmosphäre (farbige Fläche)

**Ziel:** Eine Schicht, deren Farbe wir später steuern.

### Im `<body>` von `index.html` **vor** der Überschrift einfügen:

```html
<div class="atmosphere" aria-hidden="true">
  <div class="atmosphere__wash" id="wash"></div>
</div>
```

### In `styles.css` ergänzen:

```css
.atmosphere {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.atmosphere__wash {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 80% 70% at 50% 40%,
    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),
    rgb(8 10 14 / 0.9)
  );
  transition: background 0.5s ease;
}
```

### Warum `z-index: 0`?

Die Atmosphäre liegt hinten. Inhalt kommt später mit `z-index: 1` darüber.

### Check

- [ ] Du siehst einen teal/grünen Glow statt nur flachem Schwarz
- [ ] Text ist noch sichtbar

---

## Schritt 4 — Brand + Hauptbereich

**Ziel:** Marke „creative“ oben, Titel unten links — eine klare Komposition.

### Ersetze im `<body>` den bisherigen `<h1>`/`<p>`-Inhalt durch:

```html
<div class="atmosphere" aria-hidden="true">
  <div class="atmosphere__wash" id="wash"></div>
</div>

<header class="brand">
  <p class="brand__name">creative</p>
  <p class="brand__meta">Projekt 01</p>
</header>

<main class="stage">
  <h1 class="stage__title">Stimmungslicht</h1>
  <p class="stage__lead">
    Wähle Farbe und Helligkeit — der Raum folgt dir.
  </p>
</main>

<script src="script.js"></script>
```

### CSS ergänzen:

```css
.brand {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);
}

.brand__name {
  margin: 0;
  font-family: "Fraunces", serif;
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
}

.brand__meta {
  margin: 0;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.75;
}

.stage {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 5.5rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);
  max-width: 40rem;
}

.stage__title {
  margin: 0 0 0.65rem;
  font-family: "Fraunces", serif;
  font-size: clamp(2.4rem, 7vw, 4rem);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

.stage__lead {
  margin: 0;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.45;
  opacity: 0.8;
  max-width: 28ch;
}
```

### Neu hier

- `clamp(min, bevorzugt, max)` = Schrift/Abstände skaliert mit dem Viewport
- Flexbox: `justify-content: flex-end` schiebt den Inhalt nach unten

### Check

- [ ] Oben: „creative“ + „Projekt 01“
- [ ] Unten: großer Titel + kurzer Text
- [ ] Auf schmalem Fenster: Layout bricht nicht total (Mobile ok)

---

## Schritt 5 — Steuerelemente in HTML

**Ziel:** Color-Picker, Helligkeits-Slider, zwei Buttons, RGB-Zeile.

### Innerhalb von `<main class="stage">`, **nach** dem Lead-Absatz einfügen:

```html
<div class="controls" role="group" aria-label="Lichtsteuerung">
  <label class="field">
    <span class="field__label">Farbe</span>
    <input type="color" id="color" value="#2a9d8f" />
  </label>

  <label class="field field--range">
    <span class="field__label">Helligkeit</span>
    <input type="range" id="brightness" min="15" max="100" value="70" />
  </label>

  <div class="actions">
    <button type="button" class="btn" id="random">Zufällige Stimmung</button>
    <button type="button" class="btn btn--ghost" id="reset">Zurücksetzen</button>
  </div>
</div>

<p class="readout" id="rgb-readout" aria-live="polite">RGB —</p>
```

### Wichtig

- Jedes `id="…"` brauchst du später in JavaScript
- `type="color"` und `type="range"` sind eingebaute Browser-Controls
- `aria-live="polite"` = Screenreader merken Änderungen an der RGB-Zeile

### Check

- [ ] Farbfeld, Slider und Buttons sind sichtbar
- [ ] Noch ändert sich die Atmosphäre **nicht** beim Klicken — das kommt mit JS

---

## Schritt 6 — Steuerelemente stylen

**Ziel:** Controls sehen absichtlich aus, nicht „Browser-Rohling“.

### In `styles.css` ergänzen:

```css
.controls {
  display: grid;
  gap: 1.1rem;
  margin-top: 2rem;
}

.field {
  display: grid;
  gap: 0.45rem;
  width: fit-content;
}

.field--range {
  width: min(100%, 18rem);
}

.field__label {
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.75;
}

input[type="color"] {
  width: 3.25rem;
  height: 3.25rem;
  padding: 0;
  border: 2px solid rgb(255 255 255 / 0.35);
  border-radius: 0.35rem;
  background: transparent;
  cursor: pointer;
}

input[type="range"] {
  width: 100%;
  accent-color: var(--farbe);
  cursor: pointer;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.35rem;
}

.btn {
  font: inherit;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.7rem 1.15rem;
  border: none;
  border-radius: 0.35rem;
  color: var(--ink);
  background: var(--text);
  cursor: pointer;
}

.btn--ghost {
  color: var(--text);
  background: transparent;
  border: 1px solid rgb(255 255 255 / 0.35);
}

.readout {
  margin: 1.5rem 0 0;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  opacity: 0.75;
  font-variant-numeric: tabular-nums;
}
```

### Check

- [ ] Buttons haben klaren Stil (gefüllt / Outline)
- [ ] Slider nutzt die aktuelle `--farbe` als Accent

---

## Schritt 7 — JavaScript: Farbe verbinden

**Ziel:** Wenn du die Farbe änderst, ändert sich `--farbe` und damit die Atmosphäre.

### In `script.js`:

```js
const DEFAULT_COLOR = "#2a9d8f";
const DEFAULT_BRIGHTNESS = 70;

const root = document.documentElement;
const colorInput = document.getElementById("color");
const brightnessInput = document.getElementById("brightness");

function applyMood(color, brightness) {
  root.style.setProperty("--farbe", color);
  root.style.setProperty("--helligkeit", `${brightness}%`);
  colorInput.value = color;
  brightnessInput.value = String(brightness);
}

function onColorChange(event) {
  applyMood(event.target.value, Number(brightnessInput.value));
}

colorInput.addEventListener("input", onColorChange);

applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);
```

### Kurz erklärt

1. `getElementById` holt das HTML-Element
2. `addEventListener("input", …)` reagiert bei jeder Änderung
3. `setProperty("--farbe", …)` schreibt eine CSS-Variable
4. CSS nutzt `var(--farbe)` schon — die Seite „folgt“ automatisch

### Check

- [ ] Farbe im Picker ändern → Glow ändert sich
- [ ] Browser-Konsole (F12) zeigt **keine** roten Fehler

**Häufiger Fehler:** `id` in HTML und `getElementById("…")` müssen **exakt** gleich sein. Tippfehler → `null` → Crash.

---

## Schritt 8 — Helligkeit verbinden

**Ziel:** Slider steuert `--helligkeit`.

### In `script.js` ergänzen (unter `onColorChange`):

```js
function onBrightnessChange(event) {
  applyMood(colorInput.value, Number(event.target.value));
}

brightnessInput.addEventListener("input", onBrightnessChange);
```

### Check

- [ ] Slider nach links → Glow schwächer/dunkler
- [ ] Slider nach rechts → Glow stärker

---

## Schritt 9 — Zufall & Zurücksetzen

**Ziel:** Zwei Buttons, die Stimmung setzen.

### Oben in `script.js` eine Palette anlegen:

```js
const PALETTE = [
  "#2a9d8f",
  "#e76f51",
  "#264653",
  "#e9c46a",
  "#f4a261",
  "#457b9d",
];
```

### Elemente holen (neben den anderen `getElementById`):

```js
const randomBtn = document.getElementById("random");
const resetBtn = document.getElementById("reset");
```

### Funktionen + Listener:

```js
function onRandom() {
  const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  const brightness = 45 + Math.floor(Math.random() * 50);
  applyMood(color, brightness);
}

function onReset() {
  applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);
}

randomBtn.addEventListener("click", onRandom);
resetBtn.addEventListener("click", onReset);
```

### Check

- [ ] „Zufällige Stimmung“ wechselt Farbe (manchmal auch Helligkeit)
- [ ] „Zurücksetzen“ bringt Teal `#2a9d8f` und Helligkeit 70 zurück

---

## Schritt 10 — RGB-Anzeige

**Ziel:** Unter den Controls stehen die aktuellen RGB-Zahlen.

### Hilfsfunktion in `script.js`:

```js
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
```

### Readout-Element + Update:

```js
const readout = document.getElementById("rgb-readout");

function updateReadout(hex) {
  const { r, g, b } = hexToRgb(hex);
  readout.textContent = `RGB ${r} · ${g} · ${b}`;
}
```

### In `applyMood` am Ende aufrufen:

```js
updateReadout(color);
```

(also innerhalb von `applyMood`, nach dem Setzen der Inputs)

### Check

- [ ] Start zeigt etwas wie `RGB 42 · 157 · 143`
- [ ] Bei Farbwechsel aktualisiert sich die Zeile

---

## Schritt 11 — Feinschliff (Motion)

**Ziel:** Sanfter Einstieg der Texte (optional, aber gut zum Lernen).

### In `styles.css` ergänzen:

```css
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.brand__name {
  animation: rise 0.9s ease both;
}

.brand__meta {
  animation: rise 0.9s ease 0.08s both;
}

.stage__title {
  animation: rise 1s ease 0.12s both;
}

.stage__lead {
  animation: rise 1s ease 0.2s both;
}

.controls {
  animation: rise 1s ease 0.28s both;
}

.readout {
  animation: rise 1s ease 0.36s both;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

> Hinweis: `.brand__name` usw. hast du schon definiert. **Animation-Zeilen** kannst du in die bestehenden Regeln einfügen — oder wie oben als Zusatzblock (Browser merged die Eigenschaften). Sauberer: Animation direkt in die bestehende Regel schreiben.

### Check

- [ ] Beim Laden erscheinen Texte leicht von unten
- [ ] Farbe/Helligkeit fühlen sich flüssig an (`transition` auf der Wash-Schicht)

---

## Fertig-Checkliste

- [ ] Farbe steuert die Atmosphäre
- [ ] Helligkeit steuert die Intensität
- [ ] Zufall setzt Farbe (+ ggf. Helligkeit)
- [ ] Reset stellt Defaults wieder her
- [ ] RGB-Zeile stimmt
- [ ] Keine Konsolenfehler
- [ ] Desktop und schmales Fenster sehen ok aus

Wenn alles abgehakt ist: **Projekt 01 geschafft.**

Optional vergleichen mit `loesungen/01-stimmungslicht/` (dort gibt’s noch ein Hintergrundbild — das ist Extra, kein Muss).

---

## Extra-Übungen (wenn du Lust hast)

1. Erweitere `PALETTE` um 3 eigene Farben.
2. Zeige zusätzlich den Hex-Wert neben RGB (z. B. `#2a9d8f`).
3. Baue einen Button „Pulsieren“, der die Helligkeit 2–3 Sekunden sanft hoch/runter animiert (`setInterval` oder CSS-Klasse).
4. Speichere die letzte Farbe in `localStorage`, damit sie nach Reload bleibt.

---

## Hilfe holen — so geht’s am schnellsten

Schreib im Chat:

1. **Welcher Schritt?** (z. B. „Schritt 7“)
2. **Was erwartest du?**
3. **Was passiert stattdessen?** (Text, Screenshot, Konsolenfehler)
4. **Relevante Datei** (HTML/CSS/JS) — gerne den aktuellen Stand posten

Dann debuggen wir gemeinsam — ohne dass ich das Projekt für dich fertig baue.
