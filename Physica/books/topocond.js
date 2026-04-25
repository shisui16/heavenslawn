/**
 * Topology & Condensed Matter — Complete Crash Course
 *
 * Based on NPTEL course by Prof. S. Basu (Weeks 1–8)
 * Coverage: Topology fundamentals • Berry phase • SSH & Kitaev models •
 *           Quantum Hall effect • Landau levels • Graphene & Dirac physics •
 *           Haldane model • Kane–Mele model • QSHE • FQHE • Laughlin states •
 *           Composite fermions • 3D Topological Insulators
 *
 * Content format reference:
 *   type: "text"     – theory block (HTML + KaTeX/LaTeX)
 *   type: "mcq"      – single correct answer
 *   type: "msq"      – multiple correct answers
 *   type: "numeric"  – number + unit answer
 *   type: "symbolic" – antiderivative validation via Nerdamer
 *
 * All math is written in $…$ (inline) or $$…$$ (display) KaTeX syntax.
 */

// ═══════════════════════════════════════════════════════════════════════════
// WEEK 1: Topology, Berry Phase, and Classification
// ═══════════════════════════════════════════════════════════════════════════

export const week1 = {
  title: "Week 1 – Topology, Berry Phase & Classification",

  content: [

    // ── Theory 1: Why Topology? ──────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Why Topology in Condensed Matter?</h2>
        <p>
          Traditionally, phases of matter are classified by <strong>symmetry breaking</strong>
          (Landau theory): ice breaks translational symmetry, a ferromagnet breaks rotational
          symmetry, and so on. Topology provides a completely different organisational principle.
        </p>
        <p>
          Two systems are in the <strong>same topological phase</strong> if one can be
          continuously deformed into the other <em>without closing the energy gap</em>.
          A <strong>topological invariant</strong> is a quantity that stays constant under
          such smooth deformations — it can only change when the gap closes (a phase transition).
        </p>
        <p>
          <strong>Key analogy:</strong> A coffee mug and a donut are topologically equivalent
          (both have one hole) but topologically distinct from a sphere. You cannot smoothly
          deform a sphere into a donut without tearing it. Similarly, a topological insulator
          cannot be adiabatically connected to a trivial insulator without closing the gap.
        </p>
        <h2>The Aharonov–Bohm Effect: Topology Enters Physics</h2>
        <p>
          Consider a long solenoid carrying current. Inside: uniform $\\mathbf{B}$.
          Outside: $\\mathbf{B} = 0$ but the vector potential $\\mathbf{A}$ is non-zero.
          Electrons sent around both sides of the solenoid acquire a phase difference:
          $$\\Delta\\phi = \\frac{e}{\\hbar}\\oint_C \\mathbf{A}\\cdot d\\mathbf{l}
          = \\frac{e}{\\hbar}\\int_S \\mathbf{B}\\cdot d\\mathbf{S}$$
        </p>
        <p>
          This measurable interference pattern arises even though $\\mathbf{B} = 0$ along
          the electron paths. The solenoid acts as a <em>topological singularity</em>:
          the curves in parameter space that enclose it are <strong>non-contractible</strong>.
          The resulting <strong>winding numbers</strong> are topological invariants that
          classify different homotopy classes. This is the first hint that topology governs
          quantum physics.
        </p>
      `,
    },

    // ── Theory 2: Topological Spaces & Euler Characteristic ─────────────
    {
      type: "text",
      data: `
        <h2>Basic Topology: Definitions</h2>
        <p>
          A <strong>topological space</strong> is a set $X$ with a collection $\\tau$ of
          subsets (open sets) satisfying: (i) $\\emptyset$ and $X$ belong to $\\tau$,
          (ii) arbitrary unions of members of $\\tau$ belong to $\\tau$, (iii) finite
          intersections of members of $\\tau$ belong to $\\tau$.
        </p>
        <p>
          A <strong>Hausdorff space</strong> is a topological space where any two distinct
          points can be separated by disjoint open sets.
          A <strong>surface</strong> is a 2D Hausdorff space where every point has a
          neighbourhood homeomorphic to $\\mathbb{R}^2$ — locally flat, but globally
          it can have holes.
        </p>
        <h2>The Gauss–Bonnet Theorem & Euler Characteristic</h2>
        <p>
          The <strong>Euler–Poincaré characteristic</strong> is:
          $$\\chi = V - E + F$$
          where $V$ = vertices, $E$ = edges, $F$ = faces in any triangulation.
          Remarkably, the Gauss–Bonnet theorem connects this combinatorial number to the
          geometry via curvature:
          $$\\int_M K\\,dA = 2\\pi\\chi$$
          where $K$ is the Gaussian curvature and the integral is over the closed surface $M$.
        </p>
        <p>
          <strong>Sphere $S^2$:</strong> $K = 1/R^2$ everywhere, so $\\int K\\,dA =
          (1/R^2)(4\\pi R^2) = 4\\pi = 2\\pi\\chi$ giving $\\chi_{\\text{sphere}} = 2$.
        </p>
        <p>
          <strong>Torus $T^2$:</strong> Positive curvature on the outer equator exactly
          cancels negative curvature on the inner side:
          $\\int_{T^2} K\\,dA = 0$, so $\\chi_{\\text{torus}} = 0$.
        </p>
        <p>
          This is why the Chern number (the topological invariant for the QHE) is always
          an integer — it is the condensed-matter analogue of the Euler characteristic,
          and the Berry curvature integrated over the Brillouin zone gives $2\\pi C$
          for integer $C$.
        </p>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "Which of the following pairs of surfaces are <strong>topologically equivalent</strong> (homeomorphic to each other)?",
      options: [
        "A sphere and a cube",
        "A torus (donut) and a sphere",
        "A torus and a coffee mug with one handle",
        "A sphere and a torus",
      ],
      correct: [2],
      explanation:
        "A coffee mug with one handle and a torus both have exactly one hole ($\\chi = 0$). A sphere has $\\chi = 2$ and cannot be continuously deformed into either — you would need to tear or puncture it to create the hole.",
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "The Euler characteristic of a double torus (a surface with two holes, like a figure-8 tube) is:",
      options: ["$\\chi = 2$", "$\\chi = 0$", "$\\chi = -2$", "$\\chi = 4$"],
      correct: [2],
      explanation:
        "For a surface of genus $g$ (i.e., $g$ holes), $\\chi = 2 - 2g$. A double torus has $g = 2$, so $\\chi = 2 - 4 = -2$. The sphere has $g=0$ ($\\chi=2$) and the torus has $g=1$ ($\\chi=0$).",
    },

    // ── Theory 3: Berry Phase ─────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Berry Phase</h2>
        <p>
          When a quantum system's Hamiltonian $H(\\boldsymbol{\\lambda})$ is <strong>slowly
          (adiabatically)</strong> varied through a closed loop in parameter space
          $\\boldsymbol{\\lambda}$, the eigenstate picks up a purely <em>geometric</em> phase
          called the <strong>Berry phase</strong> — it depends only on the path in parameter
          space, not on how fast you travel it.
        </p>
        <p>
          Define the <strong>Berry connection</strong> (analogous to a vector potential):
          $$\\mathcal{A}_n(\\boldsymbol{\\lambda}) = i\\langle n(\\boldsymbol{\\lambda})|\\nabla_{\\boldsymbol{\\lambda}}|n(\\boldsymbol{\\lambda})\\rangle$$
        </p>
        <p>
          The Berry phase accumulated around a closed loop $C$:
          $$\\gamma_n = \\oint_C \\mathcal{A}_n(\\boldsymbol{\\lambda})\\cdot d\\boldsymbol{\\lambda}
          = i\\oint_C \\langle n(\\boldsymbol{\\lambda})|\\nabla_{\\boldsymbol{\\lambda}}|n(\\boldsymbol{\\lambda})\\rangle\\cdot d\\boldsymbol{\\lambda}$$
        </p>
        <p>
          <strong>Derivation sketch:</strong> The total state under adiabatic evolution is
          $|\\Psi(t)\\rangle = e^{i\\alpha_n(t)}e^{i\\gamma_n(t)}|n(\\boldsymbol{\\lambda}(t))\\rangle$
          where $e^{i\\alpha_n}$ is the dynamical phase $\\alpha_n = -\\frac{1}{\\hbar}\\int_0^t E_n\\,dt'$.
          Substituting into the Schrödinger equation and projecting onto $\\langle n|$ gives
          $\\dot{\\gamma}_n = i\\langle n|\\frac{d}{dt}|n\\rangle$, which integrates to the
          Berry phase formula above.
        </p>
        <h2>Physical Example: Spin in a Rotating Magnetic Field</h2>
        <p>
          A spin-$\\frac{1}{2}$ in a magnetic field $\\mathbf{B}$ that traces a cone of
          polar angle $\\theta$ accumulates Berry phase:
          $$\\gamma = -\\frac{\\Omega}{2}$$
          where $\\Omega = 2\\pi(1-\\cos\\theta)$ is the solid angle swept by $\\mathbf{B}$.
          This explains the $4\\pi$ periodicity of spinors: a full $2\\pi$ rotation of $\\mathbf{B}$
          gives $\\gamma = -\\pi$, so $|\\psi\\rangle \\to -|\\psi\\rangle$. You need a $4\\pi$
          rotation to return to the original state.
        </p>
      `,
    },

    // ── MCQ 3 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "The Berry phase is called 'geometric' because:",
      options: [
        "It depends on the geometry of the physical sample",
        "It depends only on the path traced in parameter space, not on the speed of traversal",
        "It is proportional to the energy gap of the system",
        "It can be computed from the dynamical phase alone",
      ],
      correct: [1],
      explanation:
        "The key property of the Berry phase is that it is purely geometric: $\\gamma_n = i\\oint\\langle n|\\nabla_\\lambda|n\\rangle\\cdot d\\boldsymbol{\\lambda}$ depends only on the geometry of the closed loop $C$ in parameter space, not on how fast you traverse it. The dynamical phase $\\alpha_n = -\\frac{1}{\\hbar}\\int E_n\\,dt$ depends on time, but the Berry phase does not.",
    },

    // ── Theory 4: Time-Reversal Symmetry ────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Time-Reversal Symmetry (TRS)</h2>
        <p>
          The time-reversal operator $\\Theta$ implements $t \\to -t$, reversing momenta
          and angular momenta: $\\Theta: \\mathbf{p} \\to -\\mathbf{p}$, $\\mathbf{L} \\to -\\mathbf{L}$.
        </p>
        <p>
          <strong>Why is $\\Theta$ anti-unitary?</strong> Under $t \\to -t$, the Schrödinger
          equation gains a minus sign on the left side. For $\\Theta\\psi$ to also satisfy the
          Schrödinger equation, $\\Theta$ must conjugate $i \\to -i$. An operator that is
          anti-linear (conjugates $i$) and preserves probabilities is called
          <strong>anti-unitary</strong>. We write $\\Theta = UK$ where $U$ is unitary and
          $K$ is complex conjugation.
        </p>
        <p>
          <strong>Spinless particle:</strong> $\\Theta = K$, so $\\Theta^2 = +1$.
        </p>
        <p>
          <strong>Spin-$\\frac{1}{2}$ particle:</strong> $\\Theta = -i\\sigma_y K$. Computing:
          $\\Theta^2 = (-i\\sigma_y K)(-i\\sigma_y K) = (-i\\sigma_y)(+i\\sigma_y^*) = (-i\\sigma_y)(+i)(-\\sigma_y) = -\\sigma_y^2 = -I$.
          So $\\mathbf{\\Theta^2 = -1}$ for spin-$\\frac{1}{2}$.
        </p>
        <h2>Kramers Degeneracy</h2>
        <p>
          If $\\Theta^2 = -1$ and $[H,\\Theta] = 0$, then for any eigenstate $|n\\rangle$,
          $\\Theta|n\\rangle$ is a <em>different</em> eigenstate with the <em>same energy</em>
          (orthogonality: $\\langle n|\\Theta n\\rangle = 0$, provable using $\\Theta^2 = -1$).
          Therefore every energy level of a spin-$\\frac{1}{2}$ time-reversal-invariant system
          is <strong>at least doubly degenerate</strong>. This is <strong>Kramers degeneracy</strong>.
        </p>
        <p>
          Key consequence: Kramers degeneracy protects helical edge states in the quantum
          spin Hall insulator — no TRS-preserving perturbation can open a gap.
        </p>
      `,
    },

    // ── MCQ 4 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "For a spin-$\\frac{1}{2}$ particle in a time-reversal invariant system, the time-reversed state $\\Theta|n\\rangle$:",
      options: [
        "Is the same state as $|n\\rangle$",
        "Has the opposite energy $-E_n$",
        "Has the same energy $E_n$ but is orthogonal to $|n\\rangle$",
        "Violates the Schrödinger equation",
      ],
      correct: [2],
      explanation:
        "Since $[H,\\Theta]=0$, $\\Theta|n\\rangle$ has energy $E_n$. Since $\\Theta^2 = -1$, the inner product $\\langle n|\\Theta n\\rangle = \\langle \\Theta^2 n|\\Theta n\\rangle^* = -\\langle n|\\Theta n\\rangle$, forcing $\\langle n|\\Theta n\\rangle = 0$. So $|n\\rangle$ and $\\Theta|n\\rangle$ are distinct, degenerate states — Kramers degeneracy.",
    },

    // ── MSQ 1 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which statements about $\\Theta^2$ are correct? (Select all that apply)",
      options: [
        "For a spinless particle (integer spin), $\\Theta^2 = +1$",
        "For a spin-$\\frac{1}{2}$ particle (half-integer spin), $\\Theta^2 = -1$",
        "$\\Theta^2 = -1$ implies Kramers degeneracy for every energy level",
        "$\\Theta^2 = +1$ implies Kramers degeneracy for every energy level",
      ],
      correct: [0, 1, 2],
      explanation:
        "Statements A and B are the fundamental result: $\\Theta^2 = (-1)^{2s}$ where $s$ is the spin. Statement C follows because $\\Theta^2 = -1$ forces $|n\\rangle$ and $\\Theta|n\\rangle$ to be orthogonal and degenerate. Statement D is false — $\\Theta^2 = +1$ does not guarantee degeneracy; the time-reversed state may equal the original.",
    },

    // ── Theory 5: Ten-fold Classification ───────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Ten-fold Way: Classification of Topological Phases</h2>
        <p>
          All gapped free-fermion Hamiltonians are classified by three discrete symmetries:
        </p>
        <ul>
          <li><strong>TRS (Time-Reversal Symmetry):</strong> $\\Theta H(\\mathbf{k})\\Theta^{-1} = H(-\\mathbf{k})$, with $\\Theta^2 = +1$, $\\Theta^2 = -1$, or absent.</li>
          <li><strong>PHS (Particle-Hole Symmetry):</strong> $\\mathcal{C}H(\\mathbf{k})\\mathcal{C}^{-1} = -H(-\\mathbf{k})$, with $\\mathcal{C}^2 = +1$, $\\mathcal{C}^2 = -1$, or absent.</li>
          <li><strong>CS (Chiral/Sublattice Symmetry):</strong> $\\Gamma H(\\mathbf{k})\\Gamma^{-1} = -H(\\mathbf{k})$, where $\\Gamma = \\Theta\\mathcal{C}$.</li>
        </ul>
        <p>
          The ten combinations of these symmetries give rise to <strong>10 symmetry classes</strong>
          (the Altland–Zirnbauer classification). In each spatial dimension, each class has a
          topological invariant taking values in $\\mathbb{Z}$, $2\\mathbb{Z}$, $\\mathbb{Z}_2$, or $0$.
        </p>
        <p>
          <strong>Quick reference (relevant classes):</strong>
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%;">
          <tr><th>Model</th><th>Dim</th><th>Class</th><th>TRS</th><th>PHS</th><th>CS</th><th>Invariant</th></tr>
          <tr><td>SSH</td><td>1D</td><td>BDI</td><td>$+1$</td><td>$+1$</td><td>Yes</td><td>$\\mathbb{Z}$ (winding $w$)</td></tr>
          <tr><td>Kitaev chain</td><td>1D</td><td>D</td><td>0</td><td>$+1$</td><td>No</td><td>$\\mathbb{Z}_2$ (Pfaffian)</td></tr>
          <tr><td>QHE / Haldane</td><td>2D</td><td>A</td><td>0</td><td>0</td><td>No</td><td>$\\mathbb{Z}$ (Chern $C$)</td></tr>
          <tr><td>Kane–Mele (QSHI)</td><td>2D</td><td>AII</td><td>$-1$</td><td>0</td><td>No</td><td>$\\mathbb{Z}_2$ ($\\nu$)</td></tr>
          <tr><td>3D TI (BHZ)</td><td>3D</td><td>AII</td><td>$-1$</td><td>0</td><td>No</td><td>$\\mathbb{Z}_2^4$ ($\\nu_0;\\nu_1\\nu_2\\nu_3$)</td></tr>
        </table>
      `,
    },

    // ── MCQ 5 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "The SSH model belongs to symmetry class BDI. What does this mean?",
      options: [
        "It has TRS with $\\Theta^2 = -1$, and no PHS",
        "It has TRS with $\\Theta^2 = +1$, PHS with $\\mathcal{C}^2 = +1$, and chiral symmetry",
        "It has no symmetries at all",
        "It has only particle-hole symmetry with $\\mathcal{C}^2 = -1$",
      ],
      correct: [1],
      explanation:
        "Class BDI has: TRS with $\\Theta^2 = +1$ (spinless particles, $\\Theta = K$), PHS with $\\mathcal{C}^2 = +1$, and the resulting chiral (sublattice) symmetry $\\Gamma = \\Theta\\mathcal{C}$. In 1D, this class has a $\\mathbb{Z}$ topological invariant — the winding number $w$ can be any integer.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// WEEK 2: SSH Model and Kitaev Chain
// ═══════════════════════════════════════════════════════════════════════════

export const week2 = {
  title: "Week 2 – SSH Model & Kitaev Chain",

  content: [

    // ── Theory 1: SSH Real Space ─────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The SSH Model: Simplest 1D Topological Insulator</h2>
        <p>
          The <strong>Su–Schrieffer–Heeger (SSH) model</strong> describes a dimerized 1D
          chain with two alternating hopping amplitudes: $t_1$ (intracell, within a unit cell)
          and $t_2$ (intercell, between unit cells). Each unit cell has two sites, $A$ and $B$.
        </p>
        <p>
          <strong>Real-space Hamiltonian:</strong>
          $$H_{\\text{SSH}} = t_1\\sum_{j=1}^{N}\\left(c_{j,B}^\\dagger c_{j,A} + \\text{h.c.}\\right)
          + t_2\\sum_{j=1}^{N-1}\\left(c_{j+1,A}^\\dagger c_{j,B} + \\text{h.c.}\\right)$$
          where $c_{j,\\alpha}^\\dagger$ creates a fermion on site $\\alpha \\in \\{A,B\\}$ of unit cell $j$.
        </p>
        <h2>Bloch Hamiltonian (k-space)</h2>
        <p>
          Fourier transforming in the basis $(c_{k,A}, c_{k,B})^T$:
          $$H(k) = \\begin{pmatrix} 0 & h(k) \\\\ h^*(k) & 0 \\end{pmatrix},
          \\quad h(k) = t_1 + t_2 e^{-ik}$$
        </p>
        <p>
          The <strong>eigenvalues</strong> are:
          $$E_\\pm(k) = \\pm|h(k)| = \\pm\\sqrt{t_1^2 + t_2^2 + 2t_1 t_2 \\cos k}$$
        </p>
        <p>
          The energy gap $\\Delta = 2|t_1 - t_2|$ closes only when $t_1 = t_2$,
          which is the <strong>topological phase transition point</strong>.
          Writing $h(k) = d_x - id_y$ with $d_x = t_1 + t_2\\cos k$, $d_y = t_2\\sin k$,
          we can express $H(k) = d_x\\sigma_x + d_y\\sigma_y = \\mathbf{d}(k)\\cdot\\boldsymbol{\\sigma}$.
        </p>
      `,
    },

    // ── Theory 2: Winding Number ─────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Winding Number: Topological Invariant of the SSH Model</h2>
        <p>
          Since $d_z = 0$, the vector $\\mathbf{d}(k) = (d_x, d_y)$ lives in a 2D plane.
          As $k$ sweeps from $-\\pi$ to $\\pi$, the tip of $\\mathbf{d}(k)$ traces a closed
          curve. The <strong>winding number</strong> counts how many times this curve
          winds around the origin:
          $$w = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} \\partial_k\\varphi(k)\\,dk,
          \\quad \\varphi(k) = \\arg(d_x + id_y)$$
        </p>
        <p>
          <strong>Trivial phase ($t_1 > t_2$):</strong> The curve does not enclose the
          origin. $w = 0$. No protected edge states.
        </p>
        <p>
          <strong>Topological phase ($t_2 > t_1$):</strong> The curve encloses the origin
          once. $w = 1$. One zero-energy state at each end of an open chain.
        </p>
        <p>
          <strong>Extreme limits:</strong>
        </p>
        <ul>
          <li>$t_1 = 1, t_2 = 0$: $\\mathbf{d} = (1, 0)$ — a single point, never winds. $w = 0$.</li>
          <li>$t_1 = 0, t_2 = 1$: $d_x = \\cos k, d_y = \\sin k$ — traces the unit circle exactly once. $w = 1$.</li>
        </ul>
        <h2>Bulk-Boundary Correspondence</h2>
        <p>
          The number of protected zero-energy edge states equals the winding number $w$.
          This is the <strong>bulk-boundary correspondence</strong>: a bulk topological
          invariant guarantees boundary physics. For $w = 1$, there is exactly one zero-energy
          state localised at each end of the open chain — these are protected by chiral symmetry.
        </p>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "In the SSH model with $t_1 = 0.3$ and $t_2 = 1.2$, what is the winding number and what edge physics do you expect?",
      options: [
        "$w = 0$; no zero-energy edge states",
        "$w = 1$; one zero-energy state at each end",
        "$w = 2$; two zero-energy states at each end",
        "The gap closes; the winding number is not defined",
      ],
      correct: [1],
      explanation:
        "Since $t_2 = 1.2 > t_1 = 0.3$, the system is in the topological phase with $w = 1$. The gap is $\\Delta = 2|t_1 - t_2| = 2(0.9) = 1.8 \\neq 0$, so the gap is open and the winding number is well-defined. Bulk-boundary correspondence guarantees one zero-energy edge mode at each end.",
    },

    // ── MSQ 1 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which symmetries does the SSH model possess? (Select all that apply)",
      options: [
        "Time-reversal symmetry (TRS): $\\Theta H(k)\\Theta^{-1} = H(-k)$ with $\\Theta = K$, $\\Theta^2 = +1$",
        "Particle-hole symmetry (PHS): $\\mathcal{C}H(k)\\mathcal{C}^{-1} = -H(-k)$ with $\\mathcal{C} = \\sigma_z K$, $\\mathcal{C}^2 = +1$",
        "Chiral (sublattice) symmetry: $\\sigma_z H(k)\\sigma_z = -H(k)$",
        "Time-reversal symmetry with $\\Theta^2 = -1$ (spin-$\\frac{1}{2}$ TRS)",
      ],
      correct: [0, 1, 2],
      explanation:
        "The SSH model has all three symmetries A, B, C — placing it in class BDI. TRS: $K$ complex-conjugates $H(k)$ to give $H(-k)$ since $d_x$ is even and $d_y$ is odd in $k$. PHS: $\\sigma_z H^*(-k)\\sigma_z = -H(k)$ (using $\\sigma_z\\sigma_x\\sigma_z = -\\sigma_x$, $\\sigma_z\\sigma_y\\sigma_z = -\\sigma_y$). Chiral: $\\sigma_z H(k)\\sigma_z = -H(k)$ directly. D is wrong — SSH has spinless electrons, so $\\Theta^2 = +1$.",
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "What is the physical significance of chiral symmetry in the SSH model?",
      options: [
        "It ensures the spectrum is always gapped",
        "It forces the spectrum to be symmetric about $E = 0$, protecting the zero-energy edge modes from being shifted away",
        "It implies the system must have spin-orbit coupling",
        "It means the model can only exist in 2D",
      ],
      correct: [1],
      explanation:
        "Chiral symmetry $\\Gamma H\\Gamma^{-1} = -H$ means if $E$ is an eigenvalue, so is $-E$. The spectrum is symmetric about zero. The zero-energy edge states are pinned at $E = 0$ by this symmetry — a chiral-symmetric perturbation cannot shift them away from zero. Breaking chiral symmetry (e.g., by adding onsite energies) can move the edge states off zero but they remain in the gap.",
    },

    // ── Theory 3: Kitaev Chain ───────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Kitaev Chain: 1D Topological Superconductor</h2>
        <p>
          The Kitaev chain is a 1D model of a $p$-wave superconductor with chemical
          potential $\\mu$, hopping $t$, and pairing amplitude $\\Delta$:
          $$H_{\\text{Kitaev}} = -\\mu\\sum_j c_j^\\dagger c_j - t\\sum_j(c_{j+1}^\\dagger c_j + \\text{h.c.})
          + \\Delta\\sum_j(c_j c_{j+1} + \\text{h.c.})$$
        </p>
        <p>
          In the Nambu (Bogoliubov–de Gennes) basis $\\Psi_k = (c_k, c_{-k}^\\dagger)^T$:
          $$H_{\\text{BdG}}(k) = (-2t\\cos k - \\mu)\\tau_z + 2\\Delta\\sin k\\,\\tau_y$$
          where $\\tau_{x,y,z}$ are Pauli matrices in particle-hole space.
        </p>
        <p>
          <strong>Phase diagram:</strong>
        </p>
        <ul>
          <li><strong>Topological phase</strong> $|\\mu| < 2t$: Non-trivial $\\mathbb{Z}_2$ invariant.
              Majorana zero modes appear at the chain ends.</li>
          <li><strong>Trivial phase</strong> $|\\mu| > 2t$: No edge modes. The gap closes at
              $|\\mu| = 2t$.</li>
        </ul>
        <p>
          <strong>Extreme limits (physical intuition):</strong>
        </p>
        <ul>
          <li>$\\mu = 0, t = \\Delta$: Writing $c_j = (\\gamma_{j,A} + i\\gamma_{j,B})/2$ in terms
              of Majorana operators, the Hamiltonian pairs $\\gamma_{j,B}$ with $\\gamma_{j+1,A}$,
              leaving $\\gamma_{1,A}$ and $\\gamma_{N,B}$ as <strong>free, unpaired Majorana zero modes</strong>
              at the chain ends — topological!</li>
          <li>$t = \\Delta = 0, \\mu \\neq 0$: Majoranas pair within each site. No free end modes — trivial.</li>
        </ul>
      `,
    },

    // ── Theory 4: Majorana Fermions ──────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Majorana Fermions</h2>
        <p>
          A <strong>Majorana fermion</strong> is a particle that is its own antiparticle.
          The Majorana operator $\\gamma$ satisfies:
        </p>
        <ol>
          <li>$\\gamma = \\gamma^\\dagger$ (self-conjugate: particle = antiparticle)</li>
          <li>$\\{\\gamma_i, \\gamma_j\\} = 2\\delta_{ij}$ (Clifford algebra)</li>
          <li>$\\gamma^2 = 1$</li>
          <li>Any complex fermion $c$ splits as $c = (\\gamma_1 + i\\gamma_2)/2$ into two Majoranas.</li>
          <li>A single Majorana cannot exist alone in a finite system with definite fermion parity — it must come in pairs.</li>
          <li>Majorana zero modes encode <strong>non-Abelian anyons</strong>: exchanging two Majoranas applies a non-commuting unitary (braiding statistics).</li>
          <li>They are candidates for <strong>topological quantum computing</strong> because local perturbations cannot distinguish the degenerate ground states separated by macroscopic distance.</li>
        </ol>
        <p>
          <strong>Particle-hole symmetry of the BdG Hamiltonian:</strong>
          $\\mathcal{C}H_{\\text{BdG}}(k)\\mathcal{C}^{-1} = -H_{\\text{BdG}}(-k)$ with
          $\\mathcal{C} = \\tau_x K$. This guarantees that if $E_n(k)$ is an eigenvalue,
          so is $-E_n(-k)$, forcing the spectrum to be symmetric about zero. Zero-energy
          states are self-conjugate — they are Majorana modes.
        </p>
      `,
    },

    // ── MSQ 2 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which of the following are true about Majorana zero modes in the Kitaev chain? (Select all that apply)",
      options: [
        "They appear when $|\\mu| < 2t$ (topological phase)",
        "They are protected from splitting by particle-hole symmetry",
        "They are localised at the ends of the chain",
        "They appear when $|\\mu| > 2t$ (trivial phase)",
      ],
      correct: [0, 1, 2],
      explanation:
        "Majorana zero modes appear in the topological phase $|\\mu| < 2t$ (A), are localised at the chain ends (C), and are protected by particle-hole symmetry which pins them at exactly $E = 0$ (B). In the trivial phase $|\\mu| > 2t$ (D), all Majorana operators are paired within the same unit cell — no free end modes exist.",
    },

    // ── Numeric 1 ────────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "In the SSH model, the energy gap is $\\Delta = 2|t_1 - t_2|$. " +
        "If $t_1 = 0.5\\,\\text{eV}$ and $t_2 = 1.5\\,\\text{eV}$, what is the energy gap in eV?",
      answer: "2.0 eV",
      tolerance: 0.01,
      hint: "$\\Delta = 2|t_1 - t_2| = 2|0.5 - 1.5|$",
      explanation:
        "$\\Delta = 2|0.5 - 1.5| = 2 \\times 1.0 = 2.0\\,\\text{eV}$. The system is in the topological phase ($t_2 > t_1$) with winding number $w = 1$.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// WEEK 3: Classical Hall Effect & Landau Levels
// ═══════════════════════════════════════════════════════════════════════════

export const week3 = {
  title: "Week 3 – Classical Hall Effect & Landau Levels",

  content: [

    // ── Theory 1: Classical Hall Effect ─────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Classical Hall Effect</h2>
        <p>
          When current $I$ flows in the $x$-direction through a 2D sample in a perpendicular
          magnetic field $B_z$, the Lorentz force $\\mathbf{F} = -e(\\mathbf{v}\\times\\mathbf{B})$
          deflects electrons in the $y$-direction. In steady state, the resulting transverse
          electric field (Hall field) exactly balances the magnetic force:
          $$E_y = v_x B = \\frac{j_x}{ne}B$$
        </p>
        <p>
          The resistivity tensor relates fields to currents:
          $$\\begin{pmatrix} E_x \\\\ E_y \\end{pmatrix} =
          \\begin{pmatrix} \\rho_{xx} & \\rho_{xy} \\\\ \\rho_{yx} & \\rho_{yy} \\end{pmatrix}
          \\begin{pmatrix} j_x \\\\ j_y \\end{pmatrix}$$
          For an isotropic 2D gas: $\\rho_{xx} = \\rho_{yy}$ and $\\rho_{xy} = -\\rho_{yx} = B/(ne)$.
        </p>
        <p>
          The <strong>Hall coefficient</strong>:
          $$R_H = \\frac{E_y}{j_x B} = \\frac{1}{ne}$$
          The sign of $R_H$ reveals whether carriers are electrons ($R_H < 0$) or holes
          ($R_H > 0$). The conductivity tensor $\\sigma = \\rho^{-1}$:
          $$\\sigma = \\frac{1}{\\rho_{xx}^2 + \\rho_{xy}^2}
          \\begin{pmatrix} \\rho_{xx} & -\\rho_{xy} \\\\ \\rho_{xy} & \\rho_{xx}\\end{pmatrix}$$
        </p>
      `,
    },

    // ── Theory 2: Landau Levels ───────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Landau Levels: Quantum Mechanics in a Magnetic Field</h2>
        <p>
          Consider 2D electrons in a perpendicular field $B$ in <strong>Landau gauge</strong>:
          $\\mathbf{A} = (0, Bx, 0)$. The Hamiltonian:
          $$H = \\frac{p_x^2}{2m} + \\frac{(p_y - eBx)^2}{2m}$$
        </p>
        <p>
          Since $[H, p_y] = 0$, use $\\psi = e^{ik_y y}\\phi(x)$. Substituting with
          $x_0 = \\hbar k_y/(m\\omega_c)$ (the guiding centre), the Hamiltonian reduces to
          a <strong>harmonic oscillator shifted to $x_0$</strong>:
          $$H\\phi = \\left[\\frac{p_x^2}{2m} + \\frac{1}{2}m\\omega_c^2(x - x_0)^2\\right]\\phi = E\\phi$$
          where $\\omega_c = eB/m$ is the <strong>cyclotron frequency</strong>.
        </p>
        <p>
          The eigenvalues are the <strong>Landau levels</strong>:
          $$E_n = \\hbar\\omega_c\\left(n + \\frac{1}{2}\\right), \\quad n = 0, 1, 2, \\ldots$$
          The wavefunctions are Hermite-Gaussians centred at $x_0$, with spread set by
          the <strong>magnetic length</strong> $\\ell_B = \\sqrt{\\hbar/(eB)}$.
        </p>
        <h2>Landau Level Degeneracy</h2>
        <p>
          The guiding centre $x_0 = \\ell_B^2 k_y$ must lie within the sample $0 \\leq x_0 \\leq L_x$.
          The number of states per Landau level per unit area is:
          $$N_\\phi = \\frac{eB}{h} = \\frac{B}{\\Phi_0}$$
          where $\\Phi_0 = h/e$ is the <strong>magnetic flux quantum</strong>. Each Landau level
          has one state per flux quantum threading the sample — massive degeneracy!
        </p>
        <p>
          <strong>Filling fraction:</strong>
          $$\\nu = \\frac{n_s}{N_\\phi} = \\frac{n_s h}{eB}$$
          When $\\nu$ is an integer, all states up to the $\\nu$-th Landau level are filled
          ⟶ <strong>Integer Quantum Hall Effect</strong>.
        </p>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "In Landau gauge, why does the problem reduce to a harmonic oscillator?",
      options: [
        "Because $[H, p_x] = 0$, so $p_x$ is a good quantum number",
        "Because $[H, p_y] = 0$, so we can write $\\psi = e^{ik_y y}\\phi(x)$, turning the $x$-equation into an SHO shifted to $x_0 = \\hbar k_y/(m\\omega_c)$",
        "Because the magnetic field creates a parabolic potential in $y$",
        "Because the Landau gauge breaks translational symmetry in all directions",
      ],
      correct: [1],
      explanation:
        "In Landau gauge $\\mathbf{A}=(0,Bx,0)$, the Hamiltonian commutes with $p_y$ (translation in $y$), making $k_y$ a good quantum number. Substituting the plane-wave ansatz in $y$ transforms the $x$-part into $p_x^2/(2m) + \\frac{1}{2}m\\omega_c^2(x-x_0)^2$ — a shifted harmonic oscillator with $x_0 = \\hbar k_y/(m\\omega_c)$.",
    },

    // ── Numeric 1 ────────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "The magnetic length is $\\ell_B = \\sqrt{\\hbar/eB}$. At $B = 10\\,\\text{T}$, " +
        "what is $\\ell_B$ in nm? " +
        "Use $\\hbar = 1.055\\times10^{-34}\\,\\text{J·s}$, $e = 1.6\\times10^{-19}\\,\\text{C}$.",
      answer: "8.1 nm",
      tolerance: 0.2,
      hint: "$\\ell_B = \\sqrt{\\hbar/(eB)} \\approx 26/\\sqrt{B[\\text{T}]}\\,\\text{nm}$",
      explanation:
        "$\\ell_B = \\sqrt{(1.055\\times10^{-34})/(1.6\\times10^{-19}\\times10)} = \\sqrt{6.6\\times10^{-17}}\\approx 8.1\\times10^{-9}\\,\\text{m} = 8.1\\,\\text{nm}$.",
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "The filling fraction $\\nu = n_s h/(eB) = 3$. This means:",
      options: [
        "Three-quarters of the lowest Landau level is filled",
        "The lowest three Landau levels are completely filled, and the chemical potential lies in the gap above $n=2$",
        "The magnetic field is three times the flux quantum",
        "Only one Landau level is partially filled with 3 electrons",
      ],
      correct: [1],
      explanation:
        "The filling fraction $\\nu = n_s/N_\\phi$ counts how many Landau levels are completely filled. At $\\nu = 3$ (integer), the lowest three levels ($n = 0, 1, 2$) are completely filled and the chemical potential lies in the gap between the $n=2$ and $n=3$ Landau levels. This is the $\\nu = 3$ integer quantum Hall state.",
    },

    // ── Theory 3: Crossed Fields ──────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Landau Levels in Crossed Electric and Magnetic Fields</h2>
        <p>
          Adding an electric field $E$ in the $x$-direction to the perpendicular $B$:
          $$H = \\frac{p_x^2}{2m} + \\frac{(p_y - eBx)^2}{2m} + eEx$$
        </p>
        <p>
          Completing the square shifts the guiding centre $x_0 \\to x_0' = x_0 + eE/(m\\omega_c^2)$
          and adds a constant. The energy eigenvalues become:
          $$E_{n,k_y} = \\hbar\\omega_c\\left(n + \\frac{1}{2}\\right) + \\hbar k_y v_d - \\frac{mv_d^2}{2}$$
          where $v_d = E/B$ is the <strong>drift velocity</strong> of the $\\mathbf{E}\\times\\mathbf{B}$ drift.
        </p>
        <p>
          The $\\mathbf{E}\\times\\mathbf{B}$ drift is the classical result: in crossed fields,
          all particles (regardless of charge or mass) drift with velocity $v_d = E/B$
          perpendicular to both fields. This drift is the microscopic origin of the
          edge state dispersion in the quantum Hall effect.
        </p>
      `,
    },

    // ── MSQ 2 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which of the following correctly describe properties of Landau levels? (Select all that apply)",
      options: [
        "The energy spacing between adjacent levels is $\\hbar\\omega_c = \\hbar eB/m$",
        "Each Landau level has degeneracy $N_\\phi = eB/h$ per unit area",
        "The magnetic length $\\ell_B = \\sqrt{\\hbar/eB}$ sets the spatial extent of the wavefunctions",
        "Landau levels have infinite spacing at zero magnetic field",
      ],
      correct: [0, 1, 2],
      explanation:
        "A: The energy spectrum is $E_n = \\hbar\\omega_c(n+\\frac{1}{2})$ so spacing is $\\hbar\\omega_c$. B: Each level has $N_\\phi = eB/h$ states per unit area — one per flux quantum. C: The SHO wavefunctions have width $\\sim\\ell_B$. D is wrong: at $B=0$ there are no Landau levels (continuum free-electron spectrum), and $\\omega_c = eB/m \\to 0$.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// WEEK 4: Quantum Hall Topology and Graphene
// ═══════════════════════════════════════════════════════════════════════════

export const week4 = {
  title: "Week 4 – Quantum Hall Topology & Graphene",

  content: [

    // ── Theory 1: Incompressibility & TKNN ──────────────────────────────
    {
      type: "text",
      data: `
        <h2>Why is the QHE Quantized? Incompressibility</h2>
        <p>
          The compressibility $\\kappa = \\partial n/\\partial\\mu$ measures how density changes
          with chemical potential. At integer filling $\\nu$, $\\mu$ lies in a gap between
          Landau levels. Adding electrons requires jumping the gap — a finite energy cost.
          Therefore $\\partial n/\\partial\\mu = 0$: the system is <strong>incompressible</strong>.
        </p>
        <p>
          Since $\\mu$ can vary within the gap without changing $n$, and the Hall conductance
          $\\sigma_{xy} = \\nu e^2/h$ depends only on $\\nu$ (the number of filled levels,
          an integer), it is <strong>exactly quantized</strong> and robust against
          disorder and impurities.
        </p>
        <h2>Kubo Formula and the TKNN Result</h2>
        <p>
          Linear response theory gives the Hall conductivity in terms of occupied states:
          $$\\sigma_{xy} = -\\frac{e^2}{\\hbar}\\frac{1}{2\\pi}\\sum_{\\text{filled bands}}
          \\int_{\\text{BZ}}\\Omega_n(\\mathbf{k})\\,d^2k = -\\frac{e^2}{h}C$$
        </p>
        <p>
          where $C$ is the <strong>Chern number</strong>, which is always an integer.
          This is the <strong>TKNN formula</strong> (Thouless, Kohmoto, Nightingale, den Nijs, 1982).
        </p>
        <h2>Berry Curvature and Chern Number</h2>
        <p>
          From the Berry connection $\\mathcal{A}_n^\\mu = i\\langle u_n|\\partial_{k_\\mu}|u_n\\rangle$:
          $$\\Omega_n^{xy} = \\partial_{k_x}\\mathcal{A}_n^y - \\partial_{k_y}\\mathcal{A}_n^x$$
          $$C = \\frac{1}{2\\pi}\\int_{\\text{BZ}}\\Omega_n(\\mathbf{k})\\,d^2k \\in \\mathbb{Z}$$
        </p>
        <p>
          This is the condensed-matter analogue of Gauss–Bonnet: integrating a curvature
          over a compact surface (the torus-shaped BZ) gives $2\\pi$ times an integer.
          The Chern number is an integer because the Berry phase around any cycle of the
          BZ must be single-valued (up to gauge), and the transition function between
          gauge patches winds an integer number of times.
        </p>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "The Hall conductivity $\\sigma_{xy} = Ce^2/h$ is exactly quantized because:",
      options: [
        "The Chern number $C$ is always an integer, topologically protected from smooth changes",
        "The magnetic field is always quantized in units of $h/e$",
        "The Landau levels are exactly degenerate",
        "The electrons have exactly integer charge",
      ],
      correct: [0],
      explanation:
        "The Chern number $C = \\frac{1}{2\\pi}\\int_{\\text{BZ}}\\Omega_n\\,d^2k$ is always an integer — it is a topological invariant that cannot change under smooth deformations of the Hamiltonian (only when the gap closes). Since $\\sigma_{xy} = Ce^2/h$, the Hall conductivity is exactly quantized. This explains why the QHE plateaux are so precise — they are topological, not sensitive to impurities or material details.",
    },

    // ── Theory 2: Corbino Disk ───────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Corbino Disk: A Quantum Pump Argument for QHE Quantization</h2>
        <p>
          A <strong>Corbino disk</strong> is an annular conductor in a magnetic field
          (current flows radially). When one flux quantum $\\Phi_0 = h/e$ is threaded
          adiabatically through the hole, the crystal momentum shifts by $\\Delta k = 2\\pi/L$
          — exactly one state shifts across the Brillouin zone.
        </p>
        <p>
          Since each Landau level has a fixed number of states, exactly one electron per
          filled Landau level is transferred from the inner edge to the outer edge.
          For $\\nu$ filled levels, charge $Q = \\nu e$ is transferred per flux quantum:
          $$\\sigma_{xy} = \\frac{dQ/dt}{dV/dt} = \\frac{\\nu e}{\\Phi_0/\\Delta t}\\cdot\\frac{1}{\\Delta t}
          = \\nu\\frac{e^2}{h}$$
        </p>
        <p>
          The plateaus are quantized because $\\nu$ must be an integer (counting filled
          levels), and this argument holds as long as the Fermi energy is in a gap.
          This is a beautiful, non-perturbative argument for exact quantization.
        </p>
      `,
    },

    // ── Theory 3: Graphene ───────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Electronic Structure of Graphene</h2>
        <p>
          Graphene is a hexagonal lattice with two atoms per unit cell (sublattices $A$ and $B$).
          The nearest-neighbor tight-binding Hamiltonian:
          $$H(\\mathbf{k}) = \\begin{pmatrix}0 & f(\\mathbf{k}) \\\\ f^*(\\mathbf{k}) & 0\\end{pmatrix},
          \\quad f(\\mathbf{k}) = t\\sum_{j=1}^3 e^{i\\mathbf{k}\\cdot\\boldsymbol{\\delta}_j}$$
        </p>
        <p>
          <strong>Dirac points:</strong> $E = 0$ when $f(\\mathbf{k}) = 0$.
          The two inequivalent solutions are at the corners of the hexagonal Brillouin zone:
          $$K = \\frac{2\\pi}{3a}\\left(1, \\frac{1}{\\sqrt{3}}\\right), \\quad
          K' = \\frac{2\\pi}{3a}\\left(1, -\\frac{1}{\\sqrt{3}}\\right)$$
        </p>
        <p>
          <strong>Low-energy Dirac Hamiltonian:</strong> Expanding $\\mathbf{k} = K + \\mathbf{q}$
          with $|\\mathbf{q}| \\ll |K|$:
          $$H(K+\\mathbf{q}) \\approx \\hbar v_F(q_x\\sigma_x + q_y\\sigma_y), \\quad
          v_F = \\frac{3ta}{2\\hbar} \\approx 10^6\\,\\text{m/s}$$
        </p>
        <p>
          This is a <strong>massless 2D Dirac equation</strong> giving linear dispersion
          $E = \\pm\\hbar v_F|\\mathbf{q}|$. Graphene behaves as if electrons are relativistic
          particles with zero mass, travelling at $v_F \\approx c/300$.
        </p>
        <p>
          <strong>Why $C = 0$ in graphene:</strong> TRS maps $K \\leftrightarrow K'$,
          so the Berry curvatures at $K$ and $K'$ are equal and opposite:
          $C_K = +\\frac{1}{2}$, $C_{K'} = -\\frac{1}{2}$, giving $C_{\\text{total}} = 0$.
          Graphene is a semimetal, not a topological insulator.
        </p>
      `,
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "Why does graphene have a vanishing total Chern number ($C = 0$) despite having non-zero Berry curvature near the Dirac points?",
      options: [
        "Because graphene has no spin-orbit coupling",
        "Because time-reversal symmetry maps $K \\leftrightarrow K'$ and forces $\\Omega(K) = -\\Omega(K')$, so their contributions cancel",
        "Because graphene is 2D and Chern numbers only exist in 3D",
        "Because the hopping $t$ is too small",
      ],
      correct: [1],
      explanation:
        "TRS requires $\\Omega_n(\\mathbf{k}) = -\\Omega_n(-\\mathbf{k})$. Since $K' = -K$ (they are time-reversed partners), $\\Omega(K) = -\\Omega(K')$. Integrating over the BZ, contributions from the two Dirac cones exactly cancel: $C_K + C_{K'} = +\\frac{1}{2} - \\frac{1}{2} = 0$. To get $C \\neq 0$, one must break TRS (e.g., via the Haldane model).",
    },

    // ── MSQ 1 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which of the following are correct about the TKNN formula $\\sigma_{xy} = Ce^2/h$? (Select all that apply)",
      options: [
        "The Chern number $C$ is defined as $\\frac{1}{2\\pi}\\int_{\\text{BZ}}\\Omega_n\\,d^2k$ and is always an integer",
        "$C$ is analogous to the Euler characteristic in the Gauss–Bonnet theorem",
        "The Hall conductivity can take any real value depending on disorder",
        "The formula applies when the Fermi energy is in a bulk energy gap",
      ],
      correct: [0, 1, 3],
      explanation:
        "A: Correct definition; $C \\in \\mathbb{Z}$ by topology. B: The analogy $\\frac{1}{2\\pi}\\int\\Omega\\,d^2k \\leftrightarrow \\frac{1}{2\\pi}\\int K\\,dA = \\chi$ is precise — both count topological winding. C is wrong: quantization means $\\sigma_{xy}$ takes only values $ne^2/h$ for integer $n$, immune to disorder. D: The formula requires the Fermi energy to lie in a gap, so that all Landau levels below are fully filled.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// WEEK 5: Haldane Model and Anomalous QHE
// ═══════════════════════════════════════════════════════════════════════════

export const week5 = {
  title: "Week 5 – Haldane Model & Anomalous QHE",

  content: [

    // ── Theory 1: Making Graphene Topological ────────────────────────────
    {
      type: "text",
      data: `
        <h2>How to Make Graphene Topological</h2>
        <p>
          Pristine graphene has both TRS and inversion symmetry, giving $C = 0$. To get
          a non-zero Chern number, one must break one of these:
        </p>
        <ul>
          <li><strong>Break inversion</strong> (different onsite energies on $A$ and $B$):
              Opens a gap but $C = 0$ — trivial insulator.</li>
          <li><strong>Break TRS</strong> (complex second-neighbor hopping):
              Can open a gap with $C = \\pm 1$ — the <strong>anomalous quantum Hall effect</strong>
              without any external magnetic field. This is the <strong>Haldane model</strong>.</li>
        </ul>
        <h2>Haldane Model Hamiltonian</h2>
        <p>
          F.D.M. Haldane (1988) proposed adding complex second-neighbor hopping $t_2 e^{i\\phi}$:
          $$H_{\\text{Haldane}} = t_1\\sum_{\\langle ij\\rangle}c_i^\\dagger c_j + t_2\\sum_{\\langle\\langle ij\\rangle\\rangle}e^{i\\phi_{ij}}c_i^\\dagger c_j + M\\sum_i\\xi_i c_i^\\dagger c_i$$
          where $\\xi_i = +1$ on $A$ sites and $-1$ on $B$ sites, and $\\phi_{ij} = \\pm\\phi$.
        </p>
        <p>
          Near the Dirac points, the effective Hamiltonian has masses:
          $$m_\\pm = M \\pm 3\\sqrt{3}t_2\\sin\\phi$$
          The eigenvalues are $E = \\pm\\sqrt{(\\hbar v_F q)^2 + m^2}$ — a gapped Dirac spectrum.
        </p>
      `,
    },

    // ── Theory 2: Chern Number of Haldane Model ──────────────────────────
    {
      type: "text",
      data: `
        <h2>Chern Number of the Haldane Model</h2>
        <p>
          Near each Dirac point, the Berry curvature of the lower band integrates to
          $\\text{sgn}(m)/2$. The total Chern number:
          $$C = \\frac{1}{2}\\left[\\text{sgn}(m_K) - \\text{sgn}(m_{K'})\\right]$$
          (The minus sign arises because $K$ and $K'$ have opposite chirality.)
        </p>
        <p>
          <strong>Phase diagram:</strong>
        </p>
        <ul>
          <li>$m_K > 0, m_{K'} > 0$ (both masses same sign): $C = 0$ — trivial</li>
          <li>$m_K > 0, m_{K'} < 0$ (opposite signs): $C = 1$ — Chern insulator!</li>
          <li>$m_K < 0, m_{K'} > 0$: $C = -1$ — Chern insulator (opposite chirality)</li>
          <li>$m_K < 0, m_{K'} < 0$: $C = 0$ — trivial (but different from first case)</li>
        </ul>
        <p>
          The topological phase has $|C| = 1$ when $|M| < 3\\sqrt{3}|t_2\\sin\\phi|$,
          i.e., when the mass term from $M$ is smaller than the mass from $t_2$.
        </p>
        <p>
          <strong>What breaks TRS:</strong> The complex hopping $t_2 e^{i\\phi}$ breaks TRS
          because $\\phi \\neq 0$ means the Hamiltonian is not invariant under $k \\to -k$
          plus complex conjugation. This allows Berry curvatures at $K$ and $K'$ to be unequal,
          giving $C \\neq 0$ and $\\sigma_{xy} = Ce^2/h$ — the <strong>Anomalous Quantum
          Hall Effect (AQHE)</strong> without external $B$.
        </p>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "In the Haldane model with $M = 0$ and $\\phi = \\pi/2$, the masses at the two Dirac points are $m_K = 3\\sqrt{3}t_2$ and $m_{K'} = -3\\sqrt{3}t_2$. What is the Chern number?",
      options: ["$C = 0$", "$C = 1$", "$C = -1$", "$C = 2$"],
      correct: [1],
      explanation:
        "$C = \\frac{1}{2}[\\text{sgn}(m_K) - \\text{sgn}(m_{K'})] = \\frac{1}{2}[\\text{sgn}(3\\sqrt{3}t_2) - \\text{sgn}(-3\\sqrt{3}t_2)] = \\frac{1}{2}[1-(-1)] = 1$. The two Dirac cones have opposite mass signs, giving a topological Chern insulator with $C = 1$ and Hall conductivity $\\sigma_{xy} = e^2/h$.",
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "The Anomalous Quantum Hall Effect in the Haldane model is 'anomalous' because:",
      options: [
        "The Hall conductance is not quantized",
        "It occurs without an external magnetic field — topology alone produces quantized Hall transport",
        "It only occurs at very high temperatures",
        "It requires very strong disorder",
      ],
      correct: [1],
      explanation:
        "In the ordinary QHE, an external $B$ field creates Landau levels. In the Haldane model, the complex hopping $t_2 e^{i\\phi}$ breaks TRS and creates a non-zero Berry curvature $\\Omega(\\mathbf{k})$ whose integral gives $C = \\pm 1$, without any net magnetic flux through the unit cell. The AQHE gives $\\sigma_{xy} = Ce^2/h$ purely from band topology.",
    },

    // ── Theory 3: Rashba SOC ──────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Rashba Spin-Orbit Coupling</h2>
        <p>
          <strong>Rashba SOC</strong> arises at surfaces and interfaces that break
          structural inversion symmetry (the surface normal $\\hat{z}$ is a special direction).
          The Rashba Hamiltonian:
          $$H_R = \\alpha_R(\\boldsymbol{\\sigma}\\times\\mathbf{k})\\cdot\\hat{z}
          = \\alpha_R(\\sigma_x k_y - \\sigma_y k_x)$$
        </p>
        <p>
          For a parabolic band plus Rashba:
          $$H = \\frac{\\hbar^2 k^2}{2m}I + \\alpha_R(\\sigma_x k_y - \\sigma_y k_x)$$
          In polar coordinates $k_x = k\\cos\\varphi$, $k_y = k\\sin\\varphi$:
          $$E_\\pm = \\frac{\\hbar^2 k^2}{2m} \\pm \\alpha_R k$$
        </p>
        <p>
          The two bands are shifted parabolas: $E_\\pm = \\frac{\\hbar^2}{2m}(k \\pm k_0)^2 - \\frac{m\\alpha_R^2}{2\\hbar^2}$
          where $k_0 = m\\alpha_R/\\hbar^2$. This creates two concentric circles of
          constant energy with <strong>opposite spin helicity</strong> — the spin winds
          around the Fermi circle. This spin-momentum locking is the precursor to
          the topological surface states in 3D TIs.
        </p>
      `,
    },

    // ── MSQ 1 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which statements correctly describe the Haldane model? (Select all that apply)",
      options: [
        "It breaks time-reversal symmetry via complex second-neighbor hopping $t_2 e^{i\\phi}$",
        "It can realize a Chern insulator with $C = \\pm 1$ and $\\sigma_{xy} = \\pm e^2/h$",
        "It requires an external magnetic field to produce the Hall effect",
        "The phase boundary is at $|M| = 3\\sqrt{3}|t_2 \\sin\\phi|$",
      ],
      correct: [0, 1, 3],
      explanation:
        "A: The complex hopping breaks TRS (since $\\phi \\neq 0$ makes $H(k) \\neq H^*(-k)$). B: The Chern number can be $\\pm 1$ in the topological phase. C is wrong — the AQHE has no external $B$; it is precisely 'anomalous' because it occurs without a magnetic field. D: The phase boundary occurs when $m_K$ or $m_{K'}$ changes sign, i.e., when $|M| = 3\\sqrt{3}|t_2\\sin\\phi|$.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// WEEK 6: Quantum Spin Hall Effect — Kane–Mele and BHZ Models
// ═══════════════════════════════════════════════════════════════════════════

export const week6 = {
  title: "Week 6 – Quantum Spin Hall Effect: Kane–Mele & BHZ",

  content: [

    // ── Theory 1: BHZ Model ──────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The BHZ Model: First Quantum Spin Hall Insulator</h2>
        <p>
          The <strong>Bernevig–Hughes–Zhang (BHZ) model</strong> describes a HgTe/CdTe
          quantum well. It is a $4\\times4$ Hamiltonian (two spin sectors):
          $$H_{\\text{BHZ}}(\\mathbf{k}) = \\begin{pmatrix}h(\\mathbf{k}) & 0 \\\\ 0 & h^*(-\\mathbf{k})\\end{pmatrix}$$
          with $h(\\mathbf{k}) = \\mathbf{d}(\\mathbf{k})\\cdot\\boldsymbol{\\sigma}$ and:
          $$\\mathbf{d} = (Ak_x,\\, -Ak_y,\\, M - B(k_x^2+k_y^2))$$
        </p>
        <p>
          The parameter $M/B$ controls the topology:
        </p>
        <ul>
          <li><strong>$M/B > 0$ (normal ordering):</strong> Trivial insulator, like CdTe with $d < d_c$.</li>
          <li><strong>$M/B < 0$ (inverted ordering):</strong> Topological quantum spin Hall insulator, like HgTe with $d > d_c$.</li>
        </ul>
        <p>
          <strong>Critical thickness:</strong> $d_c \\approx 6.3\\,\\text{nm}$.
          At $d = d_c$, the bulk gap closes ($M = 0$) — the topological phase transition.
          For $d > d_c$, helical edge states appear: spin-$\\uparrow$ propagates right and
          spin-$\\downarrow$ propagates left on one edge (and vice versa on the opposite edge).
        </p>
        <p>
          <strong>Experimental confirmation:</strong> König et al. (Science, 2007) measured
          $G = 2e^2/h$ in the bulk gap for $d > d_c$ — two helical channels each carrying
          $e^2/h$. This was the first experimental QSHI.
        </p>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "In the HgTe/CdTe quantum well, the quantum spin Hall phase occurs because:",
      options: [
        "The magnetic field spontaneously aligns spins",
        "Strong spin-orbit coupling in HgTe inverts the $\\Gamma_6$ (s-like) and $\\Gamma_8$ (p-like) bands, giving $M < 0$ in the BHZ model",
        "The well width creates a simple harmonic potential",
        "TRS is broken by the interface",
      ],
      correct: [1],
      explanation:
        "In CdTe, the s-like $\\Gamma_6$ band lies above the p-like $\\Gamma_8$ band (normal order, $M > 0$, trivial). In HgTe, the large relativistic spin-orbit coupling pulls $\\Gamma_8$ below $\\Gamma_6$ (inverted, $M < 0$, topological). At the critical thickness $d_c \\approx 6.3$ nm, the well interpolates between these orderings, and the gap closes at $M = 0$. TRS is preserved throughout.",
    },

    // ── Theory 2: Kane-Mele Model ─────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Kane–Mele Model: TRS-Invariant Topological Insulator in 2D</h2>
        <p>
          The <strong>Kane–Mele model</strong> is two copies of the Haldane model —
          one for spin-$\\uparrow$, one for spin-$\\downarrow$ — with TRS-preserving
          spin-orbit coupling. The full Hamiltonian includes:
        </p>
        <ol>
          <li><strong>Nearest-neighbor hopping:</strong> $t\\sum\\langle ij\\rangle c_i^\\dagger c_j$</li>
          <li><strong>Intrinsic SOC (second-neighbor):</strong> $i\\lambda_{\\text{SO}}\\sum_{\\langle\\langle ij\\rangle\\rangle}\\nu_{ij}c_i^\\dagger\\sigma_z c_j$
              (opposite sign for opposite spins — restores TRS)</li>
          <li><strong>Rashba SOC:</strong> $i\\lambda_R\\sum_{\\langle ij\\rangle}c_i^\\dagger(\\boldsymbol{\\sigma}\\times\\hat{d}_{ij})_z c_j$</li>
        </ol>
        <p>
          The spin-$\\uparrow$ sector has $H_{\\uparrow} = H_{\\text{Haldane}}(\\phi)$ and
          spin-$\\downarrow$ has $H_{\\downarrow} = H_{\\text{Haldane}}(-\\phi)$.
          Since $H_\\downarrow = H_\\uparrow^*$ (complex conjugate), TRS is restored:
          $\\Theta H_{\\text{KM}}\\Theta^{-1} = H_{\\text{KM}}$.
        </p>
        <p>
          The topological invariant is the <strong>$\\mathbb{Z}_2$ invariant</strong> $\\nu = 0, 1$:
          $$(-1)^\\nu = \\prod_{i=1}^4 \\frac{\\text{Pf}[w(\\Gamma_i)]}{\\sqrt{\\det[w(\\Gamma_i)]}}$$
          where $w_{mn}(\\mathbf{k}) = \\langle u_m(-\\mathbf{k})|\\Theta|u_n(\\mathbf{k})\\rangle$
          and $\\Gamma_i$ are the four TRS-invariant momenta.
        </p>
      `,
    },

    // ── Theory 3: Chern vs QSHI ───────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Chern Insulator vs. Quantum Spin Hall Insulator: Key Differences</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%;">
          <tr>
            <th>Property</th>
            <th>Chern Insulator (Haldane)</th>
            <th>QSHI (Kane–Mele)</th>
          </tr>
          <tr><td>TRS</td><td>Broken ($\\phi \\neq 0$)</td><td>Preserved ($\\Theta^2 = -1$)</td></tr>
          <tr><td>Invariant</td><td>$C \\in \\mathbb{Z}$</td><td>$\\nu \\in \\mathbb{Z}_2$ ($0$ or $1$)</td></tr>
          <tr><td>Edge states</td><td>Chiral (one direction only)</td><td>Helical (counterpropagating, spin-locked)</td></tr>
          <tr><td>Hall conductivity</td><td>$\\sigma_{xy} = Ce^2/h$</td><td>$\\sigma_{xy} = 0$; spin Hall $\\sigma_{\\text{sH}} = e/(4\\pi)$</td></tr>
          <tr><td>Class</td><td>A (no symmetry)</td><td>AII (TRS with $\\Theta^2=-1$)</td></tr>
          <tr><td>Backscattering</td><td>Forbidden by chirality</td><td>Forbidden by TRS (Kramers theorem)</td></tr>
        </table>
        <p>
          <strong>Helical edge state protection:</strong> In the QSHI, any TRS-preserving
          backscattering would require $|k,\\uparrow\\rangle \\to |-k,\\downarrow\\rangle$.
          But these are Kramers partners, and matrix elements of TRS-invariant operators
          between Kramers partners vanish exactly. Therefore backscattering is zero for
          non-magnetic impurities. Magnetic impurities (breaking TRS) can scatter.
        </p>
      `,
    },

    // ── MSQ 1 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which of the following correctly distinguish the Quantum Spin Hall Insulator from the Integer Quantum Hall state? (Select all that apply)",
      options: [
        "The QSHI preserves time-reversal symmetry; the IQHE breaks it",
        "The QSHI has a $\\mathbb{Z}_2$ invariant; the IQHE has a $\\mathbb{Z}$ (Chern number) invariant",
        "The QSHI has helical edge states; the IQHE has chiral edge states",
        "Both require an external magnetic field",
      ],
      correct: [0, 1, 2],
      explanation:
        "A: IQHE is driven by an external $B$ field (breaks TRS); QSHI is driven by spin-orbit coupling (TRS preserved). B: QSHI is classified by $\\mathbb{Z}_2$ (either trivial or non-trivial), while IQHE is classified by an integer Chern number $C$. C: IQHE has chiral (one-way) edge modes; QSHI has helical (counter-propagating, spin-locked) edge modes protected by Kramers theorem. D is wrong — QSHI requires no external field.",
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "The experimentally measured conductance of a QSHI (HgTe) in the bulk gap is $G = 2e^2/h$. Why is it $2e^2/h$ rather than $e^2/h$?",
      options: [
        "Because the charge of each electron is twice the elementary charge",
        "Because there are two helical edge channels (one at each edge), each carrying $e^2/h$",
        "Because the Chern number is $C = 2$",
        "Because the magnetic field doubles the conductance",
      ],
      correct: [1],
      explanation:
        "Each edge of the QSHI sample hosts one helical channel: spin-$\\uparrow$ right-movers and spin-$\\downarrow$ left-movers (and the reverse on the opposite edge). There are two edges in the transport geometry, each contributing $e^2/h$ via the Landauer formula. Since both edges carry current in the same direction, the total is $G = 2e^2/h$. Contrast with IQHE at $\\nu = 1$: also $G = e^2/h$ per edge channel.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// WEEK 7: Fractional Quantum Hall Effect and Laughlin States
// ═══════════════════════════════════════════════════════════════════════════

export const week7 = {
  title: "Week 7 – FQHE & Laughlin States",

  content: [

    // ── Theory 1: Why FQHE needs Laughlin ────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Fractional Quantum Hall Effect: Beyond Single Particles</h2>
        <p>
          At very low temperatures and high magnetic fields, the Hall conductivity is
          quantized at <em>fractional</em> values: $\\sigma_{xy} = \\frac{1}{3}\\frac{e^2}{h}$,
          $\\frac{2}{5}\\frac{e^2}{h}$, etc. This cannot be explained by single-particle
          physics — Landau level filling fractions are integers in single-particle theory.
          The gap in FQHE is entirely generated by <strong>electron-electron interactions</strong>.
        </p>
        <p>
          Laughlin (1983) proposed a variational many-body wavefunction that:
          (a) lies entirely in the lowest Landau level (LLL),
          (b) keeps electrons apart to minimize Coulomb repulsion, and
          (c) correctly reproduces $\\nu = 1/q$ for odd integer $q$.
        </p>
        <h2>Symmetric Gauge and Angular Momentum</h2>
        <p>
          In symmetric gauge $\\mathbf{A} = \\frac{B}{2}(-y, x, 0)$, the Hamiltonian
          commutes with $L_z$, so states are labelled by angular momentum $m$.
          The LLL wavefunctions ($n = 0$):
          $$\\psi_{0,m}(z,\\bar{z}) = \\frac{1}{\\sqrt{2\\pi 2^m m!}\\ell_B}z^m e^{-|z|^2/4\\ell_B^2}$$
          where $z = x + iy$. The probability density peaks at radius:
          $$\\langle r^2\\rangle = 2(m+1)\\ell_B^2 \\implies r_m \\approx \\ell_B\\sqrt{2m}$$
          Landau levels form concentric rings: the $m$-th state is concentrated on a ring of radius $r_m$,
          evenly spaced in $r^2$.
        </p>
      `,
    },

    // ── Theory 2: Laughlin Wavefunction ──────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Laughlin Wavefunction</h2>
        <p>
          For $N$ electrons at filling $\\nu = 1/q$ ($q$ odd integer):
          $$\\Psi_{\\text{Laughlin}}(z_1,\\ldots,z_N) = \\mathcal{N}\\prod_{i<j}(z_i - z_j)^q
          \\exp\\left(-\\frac{1}{4\\ell_B^2}\\sum_i|z_i|^2\\right)$$
        </p>
        <p>
          <strong>Explanation of each term:</strong>
        </p>
        <ul>
          <li>$\\prod_{i<j}(z_i - z_j)^q$: the <strong>Jastrow factor</strong>. It vanishes when
              any $z_i = z_j$, keeping electrons far apart and reducing Coulomb repulsion energy.
              For $q \\geq 3$, electrons repel each other as $(z_i - z_j)^q$ .</li>
          <li>$q$ must be <strong>odd</strong> so $\\Psi$ is antisymmetric under $z_i \\leftrightarrow z_j$:
              $(z_j - z_i)^q = (-1)^q(z_i - z_j)^q = -(z_i - z_j)^q$ for odd $q$. ✓</li>
          <li>$\\exp(-\\sum|z_i|^2/4\\ell_B^2)$: Gaussian factor confining electrons to the LLL.</li>
        </ul>
        <h2>Filling Fraction from the Laughlin State</h2>
        <p>
          The maximum power of $z_1$ in the Jastrow factor is $q(N-1)$ (from
          $\\prod_{j>1}(z_1 - z_j)^q$). This is the maximum angular momentum, so
          $m_{\\text{max}} = q(N-1)$. The area occupied $A \\approx 2\\pi\\ell_B^2 q(N-1)$.
          Number of flux quanta: $N_\\phi = A/(2\\pi\\ell_B^2) = q(N-1) \\approx qN$ for large $N$.
          Filling fraction: $\\boxed{\\nu = N/N_\\phi = 1/q}$.
        </p>
        <h2>Plasma Analogy</h2>
        <p>
          Writing $|\\Psi|^2 = e^{-\\beta U_{\\text{cl}}}$ with $\\beta = 2/q$:
          $$U_{\\text{cl}} = -q^2\\sum_{i<j}\\ln|z_i - z_j| + \\frac{q}{4\\ell_B^2}\\sum_i|z_i|^2$$
          This is the classical energy of a <strong>2D one-component plasma</strong>:
          logarithmic repulsion between charges $q$ in a uniform neutralizing background.
          A stable plasma screens the background to give uniform density, guaranteeing that
          the Laughlin state has $\\langle\\rho\\rangle = \\text{const} = 1/(2\\pi\\ell_B^2 q)$,
          confirming $\\nu = 1/q$ non-perturbatively.
        </p>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "Why must the exponent $q$ in the Laughlin wavefunction $\\prod_{i<j}(z_i - z_j)^q$ be odd?",
      options: [
        "To make the wavefunction real",
        "To ensure the wavefunction vanishes when two electrons are at the same point",
        "To ensure antisymmetry under electron exchange: $(z_j - z_i)^q = -(z_i - z_j)^q$ only for odd $q$",
        "To give the correct Landau level index",
      ],
      correct: [2],
      explanation:
        "The Pauli exclusion principle requires the many-body wavefunction to be antisymmetric: $\\Psi(\\ldots, z_i, \\ldots, z_j, \\ldots) = -\\Psi(\\ldots, z_j, \\ldots, z_i, \\ldots)$. Under $z_i \\leftrightarrow z_j$, the factor $(z_i - z_j)^q \\to (z_j - z_i)^q = (-1)^q(z_i - z_j)^q$. For antisymmetry, we need $(-1)^q = -1$, so $q$ must be odd. Note: the wavefunction also vanishes when $z_i = z_j$ (for any $q \\geq 1$), so that's not what distinguishes odd $q$.",
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "The $\\nu = 1/3$ Laughlin state has $q = 3$. What is the charge of a Laughlin quasihole?",
      options: [
        "$e$ (one full electron charge)",
        "$e/3$ (fractional charge)",
        "$3e$ (three electron charges)",
        "$e/2$ (half charge)",
      ],
      correct: [1],
      explanation:
        "The Laughlin quasihole at $z_0$ is created by inserting a flux quantum at $z_0$: $\\Psi_{\\text{qh}} = \\prod_i(z_i - z_0)\\cdot\\Psi_{\\text{Laughlin}}$. The quasihole carries fractional charge $e^* = e/q = e/3$. This has been directly confirmed by shot-noise experiments (de-Picciotto et al., 1997).",
    },

    // ── MSQ 1 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which of the following correctly describe properties of the FQHE and Laughlin state? (Select all that apply)",
      options: [
        "The gap in FQHE arises from electron-electron interactions, not single-particle physics",
        "The Laughlin state at $\\nu = 1/q$ is the ground state for $q = 1, 2, 3, \\ldots$ (both even and odd)",
        "The plasma analogy shows the Laughlin state has uniform electron density",
        "Quasiparticles in the FQHE obey fractional statistics (anyonic), not Fermi or Bose statistics",
      ],
      correct: [0, 2, 3],
      explanation:
        "A: Correct — Landau level physics gives only integer $\\nu$; FQHE gaps come from interactions. B is wrong — $q$ must be odd for fermionic antisymmetry; $q = 2$ would give a bosonic state. C: The plasma analogy guarantees uniform density via plasma screening. D: Quasiparticles carry fractional charge $e/q$ and obey anyonic statistics — exchanging two gives phase $e^{i\\pi/q}$, neither $+1$ (bosons) nor $-1$ (fermions).",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// WEEK 8: Composite Fermions and 3D Topological Insulators
// ═══════════════════════════════════════════════════════════════════════════

export const week8 = {
  title: "Week 8 – Composite Fermions & 3D Topological Insulators",

  content: [

    // ── Theory 1: Composite Fermions ─────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Composite Fermions: Explaining the FQHE Hierarchy</h2>
        <p>
          A <strong>composite fermion (CF)</strong> is an electron bound to $2p$ flux quanta
          (vortices). This transformation — attaching flux to electrons — is a mean-field
          construction. Key idea: the attached flux partially cancels the external field,
          so CFs see a <em>reduced effective field</em>:
          $$B^* = B - 2p\\frac{n_s h}{e} = B - 2p\\Phi_0 n_s$$
        </p>
        <p>
          <strong>At $\\nu = 1/(2p)$:</strong> $B^* = 0$ — composite fermions form a
          compressible Fermi liquid (no Hall plateaux). Around $\\nu = 1/2$: CFs see
          a small residual field $B^*$ and form their own Landau levels.
        </p>
        <p>
          <strong>CF filling to electron filling:</strong> CFs at integer filling $\\nu^*$
          correspond to electrons at:
          $$\\nu = \\frac{\\nu^*}{2p\\nu^* \\pm 1}$$
          This explains the <strong>principal FQHE sequence</strong> $\\nu = n/(2pn \\pm 1)$.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>CF filling $\\nu^*$</th><th>Electron filling $\\nu$ (p=1)</th></tr>
          <tr><td>1</td><td>1/3</td></tr>
          <tr><td>2</td><td>2/5</td></tr>
          <tr><td>3</td><td>3/7</td></tr>
          <tr><td>4</td><td>4/9</td></tr>
          <tr><td>$-1$</td><td>1 (IQHE)</td></tr>
        </table>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "Using composite fermion theory with $2p = 2$ attached flux quanta, what electron filling fraction corresponds to CF filling $\\nu^* = 2$?",
      options: ["$\\nu = 2/3$", "$\\nu = 2/5$", "$\\nu = 1/3$", "$\\nu = 1/2$"],
      correct: [1],
      explanation:
        "$\\nu = \\nu^*/(2p\\nu^* + 1) = 2/(2\\times1\\times2 + 1) = 2/5$ (taking the $+$ sign). This is the $\\nu = 2/5$ FQHE state, where composite fermions ($p=1$, 2 attached flux quanta) fill their second Landau level.",
    },

    // ── Theory 2: Hierarchy Picture ──────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>FQHE Hierarchy</h2>
        <p>
          The <strong>Haldane–Halperin hierarchy</strong>: quasiparticles of the $\\nu = 1/m$
          parent state themselves condense into a daughter FQHE state. The filling fractions
          are generated by a continued fraction:
          $$\\nu = \\cfrac{1}{m + \\cfrac{1}{p_1 + \\cfrac{1}{p_2 + \\cdots}}}$$
        </p>
        <p>
          For $m = 3$ (parent $\\nu = 1/3$):
        </p>
        <ul>
          <li>Level 0: $\\nu = 1/3$</li>
          <li>Level 1: $\\nu = 2/5$ (upper) or $\\nu = 2/7$ (lower)</li>
          <li>Level 2: $\\nu = 3/7, 3/11, \\ldots$</li>
        </ul>
        <p>
          The CF theory elegantly unifies the hierarchy: all fractions $n/(2pn \\pm 1)$
          arise from CFs filling their own integer Landau levels. The time-reversed
          partners $1 - \\nu$ (e.g., 2/3, 3/5, 4/7) come from particle-hole symmetry
          within the lowest Landau level.
        </p>
      `,
    },

    // ── Theory 3: 3D Topological Insulators ──────────────────────────────
    {
      type: "text",
      data: `
        <h2>3D Topological Insulators</h2>
        <p>
          A <strong>3D topological insulator</strong> has a bulk energy gap like an
          ordinary insulator, but topologically protected <strong>surface states on
          every surface</strong>. These form a single species of massless Dirac fermion —
          a 2D Dirac cone — that cannot exist in a purely 2D system without breaking TRS
          (Nielsen–Ninomiya theorem). One Dirac cone on the surface is only possible
          because the bulk is topologically non-trivial.
        </p>
        <p>
          <strong>Surface Hamiltonian</strong> (normal in $\\hat{z}$):
          $$H_{\\text{surf}} = \\hbar v_F(\\sigma_x k_y - \\sigma_y k_x) = \\hbar v_F\\boldsymbol{\\sigma}\\times\\mathbf{k}\\cdot\\hat{z}$$
          Eigenvalues: $E = \\pm\\hbar v_F k$. The spin is perpendicular to $\\mathbf{k}$ and
          lies in the surface plane — this is <strong>spin-momentum locking</strong>, the
          hallmark of a topological surface state.
        </p>
        <p>
          <strong>Protection:</strong> A mass term $m\\sigma_z$ would gap the surface state.
          But $\\sigma_z$ is odd under TRS ($\\Theta\\sigma_z\\Theta^{-1} = -\\sigma_z$).
          TRS-preserving perturbations cannot gap the surface states; only magnetic
          impurities (breaking TRS) can open a gap at the Dirac point.
        </p>
        <h2>Classification: Strong vs. Weak TI</h2>
        <p>
          A 3D TRS-invariant insulator has <strong>four $\\mathbb{Z}_2$ invariants</strong>
          $(\\nu_0;\\nu_1\\nu_2\\nu_3)$:
        </p>
        <ul>
          <li><strong>$\\nu_0 = 1$: Strong TI</strong> — surface states on every surface, protected by TRS.</li>
          <li><strong>$\\nu_0 = 0$, $(\\nu_1\\nu_2\\nu_3) \\neq (000)$: Weak TI</strong> — surface states on some surfaces only.</li>
          <li><strong>$(0;000)$: Trivial insulator.</strong></li>
        </ul>
        <p>
          <strong>Material realizations:</strong>
        </p>
        <ul>
          <li>$\\text{Bi}_x\\text{Sb}_{1-x}$ (2008): first 3D TI, complex surface bands.</li>
          <li>$\\text{Bi}_2\\text{Se}_3$ (2009): clean single Dirac cone, bulk gap $\\sim 0.3$ eV.
              The "hydrogen atom" of 3D TIs.</li>
          <li>$\\text{Bi}_2\\text{Te}_3$, $\\text{Sb}_2\\text{Te}_3$: similar structure, used in thermoelectrics.</li>
        </ul>
        <p>
          The mechanism is <strong>band inversion by spin-orbit coupling</strong>. In
          $\\text{Bi}_2\\text{Se}_3$, strong SOC from Bi inverts the Se $p$-orbital and Bi
          $p$-orbital bands at the $\\Gamma$ point.
        </p>
      `,
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "A 3D TI surface state has spin-momentum locking. This means:",
      options: [
        "The spin is always parallel to the momentum",
        "The spin is perpendicular to the momentum and lies in the surface plane — spin rotates as you go around the Fermi surface",
        "The spin is aligned with the surface normal",
        "The spin and momentum are always anti-parallel",
      ],
      correct: [1],
      explanation:
        "From $H_{\\text{surf}} = \\hbar v_F(\\sigma_x k_y - \\sigma_y k_x)$, the spin eigenstate at momentum $\\mathbf{k}$ points perpendicular to $\\mathbf{k}$ in the surface plane. As you go around the Fermi surface (circular at low energy), the spin rotates by $2\\pi$, giving a Berry phase of $\\pi$ — exactly what protects the surface state from backscattering.",
    },

    // ── MSQ 1 ────────────────────────────────────────────────────────════
    {
      type: "msq",
      question:
        "Which of the following are signatures that distinguish a 3D topological insulator from an ordinary insulator? (Select all that apply)",
      options: [
        "Bulk energy gap (both have this)",
        "A single spin-non-degenerate Dirac cone on the surface (ARPES signature)",
        "Spin-momentum locking of surface states",
        "Surface states that are gapped by non-magnetic impurities",
      ],
      correct: [1, 2],
      explanation:
        "A: Both ordinary and topological insulators have a bulk gap — this alone does not distinguish them. B: A single Dirac cone (measurable by ARPES) is the hallmark of a strong 3D TI — graphene has four cones (two valleys × two spins), but a TI surface has exactly one spin-non-degenerate cone. C: Spin-momentum locking is a direct consequence of the surface Hamiltonian $H \\propto \\sigma_x k_y - \\sigma_y k_x$. D is wrong — TRS-preserving (non-magnetic) impurities cannot gap the surface states; only magnetic impurities break TRS and can open a gap.",
    },

    // ── MCQ 3 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "What is the key physical mechanism that creates a 3D topological insulator in $\\text{Bi}_2\\text{Se}_3$?",
      options: [
        "Strong magnetic ordering inverts the bands",
        "Strong spin-orbit coupling from heavy elements (Bi) inverts bands at the $\\Gamma$ point",
        "The crystal structure has no inversion symmetry",
        "Electron-electron interactions open a gap",
      ],
      correct: [1],
      explanation:
        "In $\\text{Bi}_2\\text{Se}_3$, the large spin-orbit coupling from bismuth (a heavy element, $Z = 83$) shifts the Bi $p$-orbital and Se $p$-orbital bands, inverting their ordering at the $\\Gamma$ point. This band inversion by SOC changes the $\\mathbb{Z}_2$ invariant from trivial to $\\nu_0 = 1$, creating a strong TI with a bulk gap of $\\sim 0.3$ eV and a single surface Dirac cone.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// SUPPLEMENTARY: Key Concepts, Intuition & Connections
// ═══════════════════════════════════════════════════════════════════════════

export const supplementary = {
  title: "Supplementary – Key Tools, Intuition & Connections",

  content: [

    // ── Theory 1: Mathematical Tools ─────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Essential Mathematical Tools</h2>
        <h3>Pauli Matrices and Spin Algebra</h3>
        <p>
          $$\\sigma_x = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\quad
          \\sigma_y = \\begin{pmatrix}0&-i\\\\i&0\\end{pmatrix},\\quad
          \\sigma_z = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$$
          Key identities: $\\sigma_i^2 = I$; $[\\sigma_i, \\sigma_j] = 2i\\epsilon_{ijk}\\sigma_k$;
          $\\{\\sigma_i,\\sigma_j\\} = 2\\delta_{ij}$;
          $(\\mathbf{a}\\cdot\\boldsymbol{\\sigma})(\\mathbf{b}\\cdot\\boldsymbol{\\sigma}) = (\\mathbf{a}\\cdot\\mathbf{b})I + i(\\mathbf{a}\\times\\mathbf{b})\\cdot\\boldsymbol{\\sigma}$.
        </p>
        <p>
          For $H = \\mathbf{d}\\cdot\\boldsymbol{\\sigma}$: eigenvalues are $\\pm|\\mathbf{d}|$.
        </p>
        <h3>Second Quantization Essentials</h3>
        <p>
          $c^\\dagger$ (creation), $c$ (annihilation) with $\\{c_i, c_j^\\dagger\\} = \\delta_{ij}$.
          Number operator: $n_i = c_i^\\dagger c_i$. Hopping: $c_j^\\dagger c_i$ moves a
          particle from $i$ to $j$.
        </p>
        <h3>Bogoliubov Transformation (Kitaev chain)</h3>
        <p>
          For a superconducting Hamiltonian with pairing, define the Nambu spinor
          $\\Psi_k = (c_k, c_{-k}^\\dagger)^T$:
          $$H = \\frac{1}{2}\\sum_k \\Psi_k^\\dagger H_{\\text{BdG}}(k)\\Psi_k,
          \\quad H_{\\text{BdG}}(k) = \\xi_k\\tau_z + \\Delta_k\\tau_y$$
          Diagonalize via $\\gamma_k = u_k c_k + v_k c_{-k}^\\dagger$ (Bogoliubov quasiparticles)
          with energies $E_k = \\sqrt{\\xi_k^2 + |\\Delta_k|^2}$.
        </p>
        <h3>Key Formulae Quick Reference</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%;">
          <tr><th>Quantity</th><th>Formula</th></tr>
          <tr><td>Berry connection</td><td>$\\mathcal{A}_n = i\\langle u_n|\\nabla_k|u_n\\rangle$</td></tr>
          <tr><td>Berry curvature</td><td>$\\Omega_n = \\nabla_k \\times \\mathcal{A}_n$</td></tr>
          <tr><td>Chern number</td><td>$C = \\frac{1}{2\\pi}\\int_{\\text{BZ}}\\Omega_n\\,d^2k$</td></tr>
          <tr><td>Winding number</td><td>$w = \\frac{1}{2\\pi}\\oint\\partial_k\\varphi\\,dk$</td></tr>
          <tr><td>Hall conductivity</td><td>$\\sigma_{xy} = C\\cdot e^2/h$</td></tr>
          <tr><td>Landau level energy</td><td>$E_n = \\hbar\\omega_c(n+\\frac{1}{2})$</td></tr>
          <tr><td>Filling fraction</td><td>$\\nu = n_s h/(eB)$</td></tr>
          <tr><td>Laughlin state</td><td>$\\Psi = \\mathcal{N}\\prod_{i<j}(z_i-z_j)^q e^{-\\sum|z_i|^2/4\\ell_B^2}$</td></tr>
          <tr><td>CF effective field</td><td>$B^* = B - 2p\\Phi_0 n_s$</td></tr>
          <tr><td>CF filling relation</td><td>$\\nu = \\nu^*/(2p\\nu^* \\pm 1)$</td></tr>
        </table>
      `,
    },

    // ── Theory 2: Unifying Thread ─────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Unifying Thread: What All These Topics Share</h2>
        <p>All the models in this course share the same deep structure:</p>
        <ol>
          <li>A <strong>gapped Hamiltonian</strong> (bulk insulator or superconductor) parameterised by momentum $\\mathbf{k}$.</li>
          <li>A <strong>topological invariant</strong> (winding number, Chern number, $\\mathbb{Z}_2$) computed from the bulk wavefunctions over the Brillouin zone.</li>
          <li><strong>Protected boundary modes</strong> (edge states, surface states, Majorana modes) whose existence is guaranteed by the non-zero invariant.</li>
          <li><strong>Physical consequences:</strong> quantized transport ($\\sigma_{xy}$), fractional charge ($e/q$), protected conduction channels.</li>
        </ol>
        <h2>Role of Symmetry: The Ten-fold Way in Practice</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%;">
          <tr><th>Symmetry present</th><th>Class</th><th>Topological invariant (1D / 2D / 3D)</th></tr>
          <tr><td>None</td><td>A</td><td>$0$ / $\\mathbb{Z}$ (Chern) / $0$</td></tr>
          <tr><td>TRS ($\\Theta^2 = -1$)</td><td>AII</td><td>$0$ / $\\mathbb{Z}_2$ (QSHI) / $\\mathbb{Z}_2^4$ (3D TI)</td></tr>
          <tr><td>PHS ($\\mathcal{C}^2 = +1$)</td><td>D</td><td>$\\mathbb{Z}_2$ (Kitaev/Majorana) / $\\mathbb{Z}$ / $0$</td></tr>
          <tr><td>TRS + PHS + CS ($\\Theta^2 = +1$)</td><td>BDI</td><td>$\\mathbb{Z}$ (SSH winding) / $0$ / $0$</td></tr>
        </table>
        <h2>Experimental Signatures: The Big Picture</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%;">
          <tr><th>System</th><th>Signature</th><th>Experiment</th></tr>
          <tr><td>IQHE</td><td>$\\sigma_{xy} = \\nu e^2/h$ (quantized)</td><td>von Klitzing (1980)</td></tr>
          <tr><td>FQHE</td><td>$\\sigma_{xy} = \\frac{1}{3}e^2/h$, etc.</td><td>Tsui, Störmer (1982)</td></tr>
          <tr><td>2D TI (HgTe)</td><td>$G = 2e^2/h$ in gap</td><td>König et al. (2007)</td></tr>
          <tr><td>3D TI (Bi₂Se₃)</td><td>Single Dirac cone (ARPES)</td><td>Hasan group (2009)</td></tr>
          <tr><td>Kitaev chain</td><td>Zero-bias peak in $dI/dV$</td><td>Mourik et al. (2012)</td></tr>
        </table>
      `,
    },

    // ── Theory 3: Exam Strategies ─────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Exam Strategy: How to Tackle Common Question Types</h2>
        <h3>1. "Show that X is a topological invariant"</h3>
        <p>
          Show that X is (1) <em>quantized</em> (takes discrete values), and (2) <em>cannot
          change under smooth deformations</em> of the Hamiltonian unless the gap closes.
          Usually express X as an integral of a local quantity (Berry curvature) over a
          compact space (BZ), which by topology must be an integer.
        </p>
        <h3>2. "Identify the topological phase from $H(\\mathbf{k})$"</h3>
        <p>
          For $H(\\mathbf{k}) = \\mathbf{d}(\\mathbf{k})\\cdot\\boldsymbol{\\sigma}$:
          (1) Find $d_x, d_y, d_z$.
          (2) If $d_z = 0$ (1D, chiral symmetry): compute winding number of $(d_x, d_y)$.
          (3) If $d_z \\neq 0$ (2D): compute Chern number $C = \\frac{1}{4\\pi}\\int\\hat{\\mathbf{d}}\\cdot(\\partial_{k_x}\\hat{\\mathbf{d}}\\times\\partial_{k_y}\\hat{\\mathbf{d}})\\,d^2k$.
          (4) Find where gap closes: $|\\mathbf{d}| = 0$.
          (5) The topological invariant changes at gap-closing points.
        </p>
        <h3>3. "Find edge states"</h3>
        <p>
          Set up the real-space Hamiltonian with open boundary conditions. Look for
          solutions decaying exponentially into the bulk. Zero-energy solutions exist when
          the topological invariant is non-trivial.
        </p>
        <h3>4. Frequently tested results to memorise</h3>
        <ul>
          <li>SSH winding: $w = 0$ ($t_1 > t_2$) or $w = 1$ ($t_2 > t_1$)</li>
          <li>Majoranas satisfy $\\gamma = \\gamma^\\dagger$, $\\gamma^2 = 1$, $\\{\\gamma_i,\\gamma_j\\} = 2\\delta_{ij}$</li>
          <li>QHE incompressibility: gap between Landau levels $\\Rightarrow \\partial n/\\partial\\mu = 0$</li>
          <li>Hall conductance quantized: Chern number $\\in \\mathbb{Z}$, TKNN formula</li>
          <li>Haldane TRS breaking: complex $t_2 e^{i\\phi}$ (next-nearest hopping)</li>
          <li>Graphene $C = 0$: TRS maps $K \\leftrightarrow K'$, cancels Berry fluxes</li>
          <li>$\\mathbb{Z}_2$ invariant: parity of Kramers pairs crossing Fermi level at TRIM points</li>
          <li>Laughlin filling: highest power of $z_i$ is $q(N-1)$, so $\\nu = 1/q$</li>
          <li>CF effective field: $B^* = B - 2p\\Phi_0 n_s$</li>
          <li>FQHE fractions from CF: $\\nu = n/(2pn \\pm 1)$</li>
        </ul>
      `,
    },

    // ── MSQ: Grand Review ─────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "Which statements about topological invariants across different models are correct? (Select all that apply)",
      options: [
        "The SSH winding number $w$ is a $\\mathbb{Z}$ invariant protected by chiral symmetry",
        "The Chern number of the QHE/Haldane model is a $\\mathbb{Z}$ invariant requiring broken TRS or no TRS",
        "The $\\mathbb{Z}_2$ invariant of the QSHI is protected by time-reversal symmetry with $\\Theta^2 = -1$",
        "All topological invariants must be computed from the bulk band structure (bulk-boundary correspondence)",
      ],
      correct: [0, 1, 2, 3],
      explanation:
        "All four are correct. A: SSH's winding number $w \\in \\mathbb{Z}$ is protected by chiral symmetry (class BDI in 1D). B: The Chern number $C \\in \\mathbb{Z}$ requires the system to be in class A (no TRS, no PHS) or to have broken TRS — intact TRS forces $C = 0$ in 2D. C: The Kane-Mele $\\mathbb{Z}_2$ invariant requires TRS with $\\Theta^2 = -1$ (class AII); breaking TRS destroys the $\\mathbb{Z}_2$ protection. D: Bulk-boundary correspondence is the central theorem — the bulk topological invariant determines the number of protected boundary modes.",
    },

    // ── MCQ: Grand Review ─────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "A sample has $H(k) = (m + \\cos k)\\sigma_z + \\sin k\\,\\sigma_x$ with $m = 0$. Which phase is the system in?",
      options: [
        "Trivial: $C = 0$ since $m > -1$",
        "Topological: $C = 1$ since $-1 < m < 1$ so $d_z$ changes sign",
        "Phase boundary: the gap closes at $k = 0$",
        "Trivial: $C = 0$ since $m < 1$",
      ],
      correct: [1],
      explanation:
        "With $m = 0$: $d_z = \\cos k$ changes sign (positive at $k=0$, negative at $k=\\pi$) and $d_x = \\sin k$. This is the topological regime $-1 < m < 1$ where $d_z$ passes through zero. The Chern number is $C = 1$. (Gap closes at $m = \\pm 1$: at $m = -1$, gap closes at $k = 0$; at $m = +1$, gap closes at $k = \\pi$.)",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// COURSE INDEX for navigation
// ═══════════════════════════════════════════════════════════════════════════

export const topologyCourse = {
  title: "Topology & Condensed Matter — Complete Crash Course",
  subtitle: "Based on NPTEL lectures by Prof. S. Basu",
  weeks: [week1, week2, week3, week4, week5, week6, week7, week8, supplementary],
};