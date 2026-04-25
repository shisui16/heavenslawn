/**
 * Book: Electromagnetism
 * Chapters:
 *   1. Electrostatics
 *   2. Magnetostatics
 *   3. Maxwell's Equations
 */

export const electromagnetism = {
  title: "Electromagnetism",

  chapters: [

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 1 – Electrostatics
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Electrostatics",
      content: [
        {
          type: "text",
          data: `
            <h2>Coulomb's Law</h2>
            <p>
              The electrostatic force between two point charges $q_1$ and $q_2$ separated by distance $r$:
              $$\\mathbf{F} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1 q_2}{r^2}\\hat{r}$$
              where $k_e = 1/(4\\pi\\epsilon_0) \\approx 8.99\\times10^9\\,\\text{N·m}^2\\text{/C}^2$.
            </p>
            <h2>Electric Field</h2>
            <p>
              The electric field due to charge $q$ at position $\\mathbf{r}$:
              $$\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\hat{r}$$
              Units: N/C or V/m. Superposition applies: fields add vectorially.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "Two equal charges $q = 1\\,\\mu\\text{C}$ are separated by $r = 1\\,\\text{m}$. The Coulomb force between them is approximately:",
          options: [
            "$8.99\\times10^{-3}\\,\\text{N}$",
            "$8.99\\times10^{-3}\\,\\text{N}$ repulsive",
            "$9\\times10^{3}\\,\\text{N}$",
            "$8.99\\,\\text{N}$",
          ],
          correct: [1],
          explanation: "$F = k_e q^2/r^2 = 8.99\\times10^9 \\times (10^{-6})^2/1^2 = 8.99\\times10^{-3}\\,\\text{N}$, repulsive since charges have the same sign.",
        },
        {
          type: "numeric",
          question: "A charge $q = 2\\,\\mu\\text{C}$ sits at the origin. What is the magnitude of the electric field at $r = 1\\,\\text{m}$? Give your answer in N/C. Use $k_e = 9\\times10^9$.",
          answer: "17980 N/C",
          tolerance: 0.02,
          hint: "$E = k_e q / r^2$",
          explanation: "$E = 9\\times10^9 \\times 2\\times10^{-6} / 1 = 1.798\\times10^4 \\approx 17980\\,\\text{N/C}$.",
        },
        {
          type: "text",
          data: `
            <h2>Electric Potential</h2>
            <p>
              The electric potential (voltage) due to a point charge:
              $$V = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r}$$
              The field is the negative gradient of the potential:
              $$\\mathbf{E} = -\\nabla V$$
            </p>
            <h2>Gauss's Law</h2>
            <p>
              The total electric flux through any closed surface equals the enclosed charge divided by $\\epsilon_0$:
              $$\\oint_S \\mathbf{E}\\cdot d\\mathbf{A} = \\frac{Q_{\\text{enc}}}{\\epsilon_0}$$
              Enormously useful for highly symmetric charge distributions.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "Using Gauss's law, the electric field outside a uniformly charged sphere of total charge $Q$ and radius $R$ (at distance $r > R$) is:",
          options: [
            "$E = Q/(4\\pi\\epsilon_0 R^2)$, independent of $r$",
            "$E = Q/(4\\pi\\epsilon_0 r^2)$, same as a point charge",
            "$E = 0$",
            "$E = Qr/(4\\pi\\epsilon_0 R^3)$",
          ],
          correct: [1],
          explanation: "By Gauss's law with a spherical surface at $r>R$: $E\\cdot 4\\pi r^2 = Q/\\epsilon_0$, giving $E = Q/(4\\pi\\epsilon_0 r^2)$ — identical to a point charge.",
        },
        {
          type: "msq",
          question: "Which statements about electric field lines are correct?",
          options: [
            "They begin on positive charges and end on negative charges",
            "Field lines can cross each other",
            "The density of lines represents field magnitude",
            "They are always perpendicular to equipotential surfaces",
          ],
          correct: [0, 2, 3],
          explanation: "B is false: if field lines crossed, the field would have two directions at one point — impossible. A, C, D are all correct properties.",
        },
        {
          type: "numeric",
          question: "A parallel-plate capacitor has plate separation $d = 2\\,\\text{mm} = 0.002\\,\\text{m}$ and voltage $V = 100\\,\\text{V}$. What is the electric field magnitude between the plates? Give in V/m.",
          answer: "50000 V/m",
          tolerance: 0.02,
          hint: "$E = V/d$ for uniform field.",
          explanation: "$E = 100/0.002 = 50000\\,\\text{V/m}$.",
        },
        {
          type: "mcq",
          question: "The work done in moving a charge $q$ from potential $V_A$ to $V_B$ is:",
          options: [
            "$W = q(V_A - V_B)$",
            "$W = q(V_B - V_A)$",
            "$W = q^2(V_B - V_A)$",
            "$W = (V_A - V_B)/q$",
          ],
          correct: [0],
          explanation: "$W = \\Delta PE = q(V_A-V_B)$. Work done by the field as the charge moves from higher to lower potential is positive.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 2 – Magnetostatics
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Magnetostatics",
      content: [
        {
          type: "text",
          data: `
            <h2>Magnetic Force</h2>
            <p>
              A charge $q$ moving with velocity $\\mathbf{v}$ in field $\\mathbf{B}$ experiences:
              $$\\mathbf{F} = q\\mathbf{v}\\times\\mathbf{B}$$
              Combined with electric force: $\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v}\\times\\mathbf{B})$ — the <strong>Lorentz force</strong>.
            </p>
            <p>
              Key property: the magnetic force is always <em>perpendicular</em> to $\\mathbf{v}$,
              so it does <strong>no work</strong> on the charge.
            </p>
            <h2>Biot–Savart Law</h2>
            <p>
              The magnetic field due to a current element $I\\,d\\mathbf{l}$:
              $$d\\mathbf{B} = \\frac{\\mu_0}{4\\pi}\\frac{I\\,d\\mathbf{l}\\times\\hat{r}}{r^2}$$
              where $\\mu_0 = 4\\pi\\times10^{-7}\\,\\text{T·m/A}$.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "A proton moves in the $+x$ direction through a magnetic field $\\mathbf{B} = B\\hat{z}$. The magnetic force on the proton is:",
          options: [
            "$+y$ direction",
            "$-y$ direction",
            "$+z$ direction",
            "Zero — it's parallel to $B$",
          ],
          correct: [1],
          explanation: "$\\mathbf{F} = q\\mathbf{v}\\times\\mathbf{B} = q(v\\hat{x})\\times(B\\hat{z}) = qvB(\\hat{x}\\times\\hat{z}) = -qvB\\hat{y}$. For $q>0$: force is in $-y$.",
        },
        {
          type: "mcq",
          question: "A charged particle moves perpendicular to a uniform magnetic field. Its path is:",
          options: [
            "A straight line",
            "A parabola",
            "A circle",
            "A spiral",
          ],
          correct: [2],
          explanation: "The magnetic force provides centripetal acceleration. Since $|\\mathbf{F}|=qvB=\\text{const}$ and always perpendicular to $\\mathbf{v}$, the particle moves in a circle of radius $r=mv/(qB)$.",
        },
        {
          type: "text",
          data: `
            <h2>Ampère's Law</h2>
            <p>
              For a closed loop encircling current $I_{\\text{enc}}$:
              $$\\oint_C \\mathbf{B}\\cdot d\\mathbf{l} = \\mu_0 I_{\\text{enc}}$$
              Analogous to Gauss's law for $\\mathbf{E}$. Very useful for symmetric current distributions.
            </p>
            <h2>Field of an Infinite Wire</h2>
            <p>
              Applying Ampère's law to a circular loop of radius $r$ around a long straight wire:
              $$B\\cdot 2\\pi r = \\mu_0 I \\implies B = \\frac{\\mu_0 I}{2\\pi r}$$
              The field circles around the wire (right-hand rule).
            </p>
          `,
        },
        {
          type: "numeric",
          question: "A long straight wire carries $I = 10\\,\\text{A}$. What is $B$ at $r = 5\\,\\text{cm} = 0.05\\,\\text{m}$? Give in $\\mu\\text{T}$ (i.e. $\\times10^{-6}\\,\\text{T}$). Use $\\mu_0=4\\pi\\times10^{-7}$.",
          answer: "40 μT",
          tolerance: 0.03,
          hint: "$B = \\mu_0 I/(2\\pi r) = (4\\pi\\times10^{-7}\\times10)/(2\\pi\\times0.05)$",
          explanation: "$B = (4\\pi\\times10^{-6})/(2\\pi\\times0.05) = (4\\times10^{-6})/0.1 = 4\\times10^{-5}\\,\\text{T} = 40\\,\\mu\\text{T}$.",
        },
        {
          type: "msq",
          question: "Which of the following are true about magnetic monopoles?",
          options: [
            "They have never been experimentally observed",
            "Their existence would modify Gauss's law for magnetism",
            "$\\nabla\\cdot\\mathbf{B}=0$ implies they do not exist (in classical EM)",
            "They are predicted by some grand unified theories",
          ],
          correct: [0, 1, 2, 3],
          explanation: "All four are correct. Magnetic monopoles remain theoretically possible (and GUTs predict them) but no experiment has confirmed their existence. $\\nabla\\cdot\\mathbf{B}=0$ is the classical statement that monopoles don't exist.",
        },
        {
          type: "numeric",
          question: "A circular loop of radius $R=0.1\\,\\text{m}$ carries current $I=5\\,\\text{A}$. The magnetic field at the centre is $B=\\mu_0 I/(2R)$. Compute $B$ in $\\mu$T. Use $\\mu_0=4\\pi\\times10^{-7}$.",
          answer: "31.4 μT",
          tolerance: 0.02,
          hint: "$B = (4\\pi\\times10^{-7}\\times5)/(2\\times0.1)$",
          explanation: "$B = (2\\pi\\times10^{-6})/(0.2) = \\pi\\times10^{-5} \\approx 31.4\\,\\mu\\text{T}$.",
        },
        {
          type: "mcq",
          question: "The cyclotron radius of a proton ($m=1.67\\times10^{-27}\\,\\text{kg}$, $q=1.6\\times10^{-19}\\,\\text{C}$) moving at $v=10^6\\,\\text{m/s}$ in $B=1\\,\\text{T}$ is $r=mv/(qB)$. Approximately:",
          options: ["$r\\approx1\\,\\text{cm}$","$r\\approx1\\,\\text{mm}$","$r\\approx10\\,\\text{m}$","$r\\approx1\\,\\mu\\text{m}$"],
          correct: [0],
          explanation: "$r = (1.67\\times10^{-27}\\times10^6)/(1.6\\times10^{-19}\\times1) \\approx 10^{-2}\\,\\text{m} = 1\\,\\text{cm}$.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 3 – Maxwell's Equations
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Maxwell's Equations",
      content: [
        {
          type: "text",
          data: `
            <h2>The Four Equations</h2>
            <p>
              Maxwell's equations unify all classical electromagnetism. In differential form:
            </p>
            <p>
              $$\\nabla\\cdot\\mathbf{E} = \\frac{\\rho}{\\epsilon_0} \\qquad \\text{(Gauss, electric)}$$
              $$\\nabla\\cdot\\mathbf{B} = 0 \\qquad \\text{(Gauss, magnetic — no monopoles)}$$
              $$\\nabla\\times\\mathbf{E} = -\\frac{\\partial\\mathbf{B}}{\\partial t} \\qquad \\text{(Faraday)}$$
              $$\\nabla\\times\\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\epsilon_0\\frac{\\partial\\mathbf{E}}{\\partial t} \\qquad \\text{(Ampère–Maxwell)}$$
            </p>
            <p>
              Maxwell's crucial addition was the <strong>displacement current</strong> $\\mu_0\\epsilon_0\\,\\partial\\mathbf{E}/\\partial t$,
              which completed Ampère's law and predicted electromagnetic waves.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "Which Maxwell equation encodes the fact that magnetic monopoles don't exist in classical EM?",
          options: [
            "$\\nabla\\cdot\\mathbf{E} = \\rho/\\epsilon_0$",
            "$\\nabla\\cdot\\mathbf{B} = 0$",
            "$\\nabla\\times\\mathbf{E} = -\\partial\\mathbf{B}/\\partial t$",
            "$\\nabla\\times\\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\epsilon_0\\,\\partial\\mathbf{E}/\\partial t$",
          ],
          correct: [1],
          explanation: "$\\nabla\\cdot\\mathbf{B}=0$ says the divergence of $\\mathbf{B}$ is zero everywhere — no sources or sinks of magnetic field lines, i.e., no magnetic monopoles.",
        },
        {
          type: "mcq",
          question: "Faraday's law $\\nabla\\times\\mathbf{E} = -\\partial\\mathbf{B}/\\partial t$ states that:",
          options: [
            "A changing electric field produces a magnetic field",
            "A changing magnetic field produces a (rotational) electric field",
            "Electric field lines form closed loops",
            "The magnetic flux is conserved",
          ],
          correct: [1],
          explanation: "A time-varying $\\mathbf{B}$ induces a curl in $\\mathbf{E}$ — the basis of electromagnetic induction and Faraday's law of induction.",
        },
        {
          type: "text",
          data: `
            <h2>Electromagnetic Waves</h2>
            <p>
              In free space ($\\rho=0$, $\\mathbf{J}=0$), combining Faraday and Ampère–Maxwell:
              $$\\nabla^2\\mathbf{E} = \\mu_0\\epsilon_0\\frac{\\partial^2\\mathbf{E}}{\\partial t^2}$$
              This is the wave equation. The speed of propagation is:
              $$c = \\frac{1}{\\sqrt{\\mu_0\\epsilon_0}} \\approx 3\\times10^8\\,\\text{m/s}$$
              This identified light as an electromagnetic wave — one of Maxwell's greatest triumphs.
            </p>
            <h2>Electromagnetic Spectrum</h2>
            <p>
              All electromagnetic waves travel at $c$ in vacuum. They differ only in frequency $f$ (and wavelength $\\lambda = c/f$): radio, microwave, IR, visible, UV, X-ray, gamma.
            </p>
          `,
        },
        {
          type: "numeric",
          question: "Using $c = 1/\\sqrt{\\mu_0\\epsilon_0}$ with $\\mu_0 = 4\\pi\\times10^{-7}$ and $\\epsilon_0 = 8.85\\times10^{-12}$, compute $c$ in $10^8\\,\\text{m/s}$. Enter just the coefficient (put <code>1</code> in unit field).",
          answer: "3 1",
          tolerance: 0.02,
          hint: "$\\mu_0\\epsilon_0 = 4\\pi\\times10^{-7}\\times8.85\\times10^{-12} \\approx 1.11\\times10^{-17}$, then $1/\\sqrt{\\cdot}$.",
          explanation: "$\\sqrt{1/(1.11\\times10^{-17})} \\approx 3\\times10^8\\,\\text{m/s}$.",
        },
        {
          type: "msq",
          question: "Which of the following are properties of electromagnetic waves in vacuum?",
          options: [
            "$\\mathbf{E}$ and $\\mathbf{B}$ are perpendicular to each other and to the direction of propagation",
            "They require a medium to propagate",
            "$|\\mathbf{E}|/|\\mathbf{B}| = c$",
            "They carry both energy and momentum",
          ],
          correct: [0, 2, 3],
          explanation: "B is false — EM waves propagate in vacuum. A (transverse), C (impedance relation), and D (Poynting vector, radiation pressure) are all correct.",
        },
        {
          type: "mcq",
          question: "The displacement current $\\epsilon_0\\,\\partial\\mathbf{E}/\\partial t$ was introduced by Maxwell to:",
          options: [
            "Fix a sign error in Faraday's law",
            "Ensure charge conservation and allow EM waves to exist",
            "Explain the photoelectric effect",
            "Account for resistive losses in conductors",
          ],
          correct: [1],
          explanation: "Without it, Ampère's law violated the continuity equation (charge conservation) for time-varying fields. Adding displacement current restored consistency — and predicted propagating EM waves.",
        },
        {
          type: "mcq",
          question: "The Poynting vector $\\mathbf{S} = \\mathbf{E}\\times\\mathbf{B}/\\mu_0$ represents:",
          options: [
            "The charge density of the EM field",
            "The energy flux (power per unit area) of the EM field",
            "The momentum of individual photons",
            "The force on a current-carrying wire",
          ],
          correct: [1],
          explanation: "$\\mathbf{S}$ has units W/m² and gives the direction and magnitude of energy transport in the field — used e.g. to calculate the intensity of a laser beam.",
        },
      ],
    },
  ],
};
