const STORAGE_KEY = "creative-handy-01-v1";

const state = {
  step: 0,
  panel: "guide",
  file: "html",
  html: "",
  css: "",
  js: "",
};

const editor = document.getElementById("editor");
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
  state.panel = name;
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.panel !== name);
  });
  document.querySelectorAll(".dock__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.panel === name);
  });
  if (name === "code") syncEditorFromState();
  if (name === "preview") refreshPreview();
  save();
}

function setFile(name) {
  flushEditorToState();
  state.file = name;
  document.querySelectorAll(".file-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.file === name);
  });
  syncEditorFromState();
  save();
}

function syncEditorFromState() {
  editor.value = state[state.file] || "";
}

function flushEditorToState() {
  if (state.panel !== "code") return;
  state[state.file] = editor.value;
}

function buildPreviewDocument() {
  let html = state.html || "<!DOCTYPE html><html><body></body></html>";
  const css = state.css || "";
  const js = state.js || "";

  html = html.replace(/<link[^>]*href=["']styles\.css["'][^>]*>/gi, "");
  html = html.replace(
    /<script[^>]*src=["']script\.js["'][^>]*>\s*<\/script>/gi,
    ""
  );

  const styleTag = `<style>${css}</style>`;
  const scriptTag = `<script>${js}<\/script>`;

  if (html.includes("</head>")) {
    html = html.replace("</head>", `${styleTag}</head>`);
  } else {
    html = `<head>${styleTag}</head>${html}`;
  }

  if (html.includes("</body>")) {
    html = html.replace("</body>", `${scriptTag}</body>`);
  } else {
    html += scriptTag;
  }

  return html;
}

let previewBlobUrl = null;

function refreshPreview() {
  const empty = !hasCode();
  previewEmpty.classList.toggle("hidden", !empty);
  if (empty) {
    preview.src = "about:blank";
    return;
  }
  const html = buildPreviewDocument();
  if (previewBlobUrl) {
    URL.revokeObjectURL(previewBlobUrl);
  }
  previewBlobUrl = URL.createObjectURL(new Blob([html], { type: "text/html" }));
  preview.src = previewBlobUrl;
}

function renderStep() {
  const step = currentStep();
  const total = window.SCHRITTE.length;
  document.getElementById("step-chip-label").textContent =
    `Schritt ${step.nr} / ${total}`;
  document.getElementById("step-title").textContent = step.titel;
  document.getElementById("step-goal").textContent = step.ziel;
  document.getElementById("step-body").innerHTML = step.body;

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
  syncEditorFromState();
  refreshPreview();
  save();
  toast("Code übernommen — schau unter Vorschau");
  setPanel("preview");
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
  tab.addEventListener("click", () => setFile(tab.dataset.file));
});

editor.addEventListener("input", () => {
  state[state.file] = editor.value;
  save();
});

document.getElementById("apply-step").addEventListener("click", applyStepCode);
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
  syncEditorFromState();
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
syncEditorFromState();
setPanel(state.panel === "code" || state.panel === "preview" ? state.panel : "guide");
refreshPreview();
