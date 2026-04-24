/**
 * Analytical Mechanics – A Complete Course
 *
 * Structured as a progressive journey from Newtonian foundations to
 * Hamiltonian mechanics, following the depth and intellectual spirit of
 * Landau & Lifshitz, Vol. 1, but written in a style that introduces
 * terminology gradually and remains a comfortable read throughout.
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
  title: "Analytical Mechanics – A Complete Course",

  content: [

    // ═══════════════════════════════════════════════════════════════════
    // PART I: FOUNDATIONS
    // ═══════════════════════════════════════════════════════════════════

    // ── Theory: What is a Mechanical System? ───────────────────────────
    {
      type: "text",
      data: `
        <h2>What is Mechanics?</h2>
        <p>
          Mechanics is the study of how things move. At its core, it deals with a very simple question:
          given the state of a system right now, what will it do next? For classical (non-quantum,
          non-relativistic) physics, this question has a precise, deterministic answer — a discovery so
          powerful it reshaped human thought.
        </p>
        <p>
          The <em>state</em> of a mechanical system at any instant is fully specified by giving the positions
          and velocities of all its constituent parts at that instant. From these, Newton's laws (or
          equivalently, the principle of least action) uniquely determine the entire future — and past —
          trajectory of the system.
        </p>
        <p>
          A <strong>particle</strong> is an idealisation: a body whose physical extent can be completely
          ignored for the purposes of the problem at hand. The Earth is a particle when we study its
          orbit around the Sun; it is emphatically not a particle when we study its rotation. The same
          physical object can be a particle in one context and a rigid body — or something more complex —
          in another.
        </p>
        <p>
          In what follows we will develop mechanics in three stages of increasing elegance and power:
          Newtonian mechanics (forces and accelerations), Lagrangian mechanics (generalised coordinates
          and the action principle), and Hamiltonian mechanics (phase space and canonical structure).
          Each formulation covers exactly the same physics, but each reveals different geometric and
          physical structures that are invisible in the others.
        </p>
      `,
    },

    // ── Theory 1: Generalised Coordinates ──────────────────────────────
    {
      type: "text",
      data: `
        <h2>Generalised Coordinates and Degrees of Freedom</h2>
        <p>
          Consider a collection of $N$ particles moving in three-dimensional space. In principle, we
          need $3N$ numbers — the three Cartesian coordinates of each particle — to specify where
          everything is. We also need $3N$ velocity components to know the state. But in practice, the
          particles are almost never entirely free; they are subject to <em>constraints</em>.
        </p>
        <p>
          A bead threaded on a wire, a pendulum bob at a fixed distance from its pivot, a wheel rolling
          on a rail — all of these are constrained systems. Constraints reduce the number of truly
          independent quantities needed to describe the system. The number of independent coordinates
          required to fully specify the configuration of a system is called its number of
          <strong>degrees of freedom</strong>, often denoted $s$ (or $f$ in some texts).
        </p>
        <p>
          For a system of $N$ particles subject to $k$ independent holonomic constraints (see below),
          the number of degrees of freedom is:
          $$s = 3N - k$$
        </p>
        <p>
          Any set of $s$ independent quantities $q_1, q_2, \ldots, q_s$ that <em>completely</em> specify
          the configuration of the system are called <strong>generalised coordinates</strong>.
          They are not required to be lengths; they can be angles, ratios, arc lengths, or any other
          quantities, so long as they label each distinct configuration of the system with a unique tuple
          of numbers. The time derivatives $\dot{q}_i = dq_i/dt$ are called
          <strong>generalised velocities</strong>.
        </p>
        <h3>Examples</h3>
        <ul>
          <li><strong>Simple pendulum</strong>: 1 particle, 1 constraint (fixed length). $s = 3(1)-2 = 1$.
          One generalised coordinate: the angle $\\theta$ from the vertical.</li>
          <li><strong>Double pendulum in a plane</strong>: 2 particles, 2 constraints (two fixed rod lengths),
          motion confined to a plane (2 more constraints, but they are non-independent here — the plane
          constraint was already accounted for). Net: $s = 2$. Generalised coordinates: angles
          $\\theta_1, \\theta_2$.</li>
          <li><strong>Rigid body in free space</strong>: effectively infinitely many particles with infinitely
          many distance constraints, but the net result is $s = 6$: three coordinates for the centre of mass,
          three angles for orientation.</li>
        </ul>
        <p>
          The power of generalised coordinates is that they <em>automatically encode the constraints</em>.
          Once you write the system in terms of its $s$ generalised coordinates, the constraints have
          disappeared from the problem — they are simply not there. You never need to compute constraint
          forces (tensions in rods, normal forces from surfaces) unless you specifically want to.
        </p>
      `,
    },

    // ── MCQ 1 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question: "A bead is constrained to move along a rigid circular hoop of radius $R$, which itself rotates freely about a vertical diameter. How many degrees of freedom does this system have?",
      options: [
        "1 — the bead's position along the hoop fully determines everything",
        "2 — one angle for the bead's position on the hoop, one for the hoop's rotation",
        "3 — x, y, z of the bead",
        "4 — two angles for the bead, two for the hoop",
      ],
      correct: [1],
      explanation:
        "The bead's position on the hoop requires one angle $\\theta$; the hoop's orientation about the vertical requires one more angle $\\phi$. Together these two angles fully specify the configuration. So $s = 2$.",
    },

    // ── Theory: Holonomic vs Non-Holonomic Constraints ──────────────────
    {
      type: "text",
      data: `
        <h2>Holonomic and Non-Holonomic Constraints</h2>
        <p>
          A constraint is called <strong>holonomic</strong> if it can be expressed as an equation relating
          only the coordinates (and possibly time), with no velocities:
          $$f(q_1, q_2, \ldots, q_n, t) = 0$$
          Holonomic constraints directly reduce the number of independent coordinates. The constraint
          surface in configuration space is a smooth submanifold, and we can always choose a new set of
          coordinates that live entirely within it.
        </p>
        <p>
          A constraint that involves velocities but cannot be integrated to remove them is called
          <strong>non-holonomic</strong>. The classic example is a disk rolling on a flat surface
          without slipping. If $(x, y)$ is the disk's contact point and $\phi$ its orientation angle,
          the no-slip condition gives:
          $$\dot{x} = R\dot{\phi}\cos\psi, \quad \dot{y} = R\dot{\phi}\sin\psi$$
          where $\psi$ is the disk's heading angle. These velocity equations <em>cannot</em> be integrated
          into position equations because the right-hand sides are path-dependent.
          The rolling disk has $s = 5$ configuration parameters (two translations, three rotation angles)
          but only $s = 3$ degrees of freedom for velocities, because of the two rolling constraints.
        </p>
        <p>
          This distinction matters enormously for the choice of method:
        </p>
        <ul>
          <li><strong>Holonomic systems</strong> are handled elegantly by the Lagrangian framework
          developed below.</li>
          <li><strong>Non-holonomic systems</strong> require additional multipliers or other special
          treatment. They arise in robotics, vehicle dynamics, and geometric mechanics.</li>
        </ul>
        <p>
          There is also the category of <strong>rheonomic</strong> (time-dependent) constraints,
          as opposed to <strong>scleronomic</strong> (time-independent) ones. A bead on a wire that
          is itself moving involves a rheonomic constraint.
        </p>
      `,
    },

    // ── MSQ 1 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question: "Which of the following are <strong>holonomic</strong> constraints? (Select all that apply.)",
      options: [
        "A bead on a fixed circular hoop: $x^2 + y^2 = R^2$",
        "A disc rolling without slipping on a plane (constraint involves $\\dot{x}$, $\\dot{\\phi}$)",
        "A particle on a spherical shell: $x^2 + y^2 + z^2 = R^2$",
        "A particle constrained to a surface $z = f(x, y, t)$ moving in time",
        "An ice skate: the blade's velocity must point along the blade's axis (non-integrable)",
      ],
      correct: [0, 2, 3],
      explanation:
        "Options A, C, and D are all expressible as $f(q_i, t) = 0$ with no velocities — they are holonomic. Options B and E involve velocities in an irreducible way (they cannot be integrated to position-only relations) — these are non-holonomic.",
    },

    // ═══════════════════════════════════════════════════════════════════
    // PART II: THE LAGRANGIAN FRAMEWORK
    // ═══════════════════════════════════════════════════════════════════

    // ── Theory: The Principle of Least Action ───────────────────────────
    {
      type: "text",
      data: `
        <h2>The Principle of Least Action</h2>
        <p>
          Newton's second law says: the force on a body equals its mass times its acceleration. It is
          a local statement — it tells you what happens at each instant. But there is a more elegant,
          global formulation of the same physics, one that describes the entire trajectory at once.
        </p>
        <p>
          Every mechanical system is characterised by a function $L(q, \dot{q}, t)$ called the
          <strong>Lagrangian</strong>. The motion of the system from a configuration $q^{(1)}$ at time
          $t_1$ to a configuration $q^{(2)}$ at time $t_2$ is the one for which the integral
          $$S = \int_{t_1}^{t_2} L(q, \dot{q}, t)\, dt$$
          called the <strong>action</strong>, is stationary (a minimum, maximum, or saddle point — in
          practice, usually a minimum for short time intervals). This is <strong>Hamilton's principle</strong>
          or <strong>the principle of least action</strong>.
        </p>
        <p>
          To turn this principle into equations of motion, we demand $\delta S = 0$. A small
          variation $q_i(t) \to q_i(t) + \delta q_i(t)$ with $\delta q_i(t_1) = \delta q_i(t_2) = 0$
          gives, after integrating by parts:
          $$\delta S = \int_{t_1}^{t_2} \sum_i \left(\frac{\partial L}{\partial q_i} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i}\right) \delta q_i\, dt = 0$$
          Since the $\delta q_i$ are arbitrary and independent, each term in the sum must vanish
          separately, giving the <strong>Euler–Lagrange equations</strong>:
          $$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = 0, \quad i = 1, 2, \ldots, s$$
        </p>
        <p>
          This is a system of $s$ second-order ordinary differential equations — one per degree of freedom.
          Their general solution contains $2s$ arbitrary constants, determined by initial conditions
          (the values of all $q_i$ and $\dot{q}_i$ at some initial time).
        </p>
        <p>
          Two important remarks about the Lagrangian:
        </p>
        <ul>
          <li>Multiplying $L$ by any non-zero constant does not change the equations of motion (the
          equations are homogeneous in $L$). This means the Lagrangian is defined up to an
          overall scale.</li>
          <li>Adding a total time derivative of any function $f(q, t)$ to $L$ also leaves the equations
          unchanged: $L' = L + \tfrac{d}{dt}f(q,t)$, since the boundary contribution vanishes. So
          the Lagrangian is defined up to an additive total time derivative.</li>
        </ul>
      `,
    },

    // ── Theory: The Lagrangian for a Free Particle ──────────────────────
    {
      type: "text",
      data: `
        <h2>The Lagrangian from First Principles: Free Particle</h2>
        <p>
          We have said that the Lagrangian characterises the system, but we have not yet said what
          $L$ actually <em>is</em>. Let us derive it for the simplest case: a free particle in an
          inertial frame.
        </p>
        <p>
          In an inertial frame, space is homogeneous (all positions are equivalent) and isotropic
          (all directions are equivalent), and time is homogeneous (all instants are equivalent).
          These symmetries severely constrain the Lagrangian:
        </p>
        <ul>
          <li>Homogeneity of space: $L$ cannot depend on the position $\mathbf{r}$.</li>
          <li>Homogeneity of time: $L$ cannot depend explicitly on $t$.</li>
          <li>Isotropy of space: $L$ cannot depend on the direction of $\mathbf{v}$, only on
          its magnitude $|\mathbf{v}|^2 = v^2$.</li>
        </ul>
        <p>
          So $L = L(v^2)$. Now we use <strong>Galileo's relativity principle</strong>: the laws of
          mechanics must be identical in any two inertial frames. If a second frame moves at velocity
          $\boldsymbol{\varepsilon}$ (infinitesimal) relative to the first, velocities transform as
          $\mathbf{v}' = \mathbf{v} + \boldsymbol{\varepsilon}$. For $L$ and $L'$ to give the same
          equations of motion, their difference must be a total time derivative:
          $$L(v'^2) - L(v^2) = L(v^2 + 2\mathbf{v}\cdot\boldsymbol{\varepsilon} + \varepsilon^2) - L(v^2) \approx \frac{\partial L}{\partial v^2} \cdot 2\mathbf{v} \cdot \boldsymbol{\varepsilon}$$
          This must be a total time derivative for all $\mathbf{v}$, which forces $\partial L/\partial v^2$
          to be a constant. Therefore:
          $$L = \frac{1}{2}mv^2$$
          The constant $m$ is the <strong>mass</strong> of the particle. For a system of non-interacting
          particles, the Lagrangian is additive:
          $$L = \sum_a \frac{1}{2}m_a v_a^2$$
        </p>
        <p>
          For interacting particles, we add a potential energy term that accounts for the interactions.
          The general Lagrangian for a closed (isolated) system is:
          $$L = T - U = \sum_a \frac{1}{2}m_a v_a^2 - U(\mathbf{r}_1, \mathbf{r}_2, \ldots)$$
          where $U$ depends only on the positions and not on velocities (for most common interactions).
          The Euler–Lagrange equations then reproduce exactly Newton's second law
          $m_a \ddot{\mathbf{r}}_a = -\partial U/\partial \mathbf{r}_a$.
        </p>
      `,
    },

    // ── Theory: The Lagrangian for a Simple Pendulum ────────────────────
    {
      type: "text",
      data: `
        <h2>Building a Lagrangian: The Simple Pendulum</h2>
        <p>
          Let us demonstrate the method concretely. A simple pendulum consists of a bob of mass $m$
          suspended from a fixed pivot by a massless, inextensible rod of length $l$, free to swing
          in a vertical plane.
        </p>
        <p>
          The system has one degree of freedom. The natural generalised coordinate is the angle
          $\theta$ from the vertical (taking downward as positive). The Cartesian position of the bob is:
          $$x = l\sin\theta, \quad y = -l\cos\theta \quad (\text{origin at pivot, } y \text{ downward})$$
          The velocity components are:
          $$\dot{x} = l\dot{\theta}\cos\theta, \quad \dot{y} = l\dot{\theta}\sin\theta$$
          so the speed squared is:
          $$v^2 = \dot{x}^2 + \dot{y}^2 = l^2\dot{\theta}^2$$
        </p>
        <p>
          Taking the pivot as the reference level for potential energy (with $y$ measured downward,
          the bob sits at height $-l\cos\theta$, so potential energy $= -mgl\cos\theta$):
          $$T = \frac{1}{2}ml^2\dot{\theta}^2, \quad U = -mgl\cos\theta$$
          $$\boxed{L = \frac{1}{2}ml^2\dot{\theta}^2 + mgl\cos\theta}$$
        </p>
        <p>
          The Euler–Lagrange equation:
          $$\frac{d}{dt}\frac{\partial L}{\partial \dot{\theta}} - \frac{\partial L}{\partial \theta} = 0$$
          gives:
          $$ml^2\ddot{\theta} - (-mgl\sin\theta) = 0 \implies \ddot{\theta} = -\frac{g}{l}\sin\theta$$
          This is the <em>exact</em> equation of motion, which is non-linear and requires elliptic
          integrals for its full solution. For small angles, $\sin\theta \approx \theta$, giving the
          simple harmonic oscillator $\ddot{\theta} = -\omega^2\theta$ with $\omega = \sqrt{g/l}$.
        </p>
        <p>
          Notice what we did <em>not</em> have to do: we never computed the tension in the rod, never
          resolved forces along and perpendicular to the rod. The constraint was absorbed automatically.
        </p>
      `,
    },

    // ── MCQ 2 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "For a simple pendulum of length $l$ and bob mass $m$, which is the correct Lagrangian with the pivot as the origin (y-axis pointing upward)?",
      options: [
        "$L = \\frac{1}{2}ml^2\\dot{\\theta}^2 - mgl(1-\\cos\\theta)$",
        "$L = \\frac{1}{2}ml^2\\dot{\\theta}^2 + mgl\\cos\\theta$",
        "$L = \\frac{1}{2}ml^2\\dot{\\theta}^2 - mgl\\cos\\theta$",
        "$L = mgl\\cos\\theta$",
      ],
      correct: [1],
      explanation:
        "With the y-axis pointing upward and origin at the pivot, the bob's height is $y = -l\\cos\\theta$ (negative because the bob hangs below). Potential energy is $U = mgy = -mgl\\cos\\theta$. Therefore $L = T - U = \\frac{1}{2}ml^2\\dot{\\theta}^2 + mgl\\cos\\theta$. Option A uses a shifted potential (which is also valid and gives the same equations of motion — differing only by a constant).",
    },

    // ── Theory: Lagrangian in Various Coordinate Systems ────────────────
    {
      type: "text",
      data: `
        <h2>The Lagrangian in Various Coordinate Systems</h2>
        <p>
          One of the most practical advantages of the Lagrangian framework is its coordinate-independence.
          The form $L = T - U$ and the Euler–Lagrange equations hold in any coordinate system.
          The kinetic energy $T$ takes different forms depending on the coordinates used.
        </p>
        <p>
          Recall that the square of a velocity element is $v^2 = (dl/dt)^2$, where $dl$ is the
          infinitesimal arc length in the chosen coordinate system. In general coordinates $q_i$:
          $$T = \frac{1}{2}\sum_{i,k} a_{ik}(q)\,\dot{q}_i\dot{q}_k$$
          where $a_{ik}(q)$ is the metric tensor in those coordinates. Here are the standard cases:
        </p>
        <h3>Cartesian Coordinates $(x, y, z)$</h3>
        $$T = \frac{1}{2}m(\dot{x}^2 + \dot{y}^2 + \dot{z}^2)$$
        <h3>Cylindrical Coordinates $(r, \phi, z)$, where $dl^2 = dr^2 + r^2 d\phi^2 + dz^2$</h3>
        $$T = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\phi}^2 + \dot{z}^2)$$
        <h3>Spherical Coordinates $(r, \theta, \phi)$, where $dl^2 = dr^2 + r^2 d\theta^2 + r^2\sin^2\theta\, d\phi^2$</h3>
        $$T = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\theta}^2 + r^2\sin^2\theta\,\dot{\phi}^2)$$
        <p>
          In each case, the Euler–Lagrange equations applied to $L = T - U$ produce the correct
          equations of motion in those coordinates, automatically incorporating all the curvature
          and Coriolis terms that would need to be put in by hand in a Newtonian approach.
        </p>
        <p>
          For a particle moving in a central potential $U = U(r)$, the spherical coordinate form
          is ideal. The absence of $\theta$ or $\phi$ in $U$ (or in $T$ except through $r$) will
          generate powerful conservation laws, as we will see.
        </p>
      `,
    },

    // ── MCQ 3 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "A particle of mass $m$ moves on the surface of a sphere of radius $R$ in a gravitational field ($g$ downward). Using spherical coordinates $\\theta$ (polar, from vertical) and $\\phi$ (azimuthal), the Lagrangian is:",
      options: [
        "$L = \\frac{1}{2}mR^2(\\dot{\\theta}^2 + \\sin^2\\theta\\, \\dot{\\phi}^2) - mgR\\cos\\theta$",
        "$L = \\frac{1}{2}mR^2(\\dot{\\theta}^2 + \\dot{\\phi}^2) + mgR\\cos\\theta$",
        "$L = \\frac{1}{2}mR^2(\\dot{\\theta}^2 + \\sin^2\\theta\\, \\dot{\\phi}^2) + mgR\\cos\\theta$",
        "$L = \\frac{1}{2}mR^2\\dot{\\theta}^2 - mgR\\cos\\theta$",
      ],
      correct: [0],
      explanation:
        "On a sphere of radius $R$, $r = R$ is constant so $\\dot{r} = 0$. The kinetic energy in spherical coordinates becomes $T = \\frac{1}{2}mR^2(\\dot{\\theta}^2 + \\sin^2\\theta\\,\\dot{\\phi}^2)$. The height of the particle above the south pole is $R\\cos\\theta$ (with $\\theta = 0$ at the top), so $U = mgR\\cos\\theta$. Thus $L = T - U = \\frac{1}{2}mR^2(\\dot{\\theta}^2 + \\sin^2\\theta\\,\\dot{\\phi}^2) - mgR\\cos\\theta$.",
    },

    // ═══════════════════════════════════════════════════════════════════
    // PART III: CONSERVATION LAWS
    // ═══════════════════════════════════════════════════════════════════

    // ── Theory: Conservation Laws and Noether's Theorem ─────────────────
    {
      type: "text",
      data: `
        <h2>Conservation Laws and Symmetry: Noether's Theorem</h2>
        <p>
          Some of the most profound results in physics connect the <em>symmetries</em> of a system
          to its <em>conserved quantities</em>. This connection is made explicit by
          <strong>Noether's theorem</strong> (1915): every continuous symmetry of the Lagrangian
          corresponds to a conserved quantity. We will derive the three fundamental conservation
          laws directly from space-time symmetries.
        </p>
        <h3>1. Conservation of Energy — from time symmetry</h3>
        <p>
          If the Lagrangian does not depend explicitly on time ($\partial L/\partial t = 0$), then
          the quantity
          $$E = \sum_i \dot{q}_i \frac{\partial L}{\partial \dot{q}_i} - L$$
          is conserved. To verify this, differentiate $E$ with respect to time and use the
          Euler–Lagrange equations; the result is zero.
        </p>
        <p>
          For $L = T - U$ where $T$ is a quadratic function of velocities, Euler's theorem on
          homogeneous functions gives $\sum_i \dot{q}_i (\partial T/\partial \dot{q}_i) = 2T$,
          and since $L = T - U$ with $U$ independent of velocities:
          $$E = 2T - (T - U) = T + U$$
          The conserved quantity is therefore the total mechanical energy.
        </p>
        <h3>2. Conservation of Momentum — from spatial translation symmetry</h3>
        <p>
          If the Lagrangian is unchanged under a uniform translation of all particles
          ($\mathbf{r}_a \to \mathbf{r}_a + \boldsymbol{\varepsilon}$), i.e. if the system is
          isolated from external forces in that direction, then
          $$\mathbf{P} = \sum_a m_a \mathbf{v}_a = \sum_a \frac{\partial L}{\partial \mathbf{v}_a}$$
          is conserved. Individual components are conserved independently if the potential energy
          is independent of the corresponding coordinate.
        </p>
        <h3>3. Conservation of Angular Momentum — from rotational symmetry</h3>
        <p>
          If the Lagrangian is unchanged under a rigid rotation of the entire system, then the
          angular momentum:
          $$\mathbf{M} = \sum_a \mathbf{r}_a \times m_a \mathbf{v}_a = \sum_a \mathbf{r}_a \times \frac{\partial L}{\partial \mathbf{v}_a}$$
          is conserved. For a particle in a central field (potential depending only on $r$), the
          full vector $\mathbf{M}$ is conserved and — since $\mathbf{M}$ is perpendicular to the
          orbital plane — this means the motion is confined to a plane.
        </p>
        <p>
          These three conservation laws — energy, momentum, angular momentum — are the seven additive
          integrals of motion for any closed mechanical system (energy is one, three components of
          momentum, three components of angular momentum). No other additive integrals of motion exist
          beyond these seven.
        </p>
      `,
    },

    // ── Theory: Cyclic Coordinates ──────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Cyclic Coordinates and Generalised Momenta</h2>
        <p>
          The Noether symmetry idea takes a particularly clean form for generalised coordinates.
          Define the <strong>generalised momentum</strong> conjugate to $q_i$ as:
          $$p_i = \frac{\partial L}{\partial \dot{q}_i}$$
          In Cartesian coordinates, this is literally the Cartesian momentum $p = m\dot{x}$. In
          polar coordinates, the generalised momentum conjugate to the angle $\phi$ is
          $p_\phi = mr^2\dot{\phi}$, which is the angular momentum $M_z$.
        </p>
        <p>
          A coordinate $q_i$ is called <strong>cyclic</strong> (or <em>ignorable</em>) if it does not
          appear explicitly in $L$ (only its velocity $\dot{q}_i$ does). Lagrange's equation for a
          cyclic coordinate becomes:
          $$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} = \frac{\partial L}{\partial q_i} = 0 \implies p_i = \text{const}$$
          The generalised momentum conjugate to any cyclic coordinate is conserved.
        </p>
        <p>
          This is the coordinate-based form of Noether's theorem. The key insight is that the
          <em>absence of a coordinate from the Lagrangian</em> directly implies the conservation of
          its conjugate momentum. Some important examples:
        </p>
        <ul>
          <li>For a particle in a central field $U = U(r)$ in spherical coordinates, $\phi$ is cyclic:
          $p_\phi = mr^2\sin^2\theta\,\dot{\phi} = M_z = \text{const}$.</li>
          <li>In a system with translational symmetry along $x$, $x$ is cyclic:
          $p_x = m\dot{x} = P_x = \text{const}$.</li>
          <li>When the Lagrangian has no explicit time dependence, "time" is in some sense cyclic
          (the action is invariant under time translation), leading to energy conservation.</li>
        </ul>
        <p>
          Exploiting cyclic coordinates is one of the main strategies for simplifying mechanics problems.
          Each cyclic coordinate reduces the effective dimension of the problem by one.
        </p>
      `,
    },

    // ── MSQ 2 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "For a particle in a central field $U = U(r)$ in spherical coordinates $(r, \\theta, \\phi)$, with Lagrangian $L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\theta}^2 + r^2\\sin^2\\theta\\,\\dot{\\phi}^2) - U(r)$, which statements are true?",
      options: [
        "$\\phi$ is a cyclic coordinate and $p_\\phi = mr^2\\sin^2\\theta\\,\\dot{\\phi}$ is conserved",
        "$r$ is a cyclic coordinate",
        "The total energy $E = T + U$ is conserved because $L$ does not depend on $t$",
        "The motion is confined to a plane because $\\mathbf{M}$ is conserved",
      ],
      correct: [0, 2, 3],
      explanation:
        "$\\phi$ is absent from $L$, making it cyclic: $p_\\phi$ is conserved (option A: true). $r$ does appear in $L$ (in both $T$ and $U$), so it is not cyclic (option B: false). $L$ has no explicit $t$, so energy is conserved (option C: true). Conservation of the full vector $\\mathbf{M}$ means the radius vector always remains perpendicular to $\\mathbf{M}$, confining motion to a plane (option D: true).",
    },

    // ── Theory: The Virial Theorem ───────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>The Virial Theorem and Mechanical Similarity</h2>
        <p>
          Beyond the exact conservation laws, there is a powerful theorem about <em>time-averaged</em>
          quantities for systems executing bounded (finite) motion.
        </p>
        <p>
          Starting from $2T = \sum_a \mathbf{p}_a \cdot \mathbf{v}_a = \tfrac{d}{dt}\sum_a \mathbf{p}_a \cdot \mathbf{r}_a - \sum_a \mathbf{r}_a \cdot \dot{\mathbf{p}}_a$,
          and taking a time average, the total time derivative vanishes for bounded motion (the function
          $\sum_a \mathbf{p}_a \cdot \mathbf{r}_a$ remains bounded). Using Newton's equations
          $\dot{\mathbf{p}}_a = -\partial U/\partial \mathbf{r}_a$:
          $$2\bar{T} = \sum_a \overline{\mathbf{r}_a \cdot \frac{\partial U}{\partial \mathbf{r}_a}}$$
        </p>
        <p>
          If the potential energy is a <em>homogeneous function of degree $k$</em>, meaning
          $U(\lambda \mathbf{r}_1, \ldots) = \lambda^k U(\mathbf{r}_1, \ldots)$, then by
          Euler's theorem: $\sum_a \mathbf{r}_a \cdot \partial U/\partial \mathbf{r}_a = kU$.
          The <strong>virial theorem</strong> then states:
          $$\boxed{2\bar{T} = k\bar{U}}$$
        </p>
        <p>
          Combined with $\bar{E} = \bar{T} + \bar{U} = E$ (total energy is conserved), we get:
          $$\bar{T} = \frac{k}{k+2}E, \quad \bar{U} = \frac{2}{k+2}E$$
        </p>
        <p>
          <strong>Key applications:</strong>
        </p>
        <ul>
          <li><strong>Harmonic oscillator</strong> ($k = 2$): $\bar{T} = \bar{U} = \tfrac{1}{2}E$.
          On average, energy is equally split between kinetic and potential.</li>
          <li><strong>Gravitational / Coulomb attraction</strong> ($k = -1$): $2\bar{T} = -\bar{U}$,
          and $\bar{T} = -E$. For a bound orbit to exist, the total energy must be negative.</li>
          <li><strong>Free particle</strong> ($U = 0$, $k$ undefined): energy is purely kinetic.</li>
        </ul>
        <p>
          The virial theorem also underlies astrophysics (stability of star clusters and galaxies)
          and statistical mechanics (equipartition of energy).
        </p>
        <p>
          A related concept is <strong>mechanical similarity</strong>: if $U \propto r^k$, a rescaling
          of all coordinates by $\alpha$ and time by $\beta = \alpha^{1-k/2}$ leaves the equations
          of motion invariant. This means that from one known trajectory, an entire family of
          geometrically similar trajectories can be generated by scaling. Kepler's third law ($T^2 \propto a^3$)
          is an immediate consequence for $k = -1$.
        </p>
      `,
    },

    // ── Numeric 1 ────────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "A particle of mass $m$ is bound in a harmonic potential $U = \\frac{1}{2}kx^2$ and has total energy $E = 3\\,\\text{J}$. What is the time-averaged kinetic energy $\\bar{T}$ in joules?",
      answer: "1.5 J",
      tolerance: 0.05,
      hint: "Use the virial theorem: for $U \\propto x^2$ (degree $k=2$), $\\bar{T} = \\bar{U} = E/2$.",
      explanation:
        "The harmonic potential has $k = 2$. The virial theorem gives $\\bar{T} = \\frac{k}{k+2}E = \\frac{2}{4}E = \\frac{E}{2} = 1.5\\,\\text{J}$.",
    },

    // ═══════════════════════════════════════════════════════════════════
    // PART IV: INTEGRATION OF THE EQUATIONS OF MOTION
    // ═══════════════════════════════════════════════════════════════════

    // ── Theory: One-Dimensional Motion ──────────────────────────────────
    {
      type: "text",
      data: `
        <h2>One-Dimensional Motion: The Energy Integral</h2>
        <p>
          The simplest class of problems involves a system with one degree of freedom and a
          time-independent Lagrangian. Since energy is conserved, we can immediately write:
          $$E = \frac{1}{2}m\dot{x}^2 + U(x) = \text{const}$$
          This is a <em>first integral</em> of the equation of motion — it reduces a second-order
          ODE to a first-order one. Solving for $\dot{x}$:
          $$\frac{dx}{dt} = \sqrt{\frac{2[E - U(x)]}{m}}$$
          and integrating:
          $$t = \int \frac{dx}{\sqrt{\frac{2}{m}[E - U(x)]}} + \text{const}$$
        </p>
        <p>
          The kinetic energy $\frac{1}{2}m\dot{x}^2 = E - U(x)$ must be non-negative, so the
          particle can only exist in regions where $U(x) \leq E$. The boundaries of these
          allowed regions are the <strong>turning points</strong>, where $U(x) = E$ and
          $\dot{x} = 0$.
        </p>
        <p>
          <strong>Finite (bounded) motion:</strong> If the particle is trapped between two turning
          points $x_1$ and $x_2$ (a potential well with $U(x) < E$ for $x_1 < x < x_2$), the
          motion is oscillatory. The period is:
          $$T(E) = \sqrt{2m} \int_{x_1(E)}^{x_2(E)} \frac{dx}{\sqrt{E - U(x)}}$$
        </p>
        <p>
          <strong>Infinite (unbounded) motion:</strong> If the particle can escape to infinity, it
          does not return and the motion is not periodic.
        </p>
        <p>
          For example, in the gravitational potential $U = -GM/r$ (taking $U \to 0$ as $r \to \infty$):
          if $E < 0$, the motion is finite (bound orbit); if $E \geq 0$, it is infinite (hyperbolic
          or parabolic trajectory).
        </p>
      `,
    },

    // ── Theory: Small Oscillations — One Degree of Freedom ──────────────
    {
      type: "text",
      data: `
        <h2>Small Oscillations about Equilibrium</h2>
        <p>
          One of the most frequently encountered situations in physics is that of a system near
          a position of stable equilibrium. Stable equilibrium corresponds to a local
          <em>minimum</em> of the potential energy (any displacement requires energy input and
          therefore generates a restoring force).
        </p>
        <p>
          Let $q_0$ be the equilibrium position, and $x = q - q_0$ the small displacement. Expanding
          $U(q)$ in a Taylor series about $q_0$:
          $$U(q) = U(q_0) + \\underbrace{U'(q_0)}_{=\, 0 \text{ (equilibrium)}} x + \frac{1}{2}U''(q_0)x^2 + \cdots$$
          Setting $U(q_0) = 0$ (reference energy) and defining $k = U''(q_0) > 0$:
          $$U \approx \frac{1}{2}kx^2$$
          Similarly, the kinetic energy coefficient $a(q)$ evaluated at $q_0$ gives $a(q_0) \equiv m$
          (not necessarily the literal mass; it could be a moment of inertia or other effective inertia).
          The Lagrangian becomes:
          $$L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2$$
          The equation of motion is:
          $$m\ddot{x} + kx = 0 \implies \ddot{x} + \omega^2 x = 0, \quad \omega = \sqrt{\frac{k}{m}}$$
          This is the <strong>harmonic oscillator</strong>, with general solution:
          $$x(t) = a\cos(\omega t + \alpha)$$
          where $a$ (amplitude) and $\alpha$ (initial phase) are set by initial conditions.
        </p>
        <p>
          The energy of the oscillation:
          $$E = \frac{1}{2}m\dot{x}^2 + \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 a^2$$
          is proportional to the <em>square</em> of the amplitude. The frequency $\omega$ is
          independent of amplitude — a property unique to the quadratic potential and which breaks
          down at higher orders.
        </p>
        <h3>Complex Notation</h3>
        <p>
          It is often convenient to write $x = \text{Re}[A e^{i\omega t}]$ where $A = ae^{i\alpha}$
          is a complex amplitude. Since all operations (differentiation, addition, integration)
          are linear, we can drop the $\text{Re}$ and work with complex expressions throughout,
          taking the real part only at the end.
        </p>
      `,
    },

    // ── Numeric 2 ────────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "A simple pendulum of length $l = 1\\,\\text{m}$ undergoes small oscillations. What is its angular frequency $\\omega$ in rad/s? Use $g = 9.8\\,\\text{m/s}^2$ and round to 2 decimal places.",
      answer: "3.13 rad/s",
      tolerance: 0.02,
      hint: "$\\omega = \\sqrt{g/l}$",
      explanation: "$\\omega = \\sqrt{9.8/1} \\approx 3.13\\,\\text{rad/s}$.",
    },

    // ── Numeric 3 ────────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "A mass $m = 2\\,\\text{kg}$ sits in a potential $V(x) = 3x^2 + x^4$ (SI units). What is the angular frequency of small oscillations about $x = 0$? Give your answer in rad/s.",
      answer: "1.73 rad/s",
      tolerance: 0.02,
      hint: "For small oscillations, use only the quadratic term: $k = V''(0)$. The quartic term contributes at higher order and is negligible for small amplitudes.",
      explanation:
        "$V'(x) = 6x + 4x^3$, so $V'(0) = 0$ (equilibrium). $V''(x) = 6 + 12x^2$, so $V''(0) = 6\\,\\text{N/m}$. Then $\\omega = \\sqrt{k/m} = \\sqrt{6/2} = \\sqrt{3} \\approx 1.73\\,\\text{rad/s}$.",
    },

    // ── Theory: Forced and Damped Oscillations ───────────────────────────
    {
      type: "text",
      data: `
        <h2>Damped Oscillations</h2>
        <p>
          Real oscillators lose energy to their surroundings. For slow velocities, the friction force
          is approximately proportional to velocity: $F_{\text{friction}} = -\alpha\dot{x}$.
          Adding this to the equation of motion:
          $$m\ddot{x} + \alpha\dot{x} + kx = 0$$
          Dividing by $m$ and defining $\lambda = \alpha/2m$ (the <strong>damping coefficient</strong>)
          and $\omega_0^2 = k/m$:
          $$\ddot{x} + 2\lambda\dot{x} + \omega_0^2 x = 0$$
        </p>
        <p>
          The characteristic equation $r^2 + 2\lambda r + \omega_0^2 = 0$ has roots
          $r = -\lambda \pm \sqrt{\lambda^2 - \omega_0^2}$. Three regimes:
        </p>
        <ul>
          <li><strong>Underdamped ($\lambda < \omega_0$):</strong> The roots are complex.
          Motion is oscillatory with an exponentially decaying envelope:
          $$x(t) = ae^{-\lambda t}\cos(\omega t + \alpha), \quad \omega = \sqrt{\omega_0^2 - \lambda^2}$$
          The frequency of damped oscillations $\omega < \omega_0$; friction slows the oscillations
          slightly. The energy decays as $E = E_0 e^{-2\lambda t}$.</li>
          <li><strong>Overdamped ($\lambda > \omega_0$):</strong> Both roots are real and negative.
          The displacement decays exponentially without oscillating. The system "creeps" back
          to equilibrium.</li>
          <li><strong>Critically damped ($\lambda = \omega_0$):</strong> Double root $r = -\lambda$.
          Solution: $x = (C_1 + C_2 t)e^{-\lambda t}$. The system returns to equilibrium
          as fast as possible without oscillating.</li>
        </ul>
        <p>
          The quantity $Q = \omega_0 / 2\lambda$ is the <strong>quality factor</strong>. A high-$Q$
          oscillator (small damping) oscillates for many cycles before the amplitude decays appreciably.
          A high-$Q$ tuning fork, for example, rings for a long time; a low-$Q$ system is heavily
          damped and returns quickly to equilibrium with little or no oscillation.
        </p>

        <h2>Forced Oscillations and Resonance</h2>
        <p>
          When a periodic external force $F(t) = f\cos(\gamma t)$ acts on the oscillator:
          $$\ddot{x} + 2\lambda\dot{x} + \omega_0^2 x = \frac{f}{m}\cos(\gamma t)$$
          After the transient (homogeneous solution) decays, the steady-state solution is:
          $$x_{\text{steady}} = b\cos(\gamma t + \delta)$$
          where:
          $$b = \frac{f/m}{\sqrt{(\omega_0^2 - \gamma^2)^2 + 4\lambda^2\gamma^2}}, \quad
          \tan\delta = \frac{-2\lambda\gamma}{\omega_0^2 - \gamma^2}$$
        </p>
        <p>
          The amplitude $b$ is maximised when $\gamma = \sqrt{\omega_0^2 - 2\lambda^2}$, close to
          $\omega_0$ for small damping. At exact resonance ($\gamma = \omega_0$) in the underdamped
          case:
          $$b_{\text{res}} = \frac{f}{2m\lambda\omega_0} = \frac{fQ}{m\omega_0^2}$$
          The peak height is proportional to $Q$ — a high-$Q$ resonator has a dramatic response at
          its natural frequency. The <strong>half-power bandwidth</strong> $\Delta\gamma = 2\lambda$
          is the frequency range over which the power absorption is at least half its maximum.
        </p>
        <p>
          The phase delay $\delta$ evolves from $0$ (far below resonance, the system follows the force)
          through $-\pi/2$ (exactly at resonance, the system lags by a quarter period) to $-\pi$
          (far above resonance, the system is completely out of phase with the force).
        </p>
        <p>
          The energy absorbed per unit time from the force (the <strong>power</strong>) has a
          characteristic <em>Lorentzian</em> shape near resonance:
          $$I(\varepsilon) = \frac{f^2\lambda}{4m(\varepsilon^2 + \lambda^2)}, \quad \varepsilon = \gamma - \omega_0$$
          This same Lorentzian shape appears throughout physics: in spectral lines, in resonant
          scattering, in electrical circuits at resonance (where $L$, $C$, $R$ play the roles of
          $m$, $1/k$, $\alpha$).
        </p>
      `,
    },

    // ── MCQ 4 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "A damped oscillator has natural frequency $\\omega_0 = 10\\,\\text{rad/s}$ and damping coefficient $\\lambda = 3\\,\\text{s}^{-1}$. The actual frequency of the damped oscillations is approximately:",
      options: [
        "$\\omega = 10\\,\\text{rad/s}$ (unchanged by damping)",
        "$\\omega = \\sqrt{100 - 9} \\approx 9.54\\,\\text{rad/s}$",
        "$\\omega = 10 - 3 = 7\\,\\text{rad/s}$",
        "$\\omega = 0$ (the oscillator is overdamped)",
      ],
      correct: [1],
      explanation:
        "The damped frequency is $\\omega = \\sqrt{\\omega_0^2 - \\lambda^2} = \\sqrt{100 - 9} = \\sqrt{91} \\approx 9.54\\,\\text{rad/s}$. Since $\\lambda = 3 < \\omega_0 = 10$, the system is underdamped and oscillates.",
    },

    // ── Theory: Many Degrees of Freedom — Normal Modes ──────────────────
    {
      type: "text",
      data: `
        <h2>Small Oscillations with Many Degrees of Freedom</h2>
        <p>
          Consider a system with $s$ degrees of freedom near equilibrium. Let $x_i = q_i - q_{i0}$
          be the small displacements. Expanding to second order, both $T$ and $U$ become quadratic
          forms:
          $$T = \frac{1}{2}\sum_{i,k} m_{ik}\dot{x}_i\dot{x}_k, \quad
          U = \frac{1}{2}\sum_{i,k} k_{ik}x_ix_k$$
          where $m_{ik}$ and $k_{ik}$ are symmetric matrices (the <em>mass matrix</em> and
          <em>stiffness matrix</em>). The Lagrangian is:
          $$L = \frac{1}{2}\sum_{i,k} m_{ik}\dot{x}_i\dot{x}_k - \frac{1}{2}\sum_{i,k} k_{ik}x_ix_k$$
          Lagrange's equations become a system of coupled linear ODEs:
          $$\sum_k m_{ik}\ddot{x}_k + \sum_k k_{ik}x_k = 0$$
        </p>
        <p>
          We look for solutions of the form $x_k = A_k e^{i\omega t}$. Substituting:
          $$\sum_k(k_{ik} - \omega^2 m_{ik})A_k = 0$$
          For non-trivial solutions, the determinant must vanish:
          $$\det(k_{ik} - \omega^2 m_{ik}) = 0$$
          This <strong>characteristic equation</strong> is of degree $s$ in $\omega^2$ and yields
          $s$ <em>eigenfrequencies</em> $\omega_1, \omega_2, \ldots, \omega_s$ (all real and positive
          for a stable equilibrium). The corresponding solutions $A_k^{(\alpha)}$ are the
          <em>eigenvectors</em> or <em>normal modes</em>.
        </p>
        <p>
          The general motion is a superposition of all normal modes:
          $$x_k(t) = \sum_\alpha C_\alpha A_k^{(\alpha)} \cos(\omega_\alpha t + \phi_\alpha)$$
          where $C_\alpha$ and $\phi_\alpha$ are determined by initial conditions.
        </p>
        <p>
          <strong>Normal coordinates</strong> $Q_\alpha$ are defined as the linear combinations of $x_k$
          that diagonalise both $T$ and $U$ simultaneously. In terms of normal coordinates:
          $$L = \frac{1}{2}\sum_\alpha(\dot{Q}_\alpha^2 - \omega_\alpha^2 Q_\alpha^2)$$
          Each normal coordinate oscillates independently at its own frequency. The coupled-oscillator
          problem completely decouples into $s$ independent harmonic oscillators.
        </p>
        <p>
          A classic example: two identical pendulums of natural frequency $\omega_0$ coupled by a
          spring of strength $\kappa$. The normal modes are:
        </p>
        <ul>
          <li><strong>Symmetric mode</strong>: both pendulums swing in phase, frequency $\omega_1 = \omega_0$
          (the spring is neither stretched nor compressed).</li>
          <li><strong>Antisymmetric mode</strong>: pendulums swing out of phase, frequency
          $\omega_2 = \sqrt{\omega_0^2 + 2\kappa/m} > \omega_0$ (spring is alternately stretched and compressed).</li>
        </ul>
        <p>
          Starting from one pendulum displaced, the energy beats back and forth between the two pendulums
          at frequency $(\omega_2 - \omega_1)/2$. This phenomenon — the slow transfer of energy
          between weakly coupled oscillators — is called <strong>beats</strong>.
        </p>
      `,
    },

    // ── MCQ 5 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "A diatomic molecule (two masses $m$ connected by a spring of constant $k$) has how many vibrational degrees of freedom?",
      options: [
        "6 (three per atom)",
        "1 (only the bond length matters for vibration)",
        "3 (translational plus vibrational)",
        "5 (three translational and two rotational, zero vibrational?)",
      ],
      correct: [1],
      explanation:
        "A diatomic molecule has $3N = 6$ total degrees of freedom ($N = 2$ atoms). Subtract 3 translational and 2 rotational (linear molecule): $6 - 3 - 2 = 1$ vibrational degree of freedom. The single vibrational mode is the stretching/compression of the bond.",
    },

    // ═══════════════════════════════════════════════════════════════════
    // PART V: CENTRAL FORCE PROBLEMS & TWO-BODY PROBLEM
    // ═══════════════════════════════════════════════════════════════════

    // ── Theory: Motion in a Central Field ───────────────────────────────
    {
      type: "text",
      data: `
        <h2>Motion in a Central Field</h2>
        <p>
          A central field is one in which the potential energy depends only on the distance from a
          fixed centre: $U = U(r)$. Gravity (Newtonian or Coulomb) is the prime example.
          Since $U$ is spherically symmetric, all three components of $\mathbf{M}$ are conserved.
          Because $\mathbf{M}$ is fixed in direction, the motion is confined to the plane perpendicular
          to $\mathbf{M}$. We use polar coordinates $(r, \phi)$ in that plane.
        </p>
        <p>
          The Lagrangian is:
          $$L = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\phi}^2) - U(r)$$
          Since $\phi$ is cyclic, $p_\phi = mr^2\dot{\phi} = M$ is conserved. The energy integral is:
          $$E = \frac{1}{2}m\dot{r}^2 + \frac{M^2}{2mr^2} + U(r) = \frac{1}{2}m\dot{r}^2 + U_{\text{eff}}(r)$$
          where the <strong>effective potential</strong>:
          $$U_{\text{eff}}(r) = U(r) + \frac{M^2}{2mr^2}$$
          The term $M^2/2mr^2$ is called the <strong>centrifugal barrier</strong>. It prevents the
          particle from reaching $r = 0$ (unless $U(r)$ is sufficiently attractive, namely
          $U(r) \sim -c/r^n$ with $n > 2$).
        </p>
        <p>
          The <strong>shape of the orbit</strong> is found from $dr/d\phi = \dot{r}/\dot{\phi}$. Using
          the energy and angular momentum integrals:
          $$\phi = \int \frac{(M/r^2)\,dr}{\sqrt{2m[E - U_{\text{eff}}(r)]}} + \text{const}$$
          The turning points in $r$ (where $\dot{r} = 0$, i.e., $U_{\text{eff}}(r) = E$)
          are the <em>pericentre</em> $r_{\min}$ and <em>apocentre</em> $r_{\max}$.
        </p>
        <p>
          <strong>Closed orbits:</strong> The orbit closes only if the angle swept while $r$ goes from
          $r_{\min}$ to $r_{\max}$ and back is a rational multiple of $\pi$. Remarkably, closed orbits
          for all energies occur for only two forms of central potential: $U \propto r^2$ (harmonic) and
          $U \propto 1/r$ (Newtonian gravity / Coulomb). This is <strong>Bertrand's theorem</strong>.
        </p>
        <h3>Kepler's Second Law</h3>
        <p>
          Conservation of angular momentum has a beautiful geometric interpretation. The area swept out
          by the radius vector per unit time is:
          $$\dot{A} = \frac{1}{2}r^2\dot{\phi} = \frac{M}{2m} = \text{const}$$
          This is Kepler's second law: <em>equal areas are swept in equal times</em>. It holds for
          any central force, not just gravity.
        </p>
      `,
    },

    // ── Theory: Kepler's Problem ─────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Kepler's Problem: The Gravitational (Coulomb) Orbit</h2>
        <p>
          For the inverse-square attractive potential $U = -\alpha/r$ (with $\alpha > 0$), we can
          perform the angular integral explicitly. The orbit equation is:
          $$\frac{p}{r} = 1 + e\cos\phi$$
          where $p = M^2/(m\alpha)$ is the <em>semi-latus rectum</em> and $e = \sqrt{1 + 2EM^2/(m\alpha^2)}$
          is the <em>eccentricity</em>. This is the standard polar equation of a conic section with
          the focus at the origin:
        </p>
        <ul>
          <li>$e = 0$ (circle): $E = E_{\min} = -m\alpha^2/2M^2$</li>
          <li>$0 < e < 1$ (ellipse): $E < 0$ (bound orbit)</li>
          <li>$e = 1$ (parabola): $E = 0$ (barely escaping)</li>
          <li>$e > 1$ (hyperbola): $E > 0$ (scattering)</li>
        </ul>
        <p>
          <strong>Kepler's third law:</strong> For an elliptical orbit with semi-major axis $a$:
          the major axis length is $2a = \alpha/|E|$, so $a$ depends only on energy, not on $M$.
          The period of the orbit:
          $$T = \pi m\alpha \sqrt{\frac{m}{2|E|^3}} = 2\pi\sqrt{\frac{ma^3}{\alpha}}$$
          In particular, $T^2 \propto a^3$ — this is Kepler's third law, derived purely from the
          inverse-square law and conservation principles.
        </p>
        <p>
          <strong>A hidden conserved quantity — the Laplace–Runge–Lenz vector:</strong>
          For the $1/r$ potential, there exists an additional conserved vector:
          $$\mathbf{A} = \mathbf{v} \times \mathbf{M} + \alpha\hat{\mathbf{r}}$$
          (where $\hat{\mathbf{r}} = \mathbf{r}/r$). This vector points from the focus towards
          perihelion and has magnitude $A = e\alpha$. The existence of this extra conservation law
          is related to the fact that elliptical orbits are <em>closed</em> — they return exactly
          to the same point after each revolution. Any small perturbation (such as a slightly
          different power law, or the presence of other planets) will break this degeneracy and
          cause the orbit to <em>precess</em>.
        </p>
        <p>
          <strong>Orbital mechanics in practice:</strong> The same mathematics applies to Coulomb
          scattering of charged particles. The angle of deflection of a charged particle by a
          stationary charge is given by:
          $$\chi = 2\arctan\left(\frac{\alpha}{mpv_\infty^2}\right)$$
          where $p$ is the impact parameter (closest approach distance if there were no deflection)
          and $v_\infty$ is the speed at infinity. This leads to the famous Rutherford scattering
          cross-section.
        </p>
      `,
    },

    // ── Theory: The Two-Body Problem and Reduced Mass ────────────────────
    {
      type: "text",
      data: `
        <h2>The Two-Body Problem and the Reduced Mass</h2>
        <p>
          Two particles of masses $m_1$ and $m_2$ interacting through a potential $U(|\mathbf{r}_1 - \mathbf{r}_2|)$.
          The Lagrangian is:
          $$L = \frac{1}{2}m_1\dot{\mathbf{r}}_1^2 + \frac{1}{2}m_2\dot{\mathbf{r}}_2^2 - U(|\mathbf{r}_1 - \mathbf{r}_2|)$$
        </p>
        <p>
          Introduce the <strong>centre of mass</strong> $\mathbf{R} = (m_1\mathbf{r}_1 + m_2\mathbf{r}_2)/(m_1+m_2)$
          and the <strong>relative coordinate</strong> $\mathbf{r} = \mathbf{r}_1 - \mathbf{r}_2$.
          The Lagrangian separates:
          $$L = \frac{1}{2}(m_1+m_2)\dot{\mathbf{R}}^2 + \frac{1}{2}\mu\dot{\mathbf{r}}^2 - U(r)$$
          where $\mu = m_1 m_2/(m_1 + m_2)$ is the <strong>reduced mass</strong>.
        </p>
        <p>
          The first term describes the free motion of the centre of mass (straight line at constant
          velocity — trivial). The second term describes the relative motion of a fictitious particle
          of mass $\mu$ in a fixed central field $U(r)$. The two-body problem is thus exactly equivalent
          to a one-body central force problem with the reduced mass.
        </p>
        <p>
          This is used routinely in atomic physics (hydrogen atom), molecular physics (diatomic
          vibrations), and celestial mechanics. For the Earth–Moon system, $\mu \approx M_{\text{Earth}}/81$
          (since the Moon is much lighter). For an electron and proton, $\mu \approx m_e$ (since
          $m_e \ll m_p$).
        </p>
      `,
    },

    // ── MSQ 3 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "For a particle moving in a central field $U = -\\alpha/r$ ($\\alpha > 0$), which statements are correct?",
      options: [
        "The orbit is an ellipse if and only if the total energy $E < 0$",
        "The period of a circular orbit scales as $T \\propto R^{3/2}$ (Kepler's third law)",
        "The angular momentum $M$ determines the semi-major axis of the orbit",
        "Equal areas are swept by the radius vector in equal times, for any central force",
      ],
      correct: [0, 1, 3],
      explanation:
        "A: True — elliptic orbits occur for $E < 0$. B: True — this is Kepler's third law, derivable from $T = 2\\pi a/v$ where $v$ scales as $r^{-1/2}$. C: False — the semi-major axis $a = \\alpha/2|E|$ depends only on energy, not angular momentum (angular momentum determines the eccentricity). D: True — this follows from conservation of angular momentum ($\\dot{A} = M/2m = \\text{const}$) and holds for any central force.",
    },

    // ═══════════════════════════════════════════════════════════════════
    // PART VI: RIGID BODY DYNAMICS
    // ═══════════════════════════════════════════════════════════════════

    // ── Theory: Kinematics of a Rigid Body ───────────────────────────────
    {
      type: "text",
      data: `
        <h2>Kinematics of a Rigid Body</h2>
        <p>
          A rigid body is a system of particles in which all inter-particle distances are fixed.
          Its configuration in space is described by 6 parameters: 3 for the position of a reference
          point (typically the centre of mass) and 3 for the orientation of a body-fixed frame
          relative to the lab frame (e.g., the Euler angles $\phi, \theta, \psi$).
        </p>
        <p>
          At any instant, the most general motion of a rigid body can be decomposed into:
        </p>
        <ol>
          <li>A <strong>translation</strong> of the centre of mass with velocity $\mathbf{V}$</li>
          <li>A <strong>rotation</strong> about an axis through the centre of mass with angular
          velocity $\boldsymbol{\Omega}$</li>
        </ol>
        <p>
          The velocity of any point $P$ in the body (with position vector $\mathbf{r}$ relative to
          the centre of mass) is:
          $$\mathbf{v}_P = \mathbf{V} + \boldsymbol{\Omega} \times \mathbf{r}$$
          Crucially, $\boldsymbol{\Omega}$ is the same for all choices of reference point in the body —
          the angular velocity is a property of the body as a whole, not of any particular point.
        </p>
        <p>
          For planar motion (rotation about a fixed axis), $\boldsymbol{\Omega}$ points along the
          axis and has magnitude $\Omega = d\phi/dt$ where $\phi$ is the rotation angle. In the
          more general case of rotation in 3D, the relationship between $\boldsymbol{\Omega}$ and
          the Euler angles is more involved.
        </p>
        <h3>The Instantaneous Axis of Rotation</h3>
        <p>
          If at some instant $\mathbf{V} \perp \boldsymbol{\Omega}$, there exists a line
          (the <em>instantaneous axis of rotation</em>) such that every point on it has zero velocity
          at that instant. The body's motion is then a pure rotation about this line.
          For a disk rolling without slipping on a surface, the instantaneous axis passes through
          the contact line.
        </p>
      `,
    },

    // ── Theory: Inertia Tensor and Kinetic Energy ─────────────────────────
    {
      type: "text",
      data: `
        <h2>The Inertia Tensor</h2>
        <p>
          The kinetic energy of a rigid body can be separated into translational and rotational parts:
          $$T = \frac{1}{2}\mu V^2 + T_{\text{rot}}$$
          where $\mu$ is the total mass. The rotational kinetic energy is:
          $$T_{\text{rot}} = \frac{1}{2}\sum_{i,k} I_{ik}\Omega_i\Omega_k$$
          where the <strong>inertia tensor</strong> is:
          $$I_{ik} = \sum_a m_a(\delta_{ik}|\mathbf{r}_a|^2 - r_{ai}r_{ak})$$
          or, for a continuous body:
          $$I_{ik} = \int \rho(\mathbf{r})\left(\delta_{ik}r^2 - r_ir_k\right)dV$$
        </p>
        <p>
          The inertia tensor is a real, symmetric $3 \times 3$ matrix. It can always be diagonalised
          by choosing the <strong>principal axes of inertia</strong> — a body-fixed coordinate system
          aligned with the eigenvectors of $I_{ik}$. In principal axes, with principal moments
          $I_1, I_2, I_3$:
          $$T_{\text{rot}} = \frac{1}{2}(I_1\Omega_1^2 + I_2\Omega_2^2 + I_3\Omega_3^2)$$
        </p>
        <p>
          Finding principal axes exploits symmetry:
        </p>
        <ul>
          <li>Any axis of symmetry of the body is a principal axis.</li>
          <li>Any plane of symmetry contains two principal axes.</li>
          <li>The centre of mass must lie on any axis of symmetry.</li>
        </ul>
        <p>
          <strong>The parallel axis theorem:</strong> If $I_{\text{cm}}$ is the moment of inertia about
          an axis through the centre of mass, then the moment about a parallel axis at distance $d$ is:
          $$I = I_{\text{cm}} + \mu d^2$$
        </p>
        <h3>Special Cases</h3>
        <ul>
          <li><strong>Spherical top</strong> ($I_1 = I_2 = I_3$): A sphere, cube, or any sufficiently
          symmetric body. Any three orthogonal axes through the centre of mass are principal axes.
          $T_{\text{rot}} = \frac{1}{2}I\Omega^2$.</li>
          <li><strong>Symmetric top</strong> ($I_1 = I_2 \neq I_3$): A body with axial symmetry
          (cylinder, cone, top). One axis is preferred.</li>
          <li><strong>Asymmetric top</strong> ($I_1 \neq I_2 \neq I_3$): All three moments differ.
          Motion is complex and generally non-integrable in closed form.</li>
        </ul>
      `,
    },

    // ── Numeric 4 ────────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "A uniform solid sphere of mass $M$ and radius $R$ has moment of inertia $I = \\frac{2}{5}MR^2$ about a diameter. What is its moment of inertia about a tangent line (a line tangent to the sphere's surface and parallel to a diameter), in units of $MR^2$?",
      answer: "1.4 MR²",
      tolerance: 0.05,
      hint: "Use the parallel axis theorem: $I = I_{\\text{cm}} + Md^2$, where $d = R$ is the distance from the diameter through the centre to the tangent line.",
      explanation:
        "$I = I_{\\text{cm}} + MR^2 = \\frac{2}{5}MR^2 + MR^2 = \\frac{7}{5}MR^2 = 1.4\\,MR^2$.",
    },

    // ── Theory: Euler's Equations for a Rigid Body ───────────────────────
    {
      type: "text",
      data: `
        <h2>Euler's Equations for Rigid Body Rotation</h2>
        <p>
          In a body-fixed coordinate system aligned with the principal axes of inertia, the equations
          of motion for rotation are <strong>Euler's equations</strong>:
          $$I_1\dot{\Omega}_1 - (I_2 - I_3)\Omega_2\Omega_3 = N_1$$
          $$I_2\dot{\Omega}_2 - (I_3 - I_1)\Omega_3\Omega_1 = N_2$$
          $$I_3\dot{\Omega}_3 - (I_1 - I_2)\Omega_1\Omega_2 = N_3$$
          where $N_i$ are the components of the torque along the principal axes.
        </p>
        <p>
          For a <strong>torque-free symmetric top</strong> ($I_1 = I_2 \equiv I_\perp \neq I_3$, $N_i = 0$):
          Euler's equations give $\dot{\Omega}_3 = 0$, so the component of $\boldsymbol{\Omega}$ along
          the symmetry axis is constant. The other two components obey:
          $$\dot{\Omega}_1 = -\Omega_0\Omega_2, \quad \dot{\Omega}_2 = +\Omega_0\Omega_1$$
          where $\Omega_0 = \Omega_3(I_3 - I_\perp)/I_\perp$. This gives $\Omega_1 + i\Omega_2 = A e^{i\Omega_0 t}$:
          the angular velocity vector <em>precesses</em> around the symmetry axis with angular frequency
          $\Omega_0$. This is <em>torque-free precession</em>, observed in the Earth's rotation
          (the Chandler wobble) and in the wobbling of a thrown football.
        </p>
        <p>
          <strong>Stability of rotation:</strong> For a free asymmetric top, rotation about the axes
          of largest and smallest principal moment is stable, while rotation about the intermediate
          axis is <em>unstable</em> — the "tennis racket theorem" or "intermediate axis theorem",
          easily demonstrated by spinning a book or phone in the air.
        </p>
      `,
    },

    // ═══════════════════════════════════════════════════════════════════
    // PART VII: HAMILTONIAN MECHANICS
    // ═══════════════════════════════════════════════════════════════════

    // ── Theory: The Hamiltonian ──────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>From Lagrangian to Hamiltonian: The Legendre Transform</h2>
        <p>
          The Lagrangian formulation uses $(q_i, \dot{q}_i)$ as the basic variables (positions and
          velocities). There is an equivalent formulation using $(q_i, p_i)$ — positions and
          <em>momenta</em> — which turns out to be more symmetrical and more powerful for advanced theory.
        </p>
        <p>
          Recall the generalised momenta:
          $$p_i = \frac{\partial L}{\partial \dot{q}_i}$$
          The <strong>Hamiltonian</strong> is defined via the Legendre transform:
          $$H(q, p, t) = \sum_i p_i\dot{q}_i - L(q, \dot{q}, t)$$
          where the velocities $\dot{q}_i$ are expressed in terms of $(q, p)$ by inverting the
          definition of momenta.
        </p>
        <p>
          For $L = T - U$ with $T$ a quadratic function of velocities:
          $$H = T + U = E$$
          The Hamiltonian equals the total energy when expressed in terms of positions and momenta.
        </p>
        <p>
          The equations of motion in the Hamiltonian formulation — <strong>Hamilton's equations</strong> — are:
          $$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}$$
          These are $2s$ first-order equations (compared to $s$ second-order Euler–Lagrange equations).
          The space spanned by all $(q_i, p_i)$ is called <strong>phase space</strong>.
        </p>
        <p>
          Hamilton's equations have a beautiful symmetry: $q$ and $p$ play almost identical roles,
          connected by a minus sign. This symmetry suggests deeper structure, which is the subject
          of symplectic geometry and canonical transformations.
        </p>
        <p>
          If $H$ has no explicit time dependence, then $dH/dt = 0$: the Hamiltonian is conserved.
          If a coordinate $q_j$ is cyclic in $H$ (absent from $H$), then $\dot{p}_j = 0$: the
          corresponding momentum is conserved.
        </p>
      `,
    },

    // ── Theory: Poisson Brackets ─────────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Poisson Brackets and the Structure of Mechanics</h2>
        <p>
          For any two functions $f(q, p)$ and $g(q, p)$ in phase space, the
          <strong>Poisson bracket</strong> is defined as:
          $$\{f, g\} = \sum_i \left(\frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i}\right)$$
        </p>
        <p>
          The time evolution of any observable $f$ along a trajectory is:
          $$\frac{df}{dt} = \{f, H\} + \frac{\partial f}{\partial t}$$
          If $\{f, H\} = 0$ and $f$ has no explicit time dependence, then $f$ is a conserved quantity.
          Conservation is equivalent to commuting with $H$ in the Poisson bracket sense.
        </p>
        <p>
          The fundamental Poisson brackets between coordinates and momenta are:
          $$\{q_i, q_j\} = 0, \quad \{p_i, p_j\} = 0, \quad \{q_i, p_j\} = \delta_{ij}$$
          This structure — the canonical Poisson bracket relations — is the heart of classical mechanics.
          In quantum mechanics, Poisson brackets are replaced by commutators:
          $\{f, g\} \to \frac{1}{i\hbar}[\hat{f}, \hat{g}]$, and the canonical relations become
          Heisenberg's commutation relations $[q_i, p_j] = i\hbar\delta_{ij}$.
        </p>
        <p>
          <strong>Liouville's theorem:</strong> The volume element in phase space is conserved along
          trajectories. Mathematically, the flow generated by Hamilton's equations is
          <em>volume-preserving</em> (incompressible). This has deep consequences for statistical
          mechanics: the phase-space probability density obeys
          $\partial\rho/\partial t = \{H, \rho\}$,
          and a uniform distribution over an energy shell is stationary.
        </p>
      `,
    },

    // ── MCQ 6 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "For a harmonic oscillator $H = p^2/2m + m\\omega^2 x^2/2$, what is the Poisson bracket $\\{x, H\\}$?",
      options: [
        "$\\{x, H\\} = p/m$",
        "$\\{x, H\\} = m\\omega^2 x$",
        "$\\{x, H\\} = -p/m$",
        "$\\{x, H\\} = 0$",
      ],
      correct: [0],
      explanation:
        "$\\{x, H\\} = \\frac{\\partial x}{\\partial x}\\frac{\\partial H}{\\partial p} - \\frac{\\partial x}{\\partial p}\\frac{\\partial H}{\\partial x} = (1)(p/m) - (0)(m\\omega^2 x) = p/m$. This equals $\\dot{x}$, confirming Hamilton's equation $\\dot{x} = \\partial H/\\partial p = p/m$.",
    },

    // ── Theory: Canonical Transformations and Action-Angle Variables ──────
    {
      type: "text",
      data: `
        <h2>Canonical Transformations and Action-Angle Variables</h2>
        <p>
          A <strong>canonical transformation</strong> is a change of variables
          $(q, p) \to (Q, P)$ in phase space that preserves the form of Hamilton's equations
          and the Poisson bracket structure. Such transformations allow us to choose coordinates
          best suited to the problem at hand.
        </p>
        <p>
          A canonical transformation is generated by a <em>generating function</em> $F$. For example,
          for a generating function $F_1(q, Q, t)$:
          $$p_i = \frac{\partial F_1}{\partial q_i}, \quad P_i = -\frac{\partial F_1}{\partial Q_i}, \quad
          K = H + \frac{\partial F_1}{\partial t}$$
          where $K(Q, P)$ is the new Hamiltonian.
        </p>
        <p>
          The most powerful application is for <strong>integrable systems</strong>: systems with
          as many conserved quantities as degrees of freedom. For such systems, one can construct
          <strong>action-angle variables</strong> $(J_i, \theta_i)$ where:
        </p>
        <ul>
          <li>The <em>action variables</em> $J_i = \oint p_i\,dq_i / (2\pi)$ are conserved.</li>
          <li>The <em>angle variables</em> $\theta_i$ increase linearly in time:
          $\dot{\theta}_i = \partial H / \partial J_i = \omega_i = \text{const}$.</li>
        </ul>
        <p>
          In action-angle variables, the Hamiltonian depends only on the $J_i$, not on the angles:
          $H = H(J_1, \ldots, J_s)$. The motion is <em>quasi-periodic</em> on a torus in phase space.
        </p>
        <p>
          For the harmonic oscillator, $J = E/\omega$ and $\theta = \omega t + \text{const}$.
          The quantisation rule $J_i = n_i\hbar$ (Bohr-Sommerfeld quantisation) was one of the
          first successful bridges between classical and quantum mechanics, correctly predicting
          the energy levels of the hydrogen atom.
        </p>
        <p>
          <strong>Hamilton–Jacobi equation:</strong> The most ambitious canonical transformation
          is one that makes the new Hamiltonian identically zero. This requires finding $K = 0$,
          which means the generating function $S$ (called <em>Hamilton's principal function</em>)
          satisfies:
          $$H\!\left(q_i, \frac{\partial S}{\partial q_i}, t\right) + \frac{\partial S}{\partial t} = 0$$
          This is the <strong>Hamilton–Jacobi equation</strong>, a first-order PDE for $S$.
          Solving it provides the complete solution of the mechanical problem.
        </p>
      `,
    },

    // ═══════════════════════════════════════════════════════════════════
    // PART VIII: SCATTERING
    // ═══════════════════════════════════════════════════════════════════

    // ── Theory: Collisions and Scattering ────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Elastic Collisions and Scattering</h2>
        <p>
          A collision is <strong>elastic</strong> if kinetic energy is conserved (no internal energy
          change). Using conservation of momentum and energy alone, we can determine a great deal
          about the collision without knowing the details of the interaction.
        </p>
        <h3>Centre-of-Mass Frame (C frame)</h3>
        <p>
          In the C frame, the total momentum is zero. A particle of mass $m_1$ moving at velocity
          $\mathbf{v}_1$ and a particle $m_2$ at rest (in the lab frame) have C-frame velocities:
          $$\mathbf{v}_{10} = \frac{m_2}{m_1+m_2}\mathbf{v}_1, \quad \mathbf{v}_{20} = -\frac{m_1}{m_1+m_2}\mathbf{v}_1$$
          In the C frame, conservation of energy + momentum for an elastic collision implies
          the speeds are unchanged; only the direction changes. The collision simply rotates both
          velocity vectors by the same angle $\chi$ (the scattering angle in C frame).
        </p>
        <h3>Scattering Cross-Section</h3>
        <p>
          Given a beam of particles incident on a scattering centre, the
          <strong>differential cross-section</strong> $d\sigma/d\Omega$ measures the effective area
          presented to the beam for scattering into a solid angle element $d\Omega$:
          $$d\sigma = \frac{b}{\sin\chi}\left|\frac{db}{d\chi}\right|d\Omega$$
          where $b$ is the impact parameter (perpendicular distance of the incoming trajectory from
          the scattering centre).
        </p>
        <h3>Rutherford Scattering Formula</h3>
        <p>
          For a Coulomb potential $U = \alpha/r$, the impact parameter and scattering angle are related by:
          $$b = \frac{\alpha}{2E_{\rm kin}}\cot\frac{\chi}{2}$$
          where $E_{\rm kin} = \frac{1}{2}\mu v_\infty^2$ is the kinetic energy in the C frame.
          Differentiating:
          $$\frac{d\sigma}{d\Omega} = \left(\frac{\alpha}{4E_{\rm kin}}\right)^2\frac{1}{\sin^4(\chi/2)}$$
          This is <strong>Rutherford's formula</strong>. Its experimental confirmation in 1911
          by Geiger and Marsden (under Rutherford's direction) was the first evidence for the
          nuclear atom — the gold foil experiment demonstrated that the atom's mass is concentrated
          in a tiny, dense nucleus.
        </p>
        <p>
          Note that Rutherford's formula is the same for both attractive ($\alpha < 0$, electron
          in nuclear field) and repulsive ($\alpha > 0$, two like charges) Coulomb potentials —
          only the sign of $\alpha$ matters for the trajectory shape, not for the cross-section.
        </p>
      `,
    },

    // ── MSQ 4 ────────────────────────────────────────────────────────────
    {
      type: "msq",
      question:
        "In an elastic collision between a moving particle of mass $m_1$ and a stationary target of mass $m_2$, which of the following are always true?",
      options: [
        "Total kinetic energy is conserved",
        "Total momentum is conserved",
        "The two particles always move at right angles after the collision (if $m_1 = m_2$)",
        "The maximum energy that can be transferred to the target is $\\frac{4m_1 m_2}{(m_1+m_2)^2}E_1$",
      ],
      correct: [0, 1, 2, 3],
      explanation:
        "All four are correct. A and B: these define elastic collisions with conservation laws. C: for equal masses ($m_1 = m_2$), the vector diagram shows that after collision the momenta are perpendicular — a classic result. D: the maximum energy transfer occurs in a head-on collision ($\\chi = \\pi$), giving $\\Delta E_{\\max} = \\frac{4m_1 m_2}{(m_1+m_2)^2}E_1$; this is maximised when $m_1 = m_2$ (100% transfer).",
    },

    // ═══════════════════════════════════════════════════════════════════
    // PART IX: ADVANCED TOPICS
    // ═══════════════════════════════════════════════════════════════════

    // ── Theory: Adiabatic Invariants ─────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Adiabatic Invariants</h2>
        <p>
          Suppose a system's parameters (say, the length $l$ of a pendulum or the strength of a
          confining magnetic field) change slowly with time — slowly meaning that the change is
          negligible over one period of oscillation. What is conserved?
        </p>
        <p>
          Neither energy $E$ nor frequency $\omega$ is individually conserved as the parameter
          changes. But the ratio $E/\omega = J = \oint p\,dq / (2\pi)$ — the <strong>adiabatic invariant</strong>
          (action variable) — is conserved to arbitrarily high precision when the change is
          arbitrarily slow.
        </p>
        <p>
          For a pendulum being slowly shortened: $J = E/\omega = \text{const}$ implies
          $E \propto \omega \propto 1/\sqrt{l}$. As the pendulum shortens, its frequency increases and
          its energy increases proportionally — like a spinning ice-skater pulling in their arms.
        </p>
        <p>
          <strong>Magnetic mirror:</strong> A charged particle moving in a slowly varying magnetic
          field conserves the magnetic moment $\mu = mv_\perp^2/2B$ (the adiabatic invariant).
          If the field increases, $v_\perp$ increases at the expense of $v_\parallel$ (the speed
          along the field). At a strong enough field, $v_\parallel = 0$ and the particle is reflected
          — this is the principle of the magnetic mirror trap used in plasma confinement.
        </p>
        <p>
          Adiabatic invariants bridge classical and quantum mechanics: the Bohr-Sommerfeld quantisation
          condition $J = n\hbar$ assigns quantum numbers to the adiabatic invariants of classical motion.
          Adiabatic changes map quantum states to quantum states: if the $n$th quantum state corresponds
          to $J = n\hbar$, and $J$ is invariant under slow parameter changes, then the system remains
          in the $n$th state throughout.
        </p>
      `,
    },

    // ── Theory: Motion in a Rapidly Oscillating Field ────────────────────
    {
      type: "text",
      data: `
        <h2>Motion in a Rapidly Oscillating Field</h2>
        <p>
          Consider a particle subject to a slowly varying field $U(\mathbf{r})$ and a rapidly
          oscillating force $\mathbf{f}(\mathbf{r})\cos(\gamma t)$ with $\gamma \gg 1/T$
          (where $T$ is the timescale of slow motion). The particle's trajectory $\mathbf{r}(t)$
          separates into a slow part $\bar{\mathbf{r}}(t)$ and rapid oscillations $\boldsymbol{\\xi}(t)$:
          $$\mathbf{r}(t) = \bar{\mathbf{r}}(t) + \boldsymbol{\\xi}(t)$$
        </p>
        <p>
          The rapid oscillation is $\boldsymbol{\\xi} \approx -\mathbf{f}/m\gamma^2$ (leading order).
          Averaging the equations of motion over the rapid oscillation and expanding to first order in
          $\boldsymbol{\\xi}$, one finds that the slow motion is governed by an
          <strong>effective potential</strong>:
          $$U_{\text{eff}} = U + \frac{|\mathbf{f}|^2}{4m\gamma^2}$$
          The time-averaged kinetic energy of the rapid oscillations acts as an additional (always
          repulsive!) potential for the slow motion.
        </p>
        <p>
          <strong>The Kapitza pendulum:</strong> A pendulum whose pivot oscillates vertically at
          high frequency. Despite gravity, the vertically upward position can be made stable if
          the driving amplitude and frequency satisfy:
          $$a^2\gamma^2 > 2gl$$
          This is a spectacular example of <em>dynamical stabilisation</em>: a repulsive effective
          potential created by rapid oscillations can overcome gravity to stabilise an otherwise
          unstable equilibrium. This principle is used in Paul traps for charged particles, laser
          cooling, and other quantum optical devices.
        </p>
      `,
    },

    // ── Theory: Non-Inertial Frames ──────────────────────────────────────
    {
      type: "text",
      data: `
        <h2>Motion in Non-Inertial Reference Frames</h2>
        <p>
          When we work in a frame that is accelerating or rotating, we must account for the
          apparent forces that arise. These are sometimes called "fictitious" forces, but they
          have perfectly real physical effects.
        </p>
        <p>
          Consider a frame rotating with angular velocity $\boldsymbol{\Omega}$ relative to an
          inertial frame. The equation of motion for a particle in the rotating frame is:
          $$m\ddot{\mathbf{r}} = \mathbf{F} - m\boldsymbol{\Omega}\times(\boldsymbol{\Omega}\times\mathbf{r}) - 2m\boldsymbol{\Omega}\times\dot{\mathbf{r}} - m\dot{\boldsymbol{\Omega}}\times\mathbf{r}$$
          The extra terms are:
        </p>
        <ul>
          <li><strong>Centrifugal force</strong> $-m\boldsymbol{\Omega}\times(\boldsymbol{\Omega}\times\mathbf{r})$:
          points outward from the rotation axis. Familiar from spinning carnival rides, or the
          equatorial bulge of the Earth.</li>
          <li><strong>Coriolis force</strong> $-2m\boldsymbol{\Omega}\times\dot{\mathbf{r}}$:
          perpendicular to the velocity. Causes hurricanes to spiral (clockwise in the southern
          hemisphere, counterclockwise in the northern), deflects long-range artillery shells, and
          is responsible for the Foucault pendulum rotation.</li>
          <li><strong>Euler force</strong> $-m\dot{\boldsymbol{\Omega}}\times\mathbf{r}$:
          appears if the rotation rate is changing.</li>
        </ul>
        <p>
          The effective Lagrangian in a rotating frame (for constant $\Omega$) can be written by noting
          that the effective potential includes the centrifugal term $-\frac{1}{2}m(\boldsymbol{\Omega}\times\mathbf{r})^2$:
          $$L_{\text{rot}} = \frac{1}{2}m|\dot{\mathbf{r}}|^2 + m\dot{\mathbf{r}}\cdot(\boldsymbol{\Omega}\times\mathbf{r}) - U(\mathbf{r})$$
          The middle term generates the Coriolis force upon Euler–Lagrange variation.
        </p>
        <p>
          <strong>The Foucault pendulum:</strong> A pendulum swinging freely at Earth's surface.
          The Coriolis force causes the plane of oscillation to rotate with period $T = 24/\sin\lambda$
          hours, where $\lambda$ is the latitude. At the poles, the pendulum rotates once per day;
          at the equator, it does not rotate at all. This is direct evidence for the Earth's rotation.
        </p>
      `,
    },

    // ── MCQ 7 ────────────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "A Foucault pendulum is set up at latitude $\\lambda = 45°\\text{N}$. How long does it take for the plane of oscillation to complete one full rotation?",
      options: [
        "24 hours",
        "$24/\\sin(45°) \\approx 33.9$ hours",
        "$24\\sin(45°) \\approx 17$ hours",
        "$24\\cos(45°) \\approx 17$ hours",
      ],
      correct: [1],
      explanation:
        "The angular velocity of the pendulum plane's rotation is the vertical component of Earth's angular velocity: $\\Omega_z = \\Omega\\sin\\lambda$. The period is $T = 2\\pi/\\Omega_z = (24\\,\\text{h})/\\sin\\lambda = 24/\\sin(45°) \\approx 33.9$ hours.",
    },

    // ── Theory: Summary — The Structure of Analytical Mechanics ──────────
    {
      type: "text",
      data: `
        <h2>The Architecture of Analytical Mechanics</h2>
        <p>
          We have now traversed the full landscape of classical analytical mechanics. Let us step back
          and appreciate its architecture.
        </p>
        <p>
          At the foundation lies a single principle — the principle of least action — from which
          everything follows. The Lagrangian encodes all the physics of a system; the Euler–Lagrange
          equations extract the equations of motion. The formalism naturally handles constraints,
          arbitrary coordinates, and symmetries.
        </p>
        <p>
          Symmetries lead to conservation laws through Noether's theorem:
        </p>
        <ul>
          <li>Time translation → energy conservation</li>
          <li>Spatial translation → momentum conservation</li>
          <li>Rotation → angular momentum conservation</li>
        </ul>
        <p>
          The Legendre transform takes us from the Lagrangian to the Hamiltonian, switching
          from $(q, \dot{q})$ to $(q, p)$. Phase space is the natural arena for Hamiltonian
          mechanics. The Poisson bracket structure encodes the canonical relations between
          coordinates and momenta, and is the classical counterpart of quantum commutators.
        </p>
        <p>
          Canonical transformations allow us to choose the most convenient phase-space coordinates.
          Action-angle variables reduce integrable systems to their simplest form. The
          Hamilton–Jacobi equation provides the deepest classical formulation, revealing the
          connection between particle mechanics and wave mechanics (Hamilton himself was trying
          to unify optics and mechanics — Schrödinger's wave equation is, in a precise sense,
          the wave mechanics corresponding to the Hamilton–Jacobi equation).
        </p>
        <p>
          The progression:
          $$\text{Newton} \longrightarrow \text{Lagrange} \longrightarrow \text{Hamilton} \longrightarrow \text{Hamilton–Jacobi} \longrightarrow \text{Quantum Mechanics}$$
          is not merely historical. Each step reveals new mathematical structure while preserving
          the physical content. The analytical mechanics framework is not just a rederivation of
          Newton — it is a profound restructuring that makes the quantum theory natural, places
          symmetry at centre stage, and connects mechanics to optics, thermodynamics, and geometry.
        </p>
        <p>
          The techniques developed here — generalised coordinates, the Lagrangian, Hamiltonian flows,
          adiabatic invariants, normal modes — appear throughout modern physics: in field theory,
          general relativity, quantum mechanics, condensed matter, and beyond. Classical mechanics
          is not merely a historical prelude; it is a living language.
        </p>
      `,
    },

    // ── Symbolic 1 ───────────────────────────────────────────────────────
    {
      type: "symbolic",
      question:
        "The Euler–Lagrange equation for $L = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2$ leads to $\\ddot{x} = -(k/m)x$. Verify by finding the antiderivative of $x\\cdot(k/m)$ with respect to $x$, without $+C$.",
      integrand: "(k/m)*x",
      variable: "x",
      hint: "Use the power rule on $\\frac{k}{m}x$.",
      explanation: "$\\int \\frac{k}{m}x\\,dx = \\frac{k}{2m}x^2 + C$, which is $U/m$ up to constants.",
    },

    // ── Symbolic 2 ───────────────────────────────────────────────────────
    {
      type: "symbolic",
      question:
        "In a central force problem, the energy integral gives $\\dot{r}^2 = \\frac{2}{m}[E - U(r)] - \\frac{M^2}{m^2 r^2}$. Find the antiderivative of the effective potential $U_{\\rm eff}(r) = \\frac{\\alpha}{r^2}$ with respect to $r$ (enter without $+C$).",
      integrand: "alpha/r^2",
      variable: "r",
      hint: "$\\int r^{-2}\\,dr = -r^{-1}$",
      explanation: "$\\int \\frac{\\alpha}{r^2}\\,dr = -\\frac{\\alpha}{r} + C$",
    },

    // ── Final MCQ 8 ──────────────────────────────────────────────────────
    {
      type: "mcq",
      question:
        "Which of the following best captures the relationship between the Lagrangian $L$ and the Hamiltonian $H$?",
      options: [
        "They are always equal: $H = L$",
        "$H$ is the Legendre transform of $L$ with respect to velocities: $H = \\sum_i p_i\\dot{q}_i - L$, with $p_i = \\partial L/\\partial \\dot{q}_i$",
        "$H = T + U$ always, regardless of whether $T$ depends on $q$ or $t$",
        "$H$ is always more useful than $L$ in practical calculations",
      ],
      correct: [1],
      explanation:
        "Option B is correct: the Hamiltonian is the Legendre transform of the Lagrangian with respect to velocities, trading velocity variables for momentum variables. Option A is false. Option C is almost right but fails when $L$ depends explicitly on time (then $H \\neq E$) or when the kinetic energy has a cross-term structure (e.g., in rotating frames). Option D is a matter of context — for finding equations of motion in specific coordinates, the Lagrangian is often simpler; for perturbation theory, adiabatic invariants, and quantisation, the Hamiltonian is indispensable.",
    },

    // ── Final Numeric ─────────────────────────────────────────────────────
    {
      type: "numeric",
      question:
        "A particle moves in one dimension with Hamiltonian $H = p^2/2m + \\frac{1}{2}m\\omega^2 x^2$. At $t = 0$, $x = A$ and $p = 0$. What is the maximum speed achieved during the subsequent motion? Express your answer as a multiple of $A\\omega$.",
      answer: "1 Aω",
      tolerance: 0.02,
      hint: "Energy is conserved. At $t=0$, $E = \\frac{1}{2}m\\omega^2 A^2$. Maximum speed occurs at $x = 0$.",
      explanation:
        "At $x = 0$: $E = \\frac{p^2}{2m}$, so $p_\\max^2 = 2mE = m^2\\omega^2 A^2$, giving $v_\\max = |p_\\max|/m = \\omega A$. The maximum speed is $A\\omega$.",
    },

  ],
};