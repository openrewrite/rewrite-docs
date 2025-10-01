#!/usr/bin/env node

/**
 * Generate llms.txt and llms-full.txt for OpenRewrite documentation
 *
 * This script creates two files:
 * - llms.txt: Curated directory of essential documentation links
 * - llms-full.txt: Comprehensive directory of all documentation links
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const DOCS_DIR = path.join(__dirname, 'docs');
const STATIC_DIR = path.join(__dirname, 'static');
const OUTPUT_LLMS = path.join(STATIC_DIR, 'llms.txt');
const OUTPUT_LLMS_FULL = path.join(STATIC_DIR, 'llms-full.txt');
const BASE_URL = 'https://docs.openrewrite.org';

// Priority structure for llms.txt (essential links only)
const PRIORITY_SECTIONS = [
  {
    title: 'Getting started',
    items: [
      { path: 'introduction.md', title: 'Introduction to OpenRewrite', description: 'Overview of OpenRewrite and how it works' },
      { path: 'running-recipes/getting-started.md', title: 'Quickstart guide', description: 'Setting up your project and running recipes' },
      { path: 'running-recipes/customize-recipe.md', title: 'Customize recipes', description: 'How to customize recipes to meet your needs' },
    ]
  },
  {
    title: 'Running recipes',
    items: [
      { path: 'running-recipes/running-rewrite-on-a-maven-project-without-modifying-the-build.md', title: 'Run on Maven projects', description: 'Running rewrite on a Maven project without modifying the build' },
      { path: 'running-recipes/running-rewrite-on-a-gradle-project-without-modifying-the-build.md', title: 'Run on Gradle projects', description: 'Running rewrite on a Gradle project without modifying the build' },
      { path: 'reference/gradle-plugin-configuration.md', title: 'Gradle plugin configuration', description: 'Complete Gradle plugin setup and configuration' },
      { path: 'reference/rewrite-maven-plugin.md', title: 'Maven plugin configuration', description: 'Complete Maven plugin setup and configuration' },
    ]
  },
  {
    title: 'Popular migration guides',
    items: [
      { path: 'running-recipes/popular-recipe-guides/migrate-to-java-17.md', title: 'Migrate to Java 17', description: 'Automated migration to Java 17' },
      { path: 'running-recipes/popular-recipe-guides/migrate-to-java-21.md', title: 'Migrate to Java 21', description: 'Automated migration to Java 21' },
      { path: 'running-recipes/popular-recipe-guides/migrate-to-spring-3.md', title: 'Migrate to Spring Boot 3', description: 'Migrate to Spring Boot 3.0/3.2/3.3/3.4/3.5' },
      { path: 'running-recipes/popular-recipe-guides/spring-boot-2.x-migration-from-spring-boot-1.x.md', title: 'Migrate Spring Boot 1 to 2', description: 'Migrate from Spring Boot 1.x to Spring Boot 2.x' },
      { path: 'running-recipes/popular-recipe-guides/migrate-to-jakarta-ee-10.md', title: 'Migrate to Jakarta EE 10', description: 'Migrate deprecated javax.xml.bind packages to jakarta.xml.bind' },
      { path: 'running-recipes/popular-recipe-guides/migrate-from-junit-4-to-junit-5.md', title: 'Migrate to JUnit 5', description: 'Migrate from JUnit 4 to JUnit 5' },
      { path: 'running-recipes/popular-recipe-guides/common-static-analysis-issue-remediation.md', title: 'Common static analysis fixes', description: 'Automatically fix common static analysis issues' },
    ]
  },
  {
    title: 'Core concepts',
    items: [
      { path: 'concepts-and-explanations/lossless-semantic-trees.md', title: 'Lossless Semantic Trees (LST)', description: 'Understanding LST representation of source code' },
      { path: 'concepts-and-explanations/lst-examples.md', title: 'Java LST examples', description: 'Examples of how Java code is represented as LSTs' },
      { path: 'concepts-and-explanations/recipes.md', title: 'Recipes', description: 'How recipes work and how to compose them' },
      { path: 'concepts-and-explanations/visitors.md', title: 'Visitors', description: 'Pattern for traversing and modifying LSTs' },
      { path: 'concepts-and-explanations/markers.md', title: 'Markers', description: 'Metadata attached to LST elements' },
    ]
  },
  {
    title: 'Authoring recipes',
    items: [
      { path: 'authoring-recipes/types-of-recipes.md', title: 'Types of recipes', description: 'Overview of declarative, Refaster, and imperative recipes' },
      { path: 'authoring-recipes/recipe-development-environment.md', title: 'Recipe development environment', description: 'Setting up your environment for recipe development' },
      { path: 'authoring-recipes/writing-a-java-refactoring-recipe.md', title: 'Write a Java refactoring recipe', description: 'Step-by-step guide to writing imperative recipes' },
      { path: 'authoring-recipes/refaster-recipes.md', title: 'Refaster recipes', description: 'Template-based recipe development with Refaster' },
      { path: 'authoring-recipes/recipe-testing.md', title: 'Recipe testing', description: 'Testing recipes with RewriteTest' },
      { path: 'authoring-recipes/recipe-conventions-and-best-practices.md', title: 'Recipe conventions', description: 'Best practices for recipe development' },
    ]
  },
  {
    title: 'Reference',
    items: [
      { path: 'reference/faq.md', title: 'Frequently asked questions', description: 'Common questions about OpenRewrite' },
      { path: 'reference/supported-languages.md', title: 'Supported languages', description: 'Languages and frameworks supported by OpenRewrite' },
      { path: 'reference/recipes-by-tag.md', title: 'Recipes by tag', description: 'Browse recipes by category' },
      { path: 'reference/method-patterns.md', title: 'Method patterns', description: 'Syntax for matching methods in recipes' },
    ]
  },
];

// Sections for llms-full.txt
const FULL_SECTIONS = [
  { name: 'Running Recipes', dir: 'running-recipes' },
  { name: 'Authoring Recipes', dir: 'authoring-recipes' },
  { name: 'Concepts & Explanations', dir: 'concepts-and-explanations' },
  { name: 'Reference', dir: 'reference' },
  { name: 'Recipe Catalog', dir: 'recipes' },
];

/**
 * Convert file path to URL path
 */
function pathToUrl(filePath) {
  const relativePath = path.relative(DOCS_DIR, filePath);
  let urlPath = relativePath
    .replace(/\.mdx?$/, '')
    .replace(/\\/g, '/');

  return `${BASE_URL}/${urlPath}`;
}

/**
 * Get title and description from markdown file
 */
function getFileMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content: body } = matter(content);

    // Try multiple sources for title in priority order:
    // 1. frontmatter.title
    // 2. frontmatter.sidebar_label
    // 3. First H1 heading in content
    // 4. Filename as last resort
    let title = frontmatter.title || frontmatter.sidebar_label;

    if (!title) {
      // Try to extract first H1 heading
      const h1Match = body.match(/^#\s+(.+)$/m);
      if (h1Match) {
        title = h1Match[1].trim();
      }
    }

    if (!title) {
      title = path.basename(filePath, path.extname(filePath));
    }

    const description = frontmatter.description || '';

    return { title, description };
  } catch (error) {
    console.warn(`Warning: Could not read ${filePath}: ${error.message}`);
    return { title: path.basename(filePath, path.extname(filePath)), description: '' };
  }
}

/**
 * Recursively find all markdown files in a directory
 */
function findMarkdownFiles(dir) {
  const results = [];

  function traverse(currentDir) {
    if (!fs.existsSync(currentDir)) return;

    const files = fs.readdirSync(currentDir);

    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
        results.push(filePath);
      }
    }
  }

  traverse(dir);
  return results.sort();
}

/**
 * Format a link entry
 */
function formatLink(title, url, description = '') {
  if (description) {
    return `* [${title}](${url}): ${description}`;
  }
  return `* [${title}](${url})`;
}

/**
 * Generate llms.txt with curated links
 */
function generateLlmsTxt() {
  console.log('Generating llms.txt...');

  let output = `# OpenRewrite Documentation

> Large-scale automated source code refactoring
> ${BASE_URL}

This file provides essential OpenRewrite documentation for AI assistants.
For comprehensive documentation, see llms-full.txt.

## Quick Links

* Home: ${BASE_URL}
* GitHub: https://github.com/openrewrite
* Recipe Catalog: ${BASE_URL}/recipes
* Slack: https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA
* Discord: https://discord.gg/xk3ZKrhWAb

`;

  for (const section of PRIORITY_SECTIONS) {
    output += `\n## ${section.title}\n\n`;

    for (const item of section.items) {
      const filePath = path.join(DOCS_DIR, item.path);

      if (!fs.existsSync(filePath)) {
        console.warn(`Warning: File not found: ${item.path}`);
        continue;
      }

      const url = pathToUrl(filePath);
      const title = item.title;
      const description = item.description;

      output += formatLink(title, url, description) + '\n';
      console.log(`  Added: ${title}`);
    }
  }

  output += `
## Key terminology

* **Recipe**: A program that makes automated changes to source code
* **LST (Lossless Semantic Tree)**: Type-attributed, format-preserving tree representation of source code
* **Visitor**: Pattern for traversing and modifying LSTs
* **Marker**: Metadata attached to LST elements
* **Data Table**: Structured output from recipes for reporting

## Resources

* OpenRewrite GitHub: https://github.com/openrewrite
* Moderne Docs: https://docs.moderne.io
* Moderne Platform: https://www.moderne.ai
* Public Instance: https://app.moderne.io
* Community: https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA
`;

  fs.writeFileSync(OUTPUT_LLMS, output);
  console.log(`\n✓ Generated llms.txt (${(output.length / 1024).toFixed(2)} KB)`);
}

/**
 * Generate llms-full.txt with comprehensive directory
 */
function generateLlmsFullTxt() {
  console.log('\nGenerating llms-full.txt...');

  let output = `# OpenRewrite Documentation (Complete)

> Large-scale automated source code refactoring
> ${BASE_URL}

This file provides a comprehensive directory of all OpenRewrite documentation for AI assistants.

## Quick Links

* Home: ${BASE_URL}
* GitHub: https://github.com/openrewrite
* Recipe Catalog: ${BASE_URL}/recipes
* Slack: https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA
* Discord: https://discord.gg/xk3ZKrhWAb

`;

  // Add introduction
  const introPath = path.join(DOCS_DIR, 'introduction.md');
  if (fs.existsSync(introPath)) {
    const { title, description } = getFileMetadata(introPath);
    output += `\n## Introduction\n\n`;
    output += formatLink(title, pathToUrl(introPath), description) + '\n';
  }

  let totalDocs = 1; // Count introduction

  // Process each section
  for (const section of FULL_SECTIONS) {
    console.log(`  Processing section: ${section.name}`);
    output += `\n## ${section.name}\n\n`;

    const sectionDir = path.join(DOCS_DIR, section.dir);
    const files = findMarkdownFiles(sectionDir);

    for (const file of files) {
      const { title, description } = getFileMetadata(file);
      const url = pathToUrl(file);

      output += formatLink(title, url, description) + '\n';
      totalDocs++;
    }

    console.log(`    Added ${files.length} documents`);
  }

  output += `
## Key terminology

* **Recipe**: A program that makes automated changes to source code
* **LST (Lossless Semantic Tree)**: Type-attributed, format-preserving tree representation of source code
* **Visitor**: Pattern for traversing and modifying LSTs
* **Marker**: Metadata attached to LST elements
* **Data Table**: Structured output from recipes for reporting
* **Precondition**: Conditions that determine if a recipe should run on a source file
* **Style**: Formatting preferences applied when printing LSTs back to source code

## Resources

* OpenRewrite GitHub: https://github.com/openrewrite
* Moderne Docs: https://docs.moderne.io
* Moderne Platform: https://www.moderne.ai
* Public Instance: https://app.moderne.io
* Community: https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA
`;

  fs.writeFileSync(OUTPUT_LLMS_FULL, output);
  console.log(`\n✓ Generated llms-full.txt (${totalDocs} documents, ${(output.length / 1024).toFixed(2)} KB)`);
}

/**
 * Main execution
 */
function main() {
  console.log('OpenRewrite llms.txt Generator\n');

  // Check if docs directory exists
  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`Error: docs directory not found at ${DOCS_DIR}`);
    process.exit(1);
  }

  // Ensure static directory exists
  if (!fs.existsSync(STATIC_DIR)) {
    console.error(`Error: static directory not found at ${STATIC_DIR}`);
    process.exit(1);
  }

  generateLlmsTxt();
  generateLlmsFullTxt();

  console.log('\n✓ Done! Files generated:');
  console.log(`  - ${OUTPUT_LLMS}`);
  console.log(`  - ${OUTPUT_LLMS_FULL}`);
}

main();
