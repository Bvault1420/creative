#!/usr/bin/env python3
"""Rebuild lernen/schritte.js with full copy-code + line explanations."""
import json
from pathlib import Path

# Load HTML/CSS/JS constants from the previous generator.
legacy = Path("/tmp/build_schritte.py").read_text(encoding="utf-8")
exec(legacy.split("steps = [")[0], globals())


def E(*pairs):
    return [{"line": a, "mean": b} for a, b in pairs]


EXPLAIN_HTML_1 = E(
    ("<!DOCTYPE html>", "Erste Zeile, immer. Heißt: das ist modernes HTML, nicht ein Altdokument."),
    ('<html lang="de">', "Die Seite beginnt. lang=de hilft Screenreadern und der Rechtschreibung."),
    ("<head>", "Backstage: Titel, Zeichensatz, Dateien. Hier sieht niemand etwas."),
    ('<meta charset="UTF-8" />', "Damit ä, ö, ü und ß nicht als Kringel landen."),
    ('<meta name="viewport" content="width=device-width, initial-scale=1.0" />', "Ein Viewport = die Seite nimmt die echte Handybreite, statt winzig zu zoomen."),
    ("<title>Stimmungslicht — creative</title>", "Was im Tab steht. Auch das ist Teil des ersten Eindrucks."),
    ('<link rel="stylesheet" href="styles.css" />', "Hol das Aussehen aus styles.css. Ohne diese Zeile bleibt CSS wirkungslos."),
    ("</head>", "Backstage zu. Ab hier kommt, was man sieht."),
    ("<body>", "Die Bühne. Alles Sichtbare lebt hier."),
    ("<h1>Stimmungslicht</h1>", "Eine Seite, eine Hauptüberschrift. h1 ist der lauteste Titel."),
    ("<p>Seite lädt — Schritt 1 ok.</p>", "Ein Absatz. So prüfst du: die Datei kommt wirklich an."),
    ('<script src="script.js"></script>', "Hol das Verhalten aus script.js. Steht am Ende, damit das HTML schon da ist."),
    ("</body>", "Bühne zu."),
    ("</html>", "Datei zu. Nichts mehr danach."),
)

EXPLAIN_HTML_FONTS = E(
    ('<link rel="preconnect" href="https://fonts.googleapis.com" />', "Verbindung zu Google Fonts vorbereiten (schneller)."),
    ('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />', "Zweite Vorverbindung für die Schriftdateien."),
    ("<link", "Beginn des Schrift-Links (geht über mehrere Zeilen)."),
    ("href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap\"", "Welche Schriften: Fraunces (Überschriften) und Outfit (Text)."),
    ('rel="stylesheet"', "Das ist eine Stylesheet-Datei, keine normale Webseite."),
    ("/>", "Dieser Link-Tag ist zu Ende."),
)

EXPLAIN_HTML_ATM = E(
    ('<div class="atmosphere" aria-hidden="true">', "Farb-Schicht im Hintergrund. aria-hidden: Screenreader ignorieren sie."),
    ('<div class="atmosphere__wash" id="wash"></div>', "Die eigentliche Farbfläche. id=wash brauchen wir später nicht zwingend."),
    ("</div>", "Hintergrund-Schicht zu Ende."),
)

EXPLAIN_HTML_STAGE = E(
    ('<header class="brand">', "Kopfzeile der Seite: Marke links, Meta rechts."),
    ('<p class="brand__name">creative</p>', "Der Name creative, groß gesetzt."),
    ('<p class="brand__meta">Projekt 01</p>', "Kleine Kennzeichnung rechts oben."),
    ("</header>", "Kopfzeile zu Ende."),
    ('<main class="stage">', "Hauptbereich. Hier liegt der sichtbare Inhalt."),
    ('<h1 class="stage__title">Stimmungslicht</h1>', "Der große Titel unten auf der Bühne."),
    ('<p class="stage__lead">', "Einleitungstext beginnt."),
    ("Wähle Farbe und Helligkeit — der Raum folgt dir.", "Der Satz, den die Besucher lesen."),
    ("</p>", "Einleitungstext zu Ende."),
    ("</main>", "Hauptbereich zu Ende."),
)

EXPLAIN_HTML_CONTROLS = E(
    ('<div class="controls" role="group" aria-label="Lichtsteuerung">', "Gruppe aller Regler. aria-label erklärt den Block."),
    ('<label class="field">', "Ein Feld: Label + Eingabe gehören zusammen."),
    ('<span class="field__label">Farbe</span>', "Beschriftung über dem Farbfeld."),
    ('<input type="color" id="color" value="#2a9d8f" />', "Eingebautes Farbfeld. id=color ist der Name für JavaScript."),
    ("</label>", "Farb-Feld zu Ende."),
    ('<label class="field field--range">', "Zweites Feld, diesmal der Slider."),
    ('<span class="field__label">Helligkeit</span>', "Beschriftung über dem Slider."),
    ('<input type="range" id="brightness" min="15" max="100" value="70" />', "Slider von 15 bis 100, Start 70. id=brightness für JS."),
    ("</label>", "Helligkeits-Feld zu Ende."),
    ('<div class="actions">', "Reihe für die Buttons."),
    ('<button type="button" class="btn" id="random">Zufällige Stimmung</button>', "Button Zufall. type=button = kein Formular-Absenden."),
    ('<button type="button" class="btn btn--ghost" id="reset">Zurücksetzen</button>', "Button Reset, später als Outline gestylt."),
    ("</div>", "Button-Reihe zu Ende."),
    ("</div>", "Controls-Gruppe zu Ende."),
    ('<p class="readout" id="rgb-readout" aria-live="polite">RGB —</p>', "Zeile für RGB-Zahlen. aria-live: Screenreader liest Änderungen vor."),
)

EXPLAIN_CSS_2 = E(
    (":root {", "Der Zettel der ganzen Seite. Was hier steht, gilt überall — ein Ort, nicht sieben Kopien."),
    ("--farbe: #2a9d8f;", "Name --farbe, Wert Teal. Später tauscht JS nur diesen Namen, nicht jedes Element."),
    ("--helligkeit: 70%;", "Wie stark das Licht steht. Prozent, weil Farbe und Stärke zusammenwirken."),
    ("--text: #f4f0e8;", "Creme auf Dunkel. So bleibt Schrift lesbar, ohne grell zu werden."),
    ("--ink: #12151a;", "Die Nacht der Seite. Fast schwarz, aber nicht drucker-schwarz."),
    ("}", "Zettel zu. Die Namen leben weiter, der Block ist nur die Definition."),
    ("*,", "Sternchen = wirklich jedes Element. Das Komma heißt: und außerdem …"),
    ("*::before,", "Geisterstück vor dem Inhalt, falls CSS eines erzeugt. Auch das muss mitgerechnet werden."),
    ("*::after {", "Geisterstück danach. { öffnet die gemeinsame Regel für alle drei."),
    ("box-sizing: border-box;", "Die Kiste wird von außen gemessen. Futter und Rahmen sind schon in der Breite — sonst rechnet der Browser gegen dich."),
    ("}", "Reset zu. Ab hier darfst du Breiten ernst nehmen."),
    ("html,", "Das Dokument selbst, und …"),
    ("body {", "… die Bühne. Beide: kein Rand, volle Höhe. Sonst bleibt ein Grausaum vom Browser."),
    ("margin: 0;", "Den Standard-Rand abschneiden. Wir bestimmen den Abstand, nicht der Browser."),
    ("min-height: 100%;", "Mindestens so hoch wie das Fenster. Kein halbes Blatt."),
    ("}", "Grundfläche steht."),
    ("body {", "Zweiter Anlauf nur für den body: Schrift, Textfarbe, Hintergrund."),
    ('font-family: "Outfit", sans-serif;', "Outfit zuerst. Kommt sie nicht, irgendeine serifenlose — nie Times als Unfall."),
    ("color: var(--text);", "Nicht die Creme-Farbe hart eintragen: den Namen vom Zettel holen."),
    ("background: var(--ink);", "Hintergrund vom selben Zettel. Ein Tausch in :root färbt beides um."),
    ("}", "Basis steht. Die Seite hat jetzt Charakter, noch keine Komposition."),
)

EXPLAIN_CSS_3 = E(
    (".atmosphere {", "Die hintere Wand des Raums. Klasse mit Punkt: ein Name, den HTML tragen muss."),
    ("position: fixed;", "Klebt am Fenster. Scrollt der Inhalt, das Licht bleibt."),
    ("inset: 0;", "Oben, rechts, unten, links = 0. Kurzform für: füll alles."),
    ("z-index: 0;", "Hinten. Text bekommt später 1 und tritt davor — wie Kulisse und Schauspieler."),
    ("pointer-events: none;", "Diese Wand fängt keine Klicks. Finger gehen durch zum Inhalt."),
    ("}", "Wand steht."),
    (".atmosphere__wash {", "Die Farbwäsche auf der Wand. BEM-Name: gehört zur Atmosphere."),
    ("position: absolute;", "Füllt die Wand, nicht das Fenster selbst."),
    ("inset: 0;", "Wieder volle Fläche."),
    ("background: radial-gradient(", "Kein Flächenton: ein Verlauf von einem Kern nach außen."),
    ("ellipse 80% 70% at 50% 40%,", "Der Kern sitzt mittig, etwas über der Mitte — wie Licht von vorn."),
    ("color-mix(in srgb, var(--farbe) var(--helligkeit), transparent),", "Farbe vom Zettel, Stärke vom Zettel, Rest Luft. Genau deshalb wirken die Regler."),
    ("rgb(8 10 14 / 0.9)", "Nach außen Nacht. Der Verlauf braucht ein Ende, sonst wirkt er billig."),
    (");", "Verlauf zu."),
    ("transition: background 0.5s ease;", "Ein halbe Sekunde weich. Licht springt nicht, es atmet."),
    ("}", "Wäsche zu. Ab jetzt ist --farbe sichtbar, nicht nur definiert."),
)

EXPLAIN_CSS_4 = E(
    (".brand {", "Kopfzeile mit dem Namen creative."),
    ("position: relative;", "Kann über dem Hintergrund liegen."),
    ("z-index: 1;", "Vor der Atmosphere (die hat 0)."),
    ("display: flex;", "Elemente in einer Reihe."),
    ("align-items: baseline;", "An der Schriftlinie ausrichten."),
    ("justify-content: space-between;", "Eins links, eins rechts."),
    ("padding: 1.5rem clamp(1.25rem, 4vw, 3rem);", "Innenabstand; clamp = skaliert mit der Breite."),
    ("}", "Brand-Block zu Ende."),
    (".brand__name {", "Das Wort creative."),
    ("margin: 0;", "Kein extra Abstand um den Absatz."),
    ('font-family: "Fraunces", serif;', "Serifen-Schrift für den Namen."),
    ("font-size: clamp(2rem, 5vw, 3.25rem);", "Größe zwischen 2rem und 3.25rem, je nach Screen."),
    ("font-weight: 700;", "Fett."),
    ("letter-spacing: -0.03em;", "Buchstaben etwas enger."),
    ("line-height: 1;", "Zeilenhöhe eng, eine Zeile."),
    ("}", "Name-Block zu Ende."),
    (".brand__meta {", "Der Text Projekt 01."),
    ("margin: 0;", "Kein extra Abstand."),
    ("font-size: 0.85rem;", "Kleiner als der Name."),
    ("letter-spacing: 0.08em;", "Buchstaben etwas weiter."),
    ("text-transform: uppercase;", "Alles in GROSSBUCHSTABEN."),
    ("opacity: 0.75;", "Etwas durchsichtig, zurückhaltend."),
    ("}", "Meta-Block zu Ende."),
    (".stage {", "Die Bühne unten: Titel und Text."),
    ("position: relative;", "Über dem Hintergrund."),
    ("z-index: 1;", "Vor der Atmosphere."),
    ("min-height: calc(100vh - 5.5rem);", "Fast die ganze Fensterhöhe minus Kopfzeile."),
    ("display: flex;", "Flexbox, Inhalt wird gestapelt."),
    ("flex-direction: column;", "Untereinander, nicht nebeneinander."),
    ("justify-content: flex-end;", "Alles nach unten schieben."),
    ("padding: 0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 6vh, 4rem);", "Innenabstand links/rechts/unten."),
    ("max-width: 40rem;", "Nicht breiter als 40rem, damit Zeilen lesbar bleiben."),
    ("}", "Stage-Block zu Ende."),
    (".stage__title {", "Die große Überschrift Stimmungslicht."),
    ("margin: 0 0 0.65rem;", "Kein Rand außer etwas Abstand nach unten."),
    ('font-family: "Fraunces", serif;', "Wieder die Serifen-Schrift."),
    ("font-size: clamp(2.4rem, 7vw, 4rem);", "Sehr groß, skaliert mit dem Screen."),
    ("font-weight: 500;", "Mittel-fett."),
    ("letter-spacing: -0.03em;", "Etwas enger."),
    ("line-height: 1.05;", "Zeilen fast ohne Lücke."),
    ("}", "Titel-Block zu Ende."),
    (".stage__lead {", "Der Satz unter dem Titel."),
    ("margin: 0;", "Kein extra Außenabstand."),
    ("font-size: clamp(1.05rem, 2.4vw, 1.25rem);", "Lesbare Größe, etwas skalierend."),
    ("line-height: 1.45;", "Luft zwischen den Zeilen."),
    ("opacity: 0.8;", "Etwas leiser als der Titel."),
    ("max-width: 28ch;", "Maximal ~28 Zeichen pro Zeile."),
    ("}", "Lead-Block zu Ende."),
)

EXPLAIN_CSS_6 = E(
    (".controls {", "Der Block mit Farbfeld, Slider, Buttons."),
    ("display: grid;", "Untereinander mit festem Abstand."),
    ("gap: 1.1rem;", "Abstand zwischen den Feldern."),
    ("margin-top: 2rem;", "Abstand nach oben zum Text."),
    ("}", "Controls-Block zu Ende."),
    (".field {", "Ein einzelnes Label+Input-Paar."),
    ("display: grid;", "Beschriftung über der Eingabe."),
    ("gap: 0.45rem;", "Kleiner Abstand dazwischen."),
    ("width: fit-content;", "Nur so breit wie der Inhalt."),
    ("}", "Field-Block zu Ende."),
    (".field--range {", "Zusatz nur für den Slider."),
    ("width: min(100%, 18rem);", "Maximal 18rem, auf dem Handy volle Breite."),
    ("}", "Range-Feld zu Ende."),
    (".field__label {", "Die kleinen Wörter FARBE / HELLIGKEIT."),
    ("font-size: 0.8rem;", "Klein."),
    ("letter-spacing: 0.06em;", "Leicht gesperrt."),
    ("text-transform: uppercase;", "Großbuchstaben."),
    ("opacity: 0.75;", "Etwas zurückgenommen."),
    ("}", "Label-Block zu Ende."),
    ('input[type="color"] {', "Nur das Farbfeld (nicht jeder Input)."),
    ("width: 3.25rem;", "Feste Breite."),
    ("height: 3.25rem;", "Feste Höhe → Quadrat."),
    ("padding: 0;", "Kein Innenabstand."),
    ("border: 2px solid rgb(255 255 255 / 0.35);", "Heller, halbtransparenter Rahmen."),
    ("border-radius: 0.35rem;", "Leicht abgerundete Ecken."),
    ("background: transparent;", "Kein extra Hintergrund."),
    ("cursor: pointer;", "Maus zeigt Finger (am Computer)."),
    ("}", "Color-Input zu Ende."),
    ('input[type="range"] {', "Nur der Helligkeits-Slider."),
    ("width: 100%;", "So breit wie das Feld."),
    ("accent-color: var(--farbe);", "Slider-Farbe folgt --farbe."),
    ("cursor: pointer;", "Wieder klickbar."),
    ("}", "Range-Input zu Ende."),
    (".actions {", "Die Button-Reihe."),
    ("display: flex;", "Nebeneinander."),
    ("flex-wrap: wrap;", "Umbruch, wenn zu schmal."),
    ("gap: 0.75rem;", "Abstand zwischen Buttons."),
    ("margin-top: 0.35rem;", "Etwas Luft nach oben."),
    ("}", "Actions-Block zu Ende."),
    (".btn {", "Standard-Button (gefüllt)."),
    ("font: inherit;", "Gleiche Schrift wie die Seite."),
    ("font-weight: 500;", "Etwas fett."),
    ("font-size: 0.95rem;", "Normale Größe."),
    ("padding: 0.7rem 1.15rem;", "Klickfläche innen."),
    ("border: none;", "Kein Rahmen."),
    ("border-radius: 0.35rem;", "Leicht rund."),
    ("color: var(--ink);", "Dunkle Schrift."),
    ("background: var(--text);", "Heller Hintergrund (Creme)."),
    ("cursor: pointer;", "Klickbar."),
    ("}", "Btn-Block zu Ende."),
    (".btn--ghost {", "Zweiter Stil: Outline statt Füllung."),
    ("color: var(--text);", "Helle Schrift."),
    ("background: transparent;", "Durchsichtig."),
    ("border: 1px solid rgb(255 255 255 / 0.35);", "Nur ein heller Rand."),
    ("}", "Ghost-Button zu Ende."),
    (".readout {", "Die RGB-Zeile unten."),
    ("margin: 1.5rem 0 0;", "Abstand nach oben."),
    ("font-size: 0.9rem;", "Etwas kleiner."),
    ("letter-spacing: 0.04em;", "Leicht gesperrt."),
    ("opacity: 0.75;", "Zurückhaltend."),
    ("font-variant-numeric: tabular-nums;", "Zahlen gleich breit, hüpfen nicht."),
    ("}", "Readout-Block zu Ende."),
)

EXPLAIN_CSS_11 = E(
    ("@keyframes rise {", "Animation namens rise: von unsichtbar nach sichtbar."),
    ("from {", "Startzustand der Animation."),
    ("opacity: 0;", "Komplett durchsichtig."),
    ("transform: translateY(14px);", "14 Pixel weiter unten."),
    ("}", "Startzustand zu Ende."),
    ("to {", "Endzustand der Animation."),
    ("opacity: 1;", "Voll sichtbar."),
    ("transform: translateY(0);", "An der normalen Position."),
    ("}", "Endzustand zu Ende."),
    ("}", "Keyframes zu Ende."),
    (".brand__name { animation: rise 0.9s ease both; }", "Name fährt in 0,9s hoch. both = Start und Ende halten."),
    (".brand__meta { animation: rise 0.9s ease 0.08s both; }", "Gleich, aber 0,08s später."),
    (".stage__title { animation: rise 1s ease 0.12s both; }", "Titel etwas später."),
    (".stage__lead { animation: rise 1s ease 0.2s both; }", "Lead noch später."),
    (".controls { animation: rise 1s ease 0.28s both; }", "Regler danach."),
    (".readout { animation: rise 1s ease 0.36s both; }", "RGB-Zeile zuletzt."),
    ("@media (prefers-reduced-motion: reduce) {", "Wenn das System weniger Bewegung will:"),
    ("*,", "alle Elemente,"),
    ("*::before,", "Pseudo davor,"),
    ("*::after {", "Pseudo danach:"),
    ("animation-duration: 0.01ms !important;", "Animation praktisch aus."),
    ("animation-iteration-count: 1 !important;", "Nur einmal, nicht loopen."),
    ("transition-duration: 0.01ms !important;", "Auch Übergänge fast sofort."),
    ("}", "Reduced-motion-Regeln zu Ende."),
    ("}", "Media-Query zu Ende."),
)

EXPLAIN_JS_7 = E(
    ('const DEFAULT_COLOR = "#2a9d8f";', "Die Heimfarbe. const = dieser Wert bleibt, wir überschreiben ihn nicht."),
    ("const DEFAULT_BRIGHTNESS = 70;", "Die Heim-Helligkeit. Zwei Konstanten, ein Reset-Ziel."),
    ("const root = document.documentElement;", "Das <html>-Element. Genau dort leben die CSS-Zettel --farbe und --helligkeit."),
    ('const colorInput = document.getElementById("color");', "Klingelschild color. Ohne exakt diese id ist das Feld unsichtbar für JS."),
    ('const brightnessInput = document.getElementById("brightness");', "Dasselbe für den Slider. Merke: HTML-id und dieser String müssen identisch sein."),
    ("function applyMood(color, brightness) {", "Ein Schalter für beides. Eine Funktion, zwei Werte — nicht sieben Copy-Pastes."),
    ('root.style.setProperty("--farbe", color);', "Schreib den Zettel um. CSS hört zu, der Glow folgt."),
    ("root.style.setProperty(\"--helligkeit\", `${brightness}%`);", "Helligkeit braucht das %. Template-String: Zahl rein, Prozent dran."),
    ("colorInput.value = color;", "Das Farbfeld soll zeigen, was wirklich gilt — sonst lügen Steuerung und Bild."),
    ("brightnessInput.value = String(brightness);", "Inputs wollen Text. String() macht aus 70 das \"70\"."),
    ("}", "Schalter zu. Alles, was die Stimmung ändert, soll irgendwann hier durch."),
    ("function onColorChange(event) {", "Der Moment, in dem jemand die Farbe anfasst."),
    ("applyMood(event.target.value, Number(brightnessInput.value));", "Neue Farbe, alte Helligkeit. Number macht aus dem Slider-Text eine Zahl."),
    ("}", "Farb-Hörer zu."),
    ('colorInput.addEventListener("input", onColorChange);', "input = bei jeder Bewegung, nicht erst beim Loslassen."),
    ("applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);", "Beim Laden einmal den Schalter umlegen, sonst startet die Seite stumm."),
)

EXPLAIN_JS_8_NEW = E(
    ("function onBrightnessChange(event) {", "Läuft, sobald der Slider bewegt wird."),
    ("applyMood(colorInput.value, Number(event.target.value));", "Aktuelle Farbe + neuer Slider-Wert. Number macht aus '70' die Zahl 70."),
    ("}", "onBrightnessChange zu Ende."),
    ('brightnessInput.addEventListener("input", onBrightnessChange);', "Hört auf den Slider."),
)

EXPLAIN_JS_9_NEW = E(
    ("const PALETTE = [", "Liste erlaubter Zufallsfarben. Anfang."),
    ('"#2a9d8f",', "Teal."),
    ('"#e76f51",', "Koralle."),
    ('"#264653",', "Dunkles Petrol."),
    ('"#e9c46a",', "Gelb."),
    ('"#f4a261",', "Orange."),
    ('"#457b9d",', "Blau."),
    ("];", "Liste zu Ende."),
    ('const randomBtn = document.getElementById("random");', "Button Zufällige Stimmung."),
    ('const resetBtn = document.getElementById("reset");', "Button Zurücksetzen."),
    ("function onRandom() {", "Was der Zufalls-Button tut."),
    ("const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];", "Zufälligen Eintrag aus der Liste nehmen."),
    ("const brightness = 45 + Math.floor(Math.random() * 50);", "Zufällige Helligkeit zwischen 45 und 94."),
    ("applyMood(color, brightness);", "Diese Stimmung setzen."),
    ("}", "onRandom zu Ende."),
    ("function onReset() {", "Was Reset tut."),
    ("applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);", "Zurück auf Teal und 70."),
    ("}", "onReset zu Ende."),
    ('randomBtn.addEventListener("click", onRandom);', "Klick auf Zufall → onRandom."),
    ('resetBtn.addEventListener("click", onReset);', "Klick auf Reset → onReset."),
)

EXPLAIN_JS_10_NEW = E(
    ('const readout = document.getElementById("rgb-readout");', "Die RGB-Textzeile im HTML."),
    ("function hexToRgb(hex) {", "Wandelt #2a9d8f in drei Zahlen r, g, b."),
    ('const clean = hex.replace("#", "");', "Raute am Anfang weg."),
    ("const full =", "full wird der 6-stellige Hex-Code."),
    ("clean.length === 3", "Kurzform wie #2a9? Dann Zeichen verdoppeln."),
    ("? clean", "Ja: nimm clean und…"),
    ('.split("")', "…zerlege in einzelne Zeichen,"),
    (".map((c) => c + c)", "jedes Zeichen zweimal,"),
    ('.join("")', "wieder zu einem String zusammen."),
    (": clean;", "Nein, schon 6 Zeichen: so lassen."),
    ("const num = Number.parseInt(full, 16);", "Hex-String als Zahl zur Basis 16 lesen."),
    ("return {", "Ein Objekt mit drei Werten zurückgeben."),
    ("r: (num >> 16) & 255,", "Rote Komponente (obere 8 Bit)."),
    ("g: (num >> 8) & 255,", "Grüne Komponente."),
    ("b: num & 255,", "Blaue Komponente."),
    ("};", "Objekt zu Ende."),
    ("}", "hexToRgb zu Ende."),
    ("function updateReadout(hex) {", "Schreibt die RGB-Zeile auf den Bildschirm."),
    ("const { r, g, b } = hexToRgb(hex);", "r, g, b aus dem Hex holen."),
    ("readout.textContent = `RGB ${r} · ${g} · ${b}`;", "Text im HTML setzen."),
    ("}", "updateReadout zu Ende."),
    ("updateReadout(color);", "In applyMood: nach jeder Änderung die Zeile aktualisieren."),
)


def html_explain_new(step_nr):
    return {
        1: EXPLAIN_HTML_1,
        2: EXPLAIN_HTML_FONTS,
        3: EXPLAIN_HTML_ATM,
        4: EXPLAIN_HTML_STAGE,
        5: EXPLAIN_HTML_CONTROLS,
    }.get(step_nr, [])


def css_explain_new(step_nr):
    return {
        2: EXPLAIN_CSS_2,
        3: EXPLAIN_CSS_3,
        4: EXPLAIN_CSS_4,
        6: EXPLAIN_CSS_6,
        11: EXPLAIN_CSS_11,
    }.get(step_nr, [])


def js_explain_new(step_nr):
    return {
        7: EXPLAIN_JS_7,
        8: EXPLAIN_JS_8_NEW,
        9: EXPLAIN_JS_9_NEW,
        10: EXPLAIN_JS_10_NEW,
    }.get(step_nr, [])


INTROS = {
    1: "<p><strong>HTML ist das Skelett.</strong> Es sagt nur, <em>was</em> da ist — noch nicht, wie es aussieht. Ohne Gerüst bleibt der Browser leer. Du baust jetzt die kleinste gültige Seite: Kopf für den Browser, Körper fürs Auge.</p><p>Merkbild: HTML = Bauzeichnung. CSS = Licht und Material. JS = Bewegung.</p>",
    2: "<p><strong>CSS ist das Licht.</strong> Dieselbe Seite, neuer Charakter: dunkel, ruhig, eine Schrift mit Absicht. In <code>:root</code> legst du Farben auf einen Zettel — ein Name, den die ganze Seite kennt.</p><p>Merkbild: <code>var(--text)</code> heißt nicht „rate die Farbe“, sondern „hol sie vom Zettel“. Später tauscht JavaScript nur den Zettel, nicht jedes Element.</p>",
    3: "<p><strong>Die Atmosphäre liegt hinter allem.</strong> Eine Schicht färbt den Raum, ohne den Text zu stehlen. Du malst nicht Buchstabe für Buchstabe — du dimmst ein Licht. Genau das drehst du später am Regler.</p>",
    4: "<p><strong>Eine Bühne, kein Kartenstapel.</strong> Marke oben, Titel unten. Flexbox schiebt den Inhalt an seinen Platz, <code>clamp</code> lässt die Schrift mit dem Bildschirm atmen — auf dem Handy genauso wie am Rechner.</p>",
    5: "<p><strong>Zuerst die Knöpfe, dann der Strom.</strong> Farbfeld, Slider, zwei Buttons: der Browser bringt sie mit. Die <code>id</code> ist der Name auf dem Klingelschild — JavaScript findet nur, was genau so heißt.</p>",
    6: "<p><strong>Absicht statt Rohling.</strong> Dieselben Controls, aber sie gehören zur Fläche: Labels wie Beschriftungen an einem Mischpult, ein gefüllter Button, einer nur als Linie.</p>",
    7: "<p><strong>JavaScript ist der Dimmer.</strong> Du hörst auf das Farbfeld, schreibst <code>--farbe</code> auf den Zettel — CSS macht das Licht. Drei Schritte, immer dieselben: Element holen, zuhören, Variable setzen.</p>",
    8: "<p><strong>Gleiches Muster, anderer Regler.</strong> Was die Farbe kann, kann die Helligkeit. Ein Slider, ein Listener, dieselbe Funktion <code>applyMood</code>. Wenn du das einmal siehst, siehst du es überall.</p>",
    9: "<p><strong>Zufall braucht Grenzen.</strong> Eine kurze Liste erlaubter Farben — keine wilde Lotterie. Reset ist der Heimweg: dieselben zwei Startwerte, kein Rätsel.</p>",
    10: "<p><strong>Menschen lesen RGB, Computer Hex.</strong> <code>#2a9d8f</code> wird zu drei Zahlen. Du musst die Bit-Verschiebung nicht auswendig können — merke: zerlegen, anzeigen, bei jeder Änderung neu.</p>",
    11: "<p><strong>Zum Schluss: Ankunft, kein Feuerwerk.</strong> Texte kommen von unten, kurz, dann stehen sie. Und wenn jemand weniger Bewegung will, schaltet <code>prefers-reduced-motion</code> den Effekt ab. Das ist Sorgfalt.</p>",
}

CHECKS = {
    1: ["Vorschau zeigt die Überschrift Stimmungslicht", "Darunter der Satz „Seite lädt — Schritt 1 ok.“"],
    2: ["Vorschau ist dunkel, Text hell", "Schrift wirkt nicht mehr wie Standard-Times/Arial"],
    3: ["Du siehst einen teal/grünen Glow", "Der Text bleibt lesbar"],
    4: ["Oben: creative und Projekt 01", "Unten: großer Titel + kurzer Text"],
    5: ["Farbfeld, Slider und Buttons sind sichtbar", "Klicken ändert die Stimmung noch nicht"],
    6: ["Buttons haben klaren Stil", "Slider nutzt die Teal-Farbe"],
    7: ["Farbe ändern → Glow ändert sich", "Keine Abstürze"],
    8: ["Slider nach links: Glow schwächer", "Slider nach rechts: Glow stärker"],
    9: ["Zufällige Stimmung wechselt Farbe", "Zurücksetzen bringt Teal zurück"],
    10: ["Start zeigt etwa RGB 42 · 157 · 143", "Bei Farbwechsel aktualisiert sich die Zeile"],
    11: ["Texte erscheinen leicht von unten", "Farbe, Helligkeit, Zufall, Reset, RGB funktionieren"],
}

TITEL = {
    1: "HTML-Grundgerüst",
    2: "CSS-Basis & Variablen",
    3: "Atmosphäre",
    4: "Brand + Bühne",
    5: "Steuerelemente (HTML)",
    6: "Steuerelemente stylen",
    7: "JavaScript: Farbe",
    8: "Helligkeit verbinden",
    9: "Zufall & Reset",
    10: "RGB-Anzeige",
    11: "Feinschliff & fertig",
}

ZIEL = {
    1: "Eine gültige Seite, die „Hallo“ zeigt.",
    2: "Dunkler Hintergrund, lesbare Schrift, zentrale Farben.",
    3: "Eine farbige Schicht, die wir später steuern.",
    4: "Marke oben, Titel unten — eine klare Komposition.",
    5: "Farbfeld, Slider, zwei Buttons, RGB-Zeile.",
    6: "Controls sollen absichtlich aussehen, nicht nach Rohling.",
    7: "Farbwahl schreibt --farbe — der Glow folgt.",
    8: "Der Slider steuert --helligkeit.",
    9: "Zwei Buttons setzen die Stimmung.",
    10: "Unter den Controls stehen die aktuellen RGB-Zahlen.",
    11: "Texte kommen sanft rein. Projekt 01 ist komplett.",
}

CODE = {
    1: (HTML_1, "", ""),
    2: (HTML_2, CSS_2, ""),
    3: (HTML_3, CSS_3, ""),
    4: (HTML_4, CSS_4, ""),
    5: (HTML_5, CSS_4, ""),
    6: (HTML_5, CSS_6, ""),
    7: (HTML_5, CSS_6, JS_7),
    8: (HTML_5, CSS_6, JS_8),
    9: (HTML_5, CSS_6, JS_9),
    10: (HTML_5, CSS_6, JS_10),
    11: (HTML_5, CSS_11, JS_10),
}

HTML_FONTS = """<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@400;500;600&display=swap"
  rel="stylesheet"
/>"""

HTML_ATM = """<div class="atmosphere" aria-hidden="true">
  <div class="atmosphere__wash" id="wash"></div>
</div>"""

HTML_STAGE = """<header class="brand">
  <p class="brand__name">creative</p>
  <p class="brand__meta">Projekt 01</p>
</header>

<main class="stage">
  <h1 class="stage__title">Stimmungslicht</h1>
  <p class="stage__lead">
    Wähle Farbe und Helligkeit — der Raum folgt dir.
  </p>
</main>"""

HTML_CONTROLS = """<div class="controls" role="group" aria-label="Lichtsteuerung">
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

<p class="readout" id="rgb-readout" aria-live="polite">RGB —</p>"""

JS_BRIGHTNESS = """function onBrightnessChange(event) {
  applyMood(colorInput.value, Number(event.target.value));
}

brightnessInput.addEventListener("input", onBrightnessChange);"""

JS_RANDOM = """const PALETTE = [
  "#2a9d8f",
  "#e76f51",
  "#264653",
  "#e9c46a",
  "#f4a261",
  "#457b9d",
];

const randomBtn = document.getElementById("random");
const resetBtn = document.getElementById("reset");

function onRandom() {
  const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  const brightness = 45 + Math.floor(Math.random() * 50);
  applyMood(color, brightness);
}

function onReset() {
  applyMood(DEFAULT_COLOR, DEFAULT_BRIGHTNESS);
}

randomBtn.addEventListener("click", onRandom);
resetBtn.addEventListener("click", onReset);"""

JS_RGB = """const readout = document.getElementById("rgb-readout");

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

// In applyMood ganz am Ende aufrufen:
updateReadout(color);"""

NEU = {
    1: {"html": HTML_1, "css": "", "js": ""},
    2: {"html": HTML_FONTS, "css": CSS_2, "js": ""},
    3: {"html": HTML_ATM, "css": CSS_3[len(CSS_2) :].lstrip("\n"), "js": ""},
    4: {"html": HTML_STAGE, "css": CSS_4[len(CSS_3) :].lstrip("\n"), "js": ""},
    5: {"html": HTML_CONTROLS, "css": "", "js": ""},
    6: {"html": "", "css": CSS_6[len(CSS_4) :].lstrip("\n"), "js": ""},
    7: {"html": "", "css": "", "js": JS_7},
    8: {"html": "", "css": "", "js": JS_BRIGHTNESS},
    9: {"html": "", "css": "", "js": JS_RANDOM},
    10: {"html": "", "css": "", "js": JS_RGB},
    11: {"html": "", "css": CSS_11[len(CSS_6) :].lstrip("\n"), "js": ""},
}

WOHIN = {
    1: {
        "html": "Neue Datei index.html — komplett so anlegen.",
    },
    2: {
        "html": "Im <head> von index.html einfügen, direkt vor dem Link zu styles.css.",
        "css": "Neue Datei styles.css — komplett so anlegen.",
    },
    3: {
        "html": "Ganz oben im <body>, noch vor der Überschrift einfügen.",
        "css": "Unten in styles.css anhängen.",
    },
    4: {
        "html": "Die alte h1 und den Absatz im body ersetzen durch diese Bühne. Die Atmosphere-Zeilen davor bleiben.",
        "css": "Unten in styles.css anhängen.",
    },
    5: {
        "html": "Innerhalb von <main class=\"stage\">, nach dem Lead-Absatz einfügen.",
    },
    6: {
        "css": "Unten in styles.css anhängen.",
    },
    7: {
        "js": "Neue Datei script.js — komplett so anlegen.",
    },
    8: {
        "js": "In script.js unter onColorChange einfügen und den Listener dazu.",
    },
    9: {
        "js": "In script.js ergänzen: Palette, die zwei Buttons, onRandom, onReset und die click-Listener.",
    },
    10: {
        "js": "In script.js ergänzen. updateReadout(color) gehört ans Ende von applyMood.",
    },
    11: {
        "css": "Unten in styles.css anhängen.",
    },
}

steps = []
for n in range(1, 12):
    html, css, js = CODE[n]
    neu = NEU[n]
    explain = {}
    if neu.get("html", "").strip():
        explain["html"] = html_explain_new(n)
    if neu.get("css", "").strip():
        explain["css"] = css_explain_new(n)
    if neu.get("js", "").strip():
        explain["js"] = js_explain_new(n)
    steps.append(
        {
            "nr": n,
            "titel": TITEL[n],
            "ziel": ZIEL[n],
            "intro": INTROS[n],
            "checks": CHECKS[n],
            "html": html,
            "css": css,
            "js": js,
            "neu": neu,
            "wohin": WOHIN.get(n, {}),
            "explain": explain,
        }
    )

out = Path("/workspace/lernen/schritte.js")
out.write_text(
    "window.SCHRITTE = " + json.dumps(steps, ensure_ascii=False, indent=2) + ";\n",
    encoding="utf-8",
)
print(f"wrote {out} ({out.stat().st_size} bytes, {len(steps)} steps)")
