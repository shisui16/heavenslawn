/**
 * Book: Calculus
 * Chapters:
 *   1. Differentiation
 *   2. Integration Techniques
 *   3. Series & Approximations
 */

export const calculus = {
  title: "Calculus",

  chapters: [

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 1 – Differentiation
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Differentiation",
      content: [
        {
          type: "text",
          data: `
            <h2>The Derivative</h2>
            <p>
              The derivative is the instantaneous rate of change:
              $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$$
              Geometrically, it is the slope of the tangent line.
            </p>
            <h2>Core Rules</h2>
            <p>
              $$\\frac{d}{dx}x^n = nx^{n-1} \\qquad \\frac{d}{dx}e^x = e^x \\qquad \\frac{d}{dx}\\ln x = \\frac{1}{x}$$
              $$\\frac{d}{dx}\\sin x = \\cos x \\qquad \\frac{d}{dx}\\cos x = -\\sin x \\qquad \\frac{d}{dx}\\tan x = \\sec^2 x$$
            </p>
            <p>
              <strong>Chain rule:</strong> $\\dfrac{d}{dx}f(g(x)) = f'(g(x))\\cdot g'(x)$
              <br>
              <strong>Product rule:</strong> $\\dfrac{d}{dx}[uv] = u'v + uv'$
              <br>
              <strong>Quotient rule:</strong> $\\dfrac{d}{dx}\\left[\\dfrac{u}{v}\\right] = \\dfrac{u'v - uv'}{v^2}$
            </p>
          `,
        },
        {
          type: "mcq",
          question: "What is $\\dfrac{d}{dx}\\left[3x^4 - 2x^2 + 5\\right]$?",
          options: ["$12x^3 - 4x$","$12x^3 - 4x + 5$","$3x^3 - 2x$","$12x^3 + 5$"],
          correct: [0],
          explanation: "Power rule term-by-term: $12x^3 - 4x + 0$.",
        },
        {
          type: "mcq",
          question: "Using the chain rule, $\\dfrac{d}{dx}\\cos(3x^2)$ equals:",
          options: [
            "$-\\sin(3x^2)$",
            "$-6x\\sin(3x^2)$",
            "$6x\\sin(3x^2)$",
            "$-3x\\sin(3x^2)$",
          ],
          correct: [1],
          explanation: "Let $u=3x^2$: $\\frac{d}{dx}\\cos u = -\\sin u \\cdot 6x = -6x\\sin(3x^2)$.",
        },
        {
          type: "mcq",
          question: "The product rule applied to $f(x)=x^2 e^x$ gives $f'(x)=$",
          options: [
            "$2xe^x$",
            "$x^2 e^x$",
            "$e^x(x^2+2x)$",
            "$2x+e^x$",
          ],
          correct: [2],
          explanation: "$f'=2x\\cdot e^x + x^2\\cdot e^x = e^x(2x+x^2)$.",
        },
        {
          type: "text",
          data: `
            <h2>Higher Derivatives & Critical Points</h2>
            <p>
              The second derivative $f''(x)$ measures concavity.
            </p>
            <p>
              At a critical point $f'(x_0)=0$:
              <br>• $f''(x_0)>0$ → local <strong>minimum</strong>
              <br>• $f''(x_0)<0$ → local <strong>maximum</strong>
              <br>• $f''(x_0)=0$ → inconclusive (use higher derivatives or sign analysis)
            </p>
            <p>
              <strong>Inflection point:</strong> where $f''$ changes sign.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "For $f(x)=x^3-3x$, the local minimum occurs at $x=$",
          options: ["$x=-1$","$x=0$","$x=1$","$x=3$"],
          correct: [2],
          explanation: "$f'=3x^2-3=0 \\Rightarrow x=\\pm1$. $f''=6x$: at $x=1$, $f''>0$ → minimum; at $x=-1$, $f''<0$ → maximum.",
        },
        {
          type: "numeric",
          question: "The function $f(x)=x^3-12x$ has a local maximum at $x=-2$. What is $f(-2)$? Enter the value (put <code>1</code> in unit field).",
          answer: "16 1",
          tolerance: 0.01,
          hint: "$f(-2) = (-2)^3 - 12(-2)$",
          explanation: "$(-8) - (-24) = 16$.",
        },
        {
          type: "msq",
          question: "Which statements about the derivative are correct?",
          options: [
            "If $f'(a)=0$, then $a$ is a local extremum",
            "Differentiability implies continuity",
            "Continuity implies differentiability",
            "$\\frac{d}{dx}[f+g] = f'+g'$ (linearity)",
          ],
          correct: [1, 3],
          explanation: "A is false (could be inflection point); C is false ($|x|$ is continuous but not differentiable at 0). B and D are correct.",
        },
        {
          type: "symbolic",
          question: "Find the antiderivative of $f(x) = 4x^3$. Enter without $+C$.",
          integrand: "4*x^3",
          variable: "x",
          hint: "Power rule for integration: $\\int x^n dx = x^{n+1}/(n+1)$.",
          explanation: "$\\int 4x^3\\,dx = x^4$.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 2 – Integration Techniques
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Integration Techniques",
      content: [
        {
          type: "text",
          data: `
            <h2>The Fundamental Theorem of Calculus</h2>
            <p>
              If $F'(x)=f(x)$ then:
              $$\\int_a^b f(x)\\,dx = F(b)-F(a)$$
            </p>
            <h2>Standard Integrals</h2>
            <p>
              $$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+C \\quad (n\\neq-1)$$
              $$\\int e^x\\,dx = e^x+C \\qquad \\int \\frac{1}{x}\\,dx = \\ln|x|+C$$
              $$\\int \\sin x\\,dx = -\\cos x+C \\qquad \\int \\cos x\\,dx = \\sin x+C$$
            </p>
            <h2>Integration by Substitution</h2>
            <p>
              If $u=g(x)$ then $du=g'(x)\\,dx$:
              $$\\int f(g(x))\\,g'(x)\\,dx = \\int f(u)\\,du$$
            </p>
          `,
        },
        {
          type: "numeric",
          question: "Evaluate $\\displaystyle\\int_1^3 2x\\,dx$. Enter the value (put <code>1</code> in unit field).",
          answer: "8 1",
          tolerance: 0.01,
          hint: "$\\int 2x\\,dx = x^2+C$. Apply limits.",
          explanation: "$[x^2]_1^3 = 9-1 = 8$.",
        },
        {
          type: "symbolic",
          question: "Find $\\displaystyle\\int (6x^2 - 4x + 1)\\,dx$. Enter without $+C$.",
          integrand: "6*x^2-4*x+1",
          variable: "x",
          hint: "Integrate term by term.",
          explanation: "$2x^3 - 2x^2 + x + C$.",
        },
        {
          type: "text",
          data: `
            <h2>Integration by Parts</h2>
            <p>
              $$\\int u\\,dv = uv - \\int v\\,du$$
              Choose $u$ and $dv$ using <strong>LIATE</strong> order of priority:
              Logarithm → Inverse trig → Algebraic → Trig → Exponential.
            </p>
            <p>
              <strong>Example:</strong> $\\int x e^x\\,dx$. Let $u=x$, $dv=e^x\\,dx$. Then $du=dx$, $v=e^x$:
              $$\\int x e^x\\,dx = xe^x - \\int e^x\\,dx = xe^x - e^x + C = e^x(x-1)+C$$
            </p>
          `,
        },
        {
          type: "mcq",
          question: "Using substitution $u=x^2+1$, the integral $\\displaystyle\\int 2x(x^2+1)^4\\,dx$ becomes:",
          options: [
            "$\\displaystyle\\int u^4\\,du$",
            "$\\displaystyle\\int 2u^4\\,du$",
            "$\\displaystyle\\int u^4/(2x)\\,du$",
            "$\\displaystyle\\int x\\cdot u^4\\,du$",
          ],
          correct: [0],
          explanation: "$u=x^2+1$, $du=2x\\,dx$, so $2x\\,dx=du$. The integral becomes $\\int u^4\\,du$.",
        },
        {
          type: "symbolic",
          question: "After substituting $u=x^2+1$ in $\\displaystyle\\int 2x(x^2+1)^4\\,dx$, you get $\\int u^4\\,du$. Find this antiderivative in terms of $u$. Enter without $+C$. <br><small>Use <code>u</code> as the variable.</small>",
          integrand: "u^4",
          variable: "u",
          hint: "Power rule: $\\int u^4 du = u^5/5$.",
          explanation: "$u^5/5 + C = (x^2+1)^5/5 + C$.",
        },
        {
          type: "msq",
          question: "Which definite integrals equal zero? (Use symmetry — no calculation needed.)",
          options: [
            "$\\displaystyle\\int_{-1}^{1} x^3\\,dx$",
            "$\\displaystyle\\int_{-\\pi}^{\\pi} \\sin x\\,dx$",
            "$\\displaystyle\\int_{-1}^{1} x^2\\,dx$",
            "$\\displaystyle\\int_{0}^{2\\pi} \\cos x\\,dx$",
          ],
          correct: [0, 1, 3],
          explanation: "A and B are odd functions on symmetric intervals → 0. C is even ($x^2\\geq0$) → $2/3\\neq0$. D: $\\int_0^{2\\pi}\\cos x\\,dx=[\\sin x]_0^{2\\pi}=0$.",
        },
        {
          type: "numeric",
          question: "Evaluate $\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx$. Enter the value (put <code>1</code> in unit field).",
          answer: "1 1",
          tolerance: 0.01,
          hint: "$\\int\\cos x\\,dx=\\sin x+C$.",
          explanation: "$[\\sin x]_0^{\\pi/2}=\\sin(\\pi/2)-\\sin 0 = 1-0=1$.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 3 – Series & Approximations
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Series & Approximations",
      content: [
        {
          type: "text",
          data: `
            <h2>Taylor Series</h2>
            <p>
              Any smooth function can be expanded around $x=a$:
              $$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n$$
              The special case $a=0$ is the <strong>Maclaurin series</strong>.
            </p>
            <h2>Key Maclaurin Series</h2>
            <p>
              $$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$
              $$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$$
              $$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$
              $$\\frac{1}{1-x} = 1 + x + x^2 + x^3 + \\cdots \\quad |x|<1$$
            </p>
          `,
        },
        {
          type: "mcq",
          question: "The first three non-zero terms of the Maclaurin series for $\\sin x$ are:",
          options: [
            "$1 - x^2/2 + x^4/24$",
            "$x - x^3/6 + x^5/120$",
            "$x + x^3/6 + x^5/120$",
            "$1 + x + x^2/2$",
          ],
          correct: [1],
          explanation: "$\\sin x = x - x^3/3! + x^5/5! - \\cdots = x - x^3/6 + x^5/120 - \\cdots$",
        },
        {
          type: "mcq",
          question: "For small $\\theta$, the approximation $\\sin\\theta \\approx \\theta$ is valid to what order?",
          options: ["Zeroth order in $\\theta$","First order — error $O(\\theta^3)$","Second order — error $O(\\theta^2)$","Exact for all $\\theta$"],
          correct: [1],
          explanation: "$\\sin\\theta = \\theta - \\theta^3/6 + \\cdots$, so $\\sin\\theta - \\theta = -\\theta^3/6 + \\cdots$: first-order approximation with cubic error.",
        },
        {
          type: "text",
          data: `
            <h2>Convergence</h2>
            <p>
              A series $\\sum a_n$ <strong>converges</strong> if the partial sums approach a finite limit.
              The <strong>radius of convergence</strong> $R$ of a power series determines the interval
              $|x-a| < R$ where convergence is guaranteed.
            </p>
            <h2>Useful Tests</h2>
            <p>
              <strong>Ratio test:</strong> $L = \\lim_{n\\to\\infty}|a_{n+1}/a_n|$. Converges if $L<1$, diverges if $L>1$.
              <br>
              <strong>Geometric series:</strong> $\\sum_{n=0}^\\infty r^n = \\dfrac{1}{1-r}$ iff $|r|<1$.
            </p>
          `,
        },
        {
          type: "msq",
          question: "Which series are convergent?",
          options: [
            "$\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n$",
            "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n}$ (harmonic series)",
            "$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!}$",
            "$\\displaystyle\\sum_{n=0}^{\\infty} 2^n$",
          ],
          correct: [0, 2],
          explanation: "A is geometric with $r=1/2<1$ → converges to 2. B is the famous divergent harmonic series. C is $e^{-1}$ — absolutely convergent. D has $r=2>1$ → diverges.",
        },
        {
          type: "numeric",
          question: "The geometric series $\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n$ converges to what value? Enter (put <code>1</code> in unit field).",
          answer: "1.5 1",
          tolerance: 0.01,
          hint: "$\\sum r^n = 1/(1-r)$ for $|r|<1$.",
          explanation: "$1/(1-1/3) = 1/(2/3) = 3/2 = 1.5$.",
        },
        {
          type: "mcq",
          question: "Using $e^x \\approx 1+x+x^2/2$ for small $x$, approximate $e^{0.1}$ to 4 decimal places:",
          options: ["1.1000","1.1050","1.1052","1.2000"],
          correct: [2],
          explanation: "$1 + 0.1 + 0.01/2 = 1 + 0.1 + 0.005 = 1.105$. The true value is $1.10517\\ldots$, so to 4 d.p.: $1.1052$.",
        },
        {
          type: "symbolic",
          question: "The Maclaurin expansion gives $e^x = \\sum x^n/n!$. The antiderivative of $e^x$ is $e^x$ itself. Confirm this: find $\\displaystyle\\int e^x\\,dx$ (without $+C$). Enter <code>e^x</code>.",
          integrand: "e^x",
          variable: "x",
          hint: "$e^x$ is its own derivative and antiderivative.",
          explanation: "$\\int e^x\\,dx = e^x + C$.",
        },
      ],
    },
  ],
};
