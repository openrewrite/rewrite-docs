#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

const ALLOWED_EXTENSIONS = new Set([
  '.md', '.mdx', '.tsx', '.ts', '.js', '.mjs', '.css', '.json',
  '.png', '.gif', '.jpg', '.jpeg', '.svg', '.ico',
  '.yaml', '.yml', '.toml', '.lock', '.txt',
]);

const ALLOWED_FILENAMES = new Set([
  'LICENSE', 'Makefile', 'Dockerfile',
  '.gitignore', '.gitattributes', '.nvmrc', '.node-version',
  '.editorconfig', '.prettierignore', '.eslintignore',
]);

const baseRef = process.env.BASE_REF;
if (!baseRef) {
  console.error('BASE_REF environment variable is required.');
  process.exit(1);
}

let output;
try {
  output = execSync(`git diff --name-only --diff-filter=ACMR ${baseRef}...HEAD`, {
    encoding: 'utf-8',
  });
} catch (err) {
  console.error('Failed to run git diff:', err.message);
  process.exit(1);
}

const files = output.trim().split('\n').filter(Boolean);

if (files.length === 0) {
  console.log('No changed files to check.');
  process.exit(0);
}

const violations = [];
for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const basename = path.basename(file);

  if (ALLOWED_FILENAMES.has(basename)) continue;
  if (ext && ALLOWED_EXTENSIONS.has(ext)) continue;

  violations.push(file);
}

if (violations.length > 0) {
  console.error('Files with disallowed types:\n');
  for (const f of violations) {
    console.error(`  ${f}`);
  }
  console.error(`\nAllowed extensions: ${[...ALLOWED_EXTENSIONS].sort().join(', ')}`);
  process.exit(1);
}

console.log(`All ${files.length} changed file(s) have allowed types.`);
