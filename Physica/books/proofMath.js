/**
 * proofMath.js  — Sample content for proof-based learning
 * Demonstrates: proof_guided, proof_free, proof_debug
 *
 * Register in main.js:
 *   import { proofMath } from "./books/proofMath.js";
 *   const BOOKS = [...existing..., proofMath];
 */

export const proofMath = {
  title: "Proof Mathematics",
  chapters: [

    // ── Chapter 1: Introduction to Proof Techniques ────────────────────────
    {
      title: "Proof Techniques",
      content: [

        // Theory block (existing type — unchanged)
        {
          type: "text",
          data: `
            <h2>What is a Mathematical Proof?</h2>
            <p>A <strong>proof</strong> is a finite sequence of logical deductions from
            axioms and previously established theorems that establishes the truth of a
            proposition beyond any doubt.</p>
            <p>Common proof strategies include:
            <strong>direct proof</strong>, <strong>proof by contrapositive</strong>,
            <strong>proof by contradiction</strong>, and
            <strong>mathematical induction</strong>.</p>
          `,
        },

        // ── proof_guided: prove √2 is irrational ──────────────────────────
        {
          type: "proof_guided",
          question: `
            <strong>Theorem:</strong> $\\sqrt{2}$ is irrational.<br>
            <em>We will prove by contradiction. Complete each step.</em>
          `,
          steps: [
            {
              prompt: "State the assumption for contradiction. What do we assume about $\\sqrt{2}$?",
              expected: "sqrt(2) is rational",
              hint: "We assume the opposite of what we want to prove.",
              explanation: "Correct — we assume $\\sqrt{2} = p/q$ with $p,q \\in \\mathbb{Z}$, $\\gcd(p,q)=1$.",
            },
            {
              prompt: "Squaring $\\sqrt{2} = p/q$ gives $2 = p^2/q^2$, so $p^2 = ?$",
              expected: "2*q^2",
              hint: "Multiply both sides by $q^2$.",
              explanation: "$p^2 = 2q^2$, so $p^2$ is even, hence $p$ is even.",
            },
            {
              prompt: "Since $p$ is even, write $p = 2k$. Substituting gives $4k^2 = 2q^2$, so $q^2 = ?$",
              expected: "2*k^2",
              hint: "Divide both sides by 2.",
              explanation: "$q^2 = 2k^2$, so $q^2$ is even, hence $q$ is even. But then $\\gcd(p,q) \\ge 2$ — contradiction.",
            },
          ],
          explanation: "The assumption that $\\sqrt{2}$ is rational leads to a contradiction with $\\gcd(p,q)=1$. Therefore $\\sqrt{2}$ is irrational. ∎",
        },

        // ── proof_free: prove infinitely many primes ───────────────────────
        {
          type: "proof_free",
          question: `
            <strong>Theorem (Euclid):</strong> There are infinitely many prime numbers.<br>
            Write a complete proof by contradiction. Include all logical steps.
          `,
          solution: `
            <strong>Proof.</strong> Assume for contradiction that there are finitely many primes:
            $p_1, p_2, \\ldots, p_n$.<br>
            Consider $N = p_1 p_2 \\cdots p_n + 1$.<br>
            $N > 1$, so $N$ has a prime factor $p$.<br>
            But $p$ cannot be any $p_i$, since $N \\equiv 1 \\pmod{p_i}$ for every $i$.<br>
            This contradicts our assumption. Therefore, there are infinitely many primes. ∎
          `,
          checklist: [
            "Contradiction assumption clearly stated",
            "Construction of $N$ explained",
            "Divisibility argument made rigorous",
            "Contradiction identified explicitly",
            "Conclusion stated",
          ],
        },

        // ── proof_debug: incorrect induction proof ─────────────────────────
        {
          type: "proof_debug",
          question: "The following induction proof contains a logical error. Identify it.",
          proof: [
            "Claim: $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$",
            "Base case: $n = 1$: LHS $= 1$, RHS $= \\frac{1 \\cdot 2}{2} = 1$. ✓",
            "Inductive step: Assume the formula holds for $n = k$.",
            "We want to show it for $n = k$.",   // ← error: should say k+1
            "LHS $= 1 + 2 + \\cdots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1)$",
            "$= (k+1)\\left(\\frac{k}{2} + 1\\right) = \\frac{(k+1)(k+2)}{2}$ ✓",
            "Therefore the formula holds for all $n \\ge 1$. ∎",
          ],
          errorLine: 3,   // 0-indexed → line 4 (displayed as line 4)
          errorKeywords: ["k+1", "k + 1", "inductive step", "wrong n", "should say"],
          errorExplanation: `
            The error is in <strong>Line 4</strong>: the inductive step states
            "show it for $n = k$" instead of "show it for $n = k+1$".
            This means the proof never actually advances the induction —
            it merely re-proves the hypothesis it already assumed.
            The rest of the calculation is correct for $n = k+1$, so only
            this statement of intent is wrong.
          `,
          explanation: "The inductive step must advance from $k$ to $k+1$, not stay at $k$.",
        },

      ],
    },

    // ── Chapter 2: Real Analysis ───────────────────────────────────────────
    {
      title: "Real Analysis",
      content: [

        {
          type: "text",
          data: `
            <h2>Epsilon-Delta Limits</h2>
            <p>We say $\\lim_{x \\to a} f(x) = L$ if for every $\\varepsilon > 0$
            there exists $\\delta > 0$ such that whenever $0 < |x - a| < \\delta$,
            we have $|f(x) - L| < \\varepsilon$.</p>
          `,
        },

        // proof_guided: ε-δ proof for a linear function
        {
          type: "proof_guided",
          question: `
            <strong>Prove:</strong> $\\lim_{x \\to 3}(2x - 1) = 5$
            using the $\\varepsilon$-$\\delta$ definition.
          `,
          steps: [
            {
              prompt: "Simplify $|f(x) - L|$ for $f(x) = 2x-1$, $L = 5$. What expression do you get?",
              expected: "2*|x-3|",
              hint: "$|(2x-1)-5| = |2x-6| = 2|x-3|$",
              explanation: "$|f(x)-L| = 2|x-3|$. This links directly to $|x-a|$.",
            },
            {
              prompt: "We need $2|x-3| < \\varepsilon$. What should $\\delta$ equal in terms of $\\varepsilon$?",
              expected: "epsilon/2",
              hint: "Divide both sides of $2|x-3| < \\varepsilon$ by 2.",
              explanation: "Choose $\\delta = \\varepsilon/2$. Then $|x-3|<\\delta$ implies $2|x-3|<\\varepsilon$.",
            },
          ],
          explanation: "For any $\\varepsilon>0$, choosing $\\delta=\\varepsilon/2$ works. The proof is complete. ∎",
        },

        // proof_debug: wrong negation of limit definition
        {
          type: "proof_debug",
          question: "This 'proof' claims $\\lim_{x\\to 0} x\\sin(1/x) \\neq 0$. Find the flaw.",
          proof: [
            "Assume for contradiction that $\\lim_{x\\to 0} x\\sin(1/x) = 0$.",
            "Then for all $\\varepsilon > 0$, there exists $\\delta > 0$ such that…",
            "…$|x| < \\delta$ implies $|x\\sin(1/x)| < \\varepsilon$.",
            "Take $x_n = 1/(n\\pi)$; then $\\sin(1/x_n) = \\sin(n\\pi) = 1$.",  // ← error: sin(nπ)=0 not 1
            "So $|x_n \\sin(1/x_n)| = |x_n| \\to 0$, contradicting $\\varepsilon$-requirement.",
            "Therefore the limit does not exist. ∎",
          ],
          errorLine: 3,
          errorKeywords: ["sin(nπ)", "sin(n*pi)", "zero", "0 not 1", "equals 0"],
          errorExplanation: `
            <strong>Line 4</strong> states $\\sin(n\\pi) = 1$, but $\\sin(n\\pi) = 0$ for all integers $n$.
            The sequence $x_n = 1/(n\\pi)$ does <em>not</em> give $|x_n\\sin(1/x_n)|=|x_n|$;
            it gives $0$. The whole contradiction collapses. In fact the limit equals $0$,
            which can be shown correctly since $|x\\sin(1/x)| \\le |x| \\to 0$.
          `,
        },

      ],
    },

  ],
};
