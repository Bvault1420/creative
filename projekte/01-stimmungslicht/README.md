# Projekt 01 — Stimmungslicht

Ein interaktives Licht: Du wählst eine Farbe und eine Intensität, und der Raum verändert sich.

## Lernziele

- HTML: Seite strukturieren (`header`, `main`, `input`, `button`)
- CSS: Variablen (`--farbe`), Übergänge, Layout ohne Karten-Chaos
- JavaScript: Events (`input`, `click`), DOM lesen und schreiben

## Dateien

| Datei | Rolle |
|-------|--------|
| `index.html` | Struktur der Seite |
| `styles.css` | Aussehen und Animation |
| `script.js` | Interaktion (Farbe, Helligkeit, Zufall) |
| `assets/mood-bg.png` | Hintergrundbild |

## Aufgabe zum Üben

1. Öffne `script.js` und ändere die **Zufalls-Palette** (Array `PALETTE`).
2. Füge einen Button hinzu, der die Farbe langsam **pulsieren** lässt.
3. Schreibe unten in der Seite, welche RGB-Werte gerade aktiv sind.

## Starten

```bash
cd projekte/01-stimmungslicht
python3 -m http.server 5173
```

Dann im Browser: http://localhost:5173
