# Signs

A playful astrology-reading webapp (the "Orbit" design), built with React + Vite +
Framer Motion + Tailwind. It is a performance piece: behind the questionnaire, the
spectator covertly arms a playing card, which is revealed at the end of the reading.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (Vite serves under the `/signs/` base path, e.g.
`http://localhost:5173/signs/`).

Production build / preview:

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages, kafoosh.github.io/signs/)

1. Create a GitHub repo named **`signs`** under the user **`kafoosh`**.
2. Push this project to the `main` branch.
3. In the repo: **Settings -> Pages -> Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds on every push to
   `main` and publishes `dist/`. The site serves at
   **https://kafoosh.github.io/signs/** because Vite's `base` is set to `/signs/`
   in `vite.config.js`.

If you rename the repo, update `base` in `vite.config.js` to match (`/<repo>/`).

## How the trick works (performer notes)

Two screens covertly arm a card; everything else is misdirection.

- **Card VALUE** is captured by *where on the WELCOME screen the spectator taps*.
  Behind the "SIGNS" splash is an invisible 4x3 grid (reading order: A, 2, 3, 4 /
  5, 6, 7, 8 / 9, 10, J, Q) plus a bottom band for the King. A centre tap defaults
  to a sensible value, so a naive tap still yields a playable card.
- **Card SUIT** is captured by *which quarter of a gender card they tap*, in CHaSeD
  order left to right: Clubs, Hearts, Spades, Diamonds.
- **STAR SIGN** chosen on the zodiac screen is spoken back by name in the reading
  intro ("Hello Leo.").

### Cheat-sheet

**Triple-tap the `@oddpaq` credit** at the bottom of the screen to open a performer
cheat-sheet showing the value/suit maps and the currently "Armed" card.

### The reveal

The reading types out: an intro (with the spelled-out sign name and today's date in
ordinal words), six sections (one of five options chosen at random each), a
conclusion that trails off "...and also...", and finally the armed playing card with
a bloom + confetti and the caption "You picked the [Value] of [Suit].". Only the
most-recently typed paragraph keeps a blinking caret. The final button reads
**"and also..."** and flips the card.

## Project structure

```
src/
  main.jsx            font imports + mount
  index.css           Tailwind layers + ported Orbit styles (keyframes, captcha slices)
  App.jsx             routing, secret state, stamp, footer, modals
  data/
    reading.js        6 sections x 5 options, conclusion, ordinal-date helpers
    content.js        card maps, zodiac/animals/rangers, rank items
  lib/
    motion.js         Framer Motion variants (spring, stagger, screen transition)
    asset.js          base-aware asset() URL helper
  components/
    Backdrop.jsx      drifting blobs / rings / stars / squiggles
    Stagger.jsx       staggered entrance container + item
    ResponseStamp.jsx slap-in sticker stamp
    InfoModal.jsx     "i" about dialog
    CheatSheet.jsx    triple-tap performer cheat-sheet
    PlayingCard.jsx   the hero card + caption helper
    Confetti.jsx      reveal confetti burst
  screens/            one component per screen (0..13)
public/img/           captcha.png, potato.png
```

Images are referenced base-aware via `import.meta.env.BASE_URL` so they resolve
correctly under `/signs/`.
