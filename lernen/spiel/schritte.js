window.SCHRITTE = [
  {
    nr: 1,
    titel: "HTML-Gerüst",
    ziel: "Eine Seite mit Titel, Punktestand und einem Button.",
    intro:
      "<p><strong>Ein Spiel braucht zuerst Gegenstände auf der Bühne.</strong> HTML sagt nur, was da ist: eine Überschrift, eine Punktezeile, ein Knopf. Noch kein Aussehen, noch kein Zählen — nur die Teile.</p><p>Merkbild: HTML = die Spielfiguren auf den Tisch legen.</p>",
    checks: [
      "Vorschau zeigt „Fang den Punkt“",
      "Darunter steht Punkte: 0 und ein Button",
    ],
    html: `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fang den Punkt</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Fang den Punkt</h1>
    <p id="score">Punkte: 0</p>
    <button type="button" id="dot">Tipp</button>
    <script src="script.js"></script>
  </body>
</html>`,
    css: "",
    js: "",
    neu: {
      html: `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fang den Punkt</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Fang den Punkt</h1>
    <p id="score">Punkte: 0</p>
    <button type="button" id="dot">Tipp</button>
    <script src="script.js"></script>
  </body>
</html>`,
      css: "",
      js: "",
    },
    wohin: { html: "Neue Datei index.html — komplett so tippen." },
    explain: {
      html: [
        { line: "<!DOCTYPE html>", mean: "Erste Zeile. Heißt: modernes HTML." },
        { line: '<html lang="de">', mean: "Die Seite beginnt. Deutsch." },
        { line: "<head>", mean: "Backstage: Titel und Dateien, unsichtbar." },
        { line: '<title>Fang den Punkt</title>', mean: "Name im Browser-Tab." },
        { line: '<link rel="stylesheet" href="styles.css" />', mean: "Holt später das Aussehen." },
        { line: "</head>", mean: "Backstage zu." },
        { line: "<body>", mean: "Die Bühne. Hier sieht man etwas." },
        { line: "<h1>Fang den Punkt</h1>", mean: "Die Überschrift. Eine Seite, ein h1." },
        { line: '<p id="score">Punkte: 0</p>', mean: "Punktestand. id=score ist der Name für JavaScript." },
        { line: '<button type="button" id="dot">Tipp</button>', mean: "Der Knopf, den du fängst. id=dot merken." },
        { line: '<script src="script.js"></script>', mean: "Holt später das Verhalten." },
        { line: "</body>", mean: "Bühne zu." },
        { line: "</html>", mean: "Datei zu." },
      ],
    },
  },
  {
    nr: 2,
    titel: "Kreis malen",
    ziel: "Der Button wird ein runder Punkt auf dunklem Grund.",
    intro:
      "<p><strong>CSS ist die Kostümprobe.</strong> Derselbe Button — jetzt ein Kreis, Koralle, dunkle Bühne. Wenig Regeln, klarer Auftrag: rund, groß genug zum Tippen.</p><p>Merkbild: <code>border-radius: 50%</code> macht aus einem Quadrat einen Ball.</p>",
    checks: [
      "Dunkler Hintergrund",
      "Der Button sieht aus wie ein Kreis",
    ],
    html: `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fang den Punkt</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Fang den Punkt</h1>
    <p id="score">Punkte: 0</p>
    <button type="button" id="dot">Tipp</button>
    <script src="script.js"></script>
  </body>
</html>`,
    css: `body {
  margin: 0;
  min-height: 100%;
  background: #12151a;
  color: #f4f0e8;
  font-family: sans-serif;
  text-align: center;
  padding-top: 1rem;
}

#dot {
  position: absolute;
  left: 40%;
  top: 40%;
  width: 72px;
  height: 72px;
  border: none;
  border-radius: 50%;
  background: #e76f51;
  color: #12151a;
  font-weight: 700;
}`,
    js: "",
    neu: {
      html: "",
      css: `body {
  margin: 0;
  min-height: 100%;
  background: #12151a;
  color: #f4f0e8;
  font-family: sans-serif;
  text-align: center;
  padding-top: 1rem;
}

#dot {
  position: absolute;
  left: 40%;
  top: 40%;
  width: 72px;
  height: 72px;
  border: none;
  border-radius: 50%;
  background: #e76f51;
  color: #12151a;
  font-weight: 700;
}`,
      js: "",
    },
    wohin: { css: "Neue Datei styles.css — komplett so anlegen." },
    explain: {
      css: [
        { line: "body {", mean: "Regeln für die ganze Seite." },
        { line: "margin: 0;", mean: "Keinen grauen Rand vom Browser." },
        { line: "min-height: 100%;", mean: "Mindestens so hoch wie das Fenster." },
        { line: "background: #12151a;", mean: "Dunkler Grund — die Nacht." },
        { line: "color: #f4f0e8;", mean: "Helle Schrift, damit man sie liest." },
        { line: "font-family: sans-serif;", mean: "Schlichte Schrift, kein Schnörkel." },
        { line: "text-align: center;", mean: "Titel und Punkte in der Mitte." },
        { line: "padding-top: 1rem;", mean: "Etwas Luft oben." },
        { line: "}", mean: "Body-Block zu." },
        { line: "#dot {", mean: "Nur das Element mit id=dot. Die Raute heißt id." },
        { line: "position: absolute;", mean: "Wir dürfen ihn später frei auf der Fläche schieben." },
        { line: "left: 40%;", mean: "Startposition von links." },
        { line: "top: 40%;", mean: "Startposition von oben." },
        { line: "width: 72px;", mean: "Breite. Zusammen mit height ein Quadrat." },
        { line: "height: 72px;", mean: "Höhe — gleich der Breite." },
        { line: "border: none;", mean: "Kein grauer Standard-Rahmen." },
        { line: "border-radius: 50%;", mean: "50 % Rundung = Kreis. Das Kostüm." },
        { line: "background: #e76f51;", mean: "Koralle. Gut sichtbar auf Dunkel." },
        { line: "color: #12151a;", mean: "Dunkle Schrift auf dem Kreis." },
        { line: "font-weight: 700;", mean: "Fett, damit „Tipp“ sitzt." },
        { line: "}", mean: "Kreis-Block zu." },
      ],
    },
  },
  {
    nr: 3,
    titel: "Punkte zählen",
    ziel: "Jeder Tipp zählt +1. Das Spiel beginnt.",
    intro:
      "<p><strong>JavaScript hört zu.</strong> Du tippst den Kreis. Das Skript holt die beiden Namensschilder <code>dot</code> und <code>score</code>, zählt eins hoch, schreibt die Zahl zurück auf die Bühne.</p><p>Merkbild: eine Schachtel <code>punkte</code> — jeder Klick legt eine Murmel hinein.</p>",
    checks: [
      "Tipp auf den Kreis erhöht die Punkte",
      "Die Zahl in der Zeile ändert sich",
    ],
    html: `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fang den Punkt</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Fang den Punkt</h1>
    <p id="score">Punkte: 0</p>
    <button type="button" id="dot">Tipp</button>
    <script src="script.js"></script>
  </body>
</html>`,
    css: `body {
  margin: 0;
  min-height: 100%;
  background: #12151a;
  color: #f4f0e8;
  font-family: sans-serif;
  text-align: center;
  padding-top: 1rem;
}

#dot {
  position: absolute;
  left: 40%;
  top: 40%;
  width: 72px;
  height: 72px;
  border: none;
  border-radius: 50%;
  background: #e76f51;
  color: #12151a;
  font-weight: 700;
}`,
    js: `const dot = document.getElementById("dot");
const score = document.getElementById("score");
let punkte = 0;

dot.addEventListener("click", function () {
  punkte = punkte + 1;
  score.textContent = "Punkte: " + punkte;
});`,
    neu: {
      html: "",
      css: "",
      js: `const dot = document.getElementById("dot");
const score = document.getElementById("score");
let punkte = 0;

dot.addEventListener("click", function () {
  punkte = punkte + 1;
  score.textContent = "Punkte: " + punkte;
});`,
    },
    wohin: { js: "Neue Datei script.js — komplett so anlegen." },
    explain: {
      js: [
        { line: 'const dot = document.getElementById("dot");', mean: "Holt den Kreis. Der String muss exakt zur id passen." },
        { line: 'const score = document.getElementById("score");', mean: "Holt die Punktezeile." },
        { line: "let punkte = 0;", mean: "let = diese Zahl darf sich ändern. Start: null." },
        { line: 'dot.addEventListener("click", function () {', mean: "Wenn jemand den Kreis antippt, läuft der Block." },
        { line: "punkte = punkte + 1;", mean: "Eine Murmel mehr in der Schachtel." },
        { line: 'score.textContent = "Punkte: " + punkte;', mean: "Text auf der Seite neu schreiben. Plus klebt Text und Zahl zusammen." },
        { line: "});", mean: "Zuhören zu." },
      ],
    },
  },
  {
    nr: 4,
    titel: "Der Punkt flieht",
    ziel: "Nach jedem Tipp springt der Kreis woanders hin.",
    intro:
      "<p><strong>Jetzt wird es ein Spiel.</strong> Zählen allein ist langweilig. Nach dem Treffer zieht der Punkt um — zufällig, aber auf der Fläche. <code>Math.random()</code> würfelt eine Zahl zwischen 0 und 1. Du machst daraus Prozent für links und oben.</p>",
    checks: [
      "Nach einem Tipp springt der Kreis",
      "Punkte zählen weiter hoch",
    ],
    html: `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fang den Punkt</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Fang den Punkt</h1>
    <p id="score">Punkte: 0</p>
    <button type="button" id="dot">Tipp</button>
    <script src="script.js"></script>
  </body>
</html>`,
    css: `body {
  margin: 0;
  min-height: 100%;
  background: #12151a;
  color: #f4f0e8;
  font-family: sans-serif;
  text-align: center;
  padding-top: 1rem;
}

#dot {
  position: absolute;
  left: 40%;
  top: 40%;
  width: 72px;
  height: 72px;
  border: none;
  border-radius: 50%;
  background: #e76f51;
  color: #12151a;
  font-weight: 700;
}`,
    js: `const dot = document.getElementById("dot");
const score = document.getElementById("score");
let punkte = 0;

dot.addEventListener("click", function () {
  punkte = punkte + 1;
  score.textContent = "Punkte: " + punkte;
  dot.style.left = Math.random() * 70 + "%";
  dot.style.top = Math.random() * 55 + 25 + "%";
});`,
    neu: {
      html: "",
      css: "",
      js: `  dot.style.left = Math.random() * 70 + "%";
  dot.style.top = Math.random() * 55 + 25 + "%";`,
    },
    wohin: {
      js: "In script.js in die click-Funktion, direkt unter die Punkte-Zeile.",
    },
    explain: {
      js: [
        { line: "dot.style.left = Math.random() * 70 + \"%\";", mean: "Zufall mal 70, plus %. Der Kreis rutscht nach links irgendwohin." },
        { line: "dot.style.top = Math.random() * 55 + 25 + \"%\";", mean: "Von oben: mindestens 25 %, damit er nicht unter dem Titel klebt." },
      ],
    },
  },
  {
    nr: 5,
    titel: "Gewonnen",
    ziel: "Bei 10 Punkten ist Schluss — du hast ihn oft genug gefangen.",
    intro:
      "<p><strong>Jedes Spiel braucht ein Ende.</strong> <code>if</code> ist eine Tür: nur wenn die Bedingung stimmt, geht es durch. Zehn Treffer, dann steht Gewonnen in der Punktezeile. Fertig — das ist das ganze Spiel.</p>",
    checks: [
      "Nach 10 Tipps steht Gewonnen",
      "Der Kreis zeigt ein Gesicht oder bleibt stehen",
    ],
    html: `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fang den Punkt</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Fang den Punkt</h1>
    <p id="score">Punkte: 0</p>
    <button type="button" id="dot">Tipp</button>
    <script src="script.js"></script>
  </body>
</html>`,
    css: `body {
  margin: 0;
  min-height: 100%;
  background: #12151a;
  color: #f4f0e8;
  font-family: sans-serif;
  text-align: center;
  padding-top: 1rem;
}

#dot {
  position: absolute;
  left: 40%;
  top: 40%;
  width: 72px;
  height: 72px;
  border: none;
  border-radius: 50%;
  background: #e76f51;
  color: #12151a;
  font-weight: 700;
}`,
    js: `const dot = document.getElementById("dot");
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
});`,
    neu: {
      html: "",
      css: "",
      js: `  if (punkte >= 10) {
    score.textContent = "Gewonnen!";
    dot.textContent = ":)";
  }`,
    },
    wohin: { js: "Unten in der click-Funktion, nach dem Springen." },
    explain: {
      js: [
        { line: "if (punkte >= 10) {", mean: "Tür: nur wenn punkte 10 oder mehr ist." },
        { line: 'score.textContent = "Gewonnen!";', mean: "Die Zeile feiert statt zu zählen." },
        { line: 'dot.textContent = ":)";', mean: "Der Kreis grinst. Kleines Ende, klarer Sieg." },
        { line: "}", mean: "Tür zu." },
      ],
    },
  },
];
