// Fridge Roast: One Line, Biggest Laugh — entry program.
// Writes a single roast of a smart fridge (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My fridge updated its firmware overnight. Now the ice maker only works on weekdays and the butter drawer wants two-factor authentication.";

if (ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error("roast fails the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`wrote ${ROAST.length} chars to /output/entry.txt`);
