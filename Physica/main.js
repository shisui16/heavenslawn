/**
 * Physica v2 – main.js
 * Two-level hierarchy: Books → Chapters → Items
 */

import { analyticalMechanics      } from "./books/analyticalMechanics.js";
import { calculus                 } from "./books/calculus.js";
import { electromagnetism         } from "./books/electromagnetism.js";
import { topologyCondensedMatter  } from "./books/topologyCondensedMatter.js";
import { neutrinoPhysics          } from "./books/neutrinoPhysics.js";
import { proofMath                } from "./books/proofMath.js";

// ─── Book Registry ────────────────────────────────────────────────────────
// To add a new book: import it above, then push it here.
const BOOKS = [analyticalMechanics, calculus, electromagnetism, topologyCondensedMatter, neutrinoPhysics, proofMath];

// ─── State ────────────────────────────────────────────────────────────────
const state = {
  bookIndex:    0,
  chapterIndex: 0,
  itemIndex:    0,
  score:        0,
  streak:       0,
  answered:     false,
  reviewMode:   false,
  errItems:     [],   // items answered wrongly this session
};

// ─── Global persistence (resume across reloads) ──────────────────────────
const GLOBAL_STORAGE_KEY = "physica_global_v2";

function saveGlobalState() {
  const toStore = {
    bookIndex: state.bookIndex,
    chapterIndex: state.chapterIndex,
    itemIndex: state.itemIndex,
    score: state.score,
    streak: state.streak,
  };
  localStorage.setItem(GLOBAL_STORAGE_KEY, JSON.stringify(toStore));
}

function loadGlobalState() {
  const raw = localStorage.getItem(GLOBAL_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Failed to parse global state", e);
    return null;
  }
}

// ─── Derived helpers ──────────────────────────────────────────────────────
const currentBook    = () => BOOKS[state.bookIndex];
const currentChapter = () => currentBook().chapters[state.chapterIndex];
const currentItems   = () => state.reviewMode ? state.errItems : currentChapter().content;

// ─── DOM ─────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const DOM = {
  overlay:        $("overlay"),
  sidebar:        $("sidebar"),
  sidebarClose:   $("sidebarClose"),
  menuBtn:        $("menuBtn"),
  main:           $("main"),
  bookSelect:     $("bookSelect"),
  chapterNav:     $("chapterNav"),
  streakCount:    $("streakCount"),
  sidebarScore:   $("sidebarScore"),
  navStudy:       $("navStudy"),
  navReview:      $("navReview"),
  bcBook:         $("bcBook"),
  bcChapter:      $("bcChapter"),
  itemCounter:    $("itemCounter"),
  progressFill:   $("progressFill"),
  textCard:       $("textCard"),
  textBody:       $("textBody"),
  textPrev:       $("textPrev"),
  textNext:       $("textNext"),
  questionCard:   $("questionCard"),
  questionTypeTag:$("questionTypeTag"),
  questionBody:   $("questionBody"),
  mcqOptions:     $("mcqOptions"),
  msqOptions:     $("msqOptions"),
  numericWrap:    $("numericWrap"),
  numericValue:   $("numericValue"),
  numericUnit:    $("numericUnit"),
  symbolicWrap:   $("symbolicWrap"),
  symbolicInput:  $("symbolicInput"),
  symPreview:     $("symPreview"),
  feedback:       $("feedback"),
  feedbackIcon:   $("feedbackIcon"),
  feedbackText:   $("feedbackText"),
  submitBtn:      $("submitBtn"),
  nextBtn:        $("nextBtn"),
  questionPrev:   $("questionPrev"),
  completion:     $("completion"),
  completionStats:$("completionStats"),
  restartBtn:     $("restartBtn"),
  nextChapterBtn: $("nextChapterBtn"),
};

// ─── Sidebar open/close ───────────────────────────────────────────────────
function openSidebar() {
  DOM.sidebar.classList.add("open");
  DOM.overlay.classList.add("on");
}
function closeSidebar() {
  DOM.sidebar.classList.remove("open");
  DOM.overlay.classList.remove("on");
}

function handleMenuToggle(e) {
  e.preventDefault();
  const isMobile = window.innerWidth <= 820;
  if (isMobile) {
    if (DOM.sidebar.classList.contains("open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  } else {
    DOM.sidebar.classList.toggle("hidden-desktop");
    DOM.main.classList.toggle("wide");
  }
}

// Remove any existing listener, then attach both
DOM.menuBtn.removeEventListener("click", handleMenuToggle);
DOM.menuBtn.removeEventListener("touchstart", handleMenuToggle);
DOM.menuBtn.addEventListener("click", handleMenuToggle);
DOM.menuBtn.addEventListener("touchstart", handleMenuToggle);

DOM.sidebarClose.addEventListener("click", closeSidebar);
DOM.overlay.addEventListener("click", closeSidebar);

// ─── Populate book dropdown ───────────────────────────────────────────────
function buildBookSelect() {
  DOM.bookSelect.innerHTML = "";
  BOOKS.forEach((book, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = book.title;
    DOM.bookSelect.appendChild(opt);
  });
  DOM.bookSelect.value = state.bookIndex;
}

DOM.bookSelect.addEventListener("change", e => {
  state.bookIndex    = parseInt(e.target.value);
  state.chapterIndex = 0;
  resetSession();
  buildChapterNav();        // rebuilds nav, resets saved positions display
  renderCurrent();
  saveGlobalState();        // store the new book selection
});

// ─── Build chapter nav list ───────────────────────────────────────────────
function buildChapterNav() {
  DOM.chapterNav.innerHTML = "";
  const book = currentBook();
  book.chapters.forEach((ch, i) => {
    const btn = document.createElement("button");
    btn.className = "ch-item" + (i === state.chapterIndex ? " active" : "");
    btn.dataset.idx = i;

    const savedPos = loadProgress(state.bookIndex, i);
    const total = ch.content.length;
    const isDone = savedPos >= total;

    btn.innerHTML = `
      <span class="ch-num">${i + 1}</span>
      <span>${ch.title}</span>
      <span class="ch-done">✓</span>
    `;
    if (isDone) btn.classList.add("done");

    btn.addEventListener("click", () => switchChapter(i));
    DOM.chapterNav.appendChild(btn);
  });
}

function updateChapterNav() {
  DOM.chapterNav.querySelectorAll(".ch-item").forEach((btn, i) => {
    btn.classList.toggle("active", i === state.chapterIndex);
    const ch = currentBook().chapters[i];
    const savedPos = loadProgress(state.bookIndex, i);
    btn.classList.toggle("done", savedPos >= ch.content.length);
  });
}

function switchChapter(idx) {
  state.chapterIndex = idx;
  state.itemIndex    = loadProgress(state.bookIndex, idx);
  resetSession();
  updateChapterNav();
  renderCurrent();
  if (window.innerWidth <= 820) closeSidebar();
  saveGlobalState();
}


// ─── LocalStorage ─────────────────────────────────────────────────────────
const storageKey = (bIdx, cIdx) => `physica2_b${bIdx}_c${cIdx}_pos`;

function saveProgress() {
  // Save per‑chapter position (for the badge)
  localStorage.setItem(storageKey(state.bookIndex, state.chapterIndex), state.itemIndex);
  // Save global session state (book, chapter, item, score, streak)
  saveGlobalState();
}

function loadProgress(bIdx, cIdx) {
  const ch = BOOKS[bIdx].chapters[cIdx];
  const saved = parseInt(localStorage.getItem(storageKey(bIdx, cIdx)) || "0");
  return Math.min(saved, ch.content.length);
}

// ─── Session reset (on chapter/book switch) ────────────────────────────────
function resetSession() {
  state.score    = 0;
  state.streak   = 0;
  state.answered = false;
  state.errItems = [];
  state.reviewMode = false;
  DOM.navStudy.classList.add("active");
  DOM.navReview.classList.remove("active");
  saveGlobalState();   // persist the reset (score=0, streak=0)
}


// ─── KaTeX ────────────────────────────────────────────────────────────────
function renderMath(el) {
  if (!window.renderMathInElement) return;
  renderMathInElement(el, {
    delimiters: [
      { left: "$$", right: "$$", display: true  },
      { left: "$",  right: "$",  display: false },
    ],
    throwOnError: false,
  });
}

function ensureKatex(cb) {
  if (window.renderMathInElement) return cb();
  const t = setInterval(() => {
    if (window.renderMathInElement) { clearInterval(t); cb(); }
  }, 40);
}

// ─── Topbar / UI state update ─────────────────────────────────────────────
function updateUI() {
  const items = currentItems();
  const total = items.length;
  const idx   = state.itemIndex;

  DOM.bcBook.textContent    = currentBook().title;
  DOM.bcChapter.textContent = currentChapter().title;
  DOM.itemCounter.textContent = `${Math.min(idx + 1, total)} / ${total}`;
  DOM.streakCount.textContent = state.streak;
  DOM.sidebarScore.textContent = state.score;

  const pct = total > 0 ? Math.round((idx / total) * 100) : 0;
  DOM.progressFill.style.width = `${pct}%`;
}

// ─── Render dispatcher ────────────────────────────────────────────────────
function renderCurrent() {
  const items = currentItems();

  if (state.itemIndex >= items.length) {
    showCompletion();
    return;
  }

  const item = items[state.itemIndex];
  state.answered = false;
  updateUI();
  hideCards();

  if (item.type === "text") renderText(item);
  else if (item.type === "proof_guided") renderProofGuided(item);
  else if (item.type === "proof_free")   renderProofFree(item);
  else if (item.type === "proof_debug")  renderProofDebug(item);
  else                                   renderQuestion(item);
}

function hideCards() {
  DOM.textCard.classList.add("hidden");
  DOM.questionCard.classList.add("hidden");
  DOM.completion.classList.add("hidden");
}

// ─── Text card ────────────────────────────────────────────────────────────
function renderText(item) {
  DOM.textCard.classList.remove("hidden");
  DOM.textBody.innerHTML = item.data || "";
  ensureKatex(() => renderMath(DOM.textBody));
  DOM.textPrev.classList.toggle("hidden", state.itemIndex === 0);
}

DOM.textNext.addEventListener("click", advance);
DOM.textPrev.addEventListener("click", retreat);

// ─── Question card ────────────────────────────────────────────────────────
function renderQuestion(item) {
  DOM.questionCard.classList.remove("hidden");
  DOM.feedback.classList.add("hidden");
  DOM.nextBtn.classList.add("hidden");
  DOM.submitBtn.classList.remove("hidden");
  DOM.submitBtn.disabled = false;
  DOM.questionPrev.classList.toggle("hidden", state.itemIndex === 0);

  // Enable inputs
  DOM.numericValue.disabled = false;
  DOM.numericUnit.disabled  = false;
  DOM.symbolicInput.disabled = false;

  const labels = { mcq:"Multiple Choice", msq:"Multi-Select", numeric:"Numerical", symbolic:"Symbolic",
                   proof_guided:"Guided Proof", proof_free:"Free Proof", proof_debug:"Debug Proof" };
  DOM.questionTypeTag.textContent = labels[item.type] || item.type;

  DOM.questionBody.innerHTML = item.question;
  ensureKatex(() => renderMath(DOM.questionBody));

  // Reset all input sections
  DOM.mcqOptions.innerHTML = "";
  DOM.msqOptions.innerHTML = "";
  DOM.mcqOptions.classList.add("hidden");
  DOM.msqOptions.classList.add("hidden");
  DOM.numericWrap.classList.add("hidden");
  DOM.symbolicWrap.classList.add("hidden");

  if      (item.type === "mcq")      renderMCQ(item);
  else if (item.type === "msq")      renderMSQ(item);
  else if (item.type === "numeric")  renderNumeric(item);
  else if (item.type === "symbolic") renderSymbolic(item);
}

// ── MCQ ────────────────────────────────────────────────────────────────────
function renderMCQ(item) {
  DOM.mcqOptions.classList.remove("hidden");
  const LABELS = ["A","B","C","D","E"];

  item.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.dataset.i = i;
    btn.innerHTML = `<span class="opt-lbl">${LABELS[i]}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => {
      if (state.answered) return;
      DOM.mcqOptions.querySelectorAll(".opt-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
    DOM.mcqOptions.appendChild(btn);
  });
  ensureKatex(() => renderMath(DOM.mcqOptions));

  DOM.submitBtn.onclick = () => {
    const sel = DOM.mcqOptions.querySelector(".opt-btn.selected");
    if (!sel) return flash("Select an answer first.");
    const chosen  = parseInt(sel.dataset.i);
    const correct = item.correct[0];
    grade(chosen === correct, item, () => {
      DOM.mcqOptions.querySelectorAll(".opt-btn").forEach((b, i) => {
        b.disabled = true;
        if (i === correct) b.classList.add("correct");
        else if (i === chosen) b.classList.add("wrong");
      });
    });
  };
}

// ── MSQ ────────────────────────────────────────────────────────────────────
function renderMSQ(item) {
  DOM.msqOptions.classList.remove("hidden");
  const LABELS = ["A","B","C","D","E"];

  item.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.dataset.i = i;
    btn.innerHTML = `<span class="opt-lbl">${LABELS[i]}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => {
      if (state.answered) return;
      btn.classList.toggle("selected");
    });
    DOM.msqOptions.appendChild(btn);
  });
  ensureKatex(() => renderMath(DOM.msqOptions));

  DOM.submitBtn.onclick = () => {
    const chosen  = [...DOM.msqOptions.querySelectorAll(".opt-btn.selected")]
                      .map(b => parseInt(b.dataset.i)).sort((a,b) => a-b);
    const correct = [...item.correct].sort((a,b) => a-b);
    const ok = JSON.stringify(chosen) === JSON.stringify(correct);
    grade(ok, item, () => {
      DOM.msqOptions.querySelectorAll(".opt-btn").forEach((b, i) => {
        b.disabled = true;
        if (correct.includes(i)) b.classList.add("correct");
        else if (chosen.includes(i)) b.classList.add("wrong");
      });
    });
  };
}

// ── Numeric ────────────────────────────────────────────────────────────────
function renderNumeric(item) {
  DOM.numericWrap.classList.remove("hidden");
  DOM.numericValue.value = "";
  DOM.numericUnit.value  = "";

  const submit = () => {
    const val  = parseFloat(DOM.numericValue.value);
    const unit = DOM.numericUnit.value.trim();
    if (isNaN(val)) return flash("Enter a number.");
    const ok = validateNumeric(val, unit, item.answer, item.tolerance ?? 0.02);
    grade(ok, item, () => {
      DOM.numericValue.disabled = true;
      DOM.numericUnit.disabled  = true;
    });
  };

  DOM.submitBtn.onclick = submit;
  DOM.numericUnit.onkeydown = e => { if (e.key === "Enter") submit(); };
}

// ── Symbolic ───────────────────────────────────────────────────────────────
function renderSymbolic(item) {
  DOM.symbolicWrap.classList.remove("hidden");
  DOM.symbolicInput.value = "";
  DOM.symPreview.innerHTML = "";

  // Clone to strip old listeners
  const newInput = DOM.symbolicInput.cloneNode(true);
  DOM.symbolicInput.parentNode.replaceChild(newInput, DOM.symbolicInput);
  DOM.symbolicInput = newInput; // update reference in DOM object
  // Note: DOM is a plain object so we update it directly
  Object.defineProperty(DOM, "symbolicInput", { value: newInput, writable: true, configurable: true });

  newInput.addEventListener("input", () => {
    const expr = newInput.value.trim();
    if (!expr) { DOM.symPreview.innerHTML = ""; return; }
    try {
      const latex = nerdamer.convertToLaTeX(expr);
      ensureKatex(() => {
        try { katex.render(latex, DOM.symPreview, { throwOnError: false, displayMode: true }); }
        catch (_) { DOM.symPreview.textContent = expr; }
      });
    } catch (_) { DOM.symPreview.innerHTML = ""; }
  });

  DOM.submitBtn.onclick = () => {
    const expr = newInput.value.trim();
    if (!expr) return flash("Enter an expression.");
    const ok = validateSymbolic(expr, item.integrand, item.variable || "x");
    grade(ok, item, () => { newInput.disabled = true; });
  };
}

// ─── Validation ───────────────────────────────────────────────────────────
function validateNumeric(userVal, userUnit, answerStr, tolerance) {
  const m = String(answerStr).match(/^([-\d.eE+]+)\s*(.*)$/);
  if (!m) return false;
  const ansVal  = parseFloat(m[1]);
  const ansUnit = m[2].trim();
  const relErr  = Math.abs(userVal - ansVal) / (Math.abs(ansVal) || 1);
  const numOk   = relErr <= tolerance;
  const unitOk  = ansUnit === "" || normUnit(userUnit) === normUnit(ansUnit);
  return numOk && unitOk;
}

function normUnit(u) {
  return u.replace(/\s+/g,"")
          .replace(/meters?/gi,"m").replace(/seconds?/gi,"s")
          .replace(/kilograms?/gi,"kg").replace(/newtons?/gi,"N")
          .replace(/joules?/gi,"J").replace(/watts?/gi,"W")
          .replace(/pascals?/gi,"Pa").replace(/hertz/gi,"Hz")
          .replace(/radians?/gi,"rad").replace(/coulombs?/gi,"C")
          .replace(/volts?/gi,"V").replace(/amperes?|amps?/gi,"A")
          .replace(/teslas?/gi,"T").replace(/ohms?/gi,"Ω")
          .toLowerCase();
}

function validateSymbolic(userExpr, integrand, variable) {
  try {
    const diffed     = nerdamer.diff(userExpr, variable).toString();
    const expected   = nerdamer(integrand).toString();
    const residual   = nerdamer(`${diffed}-(${expected})`).evaluate().toString();
    const simplified = nerdamer.simplify(residual).toString();
    return simplified === "0" || parseFloat(simplified) === 0;
  } catch(e) {
    console.warn("Symbolic validation error:", e);
    return false;
  }
}

// ─── Grade & feedback ─────────────────────────────────────────────────────
function grade(isCorrect, item, onReveal) {
  state.answered = true;
  onReveal?.();

  DOM.feedback.classList.remove("hidden","ok","err");
  if (isCorrect) {
    state.score++;
    state.streak++;
    DOM.feedback.classList.add("ok");
    DOM.feedbackIcon.textContent = "✓";
    DOM.feedbackText.innerHTML = item.explanation
      ? `<strong>Correct!</strong> ${item.explanation}`
      : "<strong>Correct!</strong> Well done.";
  } else {
    state.streak = 0;
    if (!state.reviewMode) state.errItems.push(item);
    DOM.feedback.classList.add("err");
    DOM.feedbackIcon.textContent = "✗";
    const hint = item.hint ? `<br><em>Hint: ${item.hint}</em>` : "";
    const ans  = item.answer ? `<br>Expected: <code>${item.answer}</code>` : "";
    DOM.feedbackText.innerHTML = `<strong>Incorrect.</strong>${hint}${ans}`;
  }

  ensureKatex(() => renderMath(DOM.feedback));
  DOM.submitBtn.classList.add("hidden");
  DOM.nextBtn.classList.remove("hidden");
  DOM.streakCount.textContent  = state.streak;
  DOM.sidebarScore.textContent = state.score;
  saveProgress();
  updateChapterNav();
}

function flash(msg) {
  DOM.feedbackText.textContent = msg;
  DOM.feedback.classList.remove("hidden","ok","err");
  DOM.feedback.classList.add("err");
  DOM.feedbackIcon.textContent = "!";
  setTimeout(() => DOM.feedback.classList.add("hidden"), 1800);
}

// ─── Navigation ───────────────────────────────────────────────────────────
function advance() {
  const items = currentItems();
  state.itemIndex = Math.min(state.itemIndex + 1, items.length);
  saveProgress();
  renderCurrent();
}

function retreat() {
  state.itemIndex = Math.max(0, state.itemIndex - 1);
  renderCurrent();
}

DOM.nextBtn.addEventListener("click", advance);
DOM.questionPrev.addEventListener("click", retreat);

document.addEventListener("keydown", e => {
  if (e.target.tagName === "INPUT") return;
  if (e.key === "Enter") {
    state.answered ? DOM.nextBtn.click() : DOM.submitBtn.click();
  }
  if (e.key === "ArrowRight" && !state.answered) return;
  if (e.key === "ArrowRight") DOM.nextBtn.click();
  if (e.key === "ArrowLeft")  DOM.questionPrev.click();
});

// ─── Completion screen ────────────────────────────────────────────────────
function showCompletion() {
  DOM.completion.classList.remove("hidden");

  const ch    = currentChapter();
  const qs    = state.reviewMode
    ? state.errItems.length
    : ch.content.filter(i => i.type !== "text").length;
  const pct   = qs > 0 ? Math.round((state.score / qs) * 100) : 100;
  const book  = currentBook();
  const hasNext = state.chapterIndex < book.chapters.length - 1;

  DOM.completionStats.innerHTML = `
    <div>Score <span class="hi">${state.score} / ${qs}</span></div>
    <div>Accuracy <span class="hi">${pct}%</span></div>
    <div>Streak <span class="hi">${state.streak}</span></div>
  `;

  DOM.nextChapterBtn.classList.toggle("hidden", !hasNext);
}

DOM.restartBtn.addEventListener("click", () => {
  state.itemIndex = 0;
  resetSession();
  saveProgress();
  DOM.completion.classList.add("hidden");
  renderCurrent();
});


DOM.nextChapterBtn.addEventListener("click", () => {
  DOM.completion.classList.add("hidden");
  switchChapter(state.chapterIndex + 1);
  saveGlobalState();   
});

// ─── Mode buttons ─────────────────────────────────────────────────────────
DOM.navStudy.addEventListener("click", () => {
  state.reviewMode  = false;
  state.itemIndex   = loadProgress(state.bookIndex, state.chapterIndex);
  DOM.navStudy.classList.add("active");
  DOM.navReview.classList.remove("active");
  DOM.completion.classList.add("hidden");
  renderCurrent();
});

DOM.navReview.addEventListener("click", () => {
  if (state.errItems.length === 0) {
    alert("No errors to review yet. Answer some questions first!");
    return;
  }
  state.reviewMode = true;
  state.itemIndex  = 0;
  DOM.navReview.classList.add("active");
  DOM.navStudy.classList.remove("active");
  DOM.completion.classList.add("hidden");
  renderCurrent();
});

// ═══════════════════════════════════════════════════════════════════════════
// PROOF TYPES  (added — do not remove existing logic above)
// ═══════════════════════════════════════════════════════════════════════════

// ── Shared: mount proof UI inside the questionCard ─────────────────────────
function mountProofCard(item, typeLabel, bodyHTML) {
  DOM.questionCard.classList.remove("hidden");
  DOM.feedback.classList.add("hidden");
  DOM.nextBtn.classList.add("hidden");
  DOM.submitBtn.classList.add("hidden");   // proof types manage their own buttons
  DOM.questionPrev.classList.toggle("hidden", state.itemIndex === 0);

  // Clear sub-sections used by MCQ/numeric/symbolic
  DOM.mcqOptions.innerHTML  = "";
  DOM.msqOptions.innerHTML  = "";
  DOM.mcqOptions.classList.add("hidden");
  DOM.msqOptions.classList.add("hidden");
  DOM.numericWrap.classList.add("hidden");
  DOM.symbolicWrap.classList.add("hidden");

  DOM.questionTypeTag.textContent = typeLabel;
  DOM.questionBody.innerHTML = bodyHTML;
  ensureKatex(() => renderMath(DOM.questionBody));
}

// Helper: show feedback banner (reuses existing .feedback classes)
function proofFeedback(cls, icon, html) {
  DOM.feedback.classList.remove("hidden", "ok", "err", "info");
  DOM.feedback.classList.add(cls);
  DOM.feedbackIcon.textContent = icon;
  DOM.feedbackText.innerHTML   = html;
  ensureKatex(() => renderMath(DOM.feedback));
}

// Helper: normalise a string for loose comparison
function normStr(s) {
  return String(s).trim().toLowerCase().replace(/\s+/g, " ");
}

// Helper: try symbolic equivalence, fallback to string match
function proofMatchExpr(userRaw, expectedRaw) {
  const u = normStr(userRaw);
  const e = normStr(expectedRaw);
  if (u === e) return true;
  // Try nerdamer simplification if available
  try {
    const residual   = nerdamer(`(${userRaw})-(${expectedRaw})`).evaluate().toString();
    const simplified = nerdamer.simplify(residual).toString();
    return simplified === "0" || parseFloat(simplified) === 0;
  } catch (_) { return false; }
}

function clearProofUI() {
  // Remove all step containers (guided)
  DOM.questionCard.querySelectorAll('.proof-guided-wrap').forEach(el => el.remove());
  // Remove all free‑proof textarea / preview / solutions
  DOM.questionCard.querySelectorAll('.proof-free-wrap, .proof-model-solution, .proof-checklist').forEach(el => el.remove());
  // Remove all debug‑proof blocks
  DOM.questionCard.querySelectorAll('.proof-debug-wrap').forEach(el => el.remove());
  
  // Remove custom buttons we added to the actions row  
  const actions = DOM.questionCard.querySelector('.card-actions');
  if (actions) {
    actions.querySelectorAll('.proof-check-btn').forEach(el => el.remove());
    // For free proof: submit button, preview toggle, done button
    const text = ['Submit Proof', 'Preview LaTeX', 'Hide Preview', 'Done →', 'Submit Analysis'];
    actions.querySelectorAll('button').forEach(btn => {
      if (text.includes(btn.textContent)) btn.remove();
    });
  }
}

// ── proof_guided ────────────────────────────────────────────────────────────
function renderProofGuided(item) {
   clearProofUI();
  const steps  = item.steps || [];
  let   stepIdx = 0;

  function renderStep() {
    if (stepIdx >= steps.length) {
      // All steps done → grade as correct
      grade(true, item, () => {});
      return;
    }

    const step    = steps[stepIdx];
    const total   = steps.length;
    const progress = `<span class="proof-step-counter">${stepIdx + 1} / ${total}</span>`;

    mountProofCard(
      item,
      "Guided Proof",
      `<div class="proof-statement">${item.question || ""}</div>`
    );

    // Build the step UI
    const stepContainer = document.createElement("div");
    stepContainer.className = "proof-guided-wrap";
    stepContainer.innerHTML = `
      <div class="proof-step-header">Step ${stepIdx + 1} of ${total}</div>
      <div class="proof-step-prompt">${step.prompt}</div>
      <input type="text" class="field proof-step-input" placeholder="Your answer…" autocomplete="off" />
      <div class="proof-step-preview"></div>
    `;

    // Insert before card-actions
    const actionsRow = DOM.questionCard.querySelector(".card-actions");
    DOM.questionCard.insertBefore(stepContainer, actionsRow);

    const input   = stepContainer.querySelector(".proof-step-input");
    const preview = stepContainer.querySelector(".proof-step-preview");

    // Live LaTeX preview
    input.addEventListener("input", () => {
      const v = input.value.trim();
      if (!v || !window.nerdamer) { preview.innerHTML = ""; return; }
      try {
        const latex = nerdamer.convertToLaTeX(v);
        ensureKatex(() => {
          try { katex.render(latex, preview, { throwOnError: false, displayMode: false }); }
          catch (_) { preview.textContent = v; }
        });
      } catch (_) { preview.innerHTML = ""; }
    });

    // Check step button
    const checkBtn = document.createElement("button");
    checkBtn.className = "btn btn-submit proof-check-btn";
    checkBtn.textContent = stepIdx < total - 1 ? "Check & Continue →" : "Check & Finish ✓";
    actionsRow.prepend(checkBtn);

    ensureKatex(() => {
      renderMath(stepContainer);
    });

    input.focus();

    const doCheck = () => {
      const userVal = input.value.trim();
      if (!userVal) { flash("Enter your answer for this step."); return; }

      const ok = proofMatchExpr(userVal, step.expected);
      if (ok) {
        proofFeedback("ok", "✓",
          step.explanation
            ? `<strong>Correct!</strong> ${step.explanation}`
            : "<strong>Correct!</strong> Good reasoning.");
        input.disabled    = true;
        checkBtn.disabled = true;
        checkBtn.textContent = "✓ Accepted";

        stepIdx++;
        setTimeout(() => {
          // Remove current step UI
          stepContainer.remove();
          checkBtn.remove();
          DOM.feedback.classList.add("hidden");
          renderStep();
        }, 900);
      } else {
        proofFeedback("err", "✗",
          step.hint
            ? `<strong>Not quite.</strong> Hint: ${step.hint}`
            : "<strong>Not quite.</strong> Check your algebra and try again.");
      }
    };

    checkBtn.addEventListener("click", doCheck);
    input.addEventListener("keydown", e => { if (e.key === "Enter") doCheck(); });
  }

  renderStep();
}

// ── proof_free ──────────────────────────────────────────────────────────────
function renderProofFree(item) {
   clearProofUI();
  mountProofCard(
    item,
    "Free Proof",
    `<div class="proof-statement">${item.question || ""}</div>`
  );

  const wrap = document.createElement("div");
  wrap.className = "proof-free-wrap";
  wrap.innerHTML = `
    <p class="sym-hint">Write your full proof below. LaTeX math: use $…$ or $$…$$</p>
    <textarea class="proof-free-textarea field" rows="9" placeholder="Write your proof here…"></textarea>
    <div class="proof-free-preview hidden"></div>
  `;

  const actionsRow = DOM.questionCard.querySelector(".card-actions");
  DOM.questionCard.insertBefore(wrap, actionsRow);

  const ta      = wrap.querySelector("textarea");
  const preview = wrap.querySelector(".proof-free-preview");

  // Preview toggle button
  const previewBtn = document.createElement("button");
  previewBtn.className = "btn btn-ghost";
  previewBtn.textContent = "Preview LaTeX";
  actionsRow.prepend(previewBtn);

  // Submit button
  const submitBtn = document.createElement("button");
  submitBtn.className = "btn btn-submit";
  submitBtn.textContent = "Submit Proof";
  actionsRow.prepend(submitBtn);

  previewBtn.addEventListener("click", () => {
    const hidden = preview.classList.toggle("hidden");
    if (!hidden) {
      preview.innerHTML = ta.value || "<em>(empty)</em>";
      ensureKatex(() => renderMath(preview));
      previewBtn.textContent = "Hide Preview";
    } else {
      previewBtn.textContent = "Preview LaTeX";
    }
  });

  ta.focus();

  submitBtn.addEventListener("click", () => {
    const userProof = ta.value.trim();
    if (!userProof) { flash("Write your proof before submitting."); return; }

    ta.disabled       = true;
    submitBtn.disabled = true;

    // Show model solution (collapsible)
    const modelSol = item.solution || "<em>No model solution provided.</em>";
    const solDiv   = document.createElement("div");
    solDiv.className = "proof-model-solution";
    solDiv.innerHTML = `
      <button class="proof-sol-toggle">▶ Show model solution</button>
      <div class="proof-sol-body hidden">${modelSol}</div>
    `;
    DOM.questionCard.insertBefore(solDiv, actionsRow);

    const toggle  = solDiv.querySelector(".proof-sol-toggle");
    const solBody = solDiv.querySelector(".proof-sol-body");
    toggle.addEventListener("click", () => {
      const nowHidden = solBody.classList.toggle("hidden");
      toggle.textContent = nowHidden ? "▶ Show model solution" : "▼ Hide model solution";
      if (!nowHidden) ensureKatex(() => renderMath(solBody));
    });

    // Checklist
    const checks = item.checklist || [
      "Assumptions clearly stated",
      "Definitions introduced where needed",
      "Each logical step justified",
      "Conclusion explicitly stated",
    ];
    const clDiv = document.createElement("div");
    clDiv.className = "proof-checklist";
    clDiv.innerHTML = `
      <div class="proof-checklist-title">Self-assessment checklist</div>
      ${checks.map((c, i) => `
        <label class="proof-check-item">
          <input type="checkbox" class="proof-chk" data-i="${i}" />
          <span>${c}</span>
        </label>
      `).join("")}
    `;
    DOM.questionCard.insertBefore(clDiv, actionsRow);

    // Done button
    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn-primary";
    doneBtn.textContent = "Done →";
    actionsRow.appendChild(doneBtn);

    // Mark as "answered" — counts as correct for scoring (free proofs are self-assessed)
    state.answered = true;
    clDiv.querySelectorAll(".proof-chk").forEach(chk => {
      chk.addEventListener("change", () => {
        const all    = [...clDiv.querySelectorAll(".proof-chk")];
        const ticked = all.filter(c => c.checked).length;
        if (ticked === all.length) {
          proofFeedback("ok", "✓",
            "<strong>All criteria met!</strong> Great rigour.");
          state.score++;
          DOM.sidebarScore.textContent = state.score;
        }
      });
    });

    doneBtn.addEventListener("click", () => {
      saveProgress();
      updateChapterNav();
      advance();
    });

    submitBtn.remove();
    previewBtn.remove();

    ensureKatex(() => renderMath(clDiv));
    saveProgress();
    updateChapterNav();
  });
}

// ── proof_debug ─────────────────────────────────────────────────────────────
function renderProofDebug(item) {
   clearProofUI();
  mountProofCard(
    item,
    "Debug Proof",
    `<div class="proof-statement">${item.question || "Find the error in the following proof:"}</div>`
  );

  const wrap = document.createElement("div");
  wrap.className = "proof-debug-wrap";

  // Render the faulty proof (numbered lines if array, otherwise raw HTML)
  let proofHTML = "";
  if (Array.isArray(item.proof)) {
    proofHTML = item.proof.map((line, i) =>
      `<div class="proof-line" data-i="${i}">
         <span class="proof-line-num">${i + 1}</span>
         <span class="proof-line-text">${line}</span>
       </div>`
    ).join("");
  } else {
    proofHTML = `<div class="proof-line-block">${item.proof || ""}</div>`;
  }

  wrap.innerHTML = `
    <div class="proof-block">${proofHTML}</div>
    <p class="sym-hint proof-debug-hint">
      ${Array.isArray(item.proof)
        ? "Click the line that contains the error, then explain it below."
        : "Identify and explain the error below."}
    </p>
    ${Array.isArray(item.proof)
      ? `<div class="proof-debug-selected">No line selected yet.</div>`
      : ""}
    <textarea class="proof-free-textarea field" rows="4"
      placeholder="Explain the error (and optionally write the correction)…"></textarea>
  `;

  const actionsRow = DOM.questionCard.querySelector(".card-actions");
  DOM.questionCard.insertBefore(wrap, actionsRow);

  // Line-click selection (only for array proofs)
  let selectedLine = null;
  if (Array.isArray(item.proof)) {
    const selLabel = wrap.querySelector(".proof-debug-selected");
    wrap.querySelectorAll(".proof-line").forEach(lineEl => {
      lineEl.addEventListener("click", () => {
        wrap.querySelectorAll(".proof-line").forEach(l => l.classList.remove("proof-line-selected"));
        lineEl.classList.add("proof-line-selected");
        selectedLine = parseInt(lineEl.dataset.i);
        selLabel.textContent = `Selected: Line ${selectedLine + 1}`;
      });
    });
  }

  const ta = wrap.querySelector("textarea");

  // Submit button
  const submitBtn = document.createElement("button");
  submitBtn.className = "btn btn-submit";
  submitBtn.textContent = "Submit Analysis";
  actionsRow.prepend(submitBtn);

  ensureKatex(() => renderMath(wrap));
  ta.focus();

  submitBtn.addEventListener("click", () => {
    const userExpl = ta.value.trim();
    if (Array.isArray(item.proof) && selectedLine === null) {
      flash("Click the line containing the error first.");
      return;
    }
    if (!userExpl) { flash("Explain the error before submitting."); return; }

    ta.disabled       = true;
    submitBtn.disabled = true;

    // Evaluate: check line match + keyword match in explanation
    const lineOk  = !Array.isArray(item.proof) ||
                    (item.errorLine !== undefined && selectedLine === item.errorLine);
    const kwMatch = !item.errorKeywords ||
                    item.errorKeywords.some(kw =>
                      normStr(userExpl).includes(normStr(kw)));
    const ok = lineOk && kwMatch;

    // Show known explanation
    const knownExp = item.errorExplanation || "<em>See reference solution.</em>";
    const expDiv   = document.createElement("div");
    expDiv.className = "proof-model-solution";
    expDiv.innerHTML = `
      <button class="proof-sol-toggle">▶ Show error explanation</button>
      <div class="proof-sol-body hidden">${knownExp}</div>
    `;
    DOM.questionCard.insertBefore(expDiv, actionsRow);
    const toggle  = expDiv.querySelector(".proof-sol-toggle");
    const solBody = expDiv.querySelector(".proof-sol-body");
    toggle.addEventListener("click", () => {
      const nowHidden = solBody.classList.toggle("hidden");
      toggle.textContent = nowHidden ? "▶ Show error explanation" : "▼ Hide error explanation";
      if (!nowHidden) ensureKatex(() => renderMath(solBody));
    });

    grade(ok, item, () => {});
    submitBtn.remove();
    saveProgress();
    updateChapterNav();
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────
function init() {
  buildBookSelect();
  buildChapterNav();

  // Try to restore global state
  const saved = loadGlobalState();
  if (saved) {
    // Validate indices (they might be out of range after adding/removing books)
    const maxBook = BOOKS.length - 1;
    const bookIdx = Math.min(saved.bookIndex, maxBook);
    const maxChap = BOOKS[bookIdx].chapters.length - 1;
    const chapIdx = Math.min(saved.chapterIndex, maxChap);
    const maxItem = BOOKS[bookIdx].chapters[chapIdx].content.length - 1;
    const itemIdx = Math.min(saved.itemIndex, maxItem);

    state.bookIndex = bookIdx;
    state.chapterIndex = chapIdx;
    state.itemIndex = itemIdx;
    state.score = saved.score;
    state.streak = saved.streak;
  } else {
    // Default: first book, first chapter, first item
    state.bookIndex = 0;
    state.chapterIndex = 0;
    state.itemIndex = loadProgress(state.bookIndex, state.chapterIndex);
    state.score = 0;
    state.streak = 0;
  }

  // Ensure the book dropdown and chapter nav reflect the restored indices
  DOM.bookSelect.value = state.bookIndex;
  updateChapterNav();
  renderCurrent();
  saveGlobalState();   // save the restored state (or default)
}

init();