# Physica – Physics & Math Learning Engine

A modular, production-ready static learning app for physics and mathematics.

## Stack

| Layer | Technology |
|---|---|
| Bundler | Vite (vanilla JS, no framework) |
| Math rendering | KaTeX (CDN) |
| Symbolic math | Nerdamer (CDN) |
| Persistence | localStorage (no backend) |
| Styling | Vanilla CSS with custom properties |

---

## Quick Start

```bash
# 1. Install dev dependencies (only Vite)
npm install

# 2. Start development server
npm run dev
# → Opens http://localhost:5173

# 3. Build for production (outputs to /dist)
npm run build

# 4. Preview production build
npm run preview
```

The `dist/` folder is a fully self-contained static site. Drop it on GitHub Pages,
Netlify, Vercel, or any static host.

---

## Project Structure

```
physica/
├── index.html          ← App shell + CDN imports (KaTeX, Nerdamer)
├── style.css           ← All styles (CSS custom properties, responsive)
├── main.js             ← Core engine: state, routing, validation, UI
├── vite.config.js
├── package.json
└── chapters/
    ├── ch1.js          ← Chapter 1: Analytical Mechanics
    └── ch2.js          ← Chapter 2: Calculus
```

---

## Adding a New Chapter

**Step 1** – Create `chapters/ch3.js`:

```js
export const chapter3 = {
  title: "Quantum Mechanics – Wave Functions",
  content: [
    {
      type: "text",
      data: `<h2>The Schrödinger Equation</h2><p>...</p>`
    },
    {
      type: "mcq",
      question: "The wavefunction $\\psi$ must be...",
      options: ["Real", "Normalised", "Always positive", "Imaginary"],
      correct: [1],
      explanation: "Normalisation ensures $\\int|\\psi|^2 dx = 1$."
    },
  ]
};
```

**Step 2** – Register it in `main.js`:

```js
import { chapter3 } from "./chapters/ch3.js";

const ALL_CHAPTERS = [chapter1, chapter2, chapter3]; // ← add here
```

That's it. The chapter selector and progress system update automatically.

---

## Content Types

### `text` – Theory block
```js
{ type: "text", data: "<h2>...</h2><p>Use $LaTeX$ inline or $$block$$</p>" }
```

### `mcq` – Single correct answer
```js
{
  type: "mcq",
  question: "Which is correct?",
  options: ["A", "B", "C", "D"],
  correct: [1],            // zero-indexed
  explanation: "Because...",
  hint: "Optional hint shown on wrong answer"
}
```

### `msq` – Multiple correct answers
```js
{
  type: "msq",
  question: "Select all that apply.",
  options: ["A", "B", "C", "D"],
  correct: [0, 2],         // order-independent validation
  explanation: "..."
}
```

### `numeric` – Number + unit answer
```js
{
  type: "numeric",
  question: "What is the velocity?",
  answer: "10 m/s",        // "<value> <unit>"
  tolerance: 0.02,         // ±2% relative error
  hint: "Use v = d/t",
  explanation: "..."
}
```

### `symbolic` – Antiderivative validation via Nerdamer
```js
{
  type: "symbolic",
  question: "Find $\\int 2x\\,dx$.",
  integrand: "2*x",        // Nerdamer expression
  variable: "x",
  hint: "Power rule",
  explanation: "$x^2 + C$"
}
```

---

## Validation Logic

| Type | Method |
|---|---|
| MCQ | `chosen === correct[0]` |
| MSQ | Compare sorted index arrays |
| Numeric | Relative error `≤ tolerance` AND unit normalisation match |
| Symbolic | `diff(user_expr, var)` via Nerdamer, simplify `(result - integrand) → 0` |

---

## Features

- **Chapter selector** dropdown with multi-chapter support
- **Progress tracking** per chapter via `localStorage`
- **Resume** where you left off on page reload
- **Streak counter** tracking consecutive correct answers
- **Score** counter for the session
- **Review Errors** mode to re-attempt incorrect items
- **KaTeX** rendering for inline `$…$` and display `$$…$$` math
- **Live symbolic preview** as you type in antiderivative inputs
- **Keyboard support**: `Enter` to submit / advance, `←` `→` arrows to navigate
- **Responsive** layout with collapsible sidebar

---

## Deploying to GitHub Pages

```bash
npm run build
# Then push the /dist folder to your gh-pages branch, or use:
npx gh-pages -d dist
```

Set `base: "/your-repo-name/"` in `vite.config.js` if needed.
