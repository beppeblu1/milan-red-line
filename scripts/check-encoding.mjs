import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { extname } from "node:path";

const suspiciousCharacters = ["Ã", "Â", "â", "ð", "�"];

const excludedFiles = new Set([
  "scripts/check-encoding.mjs",
]);

const excludedDirectories = [
  "node_modules/",
  ".next/",
  ".git/",
  "dist/",
  "out/",
  "coverage/",
];

const textExtensions = new Set([
  ".css",
  ".csv",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mdx",
  ".mjs",
  ".cjs",
  ".scss",
  ".svg",
  ".ts",
  ".tsx",
  ".txt",
  ".xml",
  ".yml",
  ".yaml",
]);

function getTrackedFiles() {
  const output = execFileSync("git", ["ls-files", "-z"], {
    encoding: "utf8",
  });

  return output.split("\0").filter(Boolean);
}

function isIncludedTextFile(filePath) {
  if (excludedFiles.has(filePath)) {
    return false;
  }

  if (
    excludedDirectories.some((directory) =>
      filePath.startsWith(directory),
    )
  ) {
    return false;
  }

  return textExtensions.has(extname(filePath).toLowerCase());
}

function findSuspiciousLines(filePath) {
  const content = readFileSync(filePath, "utf8");
  const lines = content.split(/\r?\n/);
  const findings = [];

  lines.forEach((line, index) => {
    if (
      suspiciousCharacters.some((character) =>
        line.includes(character),
      )
    ) {
      findings.push({
        lineNumber: index + 1,
        content: line.trim(),
      });
    }
  });

  return findings;
}

try {
  const files = getTrackedFiles().filter(isIncludedTextFile);
  const errors = [];

  for (const filePath of files) {
    const findings = findSuspiciousLines(filePath);

    for (const finding of findings) {
      errors.push(
        `${filePath}:${finding.lineNumber}: ${finding.content}`,
      );
    }
  }

  if (errors.length > 0) {
    console.error("Encoding check failed.");
    console.error("");
    console.error(errors.join("\n"));
    process.exit(1);
  }

  console.log(
    `Encoding check passed: ${files.length} tracked text files scanned, no suspicious sequences found.`,
  );
} catch (error) {
  console.error("Encoding check could not be completed.");

  if (error instanceof Error) {
    console.error(error.message);
  }

  process.exit(1);
}