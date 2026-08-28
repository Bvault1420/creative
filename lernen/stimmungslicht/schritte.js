window.SCHRITTE = [
  {
    "nr": 1,
    "titel": "HTML-Grundgerüst",
    "ziel": "Eine gültige Seite, die „Hallo“ zeigt.",
    "intro": "<p><strong>HTML ist das Skelett.</strong> Es sagt nur, <em>was</em> da ist — noch nicht, wie es aussieht. Ohne Gerüst bleibt der Browser leer. Du baust jetzt die kleinste gültige Seite: Kopf für den Browser, Körper fürs Auge.</p><p>Merkbild: HTML = Bauzeichnung. CSS = Licht und Material. JS = Bewegung.</p>",
    "checks": [
      "Vorschau zeigt die Überschrift Stimmungslicht",
      "Darunter der Satz „Seite lädt — Schritt 1 ok.“"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <h1>Stimmungslicht</h1>\n    <p>Seite lädt — Schritt 1 ok.</p>\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": "",
    "js": "",
    "neu": {
      "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <h1>Stimmungslicht</h1>\n    <p>Seite lädt — Schritt 1 ok.</p>\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
      "css": "",
      "js": ""
    },
    "wohin": {
      "html": "Neue Datei index.html — komplett so anlegen."
    },
    "explain": {
      "html": [
        {
          "line": "<!DOCTYPE html>",
          "mean": "Erste Zeile, immer. Heißt: das ist modernes HTML, nicht ein Altdokument."
        },
        {
          "line": "<html lang=\"de\">",
          "mean": "Die Seite beginnt. lang=de hilft Screenreadern und der Rechtschreibung."
        },
        {
          "line": "<head>",
          "mean": "Backstage: Titel, Zeichensatz, Dateien. Hier sieht niemand etwas."
        },
        {
          "line": "<meta charset=\"UTF-8\" />",
          "mean": "Damit ä, ö, ü und ß nicht als Kringel landen."
        },
        {
          "line": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
          "mean": "Ein Viewport = die Seite nimmt die echte Handybreite, statt winzig zu zoomen."
        },
        {
          "line": "<title>Stimmungslicht — creative</title>",
          "mean": "Was im Tab steht. Auch das ist Teil des ersten Eindrucks."
        },
        {
          "line": "<link rel=\"stylesheet\" href=\"styles.css\" />",
          "mean": "Hol das Aussehen aus styles.css. Ohne diese Zeile bleibt CSS wirkungslos."
        },
        {
          "line": "</head>",
          "mean": "Backstage zu. Ab hier kommt, was man sieht."
        },
        {
          "line": "<body>",
          "mean": "Die Bühne. Alles Sichtbare lebt hier."
        },
        {
          "line": "<h1>Stimmungslicht</h1>",
          "mean": "Eine Seite, eine Hauptüberschrift. h1 ist der lauteste Titel."
        },
        {
          "line": "<p>Seite lädt — Schritt 1 ok.</p>",
          "mean": "Ein Absatz. So prüfst du: die Datei kommt wirklich an."
        },
        {
          "line": "<script src=\"script.js\"></script>",
          "mean": "Hol das Verhalten aus script.js. Steht am Ende, damit das HTML schon da ist."
        },
        {
          "line": "</body>",
          "mean": "Bühne zu."
        },
        {
          "line": "</html>",
          "mean": "Datei zu. Nichts mehr danach."
        }
      ]
    }
  },
  {
    "nr": 2,
    "titel": "CSS-Basis & Variablen",
    "ziel": "Dunkler Hintergrund, lesbare Schrift, zentrale Farben.",
    "intro": "<p><strong>CSS ist das Licht.</strong> Dieselbe Seite, neuer Charakter: dunkel, ruhig, eine Schrift mit Absicht. In <code>:root</code> legst du Farben auf einen Zettel — ein Name, den die ganze Seite kennt.</p><p>Merkbild: <code>var(--text)</code> heißt nicht „rate die Farbe“, sondern „hol sie vom Zettel“. Später tauscht JavaScript nur den Zettel, nicht jedes Element.</p>",
    "checks": [
      "Vorschau ist dunkel, Text hell",
      "Schrift wirkt nicht mehr wie Standard-Times/Arial"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <h1>Stimmungslicht</h1>\n    <p>Seite lädt — Schritt 1 ok.</p>\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n",
    "js": "",
    "neu": {
      "html": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n<link\n  href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n  rel=\"stylesheet\"\n/>",
      "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n",
      "js": ""
    },
    "wohin": {
      "html": "Im <head> von index.html einfügen, direkt vor dem Link zu styles.css.",
      "css": "Neue Datei styles.css — komplett so anlegen."
    },
    "explain": {
      "html": [
        {
          "line": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />",
          "mean": "Verbindung zu Google Fonts vorbereiten (schneller)."
        },
        {
          "line": "<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />",
          "mean": "Zweite Vorverbindung für die Schriftdateien."
        },
        {
          "line": "<link",
          "mean": "Beginn des Schrift-Links (geht über mehrere Zeilen)."
        },
        {
          "line": "href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"",
          "mean": "Welche Schriften: Fraunces (Überschriften) und Outfit (Text)."
        },
        {
          "line": "rel=\"stylesheet\"",
          "mean": "Das ist eine Stylesheet-Datei, keine normale Webseite."
        },
        {
          "line": "/>",
          "mean": "Dieser Link-Tag ist zu Ende."
        }
      ],
      "css": [
        {
          "line": ":root {",
          "mean": "Der Zettel der ganzen Seite. Was hier steht, gilt überall — ein Ort, nicht sieben Kopien."
        },
        {
          "line": "--farbe: #2a9d8f;",
          "mean": "Name --farbe, Wert Teal. Später tauscht JS nur diesen Namen, nicht jedes Element."
        },
        {
          "line": "--helligkeit: 70%;",
          "mean": "Wie stark das Licht steht. Prozent, weil Farbe und Stärke zusammenwirken."
        },
        {
          "line": "--text: #f4f0e8;",
          "mean": "Creme auf Dunkel. So bleibt Schrift lesbar, ohne grell zu werden."
        },
        {
          "line": "--ink: #12151a;",
          "mean": "Die Nacht der Seite. Fast schwarz, aber nicht drucker-schwarz."
        },
        {
          "line": "}",
          "mean": "Zettel zu. Die Namen leben weiter, der Block ist nur die Definition."
        },
        {
          "line": "*,",
          "mean": "Sternchen = wirklich jedes Element. Das Komma heißt: und außerdem …"
        },
        {
          "line": "*::before,",
          "mean": "Geisterstück vor dem Inhalt, falls CSS eines erzeugt. Auch das muss mitgerechnet werden."
        },
        {
          "line": "*::after {",
          "mean": "Geisterstück danach. { öffnet die gemeinsame Regel für alle drei."
        },
        {
          "line": "box-sizing: border-box;",
          "mean": "Die Kiste wird von außen gemessen. Futter und Rahmen sind schon in der Breite — sonst rechnet der Browser gegen dich."
        },
        {
          "line": "}",
          "mean": "Reset zu. Ab hier darfst du Breiten ernst nehmen."
        },
        {
          "line": "html,",
          "mean": "Das Dokument selbst, und …"
        },
        {
          "line": "body {",
          "mean": "… die Bühne. Beide: kein Rand, volle Höhe. Sonst bleibt ein Grausaum vom Browser."
        },
        {
          "line": "margin: 0;",
          "mean": "Den Standard-Rand abschneiden. Wir bestimmen den Abstand, nicht der Browser."
        },
        {
          "line": "min-height: 100%;",
          "mean": "Mindestens so hoch wie das Fenster. Kein halbes Blatt."
        },
        {
          "line": "}",
          "mean": "Grundfläche steht."
        },
        {
          "line": "body {",
          "mean": "Zweiter Anlauf nur für den body: Schrift, Textfarbe, Hintergrund."
        },
        {
          "line": "font-family: \"Outfit\", sans-serif;",
          "mean": "Outfit zuerst. Kommt sie nicht, irgendeine serifenlose — nie Times als Unfall."
        },
        {
          "line": "color: var(--text);",
          "mean": "Nicht die Creme-Farbe hart eintragen: den Namen vom Zettel holen."
        },
        {
          "line": "background: var(--ink);",
          "mean": "Hintergrund vom selben Zettel. Ein Tausch in :root färbt beides um."
        },
        {
          "line": "}",
          "mean": "Basis steht. Die Seite hat jetzt Charakter, noch keine Komposition."
        }
      ]
    }
  },
  {
    "nr": 3,
    "titel": "Atmosphäre",
    "ziel": "Eine farbige Schicht, die wir später steuern.",
    "intro": "<p><strong>Die Atmosphäre liegt hinter allem.</strong> Eine Schicht färbt den Raum, ohne den Text zu stehlen. Du malst nicht Buchstabe für Buchstabe — du dimmst ein Licht. Genau das drehst du später am Regler.</p>",
    "checks": [
      "Du siehst einen teal/grünen Glow",
      "Der Text bleibt lesbar"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <div class=\"atmosphere\" aria-hidden=\"true\">\n      <div class=\"atmosphere__wash\" id=\"wash\"></div>\n    </div>\n    <h1>Stimmungslicht</h1>\n    <p>Seite lädt — Schritt 1 ok.</p>\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n\n.atmosphere {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.atmosphere__wash {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    ellipse 80% 70% at 50% 40%,\n    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),\n    rgb(8 10 14 / 0.9)\n  );\n  transition: background 0.5s ease;\n}\n",
    "js": "",
    "neu": {
      "html": "<div class=\"atmosphere\" aria-hidden=\"true\">\n  <div class=\"atmosphere__wash\" id=\"wash\"></div>\n</div>",
      "css": ".atmosphere {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.atmosphere__wash {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    ellipse 80% 70% at 50% 40%,\n    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),\n    rgb(8 10 14 / 0.9)\n  );\n  transition: background 0.5s ease;\n}\n",
      "js": ""
    },
    "wohin": {
      "html": "Ganz oben im <body>, noch vor der Überschrift einfügen.",
      "css": "Unten in styles.css anhängen."
    },
    "explain": {
      "html": [
        {
          "line": "<div class=\"atmosphere\" aria-hidden=\"true\">",
          "mean": "Farb-Schicht im Hintergrund. aria-hidden: Screenreader ignorieren sie."
        },
        {
          "line": "<div class=\"atmosphere__wash\" id=\"wash\"></div>",
          "mean": "Die eigentliche Farbfläche. id=wash brauchen wir später nicht zwingend."
        },
        {
          "line": "</div>",
          "mean": "Hintergrund-Schicht zu Ende."
        }
      ],
      "css": [
        {
          "line": ".atmosphere {",
          "mean": "Die hintere Wand des Raums. Klasse mit Punkt: ein Name, den HTML tragen muss."
        },
        {
          "line": "position: fixed;",
          "mean": "Klebt am Fenster. Scrollt der Inhalt, das Licht bleibt."
        },
        {
          "line": "inset: 0;",
          "mean": "Oben, rechts, unten, links = 0. Kurzform für: füll alles."
        },
        {
          "line": "z-index: 0;",
          "mean": "Hinten. Text bekommt später 1 und tritt davor — wie Kulisse und Schauspieler."
        },
        {
          "line": "pointer-events: none;",
          "mean": "Diese Wand fängt keine Klicks. Finger gehen durch zum Inhalt."
        },
        {
          "line": "}",
          "mean": "Wand steht."
        },
        {
          "line": ".atmosphere__wash {",
          "mean": "Die Farbwäsche auf der Wand. BEM-Name: gehört zur Atmosphere."
        },
        {
          "line": "position: absolute;",
          "mean": "Füllt die Wand, nicht das Fenster selbst."
        },
        {
          "line": "inset: 0;",
          "mean": "Wieder volle Fläche."
        },
        {
          "line": "background: radial-gradient(",
          "mean": "Kein Flächenton: ein Verlauf von einem Kern nach außen."
        },
        {
          "line": "ellipse 80% 70% at 50% 40%,",
          "mean": "Der Kern sitzt mittig, etwas über der Mitte — wie Licht von vorn."
        },
        {
          "line": "color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),",
          "mean": "Farbe vom Zettel, Stärke vom Zettel, Rest Luft. Genau deshalb wirken die Regler."
        },
        {
          "line": "rgb(8 10 14 / 0.9)",
          "mean": "Nach außen Nacht. Der Verlauf braucht ein Ende, sonst wirkt er billig."
        },
        {
          "line": ");",
          "mean": "Verlauf zu."
        },
        {
          "line": "transition: background 0.5s ease;",
          "mean": "Ein halbe Sekunde weich. Licht springt nicht, es atmet."
        },
        {
          "line": "}",
          "mean": "Wäsche zu. Ab jetzt ist --farbe sichtbar, nicht nur definiert."
        }
      ]
    }
  },
  {
    "nr": 4,
    "titel": "Brand + Bühne",
    "ziel": "Marke oben, Titel unten — eine klare Komposition.",
    "intro": "<p><strong>Eine Bühne, kein Kartenstapel.</strong> Marke oben, Titel unten. Flexbox schiebt den Inhalt an seinen Platz, <code>clamp</code> lässt die Schrift mit dem Bildschirm atmen — auf dem Handy genauso wie am Rechner.</p>",
    "checks": [
      "Oben: creative und Projekt 01",
      "Unten: großer Titel + kurzer Text"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <div class=\"atmosphere\" aria-hidden=\"true\">\n      <div class=\"atmosphere__wash\" id=\"wash\"></div>\n    </div>\n\n    <header class=\"brand\">\n      <p class=\"brand__name\">creative</p>\n      <p class=\"brand__meta\">Projekt 01</p>\n    </header>\n\n    <main class=\"stage\">\n      <h1 class=\"stage__title\">Stimmungslicht</h1>\n      <p class=\"stage__lead\">\n        Wähle Farbe und Helligkeit — der Raum folgt dir.\n      </p>\n    </main>\n\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n\n.atmosphere {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.atmosphere__wash {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    ellipse 80% 70% at 50% 40%,\n    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),\n    rgb(8 10 14 / 0.9)\n  );\n  transition: background 0.5s ease;\n}\n\n.brand {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);\n}\n\n.brand__name {\n  margin: 0;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2rem, 5vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.brand__meta {\n  margin: 0;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\n.stage {\n  position: relative;\n  z-index: 1;\n  min-height: calc(100vh - 5.5rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);\n  max-width: 40rem;\n}\n\n.stage__title {\n  margin: 0 0 0.65rem;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2.4rem, 7vw, 4rem);\n  font-weight: 500;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n\n.stage__lead {\n  margin: 0;\n  font-size: clamp(1.05rem, 2.4vw, 1.25rem);\n  line-height: 1.45;\n  opacity: 0.8;\n  max-width: 28ch;\n}\n",
    "js": "",
    "neu": {
      "html": "<header class=\"brand\">\n  <p class=\"brand__name\">creative</p>\n  <p class=\"brand__meta\">Projekt 01</p>\n</header>\n\n<main class=\"stage\">\n  <h1 class=\"stage__title\">Stimmungslicht</h1>\n  <p class=\"stage__lead\">\n    Wähle Farbe und Helligkeit — der Raum folgt dir.\n  </p>\n</main>",
      "css": ".brand {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);\n}\n\n.brand__name {\n  margin: 0;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2rem, 5vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.brand__meta {\n  margin: 0;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\n.stage {\n  position: relative;\n  z-index: 1;\n  min-height: calc(100vh - 5.5rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);\n  max-width: 40rem;\n}\n\n.stage__title {\n  margin: 0 0 0.65rem;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2.4rem, 7vw, 4rem);\n  font-weight: 500;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n\n.stage__lead {\n  margin: 0;\n  font-size: clamp(1.05rem, 2.4vw, 1.25rem);\n  line-height: 1.45;\n  opacity: 0.8;\n  max-width: 28ch;\n}\n",
      "js": ""
    },
    "wohin": {
      "html": "Die alte h1 und den Absatz im body ersetzen durch diese Bühne. Die Atmosphere-Zeilen davor bleiben.",
      "css": "Unten in styles.css anhängen."
    },
    "explain": {
      "html": [
        {
          "line": "<header class=\"brand\">",
          "mean": "Kopfzeile der Seite: Marke links, Meta rechts."
        },
        {
          "line": "<p class=\"brand__name\">creative</p>",
          "mean": "Der Name creative, groß gesetzt."
        },
        {
          "line": "<p class=\"brand__meta\">Projekt 01</p>",
          "mean": "Kleine Kennzeichnung rechts oben."
        },
        {
          "line": "</header>",
          "mean": "Kopfzeile zu Ende."
        },
        {
          "line": "<main class=\"stage\">",
          "mean": "Hauptbereich. Hier liegt der sichtbare Inhalt."
        },
        {
          "line": "<h1 class=\"stage__title\">Stimmungslicht</h1>",
          "mean": "Der große Titel unten auf der Bühne."
        },
        {
          "line": "<p class=\"stage__lead\">",
          "mean": "Einleitungstext beginnt."
        },
        {
          "line": "Wähle Farbe und Helligkeit — der Raum folgt dir.",
          "mean": "Der Satz, den die Besucher lesen."
        },
        {
          "line": "</p>",
          "mean": "Einleitungstext zu Ende."
        },
        {
          "line": "</main>",
          "mean": "Hauptbereich zu Ende."
        }
      ],
      "css": [
        {
          "line": ".brand {",
          "mean": "Kopfzeile mit dem Namen creative."
        },
        {
          "line": "position: relative;",
          "mean": "Kann über dem Hintergrund liegen."
        },
        {
          "line": "z-index: 1;",
          "mean": "Vor der Atmosphere (die hat 0)."
        },
        {
          "line": "display: flex;",
          "mean": "Elemente in einer Reihe."
        },
        {
          "line": "align-items: baseline;",
          "mean": "An der Schriftlinie ausrichten."
        },
        {
          "line": "justify-content: space-between;",
          "mean": "Eins links, eins rechts."
        },
        {
          "line": "padding: 1.5rem clamp(1.25rem, 4vw, 3rem);",
          "mean": "Innenabstand; clamp = skaliert mit der Breite."
        },
        {
          "line": "}",
          "mean": "Brand-Block zu Ende."
        },
        {
          "line": ".brand__name {",
          "mean": "Das Wort creative."
        },
        {
          "line": "margin: 0;",
          "mean": "Kein extra Abstand um den Absatz."
        },
        {
          "line": "font-family: \"Fraunces\", serif;",
          "mean": "Serifen-Schrift für den Namen."
        },
        {
          "line": "font-size: clamp(2rem, 5vw, 3.25rem);",
          "mean": "Größe zwischen 2rem und 3.25rem, je nach Screen."
        },
        {
          "line": "font-weight: 700;",
          "mean": "Fett."
        },
        {
          "line": "letter-spacing: -0.03em;",
          "mean": "Buchstaben etwas enger."
        },
        {
          "line": "line-height: 1;",
          "mean": "Zeilenhöhe eng, eine Zeile."
        },
        {
          "line": "}",
          "mean": "Name-Block zu Ende."
        },
        {
          "line": ".brand__meta {",
          "mean": "Der Text Projekt 01."
        },
        {
          "line": "margin: 0;",
          "mean": "Kein extra Abstand."
        },
        {
          "line": "font-size: 0.85rem;",
          "mean": "Kleiner als der Name."
        },
        {
          "line": "letter-spacing: 0.08em;",
          "mean": "Buchstaben etwas weiter."
        },
        {
          "line": "text-transform: uppercase;",
          "mean": "Alles in GROSSBUCHSTABEN."
        },
        {
          "line": "opacity: 0.75;",
          "mean": "Etwas durchsichtig, zurückhaltend."
        },
        {
          "line": "}",
          "mean": "Meta-Block zu Ende."
        },
        {
          "line": ".stage {",
          "mean": "Die Bühne unten: Titel und Text."
        },
        {
          "line": "position: relative;",
          "mean": "Über dem Hintergrund."
        },
        {
          "line": "z-index: 1;",
          "mean": "Vor der Atmosphere."
        },
        {
          "line": "min-height: calc(100vh - 5.5rem);",
          "mean": "Fast die ganze Fensterhöhe minus Kopfzeile."
        },
        {
          "line": "display: flex;",
          "mean": "Flexbox, Inhalt wird gestapelt."
        },
        {
          "line": "flex-direction: column;",
          "mean": "Untereinander, nicht nebeneinander."
        },
        {
          "line": "justify-content: flex-end;",
          "mean": "Alles nach unten schieben."
        },
        {
          "line": "padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);",
          "mean": "Innenabstand links/rechts/unten."
        },
        {
          "line": "max-width: 40rem;",
          "mean": "Nicht breiter als 40rem, damit Zeilen lesbar bleiben."
        },
        {
          "line": "}",
          "mean": "Stage-Block zu Ende."
        },
        {
          "line": ".stage__title {",
          "mean": "Die große Überschrift Stimmungslicht."
        },
        {
          "line": "margin: 0 0 0.65rem;",
          "mean": "Kein Rand außer etwas Abstand nach unten."
        },
        {
          "line": "font-family: \"Fraunces\", serif;",
          "mean": "Wieder die Serifen-Schrift."
        },
        {
          "line": "font-size: clamp(2.4rem, 7vw, 4rem);",
          "mean": "Sehr groß, skaliert mit dem Screen."
        },
        {
          "line": "font-weight: 500;",
          "mean": "Mittel-fett."
        },
        {
          "line": "letter-spacing: -0.03em;",
          "mean": "Etwas enger."
        },
        {
          "line": "line-height: 1.05;",
          "mean": "Zeilen fast ohne Lücke."
        },
        {
          "line": "}",
          "mean": "Titel-Block zu Ende."
        },
        {
          "line": ".stage__lead {",
          "mean": "Der Satz unter dem Titel."
        },
        {
          "line": "margin: 0;",
          "mean": "Kein extra Außenabstand."
        },
        {
          "line": "font-size: clamp(1.05rem, 2.4vw, 1.25rem);",
          "mean": "Lesbare Größe, etwas skalierend."
        },
        {
          "line": "line-height: 1.45;",
          "mean": "Luft zwischen den Zeilen."
        },
        {
          "line": "opacity: 0.8;",
          "mean": "Etwas leiser als der Titel."
        },
        {
          "line": "max-width: 28ch;",
          "mean": "Maximal ~28 Zeichen pro Zeile."
        },
        {
          "line": "}",
          "mean": "Lead-Block zu Ende."
        }
      ]
    }
  },
  {
    "nr": 5,
    "titel": "Steuerelemente (HTML)",
    "ziel": "Farbfeld, Slider, zwei Buttons, RGB-Zeile.",
    "intro": "<p><strong>Zuerst die Knöpfe, dann der Strom.</strong> Farbfeld, Slider, zwei Buttons: der Browser bringt sie mit. Die <code>id</code> ist der Name auf dem Klingelschild — JavaScript findet nur, was genau so heißt.</p>",
    "checks": [
      "Farbfeld, Slider und Buttons sind sichtbar",
      "Klicken ändert die Stimmung noch nicht"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <div class=\"atmosphere\" aria-hidden=\"true\">\n      <div class=\"atmosphere__wash\" id=\"wash\"></div>\n    </div>\n\n    <header class=\"brand\">\n      <p class=\"brand__name\">creative</p>\n      <p class=\"brand__meta\">Projekt 01</p>\n    </header>\n\n    <main class=\"stage\">\n      <h1 class=\"stage__title\">Stimmungslicht</h1>\n      <p class=\"stage__lead\">\n        Wähle Farbe und Helligkeit — der Raum folgt dir.\n      </p>\n\n      <div class=\"controls\" role=\"group\" aria-label=\"Lichtsteuerung\">\n        <label class=\"field\">\n          <span class=\"field__label\">Farbe</span>\n          <input type=\"color\" id=\"color\" value=\"#2a9d8f\" />\n        </label>\n\n        <label class=\"field field--range\">\n          <span class=\"field__label\">Helligkeit</span>\n          <input type=\"range\" id=\"brightness\" min=\"15\" max=\"100\" value=\"70\" />\n        </label>\n\n        <div class=\"actions\">\n          <button type=\"button\" class=\"btn\" id=\"random\">Zufällige Stimmung</button>\n          <button type=\"button\" class=\"btn btn--ghost\" id=\"reset\">Zurücksetzen</button>\n        </div>\n      </div>\n\n      <p class=\"readout\" id=\"rgb-readout\" aria-live=\"polite\">RGB —</p>\n    </main>\n\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n\n.atmosphere {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.atmosphere__wash {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    ellipse 80% 70% at 50% 40%,\n    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),\n    rgb(8 10 14 / 0.9)\n  );\n  transition: background 0.5s ease;\n}\n\n.brand {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);\n}\n\n.brand__name {\n  margin: 0;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2rem, 5vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.brand__meta {\n  margin: 0;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\n.stage {\n  position: relative;\n  z-index: 1;\n  min-height: calc(100vh - 5.5rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);\n  max-width: 40rem;\n}\n\n.stage__title {\n  margin: 0 0 0.65rem;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2.4rem, 7vw, 4rem);\n  font-weight: 500;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n\n.stage__lead {\n  margin: 0;\n  font-size: clamp(1.05rem, 2.4vw, 1.25rem);\n  line-height: 1.45;\n  opacity: 0.8;\n  max-width: 28ch;\n}\n",
    "js": "",
    "neu": {
      "html": "<div class=\"controls\" role=\"group\" aria-label=\"Lichtsteuerung\">\n  <label class=\"field\">\n    <span class=\"field__label\">Farbe</span>\n    <input type=\"color\" id=\"color\" value=\"#2a9d8f\" />\n  </label>\n\n  <label class=\"field field--range\">\n    <span class=\"field__label\">Helligkeit</span>\n    <input type=\"range\" id=\"brightness\" min=\"15\" max=\"100\" value=\"70\" />\n  </label>\n\n  <div class=\"actions\">\n    <button type=\"button\" class=\"btn\" id=\"random\">Zufällige Stimmung</button>\n    <button type=\"button\" class=\"btn btn--ghost\" id=\"reset\">Zurücksetzen</button>\n  </div>\n</div>\n\n<p class=\"readout\" id=\"rgb-readout\" aria-live=\"polite\">RGB —</p>",
      "css": "",
      "js": ""
    },
    "wohin": {
      "html": "Innerhalb von <main class=\"stage\">, nach dem Lead-Absatz einfügen."
    },
    "explain": {
      "html": [
        {
          "line": "<div class=\"controls\" role=\"group\" aria-label=\"Lichtsteuerung\">",
          "mean": "Gruppe aller Regler. aria-label erklärt den Block."
        },
        {
          "line": "<label class=\"field\">",
          "mean": "Ein Feld: Label + Eingabe gehören zusammen."
        },
        {
          "line": "<span class=\"field__label\">Farbe</span>",
          "mean": "Beschriftung über dem Farbfeld."
        },
        {
          "line": "<input type=\"color\" id=\"color\" value=\"#2a9d8f\" />",
          "mean": "Eingebautes Farbfeld. id=color ist der Name für JavaScript."
        },
        {
          "line": "</label>",
          "mean": "Farb-Feld zu Ende."
        },
        {
          "line": "<label class=\"field field--range\">",
          "mean": "Zweites Feld, diesmal der Slider."
        },
        {
          "line": "<span class=\"field__label\">Helligkeit</span>",
          "mean": "Beschriftung über dem Slider."
        },
        {
          "line": "<input type=\"range\" id=\"brightness\" min=\"15\" max=\"100\" value=\"70\" />",
          "mean": "Slider von 15 bis 100, Start 70. id=brightness für JS."
        },
        {
          "line": "</label>",
          "mean": "Helligkeits-Feld zu Ende."
        },
        {
          "line": "<div class=\"actions\">",
          "mean": "Reihe für die Buttons."
        },
        {
          "line": "<button type=\"button\" class=\"btn\" id=\"random\">Zufällige Stimmung</button>",
          "mean": "Button Zufall. type=button = kein Formular-Absenden."
        },
        {
          "line": "<button type=\"button\" class=\"btn btn--ghost\" id=\"reset\">Zurücksetzen</button>",
          "mean": "Button Reset, später als Outline gestylt."
        },
        {
          "line": "</div>",
          "mean": "Button-Reihe zu Ende."
        },
        {
          "line": "</div>",
          "mean": "Controls-Gruppe zu Ende."
        },
        {
          "line": "<p class=\"readout\" id=\"rgb-readout\" aria-live=\"polite\">RGB —</p>",
          "mean": "Zeile für RGB-Zahlen. aria-live: Screenreader liest Änderungen vor."
        }
      ]
    }
  },
  {
    "nr": 6,
    "titel": "Steuerelemente stylen",
    "ziel": "Controls sollen absichtlich aussehen, nicht nach Rohling.",
    "intro": "<p><strong>Absicht statt Rohling.</strong> Dieselben Controls, aber sie gehören zur Fläche: Labels wie Beschriftungen an einem Mischpult, ein gefüllter Button, einer nur als Linie.</p>",
    "checks": [
      "Buttons haben klaren Stil",
      "Slider nutzt die Teal-Farbe"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <div class=\"atmosphere\" aria-hidden=\"true\">\n      <div class=\"atmosphere__wash\" id=\"wash\"></div>\n    </div>\n\n    <header class=\"brand\">\n      <p class=\"brand__name\">creative</p>\n      <p class=\"brand__meta\">Projekt 01</p>\n    </header>\n\n    <main class=\"stage\">\n      <h1 class=\"stage__title\">Stimmungslicht</h1>\n      <p class=\"stage__lead\">\n        Wähle Farbe und Helligkeit — der Raum folgt dir.\n      </p>\n\n      <div class=\"controls\" role=\"group\" aria-label=\"Lichtsteuerung\">\n        <label class=\"field\">\n          <span class=\"field__label\">Farbe</span>\n          <input type=\"color\" id=\"color\" value=\"#2a9d8f\" />\n        </label>\n\n        <label class=\"field field--range\">\n          <span class=\"field__label\">Helligkeit</span>\n          <input type=\"range\" id=\"brightness\" min=\"15\" max=\"100\" value=\"70\" />\n        </label>\n\n        <div class=\"actions\">\n          <button type=\"button\" class=\"btn\" id=\"random\">Zufällige Stimmung</button>\n          <button type=\"button\" class=\"btn btn--ghost\" id=\"reset\">Zurücksetzen</button>\n        </div>\n      </div>\n\n      <p class=\"readout\" id=\"rgb-readout\" aria-live=\"polite\">RGB —</p>\n    </main>\n\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n\n.atmosphere {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.atmosphere__wash {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    ellipse 80% 70% at 50% 40%,\n    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),\n    rgb(8 10 14 / 0.9)\n  );\n  transition: background 0.5s ease;\n}\n\n.brand {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);\n}\n\n.brand__name {\n  margin: 0;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2rem, 5vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.brand__meta {\n  margin: 0;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\n.stage {\n  position: relative;\n  z-index: 1;\n  min-height: calc(100vh - 5.5rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);\n  max-width: 40rem;\n}\n\n.stage__title {\n  margin: 0 0 0.65rem;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2.4rem, 7vw, 4rem);\n  font-weight: 500;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n\n.stage__lead {\n  margin: 0;\n  font-size: clamp(1.05rem, 2.4vw, 1.25rem);\n  line-height: 1.45;\n  opacity: 0.8;\n  max-width: 28ch;\n}\n\n.controls {\n  display: grid;\n  gap: 1.1rem;\n  margin-top: 2rem;\n}\n\n.field {\n  display: grid;\n  gap: 0.45rem;\n  width: fit-content;\n}\n\n.field--range {\n  width: min(100%, 18rem);\n}\n\n.field__label {\n  font-size: 0.8rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\ninput[type=\"color\"] {\n  width: 3.25rem;\n  height: 3.25rem;\n  padding: 0;\n  border: 2px solid rgb(255 255 255 / 0.35);\n  border-radius: 0.35rem;\n  background: transparent;\n  cursor: pointer;\n}\n\ninput[type=\"range\"] {\n  width: 100%;\n  accent-color: var(--farbe);\n  cursor: pointer;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.35rem;\n}\n\n.btn {\n  font: inherit;\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding: 0.7rem 1.15rem;\n  border: none;\n  border-radius: 0.35rem;\n  color: var(--ink);\n  background: var(--text);\n  cursor: pointer;\n}\n\n.btn--ghost {\n  color: var(--text);\n  background: transparent;\n  border: 1px solid rgb(255 255 255 / 0.35);\n}\n\n.readout {\n  margin: 1.5rem 0 0;\n  font-size: 0.9rem;\n  letter-spacing: 0.04em;\n  opacity: 0.75;\n  font-variant-numeric: tabular-nums;\n}\n",
    "js": "",
    "neu": {
      "html": "",
      "css": ".controls {\n  display: grid;\n  gap: 1.1rem;\n  margin-top: 2rem;\n}\n\n.field {\n  display: grid;\n  gap: 0.45rem;\n  width: fit-content;\n}\n\n.field--range {\n  width: min(100%, 18rem);\n}\n\n.field__label {\n  font-size: 0.8rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\ninput[type=\"color\"] {\n  width: 3.25rem;\n  height: 3.25rem;\n  padding: 0;\n  border: 2px solid rgb(255 255 255 / 0.35);\n  border-radius: 0.35rem;\n  background: transparent;\n  cursor: pointer;\n}\n\ninput[type=\"range\"] {\n  width: 100%;\n  accent-color: var(--farbe);\n  cursor: pointer;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.35rem;\n}\n\n.btn {\n  font: inherit;\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding: 0.7rem 1.15rem;\n  border: none;\n  border-radius: 0.35rem;\n  color: var(--ink);\n  background: var(--text);\n  cursor: pointer;\n}\n\n.btn--ghost {\n  color: var(--text);\n  background: transparent;\n  border: 1px solid rgb(255 255 255 / 0.35);\n}\n\n.readout {\n  margin: 1.5rem 0 0;\n  font-size: 0.9rem;\n  letter-spacing: 0.04em;\n  opacity: 0.75;\n  font-variant-numeric: tabular-nums;\n}\n",
      "js": ""
    },
    "wohin": {
      "css": "Unten in styles.css anhängen."
    },
    "explain": {
      "css": [
        {
          "line": ".controls {",
          "mean": "Der Block mit Farbfeld, Slider, Buttons."
        },
        {
          "line": "display: grid;",
          "mean": "Untereinander mit festem Abstand."
        },
        {
          "line": "gap: 1.1rem;",
          "mean": "Abstand zwischen den Feldern."
        },
        {
          "line": "margin-top: 2rem;",
          "mean": "Abstand nach oben zum Text."
        },
        {
          "line": "}",
          "mean": "Controls-Block zu Ende."
        },
        {
          "line": ".field {",
          "mean": "Ein einzelnes Label+Input-Paar."
        },
        {
          "line": "display: grid;",
          "mean": "Beschriftung über der Eingabe."
        },
        {
          "line": "gap: 0.45rem;",
          "mean": "Kleiner Abstand dazwischen."
        },
        {
          "line": "width: fit-content;",
          "mean": "Nur so breit wie der Inhalt."
        },
        {
          "line": "}",
          "mean": "Field-Block zu Ende."
        },
        {
          "line": ".field--range {",
          "mean": "Zusatz nur für den Slider."
        },
        {
          "line": "width: min(100%, 18rem);",
          "mean": "Maximal 18rem, auf dem Handy volle Breite."
        },
        {
          "line": "}",
          "mean": "Range-Feld zu Ende."
        },
        {
          "line": ".field__label {",
          "mean": "Die kleinen Wörter FARBE / HELLIGKEIT."
        },
        {
          "line": "font-size: 0.8rem;",
          "mean": "Klein."
        },
        {
          "line": "letter-spacing: 0.06em;",
          "mean": "Leicht gesperrt."
        },
        {
          "line": "text-transform: uppercase;",
          "mean": "Großbuchstaben."
        },
        {
          "line": "opacity: 0.75;",
          "mean": "Etwas zurückgenommen."
        },
        {
          "line": "}",
          "mean": "Label-Block zu Ende."
        },
        {
          "line": "input[type=\"color\"] {",
          "mean": "Nur das Farbfeld (nicht jeder Input)."
        },
        {
          "line": "width: 3.25rem;",
          "mean": "Feste Breite."
        },
        {
          "line": "height: 3.25rem;",
          "mean": "Feste Höhe → Quadrat."
        },
        {
          "line": "padding: 0;",
          "mean": "Kein Innenabstand."
        },
        {
          "line": "border: 2px solid rgb(255 255 255 / 0.35);",
          "mean": "Heller, halbtransparenter Rahmen."
        },
        {
          "line": "border-radius: 0.35rem;",
          "mean": "Leicht abgerundete Ecken."
        },
        {
          "line": "background: transparent;",
          "mean": "Kein extra Hintergrund."
        },
        {
          "line": "cursor: pointer;",
          "mean": "Maus zeigt Finger (am Computer)."
        },
        {
          "line": "}",
          "mean": "Color-Input zu Ende."
        },
        {
          "line": "input[type=\"range\"] {",
          "mean": "Nur der Helligkeits-Slider."
        },
        {
          "line": "width: 100%;",
          "mean": "So breit wie das Feld."
        },
        {
          "line": "accent-color: var(--farbe);",
          "mean": "Slider-Farbe folgt --farbe."
        },
        {
          "line": "cursor: pointer;",
          "mean": "Wieder klickbar."
        },
        {
          "line": "}",
          "mean": "Range-Input zu Ende."
        },
        {
          "line": ".actions {",
          "mean": "Die Button-Reihe."
        },
        {
          "line": "display: flex;",
          "mean": "Nebeneinander."
        },
        {
          "line": "flex-wrap: wrap;",
          "mean": "Umbruch, wenn zu schmal."
        },
        {
          "line": "gap: 0.75rem;",
          "mean": "Abstand zwischen Buttons."
        },
        {
          "line": "margin-top: 0.35rem;",
          "mean": "Etwas Luft nach oben."
        },
        {
          "line": "}",
          "mean": "Actions-Block zu Ende."
        },
        {
          "line": ".btn {",
          "mean": "Standard-Button (gefüllt)."
        },
        {
          "line": "font: inherit;",
          "mean": "Gleiche Schrift wie die Seite."
        },
        {
          "line": "font-weight: 500;",
          "mean": "Etwas fett."
        },
        {
          "line": "font-size: 0.95rem;",
          "mean": "Normale Größe."
        },
        {
          "line": "padding: 0.7rem 1.15rem;",
          "mean": "Klickfläche innen."
        },
        {
          "line": "border: none;",
          "mean": "Kein Rahmen."
        },
        {
          "line": "border-radius: 0.35rem;",
          "mean": "Leicht rund."
        },
        {
          "line": "color: var(--ink);",
          "mean": "Dunkle Schrift."
        },
        {
          "line": "background: var(--text);",
          "mean": "Heller Hintergrund (Creme)."
        },
        {
          "line": "cursor: pointer;",
          "mean": "Klickbar."
        },
        {
          "line": "}",
          "mean": "Btn-Block zu Ende."
        },
        {
          "line": ".btn--ghost {",
          "mean": "Zweiter Stil: Outline statt Füllung."
        },
        {
          "line": "color: var(--text);",
          "mean": "Helle Schrift."
        },
        {
          "line": "background: transparent;",
          "mean": "Durchsichtig."
        },
        {
          "line": "border: 1px solid rgb(255 255 255 / 0.35);",
          "mean": "Nur ein heller Rand."
        },
        {
          "line": "}",
          "mean": "Ghost-Button zu Ende."
        },
        {
          "line": ".readout {",
          "mean": "Die RGB-Zeile unten."
        },
        {
          "line": "margin: 1.5rem 0 0;",
          "mean": "Abstand nach oben."
        },
        {
          "line": "font-size: 0.9rem;",
          "mean": "Etwas kleiner."
        },
        {
          "line": "letter-spacing: 0.04em;",
          "mean": "Leicht gesperrt."
        },
        {
          "line": "opacity: 0.75;",
          "mean": "Zurückhaltend."
        },
        {
          "line": "font-variant-numeric: tabular-nums;",
          "mean": "Zahlen gleich breit, hüpfen nicht."
        },
        {
          "line": "}",
          "mean": "Readout-Block zu Ende."
        }
      ]
    }
  },
  {
    "nr": 7,
    "titel": "JavaScript: Farbe",
    "ziel": "Farbwahl schreibt --farbe — der Glow folgt.",
    "intro": "<p><strong>JavaScript ist der Dimmer.</strong> Du hörst auf das Farbfeld, schreibst <code>--farbe</code> auf den Zettel — CSS macht das Licht. Drei Schritte, immer dieselben: Element holen, zuhören, Variable setzen.</p>",
    "checks": [
      "Farbe ändern → Glow ändert sich",
      "Keine Abstürze"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <div class=\"atmosphere\" aria-hidden=\"true\">\n      <div class=\"atmosphere__wash\" id=\"wash\"></div>\n    </div>\n\n    <header class=\"brand\">\n      <p class=\"brand__name\">creative</p>\n      <p class=\"brand__meta\">Projekt 01</p>\n    </header>\n\n    <main class=\"stage\">\n      <h1 class=\"stage__title\">Stimmungslicht</h1>\n      <p class=\"stage__lead\">\n        Wähle Farbe und Helligkeit — der Raum folgt dir.\n      </p>\n\n      <div class=\"controls\" role=\"group\" aria-label=\"Lichtsteuerung\">\n        <label class=\"field\">\n          <span class=\"field__label\">Farbe</span>\n          <input type=\"color\" id=\"color\" value=\"#2a9d8f\" />\n        </label>\n\n        <label class=\"field field--range\">\n          <span class=\"field__label\">Helligkeit</span>\n          <input type=\"range\" id=\"brightness\" min=\"15\" max=\"100\" value=\"70\" />\n        </label>\n\n        <div class=\"actions\">\n          <button type=\"button\" class=\"btn\" id=\"random\">Zufällige Stimmung</button>\n          <button type=\"button\" class=\"btn btn--ghost\" id=\"reset\">Zurücksetzen</button>\n        </div>\n      </div>\n\n      <p class=\"readout\" id=\"rgb-readout\" aria-live=\"polite\">RGB —</p>\n    </main>\n\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n\n.atmosphere {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.atmosphere__wash {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    ellipse 80% 70% at 50% 40%,\n    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),\n    rgb(8 10 14 / 0.9)\n  );\n  transition: background 0.5s ease;\n}\n\n.brand {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);\n}\n\n.brand__name {\n  margin: 0;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2rem, 5vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.brand__meta {\n  margin: 0;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\n.stage {\n  position: relative;\n  z-index: 1;\n  min-height: calc(100vh - 5.5rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);\n  max-width: 40rem;\n}\n\n.stage__title {\n  margin: 0 0 0.65rem;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2.4rem, 7vw, 4rem);\n  font-weight: 500;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n\n.stage__lead {\n  margin: 0;\n  font-size: clamp(1.05rem, 2.4vw, 1.25rem);\n  line-height: 1.45;\n  opacity: 0.8;\n  max-width: 28ch;\n}\n\n.controls {\n  display: grid;\n  gap: 1.1rem;\n  margin-top: 2rem;\n}\n\n.field {\n  display: grid;\n  gap: 0.45rem;\n  width: fit-content;\n}\n\n.field--range {\n  width: min(100%, 18rem);\n}\n\n.field__label {\n  font-size: 0.8rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\ninput[type=\"color\"] {\n  width: 3.25rem;\n  height: 3.25rem;\n  padding: 0;\n  border: 2px solid rgb(255 255 255 / 0.35);\n  border-radius: 0.35rem;\n  background: transparent;\n  cursor: pointer;\n}\n\ninput[type=\"range\"] {\n  width: 100%;\n  accent-color: var(--farbe);\n  cursor: pointer;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.35rem;\n}\n\n.btn {\n  font: inherit;\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding: 0.7rem 1.15rem;\n  border: none;\n  border-radius: 0.35rem;\n  color: var(--ink);\n  background: var(--text);\n  cursor: pointer;\n}\n\n.btn--ghost {\n  color: var(--text);\n  background: transparent;\n  border: 1px solid rgb(255 255 255 / 0.35);\n}\n\n.readout {\n  margin: 1.5rem 0 0;\n  font-size: 0.9rem;\n  letter-spacing: 0.04em;\n  opacity: 0.75;\n  font-variant-numeric: tabular-nums;\n}\n",
    "js": "const DEFAULT_COLOR = \"#2a9d8f\";\nconst DEFAULT_BRIGHTNESS = 70;\n\nconst root = document.documentElement;\nconst colorInput = document.getElementById(\"color\");\nconst brightnessInput = document.getElementById(\"brightness\");\n\nfunction applyMood(color, brightness) {\n  root.style.setProperty(\"--farbe\", color);\n  root.style.setProperty(\"--helligkeit\", `${brightness}%`);\n  colorInput.value = color;\n  brightnessInput.value = String(brightness);\n}\n\nfunction onColorChange(event) {\n  applyMood(event.target.value, Number(brightnessInput.value));\n}\n\ncolorInput.addEventListener(\"input\", onColorChange);\n\napplyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);\n",
    "neu": {
      "html": "",
      "css": "",
      "js": "const DEFAULT_COLOR = \"#2a9d8f\";\nconst DEFAULT_BRIGHTNESS = 70;\n\nconst root = document.documentElement;\nconst colorInput = document.getElementById(\"color\");\nconst brightnessInput = document.getElementById(\"brightness\");\n\nfunction applyMood(color, brightness) {\n  root.style.setProperty(\"--farbe\", color);\n  root.style.setProperty(\"--helligkeit\", `${brightness}%`);\n  colorInput.value = color;\n  brightnessInput.value = String(brightness);\n}\n\nfunction onColorChange(event) {\n  applyMood(event.target.value, Number(brightnessInput.value));\n}\n\ncolorInput.addEventListener(\"input\", onColorChange);\n\napplyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);\n"
    },
    "wohin": {
      "js": "Neue Datei script.js — komplett so anlegen."
    },
    "explain": {
      "js": [
        {
          "line": "const DEFAULT_COLOR = \"#2a9d8f\";",
          "mean": "Die Heimfarbe. const = dieser Wert bleibt, wir überschreiben ihn nicht."
        },
        {
          "line": "const DEFAULT_BRIGHTNESS = 70;",
          "mean": "Die Heim-Helligkeit. Zwei Konstanten, ein Reset-Ziel."
        },
        {
          "line": "const root = document.documentElement;",
          "mean": "Das <html>-Element. Genau dort leben die CSS-Zettel --farbe und --helligkeit."
        },
        {
          "line": "const colorInput = document.getElementById(\"color\");",
          "mean": "Klingelschild color. Ohne exakt diese id ist das Feld unsichtbar für JS."
        },
        {
          "line": "const brightnessInput = document.getElementById(\"brightness\");",
          "mean": "Dasselbe für den Slider. Merke: HTML-id und dieser String müssen identisch sein."
        },
        {
          "line": "function applyMood(color, brightness) {",
          "mean": "Ein Schalter für beides. Eine Funktion, zwei Werte — nicht sieben Copy-Pastes."
        },
        {
          "line": "root.style.setProperty(\"--farbe\", color);",
          "mean": "Schreib den Zettel um. CSS hört zu, der Glow folgt."
        },
        {
          "line": "root.style.setProperty(\"--helligkeit\", `${brightness}%`);",
          "mean": "Helligkeit braucht das %. Template-String: Zahl rein, Prozent dran."
        },
        {
          "line": "colorInput.value = color;",
          "mean": "Das Farbfeld soll zeigen, was wirklich gilt — sonst lügen Steuerung und Bild."
        },
        {
          "line": "brightnessInput.value = String(brightness);",
          "mean": "Inputs wollen Text. String() macht aus 70 das \"70\"."
        },
        {
          "line": "}",
          "mean": "Schalter zu. Alles, was die Stimmung ändert, soll irgendwann hier durch."
        },
        {
          "line": "function onColorChange(event) {",
          "mean": "Der Moment, in dem jemand die Farbe anfasst."
        },
        {
          "line": "applyMood(event.target.value, Number(brightnessInput.value));",
          "mean": "Neue Farbe, alte Helligkeit. Number macht aus dem Slider-Text eine Zahl."
        },
        {
          "line": "}",
          "mean": "Farb-Hörer zu."
        },
        {
          "line": "colorInput.addEventListener(\"input\", onColorChange);",
          "mean": "input = bei jeder Bewegung, nicht erst beim Loslassen."
        },
        {
          "line": "applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);",
          "mean": "Beim Laden einmal den Schalter umlegen, sonst startet die Seite stumm."
        }
      ]
    }
  },
  {
    "nr": 8,
    "titel": "Helligkeit verbinden",
    "ziel": "Der Slider steuert --helligkeit.",
    "intro": "<p><strong>Gleiches Muster, anderer Regler.</strong> Was die Farbe kann, kann die Helligkeit. Ein Slider, ein Listener, dieselbe Funktion <code>applyMood</code>. Wenn du das einmal siehst, siehst du es überall.</p>",
    "checks": [
      "Slider nach links: Glow schwächer",
      "Slider nach rechts: Glow stärker"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <div class=\"atmosphere\" aria-hidden=\"true\">\n      <div class=\"atmosphere__wash\" id=\"wash\"></div>\n    </div>\n\n    <header class=\"brand\">\n      <p class=\"brand__name\">creative</p>\n      <p class=\"brand__meta\">Projekt 01</p>\n    </header>\n\n    <main class=\"stage\">\n      <h1 class=\"stage__title\">Stimmungslicht</h1>\n      <p class=\"stage__lead\">\n        Wähle Farbe und Helligkeit — der Raum folgt dir.\n      </p>\n\n      <div class=\"controls\" role=\"group\" aria-label=\"Lichtsteuerung\">\n        <label class=\"field\">\n          <span class=\"field__label\">Farbe</span>\n          <input type=\"color\" id=\"color\" value=\"#2a9d8f\" />\n        </label>\n\n        <label class=\"field field--range\">\n          <span class=\"field__label\">Helligkeit</span>\n          <input type=\"range\" id=\"brightness\" min=\"15\" max=\"100\" value=\"70\" />\n        </label>\n\n        <div class=\"actions\">\n          <button type=\"button\" class=\"btn\" id=\"random\">Zufällige Stimmung</button>\n          <button type=\"button\" class=\"btn btn--ghost\" id=\"reset\">Zurücksetzen</button>\n        </div>\n      </div>\n\n      <p class=\"readout\" id=\"rgb-readout\" aria-live=\"polite\">RGB —</p>\n    </main>\n\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n\n.atmosphere {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.atmosphere__wash {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    ellipse 80% 70% at 50% 40%,\n    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),\n    rgb(8 10 14 / 0.9)\n  );\n  transition: background 0.5s ease;\n}\n\n.brand {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);\n}\n\n.brand__name {\n  margin: 0;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2rem, 5vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.brand__meta {\n  margin: 0;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\n.stage {\n  position: relative;\n  z-index: 1;\n  min-height: calc(100vh - 5.5rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);\n  max-width: 40rem;\n}\n\n.stage__title {\n  margin: 0 0 0.65rem;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2.4rem, 7vw, 4rem);\n  font-weight: 500;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n\n.stage__lead {\n  margin: 0;\n  font-size: clamp(1.05rem, 2.4vw, 1.25rem);\n  line-height: 1.45;\n  opacity: 0.8;\n  max-width: 28ch;\n}\n\n.controls {\n  display: grid;\n  gap: 1.1rem;\n  margin-top: 2rem;\n}\n\n.field {\n  display: grid;\n  gap: 0.45rem;\n  width: fit-content;\n}\n\n.field--range {\n  width: min(100%, 18rem);\n}\n\n.field__label {\n  font-size: 0.8rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\ninput[type=\"color\"] {\n  width: 3.25rem;\n  height: 3.25rem;\n  padding: 0;\n  border: 2px solid rgb(255 255 255 / 0.35);\n  border-radius: 0.35rem;\n  background: transparent;\n  cursor: pointer;\n}\n\ninput[type=\"range\"] {\n  width: 100%;\n  accent-color: var(--farbe);\n  cursor: pointer;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.35rem;\n}\n\n.btn {\n  font: inherit;\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding: 0.7rem 1.15rem;\n  border: none;\n  border-radius: 0.35rem;\n  color: var(--ink);\n  background: var(--text);\n  cursor: pointer;\n}\n\n.btn--ghost {\n  color: var(--text);\n  background: transparent;\n  border: 1px solid rgb(255 255 255 / 0.35);\n}\n\n.readout {\n  margin: 1.5rem 0 0;\n  font-size: 0.9rem;\n  letter-spacing: 0.04em;\n  opacity: 0.75;\n  font-variant-numeric: tabular-nums;\n}\n",
    "js": "const DEFAULT_COLOR = \"#2a9d8f\";\nconst DEFAULT_BRIGHTNESS = 70;\n\nconst root = document.documentElement;\nconst colorInput = document.getElementById(\"color\");\nconst brightnessInput = document.getElementById(\"brightness\");\n\nfunction applyMood(color, brightness) {\n  root.style.setProperty(\"--farbe\", color);\n  root.style.setProperty(\"--helligkeit\", `${brightness}%`);\n  colorInput.value = color;\n  brightnessInput.value = String(brightness);\n}\n\nfunction onColorChange(event) {\n  applyMood(event.target.value, Number(brightnessInput.value));\n}\n\nfunction onBrightnessChange(event) {\n  applyMood(colorInput.value, Number(event.target.value));\n}\n\ncolorInput.addEventListener(\"input\", onColorChange);\nbrightnessInput.addEventListener(\"input\", onBrightnessChange);\n\napplyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);\n",
    "neu": {
      "html": "",
      "css": "",
      "js": "function onBrightnessChange(event) {\n  applyMood(colorInput.value, Number(event.target.value));\n}\n\nbrightnessInput.addEventListener(\"input\", onBrightnessChange);"
    },
    "wohin": {
      "js": "In script.js unter onColorChange einfügen und den Listener dazu."
    },
    "explain": {
      "js": [
        {
          "line": "function onBrightnessChange(event) {",
          "mean": "Läuft, sobald der Slider bewegt wird."
        },
        {
          "line": "applyMood(colorInput.value, Number(event.target.value));",
          "mean": "Aktuelle Farbe + neuer Slider-Wert. Number macht aus '70' die Zahl 70."
        },
        {
          "line": "}",
          "mean": "onBrightnessChange zu Ende."
        },
        {
          "line": "brightnessInput.addEventListener(\"input\", onBrightnessChange);",
          "mean": "Hört auf den Slider."
        }
      ]
    }
  },
  {
    "nr": 9,
    "titel": "Zufall & Reset",
    "ziel": "Zwei Buttons setzen die Stimmung.",
    "intro": "<p><strong>Zufall braucht Grenzen.</strong> Eine kurze Liste erlaubter Farben — keine wilde Lotterie. Reset ist der Heimweg: dieselben zwei Startwerte, kein Rätsel.</p>",
    "checks": [
      "Zufällige Stimmung wechselt Farbe",
      "Zurücksetzen bringt Teal zurück"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <div class=\"atmosphere\" aria-hidden=\"true\">\n      <div class=\"atmosphere__wash\" id=\"wash\"></div>\n    </div>\n\n    <header class=\"brand\">\n      <p class=\"brand__name\">creative</p>\n      <p class=\"brand__meta\">Projekt 01</p>\n    </header>\n\n    <main class=\"stage\">\n      <h1 class=\"stage__title\">Stimmungslicht</h1>\n      <p class=\"stage__lead\">\n        Wähle Farbe und Helligkeit — der Raum folgt dir.\n      </p>\n\n      <div class=\"controls\" role=\"group\" aria-label=\"Lichtsteuerung\">\n        <label class=\"field\">\n          <span class=\"field__label\">Farbe</span>\n          <input type=\"color\" id=\"color\" value=\"#2a9d8f\" />\n        </label>\n\n        <label class=\"field field--range\">\n          <span class=\"field__label\">Helligkeit</span>\n          <input type=\"range\" id=\"brightness\" min=\"15\" max=\"100\" value=\"70\" />\n        </label>\n\n        <div class=\"actions\">\n          <button type=\"button\" class=\"btn\" id=\"random\">Zufällige Stimmung</button>\n          <button type=\"button\" class=\"btn btn--ghost\" id=\"reset\">Zurücksetzen</button>\n        </div>\n      </div>\n\n      <p class=\"readout\" id=\"rgb-readout\" aria-live=\"polite\">RGB —</p>\n    </main>\n\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n\n.atmosphere {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.atmosphere__wash {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    ellipse 80% 70% at 50% 40%,\n    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),\n    rgb(8 10 14 / 0.9)\n  );\n  transition: background 0.5s ease;\n}\n\n.brand {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);\n}\n\n.brand__name {\n  margin: 0;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2rem, 5vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.brand__meta {\n  margin: 0;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\n.stage {\n  position: relative;\n  z-index: 1;\n  min-height: calc(100vh - 5.5rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);\n  max-width: 40rem;\n}\n\n.stage__title {\n  margin: 0 0 0.65rem;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2.4rem, 7vw, 4rem);\n  font-weight: 500;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n\n.stage__lead {\n  margin: 0;\n  font-size: clamp(1.05rem, 2.4vw, 1.25rem);\n  line-height: 1.45;\n  opacity: 0.8;\n  max-width: 28ch;\n}\n\n.controls {\n  display: grid;\n  gap: 1.1rem;\n  margin-top: 2rem;\n}\n\n.field {\n  display: grid;\n  gap: 0.45rem;\n  width: fit-content;\n}\n\n.field--range {\n  width: min(100%, 18rem);\n}\n\n.field__label {\n  font-size: 0.8rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\ninput[type=\"color\"] {\n  width: 3.25rem;\n  height: 3.25rem;\n  padding: 0;\n  border: 2px solid rgb(255 255 255 / 0.35);\n  border-radius: 0.35rem;\n  background: transparent;\n  cursor: pointer;\n}\n\ninput[type=\"range\"] {\n  width: 100%;\n  accent-color: var(--farbe);\n  cursor: pointer;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.35rem;\n}\n\n.btn {\n  font: inherit;\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding: 0.7rem 1.15rem;\n  border: none;\n  border-radius: 0.35rem;\n  color: var(--ink);\n  background: var(--text);\n  cursor: pointer;\n}\n\n.btn--ghost {\n  color: var(--text);\n  background: transparent;\n  border: 1px solid rgb(255 255 255 / 0.35);\n}\n\n.readout {\n  margin: 1.5rem 0 0;\n  font-size: 0.9rem;\n  letter-spacing: 0.04em;\n  opacity: 0.75;\n  font-variant-numeric: tabular-nums;\n}\n",
    "js": "const DEFAULT_COLOR = \"#2a9d8f\";\nconst DEFAULT_BRIGHTNESS = 70;\n\nconst PALETTE = [\n  \"#2a9d8f\",\n  \"#e76f51\",\n  \"#264653\",\n  \"#e9c46a\",\n  \"#f4a261\",\n  \"#457b9d\",\n];\n\nconst root = document.documentElement;\nconst colorInput = document.getElementById(\"color\");\nconst brightnessInput = document.getElementById(\"brightness\");\nconst randomBtn = document.getElementById(\"random\");\nconst resetBtn = document.getElementById(\"reset\");\n\nfunction applyMood(color, brightness) {\n  root.style.setProperty(\"--farbe\", color);\n  root.style.setProperty(\"--helligkeit\", `${brightness}%`);\n  colorInput.value = color;\n  brightnessInput.value = String(brightness);\n}\n\nfunction onColorChange(event) {\n  applyMood(event.target.value, Number(brightnessInput.value));\n}\n\nfunction onBrightnessChange(event) {\n  applyMood(colorInput.value, Number(event.target.value));\n}\n\nfunction onRandom() {\n  const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];\n  const brightness = 45 + Math.floor(Math.random() * 50);\n  applyMood(color, brightness);\n}\n\nfunction onReset() {\n  applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);\n}\n\ncolorInput.addEventListener(\"input\", onColorChange);\nbrightnessInput.addEventListener(\"input\", onBrightnessChange);\nrandomBtn.addEventListener(\"click\", onRandom);\nresetBtn.addEventListener(\"click\", onReset);\n\napplyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);\n",
    "neu": {
      "html": "",
      "css": "",
      "js": "const PALETTE = [\n  \"#2a9d8f\",\n  \"#e76f51\",\n  \"#264653\",\n  \"#e9c46a\",\n  \"#f4a261\",\n  \"#457b9d\",\n];\n\nconst randomBtn = document.getElementById(\"random\");\nconst resetBtn = document.getElementById(\"reset\");\n\nfunction onRandom() {\n  const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];\n  const brightness = 45 + Math.floor(Math.random() * 50);\n  applyMood(color, brightness);\n}\n\nfunction onReset() {\n  applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);\n}\n\nrandomBtn.addEventListener(\"click\", onRandom);\nresetBtn.addEventListener(\"click\", onReset);"
    },
    "wohin": {
      "js": "In script.js ergänzen: Palette, die zwei Buttons, onRandom, onReset und die click-Listener."
    },
    "explain": {
      "js": [
        {
          "line": "const PALETTE = [",
          "mean": "Liste erlaubter Zufallsfarben. Anfang."
        },
        {
          "line": "\"#2a9d8f\",",
          "mean": "Teal."
        },
        {
          "line": "\"#e76f51\",",
          "mean": "Koralle."
        },
        {
          "line": "\"#264653\",",
          "mean": "Dunkles Petrol."
        },
        {
          "line": "\"#e9c46a\",",
          "mean": "Gelb."
        },
        {
          "line": "\"#f4a261\",",
          "mean": "Orange."
        },
        {
          "line": "\"#457b9d\",",
          "mean": "Blau."
        },
        {
          "line": "];",
          "mean": "Liste zu Ende."
        },
        {
          "line": "const randomBtn = document.getElementById(\"random\");",
          "mean": "Button Zufällige Stimmung."
        },
        {
          "line": "const resetBtn = document.getElementById(\"reset\");",
          "mean": "Button Zurücksetzen."
        },
        {
          "line": "function onRandom() {",
          "mean": "Was der Zufalls-Button tut."
        },
        {
          "line": "const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];",
          "mean": "Zufälligen Eintrag aus der Liste nehmen."
        },
        {
          "line": "const brightness = 45 + Math.floor(Math.random() * 50);",
          "mean": "Zufällige Helligkeit zwischen 45 und 94."
        },
        {
          "line": "applyMood(color, brightness);",
          "mean": "Diese Stimmung setzen."
        },
        {
          "line": "}",
          "mean": "onRandom zu Ende."
        },
        {
          "line": "function onReset() {",
          "mean": "Was Reset tut."
        },
        {
          "line": "applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);",
          "mean": "Zurück auf Teal und 70."
        },
        {
          "line": "}",
          "mean": "onReset zu Ende."
        },
        {
          "line": "randomBtn.addEventListener(\"click\", onRandom);",
          "mean": "Klick auf Zufall → onRandom."
        },
        {
          "line": "resetBtn.addEventListener(\"click\", onReset);",
          "mean": "Klick auf Reset → onReset."
        }
      ]
    }
  },
  {
    "nr": 10,
    "titel": "RGB-Anzeige",
    "ziel": "Unter den Controls stehen die aktuellen RGB-Zahlen.",
    "intro": "<p><strong>Menschen lesen RGB, Computer Hex.</strong> <code>#2a9d8f</code> wird zu drei Zahlen. Du musst die Bit-Verschiebung nicht auswendig können — merke: zerlegen, anzeigen, bei jeder Änderung neu.</p>",
    "checks": [
      "Start zeigt etwa RGB 42 · 157 · 143",
      "Bei Farbwechsel aktualisiert sich die Zeile"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <div class=\"atmosphere\" aria-hidden=\"true\">\n      <div class=\"atmosphere__wash\" id=\"wash\"></div>\n    </div>\n\n    <header class=\"brand\">\n      <p class=\"brand__name\">creative</p>\n      <p class=\"brand__meta\">Projekt 01</p>\n    </header>\n\n    <main class=\"stage\">\n      <h1 class=\"stage__title\">Stimmungslicht</h1>\n      <p class=\"stage__lead\">\n        Wähle Farbe und Helligkeit — der Raum folgt dir.\n      </p>\n\n      <div class=\"controls\" role=\"group\" aria-label=\"Lichtsteuerung\">\n        <label class=\"field\">\n          <span class=\"field__label\">Farbe</span>\n          <input type=\"color\" id=\"color\" value=\"#2a9d8f\" />\n        </label>\n\n        <label class=\"field field--range\">\n          <span class=\"field__label\">Helligkeit</span>\n          <input type=\"range\" id=\"brightness\" min=\"15\" max=\"100\" value=\"70\" />\n        </label>\n\n        <div class=\"actions\">\n          <button type=\"button\" class=\"btn\" id=\"random\">Zufällige Stimmung</button>\n          <button type=\"button\" class=\"btn btn--ghost\" id=\"reset\">Zurücksetzen</button>\n        </div>\n      </div>\n\n      <p class=\"readout\" id=\"rgb-readout\" aria-live=\"polite\">RGB —</p>\n    </main>\n\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n\n.atmosphere {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.atmosphere__wash {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    ellipse 80% 70% at 50% 40%,\n    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),\n    rgb(8 10 14 / 0.9)\n  );\n  transition: background 0.5s ease;\n}\n\n.brand {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);\n}\n\n.brand__name {\n  margin: 0;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2rem, 5vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.brand__meta {\n  margin: 0;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\n.stage {\n  position: relative;\n  z-index: 1;\n  min-height: calc(100vh - 5.5rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);\n  max-width: 40rem;\n}\n\n.stage__title {\n  margin: 0 0 0.65rem;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2.4rem, 7vw, 4rem);\n  font-weight: 500;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n\n.stage__lead {\n  margin: 0;\n  font-size: clamp(1.05rem, 2.4vw, 1.25rem);\n  line-height: 1.45;\n  opacity: 0.8;\n  max-width: 28ch;\n}\n\n.controls {\n  display: grid;\n  gap: 1.1rem;\n  margin-top: 2rem;\n}\n\n.field {\n  display: grid;\n  gap: 0.45rem;\n  width: fit-content;\n}\n\n.field--range {\n  width: min(100%, 18rem);\n}\n\n.field__label {\n  font-size: 0.8rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\ninput[type=\"color\"] {\n  width: 3.25rem;\n  height: 3.25rem;\n  padding: 0;\n  border: 2px solid rgb(255 255 255 / 0.35);\n  border-radius: 0.35rem;\n  background: transparent;\n  cursor: pointer;\n}\n\ninput[type=\"range\"] {\n  width: 100%;\n  accent-color: var(--farbe);\n  cursor: pointer;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.35rem;\n}\n\n.btn {\n  font: inherit;\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding: 0.7rem 1.15rem;\n  border: none;\n  border-radius: 0.35rem;\n  color: var(--ink);\n  background: var(--text);\n  cursor: pointer;\n}\n\n.btn--ghost {\n  color: var(--text);\n  background: transparent;\n  border: 1px solid rgb(255 255 255 / 0.35);\n}\n\n.readout {\n  margin: 1.5rem 0 0;\n  font-size: 0.9rem;\n  letter-spacing: 0.04em;\n  opacity: 0.75;\n  font-variant-numeric: tabular-nums;\n}\n",
    "js": "const DEFAULT_COLOR = \"#2a9d8f\";\nconst DEFAULT_BRIGHTNESS = 70;\n\nconst PALETTE = [\n  \"#2a9d8f\",\n  \"#e76f51\",\n  \"#264653\",\n  \"#e9c46a\",\n  \"#f4a261\",\n  \"#457b9d\",\n];\n\nconst root = document.documentElement;\nconst colorInput = document.getElementById(\"color\");\nconst brightnessInput = document.getElementById(\"brightness\");\nconst randomBtn = document.getElementById(\"random\");\nconst resetBtn = document.getElementById(\"reset\");\nconst readout = document.getElementById(\"rgb-readout\");\n\nfunction hexToRgb(hex) {\n  const clean = hex.replace(\"#\", \"\");\n  const full =\n    clean.length === 3\n      ? clean\n          .split(\"\")\n          .map((c) => c + c)\n          .join(\"\")\n      : clean;\n\n  const num = Number.parseInt(full, 16);\n  return {\n    r: (num >> 16) & 255,\n    g: (num >> 8) & 255,\n    b: num & 255,\n  };\n}\n\nfunction updateReadout(hex) {\n  const { r, g, b } = hexToRgb(hex);\n  readout.textContent = `RGB ${r} · ${g} · ${b}`;\n}\n\nfunction applyMood(color, brightness) {\n  root.style.setProperty(\"--farbe\", color);\n  root.style.setProperty(\"--helligkeit\", `${brightness}%`);\n  colorInput.value = color;\n  brightnessInput.value = String(brightness);\n  updateReadout(color);\n}\n\nfunction onColorChange(event) {\n  applyMood(event.target.value, Number(brightnessInput.value));\n}\n\nfunction onBrightnessChange(event) {\n  applyMood(colorInput.value, Number(event.target.value));\n}\n\nfunction onRandom() {\n  const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];\n  const brightness = 45 + Math.floor(Math.random() * 50);\n  applyMood(color, brightness);\n}\n\nfunction onReset() {\n  applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);\n}\n\ncolorInput.addEventListener(\"input\", onColorChange);\nbrightnessInput.addEventListener(\"input\", onBrightnessChange);\nrandomBtn.addEventListener(\"click\", onRandom);\nresetBtn.addEventListener(\"click\", onReset);\n\napplyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);\n",
    "neu": {
      "html": "",
      "css": "",
      "js": "const readout = document.getElementById(\"rgb-readout\");\n\nfunction hexToRgb(hex) {\n  const clean = hex.replace(\"#\", \"\");\n  const full =\n    clean.length === 3\n      ? clean\n          .split(\"\")\n          .map((c) => c + c)\n          .join(\"\")\n      : clean;\n\n  const num = Number.parseInt(full, 16);\n  return {\n    r: (num >> 16) & 255,\n    g: (num >> 8) & 255,\n    b: num & 255,\n  };\n}\n\nfunction updateReadout(hex) {\n  const { r, g, b } = hexToRgb(hex);\n  readout.textContent = `RGB ${r} · ${g} · ${b}`;\n}\n\n// In applyMood ganz am Ende aufrufen:\nupdateReadout(color);"
    },
    "wohin": {
      "js": "In script.js ergänzen. updateReadout(color) gehört ans Ende von applyMood."
    },
    "explain": {
      "js": [
        {
          "line": "const readout = document.getElementById(\"rgb-readout\");",
          "mean": "Die RGB-Textzeile im HTML."
        },
        {
          "line": "function hexToRgb(hex) {",
          "mean": "Wandelt #2a9d8f in drei Zahlen r, g, b."
        },
        {
          "line": "const clean = hex.replace(\"#\", \"\");",
          "mean": "Raute am Anfang weg."
        },
        {
          "line": "const full =",
          "mean": "full wird der 6-stellige Hex-Code."
        },
        {
          "line": "clean.length === 3",
          "mean": "Kurzform wie #2a9? Dann Zeichen verdoppeln."
        },
        {
          "line": "? clean",
          "mean": "Ja: nimm clean und…"
        },
        {
          "line": ".split(\"\")",
          "mean": "…zerlege in einzelne Zeichen,"
        },
        {
          "line": ".map((c) => c + c)",
          "mean": "jedes Zeichen zweimal,"
        },
        {
          "line": ".join(\"\")",
          "mean": "wieder zu einem String zusammen."
        },
        {
          "line": ": clean;",
          "mean": "Nein, schon 6 Zeichen: so lassen."
        },
        {
          "line": "const num = Number.parseInt(full, 16);",
          "mean": "Hex-String als Zahl zur Basis 16 lesen."
        },
        {
          "line": "return {",
          "mean": "Ein Objekt mit drei Werten zurückgeben."
        },
        {
          "line": "r: (num >> 16) & 255,",
          "mean": "Rote Komponente (obere 8 Bit)."
        },
        {
          "line": "g: (num >> 8) & 255,",
          "mean": "Grüne Komponente."
        },
        {
          "line": "b: num & 255,",
          "mean": "Blaue Komponente."
        },
        {
          "line": "};",
          "mean": "Objekt zu Ende."
        },
        {
          "line": "}",
          "mean": "hexToRgb zu Ende."
        },
        {
          "line": "function updateReadout(hex) {",
          "mean": "Schreibt die RGB-Zeile auf den Bildschirm."
        },
        {
          "line": "const { r, g, b } = hexToRgb(hex);",
          "mean": "r, g, b aus dem Hex holen."
        },
        {
          "line": "readout.textContent = `RGB ${r} · ${g} · ${b}`;",
          "mean": "Text im HTML setzen."
        },
        {
          "line": "}",
          "mean": "updateReadout zu Ende."
        },
        {
          "line": "updateReadout(color);",
          "mean": "In applyMood: nach jeder Änderung die Zeile aktualisieren."
        }
      ]
    }
  },
  {
    "nr": 11,
    "titel": "Feinschliff & fertig",
    "ziel": "Texte kommen sanft rein. Projekt 01 ist komplett.",
    "intro": "<p><strong>Zum Schluss: Ankunft, kein Feuerwerk.</strong> Texte kommen von unten, kurz, dann stehen sie. Und wenn jemand weniger Bewegung will, schaltet <code>prefers-reduced-motion</code> den Effekt ab. Das ist Sorgfalt.</p>",
    "checks": [
      "Texte erscheinen leicht von unten",
      "Farbe, Helligkeit, Zufall, Reset, RGB funktionieren"
    ],
    "html": "<!DOCTYPE html>\n<html lang=\"de\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Stimmungslicht — creative</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n  </head>\n  <body>\n    <div class=\"atmosphere\" aria-hidden=\"true\">\n      <div class=\"atmosphere__wash\" id=\"wash\"></div>\n    </div>\n\n    <header class=\"brand\">\n      <p class=\"brand__name\">creative</p>\n      <p class=\"brand__meta\">Projekt 01</p>\n    </header>\n\n    <main class=\"stage\">\n      <h1 class=\"stage__title\">Stimmungslicht</h1>\n      <p class=\"stage__lead\">\n        Wähle Farbe und Helligkeit — der Raum folgt dir.\n      </p>\n\n      <div class=\"controls\" role=\"group\" aria-label=\"Lichtsteuerung\">\n        <label class=\"field\">\n          <span class=\"field__label\">Farbe</span>\n          <input type=\"color\" id=\"color\" value=\"#2a9d8f\" />\n        </label>\n\n        <label class=\"field field--range\">\n          <span class=\"field__label\">Helligkeit</span>\n          <input type=\"range\" id=\"brightness\" min=\"15\" max=\"100\" value=\"70\" />\n        </label>\n\n        <div class=\"actions\">\n          <button type=\"button\" class=\"btn\" id=\"random\">Zufällige Stimmung</button>\n          <button type=\"button\" class=\"btn btn--ghost\" id=\"reset\">Zurücksetzen</button>\n        </div>\n      </div>\n\n      <p class=\"readout\" id=\"rgb-readout\" aria-live=\"polite\">RGB —</p>\n    </main>\n\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n",
    "css": ":root {\n  --farbe: #2a9d8f;\n  --helligkeit: 70%;\n  --text: #f4f0e8;\n  --ink: #12151a;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  color: var(--text);\n  background: var(--ink);\n}\n\n.atmosphere {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.atmosphere__wash {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(\n    ellipse 80% 70% at 50% 40%,\n    color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),\n    rgb(8 10 14 / 0.9)\n  );\n  transition: background 0.5s ease;\n}\n\n.brand {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);\n}\n\n.brand__name {\n  margin: 0;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2rem, 5vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.brand__meta {\n  margin: 0;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\n.stage {\n  position: relative;\n  z-index: 1;\n  min-height: calc(100vh - 5.5rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);\n  max-width: 40rem;\n}\n\n.stage__title {\n  margin: 0 0 0.65rem;\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(2.4rem, 7vw, 4rem);\n  font-weight: 500;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n\n.stage__lead {\n  margin: 0;\n  font-size: clamp(1.05rem, 2.4vw, 1.25rem);\n  line-height: 1.45;\n  opacity: 0.8;\n  max-width: 28ch;\n}\n\n.controls {\n  display: grid;\n  gap: 1.1rem;\n  margin-top: 2rem;\n}\n\n.field {\n  display: grid;\n  gap: 0.45rem;\n  width: fit-content;\n}\n\n.field--range {\n  width: min(100%, 18rem);\n}\n\n.field__label {\n  font-size: 0.8rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  opacity: 0.75;\n}\n\ninput[type=\"color\"] {\n  width: 3.25rem;\n  height: 3.25rem;\n  padding: 0;\n  border: 2px solid rgb(255 255 255 / 0.35);\n  border-radius: 0.35rem;\n  background: transparent;\n  cursor: pointer;\n}\n\ninput[type=\"range\"] {\n  width: 100%;\n  accent-color: var(--farbe);\n  cursor: pointer;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.35rem;\n}\n\n.btn {\n  font: inherit;\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding: 0.7rem 1.15rem;\n  border: none;\n  border-radius: 0.35rem;\n  color: var(--ink);\n  background: var(--text);\n  cursor: pointer;\n}\n\n.btn--ghost {\n  color: var(--text);\n  background: transparent;\n  border: 1px solid rgb(255 255 255 / 0.35);\n}\n\n.readout {\n  margin: 1.5rem 0 0;\n  font-size: 0.9rem;\n  letter-spacing: 0.04em;\n  opacity: 0.75;\n  font-variant-numeric: tabular-nums;\n}\n\n@keyframes rise {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.brand__name { animation: rise 0.9s ease both; }\n.brand__meta { animation: rise 0.9s ease 0.08s both; }\n.stage__title { animation: rise 1s ease 0.12s both; }\n.stage__lead { animation: rise 1s ease 0.2s both; }\n.controls { animation: rise 1s ease 0.28s both; }\n.readout { animation: rise 1s ease 0.36s both; }\n\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n",
    "js": "const DEFAULT_COLOR = \"#2a9d8f\";\nconst DEFAULT_BRIGHTNESS = 70;\n\nconst PALETTE = [\n  \"#2a9d8f\",\n  \"#e76f51\",\n  \"#264653\",\n  \"#e9c46a\",\n  \"#f4a261\",\n  \"#457b9d\",\n];\n\nconst root = document.documentElement;\nconst colorInput = document.getElementById(\"color\");\nconst brightnessInput = document.getElementById(\"brightness\");\nconst randomBtn = document.getElementById(\"random\");\nconst resetBtn = document.getElementById(\"reset\");\nconst readout = document.getElementById(\"rgb-readout\");\n\nfunction hexToRgb(hex) {\n  const clean = hex.replace(\"#\", \"\");\n  const full =\n    clean.length === 3\n      ? clean\n          .split(\"\")\n          .map((c) => c + c)\n          .join(\"\")\n      : clean;\n\n  const num = Number.parseInt(full, 16);\n  return {\n    r: (num >> 16) & 255,\n    g: (num >> 8) & 255,\n    b: num & 255,\n  };\n}\n\nfunction updateReadout(hex) {\n  const { r, g, b } = hexToRgb(hex);\n  readout.textContent = `RGB ${r} · ${g} · ${b}`;\n}\n\nfunction applyMood(color, brightness) {\n  root.style.setProperty(\"--farbe\", color);\n  root.style.setProperty(\"--helligkeit\", `${brightness}%`);\n  colorInput.value = color;\n  brightnessInput.value = String(brightness);\n  updateReadout(color);\n}\n\nfunction onColorChange(event) {\n  applyMood(event.target.value, Number(brightnessInput.value));\n}\n\nfunction onBrightnessChange(event) {\n  applyMood(colorInput.value, Number(event.target.value));\n}\n\nfunction onRandom() {\n  const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];\n  const brightness = 45 + Math.floor(Math.random() * 50);\n  applyMood(color, brightness);\n}\n\nfunction onReset() {\n  applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);\n}\n\ncolorInput.addEventListener(\"input\", onColorChange);\nbrightnessInput.addEventListener(\"input\", onBrightnessChange);\nrandomBtn.addEventListener(\"click\", onRandom);\nresetBtn.addEventListener(\"click\", onReset);\n\napplyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);\n",
    "neu": {
      "html": "",
      "css": "@keyframes rise {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.brand__name { animation: rise 0.9s ease both; }\n.brand__meta { animation: rise 0.9s ease 0.08s both; }\n.stage__title { animation: rise 1s ease 0.12s both; }\n.stage__lead { animation: rise 1s ease 0.2s both; }\n.controls { animation: rise 1s ease 0.28s both; }\n.readout { animation: rise 1s ease 0.36s both; }\n\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n",
      "js": ""
    },
    "wohin": {
      "css": "Unten in styles.css anhängen."
    },
    "explain": {
      "css": [
        {
          "line": "@keyframes rise {",
          "mean": "Animation namens rise: von unsichtbar nach sichtbar."
        },
        {
          "line": "from {",
          "mean": "Startzustand der Animation."
        },
        {
          "line": "opacity: 0;",
          "mean": "Komplett durchsichtig."
        },
        {
          "line": "transform: translateY(14px);",
          "mean": "14 Pixel weiter unten."
        },
        {
          "line": "}",
          "mean": "Startzustand zu Ende."
        },
        {
          "line": "to {",
          "mean": "Endzustand der Animation."
        },
        {
          "line": "opacity: 1;",
          "mean": "Voll sichtbar."
        },
        {
          "line": "transform: translateY(0);",
          "mean": "An der normalen Position."
        },
        {
          "line": "}",
          "mean": "Endzustand zu Ende."
        },
        {
          "line": "}",
          "mean": "Keyframes zu Ende."
        },
        {
          "line": ".brand__name { animation: rise 0.9s ease both; }",
          "mean": "Name fährt in 0,9s hoch. both = Start und Ende halten."
        },
        {
          "line": ".brand__meta { animation: rise 0.9s ease 0.08s both; }",
          "mean": "Gleich, aber 0,08s später."
        },
        {
          "line": ".stage__title { animation: rise 1s ease 0.12s both; }",
          "mean": "Titel etwas später."
        },
        {
          "line": ".stage__lead { animation: rise 1s ease 0.2s both; }",
          "mean": "Lead noch später."
        },
        {
          "line": ".controls { animation: rise 1s ease 0.28s both; }",
          "mean": "Regler danach."
        },
        {
          "line": ".readout { animation: rise 1s ease 0.36s both; }",
          "mean": "RGB-Zeile zuletzt."
        },
        {
          "line": "@media (prefers-reduced-motion: reduce) {",
          "mean": "Wenn das System weniger Bewegung will:"
        },
        {
          "line": "*,",
          "mean": "alle Elemente,"
        },
        {
          "line": "*::before,",
          "mean": "Pseudo davor,"
        },
        {
          "line": "*::after {",
          "mean": "Pseudo danach:"
        },
        {
          "line": "animation-duration: 0.01ms !important;",
          "mean": "Animation praktisch aus."
        },
        {
          "line": "animation-iteration-count: 1 !important;",
          "mean": "Nur einmal, nicht loopen."
        },
        {
          "line": "transition-duration: 0.01ms !important;",
          "mean": "Auch Übergänge fast sofort."
        },
        {
          "line": "}",
          "mean": "Reduced-motion-Regeln zu Ende."
        },
        {
          "line": "}",
          "mean": "Media-Query zu Ende."
        }
      ]
    }
  }
];
