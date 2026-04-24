/**
 * Chapter 1 – Analytical Mechanics: Constraints & Generalised Coordinates
 *
 * Content format reference:
 *   type: "text"     – theory block (HTML + LaTeX)
 *   type: "mcq"      – single correct answer
 *   type: "msq"      – multiple correct answers
 *   type: "numeric"  – number + unit answer
 *   type: "symbolic" – antiderivative validation via Nerdamer
 *
 * All math is written in $…$ (inline) or $$…$$ (display) KaTeX syntax.
 */

export const chapter1 = {
  title: "Analytical Mechanics – Constraints",

  content: [
    // ── Theory 1 ────────────────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Generalised Coordinates</h2>
        <p>
          Classical mechanics, as formulated by Newton, works best in Cartesian coordinates.
          But many systems — pendulums, rigid bodies, constrained particles — are more naturally
          described by a smaller, independent set of variables called
          <strong>generalised coordinates</strong>.
        </p>
        <p>
          For a system of $N$ particles subject to $k$ holonomic constraints, the number of
          <em>degrees of freedom</em> is:
          $$f = 3N - k$$
        </p>
        <p>
          The generalised coordinates $q_1, q_2, \ldots, q_f$ can be any independent quantities
          (angles, arc lengths, ratios…) that completely specify the configuration of the system.
        </p>
        <h2>Holonomic vs Non-Holonomic Constraints</h2>
        <p>
          A constraint is <strong>holonomic</strong> if it can be expressed as:
          $$f(q_1, q_2, \ldots, q_n, t) = 0$$
          Such constraints reduce the number of independent coordinates.
          A <strong>non-holonomic</strong> constraint involves velocities and cannot be integrated
          to give a position-only relation, e.g. a disk rolling without slipping.
        </p>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "A double pendulum (two masses connected by two rods) moves in a vertical plane. How many degrees of freedom does it have?",
      options: [
        "1 – only the first angle matters",
        "2 – one angle for each pendulum arm",
        "4 – two positions, each with x and y",
        "6 – three coordinates per mass",
      ],
      correct: [1],
      explanation:
        "Each arm sweeps one independent angle $\\theta_1$ and $\\theta_2$ in the plane, giving $f = 2$.",
    },

    // ── Theory 2 ─────────────────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Lagrangian</h2>
        <p>
          Given generalised coordinates, we define the <strong>Lagrangian</strong>:
          $$L = T - V$$
          where $T$ is kinetic energy and $V$ is potential energy.
        </p>
        <p>
          The equations of motion follow from the <strong>Euler–Lagrange equations</strong>:
          $$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} - \\frac{\\partial L}{\\partial q_i} = 0$$
          One equation per generalised coordinate $q_i$.
        </p>
        <p>
          This is the foundational result of Lagrangian mechanics: it encodes Newton's second
          law in a coordinate-independent form that automatically handles constraints.
        </p>
      `,
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "For a simple pendulum of length $l$ and bob mass $m$, the Lagrangian in terms of angle $\\theta$ is:",
      options: [
        "$L = \\frac{1}{2}ml^2\\dot{\\theta}^2 + mgl\\cos\\theta$",
        "$L = \\frac{1}{2}ml^2\\dot{\\theta}^2 - mgl\\cos\\theta$",
        "$L = mgl\\cos\\theta$",
        "$L = \\frac{1}{2}m\\dot{\\theta}^2$",
      ],
      correct: [0],
      explanation:
        "Kinetic energy: $T = \\frac{1}{2}ml^2\\dot{\\theta}^2$. Taking the lowest point as $V = 0$: $V = -mgl\\cos\\theta$. So $L = T - V = \\frac{1}{2}ml^2\\dot{\\theta}^2 + mgl\\cos\\theta$.",
    },

    // ── MSQ 1 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which of the following are examples of <strong>holonomic</strong> constraints? (Select all that apply)",
      options: [
        "A bead constrained to move on a fixed circular wire: $x^2 + y^2 = R^2$",
        "A disk rolling without slipping on a flat surface (rolling constraint involves $\\dot{x}$)",
        "A particle on the surface of a sphere: $x^2 + y^2 + z^2 = R^2$",
        "A particle constrained to move on a moving parabola: $y = f(x, t)$",
      ],
      correct: [0, 2, 3],
      explanation:
        "Options A, C, and D are all expressible as $f(q, t) = 0$ with no velocities — they are holonomic. Option B involves $\\dot{x}$ and cannot be integrated, making it non-holonomic.",
    },

    // ── Numeric 1 ────────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "A simple pendulum of length $l = 1\\,\\text{m}$ undergoes small oscillations. " +
        "What is its angular frequency $\\omega$ (in rad/s)? Use $g = 9.8\\,\\text{m/s}^2$ " +
        "and round to 2 decimal places.",
      answer: "3.13 rad/s",
      tolerance: 0.02,
      hint: "For small angles, $\\omega = \\sqrt{g/l}$.",
      explanation:
        "$\\omega = \\sqrt{9.8/1} \\approx 3.13\\,\\text{rad/s}$",
    },

    // ── Numeric 2 ────────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "A particle of mass $m = 2\\,\\text{kg}$ moves along a frictionless surface under " +
        "a potential $V = 3x^2\\,\\text{J}$ (with $x$ in metres). " +
        "What is the angular frequency of small oscillations about $x = 0$? " +
        "Give your answer in rad/s.",
      answer: "1.73 rad/s",
      tolerance: 0.02,
      hint: "Near an equilibrium at $x_0$, the effective spring constant is $k = V''(x_0)$, so $\\omega = \\sqrt{k/m}$.",
      explanation:
        "$V''(x) = 6$, so $k = 6\\,\\text{N/m}$ and $\\omega = \\sqrt{6/2} = \\sqrt{3} \\approx 1.73\\,\\text{rad/s}$.",
    },

    // ── Theory 3 ─────────────────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Cyclic Coordinates & Conservation Laws</h2>
        <p>
          A generalised coordinate $q_i$ is called <strong>cyclic</strong> (or ignorable) if the
          Lagrangian does not depend on it:
          $$\\frac{\\partial L}{\\partial q_i} = 0$$
        </p>
        <p>
          The Euler–Lagrange equation then gives:
          $$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} = 0 \\implies p_i = \\frac{\\partial L}{\\partial \\dot{q}_i} = \\text{const}$$
        </p>
        <p>
          The <strong>generalised momentum</strong> $p_i$ conjugate to a cyclic coordinate is
          conserved. This is Noether's theorem in action: every continuous symmetry of $L$
          corresponds to a conserved quantity.
        </p>
      `,
    },

    // ── MSQ 2 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which conserved quantities correspond to the following symmetries of the Lagrangian?",
      options: [
        "Time-translation symmetry $\\Rightarrow$ conservation of energy",
        "Spatial-translation symmetry $\\Rightarrow$ conservation of linear momentum",
        "Rotational symmetry $\\Rightarrow$ conservation of angular momentum",
        "Gauge symmetry $\\Rightarrow$ conservation of charge (electrodynamics)",
      ],
      correct: [0, 1, 2, 3],
      explanation:
        "All four are direct applications of Noether's theorem. Each continuous symmetry of the action yields a conserved Noether charge.",
    },

    // ── Symbolic 1 ───────────────────────────────────────────────────────
    {
      type: "symbolic",
      question:
        "Find the antiderivative of $f(x) = 3x^2$ with respect to $x$. " +
        "Enter your answer without the constant of integration $+C$.",
      integrand: "3*x^2",
      variable: "x",
      hint: "Use the power rule: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}$",
      explanation: "$\\int 3x^2\\,dx = x^3 + C$",
    },

    // ── Symbolic 2 ───────────────────────────────────────────────────────
    {
      type: "symbolic",
      question:
        "Evaluate $\\displaystyle\\int (2x + \\cos x)\\,dx$. " +
        "Enter your answer without $+C$. " +
        "Use <code>sin(x)</code> for $\\sin x$.",
      integrand: "2*x + cos(x)",
      variable: "x",
      hint: "Integrate term by term.",
      explanation: "$\\int (2x + \\cos x)\\,dx = x^2 + \\sin x + C$",
    },

    // ── MCQ 3 – wrap-up ──────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "In a central-force problem (particle in a $V(r)$ potential), which coordinate is cyclic?",
      options: [
        "The radial coordinate $r$",
        "The polar angle $\\theta$ (in 2D)",
        "The azimuthal angle $\\phi$ (in 3D)",
        "Both $\\theta$ and $\\phi$ in 3D",
      ],
      correct: [3],
      explanation:
        "Since $V$ depends only on $r$, neither $\\theta$ nor $\\phi$ appears in $L$, making both cyclic. Their conjugate momenta (angular momenta) are conserved, consistent with the isotropy of space.",
    },
  ],
};
