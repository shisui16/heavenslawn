# ∫ Integral Trainer

A minimal, production-ready web app for practicing integrals with **symbolic answer validation** — no string matching.

## How Validation Works
hi
When a user submits an answer `f(x)`:
1. Nerdamer differentiates `f(x)` with respect to `x`
2. The result is subtracted from the original integrand
3. If `simplify(diff(f) − integrand) = 0` → **Correct**

This means `x^3/3`, `x^3/3 + C`, `(2x^3)/6`, and `0.333*x^3` all pass for `∫x² dx`.

---

## Setup

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
cd integral-trainer
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. This is a fully static folder — deploy anywhere:
- **Netlify**: drag & drop `dist/` in their dashboard
- **Vercel**: `vercel --prod` from project root
- **GitHub Pages**: push `dist/` to `gh-pages` branch
- **Any static host**: upload contents of `dist/`

### Preview Production Build Locally

```bash
npm run preview
```

---

## File Structure

```
integral-trainer/
├── index.html      # App shell, CDN imports for KaTeX + Nerdamer
├── style.css       # All styles (CSS variables, dark academic theme)
├── main.js         # App logic: state, validation, rendering
├── package.json    # Vite dev dependency only
└── README.md
```

## Problem Data

Problems are defined as plain objects in `main.js`:

```js
{
  difficulty: "easy",          // "easy" | "medium" | "hard"
  integrand: "x^2",           // Nerdamer-parseable expression
  latex: "\\int x^2 \\, dx",  // KaTeX string for display
  hint: "Power rule: ...",     // Shown on hint button click
}
```

To add problems, append to the `PROBLEMS` array. Problems are served in order: easy → medium → hard, shuffled within each tier.

## Dependencies (all CDN, no npm install needed at runtime)

| Library | Purpose |
|---------|---------|
| [KaTeX 0.16](https://katex.org) | Render math notation |
| [Nerdamer 1.1.13](https://nerdamer.com) | Symbolic differentiation & simplification |
| [Vite 5](https://vitejs.dev) | Dev server + static build (dev only) |
