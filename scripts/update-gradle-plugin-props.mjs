#!/usr/bin/env node
/**
 * Fetch the generated Gradle plugin reference from GitHub
 * and update the properties table in gradle-plugin-configuration.md.
 */
import { readFileSync, writeFileSync } from "fs";
import https from "https";

const DOCS_FILE = "docs/reference/gradle-plugin-configuration.md";
const SOURCE_URL =
  "https://raw.githubusercontent.com/openrewrite/rewrite-gradle-plugin/main/docs/plugin-reference.md";
const START_MARKER = "<!-- AUTO-GENERATED-GRADLE-PROPS:START";
const END_MARKER = "<!-- AUTO-GENERATED-GRADLE-PROPS:END -->";

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks).toString()));
      res.on("error", reject);
    }).on("error", reject);
  });
}

function extractTable(md) {
  const lines = md.split("\n");
  let inTable = false;
  const tableLines = [];
  for (const line of lines) {
    if (line.trim() === "### Properties") {
      inTable = true;
      continue;
    }
    if (inTable) {
      if (line.startsWith("|")) {
        tableLines.push(line);
      } else if (tableLines.length > 0) {
        break;
      }
    }
  }
  return tableLines.join("\n");
}

try {
  const generated = await fetch(SOURCE_URL);
  const table = extractTable(generated);
  if (!table) {
    console.warn(`Warning: No properties table found at ${SOURCE_URL}`);
    process.exit(0);
  }

  const content = readFileSync(DOCS_FILE, "utf-8");
  const startIdx = content.indexOf(START_MARKER);
  const endIdx = content.indexOf(END_MARKER);
  if (startIdx === -1 || endIdx === -1) {
    console.warn(`Warning: Markers not found in ${DOCS_FILE}`);
    process.exit(0);
  }

  const startLineEnd = content.indexOf("\n", startIdx) + 1;
  const newContent = content.slice(0, startLineEnd) + "\n" + table + "\n\n" + content.slice(endIdx);
  writeFileSync(DOCS_FILE, newContent);
  console.log("Updated Gradle plugin properties table");
} catch (err) {
  console.warn(`Warning: ${err.message}, skipping Gradle plugin props update`);
  process.exit(0);
}
