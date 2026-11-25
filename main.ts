// Monday Morning Punchlines — entry program.
// Writes the final joke line to /output/entry.txt and nothing else.
// The gate requires 1–200 UTF-8 characters; the line below is 112.
// No relative writes, no env gating, no try/catch around the /output write.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday morning is a delivery notification for five days of work I never ordered. No tracking number, no returns.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
