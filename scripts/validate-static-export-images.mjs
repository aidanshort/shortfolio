import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = "out";
const IMAGE_OPTIMIZER_PATTERN = "/_next/image?";

async function collectHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return collectHtmlFiles(fullPath);
      }

      if (entry.isFile() && entry.name.endsWith(".html")) {
        return [fullPath];
      }

      return [];
    }),
  );

  return files.flat();
}

async function main() {
  const htmlFiles = await collectHtmlFiles(OUT_DIR);

  if (htmlFiles.length === 0) {
    throw new Error(`No HTML files found under '${OUT_DIR}'. Run 'npm run build' first.`);
  }

  const offenders = [];

  for (const filePath of htmlFiles) {
    const content = await readFile(filePath, "utf8");

    if (content.includes(IMAGE_OPTIMIZER_PATTERN)) {
      offenders.push(filePath);
    }
  }

  if (offenders.length > 0) {
    const list = offenders.map((filePath) => ` - ${filePath}`).join("\n");
    throw new Error(
      `Detected Next.js optimizer URLs (${IMAGE_OPTIMIZER_PATTERN}) in exported HTML:\n${list}\n` +
        "For static export, configure 'images.unoptimized: true' in next.config.ts.",
    );
  }

  console.log(`Verified ${htmlFiles.length} exported HTML file(s): no ${IMAGE_OPTIMIZER_PATTERN} URLs found.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
