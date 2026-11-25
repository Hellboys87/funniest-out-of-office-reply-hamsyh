import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "I'm out of office until Jan 5 with no access to email — if it's urgent, contact Dave, who told everyone I'd be checking anyway. Dave is the access.";

if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 160) {
  throw new Error(
    `Entry line must be 1-160 characters, got ${ENTRY_LINE.length}`,
  );
}

if (ENTRY_LINE.includes("\n") || ENTRY_LINE.includes("\r")) {
  throw new Error("Entry line must not contain a newline");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");
