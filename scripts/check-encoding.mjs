import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT_DIR = process.cwd();

const DIRECTORIES_TO_SCAN = [
  "app",
  "components",
  "content",
  "lib",
];

const ALLOWED_EXTENSIONS = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".md",
  ".mdx",
  ".json",
]);

/**
 * Sequenze tipiche di testo UTF-8 interpretato erroneamente
 * come Windows-1252 o ISO-8859-1.
 */
const SUSPICIOUS_PATTERNS = [
  { label: "carattere Ã", regex: /Ã/u },
  { label: "carattere Â", regex: /Â/u },
  { label: "sequenza â", regex: /â/u },
  { label: "sequenza ð", regex: /ð/u },
  { label: "carattere di sostituzione Unicode", regex: /�/u },
];

const IGNORED_DIRECTORIES = new Set([
  ".git",
  ".next",
  "node_modules",
  "out",
  "dist",
  "coverage",
]);

async function collectFiles(directoryPath) {
  let entries;

  try {
    entries = await fs.readdir(directoryPath, {
      withFileTypes: true,
    });
  } catch (error) {
    if (error?.code === "ENOENT") {
      return [];
    }

    throw error;
  }

  const files = [];

  for (const entry of entries) {
    if (IGNORED_DIRECTORIES.has(entry.name)) {
      continue;
    }

    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...await collectFiles(entryPath));
      continue;
    }

    if (
      entry.isFile() &&
      ALLOWED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
    ) {
      files.push(entryPath);
    }
  }

  return files;
}

function findEncodingIssues(filePath, content) {
  const issues = [];
  const lines = content.split(/\r?\n/u);

  lines.forEach((line, index) => {
    for (const pattern of SUSPICIOUS_PATTERNS) {
      if (pattern.regex.test(line)) {
        issues.push({
          filePath,
          lineNumber: index + 1,
          label: pattern.label,
          text: line.trim(),
        });
      }
    }
  });

  return issues;
}

async function main() {
  const files = [];

  for (const directory of DIRECTORIES_TO_SCAN) {
    files.push(
      ...await collectFiles(path.join(ROOT_DIR, directory)),
    );
  }

  const issues = [];

  for (const filePath of files) {
    const content = await fs.readFile(filePath, "utf8");
    issues.push(...findEncodingIssues(filePath, content));
  }

  if (issues.length === 0) {
    console.log(
      `Encoding check passed: ${files.length} files scanned, no suspicious sequences found.`,
    );
    return;
  }

  console.error(
    `Encoding check failed: found ${issues.length} suspicious occurrence(s).\n`,
  );

  for (const issue of issues) {
    const relativePath = path.relative(ROOT_DIR, issue.filePath);

    console.error(
      `${relativePath}:${issue.lineNumber} [${issue.label}]`,
    );

    if (issue.text) {
      console.error(`  ${issue.text}`);
    }
  }

  process.exitCode = 1;
}

main().catch((error) => {
  console.error("Unable to complete the encoding check.");
  console.error(error);
  process.exitCode = 1;
});