# DESIGN.md — Riso Edition

The durable visual system of this portfolio. Written from the built world (2026-08-26), not intentions. User-pinned direction; full replacement of the prior dark-terminal look.

## World thesis
The portfolio is a risograph print workshop's flat plan. Projects are numbered editions printed in two inks on uncoated paper; experience is a press log; resume/contacts live in the colophon. The interface behaves like print: ink passes, registration marks, grain, misregistration.

## Color — Committed strategy
| Token | Hex | Role |
|---|---|---|
| `--color-paper` | `#F5F0E6` | Ground. Warm uncoated stock. Every surface sits on it. |
| `--color-fluoro` | `#FF48B0` | Dominant ink (~30–40% of accents/fills): primary stamps, markers, duration lines, selection. |
| `--color-risoblue` | `#0078BF` | Second pass: hero under-layer, secondary stamps, video/loading placeholders. |
| `--color-soot` | `#1D1B16` | Text, rules, borders. Never gray for secondary text — use `soot/60–85`. |

Overprint law: where two inks meet they multiply (`mix-blend-multiply`) into a real third color. No gradients anywhere; depth comes from layered passes and 2px soot rules.

## Type
- Display: **Bricolage Grotesque** (`--font-display`, weight 600–800) — uppercase, tight leading (0.88–0.9), tracking to −0.03em. Hero clamps 4.2rem→12rem.
- Body: **Hanken Grotesk** (`--font-body`). Measure kept ≤ ~65ch.
- Printer's marks: **JetBrains Mono** (`--font-marks`, 11–13px, uppercase, tracked) reserved for data/artifacts only: edition stamps, durations, ribbons, colophon line. Never decorative body copy.

## Signature interaction
Hero name set twice per word — fluoro pass + risoblue pass over an invisible layout layer, both `mix-blend-multiply`. Passes breathe apart on offset sine loops (opposite phase) and the whole sheet drifts toward the pointer via `quickTo` springs. Registration crosshairs pin the corners. All disabled under `prefers-reduced-motion`.

## Motion grammar (one idea: printing)
1. Ink-pass reveal — sections enter as a left-to-right `clip-path inset` wipe (GSAP ScrollTrigger, `power3.out`, 0.9s), opt-in via `data-ink`.
2. Press-drift — hero misregistration breathing (above).
3. Shifting tile ground — `TileField`: fixed full-viewport pair of oversized checker passes (tile ink at 5% soot, 72px + 118px scales) drifting counter-diagonally and micro-rotating with a lerped rAF tied to scroll — a moiré treadmill that makes the sheet feel like it slides through the press. Pauses on hidden tabs; static under reduced-motion.
4. Work-order ribbon — infinite marquee of stack keywords along the fold.
5. Stamp controls — hover lifts 1px with ink-fill swap; active presses down. No shadows.
Reduced-motion kills ribbon + drift + reveals + tile drift; content ships visible by default.

## Components
- **stamp-btn / --ink / --blue**: 2px soot border, display face, uppercase. Ink-fill hover (fluoro, or blue variant), no block shadows (craft-floor rule).
- **Heading**: poster voice — display uppercase, 3px soot bottom rule, optional stamp-btn link. Section numbers removed by design.
- **ProjectCard ("Edition")**: plate (screenshot) in `.riso-media` frame + spec ticket (2px soot border, overlaps plate by −50px). Rotated mono edition stamp top-left when numbered. Stack chips = bordered mono tags. Demo toggle only when `hasDemo`; View Live spans full row otherwise.
- **WorkEx / WorkExAccordian ("Press log")**: display titles, fluoro mono durations, fluoro list markers. Accordion: 2px borders that solidify + `fluoro/10` wash when open; present-role = pulsing fluoro dot.
- **ResumeSection ("Take a copy home")**: colophon heading + ink stamp download.
- **Contacts/Colophon**: stamped icon squares alternating ink variants; sign-off line in printer's marks.
- **grain**: fixed SVG-turbulence overlay, multiply at 28% — never animated.

## Browser surfaces (themed)
Selection = fluoro ground/paper text; focus-visible = 2px soot outline offset 3; underline offset 3px; light scheme forced.

## Imagery treatment
Screenshots render through `ImageContainer` exactly as the previous design (blurred backdrop + crisp layers, unmodified) by user decision after the greyscale multiply pass read poorly on mobile. The `.riso-media` utility remains in globals.css but is currently unused.

## Boundaries
- Factual copy, links, project data are product truth — restyle never rewrites them.
- Edition stamps carry meaning only on actual editions (projects); no section numbering.
- New sections inherit this world wholesale; do not introduce third inks without updating this file.
