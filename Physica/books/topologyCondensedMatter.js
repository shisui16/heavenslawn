/**
 * Book: Topology & Condensed Matter — Complete Crash Course
 *
 * Based on NPTEL course by Prof. S. Basu (Weeks 1–8)
 * Coverage: Topology fundamentals • Berry phase • SSH & Kitaev models •
 *           Quantum Hall effect • Landau levels • Graphene & Dirac physics •
 *           Haldane model • Kane–Mele model • QSHE • FQHE • Laughlin states •
 *           Composite fermions • 3D Topological Insulators
 *
 * Format: standard Physica book — { title, chapters: [ { title, content: [...] } ] }
 * Each former "week" is now a chapter; content items are unchanged.
 */

// ═══════════════════════════════════════════════════════════════════════════
// Chapter 1 (Week 1): Topology, Berry Phase & Classification
// ═══════════════════════════════════════════════════════════════════════════

const ch1 = {
  title: "Topology, Berry Phase & Classification",
  content: [

    // ── Theory 1: Why Topology? ──────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Why Topology in Condensed Matter?</h2>
        <p>
          Traditionally, phases of matter are classified by <strong>symmetry breaking</strong>
          (Landau theory): ice breaks translational symmetry, a ferromagnet breaks rotational
          symmetry. Topology provides a completely different organisational principle.
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
          Consider a long solenoid. Outside: $\\mathbf{B} = 0$ but the vector potential
          $\\mathbf{A}$ is non-zero. Electrons sent around both sides acquire a phase difference:
          $$\\Delta\\phi = \\frac{e}{\\hbar}\\oint_C \\mathbf{A}\\cdot d\\mathbf{l}
          = \\frac{e}{\\hbar}\\int_S \\mathbf{B}\\cdot d\\mathbf{S}$$
          This measurable interference arises even though $\\mathbf{B} = 0$ along the paths.
          The winding numbers of curves around the solenoid are topological invariants.
        </p>
      `,
    },

    // ── Theory 2: Euler Characteristic ──────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Euler Characteristic & Gauss–Bonnet Theorem</h2>
        <p>
          The <strong>Euler–Poincaré characteristic</strong> is:
          $$\\chi = V - E + F$$
          where $V$ = vertices, $E$ = edges, $F$ = faces in any triangulation.
          The Gauss–Bonnet theorem connects this to geometry:
          $$\\int_M K\\,dA = 2\\pi\\chi$$
        </p>
        <p>
          <strong>Sphere $S^2$:</strong> $\\int K\\,dA = (1/R^2)(4\\pi R^2) = 4\\pi$, so $\\chi = 2$.
          <br>
          <strong>Torus $T^2$:</strong> Positive and negative curvatures cancel, $\\int K\\,dA = 0$, so $\\chi = 0$.
        </p>
        <p>
          This is why the Chern number is always an integer — it is the condensed-matter
          analogue of the Euler characteristic, with Berry curvature integrated over the
          Brillouin zone giving $2\\pi C$ for integer $C$.
        </p>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "Which of the following pairs of surfaces are <strong>topologically equivalent</strong> (homeomorphic)?",
      options: [
        "A sphere and a cube",
        "A torus (donut) and a sphere",
        "A torus and a coffee mug with one handle",
        "A sphere and a torus",
      ],
      correct: [2],
      explanation:
        "A coffee mug with one handle and a torus both have exactly one hole ($\\chi = 0$). A sphere has $\\chi = 2$ and cannot be deformed into a torus — you would need to puncture it.",
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "The Euler characteristic of a double torus (genus-2 surface, two holes) is:",
      options: ["$\\chi = 2$", "$\\chi = 0$", "$\\chi = -2$", "$\\chi = 4$"],
      correct: [2],
      explanation:
        "For a surface of genus $g$, $\\chi = 2 - 2g$. A double torus has $g = 2$, so $\\chi = 2 - 4 = -2$.",
    },

    // ── Theory 3: Berry Phase ─────────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Berry Phase</h2>
        <p>
          When a Hamiltonian $H(\\boldsymbol{\\lambda})$ is <strong>adiabatically</strong>
          varied around a closed loop in parameter space, the eigenstate picks up a
          purely <em>geometric</em> phase — the <strong>Berry phase</strong>:
          $$\\gamma_n = \\oint_C \\mathcal{A}_n\\cdot d\\boldsymbol{\\lambda}, \\qquad
          \\mathcal{A}_n = i\\langle n(\\boldsymbol{\\lambda})|\\nabla_{\\boldsymbol{\\lambda}}|n(\\boldsymbol{\\lambda})\\rangle$$
        </p>
        <p>
          $\\mathcal{A}_n$ is the <strong>Berry connection</strong> (analogous to a vector
          potential). The Berry phase depends only on the <em>path geometry</em> in parameter
          space, not on the speed of traversal.
        </p>
        <h2>Spin in a Rotating Field: Physical Example</h2>
        <p>
          A spin-$\\frac{1}{2}$ in a magnetic field tracing a cone of polar angle $\\theta$
          accumulates Berry phase:
          $$\\gamma = -\\frac{\\Omega}{2}, \\qquad \\Omega = 2\\pi(1-\\cos\\theta)$$
          where $\\Omega$ is the solid angle swept. A full $2\\pi$ rotation gives $\\gamma = -\\pi$,
          so $|\\psi\\rangle \\to -|\\psi\\rangle$ — you need $4\\pi$ to return to the original state.
        </p>
      `,
    },

    // ── MCQ 3 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question: "The Berry phase is called 'geometric' because:",
      options: [
        "It depends on the geometry of the physical sample",
        "It depends only on the path traced in parameter space, not on the speed of traversal",
        "It is proportional to the energy gap of the system",
        "It can be computed from the dynamical phase alone",
      ],
      correct: [1],
      explanation:
        "The Berry phase $\\gamma_n = i\\oint\\langle n|\\nabla_\\lambda|n\\rangle\\cdot d\\boldsymbol{\\lambda}$ depends only on the geometry of the closed loop $C$ in parameter space. The dynamical phase $\\alpha_n = -\\frac{1}{\\hbar}\\int E_n\\,dt$ depends on time; the Berry phase does not.",
    },

    // ── Theory 4: Time-Reversal & Kramers ────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Time-Reversal Symmetry & Kramers Degeneracy</h2>
        <p>
          The time-reversal operator $\\Theta$ is <strong>anti-unitary</strong> ($\\Theta = UK$,
          $K$ = complex conjugation) because $t \\to -t$ requires conjugating $i \\to -i$.
        </p>
        <p>
          <strong>Spinless particle:</strong> $\\Theta = K$, $\\Theta^2 = +1$.
          <br>
          <strong>Spin-$\\tfrac{1}{2}$ particle:</strong> $\\Theta = -i\\sigma_y K$, $\\Theta^2 = -1$.
        </p>
        <p>
          <strong>Kramers theorem:</strong> If $\\Theta^2 = -1$ and $[H,\\Theta]=0$, then
          for any eigenstate $|n\\rangle$, the state $\\Theta|n\\rangle$ is orthogonal to
          $|n\\rangle$ yet has the same energy. Every level is <em>at least doubly degenerate</em>.
          This protects helical edge states in the QSHI from any TRS-preserving backscattering.
        </p>
      `,
    },

    // ── MCQ 4 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "For a spin-$\\frac{1}{2}$ particle in a TRS-invariant system, the state $\\Theta|n\\rangle$:",
      options: [
        "Is the same state as $|n\\rangle$",
        "Has the opposite energy $-E_n$",
        "Has the same energy $E_n$ but is orthogonal to $|n\\rangle$",
        "Violates the Schrödinger equation",
      ],
      correct: [2],
      explanation:
        "Since $[H,\\Theta]=0$, $\\Theta|n\\rangle$ has energy $E_n$. Since $\\Theta^2 = -1$, the inner product $\\langle n|\\Theta n\\rangle = -\\langle n|\\Theta n\\rangle = 0$, so the two states are orthogonal — Kramers degeneracy.",
    },

    // ── MSQ 1 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question: "Which statements about $\\Theta^2$ are correct?",
      options: [
        "For a spinless particle (integer spin), $\\Theta^2 = +1$",
        "For a spin-$\\frac{1}{2}$ particle (half-integer spin), $\\Theta^2 = -1$",
        "$\\Theta^2 = -1$ implies Kramers degeneracy for every energy level",
        "$\\Theta^2 = +1$ implies Kramers degeneracy for every energy level",
      ],
      correct: [0, 1, 2],
      explanation:
        "A and B: $\\Theta^2 = (-1)^{2s}$. C: $\\Theta^2 = -1$ forces $|n\\rangle$ and $\\Theta|n\\rangle$ to be orthogonal and degenerate. D is false — $\\Theta^2 = +1$ does not guarantee degeneracy.",
    },

    // ── Theory 5: Ten-fold Classification ───────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Ten-fold Way: Classification of Topological Phases</h2>
        <p>
          All gapped free-fermion Hamiltonians are classified by three discrete symmetries —
          TRS, PHS (particle-hole), and CS (chiral/sublattice) — giving 10 symmetry classes
          (Altland–Zirnbauer). In each spatial dimension each class has an invariant in
          $\\mathbb{Z}$, $\\mathbb{Z}_2$, or $0$.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
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
      question: "The SSH model belongs to symmetry class BDI. What does this mean?",
      options: [
        "It has TRS with $\\Theta^2 = -1$, and no PHS",
        "It has TRS with $\\Theta^2 = +1$, PHS with $\\mathcal{C}^2 = +1$, and chiral symmetry",
        "It has no symmetries at all",
        "It has only PHS with $\\mathcal{C}^2 = -1$",
      ],
      correct: [1],
      explanation:
        "Class BDI: TRS with $\\Theta^2 = +1$ (spinless, $\\Theta = K$), PHS with $\\mathcal{C}^2 = +1$, and chiral symmetry $\\Gamma = \\Theta\\mathcal{C}$. In 1D this gives a $\\mathbb{Z}$ invariant — the winding number $w$.",
    },
  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 2 (Week 2): SSH Model & Kitaev Chain
// ═══════════════════════════════════════════════════════════════════════════

const ch2 = {
  title: "SSH Model & Kitaev Chain",
  content: [

    {
      type: "text",
      data: `
        <h2>The SSH Model: Simplest 1D Topological Insulator</h2>
        <p>
          The <strong>Su–Schrieffer–Heeger (SSH) model</strong> is a dimerized 1D chain
          with alternating hoppings $t_1$ (intracell) and $t_2$ (intercell), two sites per
          unit cell ($A$, $B$).
        </p>
        <p>
          <strong>Bloch Hamiltonian</strong> in the $(c_{k,A}, c_{k,B})^T$ basis:
          $$H(k) = \\begin{pmatrix}0 & h(k) \\\\ h^*(k) & 0\\end{pmatrix},
          \\quad h(k) = t_1 + t_2 e^{-ik}$$
          Eigenvalues: $E_\\pm(k) = \\pm|h(k)| = \\pm\\sqrt{t_1^2 + t_2^2 + 2t_1 t_2\\cos k}$
        </p>
        <p>
          The energy gap $\\Delta = 2|t_1 - t_2|$ closes only when $t_1 = t_2$ — the
          topological phase transition. Writing $h(k) = d_x + id_y$:
          $$d_x = t_1 + t_2\\cos k, \\qquad d_y = t_2\\sin k$$
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Winding Number & Bulk-Boundary Correspondence</h2>
        <p>
          As $k$ sweeps $[-\\pi, \\pi]$, the tip of $\\mathbf{d}(k) = (d_x, d_y)$ traces a
          closed curve. The <strong>winding number</strong> counts how many times it winds
          around the origin:
          $$w = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}\\partial_k\\varphi(k)\\,dk, \\qquad
          \\varphi = \\arg(d_x + id_y)$$
        </p>
        <ul>
          <li><strong>$t_1 > t_2$:</strong> curve misses origin. $w = 0$ — trivial, no edge states.</li>
          <li><strong>$t_2 > t_1$:</strong> curve encloses origin once. $w = 1$ — one zero-energy state at each end.</li>
          <li>At $t_1 = 0, t_2 = 1$: $\\mathbf{d} = (\\cos k, \\sin k)$ traces the unit circle. $w = 1$.</li>
        </ul>
        <p>
          <strong>Bulk-boundary correspondence:</strong> the number of protected zero-energy
          edge states equals $w$. Chiral symmetry pins them exactly at $E = 0$.
        </p>
      `,
    },

    {
      type: "mcq",
      question:
        "In the SSH model with $t_1 = 0.3$ and $t_2 = 1.2$, what is the winding number and expected edge physics?",
      options: [
        "$w = 0$; no zero-energy edge states",
        "$w = 1$; one zero-energy state at each end",
        "$w = 2$; two zero-energy states at each end",
        "The gap closes; winding number is undefined",
      ],
      correct: [1],
      explanation:
        "$t_2 > t_1$ → topological phase, $w = 1$. Gap $= 2|0.3 - 1.2| = 1.8 \\neq 0$. Bulk-boundary correspondence guarantees one zero-energy edge mode per end.",
    },

    {
      type: "msq",
      question: "Which symmetries does the SSH model possess?",
      options: [
        "TRS: $\\Theta H(k)\\Theta^{-1} = H(-k)$ with $\\Theta = K$, $\\Theta^2 = +1$",
        "PHS: $\\mathcal{C}H(k)\\mathcal{C}^{-1} = -H(-k)$ with $\\mathcal{C} = \\sigma_z K$, $\\mathcal{C}^2 = +1$",
        "Chiral: $\\sigma_z H(k)\\sigma_z = -H(k)$",
        "TRS with $\\Theta^2 = -1$ (spin-$\\frac{1}{2}$)",
      ],
      correct: [0, 1, 2],
      explanation:
        "SSH has A, B, C — placing it in class BDI. TRS: $K$ maps $H(k)\\to H(-k)$ since $d_x$ is even and $d_y$ odd. PHS: $\\sigma_z H^*(-k)\\sigma_z = -H(k)$. Chiral: $\\sigma_z H(k)\\sigma_z = -H(k)$ directly. D is wrong — SSH is spinless.",
    },

    {
      type: "mcq",
      question:
        "What is the physical significance of chiral symmetry in the SSH model?",
      options: [
        "It ensures the spectrum is always gapped",
        "It forces the spectrum to be symmetric about $E=0$, protecting zero-energy edge modes",
        "It implies the model must have spin-orbit coupling",
        "It means the model can only exist in 2D",
      ],
      correct: [1],
      explanation:
        "Chiral symmetry $\\Gamma H\\Gamma^{-1} = -H$ means if $E$ is an eigenvalue, so is $-E$. Zero-energy edge states are pinned at $E = 0$ and cannot be shifted away by any chiral-symmetric perturbation.",
    },

    {
      type: "text",
      data: `
        <h2>The Kitaev Chain: 1D Topological Superconductor</h2>
        <p>
          A 1D $p$-wave superconductor with chemical potential $\\mu$, hopping $t$,
          and pairing $\\Delta$. In the Nambu basis $\\Psi_k = (c_k, c_{-k}^\\dagger)^T$:
          $$H_{\\text{BdG}}(k) = (-2t\\cos k - \\mu)\\tau_z + 2\\Delta\\sin k\\,\\tau_y$$
        </p>
        <p>
          <strong>Phase diagram:</strong>
          <br>
          $|\\mu| < 2t$: topological — Majorana zero modes at chain ends.
          <br>
          $|\\mu| > 2t$: trivial — no edge modes.
        </p>
        <p>
          <strong>Extreme topological limit</strong> ($\\mu = 0$, $t = \\Delta$): Majorana
          operators $\\gamma_{j,A}$ and $\\gamma_{j,B}$ pair across sites, leaving
          $\\gamma_{1,A}$ and $\\gamma_{N,B}$ free at the chain ends — unpaired Majorana
          zero modes.
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Majorana Fermions</h2>
        <p>
          A <strong>Majorana fermion</strong> is its own antiparticle: $\\gamma = \\gamma^\\dagger$.
          Properties:
        </p>
        <ol>
          <li>$\\gamma^2 = 1$ and $\\{\\gamma_i,\\gamma_j\\} = 2\\delta_{ij}$</li>
          <li>Any complex fermion splits as $c = (\\gamma_1 + i\\gamma_2)/2$</li>
          <li>Particle-hole symmetry of BdG pins Majorana modes at $E = 0$</li>
          <li>Two spatially separated Majoranas form a <em>non-local</em> qubit — immune to local decoherence</li>
          <li>Braiding two Majoranas gives non-Abelian statistics → topological quantum computing</li>
        </ol>
      `,
    },

    {
      type: "msq",
      question: "Which are true about Majorana zero modes in the Kitaev chain?",
      options: [
        "They appear when $|\\mu| < 2t$ (topological phase)",
        "They are protected from splitting by particle-hole symmetry",
        "They are localised at the ends of the chain",
        "They appear when $|\\mu| > 2t$ (trivial phase)",
      ],
      correct: [0, 1, 2],
      explanation:
        "Majorana zero modes appear in the topological phase $|\\mu| < 2t$ (A), localised at the chain ends (C), pinned at $E = 0$ by PHS (B). In the trivial phase D, all Majoranas pair within the same unit cell — no free end modes.",
    },

    {
      type: "numeric",
      question:
        "In the SSH model the energy gap is $\\Delta = 2|t_1 - t_2|$. " +
        "With $t_1 = 0.5\\,\\text{eV}$ and $t_2 = 1.5\\,\\text{eV}$, what is the gap in eV?",
      answer: "2.0 eV",
      tolerance: 0.01,
      hint: "$\\Delta = 2|0.5 - 1.5| = 2 \\times 1.0$",
      explanation:
        "$\\Delta = 2 \\times 1.0 = 2.0\\,\\text{eV}$. System is topological ($t_2 > t_1$, $w = 1$).",
    },
  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 3 (Week 3): Classical Hall Effect & Landau Levels
// ═══════════════════════════════════════════════════════════════════════════

const ch3 = {
  title: "Classical Hall Effect & Landau Levels",
  content: [

    {
      type: "text",
      data: `
        <h2>Classical Hall Effect</h2>
        <p>
          Current $I$ flows in $x$ through a 2D sample in perpendicular $B_z$. The Lorentz
          force deflects electrons in $y$; in steady state:
          $$E_y = v_x B = \\frac{j_x}{ne}B$$
          The resistivity tensor:
          $$\\begin{pmatrix}E_x \\\\ E_y\\end{pmatrix} =
          \\begin{pmatrix}\\rho_{xx} & \\rho_{xy} \\\\ \\rho_{yx} & \\rho_{yy}\\end{pmatrix}
          \\begin{pmatrix}j_x \\\\ j_y\\end{pmatrix}$$
          Hall coefficient: $R_H = E_y/(j_x B) = 1/(ne)$.
          Sign of $R_H$ reveals carrier type: electrons ($R_H < 0$) or holes ($R_H > 0$).
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Landau Levels</h2>
        <p>
          In Landau gauge $\\mathbf{A} = (0, Bx, 0)$, $[H,p_y]=0$ allows the ansatz
          $\\psi = e^{ik_y y}\\phi(x)$, reducing $H$ to a harmonic oscillator shifted to
          $x_0 = \\hbar k_y/(m\\omega_c)$:
          $$E_n = \\hbar\\omega_c\\left(n + \\tfrac{1}{2}\\right), \\qquad
          \\omega_c = \\frac{eB}{m}, \\qquad \\ell_B = \\sqrt{\\frac{\\hbar}{eB}}$$
        </p>
        <p>
          <strong>Degeneracy per unit area:</strong> $N_\\phi = eB/h = B/\\Phi_0$
          (one state per flux quantum $\\Phi_0 = h/e$).
          <br>
          <strong>Filling fraction:</strong> $\\nu = n_s/(N_\\phi) = n_s h/(eB)$.
          Integer $\\nu$ → chemical potential in gap → Integer QHE.
        </p>
      `,
    },

    {
      type: "mcq",
      question:
        "In Landau gauge, why does the problem reduce to a harmonic oscillator?",
      options: [
        "Because $[H,p_x]=0$, so $p_x$ is a good quantum number",
        "Because $[H,p_y]=0$; writing $\\psi = e^{ik_y y}\\phi(x)$ turns the $x$-equation into a shifted SHO",
        "Because the magnetic field creates a parabolic potential in $y$",
        "Because Landau gauge breaks translational symmetry in all directions",
      ],
      correct: [1],
      explanation:
        "In $\\mathbf{A}=(0,Bx,0)$, the Hamiltonian commutes with $p_y$, making $k_y$ a good quantum number. Substituting the plane-wave $y$-ansatz gives a shifted harmonic oscillator in $x$.",
    },

    {
      type: "numeric",
      question:
        "The magnetic length is $\\ell_B = \\sqrt{\\hbar/(eB)}$. At $B = 10\\,\\text{T}$, " +
        "what is $\\ell_B$ in nm? " +
        "($\\hbar = 1.055\\times10^{-34}\\,\\text{J·s}$, $e = 1.6\\times10^{-19}\\,\\text{C}$)",
      answer: "8.1 nm",
      tolerance: 0.2,
      hint: "$\\ell_B \\approx 26/\\sqrt{B[\\text{T}]}\\,\\text{nm}$",
      explanation:
        "$\\ell_B = \\sqrt{(1.055\\times10^{-34})/(1.6\\times10^{-19}\\times10)} \\approx 8.1\\,\\text{nm}$.",
    },

    {
      type: "mcq",
      question:
        "Filling fraction $\\nu = 3$ means:",
      options: [
        "Three-quarters of the lowest Landau level is filled",
        "The lowest three Landau levels ($n=0,1,2$) are completely filled; $\\mu$ lies in the gap above $n=2$",
        "The magnetic field equals three times the flux quantum",
        "Only one level is partially filled with 3 electrons",
      ],
      correct: [1],
      explanation:
        "$\\nu = 3$ means exactly three Landau levels are completely filled, with the chemical potential sitting in the gap — the $\\nu = 3$ IQHE state.",
    },

    {
      type: "msq",
      question: "Which correctly describe properties of Landau levels?",
      options: [
        "The energy spacing between adjacent levels is $\\hbar\\omega_c = \\hbar eB/m$",
        "Each Landau level has degeneracy $N_\\phi = eB/h$ per unit area",
        "The magnetic length $\\ell_B$ sets the spatial extent of the wavefunctions",
        "Landau levels have infinite spacing at zero magnetic field",
      ],
      correct: [0, 1, 2],
      explanation:
        "A: spacing is $\\hbar\\omega_c$. B: degeneracy is one state per flux quantum. C: SHO widths scale as $\\ell_B$. D is wrong — at $B = 0$ there are no Landau levels and $\\omega_c \\to 0$.",
    },
  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 4 (Week 4): Quantum Hall Topology & Graphene
// ═══════════════════════════════════════════════════════════════════════════

const ch4 = {
  title: "Quantum Hall Topology & Graphene",
  content: [

    {
      type: "text",
      data: `
        <h2>Why is the QHE Quantized? The TKNN Formula</h2>
        <p>
          At integer filling $\\nu$, the chemical potential lies in the gap.
          The compressibility $\\partial n/\\partial\\mu = 0$ — the system is
          <strong>incompressible</strong>.
          Linear response (Kubo formula) gives the Hall conductivity:
          $$\\sigma_{xy} = -\\frac{e^2}{h}\\,C, \\qquad
          C = \\frac{1}{2\\pi}\\sum_{\\text{filled bands}}\\int_{\\text{BZ}}\\Omega_n(\\mathbf{k})\\,d^2k$$
        </p>
        <p>
          $C$ is the <strong>Chern number</strong> — always an integer (by Gauss–Bonnet on the
          toroidal BZ). This is the <strong>TKNN formula</strong> (1982). Since $C \\in \\mathbb{Z}$,
          $\\sigma_{xy}$ is exactly quantized and immune to disorder and impurities.
        </p>
        <p>
          <strong>Berry curvature:</strong>
          $\\Omega_n^{xy} = \\partial_{k_x}\\mathcal{A}_n^y - \\partial_{k_y}\\mathcal{A}_n^x$,
          the curl of the Berry connection — the condensed-matter analogue of magnetic flux.
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Corbino Disk: Non-Perturbative Argument for Exact Quantization</h2>
        <p>
          When one flux quantum $\\Phi_0 = h/e$ is threaded adiabatically through the hole
          of a Corbino disk, crystal momentum shifts by $2\\pi/L$ — exactly one state crosses
          the BZ. One electron per filled Landau level is pumped from inner to outer edge.
          For $\\nu$ filled levels:
          $$\\sigma_{xy} = \\nu\\frac{e^2}{h}$$
          This argument is exact as long as $\\mu$ is in the gap.
        </p>
      `,
    },

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
        "The Chern number $C = \\frac{1}{2\\pi}\\int_{\\text{BZ}}\\Omega_n\\,d^2k$ is a topological invariant — it cannot change under smooth deformations of $H$ (only when the gap closes). Since $\\sigma_{xy} = Ce^2/h$, the quantization is exact.",
    },

    {
      type: "text",
      data: `
        <h2>Graphene: Massless Dirac Fermions in 2D</h2>
        <p>
          Graphene's hexagonal lattice has two sublattices $A$, $B$. The low-energy
          Hamiltonian near the Dirac points $K$, $K'$:
          $$H(K+\\mathbf{q}) \\approx \\hbar v_F(q_x\\sigma_x + q_y\\sigma_y), \\qquad
          v_F \\approx 10^6\\,\\text{m/s} \\approx c/300$$
          Linear dispersion $E = \\pm\\hbar v_F|\\mathbf{q}|$: electrons behave like relativistic
          massless particles.
        </p>
        <p>
          <strong>Why $C = 0$ in graphene:</strong> TRS maps $K \\leftrightarrow K'$, forcing
          $\\Omega(K) = -\\Omega(K')$. The total Chern number $C_K + C_{K'} = \\frac{1}{2} - \\frac{1}{2} = 0$.
          Graphene is a semimetal, not a topological insulator — to get $C \\neq 0$ you
          must break TRS (Haldane model).
        </p>
      `,
    },

    {
      type: "mcq",
      question:
        "Why does graphene have vanishing total Chern number ($C = 0$) despite non-zero Berry curvature near the Dirac points?",
      options: [
        "Because graphene has no spin-orbit coupling",
        "Because TRS maps $K \\leftrightarrow K'$ and forces $\\Omega(K) = -\\Omega(K')$, so contributions cancel",
        "Because graphene is 2D and Chern numbers only exist in 3D",
        "Because the hopping $t$ is too small",
      ],
      correct: [1],
      explanation:
        "TRS requires $\\Omega_n(\\mathbf{k}) = -\\Omega_n(-\\mathbf{k})$. Since $K' = -K$, contributions from the two Dirac cones cancel: $C_K + C_{K'} = 0$.",
    },

    {
      type: "msq",
      question: "Which are correct about the TKNN formula $\\sigma_{xy} = Ce^2/h$?",
      options: [
        "The Chern number $C = \\frac{1}{2\\pi}\\int_{\\text{BZ}}\\Omega_n\\,d^2k$ is always an integer",
        "$C$ is analogous to the Euler characteristic in Gauss–Bonnet",
        "The Hall conductivity can take any real value depending on disorder",
        "The formula applies when the Fermi energy is in a bulk energy gap",
      ],
      correct: [0, 1, 3],
      explanation:
        "A: $C \\in \\mathbb{Z}$ by topology. B: $\\frac{1}{2\\pi}\\int\\Omega\\,d^2k = C$ is the BZ analogue of $\\frac{1}{2\\pi}\\int K\\,dA = \\chi$. C is wrong — quantization means only integer multiples of $e^2/h$. D: the gap is required for all levels below to be fully filled.",
    },
  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 5 (Week 5): Haldane Model & Anomalous QHE
// ═══════════════════════════════════════════════════════════════════════════

const ch5 = {
  title: "Haldane Model & Anomalous QHE",
  content: [

    {
      type: "text",
      data: `
        <h2>Making Graphene Topological: The Haldane Model</h2>
        <p>
          Pristine graphene has both TRS and inversion symmetry ($C = 0$).
          To get $C \\neq 0$:
        </p>
        <ul>
          <li><strong>Break inversion</strong> (staggered onsite energies $\\pm M$): opens gap but $C = 0$ — trivial.</li>
          <li><strong>Break TRS</strong> (complex second-neighbor hopping $t_2 e^{i\\phi}$): can give $C = \\pm 1$ — the <strong>Haldane model</strong> (1988).</li>
        </ul>
        <p>
          Near the Dirac points, effective masses:
          $$m_\\pm = M \\pm 3\\sqrt{3}\\,t_2\\sin\\phi$$
          Chern number:
          $$C = \\tfrac{1}{2}[\\text{sgn}(m_K) - \\text{sgn}(m_{K'})]$$
          Topological phase ($|C| = 1$) when $|M| < 3\\sqrt{3}|t_2\\sin\\phi|$.
        </p>
      `,
    },

    {
      type: "mcq",
      question:
        "In the Haldane model with $M = 0$, $\\phi = \\pi/2$: $m_K = 3\\sqrt{3}t_2$, $m_{K'} = -3\\sqrt{3}t_2$. What is $C$?",
      options: ["$C = 0$", "$C = 1$", "$C = -1$", "$C = 2$"],
      correct: [1],
      explanation:
        "$C = \\frac{1}{2}[\\text{sgn}(m_K) - \\text{sgn}(m_{K'})] = \\frac{1}{2}[1 - (-1)] = 1$. Opposite mass signs → topological Chern insulator with $\\sigma_{xy} = e^2/h$.",
    },

    {
      type: "mcq",
      question:
        "The Anomalous Quantum Hall Effect is 'anomalous' because:",
      options: [
        "The Hall conductance is not quantized",
        "It occurs without an external magnetic field — topology alone produces quantized Hall transport",
        "It only occurs at very high temperatures",
        "It requires very strong disorder",
      ],
      correct: [1],
      explanation:
        "In ordinary QHE, external $B$ creates Landau levels. In the Haldane model, complex hopping $t_2 e^{i\\phi}$ breaks TRS and creates non-zero Berry curvature, giving $\\sigma_{xy} = Ce^2/h$ without any net magnetic flux.",
    },

    {
      type: "text",
      data: `
        <h2>Rashba Spin-Orbit Coupling</h2>
        <p>
          At surfaces/interfaces where structural inversion symmetry is broken, the
          Rashba Hamiltonian arises:
          $$H_R = \\alpha_R(\\boldsymbol{\\sigma}\\times\\mathbf{k})\\cdot\\hat{z}
          = \\alpha_R(\\sigma_x k_y - \\sigma_y k_x)$$
          The two spin bands become:
          $$E_\\pm = \\frac{\\hbar^2 k^2}{2m} \\pm \\alpha_R k$$
          Two concentric circles with <strong>opposite spin helicity</strong>.
          The spin winds around the Fermi circle — the precursor to topological surface
          states in 3D TIs.
        </p>
      `,
    },

    {
      type: "msq",
      question: "Which correctly describe the Haldane model?",
      options: [
        "It breaks TRS via complex second-neighbor hopping $t_2 e^{i\\phi}$",
        "It can realize a Chern insulator with $C = \\pm 1$ and $\\sigma_{xy} = \\pm e^2/h$",
        "It requires an external magnetic field",
        "The phase boundary is at $|M| = 3\\sqrt{3}|t_2\\sin\\phi|$",
      ],
      correct: [0, 1, 3],
      explanation:
        "A: complex hopping breaks TRS. B: $C = \\pm 1$ in the topological phase. C is wrong — AQHE has no external $B$. D: phase boundary when a Dirac mass changes sign.",
    },
  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 6 (Week 6): Quantum Spin Hall Effect — Kane–Mele & BHZ
// ═══════════════════════════════════════════════════════════════════════════

const ch6 = {
  title: "Quantum Spin Hall Effect: Kane–Mele & BHZ",
  content: [

    {
      type: "text",
      data: `
        <h2>The BHZ Model: First Quantum Spin Hall Insulator</h2>
        <p>
          The <strong>Bernevig–Hughes–Zhang (BHZ) model</strong> for a HgTe/CdTe quantum well
          is a $4\\times4$ block-diagonal Hamiltonian:
          $$H_{\\text{BHZ}} = \\begin{pmatrix}h(\\mathbf{k})&0\\\\0&h^*(-\\mathbf{k})\\end{pmatrix},
          \\quad \\mathbf{d} = (Ak_x,\\,-Ak_y,\\,M - B k^2)$$
        </p>
        <ul>
          <li><strong>$M/B > 0$:</strong> trivial (normal band ordering, like CdTe).</li>
          <li><strong>$M/B < 0$:</strong> QSHI (inverted ordering, like HgTe above $d_c \\approx 6.3\\,\\text{nm}$).</li>
        </ul>
        <p>
          <strong>König et al. (Science 2007):</strong> measured $G = 2e^2/h$ in the bulk
          gap for $d > d_c$ — two helical edge channels, one per edge. First experimental QSHI.
        </p>
      `,
    },

    {
      type: "mcq",
      question:
        "In HgTe/CdTe, the QSHI phase occurs because:",
      options: [
        "The magnetic field spontaneously aligns spins",
        "Strong SOC in HgTe inverts the $\\Gamma_6$ (s-like) and $\\Gamma_8$ (p-like) bands, giving $M/B < 0$ in BHZ",
        "The well width creates a simple harmonic potential",
        "TRS is broken by the interface",
      ],
      correct: [1],
      explanation:
        "Strong relativistic SOC from Hg inverts the band ordering at the $\\Gamma$ point. For $d > d_c$, the well is in the inverted regime ($M < 0$), TRS is preserved throughout, and helical edge states appear.",
    },

    {
      type: "text",
      data: `
        <h2>Kane–Mele Model & $\\mathbb{Z}_2$ Invariant</h2>
        <p>
          The Kane–Mele model is two copies of the Haldane model — one per spin — with
          TRS preserved by using opposite $\\phi$ for each spin:
          $H_\\uparrow = H_{\\text{Haldane}}(\\phi)$, $H_\\downarrow = H_{\\text{Haldane}}(-\\phi)$.
        </p>
        <p>
          The topological invariant is the <strong>$\\mathbb{Z}_2$ index</strong> $\\nu \\in \\{0,1\\}$:
          $$(-1)^\\nu = \\prod_{i=1}^{4}\\frac{\\text{Pf}[w(\\Gamma_i)]}{\\sqrt{\\det[w(\\Gamma_i)]}}$$
          evaluated at the four TRS-invariant momenta $\\Gamma_i$.
          $\\nu = 1$: topological QSHI; $\\nu = 0$: trivial.
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Chern Insulator vs. QSHI: Key Differences</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Property</th><th>Chern Insulator (Haldane)</th><th>QSHI (Kane–Mele)</th></tr>
          <tr><td>TRS</td><td>Broken</td><td>Preserved ($\\Theta^2=-1$)</td></tr>
          <tr><td>Invariant</td><td>$C\\in\\mathbb{Z}$</td><td>$\\nu\\in\\mathbb{Z}_2$</td></tr>
          <tr><td>Edge states</td><td>Chiral (one direction)</td><td>Helical (counter-propagating, spin-locked)</td></tr>
          <tr><td>$\\sigma_{xy}$</td><td>$Ce^2/h$</td><td>$0$; spin Hall $\\sigma_{sH} = e/(4\\pi)$</td></tr>
          <tr><td>Class</td><td>A</td><td>AII</td></tr>
          <tr><td>Backscattering</td><td>Forbidden by chirality</td><td>Forbidden by Kramers theorem (TRS)</td></tr>
        </table>
      `,
    },

    {
      type: "msq",
      question: "Which correctly distinguish QSHI from IQHE?",
      options: [
        "QSHI preserves TRS; IQHE breaks it",
        "QSHI has $\\mathbb{Z}_2$ invariant; IQHE has $\\mathbb{Z}$ (Chern) invariant",
        "QSHI has helical edge states; IQHE has chiral edge states",
        "Both require an external magnetic field",
      ],
      correct: [0, 1, 2],
      explanation:
        "A: IQHE needs external $B$ (breaks TRS); QSHI uses SOC (TRS preserved). B: $\\mathbb{Z}_2$ vs $\\mathbb{Z}$ invariants. C: helical vs chiral edge modes. D is wrong — QSHI requires no external field.",
    },

    {
      type: "mcq",
      question:
        "The QSHI in HgTe shows $G = 2e^2/h$ in the bulk gap. Why $2e^2/h$, not $e^2/h$?",
      options: [
        "Each electron carries twice the elementary charge",
        "Two helical edge channels — one at each edge of the sample — each carrying $e^2/h$",
        "The Chern number is $C = 2$",
        "The magnetic field doubles the conductance",
      ],
      correct: [1],
      explanation:
        "Each edge hosts one helical channel (spin-$\\uparrow$ right-movers + spin-$\\downarrow$ left-movers). Two edges contribute $e^2/h$ each via Landauer, giving $G = 2e^2/h$.",
    },
  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 7 (Week 7): FQHE & Laughlin States
// ═══════════════════════════════════════════════════════════════════════════

const ch7 = {
  title: "FQHE & Laughlin States",
  content: [

    {
      type: "text",
      data: `
        <h2>The Fractional Quantum Hall Effect</h2>
        <p>
          At very low temperature and high $B$, Hall conductivity is quantized at
          <em>fractional</em> values: $\\sigma_{xy} = \\frac{1}{3}\\frac{e^2}{h}$, $\\frac{2}{5}\\frac{e^2}{h}$, etc.
          This cannot arise from single-particle physics — the gap is generated entirely by
          <strong>electron-electron interactions</strong> within a partially filled Landau level.
        </p>
        <p>
          In symmetric gauge $\\mathbf{A} = \\frac{B}{2}(-y,x,0)$, LLL wavefunctions labelled by
          angular momentum $m$:
          $$\\psi_{0,m}(z) = \\mathcal{N}\\,z^m e^{-|z|^2/4\\ell_B^2}, \\qquad z = x+iy$$
          The $m$-th state peaks at radius $r_m \\approx \\ell_B\\sqrt{2m}$.
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The Laughlin Wavefunction</h2>
        <p>
          For $N$ electrons at $\\nu = 1/q$ ($q$ odd):
          $$\\Psi_{\\text{Laughlin}} = \\mathcal{N}\\prod_{i<j}(z_i - z_j)^q
          \\exp\\!\\left(-\\frac{1}{4\\ell_B^2}\\sum_i|z_i|^2\\right)$$
        </p>
        <ul>
          <li><strong>Jastrow factor</strong> $\\prod(z_i-z_j)^q$: keeps electrons far apart, minimizing Coulomb energy.</li>
          <li><strong>Antisymmetry</strong>: $(z_j-z_i)^q = (-1)^q(z_i-z_j)^q = -(z_i-z_j)^q$ only for odd $q$. ✓</li>
          <li><strong>Filling</strong>: maximum power of $z_1$ is $q(N-1)$, so $N_\\phi \\approx qN$, giving $\\nu = N/N_\\phi = 1/q$.</li>
        </ul>
        <p>
          <strong>Plasma analogy:</strong> Writing $|\\Psi|^2 = e^{-\\beta U_{\\text{cl}}}$,
          one gets a 2D one-component plasma with logarithmic repulsion.
          The plasma screens to uniform density $\\langle\\rho\\rangle = 1/(2\\pi\\ell_B^2 q)$,
          confirming $\\nu = 1/q$ non-perturbatively.
        </p>
      `,
    },

    {
      type: "mcq",
      question:
        "Why must $q$ in the Laughlin wavefunction $\\prod_{i<j}(z_i-z_j)^q$ be odd?",
      options: [
        "To make the wavefunction real",
        "To ensure the wavefunction vanishes when two electrons coincide",
        "To ensure antisymmetry: $(z_j-z_i)^q = -(z_i-z_j)^q$ only for odd $q$",
        "To give the correct Landau level index",
      ],
      correct: [2],
      explanation:
        "Fermionic antisymmetry requires $(-1)^q = -1$, i.e., $q$ odd. (The wavefunction also vanishes when $z_i = z_j$ for any $q \\geq 1$, so that alone does not distinguish odd $q$.)",
    },

    {
      type: "mcq",
      question:
        "The $\\nu = 1/3$ Laughlin state has $q = 3$. What is the charge of a Laughlin quasihole?",
      options: [
        "$e$ (one electron charge)",
        "$e/3$ (fractional charge)",
        "$3e$",
        "$e/2$",
      ],
      correct: [1],
      explanation:
        "Inserting one flux quantum at $z_0$ creates a quasihole $\\Psi_{\\text{qh}} = \\prod_i(z_i-z_0)\\cdot\\Psi_{\\text{Laughlin}}$ carrying charge $e^* = e/q = e/3$. Confirmed by shot-noise experiments.",
    },

    {
      type: "msq",
      question: "Which correctly describe the FQHE and Laughlin state?",
      options: [
        "The gap arises from electron-electron interactions, not single-particle physics",
        "The Laughlin state at $\\nu = 1/q$ is valid for $q = 1, 2, 3, \\ldots$ (both even and odd)",
        "The plasma analogy shows the Laughlin state has uniform electron density",
        "FQHE quasiparticles obey fractional (anyonic) statistics",
      ],
      correct: [0, 2, 3],
      explanation:
        "A: FQHE gaps come from Coulomb interactions. B is wrong — $q$ must be odd. C: plasma screening confirms uniform density. D: quasiparticles carry charge $e/q$ and anyonic statistics (phase $e^{i\\pi/q}$ on exchange).",
    },
  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 8 (Week 8): Composite Fermions & 3D Topological Insulators
// ═══════════════════════════════════════════════════════════════════════════

const ch8 = {
  title: "Composite Fermions & 3D Topological Insulators",
  content: [

    {
      type: "text",
      data: `
        <h2>Composite Fermions: FQHE from Integer QHE of CFs</h2>
        <p>
          A <strong>composite fermion</strong> is an electron bound to $2p$ flux quanta.
          The attached flux partially cancels the external field, so CFs see:
          $$B^* = B - 2p\\,\\Phi_0 n_s$$
          CFs fill their own integer Landau levels in $B^*$.
          CF filling $\\nu^*$ maps to electron filling:
          $$\\nu = \\frac{\\nu^*}{2p\\nu^* \\pm 1}$$
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; font-size:13px;">
          <tr><th>CF filling $\\nu^*$</th><th>Electron filling $\\nu$ ($p=1$)</th></tr>
          <tr><td>1</td><td>1/3</td></tr>
          <tr><td>2</td><td>2/5</td></tr>
          <tr><td>3</td><td>3/7</td></tr>
          <tr><td>4</td><td>4/9</td></tr>
        </table>
      `,
    },

    {
      type: "mcq",
      question:
        "With $2p = 2$ flux quanta attached, CF filling $\\nu^* = 2$ gives electron filling:",
      options: ["$\\nu = 2/3$", "$\\nu = 2/5$", "$\\nu = 1/3$", "$\\nu = 1/2$"],
      correct: [1],
      explanation:
        "$\\nu = \\nu^*/(2p\\nu^* + 1) = 2/(2\\cdot1\\cdot2+1) = 2/5$. CFs at $\\nu^* = 2$ fill two of their own Landau levels, corresponding to electrons at $\\nu = 2/5$.",
    },

    {
      type: "text",
      data: `
        <h2>3D Topological Insulators</h2>
        <p>
          A <strong>3D TI</strong> has a bulk gap like an ordinary insulator, but topologically
          protected <strong>surface states on every surface</strong>: a single Dirac cone that
          cannot exist in a purely 2D TRS-preserving system.
        </p>
        <p>
          <strong>Surface Hamiltonian</strong> (for normal $\\hat{z}$):
          $$H_{\\text{surf}} = \\hbar v_F(\\sigma_x k_y - \\sigma_y k_x)$$
          Spin is perpendicular to $\\mathbf{k}$ — <strong>spin-momentum locking</strong>.
          TRS-preserving perturbations cannot gap the surface (a mass $m\\sigma_z$ is odd under $\\Theta$).
          Only magnetic impurities can open a gap at the Dirac point.
        </p>
        <h2>Classification: Strong vs. Weak TI</h2>
        <p>
          Four $\\mathbb{Z}_2$ invariants $(\\nu_0;\\nu_1\\nu_2\\nu_3)$:
          $\\nu_0 = 1$ → <strong>strong TI</strong> (surface states on every surface).
          $\\nu_0 = 0$, others non-zero → weak TI. $(0;000)$ → trivial.
        </p>
        <p>
          <strong>Materials:</strong>
          $\\text{Bi}_x\\text{Sb}_{1-x}$ (2008, first 3D TI);
          $\\text{Bi}_2\\text{Se}_3$ (2009, single clean Dirac cone, gap $\\sim 0.3$ eV);
          $\\text{Bi}_2\\text{Te}_3$, $\\text{Sb}_2\\text{Te}_3$.
        </p>
      `,
    },

    {
      type: "mcq",
      question:
        "A 3D TI surface state has spin-momentum locking. This means:",
      options: [
        "The spin is always parallel to the momentum",
        "The spin is perpendicular to $\\mathbf{k}$ and lies in the surface plane — spin rotates as you traverse the Fermi surface",
        "The spin is aligned with the surface normal",
        "The spin and momentum are always anti-parallel",
      ],
      correct: [1],
      explanation:
        "From $H_{\\text{surf}} = \\hbar v_F(\\sigma_x k_y - \\sigma_y k_x)$, the spin eigenstate is perpendicular to $\\mathbf{k}$ in the surface plane. Going around the Fermi circle, spin rotates by $2\\pi$, giving Berry phase $\\pi$ — protecting the surface state from backscattering.",
    },

    {
      type: "msq",
      question: "Which signatures distinguish a 3D TI from an ordinary insulator?",
      options: [
        "Bulk energy gap (both have this)",
        "A single spin-non-degenerate Dirac cone on the surface (seen by ARPES)",
        "Spin-momentum locking of surface states",
        "Surface states gapped by non-magnetic impurities",
      ],
      correct: [1, 2],
      explanation:
        "A: both have a bulk gap — not a distinguishing feature. B: a single Dirac cone on every surface is the hallmark of a strong 3D TI. C: spin-momentum locking follows directly from the surface Hamiltonian. D is wrong — only magnetic impurities (breaking TRS) can gap the surface state.",
    },

    {
      type: "mcq",
      question:
        "The key mechanism creating a 3D TI in $\\text{Bi}_2\\text{Se}_3$ is:",
      options: [
        "Strong magnetic ordering inverts the bands",
        "Strong SOC from Bi (heavy element, $Z = 83$) inverts bands at $\\Gamma$",
        "The crystal has no inversion symmetry",
        "Electron-electron interactions open a Mott gap",
      ],
      correct: [1],
      explanation:
        "Large SOC from Bi shifts the Bi $p$-orbital and Se $p$-orbital bands, inverting their ordering at $\\Gamma$. This changes $\\nu_0$ from 0 to 1 — a strong TI with bulk gap $\\sim 0.3$ eV and one surface Dirac cone.",
    },
  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 9 (Supplementary): Key Tools, Intuition & Connections
// ═══════════════════════════════════════════════════════════════════════════

const ch9 = {
  title: "Key Tools, Intuition & Connections",
  content: [

    {
      type: "text",
      data: `
        <h2>Essential Mathematical Tools</h2>
        <h3>Pauli Matrices</h3>
        <p>
          $$\\sigma_x = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\quad
          \\sigma_y = \\begin{pmatrix}0&-i\\\\i&0\\end{pmatrix},\\quad
          \\sigma_z = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$$
          $\\sigma_i^2 = I$; $[\\sigma_i,\\sigma_j] = 2i\\epsilon_{ijk}\\sigma_k$;
          $\\{\\sigma_i,\\sigma_j\\} = 2\\delta_{ij}$.
          For $H = \\mathbf{d}\\cdot\\boldsymbol{\\sigma}$: eigenvalues $\\pm|\\mathbf{d}|$.
        </p>
        <h3>Key Formulae Quick Reference</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Quantity</th><th>Formula</th></tr>
          <tr><td>Berry connection</td><td>$\\mathcal{A}_n = i\\langle u_n|\\nabla_k|u_n\\rangle$</td></tr>
          <tr><td>Berry curvature</td><td>$\\Omega_n = \\nabla_k\\times\\mathcal{A}_n$</td></tr>
          <tr><td>Chern number</td><td>$C = \\frac{1}{2\\pi}\\int_{\\text{BZ}}\\Omega_n\\,d^2k$</td></tr>
          <tr><td>Winding number</td><td>$w = \\frac{1}{2\\pi}\\oint\\partial_k\\varphi\\,dk$</td></tr>
          <tr><td>Hall conductivity</td><td>$\\sigma_{xy} = C\\cdot e^2/h$</td></tr>
          <tr><td>Landau levels</td><td>$E_n = \\hbar\\omega_c(n+\\frac{1}{2})$</td></tr>
          <tr><td>Filling fraction</td><td>$\\nu = n_s h/(eB)$</td></tr>
          <tr><td>Laughlin state</td><td>$\\Psi = \\mathcal{N}\\prod_{i<j}(z_i-z_j)^q e^{-\\sum|z_i|^2/4\\ell_B^2}$</td></tr>
          <tr><td>CF effective field</td><td>$B^* = B - 2p\\Phi_0 n_s$</td></tr>
          <tr><td>CF filling</td><td>$\\nu = \\nu^*/(2p\\nu^*\\pm 1)$</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The Unifying Thread</h2>
        <p>All models in this course share the same structure:</p>
        <ol>
          <li>A <strong>gapped Hamiltonian</strong> parameterised by $\\mathbf{k}$.</li>
          <li>A <strong>topological invariant</strong> (winding number, Chern, $\\mathbb{Z}_2$) computed from bulk wavefunctions over the BZ.</li>
          <li><strong>Protected boundary modes</strong> guaranteed by a non-zero invariant.</li>
          <li><strong>Physical consequences:</strong> quantized $\\sigma_{xy}$, fractional charge, protected conduction.</li>
        </ol>
        <h2>Experimental Milestones</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>System</th><th>Signature</th><th>Year</th></tr>
          <tr><td>IQHE</td><td>$\\sigma_{xy} = \\nu e^2/h$</td><td>von Klitzing (1980)</td></tr>
          <tr><td>FQHE</td><td>$\\sigma_{xy} = \\frac{1}{3}e^2/h$</td><td>Tsui & Störmer (1982)</td></tr>
          <tr><td>2D TI (HgTe)</td><td>$G = 2e^2/h$ in gap</td><td>König et al. (2007)</td></tr>
          <tr><td>3D TI (Bi₂Se₃)</td><td>Single Dirac cone (ARPES)</td><td>Hasan group (2009)</td></tr>
          <tr><td>Kitaev/Majorana</td><td>Zero-bias peak ($dI/dV$)</td><td>Mourik et al. (2012)</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Exam Strategy: How to Tackle Common Question Types</h2>
        <h3>1. Identifying the topological phase from $H(\\mathbf{k}) = \\mathbf{d}\\cdot\\boldsymbol{\\sigma}$</h3>
        <p>
          (i) Extract $d_x, d_y, d_z$.
          (ii) If $d_z = 0$ (1D + chiral symmetry): compute winding number of $(d_x, d_y)$ around origin.
          (iii) If $d_z \\neq 0$ (2D): compute Chern number.
          (iv) Find gap-closing points: $|\\mathbf{d}| = 0$.
          (v) Invariant changes at gap-closing.
        </p>
        <h3>2. Results to have at your fingertips</h3>
        <ul>
          <li>SSH: $w = 0$ ($t_1 > t_2$), $w = 1$ ($t_2 > t_1$), gap $= 2|t_1 - t_2|$</li>
          <li>Kitaev: topological iff $|\\mu| < 2t$; Majoranas satisfy $\\gamma = \\gamma^\\dagger$, $\\gamma^2 = 1$</li>
          <li>QHE: incompressibility ↔ gap; TKNN: $\\sigma_{xy} = Ce^2/h$, $C \\in \\mathbb{Z}$</li>
          <li>Haldane: TRS-breaking via $t_2 e^{i\\phi}$; $C = \\frac{1}{2}[\\text{sgn}(m_K) - \\text{sgn}(m_{K'})]$</li>
          <li>Graphene: $C = 0$ because TRS maps $K \\leftrightarrow K'$</li>
          <li>$\\mathbb{Z}_2$ invariant: parity of Kramers pairs crossing Fermi level at TRIM</li>
          <li>Laughlin: $\\nu = 1/q$, $q$ odd; quasihole charge $e^* = e/q$</li>
          <li>CF: $B^* = B - 2p\\Phi_0 n_s$; $\\nu = \\nu^*/(2p\\nu^*\\pm 1)$</li>
        </ul>
      `,
    },

    {
      type: "msq",
      question: "Which statements about topological invariants are correct?",
      options: [
        "The SSH winding number $w$ is a $\\mathbb{Z}$ invariant protected by chiral symmetry",
        "The Chern number of the QHE/Haldane model requires broken TRS (or absent TRS)",
        "The $\\mathbb{Z}_2$ invariant of the QSHI is protected by TRS with $\\Theta^2 = -1$",
        "All topological invariants are computed from the bulk band structure (bulk-boundary correspondence)",
      ],
      correct: [0, 1, 2, 3],
      explanation:
        "All four are correct. A: SSH class BDI, $w \\in \\mathbb{Z}$. B: intact TRS forces $C = 0$ in 2D. C: class AII, $\\mathbb{Z}_2$. D: bulk-boundary correspondence is the central theorem of the field.",
    },

    {
      type: "mcq",
      question:
        "A sample has $H(k) = (m+\\cos k)\\sigma_z + \\sin k\\,\\sigma_x$ with $m = 0$. Which phase?",
      options: [
        "Trivial: $C = 0$ since $m > -1$",
        "Topological: the $d_z = \\cos k$ component changes sign, placing the system in $-1 < m < 1$",
        "Phase boundary: the gap closes at $k = 0$",
        "Trivial: $C = 0$ since $m < 1$",
      ],
      correct: [1],
      explanation:
        "With $m = 0$: $d_z = \\cos k$ (positive at $k=0$, negative at $k=\\pi$) and $d_x = \\sin k$. The regime $-1 < m < 1$ is topological with $C = 1$. Gap closes only at $m = \\pm 1$.",
    },
  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// BOOK EXPORT — standard { title, chapters } shape
// ═══════════════════════════════════════════════════════════════════════════

export const topologyCondensedMatter = {
  title: "Topology & Condensed Matter",
  chapters: [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9],
};