import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of my own Monday, written like a product review:
// stars, a verdict, and one specific Monday moment — the alarm clock
// that stopped fighting the snooze button and started fighting me.
const LINE =
  "Monday: ★☆☆☆☆. My alarm rang at 6, I snoozed it at 6:05, and by 6:30 it had given up and started playing my own voice saying 'you're late again.'";

// Guard: the bounty gate is one line, 1–200 UTF-8 characters, nothing else.
// Refuse to write an entry that would fail it instead of failing silently.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if ([...LINE].length >= 200 || [...LINE].length < 1) {
  throw new Error("entry must be 1–200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
