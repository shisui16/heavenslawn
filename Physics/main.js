/**
 * Physica – Physics & Math Learning Engine
 * main.js – Core application controller
 */

import { chapter1 } from "./chapters/ch1.js";
import { chapter2 } from "./chapters/ch2.js";

// ─── Chapter Registry ──────────────────────────────────────────────────────
// Add new chapters here by importing and registering them
const ALL_CHAPTERS = [chapter1, chapter2];

// ─── App State ────────────────────────────────────────────────────────────
const state = {
  chapters:     ALL_CHAPTERS,
  chapterIndex: 0,
  itemIndex:    0,
  score:        0,
  streak:       0,
  answered:     false,
  erroneousItems: [], // for "Review Errors" mode
  reviewMode:   false,
};

// ─── DOM References ───────────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);
const DOM = {
  sidebar:        $("sidebar"),
  menuBtn:        $("menuBtn"),
  sidebarClose:   $("sidebarClose"),
  chapterSelect:  $("chapterSelect"),
  progressFill:   $("progressFill"),
  progressText:   $("progressText"),
  streakCount:    $("streakCount"),
  chapterBadge:   $("chapterBadge"),
  itemCounter:    $("itemCounter"),
  scoreValue:     $("scoreValue"),
  stage:          $("stage"),
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
  navStudy:       $("navStudy"),
  navReview:      $("navReview"),
};

// ─── Overlay (mobile) ─────────────────────────────────────────────────────
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

// ─── Sidebar toggle ───────────────────────────────────────────────────────
function openSidebar() {
  DOM.sidebar.classList.remove("collapsed");
  DOM.sidebar.classList.add("open");
  overlay.classList.add("visible");
}
function closeSidebar() {
  DOM.sidebar.classList.add("collapsed");
  DOM.sidebar.classList.remove("open");
  overlay.classList.remove("visible");
}

DOM.menuBtn.addEventListener("click", () => {
  if (DOM.sidebar.classList.contains("collapsed") || DOM.sidebar.classList.contains("open") === false) {
    // On desktop, sidebar is always visible unless explicitly collapsed
    DOM.sidebar.classList.toggle("collapsed");
    $("main").classList.toggle("expanded");
  } else {
    openSidebar();
  }
});
DOM.sidebarClose.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// ─── Chapter selector ──────────────────────────────────────────────────────
function populateChapterSelect() {
  DOM.chapterSelect.innerHTML = "";
  state.chapters.forEach((ch, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `${i + 1}. ${ch.title}`;
    DOM.chapterSelect.appendChild(opt);
  });
  DOM.chapterSelect.value = state.chapterIndex;
}

DOM.chapterSelect.addEventListener("change", (e) => {
  switchChapter(parseInt(e.target.value));
});

function switchChapter(idx) {
  state.chapterIndex = idx;
  state.itemIndex = loadProgress(idx);
  state.score = 0;
  state.streak = 0;
  state.answered = false;
  state.erroneousItems = [];
  saveProgress(idx, state.itemIndex);
  updateTopbar();
  renderCurrent();
}

// ─── LocalStorage persistence ─────────────────────────────────────────────
function saveProgress(chIdx, itemIdx) {
  localStorage.setItem(`physica_ch${chIdx}_pos`, itemIdx);
}

function loadProgress(chIdx) {
  const saved = parseInt(localStorage.getItem(`physica_ch${chIdx}_pos`) || "0");
  const chapter = state.chapters[chIdx];
  return Math.min(saved, chapter.content.length - 1);
}

// ─── KaTeX rendering ──────────────────────────────────────────────────────
function renderMath(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [
        { left: "$$",  right: "$$",  display: true  },
        { left: "$",   right: "$",   display: false },
        { left: "\\[", right: "\\]", display: true  },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
    });
  }
}

// Wait for KaTeX to load if needed
function ensureKatex(cb) {
  if (window.renderMathInElement) return cb();
  const t = setInterval(() => {
    if (window.renderMathInElement) { clearInterval(t); cb(); }
  }, 50);
}

// ─── Topbar update ────────────────────────────────────────────────────────
function updateTopbar() {
  const ch = state.chapters[state.chapterIndex];
  const total = state.reviewMode
    ? state.erroneousItems.length
    : ch.content.length;
  const idx = state.itemIndex;

  DOM.chapterBadge.textContent = `Ch. ${state.chapterIndex + 1}`;
  DOM.itemCounter.textContent = `Item ${idx + 1} of ${total}`;
  DOM.scoreValue.textContent = state.score;
  DOM.streakCount.textContent = state.streak;

  // Progress bar (only for study mode)
  const pct = total > 0 ? Math.round(((idx) / total) * 100) : 0;
  DOM.progressFill.style.width = `${pct}%`;
  DOM.progressText.textContent = `${idx} / ${total}`;
}

// ─── Main render ──────────────────────────────────────────────────────────
function renderCurrent() {
  const ch = state.chapters[state.chapterIndex];
  const items = state.reviewMode ? state.erroneousItems : ch.content;

  if (state.itemIndex >= items.length) {
    showCompletion();
    return;
  }

  const item = items[state.itemIndex];
  state.answered = false;
  updateTopbar();

  hideAll();

  if (item.type === "text") {
    renderTextCard(item);
  } else {
    renderQuestionCard(item);
  }
}

function hideAll() {
  DOM.textCard.classList.add("hidden");
  DOM.questionCard.classList.add("hidden");
  DOM.completion.classList.add("hidden");
}

// ─── Text card ────────────────────────────────────────────────────────────
function renderTextCard(item) {
  DOM.textCard.classList.remove("hidden");
  DOM.textBody.innerHTML = item.data || "";
  ensureKatex(() => renderMath(DOM.textBody));
  DOM.textPrev.classList.toggle("hidden", state.itemIndex === 0);
}

DOM.textNext.addEventListener("click", advance);
DOM.textPrev.addEventListener("click", retreat);

// ─── Question card ────────────────────────────────────────────────────────
function renderQuestionCard(item) {
  DOM.questionCard.classList.remove("hidden");
  DOM.feedback.classList.add("hidden");
  DOM.nextBtn.classList.add("hidden");
  DOM.submitBtn.classList.remove("hidden");
  DOM.questionPrev.classList.toggle("hidden", state.itemIndex === 0);

  // Type tag
  const tags = {
    mcq:      "Multiple Choice",
    msq:      "Multi-Select",
    numeric:  "Numerical",
    symbolic: "Symbolic",
  };
  DOM.questionTypeTag.textContent = tags[item.type] || item.type.toUpperCase();

  // Question text
  DOM.questionBody.innerHTML = item.question || "";
  ensureKatex(() => renderMath(DOM.questionBody));

  // Hide all input sections
  DOM.mcqOptions.classList.add("hidden");
  DOM.msqOptions.classList.add("hidden");
  DOM.numericWrap.classList.add("hidden");
  DOM.symbolicWrap.classList.add("hidden");

  if (item.type === "mcq")      renderMCQ(item);
  else if (item.type === "msq") renderMSQ(item);
  else if (item.type === "numeric") renderNumeric(item);
  else if (item.type === "symbolic") renderSymbolic(item);
}

// ── MCQ ────────────────────────────────────────────────────────────────────
function renderMCQ(item) {
  DOM.mcqOptions.classList.remove("hidden");
  DOM.mcqOptions.innerHTML = "";
  const labels = ["A", "B", "C", "D", "E", "F"];

  item.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.dataset.index = i;
    btn.innerHTML = `<span class="option-label">${labels[i]}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => {
      if (state.answered) return;
      DOM.mcqOptions.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
    DOM.mcqOptions.appendChild(btn);
  });

  ensureKatex(() => renderMath(DOM.mcqOptions));

  DOM.submitBtn.onclick = () => {
    const sel = DOM.mcqOptions.querySelector(".option-btn.selected");
    if (!sel) return flashNoSelection();
    const chosen = parseInt(sel.dataset.index);
    const correct = item.correct[0];
    validateAndShow(chosen === correct, item, () => {
      DOM.mcqOptions.querySelectorAll(".option-btn").forEach((b, i) => {
        b.disabled = true;
        if (i === correct) b.classList.add("correct");
        else if (parseInt(b.dataset.index) === chosen && chosen !== correct)
          b.classList.add("wrong");
      });
    });
  };
}

// ── MSQ ────────────────────────────────────────────────────────────────────
function renderMSQ(item) {
  DOM.msqOptions.classList.remove("hidden");
  DOM.msqOptions.innerHTML = "";
  const labels = ["A", "B", "C", "D", "E", "F"];

  item.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.dataset.index = i;
    btn.innerHTML = `<span class="option-label">${labels[i]}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => {
      if (state.answered) return;
      btn.classList.toggle("selected");
    });
    DOM.msqOptions.appendChild(btn);
  });

  ensureKatex(() => renderMath(DOM.msqOptions));

  DOM.submitBtn.onclick = () => {
    const selected = [...DOM.msqOptions.querySelectorAll(".option-btn.selected")]
      .map(b => parseInt(b.dataset.index))
      .sort((a, b) => a - b);
    const correct = [...item.correct].sort((a, b) => a - b);
    const isCorrect = JSON.stringify(selected) === JSON.stringify(correct);

    validateAndShow(isCorrect, item, () => {
      DOM.msqOptions.querySelectorAll(".option-btn").forEach((b, i) => {
        b.disabled = true;
        if (correct.includes(i)) b.classList.add("correct");
        else if (selected.includes(i)) b.classList.add("wrong");
      });
    });
  };
}

// ── Numeric ────────────────────────────────────────────────────────────────
function renderNumeric(item) {
  DOM.numericWrap.classList.remove("hidden");
  DOM.numericValue.value = "";
  DOM.numericUnit.value = "";

  DOM.submitBtn.onclick = () => {
    const userVal = parseFloat(DOM.numericValue.value);
    const userUnit = DOM.numericUnit.value.trim();

    if (isNaN(userVal)) return flashNoSelection("Enter a number.");

    const isCorrect = validateNumeric(userVal, userUnit, item.answer, item.tolerance ?? 0.02);
    validateAndShow(isCorrect, item, () => {
      DOM.numericValue.disabled = true;
      DOM.numericUnit.disabled = true;
    });
  };
}

// ── Symbolic ───────────────────────────────────────────────────────────────
function renderSymbolic(item) {
  DOM.symbolicWrap.classList.remove("hidden");
  DOM.symbolicInput.value = "";
  DOM.symPreview.innerHTML = "";

  // Live preview
  DOM.symbolicInput.addEventListener("input", () => {
    const expr = DOM.symbolicInput.value.trim();
    if (!expr) { DOM.symPreview.innerHTML = ""; return; }
    try {
      const latex = nerdamer.convertToLaTeX(expr);
      DOM.symPreview.innerHTML = "";
      ensureKatex(() => {
        try {
          katex.render(latex, DOM.symPreview, { throwOnError: false, displayMode: true });
        } catch (_) {
          DOM.symPreview.textContent = expr;
        }
      });
    } catch (_) {
      DOM.symPreview.innerHTML = "";
    }
  });

  DOM.submitBtn.onclick = () => {
    const userExpr = DOM.symbolicInput.value.trim();
    if (!userExpr) return flashNoSelection("Enter an expression.");

    const isCorrect = validateSymbolic(userExpr, item.integrand, item.variable || "x");
    validateAndShow(isCorrect, item, () => {
      DOM.symbolicInput.disabled = true;
    });
  };
}

// ─── Validation helpers ───────────────────────────────────────────────────

/** Numeric: parse answer string like "10 m/s" and compare with tolerance */
function validateNumeric(userVal, userUnit, answerStr, tolerance) {
  // Parse answer string: "10 m/s" → { value: 10, unit: "m/s" }
  const match = String(answerStr).match(/^([-\d.e]+)\s*(.*)$/i);
  if (!match) return false;

  const ansVal = parseFloat(match[1]);
  const ansUnit = match[2].trim();

  // Check numeric tolerance (relative)
  const relErr = Math.abs(userVal - ansVal) / (Math.abs(ansVal) || 1);
  const numOk = relErr <= tolerance;

  // Check unit equivalence (simple normalisation)
  const unitOk = ansUnit === "" || normaliseUnit(userUnit) === normaliseUnit(ansUnit);

  return numOk && unitOk;
}

/** Very lightweight unit normaliser – handles common physics units */
function normaliseUnit(unit) {
  return unit
    .replace(/\s+/g, "")
    .replace(/\*|\·/g, "")
    .replace(/meters?/gi, "m")
    .replace(/seconds?/gi, "s")
    .replace(/kilograms?/gi, "kg")
    .replace(/newtons?/gi, "N")
    .replace(/joules?/gi, "J")
    .replace(/watts?/gi, "W")
    .replace(/pascals?/gi, "Pa")
    .replace(/hertz/gi, "Hz")
    .replace(/radians?/gi, "rad")
    .toLowerCase();
}

/** Symbolic: diff(user_answer) should simplify to integrand */
function validateSymbolic(userExpr, integrand, variable) {
  try {
    const diffed = nerdamer.diff(userExpr, variable).toString();
    const expected = nerdamer(integrand).toString();
    // Check if (diffed - expected) simplifies to 0
    const diff = nerdamer(`${diffed} - (${expected})`).evaluate().toString();
    const simplified = nerdamer.simplify(diff).toString();
    return simplified === "0" || parseFloat(simplified) === 0;
  } catch (e) {
    console.warn("Symbolic validation error:", e);
    return false;
  }
}

// ─── Show feedback & update score ─────────────────────────────────────────
function validateAndShow(isCorrect, item, onReveal) {
  state.answered = true;
  onReveal?.();

  DOM.feedback.classList.remove("hidden", "correct-feedback", "wrong-feedback");

  if (isCorrect) {
    state.score++;
    state.streak++;
    DOM.feedback.classList.add("correct-feedback");
    DOM.feedbackIcon.textContent = "✓";
    DOM.feedbackText.innerHTML = item.explanation
      ? `<strong>Correct!</strong> ${item.explanation}`
      : "<strong>Correct!</strong> Well done.";
    ensureKatex(() => renderMath(DOM.feedback));
  } else {
    state.streak = 0;
    // Track for review mode
    if (!state.reviewMode) state.erroneousItems.push(item);
    DOM.feedback.classList.add("wrong-feedback");
    DOM.feedbackIcon.textContent = "✗";
    const hint = item.hint ? `<br><em>Hint: ${item.hint}</em>` : "";
    const ans = item.answer
      ? `<br>Answer: <code>${item.answer}</code>`
      : item.correct !== undefined
        ? ""
        : "";
    DOM.feedbackText.innerHTML = `<strong>Incorrect.</strong>${hint}${ans}`;
    ensureKatex(() => renderMath(DOM.feedback));
  }

  DOM.submitBtn.classList.add("hidden");
  DOM.nextBtn.classList.remove("hidden");
  DOM.streakCount.textContent = state.streak;
  DOM.scoreValue.textContent = state.score;
  saveProgress(state.chapterIndex, state.itemIndex);
}

function flashNoSelection(msg = "Please select an answer first.") {
  DOM.feedbackText.textContent = msg;
  DOM.feedback.classList.remove("hidden", "correct-feedback", "wrong-feedback");
  DOM.feedback.classList.add("wrong-feedback");
  DOM.feedbackIcon.textContent = "!";
  setTimeout(() => DOM.feedback.classList.add("hidden"), 2000);
}

// ─── Navigation ───────────────────────────────────────────────────────────
function advance() {
  const ch = state.chapters[state.chapterIndex];
  const items = state.reviewMode ? state.erroneousItems : ch.content;
  state.itemIndex = Math.min(state.itemIndex + 1, items.length);
  saveProgress(state.chapterIndex, state.itemIndex);
  renderCurrent();
}

function retreat() {
  state.itemIndex = Math.max(0, state.itemIndex - 1);
  renderCurrent();
}

DOM.nextBtn.addEventListener("click", advance);
DOM.questionPrev.addEventListener("click", retreat);

// Keyboard: Enter to submit/advance
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.tagName !== "INPUT") {
    if (!state.answered) {
      DOM.submitBtn.click();
    } else {
      DOM.nextBtn.click();
    }
  }
  if (e.key === "ArrowRight") DOM.nextBtn.click();
  if (e.key === "ArrowLeft")  DOM.questionPrev.click();
});

// ─── Completion screen ────────────────────────────────────────────────────
function showCompletion() {
  DOM.completion.classList.remove("hidden");
  const ch = state.chapters[state.chapterIndex];
  const total = state.reviewMode
    ? state.erroneousItems.length
    : ch.content.filter(i => i.type !== "text").length;
  const pct = total > 0 ? Math.round((state.score / total) * 100) : 100;

  DOM.completionStats.innerHTML = `
    <div>Score: <span class="stat-highlight">${state.score} / ${total}</span></div>
    <div>Accuracy: <span class="stat-highlight">${pct}%</span></div>
    <div>Peak Streak: <span class="stat-highlight">${state.streak}</span></div>
  `;
}

DOM.restartBtn.addEventListener("click", () => {
  state.itemIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.answered = false;
  state.erroneousItems = [];
  saveProgress(state.chapterIndex, 0);
  DOM.completion.classList.add("hidden");
  renderCurrent();
});

// ─── Nav mode switches ────────────────────────────────────────────────────
DOM.navStudy.addEventListener("click", () => {
  state.reviewMode = false;
  state.itemIndex = loadProgress(state.chapterIndex);
  DOM.navStudy.classList.add("active");
  DOM.navReview.classList.remove("active");
  DOM.completion.classList.add("hidden");
  renderCurrent();
});

DOM.navReview.addEventListener("click", () => {
  if (state.erroneousItems.length === 0) {
    alert("No errors to review yet! Solve some questions first.");
    return;
  }
  state.reviewMode = true;
  state.itemIndex = 0;
  DOM.navReview.classList.add("active");
  DOM.navStudy.classList.remove("active");
  DOM.completion.classList.add("hidden");
  renderCurrent();
});

// ─── Init ─────────────────────────────────────────────────────────────────
function init() {
  populateChapterSelect();
  state.itemIndex = loadProgress(state.chapterIndex);
  renderCurrent();
}

init();
