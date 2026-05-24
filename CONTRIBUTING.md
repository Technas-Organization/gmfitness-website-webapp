# Contributing — GM Fitness Website

## Design system

All visual tokens live in **`styles/design-system.css`**. Do not add one-off colors or spacing in components — extend CSS variables there first.

Import path from React entry: `src/index.css` imports `../styles/design-system.css`.

### Dark mode (no shell scripts)

Dark mode is **CSS + React only**. Do **not** use `fix-dark-mode.sh` (removed).

1. **System default** — `prefers-color-scheme: dark` applies when the user has not chosen a theme.
2. **Explicit toggle** — `useTheme` (`src/hooks/useTheme.ts`) sets `html[data-theme="light"|"dark"]` and the `.dark` class for Tailwind compatibility.
3. **Flash prevention** — inline script in `index.html` reads `localStorage.theme` before React hydrates.

To test:

```bash
npm run dev
# Toggle theme via the settings panel (sun/moon icon in header)
```

### Scroll animations

Elements with class `.reveal` fade in when scrolled into view. Initialized in `src/utils/scrollReveal.js` and re-scanned after lazy sections mount (`App.jsx`).

### Integrations — do not break

| Integration | Location | Rule |
|-------------|----------|------|
| EmailJS contact form | `src/components/Contact.jsx`, `src/services/EmailService.ts` | Restyle only; keep submit handler |
| Fillout booking | `src/components/BookingForm.jsx` iframe `forms.fillout.com/t/c24LK1RZ97us` | Do not change `src` URL |
| Firebase | `src/config/firebase.ts`, services | Do not modify `firebase.json` / `firestore.rules` |
| Brevo newsletter | `index.html` + `Footer.jsx` `#sib-form` | Keep form action and IDs |

### Build & deploy

```bash
npm install
npm run dev      # local
npm run build    # production bundle → dist/
npm run deploy   # gh-pages (requires npm run build)
```

### Accessibility checklist

- Every `<img>` has a descriptive `alt` (or `alt=""` if decorative).
- Every form control has an associated `<label htmlFor="…">`.
- One `<h1>` per page (Hero); section titles use `<h2>`.
- Interactive elements are `<button>` or `<a>`, not `<motion.div>` with click handlers.
