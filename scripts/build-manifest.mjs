// Rebuild index.json from entries/*.json. Runs in CI on every merge —
// the manifest is never hand-edited, so it can never drift.
import { readdirSync, writeFileSync } from 'node:fs';
const entries = readdirSync('entries')
  .filter((f) => f.endsWith('.json'))
  .sort()
  .map((f) => `entries/${f}`);
writeFileSync(
  'index.json',
  JSON.stringify({ patternBook: 1, name: 'The VRBIS Public Catalog', entries }, null, 2) + '\n',
);
console.log(`manifest: ${entries.length} entries`);
