/**
 * Physica v2 – main.js
 * Two-level hierarchy: Books → Chapters → Items
 */

import { analyticalMechanics      } from "./books/analyticalMechanics.js";
import { calculus                 } from "./books/calculus.js";
import { electromagnetism         } from "./books/electromagnetism.js";
import { topologyCondensedMatter  } from "./books/topologyCondensedMatter.js";

// ─── Book Registry ────────────────────────────────────────────────────────
// To add a new book: import it above, then push it here.
const BOOKS = [analyticalMechanics, calculus, electromagnetism, topologyCondensedMatter];

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
  else                       renderQuestion(item);
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

  const labels = { mcq:"Multiple Choice", msq:"Multi-Select", numeric:"Numerical", symbolic:"Symbolic" };
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