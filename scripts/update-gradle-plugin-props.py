#!/usr/bin/env python3
"""Fetch the generated Gradle plugin reference from GitHub Pages
and update the properties table in gradle-plugin-configuration.md."""

import re
import sys
import urllib.request

DOCS_FILE = "docs/reference/gradle-plugin-configuration.md"
SOURCE_URL = "https://raw.githubusercontent.com/openrewrite/rewrite-gradle-plugin/main/docs/plugin-reference.md"
START_MARKER = "<!-- AUTO-GENERATED-GRADLE-PROPS:START"
END_MARKER = "<!-- AUTO-GENERATED-GRADLE-PROPS:END -->"


def fetch(url: str) -> str:
    try:
        with urllib.request.urlopen(url) as resp:
            return resp.read().decode()
    except Exception as e:
        print(f"Warning: Could not fetch {url}: {e}", file=sys.stderr)
        sys.exit(0)


def extract_table(md: str) -> str:
    """Extract the Properties table from the generated markdown."""
    lines = md.splitlines()
    in_table = False
    table_lines = []
    for line in lines:
        if line.strip() == "### Properties":
            in_table = True
            continue
        if in_table:
            if line.startswith("|"):
                table_lines.append(line)
            elif table_lines:
                break  # end of table
    return "\n".join(table_lines)


def main():
    generated = fetch(SOURCE_URL)
    table = extract_table(generated)
    if not table:
        print(f"Warning: No properties table found at {SOURCE_URL}", file=sys.stderr)
        sys.exit(0)

    with open(DOCS_FILE) as f:
        content = f.read()

    start = content.find(START_MARKER)
    end = content.find(END_MARKER)
    if start == -1 or end == -1:
        print(f"Warning: Markers not found in {DOCS_FILE}", file=sys.stderr)
        sys.exit(0)

    start_line_end = content.index("\n", start) + 1
    new_content = content[:start_line_end] + "\n" + table + "\n\n" + content[end:]

    with open(DOCS_FILE, "w") as f:
        f.write(new_content)

    print("Updated Gradle plugin properties table")


if __name__ == "__main__":
    main()
