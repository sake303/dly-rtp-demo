# DLY RTP Progression Context Demo

## Purpose

This static demo helps qualified performance staff review the context around a planned return-to-play exposure. It is an illustrative decision-context surface: DLY does not diagnose, clear, predict injury, or recommend a decision. The staff member retains the choices to progress, hold, or modify.

The source design contract is [`DLY-decision-layer/DESIGN.md`](/Users/mattlee/DLY-decision-layer/DESIGN.md). This local file records the executable implementation contract for `index.html`, including the Korean presentation route at `?lang=ko`.

## Personas and task

- Primary: a qualified performance staff member who needs to compare a planned exposure with recent team exposure and the current week's team requirement.
- Secondary: a non-technical medical or operating advisor reviewing the product concept in a short demo.
- Task: advance the four-step scenario, open the context review when it appears, inspect independent evidence, and see that the final staff choice is not made by the product.

## Visual tokens

| Token group | Contract |
| --- | --- |
| Shell | dark, calm operational review surface: `#071827` background, `#0c1e2b` surface, `#10212d` raised surface |
| Text | `#ecece8` primary, `#9a9ea5` muted, `#7e848d` quiet |
| Structure | `#233a4b` divider, `#3c566a` strong divider, zero or near-zero radius |
| Action | restrained blue `#5b7cff`; it marks an available action, never a health score or recommendation |
| Dashboard data | muted indigo `#6075a9` → `#425685` for activity and recorded-value bars; it is visually quieter than an available action |
| Type | Instrument Sans for reading; JetBrains Mono for operational labels, states, and controls |
| Space | outer gutter `clamp(20px, 3.4vw, 48px)`; console spacing increments from 2px to 28px |
| Motion | 160ms control feedback, 240ms state transition, 520ms evidence reveal; all respect reduced motion |

## Primitives and behavior

- Hero: identifies DLY as a decision layer for performance and RTP teams, not a clinical conclusion.
- Embedded infrastructure view: sits between the hero and the dashboard as a same-page explanatory moment. It uses the same selected `?lang=` route inside a contained frame and introduces how attributable records become review context before the dashboard shows the operational workflow.
- Locale switcher: a compact `EN` / `KO` control in the hero's upper-right corner links to the equivalent locale route and marks the active language without interrupting the review flow.
- Controls: the top scenario controls provide two intentional entry paths: `Review decision context` opens the complete available context for a short meeting, while `Walk through context` discloses it over four ordered steps. Previous, next, source disclosure, and reset preserve the inspectable scenario state; the redundant lower timeline is intentionally absent.
- Performance console: an illustrative source system, visually distinct but not presented as live data.
- Context notification: appears only after reviewable context arrives.
- Review drawer: compares the planned exposure with team context, keeps the staff decision separate from the evidence, traps focus, and restores focus on close.
- Decision control: shows three staff-owned options without selecting or ranking one.
- Source disclosure: can be toggled without changing the evidence or decision state.

## Korean localization contract

- English remains the default route. Korean is explicitly available at `?lang=ko`; the route changes content language and number formatting to Korean while preserving the same DOM-driven interactions.
- Translate user-visible labels, synthesized-data descriptors, announcements, status labels, and navigation. Keep internal IDs and state values stable so behavior is identical across locales.
- Keep the medical boundary explicit in both languages. Use `판단 맥락`, `검토`, and `스태프` rather than diagnostic or prescriptive language.
- Korean text must avoid clipped glyphs, orphaned particles, and unnatural line breaks at 375px, 768px, and 1280px.
- Korean controls and boundary copy use the reading font with normal tracking, so short action labels and predicates never inherit English mono-control spacing or split within a word.

## Accessibility and accepted debt

- Preserve visible focus, keyboard-accessible top controls, modal focus containment, Escape close, live announcements, reduced motion, and responsive one-column layouts.
- Color is not the sole evidence-state indicator: each card retains a text status and source label.
- Accepted debt: this is a single-file illustrative prototype with no persistent locale preference or live data integration. It is deliberately not presented as a production clinical system.
