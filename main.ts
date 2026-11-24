import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Good morning, Port Lullaby: 14 degrees, a slow rain that smells of cinnamon, and every bus three minutes early — for once.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
