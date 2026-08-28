# The VRBIS Public Catalog

Community-designed buildings for [VRBIS](https://vrbis.xyz) — the shared
pattern book. Every file in `entries/` is one approved design; the game
syncs `index.json` and validates every entry before it can be placed.

## How a design gets here

1. In VRBIS: FORMA → DESIGN → BUILDING. Generate or paste a design,
   review it on the turntable, SUBMIT TO CATALOG, sign your name.
2. The game opens a pull request here on your behalf (or hands you the
   JSON to paste into an issue if the inbox is closed).
3. Review happens in the PR. **Merging publishes the design** — the
   manifest rebuilds itself and every city that syncs sees it.

## Ground rules

- The validator is the law: geometry is numbers, enums and hex colours
  through an allowlist. Names ≤ 40 chars, notes ≤ 160.
- Submissions are rebuilt server-side from the validated spec — what
  lands in a PR is canonical bytes, not whatever a client sent.
- Curation is editorial. VRBIS is one artwork; not everything fits, and
  that is the point of a pattern book.
