/**
 * main.js — Integral Trainer (with localStorage persistence)
 *
 * Architecture:
 *   problems.js data → problem state machine → validator → UI renderer
 *
 * Validation strategy:
 *   Given user answer f(x), we differentiate it symbolically.
 *   If diff(f(x)) − integrand simplifies to 0 → correct.
 *   This avoids brittle string matching entirely.
 */

// ─────────────────────────────────────────────
// 1. PROBLEM DATA
// ─────────────────────────────────────────────

const PROBLEMS = [
  // ── Easy ──
  {
    difficulty: "easy",
    integrand: "x^2",
    latex: "\\int x^2 \\, dx",
    hint: "Power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
  },
  {
    difficulty: "easy",
    integrand: "x^3",
    latex: "\\int x^3 \\, dx",
    hint: "Apply the power rule with n = 3",
  },
  {
    difficulty: "easy",
    integrand: "1",
    latex: "\\int 1 \\, dx",
    hint: "∫1 dx is just x + C",
  },
  {
    difficulty: "easy",
    integrand: "x",
    latex: "\\int x \\, dx",
    hint: "Power rule with n = 1",
  },
  {
    difficulty: "easy",
    integrand: "2*x",
    latex: "\\int 2x \\, dx",
    hint: "Constants factor out: 2∫x dx",
  },
  {
    difficulty: "easy",
    integrand: "3*x^2",
    latex: "\\int 3x^2 \\, dx",
    hint: "3 · ∫x² dx — constants just ride along",
  },
  {
    difficulty: "easy",
    integrand: "x^4",
    latex: "\\int x^4 \\, dx",
    hint: "Power rule: raise by 1, divide by new power",
  },
  {
    difficulty: "easy",
    integrand: "5",
    latex: "\\int 5 \\, dx",
    hint: "∫k dx = kx + C for any constant k",
  },
  {
    difficulty: "easy",
    integrand: "x^5",
    latex: "\\int x^5 \\, dx",
    hint: "Power rule with n = 5",
  },
  {
    difficulty: "easy",
    integrand: "4*x^3",
    latex: "\\int 4x^3 \\, dx",
    hint: "Factor out 4, apply power rule",
  },

  // ── Medium ──
  {
    difficulty: "medium",
    integrand: "sin(x)",
    latex: "\\int \\sin(x) \\, dx",
    hint: "d/dx[cos(x)] = −sin(x), so reverse that",
  },
  {
    difficulty: "medium",
    integrand: "cos(x)",
    latex: "\\int \\cos(x) \\, dx",
    hint: "d/dx[sin(x)] = cos(x)",
  },
  {
    difficulty: "medium",
    integrand: "e^x",
    latex: "\\int e^x \\, dx",
    hint: "eˣ is its own derivative — and antiderivative",
  },
  {
    difficulty: "medium",
    integrand: "1/x",
    latex: "\\int \\frac{1}{x} \\, dx",
    hint: "Answer involves a logarithm",
  },
  {
    difficulty: "medium",
    integrand: "x^2 + 2*x + 1",
    latex: "\\int (x^2 + 2x + 1) \\, dx",
    hint: "Integrate term by term",
  },
  {
    difficulty: "medium",
    integrand: "2*sin(x) + 3*cos(x)",
    latex: "\\int (2\\sin x + 3\\cos x) \\, dx",
    hint: "Split into two integrals, use standard trig antiderivatives",
  },
  {
    difficulty: "medium",
    integrand: "x^(1/2)",
    latex: "\\int \\sqrt{x} \\, dx",
    hint: "Write √x as x^(1/2), then use power rule",
  },
  {
    difficulty: "medium",
    integrand: "1/x^2",
    latex: "\\int \\frac{1}{x^2} \\, dx",
    hint: "Rewrite as x^(−2) and apply the power rule",
  },
  {
    difficulty: "medium",
    integrand: "sec(x)^2",
    latex: "\\int \\sec^2(x) \\, dx",
    hint: "d/dx[tan(x)] = sec²(x)",
  },
  {
    difficulty: "medium",
    integrand: "3*e^x - 2*x",
    latex: "\\int (3e^x - 2x) \\, dx",
    hint: "Integrate term by term",
  },
    // ── More Easy (power rule, constants, simple sums) ──
  {
    difficulty: "easy",
    integrand: "7",
    latex: "\\int 7 \\, dx",
    hint: "Constant multiple rule: ∫k dx = kx + C",
  },
  {
    difficulty: "easy",
    integrand: "-5",
    latex: "\\int -5 \\, dx",
    hint: "Even negative constants follow the same rule",
  },
  {
    difficulty: "easy",
    integrand: "x^6",
    latex: "\\int x^6 \\, dx",
    hint: "Power rule with n = 6",
  },
  {
    difficulty: "easy",
    integrand: "x^7",
    latex: "\\int x^7 \\, dx",
    hint: "Add 1 to the exponent, then divide by the new number",
  },
  {
    difficulty: "easy",
    integrand: "x^8",
    latex: "\\int x^8 \\, dx",
    hint: "Straight power rule: n = 8",
  },
  {
    difficulty: "easy",
    integrand: "x^(-3)",
    latex: "\\int x^{-3} \\, dx",
    hint: "Power rule works for negative exponents too — just be careful with the sign",
  },
  {
    difficulty: "easy",
    integrand: "x^(1/3)",
    latex: "\\int \\sqrt[3]{x} \\, dx",
    hint: "Write as x^{1/3} and use the power rule",
  },
  {
    difficulty: "easy",
    integrand: "x^(3/2)",
    latex: "\\int x^{3/2} \\, dx",
    hint: "Add 1 to 3/2 (gives 5/2), then divide by 5/2",
  },
  {
    difficulty: "easy",
    integrand: "5*x^4",
    latex: "\\int 5x^4 \\, dx",
    hint: "Constant factor stays outside: 5·∫x⁴ dx",
  },
  {
    difficulty: "easy",
    integrand: "6*x^5",
    latex: "\\int 6x^5 \\, dx",
    hint: "6·∫x⁵ dx — increase exponent to 6, divide by 6",
  },
  {
    difficulty: "easy",
    integrand: "3*x^2 + 2*x + 1",
    latex: "\\int (3x^2 + 2x + 1) \\, dx",
    hint: "Integrate term by term — the sum rule makes it easy",
  },
  {
    difficulty: "easy",
    integrand: "4*x^3 - 3*x^2 + 2*x - 1",
    latex: "\\int (4x^3 - 3x^2 + 2x - 1) \\, dx",
    hint: "Each term follows the power rule; don't forget the constant term",
  },
  {
    difficulty: "easy",
    integrand: "100*x^99",
    latex: "\\int 100x^{99} \\, dx",
    hint: "After integration, the coefficient becomes 100/100 = 1",
  },
  {
    difficulty: "easy",
    integrand: "0",
    latex: "\\int 0 \\, dx",
    hint: "The derivative of any constant is 0 — so the antiderivative is a constant",
  },

  // ── More Medium (trig, exponentials, simple substitution) ──
  {
    difficulty: "medium",
    integrand: "sin(2*x)",
    latex: "\\int \\sin(2x) \\, dx",
    hint: "Linear substitution: ∫sin(kx) dx = -cos(kx)/k + C",
  },
  {
    difficulty: "medium",
    integrand: "cos(3*x)",
    latex: "\\int \\cos(3x) \\, dx",
    hint: "∫cos(kx) dx = sin(kx)/k + C",
  },
  {
    difficulty: "medium",
    integrand: "tan(x)",
    latex: "\\int \\tan(x) \\, dx",
    hint: "∫tan x dx = -ln|cos x| + C. Use “log(cos(x))” for natural log",
  },
  {
    difficulty: "medium",
    integrand: "sec(x)*tan(x)",
    latex: "\\int \\sec(x)\\tan(x) \\, dx",
    hint: "The derivative of sec(x) is sec(x)tan(x)",
  },
  {
    difficulty: "medium",
    integrand: "csc(x)*cot(x)",
    latex: "\\int \\csc(x)\\cot(x) \\, dx",
    hint: "Derivative of -csc(x) is csc(x)cot(x)",
  },
  {
    difficulty: "medium",
    integrand: "csc(x)^2",
    latex: "\\int \\csc^2(x) \\, dx",
    hint: "d/dx[-cot(x)] = csc²(x)",
  },
  {
    difficulty: "medium",
    integrand: "e^(2*x)",
    latex: "\\int e^{2x} \\, dx",
    hint: "∫e^(kx) dx = e^(kx)/k + C",
  },
  {
    difficulty: "medium",
    integrand: "e^(3*x)",
    latex: "\\int e^{3x} \\, dx",
    hint: "Same pattern: divide by the coefficient of x in the exponent",
  },
  {
    difficulty: "medium",
    integrand: "2^x",
    latex: "\\int 2^x \\, dx",
    hint: "Rewrite as e^{x ln2} or use formula ∫a^x dx = a^x/ln a. Answer: 2^x/log(2)",
  },
  {
    difficulty: "medium",
    integrand: "1/(x*log(x))",
    latex: "\\int \\frac{1}{x\\ln x} \\, dx",
    hint: "Let u = ln x. Then du = dx/x; integral becomes ∫ du/u",
  },
  {
    difficulty: "medium",
    integrand: "cos(x)^2",
    latex: "\\int \\cos^2(x) \\, dx",
    hint: "Use identity cos²θ = (1+cos(2θ))/2, then integrate",
  },
  {
    difficulty: "medium",
    integrand: "sin(x)^2",
    latex: "\\int \\sin^2(x) \\, dx",
    hint: "Use identity sin²θ = (1-cos(2θ))/2",
  },
  {
    difficulty: "medium",
    integrand: "sin(x)*cos(x)",
    latex: "\\int \\sin(x)\\cos(x) \\, dx",
    hint: "Substitute u = sin x, or use sin(2x)=2sin x cos x",
  },
  {
    difficulty: "medium",
    integrand: "1/(x^2+1)",
    latex: "\\int \\frac{1}{x^2+1} \\, dx",
    hint: "Standard integral: arctan(x) + C",
  },
  {
    difficulty: "medium",
    integrand: "1/sqrt(1-x^2)",
    latex: "\\int \\frac{1}{\\sqrt{1-x^2}} \\, dx",
    hint: "Recognize as derivative of arcsin(x)",
  },
  {
    difficulty: "medium",
    integrand: "1/(x^2+4)",
    latex: "\\int \\frac{1}{x^2+4} \\, dx",
    hint: "Factor 4: (1/4) * 1/((x/2)^2+1). Answer: (1/2) arctan(x/2) + C",
  },
  {
    difficulty: "medium",
    integrand: "1/sqrt(4-x^2)",
    latex: "\\int \\frac{1}{\\sqrt{4-x^2}} \\, dx",
    hint: "Rewrite as 1/(2√(1-(x/2)²)). Answer: arcsin(x/2) + C",
  },
  {
    difficulty: "medium",
    integrand: "e^x*sin(x)",
    latex: "\\int e^x \\sin(x) \\, dx",
    hint: "Integration by parts twice (or recall formula): e^x(sin x - cos x)/2",
  },
  {
    difficulty: "medium",
    integrand: "e^x*cos(x)",
    latex: "\\int e^x \\cos(x) \\, dx",
    hint: "Similar to e^x sin x; answer: e^x(sin x + cos x)/2",
  },
  {
    difficulty: "medium",
    integrand: "x*e^x",
    latex: "\\int x e^x \\, dx",
    hint: "Integration by parts: let u = x, dv = e^x dx",
  },
  {
    difficulty: "medium",
    integrand: "x*sin(x)",
    latex: "\\int x \\sin(x) \\, dx",
    hint: "Parts: u = x, dv = sin x dx → -x cos x + sin x",
  },
  {
    difficulty: "medium",
    integrand: "x*cos(x)",
    latex: "\\int x \\cos(x) \\, dx",
    hint: "Parts: u = x, dv = cos x dx → x sin x + cos x",
  },

  // ── Hard (multiple steps, inverse trig, logarithms, advanced parts) ──
  {
    difficulty: "hard",
    integrand: "log(x)",
    latex: "\\int \\ln x \\, dx",
    hint: "Integration by parts: u = ln x, dv = dx → x ln x - x + C",
  },
  {
    difficulty: "hard",
    integrand: "x*log(x)",
    latex: "\\int x \\ln x \\, dx",
    hint: "Parts: u = ln x, dv = x dx → (x²/2) ln x - x²/4 + C",
  },
  {
    difficulty: "hard",
    integrand: "x^2*e^x",
    latex: "\\int x^2 e^x \\, dx",
    hint: "Use tabular integration by parts (or do it twice)",
  },
  {
    difficulty: "hard",
    integrand: "sin(x)^3",
    latex: "\\int \\sin^3(x) \\, dx",
    hint: "Write sin³x = (1-cos²x) sin x, then substitute u = cos x",
  },
  {
    difficulty: "hard",
    integrand: "cos(x)^3",
    latex: "\\int \\cos^3(x) \\, dx",
    hint: "Write cos³x = (1-sin²x) cos x, then substitute u = sin x",
  },
  {
    difficulty: "hard",
    integrand: "sec(x)^3",
    latex: "\\int \\sec^3(x) \\, dx",
    hint: "Parts: u = sec x, dv = sec²x dx. Answer involves (sec x tan x + ln|sec x + tan x|)/2",
  },
  {
    difficulty: "hard",
    integrand: "tan(x)^2",
    latex: "\\int \\tan^2(x) \\, dx",
    hint: "Use identity tan²x = sec²x - 1, then integrate",
  },
  {
    difficulty: "hard",
    integrand: "1/(x^2-1)",
    latex: "\\int \\frac{1}{x^2-1} \\, dx",
    hint: "Partial fractions: 1/2 (1/(x-1) - 1/(x+1))",
  },
  {
    difficulty: "hard",
    integrand: "x/(x^2+1)",
    latex: "\\int \\frac{x}{x^2+1} \\, dx",
    hint: "Substitute u = x²+1 → du = 2x dx",
  },
  {
    difficulty: "hard",
    integrand: "e^(sqrt(x))/sqrt(x)",
    latex: "\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} \\, dx",
    hint: "Let u = √x, then du = dx/(2√x) → adjust constant",
  },
  {
    difficulty: "hard",
    integrand: "x/sqrt(1-x^2)",
    latex: "\\int \\frac{x}{\\sqrt{1-x^2}} \\, dx",
    hint: "Substitute u = 1-x², then du = -2x dx",
  },
  {
    difficulty: "hard",
    integrand: "arcsin(x)",
    latex: "\\int \\arcsin(x) \\, dx",
    hint: "Integration by parts: u = arcsin x, dv = dx. Answer: x arcsin x + √(1-x²) + C",
  },
  {
    difficulty: "hard",
    integrand: "arctan(x)",
    latex: "\\int \\arctan(x) \\, dx",
    hint: "Parts: u = arctan x, dv = dx. Answer: x arctan x - (1/2) ln(1+x²) + C",
  },
  {
    difficulty: "hard",
    integrand: "x*arctan(x)",
    latex: "\\int x \\arctan(x) \\, dx",
    hint: "Parts: u = arctan x, dv = x dx. Result involves arctan and a polynomial",
  },
  {
    difficulty: "hard",
    integrand: "1/(1+sqrt(x))",
    latex: "\\int \\frac{1}{1+\\sqrt{x}} \\, dx",
    hint: "Let u = √x, then dx = 2u du; use polynomial division on u/(1+u)?",
  },
  {
    difficulty: "hard",
    integrand: "sin(x)*cos(x)^2",
    latex: "\\int \\sin(x)\\cos^2(x) \\, dx",
    hint: "Substitute u = cos x, du = -sin x dx",
  },
  {
    difficulty: "hard",
    integrand: "sec(x)^2*tan(x)",
    latex: "\\int \\sec^2(x)\\tan(x) \\, dx",
    hint: "Substitute u = tan x (or u = sec x)",
  },
  {
    difficulty: "hard",
    integrand: "1/(x*sqrt(x^2-1))",
    latex: "\\int \\frac{1}{x\\sqrt{x^2-1}} \\, dx",
    hint: "Derivative of arcsec(x) is 1/(x√(x^2-1)). Use “asec(x)”",
  },
];

// ─────────────────────────────────────────────
// 2. STATE & PERSISTENCE
// ─────────────────────────────────────────────

const STORAGE_KEY = 'integralTrainerState';

const state = {
  currentIndex: 0,
  order: [],          // shuffled indices of the *filtered* problem pool
  streak: 0,
  correct: 0,
  attempted: 0,
  hintShown: false,
  completedSet: new Set(),  // indices of problems correctly answered ever
};

function saveState() {
  const data = {
    order: state.order,
    currentIndex: state.currentIndex,
    streak: state.streak,
    correct: state.correct,
    attempted: state.attempted,
    completedSet: Array.from(state.completedSet),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadState() {
  const json = localStorage.getItem(STORAGE_KEY);
  if (!json) return null;
  try {
    const data = JSON.parse(json);
    // Convert completedSet back to a Set
    data.completedSet = new Set(data.completedSet || []);
    return data;
  } catch {
    return null;
  }
}

function clearSavedState() {
  localStorage.removeItem(STORAGE_KEY);
}

// ─────────────────────────────────────────────
// 3. DOM REFERENCES
// ─────────────────────────────────────────────

const $ = (id) => document.getElementById(id);

const DOM = {
  integralDisplay: $("integral-display"),
  answerInput:     $("answer-input"),
  checkBtn:        $("check-btn"),
  nextBtn:         $("next-btn"),
  hintBtn:         $("hint-btn"),
  feedback:        $("feedback"),
  preview:         $("answer-preview"),
  streakCount:     $("streak-count"),
  scoreCount:      $("score-count"),
  totalCount:      $("total-count"),
  progressFill:    $("progress-fill"),
  problemNumber:   $("problem-number"),
  difficultyBadge: $("difficulty-badge"),
  poolSize:        $("problem-pool-size"),
  card:            $("problem-card"),
  // Optional reset button (if you add it to the HTML)
  resetBtn:        $("reset-btn"),
};

// ─────────────────────────────────────────────
// 4. VALIDATION (symbolic, via Nerdamer)
// ─────────────────────────────────────────────

function validateAnswer(userAnswer, integrand) {
  if (!userAnswer.trim()) return { valid: false, error: "Please enter an answer." };

  try {
    const cleaned = userAnswer
      .replace(/\+\s*[Cc]\s*$/, "")
      .replace(/\-\s*[Cc]\s*$/, "")
      .replace(/\s*[Cc]\s*$/, "")
      .trim();

    if (!cleaned) {
      const integrandVal = nerdamer(integrand).evaluate();
      const isZero = nerdamer(`simplify(${integrand})`).text() === "0";
      return { valid: isZero, error: isZero ? null : "Your answer differentiates to 0, but the integrand is not 0." };
    }

    const derivative = nerdamer(`diff(${cleaned}, x)`);
    const diff = nerdamer(`simplify(${derivative.text()} - (${integrand}))`);
    const diffText = diff.text().replace(/\s/g, "");
    const isZero = diffText === "0" || diffText === "0.0";
    return { valid: isZero };
  } catch (e) {
    return {
      valid: false,
      error: `Couldn't parse your input. Check your syntax. (${e.message ?? "parse error"})`,
    };
  }
}

// ─────────────────────────────────────────────
// 5. RENDERING
// ─────────────────────────────────────────────

function renderKaTeX(latex, container) {
  try {
    katex.render(latex, container, {
      throwOnError: false,
      displayMode: true,
    });
  } catch {
    container.textContent = latex;
  }
}

function renderInlineKaTeX(expression, container) {
  if (!expression.trim()) { container.innerHTML = ""; return; }
  try {
    katex.render(expression, container, {
      throwOnError: false,
      displayMode: false,
    });
  } catch {
    container.textContent = expression;
  }
}

function showFeedback(type, message) {
  DOM.feedback.className = `feedback ${type} visible`;
  DOM.feedback.textContent = message;
}

function hideFeedback() {
  DOM.feedback.className = "feedback";
}

function bumpStat(el) {
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");
  setTimeout(() => el.classList.remove("bump"), 300);
}

function updateStats() {
  DOM.streakCount.textContent = state.streak;
  DOM.scoreCount.textContent  = state.correct;
  DOM.totalCount.textContent  = state.attempted;
}

function updateProgress() {
  const total = PROBLEMS.length;
  const done = state.completedSet.size;
  const pct = total > 0 ? Math.min(100, (done / total) * 100) : 0;
  DOM.progressFill.style.width = pct + "%";
}

// ─────────────────────────────────────────────
// 6. PROBLEM LOADING & FILTERING
// ─────────────────────────────────────────────

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build the order array from the list of available problem indices.
 * Keeps the difficulty ordering: easy → medium → hard, shuffled within each tier.
 */
function buildOrderFromIndices(indices) {
  const map = {
    easy: [],
    medium: [],
    hard: [],
  };
  for (const idx of indices) {
    map[PROBLEMS[idx].difficulty].push(idx);
  }
  return [
    ...shuffleArray(map.easy),
    ...shuffleArray(map.medium),
    ...shuffleArray(map.hard),
  ];
}

function loadProblem(index) {
  // If completed set is everything, show special message
  const availableIndices = PROBLEMS.reduce((acc, _, i) => {
    if (!state.completedSet.has(i)) acc.push(i);
    return acc;
  }, []);

  if (availableIndices.length === 0) {
    // All problems completed – display congratulations
    DOM.integralDisplay.innerHTML = `<div style="text-align:center; padding:2rem;">
      <span style="font-size:2rem;">🎉</span>
      <p style="font-family:var(--font-mono); color:var(--accent); margin-top:0.5rem;">
        You've solved every integral!
      </p>
    </div>`;
    DOM.difficultyBadge.style.display = "none";
    DOM.problemNumber.textContent = "Complete";
    DOM.answerInput.disabled = true;
    DOM.checkBtn.disabled = true;
    DOM.nextBtn.disabled = true;
    DOM.hintBtn.disabled = true;
    DOM.feedback.className = "feedback";
    DOM.preview.innerHTML = "";
    hideFeedback();
    return;
  }

  // If the loaded index is out of bounds, wrap to first unsolved
  if (index >= state.order.length) {
    state.currentIndex = 0;
    index = 0;
    saveState();
  }

  const problemIdx = state.order[index % state.order.length];
  const problem = PROBLEMS[problemIdx];

  DOM.integralDisplay.classList.add("changing");
  setTimeout(() => {
    renderKaTeX(problem.latex, DOM.integralDisplay);
    DOM.integralDisplay.classList.remove("changing");
  }, 200);

  DOM.difficultyBadge.textContent = problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1);
  DOM.difficultyBadge.className   = `difficulty-badge ${problem.difficulty}`;
  DOM.difficultyBadge.style.display = ""; // ensure visible

  DOM.problemNumber.textContent = `Problem ${index + 1}`;

  // Enable inputs (in case they were disabled after completion)
  DOM.answerInput.disabled = false;
  DOM.checkBtn.disabled = false;
  DOM.nextBtn.disabled = false;
  DOM.hintBtn.disabled = false;

  DOM.answerInput.value = "";
  DOM.preview.innerHTML = "";
  DOM.hintBtn.textContent = "Show Hint";
  state.hintShown = false;
  hideFeedback();

  const oldHint = document.querySelector(".hint-block");
  if (oldHint) oldHint.remove();

  DOM.answerInput.focus();
}

// ─────────────────────────────────────────────
// 7. SUBMISSION
// ─────────────────────────────────────────────

function handleSubmit() {
  const userAnswer = DOM.answerInput.value.trim();
  if (!userAnswer) {
    DOM.answerInput.classList.add("shake");
    setTimeout(() => DOM.answerInput.classList.remove("shake"), 400);
    showFeedback("error", "Please enter your answer first.");
    return;
  }

  const problemIdx = state.order[state.currentIndex % state.order.length];
  const problem    = PROBLEMS[problemIdx];

  state.attempted++;
  bumpStat(DOM.totalCount);

  const result = validateAnswer(userAnswer, problem.integrand);

  if (result.error) {
    showFeedback("error", `⚠ ${result.error}`);
    state.streak = 0;
    updateStats();
    saveState();
    return;
  }

  if (result.valid) {
    showFeedback("correct", "✓ Correct! The derivative of your answer matches the integrand.");
    state.correct++;
    state.streak++;
    bumpStat(DOM.scoreCount);
    bumpStat(DOM.streakCount);

    // Mark this problem as completed
    state.completedSet.add(problemIdx);
  } else {
    showFeedback("incorrect", "✗ Not quite — differentiate your answer and check it equals the integrand.");
    state.streak = 0;
    DOM.answerInput.classList.add("shake");
    setTimeout(() => DOM.answerInput.classList.remove("shake"), 400);
  }

  updateStats();
  updateProgress();
  saveState();

  // If all problems are now completed, rebuild the order (empty) and reload to show the "complete" UI
  const remaining = PROBLEMS.reduce((acc, _, i) => {
    if (!state.completedSet.has(i)) acc.push(i);
    return acc;
  }, []);
  if (remaining.length === 0) {
    state.order = [];
    state.currentIndex = 0;
    loadProblem(0); // will show completion message
    saveState();
  }
}

// ─────────────────────────────────────────────
// 8. HINT
// ─────────────────────────────────────────────

function handleHint() {
  if (state.hintShown) return;

  const problemIdx = state.order[state.currentIndex % state.order.length];
  const problem    = PROBLEMS[problemIdx];

  const hintEl = document.createElement("div");
  hintEl.className = "hint-block";
  hintEl.textContent = `💡 ${problem.hint}`;

  const footer = document.querySelector(".card-footer");
  footer.parentNode.insertBefore(hintEl, footer);

  DOM.hintBtn.textContent = "Hint shown";
  DOM.hintBtn.disabled    = true;
  state.hintShown         = true;
}

// ─────────────────────────────────────────────
// 9. LIVE PREVIEW
// ─────────────────────────────────────────────

function handleInputPreview(e) {
  const val = e.target.value.trim();
  if (!val) { DOM.preview.innerHTML = ""; return; }

  try {
    const previewLatex = val
      .replace(/\*/g, " \\cdot ")
      .replace(/\^(\d+)/g, "^{$1}")
      .replace(/\^(\([^)]+\))/g, "^{$1}")
      .replace(/sqrt\(([^)]+)\)/g, "\\sqrt{$1}")
      .replace(/sin\(/g, "\\sin(")
      .replace(/cos\(/g, "\\cos(")
      .replace(/tan\(/g, "\\tan(")
      .replace(/log\(/g, "\\log(")
      .replace(/ln\(/g, "\\ln(")
      .replace(/e\^/g, "e^");

    katex.render(previewLatex, DOM.preview, { throwOnError: true, displayMode: false });
  } catch {
    DOM.preview.textContent = val;
  }
}

// ─────────────────────────────────────────────
// 10. INIT
// ─────────────────────────────────────────────

function init() {
  // Try to load previous state
  const saved = loadState();
  if (saved) {
    state.streak = saved.streak || 0;
    state.correct = saved.correct || 0;
    state.attempted = saved.attempted || 0;
    state.completedSet = saved.completedSet || new Set();
    // Rebuild order from all problems **not** in completedSet
    const availableIndices = PROBLEMS.reduce((acc, _, i) => {
      if (!state.completedSet.has(i)) acc.push(i);
      return acc;
    }, []);
    state.order = buildOrderFromIndices(availableIndices);
    state.currentIndex = 0; // start fresh on the reduced set
  } else {
    // Fresh state
    state.completedSet = new Set();
    const allIndices = PROBLEMS.map((_, i) => i);
    state.order = buildOrderFromIndices(allIndices);
    state.currentIndex = 0;
    state.streak = 0;
    state.correct = 0;
    state.attempted = 0;
  }

  // Footer info
  DOM.poolSize.textContent = `${PROBLEMS.length}`;

  // Load first problem (will handle empty remaining set)
  loadProblem(state.currentIndex);
  updateStats();
  updateProgress();

  // Event listeners
  DOM.checkBtn.addEventListener("click", handleSubmit);

  DOM.nextBtn.addEventListener("click", () => {
    state.currentIndex++;
    loadProblem(state.currentIndex);
    saveState();
  });

  DOM.hintBtn.addEventListener("click", handleHint);

  DOM.answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSubmit();
  });

  DOM.answerInput.addEventListener("input", handleInputPreview);

  // Optional reset button (if you added it to the HTML)
  if (DOM.resetBtn) {
    DOM.resetBtn.addEventListener("click", () => {
      if (confirm("Reset all progress? You'll start over from the beginning.")) {
        clearSavedState();
        location.reload();
      }
    });
  }

  // Save initial state (to persist even if they don't answer any)
  saveState();
}

// Wait for KaTeX and Nerdamer to be available
window.addEventListener("load", () => {
  if (typeof katex === "undefined" || typeof nerdamer === "undefined") {
    document.body.innerHTML = `<div style="color:red;padding:2rem;font-family:monospace">
      Error: Failed to load KaTeX or Nerdamer from CDN. Check your internet connection.
    </div>`;
    return;
  }
  init();
});