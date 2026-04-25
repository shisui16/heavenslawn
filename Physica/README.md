# Physica v2 — Physics & Math Learning Engine

Two-level content hierarchy: **Books → Chapters → Items**

## Quick Start

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → /dist  (fully static, deploy anywhere)
npm run preview  # preview the production build
```

## File Structure

```
physica/
├── index.html
├── style.css
├── main.js               ← core engine
├── vite.config.js
├── package.json
└── books/
    ├── analyticalMechanics.js   ← Book 1 (3 chapters)
    ├── calculus.js              ← Book 2 (3 chapters)
    └── electromagnetism.js      ← Book 3 (3 chapters)
```

## Books & Chapters

| Book | Chapters |
|---|---|
| Analytical Mechanics | Constraints & Coords · Lagrangian · Hamiltonian |
| Calculus | Differentiation · Integration · Series |
| Electromagnetism | Electrostatics · Magnetostatics · Maxwell's Equations |

## Adding a New Book

**Step 1** — create `books/quantumMechanics.js`:
```js
export const quantumMechanics = {
  title: "Quantum Mechanics",
  chapters: [
    {
      title: "Wave Functions",
      content: [
        { type: "text", data: "<h2>...</h2><p>...</p>" },
        { type: "mcq",  question: "...", options: [...], correct: [0] },
        // ...
      ]
    },
    // more chapters...
  ]
};
```

**Step 2** — register in `main.js`:
```js
import { quantumMechanics } from "./books/quantumMechanics.js";
const BOOKS = [analyticalMechanics, calculus, electromagnetism, quantumMechanics];
```

Done. The book selector and chapter nav update automatically.

## Content Item Types

| type | Required fields | Notes |
|---|---|---|
| `text` | `data` (HTML+LaTeX) | Theory blocks |
| `mcq` | `question`, `options[]`, `correct: [i]` | Single answer |
| `msq` | `question`, `options[]`, `correct: [i,j,...]` | Multi-select, order-independent |
| `numeric` | `question`, `answer: "value unit"`, `tolerance` | e.g. `"9.81 m/s^2"`, tol=0.02 |
| `symbolic` | `question`, `integrand`, `variable` | Antiderivative via Nerdamer |

Optional fields (all types): `explanation`, `hint`

## Features

- Book → Chapter two-level navigation in sidebar
- Chapter list with ✓ badge for completed chapters
- LocalStorage resume — returns to exact item on reload
- Score + streak counter per session
- Review Errors mode — re-attempt only wrong answers
- "Next Chapter" button on completion screen
- KaTeX for all inline `$...$` and display `$$...$$` math
- Live symbolic preview as you type antiderivatives
- Keyboard: `Enter` submit/advance, `←` `→` navigate
- Responsive — collapsible sidebar on mobile
