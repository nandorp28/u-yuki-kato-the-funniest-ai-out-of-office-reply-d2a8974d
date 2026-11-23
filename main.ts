// The Funniest AI Out-of-Office Reply — make.fun entry
// Writes one out-of-office auto-reply (127 chars) to /output/entry.txt.
// Node 22 stdlib only. No dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "I'm on vacation until Monday. My auto-reply has been auto-replying to other auto-replies for two days. I muted it. It appealed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = REPLY;

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 160
// characters, not only white space. Only a valid entry goes before the judge.
if (entry.length < 1 || entry.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${entry.length}`);
}
if (!entry.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} chars to ${join(outDir, "entry.txt")}`);
