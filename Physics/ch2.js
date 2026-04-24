/**
 * Chapter 2 – Calculus: Derivatives & Integration Techniques
 *
 * A self-contained introduction to differentiation and integration,
 * with symbolic validation via Nerdamer for antiderivative problems.
 */

export const chapter2 = {
  title: "Calculus – Derivatives & Integration",

  content: [
    // ── Theory 1 ──────────────────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Derivative</h2>
        <p>
          The derivative of a function $f(x)$ is defined as the limit:
          $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
        </p>
        <p>
          Geometrically it gives the instantaneous slope of the tangent line to the graph.
          In physics it represents instantaneous rate of change — velocity is the derivative
          of position; acceleration is the derivative of velocity.
        </p>
        <h2>Basic Differentiation Rules</h2>
        <p>
          $$\\frac{d}{dx}[x^n] = nx^{n-1} \\qquad \\text{(Power Rule)}$$
          $$\\frac{d}{dx}[\\sin x] = \\cos x \\qquad \\frac{d}{dx}[\\cos x] = -\\sin x$$
          $$\\frac{d}{dx}[e^x] = e^x \\qquad \\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$
        </p>
        <p>
          The <strong>chain rule</strong> for composite functions $f(g(x))$:
          $$\\frac{d}{dx}f(g(x)) = f'(g(x)) \\cdot g'(x)$$
        </p>
      `,
    },

    // ── MCQ 1 ─────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question: "What is $\\dfrac{d}{dx}\\left[x^5 - 3x^2 + 7\\right]$?",
      options: [
        "$5x^4 - 6x$",
        "$5x^4 - 6x + 7$",
        "$x^4 - 6x$",
        "$5x^4 + 7$",
      ],
      correct: [0],
      explanation:
        "Apply the power rule term-by-term: $5x^4 - 6x + 0 = 5x^4 - 6x$.",
    },

    // ── MCQ 2 ─────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "Using the chain rule, what is $\\dfrac{d}{dx}\\sin(x^2)$?",
      options: [
        "$\\cos(x^2)$",
        "$2x\\cos(x^2)$",
        "$-2x\\cos(x^2)$",
        "$\\sin(2x)$",
      ],
      correct: [1],
      explanation:
        "Let $u = x^2$, so $\\frac{d}{dx}\\sin u = \\cos u \\cdot \\frac{du}{dx} = \\cos(x^2) \\cdot 2x$.",
    },

    // ── Theory 2 ──────────────────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Fundamental Theorem of Calculus</h2>
        <p>
          Integration and differentiation are inverse operations.
          The <strong>Fundamental Theorem of Calculus</strong> states:
          $$\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$$
        </p>
        <p>
          And for definite integrals, if $F'(x) = f(x)$:
          $$\\int_a^b f(x)\\,dx = F(b) - F(a)$$
        </p>
        <h2>Standard Integrals</h2>
        <p>
          $$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$
          $$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$$
          $$\\int e^x\\,dx = e^x + C$$
          $$\\int \\sin x\\,dx = -\\cos x + C$$
          $$\\int \\cos x\\,dx = \\sin x + C$$
        </p>
      `,
    },

    // ── Symbolic 1 ────────────────────────────────────────────────────────
    {
      type: "symbolic",
      question:
        "Find $\\displaystyle\\int 4x^3\\,dx$. Enter your answer without $+C$.",
      integrand: "4*x^3",
      variable: "x",
      hint: "Power rule for integration: $\\int x^n dx = \\frac{x^{n+1}}{n+1}$.",
      explanation: "$\\int 4x^3\\,dx = x^4 + C$",
    },

    // ── Symbolic 2 ────────────────────────────────────────────────────────
    {
      type: "symbolic",
      question:
        "Find $\\displaystyle\\int e^x\\,dx$. Enter your answer without $+C$. " +
        "Use <code>e^x</code> for $e^x$.",
      integrand: "e^x",
      variable: "x",
      hint: "$e^x$ is its own derivative (and antiderivative).",
      explanation: "$\\int e^x\\,dx = e^x + C$",
    },

    // ── MSQ 1 ─────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which of the following are valid antiderivatives of $f(x) = 2x$? (Select all that apply)",
      options: [
        "$x^2$",
        "$x^2 + 5$",
        "$x^2 - 100$",
        "$2x^2$",
      ],
      correct: [0, 1, 2],
      explanation:
        "Any function of the form $x^2 + C$ is an antiderivative of $2x$ since $\\frac{d}{dx}(x^2+C) = 2x$. The constant $C$ can be anything, including 0, 5, or $-100$. But $2x^2$ has derivative $4x \\neq 2x$.",
    },

    // ── Numeric 1 ─────────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "Evaluate the definite integral $\\displaystyle\\int_0^2 3x^2\\,dx$. " +
        "Enter the numerical value (no units required — just enter <code>1</code> in the unit field).",
      answer: "8 1",
      tolerance: 0.01,
      hint: "$\\int 3x^2\\,dx = x^3 + C$. Apply limits 0 to 2.",
      explanation:
        "$\\int_0^2 3x^2\\,dx = [x^3]_0^2 = 8 - 0 = 8$",
    },

    // ── Theory 3 ──────────────────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Integration by Substitution</h2>
        <p>
          If $u = g(x)$, then $du = g'(x)\\,dx$ and:
          $$\\int f(g(x))\\,g'(x)\\,dx = \\int f(u)\\,du$$
        </p>
        <p>
          <strong>Example:</strong> Evaluate $\\int 2x\\,e^{x^2}\\,dx$.
        </p>
        <p>
          Let $u = x^2$, so $du = 2x\\,dx$. Then:
          $$\\int 2x\\,e^{x^2}\\,dx = \\int e^u\\,du = e^u + C = e^{x^2} + C$$
        </p>
        <h2>Integration by Parts</h2>
        <p>
          For products of functions, use the LIATE mnemonic and the formula:
          $$\\int u\\,dv = uv - \\int v\\,du$$
        </p>
        <p>
          <strong>Example:</strong> $\\int x\\,e^x\\,dx$. Let $u = x$, $dv = e^x\\,dx$.
          Then $du = dx$, $v = e^x$ and:
          $$\\int x\\,e^x\\,dx = xe^x - e^x + C = e^x(x-1) + C$$
        </p>
      `,
    },

    // ── Symbolic 3 ────────────────────────────────────────────────────────
    {
      type: "symbolic",
      question:
        "Use substitution to find $\\displaystyle\\int 2x\\,(x^2+1)^3\\,dx$. " +
        "Enter your result without $+C$. " +
        "Hint: Try $u = x^2 + 1$, or just expand the result as a power of $(x^2+1)$.",
      integrand: "2*x*(x^2+1)^3",
      variable: "x",
      hint: "Let $u = x^2 + 1$, $du = 2x\\,dx$. Then $\\int u^3\\,du = \\frac{u^4}{4}$.",
      explanation:
        "$u = x^2+1 \\implies \\int u^3\\,du = \\frac{u^4}{4} = \\frac{(x^2+1)^4}{4}$",
    },

    // ── MCQ 3 ─────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "Which substitution simplifies $\\displaystyle\\int \\frac{x}{\\sqrt{1-x^2}}\\,dx$?",
      options: [
        "$u = 1 - x^2$, so $du = -2x\\,dx$",
        "$u = x^2$, so $du = 2x\\,dx$",
        "$u = \\sqrt{1-x^2}$, so $du = \\frac{-x}{\\sqrt{1-x^2}}\\,dx$",
        "$x = \\sin\\theta$",
      ],
      correct: [0],
      explanation:
        "With $u = 1 - x^2$: $x\\,dx = -\\frac{du}{2}$ and $\\sqrt{1-x^2} = \\sqrt{u}$, giving $-\\frac{1}{2}\\int u^{-1/2}\\,du = -\\sqrt{u} + C = -\\sqrt{1-x^2} + C$.",
    },

    // ── Numeric 2 ─────────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "The area under $f(x) = \\sin x$ from $x = 0$ to $x = \\pi$ equals what value? " +
        "Enter just the number (put <code>1</code> in the unit field).",
      answer: "2 1",
      tolerance: 0.01,
      hint: "$\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi$",
      explanation:
        "$[-\\cos x]_0^\\pi = -\\cos\\pi + \\cos 0 = 1 + 1 = 2$",
    },

    // ── MSQ 2 – wrap-up ───────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which of the following statements about definite integrals are correct? (Select all that apply)",
      options: [
        "$\\displaystyle\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$",
        "$\\displaystyle\\int_a^a f(x)\\,dx = 0$",
        "If $f(x) \\geq 0$ on $[a,b]$, then $\\displaystyle\\int_a^b f(x)\\,dx \\geq 0$",
        "$\\displaystyle\\int_a^b [f(x)+g(x)]\\,dx = \\int_a^b f(x)\\,dx \\cdot \\int_a^b g(x)\\,dx$",
      ],
      correct: [0, 1, 2],
      explanation:
        "A, B, C are standard properties of definite integrals. D is false — integration distributes over addition (not multiplication).",
    },
  ],
};
