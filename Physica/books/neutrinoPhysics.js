/**
 * Book: Neutrino Physics
 * Based on: "Neutrino Physics: an Introduction" by Amol Dighe (SERC School, IIT Kanpur 2004)
 * Supplemented with material from Mohapatra & Pal, "Massive Neutrinos in Physics and Astrophysics"
 *
 * Chapters:
 *   1. Neutrinos in the Standard Model: Massless Neutrinos
 *   2. Atmospheric Neutrinos and Two-Flavour Vacuum Oscillations
 *   3. Two-Neutrino Mixing in Matter (MSW Effect)
 *   4. Solar Neutrinos: Problem and Solution
 *   5. Three-Neutrino Mixing Framework
 *   6. Dirac vs. Majorana Neutrinos
 *   7. Neutrino Mass Models
 *   8. Neutrinos in Astrophysics and Cosmology
 *   9. Current and Future Experiments
 */

export const neutrinoPhysics = {
  title: "Neutrino Physics",

  chapters: [

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 1 – Neutrinos in the Standard Model: Massless Neutrinos
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Neutrinos in the Standard Model: Massless Neutrinos",
      content: [
        {
          type: "text",
          data: `
            <h2>Historical Motivation: The Beta Decay Puzzle</h2>
            <p>
              In a two-body nuclear decay, conservation of energy and momentum fixes the energies of both
              products uniquely. However, the electrons emitted in nuclear beta decay were observed to have
              a <em>continuous</em> energy spectrum — a profound puzzle that threatened the conservation laws.
              In 1930 (published 1932), Wolfgang Pauli proposed a desperate remedy: a new, invisible,
              chargeless, nearly massless particle must be carrying away the missing energy and momentum.
              Fermi named it the <strong>neutrino</strong> ($\\nu$).
            </p>
            <p>
              When beta decay is treated as a three-body process $n \\to p + e^- + \\bar\\nu_e$, the
              differential decay rate becomes:
              $$\\frac{d\\Gamma}{dE_e} \\propto p_e E_e (E_0 - E_e)\\sqrt{(E_0-E_e)^2 - m_\\nu^2}$$
              where $p_e$, $E_e$ are the electron momentum and energy, $m_\\nu$ is the neutrino mass, and
              $E_0 \\equiv Q - m_e - m_\\nu$ is the kinematic endpoint. This perfectly explains the
              continuous spectrum. The <strong>Kurie plot</strong>
              $$K(E_e) \\propto \\left[(E_0-E_e)\\sqrt{(E_0-E_e)^2 - m_\\nu^2}\\right]^{1/2}$$
              is linear in $E_e$ for $m_\\nu = 0$ and curves near the endpoint if $m_\\nu > 0$.
              Modern tritium beta-decay experiments set $m_{\\nu_e} < 2.2\\,\\text{eV}$ (95% C.L.).
            </p>
            <h2>Discovery of the Three Neutrino Flavours</h2>
            <p>
              <strong>$\\nu_e$:</strong> First directly detected by Reines and Cowan (1956) via
              $\\bar\\nu_e + p \\to n + e^+$ in a reactor experiment. Coincident signals from positron
              annihilation and neutron capture in CdCl$_2$ confirmed the reaction.
            </p>
            <p>
              <strong>$\\nu_\\mu$:</strong> Discovered at Brookhaven (1962) by Danby et al. Pion decays
              ($\\pi^+ \\to \\mu^+ + \\nu_\\mu$) provided a neutrino beam; interactions produced only muons,
              never electrons — proving $\\nu_\\mu \\ne \\nu_e$ and establishing lepton flavour.
            </p>
            <p>
              <strong>$\\nu_\\tau$:</strong> Directly observed in 2000 at the DONUT experiment at Fermilab,
              through detection of the $\\tau$ lepton produced in $\\nu_\\tau N \\to \\tau N'$.
            </p>
            <h2>Neutrino Interactions in the Standard Model</h2>
            <p>
              Neutrinos interact <em>only</em> via the weak force. The two interaction types are:
            </p>
            <p>
              <strong>Charged Current (CC):</strong>
              $$\\mathcal{L}_{CC} = \\frac{g}{2\\sqrt{2}}\\,\\bar\\ell\\,\\gamma^\\mu(1-\\gamma^5)\\nu\\,W^-_\\mu + \\text{h.c.}$$
              This couples a neutrino to its charged lepton partner through the $W^\\pm$ boson. Only
              $\\nu_e$ couples to $e$, $\\nu_\\mu$ to $\\mu$, etc. — this is lepton flavour.
            </p>
            <p>
              <strong>Neutral Current (NC):</strong>
              $$\\mathcal{L}_{NC} = \\frac{g}{2\\cos\\theta_W}\\,\\bar\\nu\\,\\gamma^\\mu(1-\\gamma^5)\\nu\\,Z_\\mu$$
              This couples any neutrino flavour to the $Z^0$ boson equally.
            </p>
            <p>
              The chiral projection operator $P_L = (1-\\gamma^5)/2$ in both interactions ensures only
              <strong>left-handed</strong> neutrinos ($\\nu_L$) and right-handed antineutrinos ($\\bar\\nu_R$)
              participate. Because no right-handed neutrino $\\nu_R$ exists in the Standard Model,
              neutrinos <em>cannot acquire a Dirac mass</em> through the Higgs mechanism like quarks and
              charged leptons.
            </p>
            <h2>Counting Neutrino Species: The Z Lineshape</h2>
            <p>
              The $Z^0$ boson decays to all particle–antiparticle pairs lighter than $M_Z/2 \\approx 45.6\\,\\text{GeV}$.
              Decays to $\\nu\\bar\\nu$ are invisible (no detector signal). By measuring the total $Z$ width
              $\\Gamma_Z$ (from the lineshape) and subtracting the visible partial widths to quarks and
              charged leptons, the invisible width is:
              $$\\Gamma_{\\text{inv}} = N_\\nu \\cdot \\Gamma(Z \\to \\nu\\bar\\nu)$$
              The LEP experiments obtained $N_\\nu = 2.994 \\pm 0.012$ — exactly three light, active
              neutrino species. Any additional neutrino must either be very heavy ($> M_Z/2$) or sterile
              (no weak coupling).
            </p>
          `,
        },
        {
          type: "mcq",
          question: "What was the key experimental observation that led Pauli to propose the neutrino?",
          options: [
            "The electron from beta decay was always emitted at a fixed energy",
            "The electron energy spectrum in beta decay was continuous, with energy apparently missing",
            "Beta decay violated charge conservation",
            "The rate of beta decay was too slow to be explained by existing theory",
          ],
          correct: [1],
          explanation: "In a two-body decay, both product energies are fixed by kinematics. The observed continuous electron spectrum implied a third, invisible particle was carrying variable amounts of energy — Pauli's neutrino.",
        },
        {
          type: "mcq",
          question: "In the Standard Model, neutrinos cannot acquire a mass through the Higgs mechanism because:",
          options: [
            "Neutrinos are too light to couple to the Higgs",
            "The Higgs boson only couples to particles with colour charge",
            "There is no right-handed neutrino $\\nu_R$ in the SM, so no Dirac mass term $\\bar\\nu_L m \\nu_R$ can be written",
            "The neutral current interaction forbids it",
          ],
          correct: [2],
          explanation: "The SM Higgs Yukawa mass term requires both chiralities: $-y\\bar\\psi_L\\phi\\psi_R + \\text{h.c.}$. Since $\\nu_R$ is absent from the SM particle content, no such term exists for neutrinos.",
        },
        {
          type: "mcq",
          question: "The DONUT experiment (2000) discovered the tau neutrino by:",
          options: [
            "Measuring the mass of $\\nu_\\tau$ directly in a magnetic spectrometer",
            "Detecting $\\tau$ leptons produced in $\\nu_\\tau N \\to \\tau N'$ through hadronic $\\tau$ decays",
            "Observing oscillations of $\\nu_\\mu$ into $\\nu_\\tau$ in a long-baseline experiment",
            "Measuring the missing energy in $Z \\to \\tau^+\\tau^-$ decays at LEP",
          ],
          correct: [1],
          explanation: "The main challenge at DONUT was identifying the short-lived $\\tau$ lepton (lifetime $\\sim 0.3\\,\\text{ps}$) through its hadronic decay modes in nuclear emulsion. This required extremely fine spatial resolution.",
        },
        {
          type: "msq",
          question: "Which of the following statements about neutrino interactions in the Standard Model are correct?",
          options: [
            "Neutrinos participate in both charged current and neutral current weak interactions",
            "Only left-handed neutrinos participate in SM weak interactions",
            "The neutral current interaction distinguishes between neutrino flavours",
            "A $\\nu_\\mu$ can produce a muon via charged current interaction but not an electron",
          ],
          correct: [0, 1, 3],
          explanation: "C is false: the NC interaction couples to all neutrino flavours with equal strength — it is flavour-blind. A, B, and D are all correct: the $(1-\\gamma^5)$ structure selects $\\nu_L$; CC interactions are flavour-specific.",
        },
        {
          type: "numeric",
          question: "The LEP measurement gives $N_\\nu = 2.994 \\pm 0.012$. How many standard deviations is this from $N_\\nu = 3$ (the SM prediction)? Give your answer to 2 decimal places.",
          answer: "0.50",
          tolerance: 0.1,
          hint: "Number of sigma = $|N_\\text{measured} - N_\\text{predicted}| / \\sigma$",
          explanation: "$|2.994 - 3.000| / 0.012 = 0.006/0.012 = 0.5\\sigma$. The measurement is perfectly consistent with exactly three neutrino species.",
        },
        {
          type: "mcq",
          question: "In the Kurie plot analysis of tritium beta decay, if the neutrino has a nonzero mass $m_\\nu$, how does the spectrum change near the endpoint $E_0$?",
          options: [
            "The endpoint shifts to higher energy by $m_\\nu c^2$",
            "The Kurie plot curves downward and the true endpoint is at $E_0 - m_\\nu$ rather than $E_0$",
            "The Kurie plot remains linear but with a different slope",
            "There is no observable effect because $m_\\nu \\ll E_e$",
          ],
          correct: [1],
          explanation: "A nonzero $m_\\nu$ causes the Kurie plot to deviate from linearity near the endpoint and shifts the endpoint to $E_0 - m_\\nu$. This effect is tiny for sub-eV masses but detectable with precision experiments like KATRIN.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 2 – Atmospheric Neutrinos and Two-Flavour Vacuum Oscillations
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Atmospheric Neutrinos and Two-Flavour Vacuum Oscillations",
      content: [
        {
          type: "text",
          data: `
            <h2>Atmospheric Neutrino Production</h2>
            <p>
              Cosmic rays (mostly protons) constantly bombard the Earth's atmosphere. Interactions with
              atmospheric nuclei produce pions and kaons, which decay via:
              $$\\pi^+ \\to \\mu^+ + \\nu_\\mu, \\quad \\pi^- \\to \\mu^- + \\bar\\nu_\\mu$$
              The muons subsequently decay:
              $$\\mu^- \\to e^- + \\bar\\nu_e + \\nu_\\mu, \\quad \\mu^+ \\to e^+ + \\nu_e + \\bar\\nu_\\mu$$
              Ignoring the distinction between $\\nu$ and $\\bar\\nu$, the expected ratio of muon-type to
              electron-type neutrinos is <strong>2:1</strong>. SuperKamiokande (SK) and other water
              Cherenkov detectors observed this ratio to be significantly smaller than 2 —
              the <em>atmospheric neutrino anomaly</em>.
            </p>
            <h2>The Smoking Gun: Zenith Angle Dependence</h2>
            <p>
              The clinching evidence came from the zenith angle $\\Theta$ distribution.
              Downgoing neutrinos ($\\cos\\Theta > 0$) travel $\\sim 10\\,\\text{km}$ through the atmosphere
              before reaching the detector. Upgoing neutrinos ($\\cos\\Theta < 0$) travel through the
              entire Earth, a path length up to $\\sim 13{,}000\\,\\text{km}$.
            </p>
            <p>
              SK observed:
              <ul>
                <li>$e$-like events: match Monte Carlo predictions at all zenith angles — no deficit.</li>
                <li>$\\mu$-like sub-GeV events: deficit at all angles, larger for upcoming events.</li>
                <li>$\\mu$-like multi-GeV events: match prediction for downgoing, large deficit for upcoming.</li>
              </ul>
              The up–down asymmetry in $\\mu$-like events demonstrated that the depletion depends on the
              distance travelled — the hallmark of <strong>neutrino oscillations</strong>.
            </p>
            <h2>Quantum Mechanics of Neutrino Oscillations (2-flavour)</h2>
            <p>
              Neutrino oscillations arise because <em>flavour eigenstates</em> (what weak interactions
              produce and detect) are quantum superpositions of <em>mass eigenstates</em> (definite mass,
              which propagate with definite phases). In the two-flavour case:
              $$\\nu_\\alpha = \\cos\\theta\\,\\nu_1 + \\sin\\theta\\,\\nu_2$$
              $$\\nu_\\beta = -\\sin\\theta\\,\\nu_1 + \\cos\\theta\\,\\nu_2$$
              where $\\theta$ is the <strong>mixing angle</strong>.
            </p>
            <p>
              The effective Hamiltonian for a relativistic neutrino mass eigenstate $\\nu_i$ with mass $m_i$
              and energy $E$ (using the ultra-relativistic approximation $p \\approx E$) is:
              $$H_i = \\sqrt{p^2 + m_i^2} \\approx E + \\frac{m_i^2}{2E}$$
              The common phase $e^{-iEt}$ is irrelevant for oscillations. The effective Hamiltonian is:
              $$H_i = \\frac{m_i^2}{2E}$$
            </p>
            <p>
              A neutrino born as $|\\nu_\\alpha\\rangle$ evolves as:
              $$|\\nu_\\alpha(t)\\rangle = \\cos\\theta\\,e^{-im_1^2 t/2E}|\\nu_1\\rangle + \\sin\\theta\\,e^{-im_2^2 t/2E}|\\nu_2\\rangle$$
              The <strong>survival probability</strong> $P_{\\alpha\\alpha}$ and <strong>conversion probability</strong>
              $P_{\\alpha\\beta}$ are:
            </p>
            <p>
              $$\\boxed{P_{\\alpha\\alpha} = 1 - \\sin^2 2\\theta\\,\\sin^2\\!\\left(\\frac{\\Delta m^2 L}{4E}\\right)}$$
              $$\\boxed{P_{\\alpha\\beta} = \\sin^2 2\\theta\\,\\sin^2\\!\\left(\\frac{\\Delta m^2 L}{4E}\\right)}$$
              where $\\Delta m^2 \\equiv m_2^2 - m_1^2$ and $L$ is the baseline (distance travelled,
              since $t \\approx L/c$). In practical units ($\\Delta m^2$ in $\\text{eV}^2$, $L$ in km,
              $E$ in GeV):
              $$P_{\\alpha\\beta} = \\sin^2 2\\theta\\,\\sin^2\\!\\left(\\frac{1.27\\,\\Delta m^2\\,(\\text{eV}^2)\\,L\\,(\\text{km})}{E\\,(\\text{GeV})}\\right)$$
            </p>
            <h2>Key Features of the Oscillation Formula</h2>
            <p>
              <ul>
                <li><strong>Amplitude</strong>: $\\sin^2 2\\theta$ sets the maximum conversion. For $\\theta = 45°$ (maximal mixing), $\\sin^2 2\\theta = 1$ — complete flavour conversion is possible.</li>
                <li><strong>Oscillation length</strong>: $L_{\\rm osc} = 4\\pi E / \\Delta m^2 \\propto E/\\Delta m^2$. Higher energy neutrinos oscillate over longer baselines.</li>
                <li><strong>Requires nonzero $\\Delta m^2$</strong>: If all neutrinos were massless or degenerate in mass, $\\Delta m^2 = 0$ and no oscillations occur.</li>
                <li><strong>Requires mixing</strong>: If $\\theta = 0$, flavour and mass eigenstates coincide and no oscillations occur.</li>
              </ul>
            </p>
            <h2>Atmospheric Neutrino Parameters</h2>
            <p>
              The atmospheric neutrino data is best explained by $\\nu_\\mu \\leftrightarrow \\nu_\\tau$
              oscillations (electron neutrino fluxes are unaffected). The best-fit parameters from SK are:
              $$\\Delta m^2_{\\rm atm} = (1.5 - 3.4) \\times 10^{-3}\\,\\text{eV}^2, \\quad \\sin^2 2\\theta > 0.92 \\quad (90\\%\\,\\text{C.L.})$$
              Atmospheric mixing is close to <strong>maximal</strong> ($\\theta \\approx 45°$), in sharp contrast
              to the small quark mixing angles.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "Cosmic rays interacting in the atmosphere produce pions, which decay to produce neutrinos. What is the expected ratio of muon-type to electron-type neutrinos (ignoring neutrino/antineutrino differences)?",
          options: [
            "1:1",
            "2:1",
            "3:1",
            "1:2",
          ],
          correct: [1],
          explanation: "Each $\\pi^\\pm$ gives one $\\nu_\\mu$ (or $\\bar\\nu_\\mu$). Each subsequent $\\mu$ decay gives one more $\\nu_\\mu$ (or $\\bar\\nu_\\mu$) plus one $\\nu_e$ (or $\\bar\\nu_e$). Counting: 2 muon-type per 1 electron-type = ratio 2:1.",
        },
        {
          type: "mcq",
          question: "In the two-flavour vacuum oscillation formula, the oscillation length $L_{\\rm osc}$ (distance for one full oscillation cycle) is given by:",
          options: [
            "$L_{\\rm osc} = \\Delta m^2 / (4\\pi E)$",
            "$L_{\\rm osc} = 4\\pi E / \\Delta m^2$",
            "$L_{\\rm osc} = 2\\pi E / \\Delta m^2$",
            "$L_{\\rm osc} = \\pi \\Delta m^2 / E$",
          ],
          correct: [1],
          explanation: "The argument of $\\sin^2$ in $P_{\\alpha\\beta}$ is $\\Delta m^2 L/(4E)$. For a full oscillation cycle, this argument increases by $\\pi$, so $L_{\\rm osc} = 4\\pi E/\\Delta m^2$.",
        },
        {
          type: "numeric",
          question: "For atmospheric neutrinos with $\\Delta m^2_{\\rm atm} = 2.5 \\times 10^{-3}\\,\\text{eV}^2$ and energy $E = 1\\,\\text{GeV}$, compute the oscillation length $L_{\\rm osc}$ in km. Use $L_{\\rm osc} = 4\\pi E/\\Delta m^2$ with the practical unit factor: $L_{\\rm osc}\\,(\\text{km}) = 2.48 \\times E\\,(\\text{GeV}) / (\\Delta m^2\\,(\\text{eV}^2))$.",
          answer: "992 km",
          tolerance: 0.05,
          hint: "$L_{\\rm osc} = 2.48 \\times 1 / (2.5\\times 10^{-3})$",
          explanation: "$L_{\\rm osc} = 2.48/2.5\\times10^{-3} = 992\\,\\text{km}$. This matches the typical baseline for long-baseline accelerator experiments like K2K and MINOS, designed to probe atmospheric oscillation parameters.",
        },
        {
          type: "msq",
          question: "Which of the following are necessary conditions for neutrino oscillations to occur?",
          options: [
            "At least one neutrino must have nonzero mass",
            "The neutrino mass eigenstates must be non-degenerate ($\\Delta m^2 \\ne 0$)",
            "The mixing angle must be nonzero ($\\theta \\ne 0$)",
            "Neutrinos must interact via charged current interactions",
          ],
          correct: [1, 2],
          explanation: "Oscillations require $\\Delta m^2 \\ne 0$ (non-degenerate masses) AND $\\theta \\ne 0$ (mixing between flavour and mass bases). Note: having nonzero mass (A) is implied by B but not sufficient alone — degenerate masses give $\\Delta m^2 = 0$, no oscillations. D is not required; NC interactions also detect neutrinos.",
        },
        {
          type: "mcq",
          question: "The atmospheric neutrino anomaly is best explained by $\\nu_\\mu \\leftrightarrow \\nu_\\tau$ oscillations rather than $\\nu_\\mu \\leftrightarrow \\nu_e$ because:",
          options: [
            "The $\\tau$ lepton is heavier and easier to detect",
            "The electron neutrino flux shows no zenith-angle dependent deficit, ruling out $\\nu_\\mu \\leftrightarrow \\nu_e$",
            "The mixing angle for $\\nu_\\mu \\leftrightarrow \\nu_e$ is known to be exactly zero",
            "Water Cherenkov detectors cannot detect $\\nu_\\tau$",
          ],
          correct: [1],
          explanation: "If $\\nu_\\mu$ were oscillating into $\\nu_e$, there would be an excess of $e$-like events from below — but SK sees no $e$-like anomaly at all. The $e$-like flux matches predictions at all zenith angles, ruling out $\\nu_\\mu \\to \\nu_e$ as the dominant channel.",
        },
        {
          type: "numeric",
          question: "For maximal mixing ($\\theta = 45°$, so $\\sin^2 2\\theta = 1$) and $\\Delta m^2 = 2.5 \\times 10^{-3}\\,\\text{eV}^2$, what is the $\\nu_\\mu$ survival probability for upgoing multi-GeV neutrinos ($E = 3\\,\\text{GeV}$, $L = 10{,}000\\,\\text{km}$)? Use the practical formula $P = 1 - \\sin^2\\!(1.27 \\Delta m^2 L / E)$. Give your answer to 2 decimal places.",
          answer: "0.04",
          tolerance: 0.05,
          hint: "Compute the argument: $1.27 \\times 2.5\\times10^{-3} \\times 10000 / 3 = 10.58$ rad. Then $\\sin^2(10.58) = ?$",
          explanation: "Argument $= 1.27 \\times 2.5\\times10^{-3} \\times 10^4 / 3 \\approx 10.58\\,\\text{rad}$. $\\sin(10.58) \\approx -0.98$, so $\\sin^2 \\approx 0.96$. $P_{\\mu\\mu} \\approx 1 - 0.96 = 0.04$. The upgoing muon neutrinos are strongly depleted — consistent with SK observations.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 3 – Two-Neutrino Mixing in Matter (MSW Effect)
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Two-Neutrino Mixing in Matter: The MSW Effect",
      content: [
        {
          type: "text",
          data: `
            <h2>Effective Potentials from Forward Scattering</h2>
            <p>
              When neutrinos propagate through matter, coherent <em>forward scattering</em> on electrons
              and nucleons modifies their effective masses and mixing angles. This is called the
              <strong>MSW effect</strong> (Mikheyev–Smirnov–Wolfenstein).
            </p>
            <p>
              All flavours undergo neutral current scattering off neutrons, giving a flavour-independent
              effective potential:
              $$V_{NC} = -\\frac{G_F}{\\sqrt{2}}N_n$$
              where $N_n$ is the neutron number density. Since this is flavour-blind, it only shifts all
              diagonal entries equally and does not change the mixing angle.
            </p>
            <p>
              Electron neutrinos have an <em>additional</em> charged current interaction with electrons:
              $$V_{CC} = \\sqrt{2}\\,G_F N_e$$
              where $N_e$ is the electron number density. This <strong>uniquely affects $\\nu_e$</strong>
              and changes the effective mass matrix in the flavour basis.
            </p>
            <h2>Effective Hamiltonian in Matter</h2>
            <p>
              For $\\nu_e$–$\\nu_x$ mixing (where $\\nu_x$ may be $\\nu_\\mu$, $\\nu_\\tau$, or a combination),
              the effective Hamiltonian in the flavour basis becomes, after subtracting the common $V_{NC}$:
              $$H_f = \\frac{1}{4E}\\begin{pmatrix} -\\Delta m^2 \\cos 2\\theta + 2A & \\Delta m^2 \\sin 2\\theta \\\\ \\Delta m^2 \\sin 2\\theta & \\Delta m^2 \\cos 2\\theta \\end{pmatrix}$$
              where:
              $$A \\equiv 2E V_{CC} = 2\\sqrt{2}\\,G_F N_e E$$
            </p>
            <p>
              This matrix is diagonalized by an effective mixing angle $\\theta_m$ in matter:
              $$\\tan 2\\theta_m = \\frac{\\Delta m^2 \\sin 2\\theta}{\\Delta m^2 \\cos 2\\theta - A}$$
              and an effective mass-squared difference:
              $$\\Delta m^2_m = \\sqrt{(\\Delta m^2 \\cos 2\\theta - A)^2 + (\\Delta m^2 \\sin 2\\theta)^2}$$
            </p>
            <h2>The MSW Resonance</h2>
            <p>
              The <strong>resonance condition</strong> occurs when the diagonal elements of $H_f$ are equal:
              $$A_\\text{res} = \\Delta m^2 \\cos 2\\theta$$
              At resonance, $\\theta_m = 45°$ regardless of the vacuum mixing angle $\\theta$!
              Even a tiny vacuum mixing can be resonantly enhanced to maximal mixing in matter.
              This is the remarkable MSW mechanism.
            </p>
            <p>
              Key limits:
              <ul>
                <li>$A \\ll \\Delta m^2$: Matter effects negligible; $\\theta_m \\approx \\theta$ (vacuum case).</li>
                <li>$A = \\Delta m^2\\cos 2\\theta$: Resonance; $\\theta_m = 45°$, maximal conversion.</li>
                <li>$A \\gg \\Delta m^2$: Matter suppresses mixing; $\\theta_m \\to 90°$, $\\nu_e \\approx \\nu_{2m}$.</li>
              </ul>
              Note: The MSW resonance only exists for neutrinos (not antineutrinos) if $\\Delta m^2 > 0$
              and $\\theta < 45°$, because $A > 0$ for neutrinos while $A < 0$ for antineutrinos in matter.
            </p>
            <h2>Adiabatic Propagation and Level Crossing</h2>
            <p>
              In a medium with slowly varying density, the neutrino mass eigenstates in matter
              $\\nu_{1m}$ and $\\nu_{2m}$ evolve without mixing between them — this is the
              <strong>adiabatic limit</strong>. The condition for adiabaticity is:
              $$\\gamma \\equiv \\frac{\\Delta m^2}{2E}\\cdot\\frac{\\sin^2 2\\theta}{\\cos 2\\theta}\\cdot\\left(\\frac{1}{A}\\frac{dA}{dx}\\right)^{-1}_{\\rm res} \\gg 1$$
              The probability of a non-adiabatic "jump" between mass eigenstates (Landau–Zener crossing)
              is approximately:
              $$P_{\\rm jump} \\approx e^{-\\pi\\gamma/2}$$
            </p>
            <h2>Ruling Out Sterile Neutrino Oscillations in Atmospheric Data</h2>
            <p>
              For $\\nu_\\mu \\leftrightarrow \\nu_\\tau$: both flavours have identical $V_{NC}$, so matter
              makes no difference — the vacuum oscillation analysis is exact.
              For $\\nu_\\mu \\leftrightarrow \\nu_s$ (sterile $\\nu_s$ with no SM interactions): the net
              potential $V_{NC} - 0 \\ne 0$, so matter effects would suppress oscillations at high energy.
              SK data shows no such suppression, ruling out the sterile hypothesis.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "Why does only $\\nu_e$ (and not $\\nu_\\mu$ or $\\nu_\\tau$) acquire an additional potential $V_{CC}$ when propagating through ordinary matter?",
          options: [
            "Ordinary matter contains mostly electrons, which can participate in charged current $W$-exchange only with $\\nu_e$",
            "The $\\nu_\\mu$ and $\\nu_\\tau$ are heavier and interact differently with quarks",
            "The neutral current potential $V_{NC}$ exactly cancels $V_{CC}$ for $\\nu_\\mu$ and $\\nu_\\tau$",
            "Ordinary matter contains no muons or tau leptons to scatter off",
          ],
          correct: [0],
          explanation: "The charged current interaction $\\nu_e + e^- \\to \\nu_e + e^-$ (t-channel $W$ exchange) is only possible for electron neutrinos in matter containing electrons. No muons or tau leptons exist in ordinary matter at rest, so $\\nu_\\mu$ and $\\nu_\\tau$ have no CC forward scattering.",
        },
        {
          type: "mcq",
          question: "At the MSW resonance, the effective mixing angle in matter $\\theta_m$ equals:",
          options: [
            "The vacuum mixing angle $\\theta$",
            "$0°$ — neutrinos propagate as pure mass eigenstates",
            "$45°$ — maximal mixing regardless of the vacuum mixing angle",
            "$90°$ — complete suppression of oscillations",
          ],
          correct: [2],
          explanation: "At resonance, $A = \\Delta m^2 \\cos 2\\theta$, which makes the argument of $\\tan 2\\theta_m$ diverge (denominator = 0), so $2\\theta_m = 90°$, i.e. $\\theta_m = 45°$. This is the key insight of the MSW effect.",
        },
        {
          type: "msq",
          question: "Which statements about the MSW resonance condition $A = \\Delta m^2 \\cos 2\\theta$ are correct?",
          options: [
            "The resonance density depends on the neutrino energy $E$",
            "For $\\Delta m^2 > 0$ and $\\theta < 45°$, the resonance occurs for neutrinos but not antineutrinos in matter",
            "The resonance occurs when the two neutrino flavours have equal effective masses in matter",
            "At resonance, the oscillation probability is maximized to $\\sin^2 2\\theta_m = 1$",
          ],
          correct: [0, 1, 2, 3],
          explanation: "All four are correct. $A = 2\\sqrt{2}G_F N_e E$ depends on $E$. For antineutrinos, $A \\to -A$, so no resonance if $A > 0$ for neutrinos. Resonance = equal diagonal elements = equal effective masses. At resonance $\\theta_m = 45°$, so $\\sin^2 2\\theta_m = 1$.",
        },
        {
          type: "numeric",
          question: "The electron density in the solar core is approximately $N_e \\approx 6 \\times 10^{25}\\,\\text{cm}^{-3}$. Compute the matter potential $A = 2\\sqrt{2}\\,G_F N_e E$ in eV$^2$ for $E = 10\\,\\text{MeV} = 10^7\\,\\text{eV}$. Use $G_F = 1.166 \\times 10^{-5}\\,\\text{GeV}^{-2}$ and recall $1\\,\\text{cm}^{-3} = 10^6\\,\\text{m}^{-3}$, $1\\,\\text{GeV} = 10^9\\,\\text{eV}$. [Hint: $V_{CC} = \\sqrt{2}G_F N_e \\approx 7.6\\times10^{-14}\\,\\text{eV}$ for this density. So $A = 2EV_{CC}$, give in $\\text{eV}^2$.]",
          answer: "1.52e-6 eV^2",
          tolerance: 0.2,
          hint: "$A = 2 \\times 10^7\\,\\text{eV} \\times 7.6\\times10^{-14}\\,\\text{eV} = 1.52\\times10^{-6}\\,\\text{eV}^2$",
          explanation: "$A = 2E V_{CC} = 2 \\times 10^7 \\times 7.6\\times10^{-14} \\approx 1.52\\times10^{-6}\\,\\text{eV}^2$. Comparing with $\\Delta m^2_{\\odot} \\approx 8\\times10^{-5}\\,\\text{eV}^2 \\cdot \\cos 2\\theta_{12} \\approx 5\\times10^{-5}\\,\\text{eV}^2$, we see $A$ is relevant — matter effects are significant for solar neutrinos.",
        },
        {
          type: "mcq",
          question: "The adiabaticity parameter $\\gamma \\gg 1$ means:",
          options: [
            "The density changes so rapidly that the neutrino mass eigenstates mix strongly",
            "The neutrino oscillates many times before passing through the resonance layer",
            "The neutrino mass eigenstates in matter follow the local density adiabatically without hopping between levels",
            "The MSW resonance is non-existent",
          ],
          correct: [2],
          explanation: "Adiabaticity ($\\gamma \\gg 1$) means the density scale height is much larger than the oscillation length near resonance. The instantaneous mass eigenstates evolve smoothly; a neutrino starting as $\\nu_{2m}$ remains in $\\nu_{2m}$ throughout.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 4 – Solar Neutrinos: Problem and Solution
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Solar Neutrinos: Problem and Solution",
      content: [
        {
          type: "text",
          data: `
            <h2>The Solar Neutrino Problem</h2>
            <p>
              The sun generates energy through nuclear fusion. The primary reaction chain
              $4p \\to {}^4\\text{He} + 2e^+ + 2\\nu_e$ produces electron neutrinos with energies
              up to $\\sim 15\\,\\text{MeV}$. The Standard Solar Model (SSM) predicts the neutrino fluxes
              from each reaction in the pp chain and CNO cycle.
            </p>
            <p>
              Solar neutrinos were first detected through radiochemical reactions:
              <ul>
                <li><strong>Chlorine</strong> (Homestake, Davis 1970s): \${}^{37}\\text{Cl} + \\nu_e \\to {}^{37}\\text{Ar} + e^-$ (threshold 814 keV)</li>
                <li><strong>Gallium</strong> (SAGE, GALLEX): \${}^{71}\\text{Ga} + \\nu_e \\to {}^{71}\\text{Ge} + e^-$ (threshold 233 keV)</li>
                <li><strong>Water Cherenkov</strong> (Kamiokande, SK): $\\nu_e + e^- \\to \\nu_e + e^-$ (threshold $\\sim 5\\,\\text{MeV}$)</li>
              </ul>
              All experiments consistently found <strong>only about half</strong> of the expected
              $\\nu_e$ flux — the Solar Neutrino Problem.
            </p>
            <h2>The LMA-MSW Solution</h2>
            <p>
              Solar $\\nu_e$ are produced deep in the core, where the density is very high. At these
              densities, $A \\gg \\Delta m^2_{21}$, so $\\nu_e \\approx \\nu_{2m}$ (the heavier matter eigenstate).
              As neutrinos travel outward, the density decreases. For the LMA (Large Mixing Angle)
              solution with $\\Delta m^2_{21} \\sim 8\\times10^{-5}\\,\\text{eV}^2$, the transition through
              resonance is <em>adiabatic</em> ($P_{\\rm jump} \\approx 0$), so $\\nu_e$ exits the sun as $\\nu_2$
              (the vacuum mass eigenstate).
            </p>
            <p>
              The probability of detecting $\\nu_e$ at Earth:
              $$P_{ee} = |\\langle \\nu_e|\\nu_2\\rangle|^2 = \\sin^2\\theta_{12}$$
              For $\\theta_{12} \\approx 32°$: $P_{ee} \\approx \\sin^2 32° \\approx 0.28$ — consistent with
              the observed deficit.
            </p>
            <h2>Ruling Out Alternative Solutions</h2>
            <p>
              Before KamLAND confirmed LMA, several solutions existed:
              <ul>
                <li><strong>SMA</strong> (small mixing angle, $\\theta \\ll 1$): predicts large day/night asymmetry (Earth matter effects on nighttime neutrinos). Not observed.</li>
                <li><strong>LOW</strong> ($\\Delta m^2 \\sim 10^{-7}\\,\\text{eV}^2$, large $\\theta$): similar day/night signature. Ruled out.</li>
                <li><strong>VAC</strong> (vacuum oscillations, $\\Delta m^2 \\sim 10^{-10}\\,\\text{eV}^2$): predicts seasonal variation as Earth–Sun distance changes. Not observed.</li>
              </ul>
              All were ruled out by the <em>flat energy dependence</em> of the survival probability above
              5 MeV (SK spectrum data) — only LMA predicts $P_{ee} \\approx \\sin^2\\theta$ independent of
              energy in this range.
            </p>
            <h2>SNO: Identifying the Missing Neutrinos</h2>
            <p>
              The Sudbury Neutrino Observatory (SNO) used heavy water (D$_2$O) and detected neutrinos
              through three channels:
              <ul>
                <li><strong>CC</strong>: $\\nu_e + d \\to p + p + e^-$ — only $\\nu_e$, measures $\\Phi_e$.</li>
                <li><strong>ES</strong>: $\\nu + e^- \\to \\nu + e^-$ — all flavours, but $\\nu_e$ cross-section is $\\sim 6\\times$ larger; measures $\\Phi_e + \\Phi_{\\mu+\\tau}/6$.</li>
                <li><strong>NC</strong>: $\\nu + d \\to n + p + \\nu$ — flavour-blind, measures $\\Phi_e + \\Phi_{\\mu+\\tau}$.</li>
              </ul>
              SNO showed that the <strong>total neutrino flux</strong> (NC) matched the SSM prediction, while the
              $\\nu_e$ flux alone (CC) was only $\\sim 1/3$. The missing $\\nu_e$ had converted to $\\nu_\\mu + \\nu_\\tau$.
              This definitively confirmed neutrino oscillations and vindicated the SSM.
            </p>
            <h2>KamLAND Confirmation</h2>
            <p>
              KamLAND (Japan) detected reactor $\\bar\\nu_e$ from many reactors at $L \\sim 180\\,\\text{km}$.
              Using reactor energies of a few MeV and the solar LMA parameters, the expected oscillation
              length is $\\sim 100\\,\\text{km}$. KamLAND observed a clear disappearance and confirmed:
              $$\\Delta m^2_{\\odot} = (7.2-9.5) \\times 10^{-5}\\,\\text{eV}^2, \\quad \\sin^2\\theta_{\\odot} = 0.21-0.37 \\quad (3\\sigma)$$
            </p>
          `,
        },
        {
          type: "mcq",
          question: "Which radiochemical reaction has the lowest energy threshold, allowing it to detect the low-energy pp neutrinos from the sun?",
          options: [
            "Chlorine: ${}^{37}\\text{Cl} + \\nu_e \\to {}^{37}\\text{Ar} + e^-$ (814 keV threshold)",
            "Gallium: ${}^{71}\\text{Ga} + \\nu_e \\to {}^{71}\\text{Ge} + e^-$ (233 keV threshold)",
            "Water Cherenkov: $\\nu_e + e^- \\to \\nu_e + e^-$ ($\\sim$5 MeV threshold)",
            "Heavy water NC: $\\nu + d \\to n + p + \\nu$ (2.2 MeV threshold)",
          ],
          correct: [1],
          explanation: "Gallium's 233 keV threshold allows detection of the dominant pp neutrinos ($E < 420\\,\\text{keV}$) that the chlorine and water Cherenkov detectors cannot see. SAGE and GALLEX used this reaction.",
        },
        {
          type: "mcq",
          question: "In the LMA-MSW solution, $\\nu_e$ produced in the solar core exit the sun primarily as which quantum state?",
          options: [
            "$\\nu_1$ — the lighter vacuum mass eigenstate",
            "$\\nu_2$ — the heavier vacuum mass eigenstate",
            "$\\nu_e$ — unchanged, because the LMA solution requires no matter effects",
            "An equal superposition of $\\nu_1$ and $\\nu_2$",
          ],
          correct: [1],
          explanation: "At high density in the core, $\\nu_e \\approx \\nu_{2m}$ (heavier matter eigenstate). The adiabatic LMA transition means the neutrino stays in the heavier eigenstate as density decreases. At the surface, $\\nu_{2m} \\to \\nu_2$. At Earth the $\\nu_e$ detection probability is $P_{ee} = |\\langle\\nu_e|\\nu_2\\rangle|^2 = \\sin^2\\theta_{12}$.",
        },
        {
          type: "msq",
          question: "The SNO neutral current measurement was crucial because it:",
          options: [
            "Measured the total active neutrino flux from the sun, regardless of flavour",
            "Confirmed that the total solar neutrino flux matches the SSM prediction",
            "Demonstrated that the missing $\\nu_e$ had converted to $\\nu_\\mu$ or $\\nu_\\tau$ (not to sterile neutrinos)",
            "Directly measured the neutrino mass",
          ],
          correct: [0, 1, 2],
          explanation: "A, B, and C are all correct. The NC reaction is equally sensitive to $\\nu_e$, $\\nu_\\mu$, and $\\nu_\\tau$ but not sterile $\\nu_s$. The NC rate matched the SSM prediction, while the CC rate was lower — proving active flavour conversion, not disappearance to sterile states. D is incorrect; SNO measured fluxes, not masses.",
        },
        {
          type: "numeric",
          question: "For the LMA solution with $\\theta_{12} = 32°$, what is the $\\nu_e$ survival probability $P_{ee} = \\sin^2\\theta_{12}$ for high-energy ($E > 5\\,\\text{MeV}$) solar neutrinos in the adiabatic limit? Give your answer to 2 decimal places.",
          answer: "0.28",
          tolerance: 0.02,
          hint: "$\\sin(32°) \\approx 0.529$",
          explanation: "$P_{ee} = \\sin^2(32°) \\approx 0.529^2 \\approx 0.28$. This means only about 28% of solar $\\nu_e$ are detected as $\\nu_e$, consistent with the observed ratio Data/SSM $\\approx 0.3$ in the CC channel at SNO.",
        },
        {
          type: "mcq",
          question: "Why did the VAC (vacuum oscillation) solution to the solar neutrino problem get ruled out?",
          options: [
            "It predicted too large a deficit of solar neutrinos",
            "It predicted a seasonal variation in the detected flux as the Earth–Sun distance varies, which was not observed",
            "It required a mixing angle larger than $90°$",
            "It was ruled out by the CHOOZ experiment",
          ],
          correct: [1],
          explanation: "The VAC solution has an oscillation wavelength comparable to the Earth–Sun distance ($\\sim 1.5\\times10^8\\,\\text{km}$). As the Earth's orbital distance varies by $\\pm 1.7\\%$, the oscillation phase changes seasonally. SNO and SK found no such seasonal variation (beyond the known geometric $1/r^2$ flux variation), ruling out VAC.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 5 – Three-Neutrino Mixing Framework
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Three-Neutrino Mixing Framework",
      content: [
        {
          type: "text",
          data: `
            <h2>The PMNS Mixing Matrix</h2>
            <p>
              With three neutrino flavours ($\\nu_e, \\nu_\\mu, \\nu_\\tau$) and three mass eigenstates
              ($\\nu_1, \\nu_2, \\nu_3$), the general mixing relation is:
              $$\\nu_\\alpha = \\sum_i U_{\\alpha i}\\,\\nu_i$$
              where $U$ is the unitary <strong>PMNS matrix</strong> (Pontecorvo–Maki–Nakagawa–Sakata):
              $$U = R_{23}(\\theta_{23})\\,\\Phi(\\delta)\\,R_{13}(\\theta_{13})\\,\\Phi^\\dagger(\\delta)\\,R_{12}(\\theta_{12})$$
              with $\\Phi(\\delta) = \\text{Diag}[1,1,e^{i\\delta}]$.
              Explicitly (for Dirac neutrinos):
              $$U = \\begin{pmatrix}
                c_{12}c_{13} & s_{12}c_{13} & s_{13}e^{-i\\delta} \\\\
                -s_{12}c_{23}-c_{12}s_{23}s_{13}e^{i\\delta} & c_{12}c_{23}-s_{12}s_{23}s_{13}e^{i\\delta} & s_{23}c_{13} \\\\
                s_{12}s_{23}-c_{12}c_{23}s_{13}e^{i\\delta} & -c_{12}s_{23}-s_{12}c_{23}s_{13}e^{i\\delta} & c_{23}c_{13}
              \\end{pmatrix}$$
              where $c_{ij} \\equiv \\cos\\theta_{ij}$, $s_{ij} \\equiv \\sin\\theta_{ij}$, and $\\delta$ is the
              CP-violating phase.
            </p>
            <h2>Three-Flavour Oscillation Probability</h2>
            <p>
              The transition probability from $\\nu_\\alpha$ to $\\nu_\\beta$ is:
              $$P_{\\alpha\\beta} = \\delta_{\\alpha\\beta}
              - 4\\sum_{i>j}\\text{Re}(U^*_{\\alpha i}U_{\\beta i}U_{\\alpha j}U^*_{\\beta j})\\sin^2\\!\\left(\\frac{\\Delta m^2_{ij}L}{4E}\\right)
              + 2\\sum_{i>j}\\text{Im}(U^*_{\\alpha i}U_{\\beta i}U_{\\alpha j}U^*_{\\beta j})\\cos\\!\\left(\\frac{\\Delta m^2_{ij}L}{2E}\\right)$$
              The last term is nonzero only if $\\delta \\ne 0, \\pi$ (CP violation).
            </p>
            <h2>Mass Hierarchy</h2>
            <p>
              We know $\\Delta m^2_{21} = m_2^2 - m_1^2 > 0$ (from solar neutrinos: matter effects are
              only consistent with $m_2 > m_1$ given $\\theta_{12} < 45°$). But the sign of
              $\\Delta m^2_{31}$ is unknown:
              <ul>
                <li><strong>Normal hierarchy (NH)</strong>: $m_1 < m_2 < m_3$, with $\\Delta m^2_{31} > 0$.</li>
                <li><strong>Inverted hierarchy (IH)</strong>: $m_3 < m_1 < m_2$, with $\\Delta m^2_{31} < 0$.</li>
              </ul>
              In both cases, $|\\Delta m^2_{31}| \\approx |\\Delta m^2_{32}| \\approx \\Delta m^2_{\\rm atm}$, and
              $\\Delta m^2_{21} \\equiv \\Delta m^2_\\odot \\ll \\Delta m^2_{\\rm atm}$.
            </p>
            <h2>Correspondence with Two-Flavour Results</h2>
            <p>
              Thanks to the hierarchy $\\Delta m^2_{21} \\ll \\Delta m^2_{31}$ and the smallness of $\\theta_{13}$:
              <ul>
                <li><strong>Atmospheric neutrinos</strong>: Dominated by $\\Delta m^2_{31}$ and $\\theta_{23}$.
                $$P_{\\mu\\mu} \\approx 1 - \\sin^2 2\\theta_{23}\\,\\sin^2\\!\\left(\\frac{\\Delta m^2_{31}L}{4E}\\right)$$</li>
                <li><strong>Solar neutrinos</strong>: Dominated by $\\Delta m^2_{21}$ and $\\theta_{12}$.
                In the adiabatic limit, $P_{ee} \\approx \\sin^2\\theta_{12}$ (for $E > 5\\,\\text{MeV}$).</li>
              </ul>
              The decoupling is exact to zeroth order in $\\theta_{13}$ and $\\Delta m^2_{21}/\\Delta m^2_{31}$.
            </p>
            <h2>Measurement of $\\theta_{13}$</h2>
            <p>
              The CHOOZ reactor experiment constrained $\\theta_{13}$ by measuring $\\bar\\nu_e$ survival
              at $L \\approx 1\\,\\text{km}$. At this baseline, $\\Delta m^2_{31}$ drives oscillations while
              $\\Delta m^2_{21}$ contributes negligibly:
              $$P_{ee} \\approx 1 - \\sin^2 2\\theta_{13}\\,\\sin^2\\!\\left(\\frac{\\Delta m^2_{31}L}{4E}\\right)$$
              CHOOZ found $\\sin^2\\theta_{13} < 0.05$ ($3\\sigma$). Later reactor experiments (Daya Bay,
              RENO, Double CHOOZ) measured $\\theta_{13}$ precisely:
              $$\\sin^2 2\\theta_{13} \\approx 0.085 \\quad \\Rightarrow \\quad \\theta_{13} \\approx 8.5°$$
            </p>
            <h2>Current Best-Fit Parameters</h2>
            <p>
              As of the time of the source lectures (and confirmed by subsequent experiments):
              $$\\Delta m^2_{21} \\approx 7.5\\times10^{-5}\\,\\text{eV}^2, \\quad \\sin^2\\theta_{12} \\approx 0.31 \\quad (\\theta_{12} \\approx 34°)$$
              $$|\\Delta m^2_{31}| \\approx 2.5\\times10^{-3}\\,\\text{eV}^2, \\quad \\sin^2\\theta_{23} \\approx 0.5 \\quad (\\theta_{23} \\approx 45°)$$
              $$\\sin^2 2\\theta_{13} \\approx 0.085 \\quad (\\theta_{13} \\approx 8.5°)$$
            </p>
          `,
        },
        {
          type: "mcq",
          question: "In the PMNS matrix, the parameter $\\delta$ (the CP-violating phase) affects oscillation probabilities through which term in $P_{\\alpha\\beta}$?",
          options: [
            "The $\\sin^2(\\Delta m^2 L / 4E)$ terms with real coefficients",
            "The $\\cos(\\Delta m^2 L / 2E)$ terms with imaginary coefficients $\\text{Im}(U^*_{\\alpha i}U_{\\beta i}U_{\\alpha j}U^*_{\\beta j})$",
            "Both terms equally",
            "The diagonal $\\delta_{\\alpha\\beta}$ term",
          ],
          correct: [1],
          explanation: "The CP-violating phase $\\delta$ enters through $\\text{Im}(U^*_{\\alpha i}U_{\\beta i}U_{\\alpha j}U^*_{\\beta j})$, which multiplies the $\\cos(\\Delta m^2 L / 2E)$ terms. These terms are odd under $P \\leftrightarrow \\bar P$ (or equivalently $\\delta \\to -\\delta$) and vanish for $\\delta = 0$ or $\\pi$.",
        },
        {
          type: "mcq",
          question: "We know $m_2 > m_1$ (i.e. $\\Delta m^2_{21} > 0$) from solar neutrino data. Why?",
          options: [
            "Beta decay experiments directly measured both masses",
            "The MSW effect in the sun is only consistent with $m_2 > m_1$ for $\\theta_{12} < 45°$, because the resonance requires $A > 0$ which means $\\Delta m^2 \\cos 2\\theta > 0$",
            "Atmospheric neutrino experiments fixed the sign",
            "Cosmological measurements determined the absolute mass ordering",
          ],
          correct: [1],
          explanation: "The MSW resonance condition is $A = \\Delta m^2 \\cos 2\\theta$. Since $A = 2\\sqrt{2}G_F N_e E > 0$ in matter and $\\cos 2\\theta_{12} > 0$ (because $\\theta_{12} < 45°$), we need $\\Delta m^2_{21} > 0$. For $\\Delta m^2_{21} < 0$, the resonance would occur for antineutrinos, not neutrinos, incompatible with solar $\\nu_e$ conversion.",
        },
        {
          type: "msq",
          question: "In the three-neutrino framework with $\\theta_{13} \\approx 0$ and the known hierarchy $\\Delta m^2_{21} \\ll \\Delta m^2_{31}$, which statements are correct?",
          options: [
            "The atmospheric neutrino oscillation is driven primarily by $\\theta_{23}$ and $\\Delta m^2_{31}$",
            "The solar neutrino oscillation is driven primarily by $\\theta_{12}$ and $\\Delta m^2_{21}$",
            "Atmospheric and solar neutrino oscillations are approximately decoupled from each other",
            "The mixing angle $\\theta_{13}$ contributes equally to both solar and atmospheric oscillations",
          ],
          correct: [0, 1, 2],
          explanation: "A, B, and C are correct. The smallness of $\\theta_{13}$ and the large hierarchy in $\\Delta m^2$ allow the 3-flavour problem to approximately factorize into two independent 2-flavour problems. D is wrong: $\\theta_{13}$ is a small correction to both sectors.",
        },
        {
          type: "numeric",
          question: "In the three-neutrino framework, how many independent physical parameters does the PMNS mixing matrix have if neutrinos are Dirac particles? (Count: mixing angles + CP phases.)",
          answer: "4",
          tolerance: 0,
          hint: "A unitary $3\\times3$ matrix has 9 parameters. How many can be removed by rephasing charged lepton and neutrino fields?",
          explanation: "A general $3\\times3$ unitary matrix has 9 real parameters. For Dirac neutrinos, 5 relative phases between the 3 charged leptons and 3 neutrinos can be removed by field redefinitions, leaving $9 - 5 = 4$ physical parameters: 3 mixing angles ($\\theta_{12}, \\theta_{23}, \\theta_{13}$) and 1 CP phase $\\delta$.",
        },
        {
          type: "mcq",
          question: "The LSND experiment reported $\\bar\\nu_\\mu \\to \\bar\\nu_e$ oscillations with $\\Delta m^2 \\sim 0.1$–$10\\,\\text{eV}^2$. Why cannot this be accommodated in the standard three-neutrino framework?",
          options: [
            "LSND used the wrong neutrino species",
            "Three independent $\\Delta m^2$ values (solar, atmospheric, LSND) cannot all be satisfied by three neutrinos with only two independent mass-squared differences",
            "The mixing angle required by LSND exceeds $45°$",
            "LSND's baseline was too short for oscillations to develop",
          ],
          correct: [1],
          explanation: "Three neutrino masses give only two independent $\\Delta m^2$ values. We already need $\\Delta m^2_{21} \\approx 8\\times10^{-5}\\,\\text{eV}^2$ and $|\\Delta m^2_{31}| \\approx 2.5\\times10^{-3}\\,\\text{eV}^2$. A third independent value $\\sim 1\\,\\text{eV}^2$ cannot fit — a fourth (sterile) mass eigenstate would be needed.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 6 – Dirac vs. Majorana Neutrinos
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Dirac vs. Majorana Neutrinos",
      content: [
        {
          type: "text",
          data: `
            <h2>The Question of Neutrino Self-Conjugacy</h2>
            <p>
              For all charged fermions, particle and antiparticle are physically distinct (different
              electric charge). Neutrinos are electrically neutral, so in principle a neutrino could be
              its own antiparticle. Such a particle is called a <strong>Majorana neutrino</strong>.
            </p>
            <p>
              A massive Dirac fermion has four independent spinor components: $\\nu_L$, $\\nu_R$,
              $\\bar\\nu_L$, $\\bar\\nu_R$. A Majorana fermion has only two, with the particle and
              antiparticle states identified. Formally, a Majorana neutrino satisfies:
              $$\\nu^c = \\nu, \\quad \\text{where}\\quad f^c \\equiv -\\eta_c^* C\\bar f^T = -\\eta_c^* i\\gamma^2 f^*$$
              We can construct:
              $$\\nu_M \\equiv \\nu_L + \\nu_L^c$$
              where $\\nu_L^c$ is the charge conjugate of $\\nu_L$.
            </p>
            <h2>Mass Terms</h2>
            <p>
              <strong>Dirac mass</strong> (requires $\\nu_R$, conserves lepton number $L$):
              $$\\mathcal{L}_D = -m_D(\\bar\\nu_L \\nu_R + \\bar\\nu_R \\nu_L)$$
              <strong>Majorana mass</strong> (no $\\nu_R$ needed, violates $L$ by 2 units):
              $$\\mathcal{L}_M = -m_M\\overline{\\nu_M}\\nu_M = -m_M(\\bar\\nu_L^c \\nu_L + \\bar\\nu_L \\nu_L^c)$$
              If both are present (with a right-handed Majorana mass $m_R$), the full mass matrix in the
              $\\begin{pmatrix}\\nu_L & \\nu_R^c\\end{pmatrix}^T$ basis is:
              $$\\mathcal{M} = \\begin{pmatrix} m_L & m_D \\\\ m_D & m_R \\end{pmatrix}$$
            </p>
            <h2>The Seesaw Mechanism</h2>
            <p>
              Setting $m_L = 0$ (Type I seesaw), the eigenvalues are:
              $$m_1 \\approx \\frac{m_D^2}{m_R} \\ll m_D, \\qquad m_2 \\approx m_R \\gg m_D$$
              If $m_D$ is of order the electroweak scale ($\\sim 100\\,\\text{GeV}$ or the quark Dirac mass)
              and $m_R \\sim 10^{10}\\,\\text{GeV}$ (GUT scale), then:
              $$m_1 \\sim \\frac{(100\\,\\text{GeV})^2}{10^{10}\\,\\text{GeV}} = 10^{-9}\\,\\text{GeV} = 1\\,\\text{eV}$$
              This elegantly explains the tiny neutrino masses! The seesaw mechanism says: heavier
              $m_R$ $\\Rightarrow$ lighter observable neutrino mass $m_1$ (like two sides of a seesaw).
            </p>
            <h2>Neutrinoless Double Beta Decay</h2>
            <p>
              The cleanest experimental test of the Majorana nature of neutrinos is
              <strong>neutrinoless double beta decay</strong> ($0\\nu\\beta\\beta$):
              $$N(A,Z) \\to N'(A,Z+2) + 2e^-$$
              This process violates lepton number by 2 units and can only occur if $\\nu$ is Majorana.
              The rate is proportional to the square of the <em>effective Majorana mass</em>:
              $$\\langle m_{ee}\\rangle = \\left|\\sum_i U^2_{ei}\\,m_i\\right|$$
              The electrons are emitted back-to-back with a sharp combined energy equal to the $Q$ value
              (monoenergetic signal, unlike the continuous spectrum of ordinary double beta decay).
              Current experimental bounds: $\\langle m_{ee}\\rangle < 0.1$–$0.35\\,\\text{eV}$ from
              experiments like KamLAND-Zen, GERDA, CUORE.
            </p>
            <h2>Majorana Phases</h2>
            <p>
              If neutrinos are Majorana particles, the PMNS matrix gains two additional phases
              (Majorana phases $\\alpha$, $\\beta$) that cannot be removed by field redefinitions:
              $$U_M = U_{\\rm PMNS} \\times \\text{Diag}[1,\\,e^{i\\alpha},\\,e^{i\\beta}]$$
              These phases do not affect neutrino oscillations (the $e^{i\\alpha}$ factors cancel
              in $|U_{\\alpha i}|^2$) but enter the $0\\nu\\beta\\beta$ rate through $\\langle m_{ee}\\rangle$.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "What experimental observation would definitively prove that neutrinos are Majorana particles?",
          options: [
            "Measuring a nonzero neutrino mass from tritium beta decay",
            "Observing neutrino oscillations with a large mixing angle",
            "Detecting neutrinoless double beta decay $N(A,Z) \\to N'(A,Z+2) + 2e^-$",
            "Measuring the CP-violating phase $\\delta$ in long-baseline oscillation experiments",
          ],
          correct: [2],
          explanation: "$0\\nu\\beta\\beta$ violates lepton number by 2 units and can only proceed (via the standard mechanism) if neutrinos are massive Majorana particles. Its observation would be a clear, model-independent signature of the Majorana nature.",
        },
        {
          type: "mcq",
          question: "In the Type I seesaw mechanism with $m_L = 0$, $m_D = 100\\,\\text{GeV}$, and $m_R = 10^{14}\\,\\text{GeV}$, the light neutrino mass is approximately:",
          options: [
            "$m_1 \\approx 100\\,\\text{GeV}$",
            "$m_1 \\approx 0.1\\,\\text{eV}$",
            "$m_1 \\approx 1\\,\\text{keV}$",
            "$m_1 \\approx m_D/m_R = 10^{-12}$ (dimensionless)",
          ],
          correct: [1],
          explanation: "$m_1 \\approx m_D^2/m_R = (10^{11}\\,\\text{eV})^2 / (10^{23}\\,\\text{eV}) = 10^{22}/10^{23}\\,\\text{eV} = 0.1\\,\\text{eV}$. This is exactly in the right ballpark for neutrino masses, making the seesaw a compelling explanation.",
        },
        {
          type: "msq",
          question: "How does neutrinoless double beta decay ($0\\nu\\beta\\beta$) differ from standard two-neutrino double beta decay ($2\\nu\\beta\\beta$)?",
          options: [
            "$0\\nu\\beta\\beta$ violates lepton number conservation by $\\Delta L = 2$",
            "In $0\\nu\\beta\\beta$, the two electrons have a sharp total energy equal to the $Q$ value (monoenergetic), while in $2\\nu\\beta\\beta$ the spectrum is continuous",
            "$0\\nu\\beta\\beta$ requires the neutrino to be a Majorana particle",
            "$0\\nu\\beta\\beta$ is kinematically forbidden for standard model neutrinos",
          ],
          correct: [0, 1, 2],
          explanation: "A, B, and C are all correct. D is wrong: $0\\nu\\beta\\beta$ is kinematically allowed but forbidden by lepton number conservation for Dirac neutrinos. For Majorana neutrinos, the intermediate virtual neutrino can be absorbed as an antineutrino, making the process possible.",
        },
        {
          type: "mcq",
          question: "Majorana phases in the PMNS matrix (for Majorana neutrinos) affect which observables?",
          options: [
            "Neutrino oscillation probabilities in both vacuum and matter",
            "Only the effective Majorana mass $\\langle m_{ee}\\rangle$ measured in $0\\nu\\beta\\beta$, not oscillation probabilities",
            "Only the CP-violating asymmetry in long-baseline oscillation experiments",
            "Only cosmological observables like the CMB power spectrum",
          ],
          correct: [1],
          explanation: "Majorana phases appear in $\\langle m_{ee}\\rangle = |\\sum U^2_{ei} m_i|$ because $U^2_{ei}$ (note: not $|U_{ei}|^2$) retains the phases. But in oscillation probabilities, which involve $|\\sum U_{\\alpha i}U^*_{\\beta i}|^2$, the Majorana phases cancel exactly. This is why oscillations cannot distinguish Dirac from Majorana neutrinos.",
        },
        {
          type: "numeric",
          question: "For a Type I seesaw with Dirac mass $m_D = 173\\,\\text{GeV}$ (top quark mass scale) and light neutrino mass $m_1 = 0.05\\,\\text{eV}$, estimate the required right-handed neutrino mass $m_R$ in GeV. Use $m_R \\approx m_D^2/m_1$.",
          answer: "6e14 GeV",
          tolerance: 0.5,
          hint: "$m_R = (173\\,\\text{GeV})^2 / (0.05\\,\\text{eV})$. Convert 0.05 eV to GeV: $0.05 \\times 10^{-9}\\,\\text{GeV}$.",
          explanation: "$m_R = (173)^2 / (5\\times10^{-11}) = 2.99\\times10^4 / 5\\times10^{-11} \\approx 6\\times10^{14}\\,\\text{GeV}$. This is close to the GUT scale $\\sim 10^{16}\\,\\text{GeV}$, suggesting a deep connection between neutrino masses and grand unification.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 7 – Neutrino Mass Models
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Neutrino Mass Models",
      content: [
        {
          type: "text",
          data: `
            <h2>What Any Mass Model Must Explain</h2>
            <p>
              A successful neutrino mass model must account for:
              <ol>
                <li><strong>Small masses</strong>: $m_\\nu \\lesssim 0.1\\,\\text{eV}$ — many orders of magnitude below the electron mass ($0.511\\,\\text{MeV}$).</li>
                <li><strong>Mass-squared hierarchy</strong>: $\\Delta m^2_{21} \\ll \\Delta m^2_{31}$.</li>
                <li><strong>Two large mixing angles</strong>: $\\theta_{12} \\approx 34°$, $\\theta_{23} \\approx 45°$.</li>
                <li><strong>One small mixing angle</strong>: $\\theta_{13} \\approx 8.5°$.</li>
              </ol>
              Optionally, the model should also predict the mass hierarchy (normal vs. inverted), whether
              neutrinos are quasi-degenerate, the amount of CP violation, and the Majorana phases.
            </p>
            <h2>Structure of the Neutrino Mass Matrix</h2>
            <p>
              Given $\\theta_{23} \\approx 45°$ and $\\theta_{13} \\approx 0$, the PMNS matrix takes the approximate form:
              $$U \\approx \\begin{pmatrix}
                c_{12} & s_{12} & \\theta_{13} \\\\
                -s_{12}/\\sqrt{2} & c_{12}/\\sqrt{2} & 1/\\sqrt{2} \\\\
                s_{12}/\\sqrt{2} & -c_{12}/\\sqrt{2} & 1/\\sqrt{2}
              \\end{pmatrix}$$
              The flavour-basis mass matrix $M_f = U \\text{Diag}(m_1, m_2, m_3) U^\\dagger$ encodes
              all mixing. Three zeroth-order textures correspond to:
              <ul>
                <li><strong>Normal hierarchy</strong>: $(m_1, m_2, m_3) \\approx (0, 0, \\sqrt{\\Delta m^2_{\\rm atm}})$</li>
                <li><strong>Inverted hierarchy</strong>: $(m_1, m_2, m_3) \\approx (\\sqrt{\\Delta m^2_{\\rm atm}}, \\sqrt{\\Delta m^2_{\\rm atm}}, 0)$</li>
                <li><strong>Quasi-degenerate</strong>: $(m_1, m_2, m_3) \\approx (m, m, m)$</li>
              </ul>
            </p>
            <h2>Mechanisms of Mass Generation</h2>
            <p>
              <strong>Type I Seesaw</strong>: Add heavy right-handed singlet neutrinos $N_R$ with Majorana
              masses $M_R \\gg m_D$. Light mass $m_\\nu \\approx m_D^2/M_R$. Naturally small neutrino masses
              for $M_R \\sim 10^{10}$–$10^{15}\\,\\text{GeV}$.
            </p>
            <p>
              <strong>Type II Seesaw</strong>: Add a scalar triplet $\\Delta$ with hypercharge $Y=-2$.
              A tree-level Majorana mass $m_\\nu = m_L$ arises from a triplet VEV $\\langle\\Delta^0\\rangle = v_L$.
              Left-right symmetric models naturally incorporate this.
            </p>
            <p>
              <strong>Type III Seesaw</strong>: Add fermion triplets instead of singlets.
            </p>
            <p>
              <strong>Radiative masses</strong>: Neutrinos can acquire Majorana masses at the loop level
              if the Lagrangian contains additional singly or doubly charged scalars that couple
              neutrinos to charged leptons (e.g. the Zee model at one loop, the Babu–Zee model at two loops).
              The loop suppression $\\sim 1/(16\\pi^2)$ naturally gives small masses even for $\\mathcal{O}(1)$
              Yukawa couplings.
            </p>
            <p>
              <strong>Extra dimensions</strong>: In ADD-type models, a SM-singlet fermion in the bulk
              ("right-handed neutrino") couples to the SM $\\nu_L$ on the brane. The suppression from the
              large extra dimension volume can explain the tiny Dirac coupling without fine-tuning.
            </p>
            <h2>Flavour Symmetries</h2>
            <p>
              The large neutrino mixing angles (compared to quarks) suggest a flavour symmetry principle.
              For example, the $\\mu$–$\\tau$ symmetry ($L_\\mu - L_\\tau$) predicts $\\theta_{23} = 45°$ and
              $\\theta_{13} = 0$ at leading order — consistent with observations. Breaking this symmetry
              generates the small corrections to these angles. Other symmetries explored include
              $A_4$, $S_4$, $Z_N$, and continuous groups like $SO(3)$.
            </p>
            <h2>Connecting to High-Scale Physics</h2>
            <p>
              Any new SM-singlet particle generically contributes to neutrino masses through higher-dimensional
              operators. The lowest-dimension such operator is the <strong>Weinberg operator</strong>:
              $$\\mathcal{O}_5 = \\frac{(L H)(L H)}{\\Lambda}$$
              where $L$ is the lepton doublet, $H$ is the Higgs doublet, and $\\Lambda$ is the new physics scale.
              After electroweak symmetry breaking ($\\langle H\\rangle = v \\approx 174\\,\\text{GeV}$):
              $$m_\\nu \\sim \\frac{v^2}{\\Lambda}$$
              For $m_\\nu \\sim 0.1\\,\\text{eV}$: $\\Lambda \\sim 3\\times10^{14}\\,\\text{GeV}$ — remarkably close
              to the GUT scale! This gives indirect evidence for grand unification.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "The Weinberg operator $\\mathcal{O}_5 = (LH)(LH)/\\Lambda$ is dimension 5. Why is it the leading contribution to neutrino masses in an effective field theory?",
          options: [
            "It is the only gauge-invariant operator involving neutrino fields",
            "It is the lowest-dimension gauge-invariant and Lorentz-invariant operator involving two lepton doublets, and gives a Majorana mass after electroweak symmetry breaking",
            "It preserves lepton number and is therefore allowed by all symmetries",
            "It arises from the exchange of the $Z$ boson",
          ],
          correct: [1],
          explanation: "The SM is an effective theory. Adding operators of increasing dimension gives corrections suppressed by powers of $v/\\Lambda$. The dimension-5 Weinberg operator $(LH)^2/\\Lambda$ is the unique lowest-dimension operator giving neutrino mass, violating lepton number by 2. Being Majorana in nature, it arises from integrating out heavy particles (the three seesaw types).",
        },
        {
          type: "msq",
          question: "Which of the following correctly characterize the Type I seesaw mechanism?",
          options: [
            "It requires the addition of heavy SM-singlet right-handed neutrinos",
            "The light neutrino mass scales as $m_\\nu \\sim m_D^2 / M_R$",
            "The right-handed neutrino mass $M_R$ must be at the electroweak scale",
            "Neutrinos produced by the seesaw are necessarily Majorana",
          ],
          correct: [0, 1, 3],
          explanation: "C is wrong: $M_R$ must be large ($\\gg m_D$) to suppress the light mass. The whole point of seesaw is that heavy $M_R$ gives light $m_\\nu$. A (singlet $N_R$), B (the seesaw formula), and D (Majorana from the $M_R \\bar N^c N$ term) are all correct.",
        },
        {
          type: "mcq",
          question: "Which discrete symmetry on the lepton flavour sector predicts $\\theta_{23} = 45°$ and $\\theta_{13} = 0$ at leading order?",
          options: [
            "CP symmetry",
            "$\\mu$–$\\tau$ interchange symmetry ($L_\\mu \\leftrightarrow L_\\tau$)",
            "T (time-reversal) symmetry",
            "$Z_2$ symmetry on the third generation only",
          ],
          correct: [1],
          explanation: "The $\\mu$–$\\tau$ symmetry exchanges $\\nu_\\mu \\leftrightarrow \\nu_\\tau$ (and $\\mu \\leftrightarrow \\tau$). It forces $|U_{\\mu i}| = |U_{\\tau i}|$ for all $i$, which implies $\\theta_{23} = 45°$ and $\\theta_{13} = 0$ exactly. Observed neutrino mixing is close to this symmetry, suggesting it is approximately realised in nature.",
        },
        {
          type: "numeric",
          question: "Using the Weinberg operator $m_\\nu \\approx v^2/\\Lambda$ with $v = 174\\,\\text{GeV}$ and $m_\\nu = 0.05\\,\\text{eV} = 5\\times10^{-11}\\,\\text{GeV}$, estimate the new physics scale $\\Lambda$ in GeV.",
          answer: "6e14 GeV",
          tolerance: 0.5,
          hint: "$\\Lambda = v^2 / m_\\nu = (174)^2 / (5\\times10^{-11})$",
          explanation: "$\\Lambda = (174)^2 / (5\\times10^{-11}) = 3.03\\times10^4 / 5\\times10^{-11} \\approx 6\\times10^{14}\\,\\text{GeV}$. This is tantalizingly close to the GUT scale ($\\sim 10^{15}$–$10^{16}\\,\\text{GeV}$), strongly suggesting that the new physics behind neutrino masses is connected to grand unification.",
        },
        {
          type: "mcq",
          question: "In a radiative neutrino mass model (e.g. the Zee model), neutrino masses are generated at loop level. What is the main advantage of this approach?",
          options: [
            "It avoids the need for any new particles beyond the SM",
            "The loop suppression factor $\\sim 1/(16\\pi^2)$ naturally explains small masses without requiring the new physics scale to be very high",
            "It automatically predicts the correct mixing angles",
            "Radiative masses are always Dirac in nature",
          ],
          correct: [1],
          explanation: "Each loop brings a factor $\\sim 1/(16\\pi^2) \\approx 6\\times10^{-3}$. With $\\mathcal{O}(1)$ Yukawa couplings at the TeV scale, one or two loops can generate masses $\\sim v^2/(16\\pi^2 \\Lambda)$ naturally in the sub-eV range. This is an alternative to pushing $\\Lambda$ to the GUT scale.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 8 – Neutrinos in Astrophysics and Cosmology
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Neutrinos in Astrophysics and Cosmology",
      content: [
        {
          type: "text",
          data: `
            <h2>Supernova Neutrinos</h2>
            <p>
              Core-collapse supernovae (SNe) are among the most energetic events in the universe.
              When a massive star's iron core collapses, it releases gravitational binding energy
              $E \\sim 3\\times10^{53}\\,\\text{erg} \\approx 3\\times10^{53}\\,\\text{erg}$. About
              <strong>99% of this energy is radiated in neutrinos</strong> within $\\sim 10\\,\\text{s}$.
            </p>
            <p>
              The neutrino burst from SN 1987A (Large Magellanic Cloud, $d \\approx 50\\,\\text{kpc}$)
              was detected by Kamiokande, IMB, and Baksan — the first confirmed detection of neutrinos
              from outside the solar system. About 19 events were detected in total.
              Key features:
              <ul>
                <li>Duration $\\sim 12\\,\\text{s}$ — consistent with the cooling timescale of a proto-neutron star.</li>
                <li>Average $\\bar\\nu_e$ energy $\\sim 10$–$20\\,\\text{MeV}$.</li>
                <li>No significant time delay between events of different energies, constraining $m_\\nu < \\text{few eV}$.</li>
              </ul>
            </p>
            <p>
              Future galactic SN events (distance $\\sim 10\\,\\text{kpc}$) would produce $\\sim 10^4$–$10^5$
              events in current detectors (SK, IceCube), enabling detailed study of the neutrino
              emission, shock wave propagation inside the star, and neutrino mixing. The neutrino burst
              precedes the optical signal by hours, enabling <em>early warning</em> of SN events.
            </p>
            <h2>Baryogenesis Through Leptogenesis</h2>
            <p>
              The observed universe has a baryon asymmetry: $n_B/n_\\gamma \\approx 6\\times10^{-10}$.
              This requires (Sakharov conditions):
              <ol>
                <li>$B$ violation</li>
                <li>$C$ and $CP$ violation</li>
                <li>Out-of-thermal-equilibrium conditions</li>
              </ol>
              The CP violation in the quark sector of the SM is grossly insufficient (by many orders
              of magnitude) to explain the observed baryon asymmetry.
            </p>
            <p>
              <strong>Leptogenesis</strong> (Fukugita–Yanagida 1986): The CP-violating decay of heavy
              Majorana right-handed neutrinos $N_i$ (at mass scale $M_N \\sim 10^{10}\\,\\text{GeV}$)
              into leptons and Higgs:
              $$N_i \\to \\ell + H, \\quad N_i \\to \\bar\\ell + \\bar H$$
              generates a net lepton number asymmetry. Electroweak sphaleron processes (which violate
              $B+L$ but conserve $B-L$) convert this lepton asymmetry into a baryon asymmetry:
              $$\\eta_B \\equiv \\frac{n_B}{s} \\approx -\\frac{28}{79}\\,\\frac{n_L}{s}$$
              Leptogenesis is therefore directly connected to the seesaw mechanism and the Majorana
              nature of neutrinos — the same heavy $N_i$ responsible for small light neutrino masses
              also explain the matter–antimatter asymmetry of the universe.
            </p>
            <h2>Cosmological Neutrino Mass Bounds</h2>
            <p>
              Relic neutrinos from the Big Bang are predicted to have a present-day number density
              $n_\\nu \\approx 56/\\text{cm}^3$ per flavour (for both $\\nu$ and $\\bar\\nu$ combined $= 112/\\text{cm}^3$).
              Their energy density:
              $$\\Omega_\\nu h^2 = \\frac{\\sum m_\\nu}{93.25\\,\\text{eV}}$$
              Cosmological observables (CMB power spectrum, large-scale structure, BAO) are sensitive
              to $\\sum m_\\nu$:
              <ul>
                <li>Massive neutrinos damp small-scale structure (they stream out of overdensities as
                    <em>hot dark matter</em>).</li>
                <li>The damping scale depends on $\\sum m_\\nu$.</li>
              </ul>
              Current upper bounds from CMB (Planck) + LSS: $\\sum m_\\nu < 0.12\\,\\text{eV}$ (95% C.L.) —
              the tightest bound on absolute neutrino masses, complementary to oscillation experiments
              (which only measure mass-squared differences).
            </p>
            <h2>High-Energy Astrophysical Neutrinos</h2>
            <p>
              Sources like active galactic nuclei, gamma-ray bursts, and supernova remnants may
              accelerate cosmic rays, which produce neutrinos through pion decay in interactions with
              target photons or nuclei. IceCube (South Pole) and ANTARES (Mediterranean) detect
              TeV–PeV neutrinos from such sources. The IceCube detection of a diffuse flux of
              high-energy cosmic neutrinos (2013) opened the era of high-energy neutrino astronomy.
            </p>
          `,
        },
        {
          type: "mcq",
          question: "Why do neutrinos carry away ~99% of the energy in a core-collapse supernova, despite the spectacular optical display?",
          options: [
            "Neutrinos are more massive than photons and carry more momentum",
            "The optical photons are completely absorbed and thermalized; neutrinos escape almost freely because of their tiny cross-section, carrying the bulk of the gravitational binding energy released during collapse",
            "Nuclear reactions inside the core preferentially produce neutrinos",
            "Photons are reflected back into the core by the stellar surface",
          ],
          correct: [1],
          explanation: "The gravitational binding energy release $\\sim 3\\times10^{53}\\,\\text{erg}$ is $\\sim 100\\times$ larger than the kinetic energy of the optical explosion. Photons are trapped in the dense core for thousands of years, while neutrinos escape in seconds. The visible supernova light ($\\sim 10^{51}\\,\\text{erg}$) represents only ~1% of the total energy.",
        },
        {
          type: "mcq",
          question: "SN 1987A neutrino detection provided a bound on neutrino mass by:",
          options: [
            "Measuring the neutrino mass directly from the kinematics of events in the detector",
            "Observing that neutrinos of different energies arrived at nearly the same time — a massive neutrino would be slower at lower energies, creating a measurable time spread",
            "Counting the total number of events and comparing to the expected luminosity",
            "Detecting oscillations between different neutrino flavours in the SN burst",
          ],
          correct: [1],
          explanation: "A massive neutrino with mass $m$ and energy $E$ travels at $v = c\\sqrt{1 - m^2/E^2} \\approx c(1 - m^2/2E^2)$. Over a distance $d$, the arrival time delay relative to a massless particle is $\\Delta t \\approx dm^2/(2E^2)$. The sub-second spread of SN 1987A events over a range of energies gave $m_\\nu \\lesssim \\text{few eV}$.",
        },
        {
          type: "msq",
          question: "Which of the following correctly describe leptogenesis?",
          options: [
            "It requires heavy Majorana right-handed neutrinos to decay CP-asymmetrically",
            "The lepton asymmetry is converted to baryon asymmetry by electroweak sphaleron processes",
            "It is directly connected to the seesaw mechanism for light neutrino masses",
            "It can work equally well with Dirac neutrinos",
          ],
          correct: [0, 1, 2],
          explanation: "D is wrong: standard leptogenesis requires Majorana right-handed neutrinos (which have Majorana masses), and the lepton number violation is essential for generating a net lepton asymmetry. Dirac neutrinos conserve lepton number. A, B, C are all correct hallmarks of the leptogenesis scenario.",
        },
        {
          type: "numeric",
          question: "If the three neutrino mass eigenstates have masses $m_1 = 0.01\\,\\text{eV}$, $m_2 = 0.012\\,\\text{eV}$, $m_3 = 0.05\\,\\text{eV}$, what is $\\sum m_\\nu$ in eV? Does this satisfy the Planck bound $\\sum m_\\nu < 0.12\\,\\text{eV}$?",
          answer: "0.072 eV",
          tolerance: 0.01,
          hint: "$\\sum m_\\nu = 0.01 + 0.012 + 0.05$",
          explanation: "$\\sum m_\\nu = 0.072\\,\\text{eV} < 0.12\\,\\text{eV}$. Yes, this satisfies the Planck bound. Note that oscillation experiments give lower bounds: $m_3 > \\sqrt{\\Delta m^2_{\\rm atm}} \\approx 0.05\\,\\text{eV}$ for NH, implying $\\sum m_\\nu \\gtrsim 0.06\\,\\text{eV}$, already close to the cosmological limit.",
        },
        {
          type: "mcq",
          question: "The cosmological bound on $\\sum m_\\nu$ comes from the fact that massive neutrinos act as:",
          options: [
            "Cold dark matter — they cluster on all scales and enhance structure formation",
            "Hot dark matter — they free-stream out of overdensities and suppress small-scale structure, leaving a measurable imprint on the matter power spectrum",
            "Dark energy — they accelerate the expansion of the universe",
            "Baryonic matter — they contribute to the baryon-to-photon ratio",
          ],
          correct: [1],
          explanation: "Neutrinos decouple while relativistic and thus have large thermal velocities. They stream freely over distances comparable to the horizon at matter–radiation equality, suppressing density fluctuations on those scales. The amplitude of this suppression, visible in CMB and galaxy surveys, constrains $\\sum m_\\nu$.",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // Chapter 9 – Current and Future Experiments
    // ═══════════════════════════════════════════════════════════════════════
    {
      title: "Current and Future Experiments in Neutrino Physics",
      content: [
        {
          type: "text",
          data: `
            <h2>Overview of Experimental Neutrino Physics</h2>
            <p>
              Neutrino physics is extraordinarily experimental — nearly every major discovery has
              come from unexpected experimental results rather than anticipated theoretical predictions.
              Experiments probe fundamentally different aspects of neutrino physics, and we classify them
              by the key observables they target.
            </p>
            <h2>Oscillation Parameter Measurements</h2>
            <p>
              <strong>Solar parameters ($\\Delta m^2_{21}$, $\\theta_{12}$):</strong>
              <ul>
                <li>SuperKamiokande (ongoing): real-time detection of \${}^8\\text{B}$ solar neutrinos via $\\nu e^-$ elastic scattering.</li>
                <li>KamLAND: confirmed LMA with reactor $\\bar\\nu_e$; best precision on $\\Delta m^2_{21}$.</li>
                <li>JUNO (China, upcoming): will measure $\\theta_{12}$ and $\\Delta m^2_{21}$ with percent-level precision at $L \\sim 53\\,\\text{km}$.</li>
              </ul>
              <strong>Atmospheric parameters ($\\Delta m^2_{31}$, $\\theta_{23}$):</strong>
              <ul>
                <li>SuperKamiokande: ongoing atmospheric neutrino analysis.</li>
                <li>K2K ($\\nu_\\mu$ beam, 250 km): confirmed atmospheric oscillation with accelerator neutrinos.</li>
                <li>MINOS (Fermilab–Minnesota, 735 km), T2K (Japan, 295 km), NOvA (810 km): precision measurements of $\\theta_{23}$, $\\Delta m^2_{31}$, and hints at CP violation.</li>
                <li>DUNE (Fermilab–South Dakota, 1300 km): under construction, designed for CP violation measurement and mass hierarchy determination.</li>
                <li>IceCube-DeepCore, ORCA: atmospheric neutrino oscillations at GeV energies.</li>
              </ul>
              <strong>Measurement of $\\theta_{13}$:</strong>
              <ul>
                <li>CHOOZ, Double CHOOZ (France): reactor $\\bar\\nu_e$ disappearance at $L \\sim 1\\,\\text{km}$.</li>
                <li>Daya Bay (China, 2012): first precise measurement of $\\theta_{13}$; $\\sin^2 2\\theta_{13} = 0.084 \\pm 0.005$.</li>
                <li>RENO (Korea): independent confirmation.</li>
              </ul>
              <strong>Mass hierarchy (sign of $\\Delta m^2_{31}$):</strong>
              <ul>
                <li>JUNO: sensitivity from vacuum oscillation interference between the two $\\Delta m^2$ scales.</li>
                <li>DUNE, ORCA, PINGU: matter effects in long-baseline or atmospheric neutrinos.</li>
              </ul>
              <strong>CP violation ($\\delta$):</strong>
              <ul>
                <li>T2K and NOvA: first hints ($\\delta \\sim -\\pi/2$, favoring maximal CP violation).</li>
                <li>DUNE: designed to measure $\\delta$ with $5\\sigma$ significance for a wide range of $\\delta$ values using $\\nu_\\mu \\to \\nu_e$ appearance at two energies.</li>
                <li>Hyper-Kamiokande (Japan, $\\sim 260\\,\\text{kton}$): larger SK successor with much higher event statistics.</li>
              </ul>
            </p>
            <h2>Absolute Mass Measurements</h2>
            <p>
              <strong>Direct kinematic measurements:</strong>
              <ul>
                <li>KATRIN (Germany): tritium beta decay endpoint; sensitivity $m_{\\nu_e} < 0.2\\,\\text{eV}$ (90% C.L.); current bound $< 0.45\\,\\text{eV}$.</li>
                <li>Project 8: cyclotron radiation emission spectroscopy, aiming for sub-0.04 eV sensitivity.</li>
              </ul>
              <strong>Cosmological:</strong>
              <ul>
                <li>Planck CMB: $\\sum m_\\nu < 0.12\\,\\text{eV}$.</li>
                <li>Future surveys (EUCLID, LSST, CMB-S4): forecast to reach $\\sigma(\\sum m_\\nu) \\sim 0.02\\,\\text{eV}$, potentially making a detection.</li>
              </ul>
            </p>
            <h2>Majorana Nature: Neutrinoless Double Beta Decay</h2>
            <p>
              If the inverted hierarchy is correct and neutrinos are Majorana, $\\langle m_{ee}\\rangle \\gtrsim 0.02\\,\\text{eV}$.
              Next-generation $0\\nu\\beta\\beta$ experiments aim for this sensitivity:
              <ul>
                <li>KamLAND-Zen (\${}^{136}\\text{Xe}$, Japan): $\\langle m_{ee}\\rangle < 61$–$165\\,\\text{meV}$ (2022).</li>
                <li>GERDA, MAJORANA (\${}^{76}\\text{Ge}$): $\\langle m_{ee}\\rangle < 79$–$180\\,\\text{meV}$.</li>
                <li>nEXO, LEGEND-1000, CUPID: tonne-scale experiments targeting $\\langle m_{ee}\\rangle \\sim 10$–$20\\,\\text{meV}$.</li>
              </ul>
            </p>
            <h2>Astrophysical Neutrinos</h2>
            <p>
              <ul>
                <li><strong>Diffuse supernova neutrino background (DSNB)</strong>: SK-Gd (SK with Gd), JUNO aim to detect relic neutrinos from all past SNe.</li>
                <li><strong>High-energy cosmic neutrinos</strong>: IceCube, ANTARES, KM3NeT (Mediterranean); IceCube has detected $>$100 TeV–PeV events.</li>
                <li><strong>Galactic SN watch</strong>: SNEWS (Supernova Early Warning System) coordinates multiple detectors globally.</li>
              </ul>
            </p>
            <h2>Sterile Neutrinos</h2>
            <p>
              The anomalies at LSND, MiniBooNE (appearance), reactor anomaly (disappearance at very short
              baseline), and Gallium anomaly (radioactive source experiments) have motivated a search for
              eV-scale sterile neutrinos. Very short baseline reactor experiments (STEREO, PROSPECT, NEOS,
              Neutrino-4) and source experiments (BEST) are exploring $\\Delta m^2 \\sim 1\\,\\text{eV}^2$.
            </p>
          `,
        },
        {
          type: "msq",
          question: "Which experiments contributed to the precise measurement of $\\theta_{13}$ after the initial CHOOZ bound?",
          options: [
            "Daya Bay (China) — reactor $\\bar\\nu_e$ disappearance",
            "RENO (Korea) — reactor $\\bar\\nu_e$ disappearance",
            "T2K (Japan) — $\\nu_\\mu \\to \\nu_e$ appearance in accelerator beam",
            "SuperKamiokande — atmospheric neutrino oscillations",
          ],
          correct: [0, 1, 2],
          explanation: "All three (Daya Bay, RENO, T2K) provided measurements of $\\theta_{13}$. Daya Bay made the first definitive measurement in 2012 with reactor neutrinos at $L \\sim 1.6\\,\\text{km}$. RENO confirmed it. T2K measured electron neutrino appearance consistent with a nonzero $\\theta_{13}$. SK atmospheric data has weaker sensitivity to $\\theta_{13}$.",
        },
        {
          type: "mcq",
          question: "The DUNE experiment uses a very long baseline (Fermilab to South Dakota, $L = 1300\\,\\text{km}$). Why is such a long baseline advantageous for measuring the CP-violating phase $\\delta$?",
          options: [
            "The longer baseline increases the total number of oscillations, making the signal larger",
            "At 1300 km, Earth matter effects are large enough to break the degeneracy between $\\delta$ and the mass hierarchy, and the experiment can run at two different beam energies to independently measure both the first and second oscillation maxima",
            "At this distance, all three $\\Delta m^2$ values contribute equally to oscillations",
            "A longer baseline reduces background from atmospheric neutrinos",
          ],
          correct: [1],
          explanation: "At $L = 1300\\,\\text{km}$, matter effects (MSW) are significant for multi-GeV neutrinos and have opposite sign for neutrinos vs antineutrinos. This breaks the $\\delta$-hierarchy degeneracy that afflicts shorter baselines. Running in both neutrino and antineutrino mode and measuring $\\nu_\\mu \\to \\nu_e$ appearance at two energies (first and second oscillation maxima) allows independent extraction of $\\delta$.",
        },
        {
          type: "mcq",
          question: "What is the key observable that would allow JUNO (a medium-baseline reactor experiment at $L \\sim 53\\,\\text{km}$) to determine the neutrino mass hierarchy?",
          options: [
            "The total rate of $\\bar\\nu_e$ disappearance, which differs between NH and IH",
            "The fine structure of the energy spectrum: the interference between $\\Delta m^2_{31}$ and $\\Delta m^2_{32}$ oscillation frequencies is different for NH vs IH",
            "The day/night asymmetry from Earth matter effects",
            "The measurement of $\\theta_{13}$ at higher precision than Daya Bay",
          ],
          correct: [1],
          explanation: "At $L \\sim 53\\,\\text{km}$, both $\\Delta m^2_{31}$ and $\\Delta m^2_{32}$ drive oscillations. For NH, $|\\Delta m^2_{31}| = \\Delta m^2_{21} + |\\Delta m^2_{32}|$; for IH the ordering reverses. The interference pattern of the two frequencies — measurable as a subtle modulation of the survival probability spectrum — depends on the sign of $\\Delta m^2_{31}$. Resolving this requires energy resolution $< 3\\%/\\sqrt{E}$.",
        },
        {
          type: "msq",
          question: "Which of the following would be evidence for physics beyond the three-neutrino mixing paradigm?",
          options: [
            "Observation of $\\nu_\\mu \\to \\nu_e$ appearance at $\\Delta m^2 \\sim 1\\,\\text{eV}^2$ (as claimed by LSND and MiniBooNE)",
            "Non-observation of $0\\nu\\beta\\beta$ decay even with $\\langle m_{ee}\\rangle$ sensitivity below the inverted hierarchy prediction",
            "Measurement of $\\theta_{23} = 45°$ exactly",
            "Non-unitarity of the $3\\times3$ PMNS matrix (measurable through precision near-detector measurements)",
          ],
          correct: [0, 1, 3],
          explanation: "A (LSND/MiniBooNE anomaly) implies a fourth mass eigenstate. B: if IH is correct and $0\\nu\\beta\\beta$ is not observed at the sensitivity of $\\sim20\\,\\text{meV}$, either neutrinos are Dirac or the hierarchy is normal. D: non-unitarity implies mixing with additional states (sterile neutrinos). C is just a specific value of a standard parameter, not beyond-SM.",
        },
        {
          type: "numeric",
          question: "The KATRIN experiment measures the tritium beta decay spectrum near the endpoint. If its current sensitivity is $m_{\\nu_e} < 0.45\\,\\text{eV}$ and its design goal is $m_{\\nu_e} < 0.2\\,\\text{eV}$, by what factor does it need to improve the upper bound (in terms of mass)?",
          answer: "2.25",
          tolerance: 0.1,
          hint: "Improvement factor $= 0.45 / 0.20$",
          explanation: "$0.45 / 0.20 = 2.25$. Note that the sensitivity to $m_\\nu$ scales as the fourth root of statistics ($m_\\nu \\propto N^{-1/4}$), so a factor 2.25 improvement in mass requires roughly $(2.25)^4 \\approx 26$ times more data or improved systematic control.",
        },
      ],
    },

  ],
};
