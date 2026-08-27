const STORAGE_KEY = "creative-handy-01-v2";

const state = {
  step: 0,
  panel: "guide",
  file: "html",
  html: "",
  css: "",
  js: "",
};

const editors = {
  html: document.getElementById("editor-html"),
  css: document.getElementById("editor-css"),
  js: document.getElementById("editor-js"),
};
const fileHint = document.getElementById("file-hint");
const fileEmpty = document.getElementById("file-empty");
const preview = document.getElementById("preview");
const previewEmpty = document.getElementById("preview-empty");
const toastEl = document.getElementById("toast");
const sheet = document.getElementById("step-sheet");

function hasCode() {
  return Boolean(state.html.trim() || state.css.trim() || state.js.trim());
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    Object.assign(state, saved);
  } catch {
    /* ignore broken storage */
  }
}

function save() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      step: state.step,
      panel: state.panel,
      file: state.file,
      html: state.html,
      css: state.css,
      js: state.js,
    })
  );
}

function currentStep() {
  return window.SCHRITTE[state.step];
}

function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.remove("hidden");
  window.clearTimeout(toast.tid);
  toast.tid = window.setTimeout(() => toastEl.classList.add("hidden"), 2400);
}

function setPanel(name) {
  flushEditorToState();
  state.panel = name;
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.panel !== name);
  });
  document.querySelectorAll(".dock__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.panel === name);
  });
  if (name === "code") {
    syncEditorsFromState();
    showActiveEditor();
  }
  if (name === "preview") {
    window.setTimeout(refreshPreview, 0);
  }
  save();
}

function fileLabel(name) {
  return { html: "index.html", css: "styles.css", js: "script.js" }[name];
}

function showActiveEditor() {
  ["html", "css", "js"].forEach((key) => {
    editors[key].classList.toggle("is-off", key !== state.file);
    editors[key].classList.remove("hidden");
  });
  document.querySelectorAll(".file-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.file === state.file);
  });
  fileHint.textContent = `Du bearbeitest ${fileLabel(state.file)}`;
  const empty = !(state[state.file] || "").trim();
  const stepHas = Boolean((currentStep()[state.file] || "").trim());
  fileEmpty.classList.toggle("hidden", !empty);
  if (empty && !stepHas) {
    fileEmpty.textContent =
      state.file === "css"
        ? "CSS kommt ab Schritt 2. In Schritt 1 bleibt diese Datei leer."
        : state.file === "js"
          ? "JavaScript kommt ab Schritt 7. Bis dahin bleibt diese Datei leer."
          : "Diese Datei ist noch leer.";
  } else if (empty) {
    fileEmpty.textContent =
      "Diese Datei ist noch leer. Schreib sie aus der Anleitung ab — oder tippe „Datei aus Schritt holen“.";
  }
}

function setFile(name) {
  flushEditorToState();
  state.file = name;
  showActiveEditor();
  save();
}

function syncEditorsFromState() {
  ["html", "css", "js"].forEach((key) => {
    if (editors[key].value !== (state[key] || "")) {
      editors[key].value = state[key] || "";
    }
  });
}

function flushEditorToState() {
  ["html", "css", "js"].forEach((key) => {
    if (editors[key]) state[key] = editors[key].value;
  });
}

function buildPreviewDocument() {
  const css = state.css || "";
  const js = state.js || "";
  let html = (state.html || "").trim() || "<!DOCTYPE html><html><head></head><body></body></html>";

  html = html.replace(/<link[^>]*styles\.css[^>]*>/gi, "");
  html = html.replace(/<script[^>]*src=["']script\.js["'][^>]*>[\s\S]*?<\/script>/gi, "");

  const pad = css.trim() ? "body{ padding: 0; }" : "body{ padding: 1.35rem 1.15rem; }";
  const boot = `
    :root { color-scheme: dark; }
    html, body {
      margin: 0;
      min-height: 100%;
      height: 100%;
      background: #12151a;
      color: #f4f0e8;
    }
    body {
      box-sizing: border-box;
      font-family: Outfit, system-ui, sans-serif;
    }
    ${pad}
    h1 { font-size: clamp(1.8rem, 7vw, 2.8rem); line-height: 1.15; margin: 0 0 0.5rem; }
    p { margin: 0; font-size: 1.05rem; line-height: 1.45; opacity: 0.88; }
  `;

  const cssBlock = `<style id="preview-boot">${boot}</style><style id="preview-css">${css}</style>`;
  const jsBlock = js.trim() ? `<script id="preview-js">${js}<\/script>` : "";

  if (/<head[^>]*>/i.test(html)) {
    html = html.replace(/<head[^>]*>/i, (open) => `${open}${cssBlock}`);
  } else if (/<\/head>/i.test(html)) {
    html = html.replace(/<\/head>/i, `${cssBlock}</head>`);
  } else {
    html = `<head>${cssBlock}</head>${html}`;
  }

  if (/<\/body>/i.test(html)) {
    html = html.replace(/<\/body>/i, `${jsBlock}</body>`);
  } else {
    html += jsBlock;
  }

  return html;
}

function refreshPreview() {
  const empty = !hasCode();
  previewEmpty.classList.toggle("hidden", !empty);
  if (empty) {
    preview.removeAttribute("src");
    preview.srcdoc = "<!doctype html><title></title><body></body>";
    return;
  }
  preview.removeAttribute("src");
  preview.srcdoc = buildPreviewDocument();
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildGuide(step) {
  const files = [
    { key: "html", label: "HTML", file: "index.html" },
    { key: "css", label: "CSS", file: "styles.css" },
    { key: "js", label: "JavaScript", file: "script.js" },
  ];

  let html = step.intro || "";

  if (step.nr > 1) {
    html += `<p class="stand">Was du in den Schritten davor gebaut hast, bleibt. Hier kommt nur das Neue.</p>`;
  } else {
    html += `
      <div class="path-box">
        <strong>Zwei Wege — beide zählen</strong>
        <ol>
          <li><strong>Abschreiben:</strong> Code unten lesen, Tab <em>Code</em>, oben HTML / CSS / JS wählen, Zeile für Zeile tippen.</li>
          <li><strong>Übernehmen:</strong> Button unten, wenn du erst die Idee prüfen willst.</li>
        </ol>
      </div>
    `;
  }

  files.forEach((item) => {
    const code = ((step.neu && step.neu[item.key]) || "").trim();
    if (!code) return;
    const wohin = (step.wohin && step.wohin[item.key]) || "";
    html += `<h3>Neu in diesem Schritt — ${item.label}</h3>`;
    html += `<p class="file-name">${item.file}</p>`;
    if (wohin) html += `<p class="wohin">${escapeHtml(wohin)}</p>`;
    html += `<pre class="copy-block"><code>${escapeHtml(code)}</code></pre>`;
    html += `<p class="tiny">Tipp auf den Block kopiert ihn. Im Tab Code die richtige Datei wählen, dann einfügen oder abschreiben.</p>`;

    const lines = (step.explain && step.explain[item.key]) || [];
    if (!lines.length) return;
    html += `<h3>Was jede neue Zeile bedeutet — ${item.label}</h3><ol class="lines">`;
    lines.forEach((row) => {
      html += `<li><code>${escapeHtml(row.line)}</code><span>${escapeHtml(row.mean)}</span></li>`;
    });
    html += `</ol>`;
  });

  return html;
}

function renderStep() {
  const step = currentStep();
  const total = window.SCHRITTE.length;
  document.getElementById("step-chip-label").textContent =
    `Schritt ${step.nr} / ${total}`;
  document.getElementById("step-title").textContent = step.titel;
  document.getElementById("step-goal").textContent = step.ziel;
  document.getElementById("step-body").innerHTML = buildGuide(step);

  const checks = document.getElementById("step-checks");
  checks.innerHTML = "";
  step.checks.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    checks.appendChild(li);
  });

  document.getElementById("prev-step").disabled = state.step === 0;
  document.getElementById("next-step").disabled =
    state.step === window.SCHRITTE.length - 1;

  document.getElementById("apply-step").disabled = !step.html && !step.css && !step.js;

  renderStepList();
}

function renderStepList() {
  const list = document.getElementById("step-list");
  list.innerHTML = "";
  window.SCHRITTE.forEach((step, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = `${step.nr}. ${step.titel}`;
    btn.classList.toggle("is-current", index === state.step);
    btn.addEventListener("click", () => {
      state.step = index;
      renderStep();
      setPanel("guide");
      sheet.close();
      save();
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function applyStepCode() {
  const step = currentStep();
  state.html = step.html || "";
  state.css = step.css || "";
  state.js = step.js || "";
  syncEditorsFromState();
  save();
  toast("Code übernommen — schau unter Vorschau");
  state.panel = "preview";
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.panel !== "preview");
  });
  document.querySelectorAll(".dock__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.panel === "preview");
  });
  window.setTimeout(refreshPreview, 0);
  save();
}

function goStep(delta) {
  const next = state.step + delta;
  if (next < 0 || next >= window.SCHRITTE.length) return;
  state.step = next;
  renderStep();
  setPanel("guide");
  window.scrollTo(0, 0);
  document.getElementById("panel-guide").scrollTop = 0;
  save();
}

document.querySelectorAll(".dock__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    flushEditorToState();
    setPanel(btn.dataset.panel);
  });
});

document.querySelectorAll(".file-tab").forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setFile(tab.dataset.file);
  });
});

["html", "css", "js"].forEach((key) => {
  editors[key].addEventListener("input", () => {
    state[key] = editors[key].value;
    if (key === state.file) showActiveEditor();
    save();
  });
});

document.getElementById("apply-step").addEventListener("click", applyStepCode);
document.getElementById("fill-file").addEventListener("click", () => {
  const step = currentStep();
  state[state.file] = step[state.file] || "";
  syncEditorsFromState();
  showActiveEditor();
  save();
  toast(`${state.file.toUpperCase()} aus diesem Schritt geholt`);
});
document.getElementById("clear-file").addEventListener("click", () => {
  state[state.file] = "";
  syncEditorsFromState();
  showActiveEditor();
  save();
  toast(`${state.file.toUpperCase()}-Datei ist leer — jetzt abschreiben`);
});
document.getElementById("prev-step").addEventListener("click", () => goStep(-1));
document.getElementById("next-step").addEventListener("click", () => goStep(1));
document.getElementById("open-steps").addEventListener("click", () => sheet.showModal());

document.getElementById("reset-progress").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  state.step = 0;
  state.panel = "guide";
  state.file = "html";
  state.html = "";
  state.css = "";
  state.js = "";
  renderStep();
  syncEditorsFromState();
  showActiveEditor();
  refreshPreview();
  setPanel("guide");
  sheet.close();
  toast("Fortschritt gelöscht");
});

document.getElementById("step-body").addEventListener("click", async (event) => {
  const pre = event.target.closest("pre");
  if (!pre) return;
  const text = pre.innerText;
  try {
    await navigator.clipboard.writeText(text);
    toast("Code kopiert");
  } catch {
    toast("Kopieren nicht möglich — lange drücken");
  }
});

if (window.visualViewport) {
  const onViewport = () => {
    const covered =
      window.innerHeight - window.visualViewport.height > 90;
    document.body.classList.toggle("kb-open", covered);
  };
  window.visualViewport.addEventListener("resize", onViewport);
}

load();
renderStep();
syncEditorsFromState();
showActiveEditor();
setPanel(state.panel === "code" || state.panel === "preview" ? state.panel : "guide");
refreshPreview();
