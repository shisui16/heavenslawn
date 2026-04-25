/**
 * Book: Analytical Mechanics
 * Chapters:
 *   1. Constraints & Generalised Coordinates
 *   2. The Lagrangian Formalism
 *   3. Hamiltonian Mechanics
 */

export const analyticalMechanics = {
  title: "Analytical Mechanics",

  chapters: [

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 1 – Constraints & Generalised Coordinates
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Constraints & Generalised Coordinates",
      content: [
        {
          type: "text",
          data: `
            <h2>Degrees of Freedom</h2>
            <p>
              For a system of $N$ particles in 3D, there are $3N$ Cartesian coordinates.
              Each independent <em>holonomic constraint</em> of the form $f(\\mathbf{r}_i, t) = 0$
              removes one degree of freedom:
              $$f = 3N - k$$
              where $k$ is the number of holonomic constraints.
            </p>
            <h2>Generalised Coordinates</h2>
            <p>
              A set of $f$ independent variables $q_1, \\ldots, q_f$ that fully describes
              every configuration of the system. They need not be Cartesian — angles,
              arc lengths, or any convenient parameters work.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "A double pendulum (two rods, two masses) moves freely in a vertical plane. How many degrees of freedom does it have?",
          options: [
            "1 — only the upper angle matters",
            "2 — one angle per arm",
            "4 — two positions each with x and y",
            "6 — three coordinates per mass",
          ],
          correct: [1],
          explanation: "Each arm sweeps one independent angle $\\theta_1,\\, \\theta_2$ in the plane, giving $f = 2$.",
        },
        {
          type: "mcq",
          question: "A bead is constrained to slide along a fixed circular wire of radius $R$ in the $xy$-plane. How many degrees of freedom remain?",
          options: ["0","1","2","3"],
          correct: [1],
          explanation: "Starting with 3D ($f=3$), the bead lies in the plane ($z=0$, $-1$) and on the circle ($x^2+y^2=R^2$, $-1$), leaving $f=1$ — the arc length or angle $\\theta$.",
        },
        {
          type: "text",
          data: `
            <h2>Holonomic vs Non-Holonomic</h2>
            <p>
              A constraint is <strong>holonomic</strong> if it can be written purely in
              terms of coordinates and time:
              $$f(q_1,\\ldots,q_n,t)=0$$
              <strong>Non-holonomic</strong> constraints involve velocities and cannot be
              integrated away, e.g. a disk rolling without slipping:
              $$\\dot{x} - R\\dot{\\phi}\\cos\\theta = 0$$
              This cannot be expressed as $f(x,\\phi,\\theta,t)=0$.
            </p>
          `,
        },
        {
          type: "msq",
          question: "Which of the following are <strong>holonomic</strong> constraints?",
          options: [
            "$x^2 + y^2 = R^2$ — bead on a circle",
            "$\\dot{x} = R\\dot{\\theta}$ — rolling without slipping",
            "$z = 0$ — motion confined to the $xy$-plane",
            "$y = \\sin(x)$ — bead on a sinusoidal wire",
          ],
          correct: [0, 2, 3],
          explanation: "Options A, C, D are position-only equalities — holonomic. Option B involves velocities and is non-holonomic.",
        },
        {
          type: "numeric",
          question: "A rigid body has $N = 3$ particles in 3D subject to $k = 3$ holonomic constraints (the three inter-particle distances are fixed). How many degrees of freedom does it have? Enter the number (put <code>1</code> in the unit field).",
          answer: "6 1",
          tolerance: 0.01,
          hint: "$f = 3N - k$",
          explanation: "$f = 3 \\times 3 - 3 = 6$: three translational + three rotational.",
        },
        {
          type: "msq",
          question: "Which statements about generalised coordinates are correct?",
          options: [
            "They must always be Cartesian coordinates",
            "They need to be independent of each other",
            "Their number equals the degrees of freedom",
            "Angles and arc lengths are valid generalised coordinates",
          ],
          correct: [1, 2, 3],
          explanation: "Generalised coordinates can be any independent set of parameters; they are not restricted to Cartesian form.",
        },
        {
          type: "mcq",
          question: "For a particle moving on the surface of a sphere of radius $R$, which pair forms a minimal set of generalised coordinates?",
          options: [
            "$(x,y,z)$ with $x^2+y^2+z^2=R^2$",
            "$(r,\\theta,\\phi)$ with $r$ fixed",
            "$(\\theta,\\phi)$ the polar and azimuthal angles",
            "$(x,y)$ with $z = \\sqrt{R^2-x^2-y^2}$",
          ],
          correct: [2],
          explanation: "$f = 3 - 1 = 2$. The pair $(\\theta,\\phi)$ is the canonical minimal set, free of any constraint equation.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 2 – The Lagrangian Formalism
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "The Lagrangian Formalism",
      content: [
        {
          type: "text",
          data: `
            <h2>The Lagrangian</h2>
            <p>
              The <strong>Lagrangian</strong> of a system is:
              $$L(q_i,\\dot{q}_i,t) = T - V$$
              where $T$ is kinetic energy and $V$ is potential energy.
              The equations of motion are the <strong>Euler–Lagrange equations</strong>:
              $$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} - \\frac{\\partial L}{\\partial q_i} = 0, \\qquad i = 1,\\ldots,f$$
            </p>
            <h2>Why it's powerful</h2>
            <p>
              These equations automatically encode all constraint forces — you never need to
              compute them explicitly. They are also <em>covariant</em>: valid in any
              coordinate system.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "For a simple pendulum of mass $m$ and length $l$, the Lagrangian in terms of $\\theta$ is:",
          options: [
            "$L = \\tfrac{1}{2}ml^2\\dot\\theta^2 + mgl\\cos\\theta$",
            "$L = \\tfrac{1}{2}ml^2\\dot\\theta^2 - mgl\\cos\\theta$",
            "$L = mgl\\cos\\theta$",
            "$L = \\tfrac{1}{2}m\\dot\\theta^2$",
          ],
          correct: [0],
          explanation: "$T = \\tfrac{1}{2}ml^2\\dot\\theta^2$; taking $V = -mgl\\cos\\theta$ (zero at bottom): $L = T - V = \\tfrac{1}{2}ml^2\\dot\\theta^2 + mgl\\cos\\theta$.",
        },
        {
          type: "mcq",
          question: "Applying the Euler–Lagrange equation to the simple pendulum gives the equation of motion:",
          options: [
            "$ml^2\\ddot\\theta + mgl\\sin\\theta = 0$",
            "$ml^2\\ddot\\theta - mgl\\sin\\theta = 0$",
            "$ml^2\\ddot\\theta + mgl\\cos\\theta = 0$",
            "$m\\ddot\\theta + mg\\sin\\theta = 0$",
          ],
          correct: [0],
          explanation: "$\\partial L/\\partial\\dot\\theta = ml^2\\dot\\theta$, so $\\frac{d}{dt}(ml^2\\dot\\theta) = ml^2\\ddot\\theta$. And $\\partial L/\\partial\\theta = -mgl\\sin\\theta$. Setting the difference to zero gives $ml^2\\ddot\\theta + mgl\\sin\\theta = 0$.",
        },
        {
          type: "text",
          data: `
            <h2>Cyclic Coordinates & Conserved Momenta</h2>
            <p>
              If $\\partial L / \\partial q_i = 0$, coordinate $q_i$ is called <strong>cyclic</strong>
              (or ignorable). The Euler–Lagrange equation then gives:
              $$p_i \\equiv \\frac{\\partial L}{\\partial \\dot{q}_i} = \\text{constant}$$
              The <strong>generalised momentum</strong> conjugate to a cyclic coordinate is conserved.
              This is Noether's theorem in miniature.
            </p>
          `,
        },
        {
          type: "msq",
          question: "Which of the following represent symmetry → conservation law pairs via Noether's theorem?",
          options: [
            "Time-translation symmetry → energy conservation",
            "Spatial-translation symmetry → linear momentum conservation",
            "Rotational symmetry → angular momentum conservation",
            "Scale symmetry → mass conservation",
          ],
          correct: [0, 1, 2],
          explanation: "The first three are the standard Noether triplet. Mass conservation follows from a different principle (particle-number symmetry in quantum field theory), not scale symmetry.",
        },
        {
          type: "numeric",
          question: "A particle of mass $m = 2\\,\\text{kg}$ moves in potential $V = 4x^2\\,\\text{J}$. The angular frequency of small oscillations is $\\omega = \\sqrt{V''/m}$. What is $\\omega$ in rad/s?",
          answer: "2 rad/s",
          tolerance: 0.02,
          hint: "$V'' = 8\\,\\text{N/m}$, so $\\omega = \\sqrt{8/2}$.",
          explanation: "$V'' = 8$, $\\omega = \\sqrt{8/2} = \\sqrt{4} = 2\\,\\text{rad/s}$.",
        },
        {
          type: "mcq",
          question: "For a particle in a central potential $V(r)$, which coordinate is cyclic in 2D polar coordinates?",
          options: [
            "$r$ — the radial coordinate",
            "$\\theta$ — the angular coordinate",
            "Both $r$ and $\\theta$",
            "Neither",
          ],
          correct: [1],
          explanation: "$V$ depends only on $r$, so $\\partial L/\\partial\\theta = 0$: $\\theta$ is cyclic and $p_\\theta = mr^2\\dot\\theta$ (angular momentum) is conserved.",
        },
        {
          type: "symbolic",
          question: "The kinetic energy of a particle in 1D is $T = \\tfrac{1}{2}mv^2 = \\tfrac{1}{2}m\\dot{x}^2$. The generalised momentum is $p_x = \\partial L/\\partial \\dot{x}$. If $L = \\tfrac{1}{2}m\\dot{x}^2 - kx^2$, enter $p_x$ as a function of $x$. <br><small>Treat $m$ as a constant <code>m</code> and $\\dot{x}$ as variable <code>x</code>. Enter the antiderivative of $m$ with respect to $x$ (i.e. $mx$).</small>",
          integrand: "m",
          variable: "x",
          hint: "Differentiate $L$ with respect to $\\dot{x}$. The result is linear in $\\dot{x}$, equivalent to integrating $m$ once.",
          explanation: "$p_x = \\partial L/\\partial\\dot{x} = m\\dot{x}$, which is the standard linear momentum.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 3 – Hamiltonian Mechanics
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Hamiltonian Mechanics",
      content: [
        {
          type: "text",
          data: `
            <h2>The Hamiltonian</h2>
            <p>
              Perform a Legendre transform of the Lagrangian to pass from velocities
              $\\dot{q}_i$ to momenta $p_i = \\partial L/\\partial \\dot{q}_i$:
              $$H(q_i, p_i, t) = \\sum_i p_i \\dot{q}_i - L$$
            </p>
            <p>
              For systems where the kinetic energy is a quadratic function of velocities
              and the potential does not depend on velocities, $H = T + V$ (total energy).
            </p>
            <h2>Hamilton's Equations</h2>
            <p>
              $$\\dot{q}_i = \\frac{\\partial H}{\\partial p_i}, \\qquad \\dot{p}_i = -\\frac{\\partial H}{\\partial q_i}$$
              These are $2f$ first-order ODEs — twice as many equations, but each first-order.
              The state of the system is a point in <strong>phase space</strong> $(q_i, p_i)$.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "For a simple harmonic oscillator $H = \\dfrac{p^2}{2m} + \\dfrac{1}{2}kx^2$, Hamilton's first equation $\\dot{x} = \\partial H/\\partial p$ gives:",
          options: [
            "$\\dot{x} = p/m$",
            "$\\dot{x} = -kx$",
            "$\\dot{x} = kx/m$",
            "$\\dot{x} = p^2/2m$",
          ],
          correct: [0],
          explanation: "$\\partial H/\\partial p = p/m$, which is just $v = p/m$ — Newton's definition of momentum.",
        },
        {
          type: "mcq",
          question: "For the same SHO, Hamilton's second equation $\\dot{p} = -\\partial H/\\partial x$ gives:",
          options: [
            "$\\dot{p} = kx$",
            "$\\dot{p} = -kx$",
            "$\\dot{p} = p/m$",
            "$\\dot{p} = -p/m$",
          ],
          correct: [1],
          explanation: "$-\\partial H/\\partial x = -kx$, which is Hooke's law: force $= -kx$.",
        },
        {
          type: "text",
          data: `
            <h2>Phase Space & Liouville's Theorem</h2>
            <p>
              Phase space is the $2f$-dimensional space of coordinates $(q_1,\\ldots,q_f,p_1,\\ldots,p_f)$.
              Each state of the system is a point; its trajectory is a curve called a <strong>phase-space orbit</strong>.
            </p>
            <p>
              <strong>Liouville's theorem:</strong> the phase-space volume occupied by an ensemble
              of systems is conserved under Hamiltonian flow:
              $$\\frac{d}{dt}\\int_\\Omega dq\\,dp = 0$$
              This has profound implications: Hamiltonian flows are <em>incompressible</em>.
            </p>
            <h2>Poisson Brackets</h2>
            <p>
              For any two observables $f,g$:
              $$\\{f,g\\} = \\sum_i \\left(\\frac{\\partial f}{\\partial q_i}\\frac{\\partial g}{\\partial p_i} - \\frac{\\partial f}{\\partial p_i}\\frac{\\partial g}{\\partial q_i}\\right)$$
              Hamilton's equations in bracket form: $\\dot{f} = \\{f, H\\}$.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "The Poisson bracket $\\{q_i, p_j\\}$ evaluates to:",
          options: ["0","1 if $i=j$, 0 otherwise","$\\delta_{ij}$ (same as above, using Kronecker delta)","$-1$"],
          correct: [2],
          explanation: "$\\{q_i,p_j\\} = \\sum_k \\left(\\frac{\\partial q_i}{\\partial q_k}\\frac{\\partial p_j}{\\partial p_k} - \\ldots\\right) = \\delta_{ik}\\delta_{jk} = \\delta_{ij}$. This is the fundamental Poisson bracket relation.",
        },
        {
          type: "msq",
          question: "Which of the following are advantages of the Hamiltonian formulation over the Lagrangian?",
          options: [
            "First-order equations are easier to analyse qualitatively",
            "Phase space enables powerful geometrical methods",
            "The Hamiltonian always equals total energy",
            "It forms the natural bridge to quantum mechanics",
          ],
          correct: [0, 1, 3],
          explanation: "Option C is false: $H = T+V$ only when $T$ is quadratic in velocities and $V$ is velocity-independent. Options A, B, D are genuine advantages.",
        },
        {
          type: "numeric",
          question: "A particle with $H = \\dfrac{p^2}{2m} + mgx$ (uniform gravity, upward $x$). At $t=0$: $x=0$, $p = mv_0 = 10\\,\\text{kg·m/s}$ with $m=1\\,\\text{kg}$, $g=10\\,\\text{m/s}^2$. Using $\\dot{p} = -mg$, find $p$ (in kg·m/s) at $t = 1\\,\\text{s}$.",
          answer: "0 kg·m/s",
          tolerance: 0.02,
          hint: "$p(t) = p_0 - mgt = 10 - 1\\times10\\times1$",
          explanation: "$p(1) = 10 - 10 = 0\\,\\text{kg·m/s}$ — the particle momentarily stops at the apex.",
        },
        {
          type: "mcq",
          question: "Under Hamiltonian dynamics, which quantity is automatically conserved if $\\partial H/\\partial t = 0$?",
          options: [
            "Linear momentum",
            "Angular momentum",
            "The Hamiltonian itself (total energy)",
            "Phase-space volume element $dq\\,dp$",
          ],
          correct: [2],
          explanation: "$\\dot{H} = \\partial H/\\partial t$. If $H$ has no explicit time dependence, $\\dot{H}=0$ — energy is conserved. (Phase volume is always conserved by Liouville's theorem, regardless.)",
        },
      ],
    },
  ],
};
