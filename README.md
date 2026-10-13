# Sovereign Front 1.1.0

Sovereign Front is a mobile-first territory-conquest strategy game by PhantomFlex Interactive.

## Run

- **Phone / simple local play:** use the supplied standalone `sovereign_front.html` build.
- **Full project / PWA:** serve this folder over HTTPS (or a local development web server) and open `index.html`. Installing as a PWA requires a secure browser context.
- The game has no account requirement and keeps preferences, profile data, career history, and active battle saves locally in the browser.

## Project layout

- `index.html` — application shell and UI
- `css/app.css` — responsive UI, battlefield HUD, accessibility and orientation layouts
- `js/app.js` — core map/simulation/rendering/input/audio systems
- `js/major.js` — strategic systems, save/recovery, diplomacy, operations, history/reporting and new frontend logic
- `manifest.webmanifest` — install metadata
- `service-worker.js` — versioned offline shell/update handling
- `assets/icons/` — Sovereign Front app icons

## Save safety

Active battles use an explicit schema version. Invalid/corrupt active saves are rejected rather than loaded blindly. Updates preserve browser storage. A waiting service-worker update is not forced over an active campaign.

## Geographic data

Offline map masks were derived from GSHHG shoreline data and Natural Earth outlines. See `THIRD_PARTY_NOTICES.md` and source comments in `js/app.js`.
