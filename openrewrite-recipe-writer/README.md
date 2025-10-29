# OpenRewrite Recipe Writer

A Claude Code plugin that provides expert guidance for writing OpenRewrite recipes - automated refactoring operations for source code.

## Directory Structure

```
openrewrite-recipe-writer/        # Plugin directory
├── .claude-plugin/
│   └── plugin.json               # Plugin manifest
├── SKILL.md                      # Main skill instructions
├── README.md                     # This file
├── .gitignore                    # Git configuration
├── assets/                       # Templates used in output
│   ├── template-imperative-recipe.java
│   ├── template-declarative-recipe.yml
│   └── template-recipe-test.java
├── references/                   # Documentation loaded as needed
│   ├── example-say-hello-recipe.java
│   ├── example-scanning-recipe.java
│   ├── example-declarative-migration.yml
│   └── checklist-recipe-development.md
└── scripts/                      # Executable scripts
    └── upload-skill.sh           # Upload skill via Claude API
```

## Installation

> **Note**: This plugin currently contains only a skill. Plugins can also include commands, agents, hooks, and MCP servers (Claude Code only), but this plugin doesn't use those features yet.

### For Claude Code (Plugin - Recommended)

Install directly from GitHub:

```bash
/plugin install openrewrite/rewrite-docs/openrewrite-recipe-writer
```

Or from a local clone:

```bash
# From the rewrite-docs repository root
/plugin install ./openrewrite-recipe-writer
```

**Verify installation:**
```bash
# List installed plugins
/plugin list
```

### For Claude Code (Standalone Skill)

Alternatively, install as a standalone skill without plugin features:

```bash
# Global installation
cp -r openrewrite-recipe-writer ~/.claude/skills/openrewrite-recipe-writer

# Or symlink for development
ln -s "$(pwd)/openrewrite-recipe-writer" ~/.claude/skills/openrewrite-recipe-writer
```

### For Claude.ai (Web Interface)

```bash
cd openrewrite-recipe-writer
zip -r openrewrite-recipe-writer.zip SKILL.md .gitignore assets/ references/ scripts/
```

Then upload to [claude.ai](https://claude.ai) → Settings → Capabilities → Skills

### For Claude API

```bash
cd openrewrite-recipe-writer

# Set up your API key
echo "your-anthropic-api-key" > anthropic.key

# Upload or update the skill
./scripts/upload-skill.sh
```

The script automatically creates the skill on first run and updates it on subsequent runs.

## What This Skill Provides

Expert guidance for:
- Choosing the right recipe type (Declarative/Refaster/Imperative)
- Structuring recipe code with proper patterns
- Writing effective LST visitors
- Using JavaTemplate for code generation
- Testing recipes with RewriteTest
- Following OpenRewrite best practices

## Usage

Once uploaded, Claude will automatically use this skill when you ask questions about writing OpenRewrite recipes. Example queries:

- "Help me write a recipe to migrate from JUnit 4 to JUnit 5"
- "How do I use JavaTemplate to add a method?"
- "What's the difference between declarative and imperative recipes?"

## Contributing

To improve this plugin/skill:
1. Update SKILL.md or bundled resources (assets/, references/, scripts/)
2. For Claude Code plugin: Changes in local clone are reflected immediately
3. For Claude.ai: Re-package and upload the zip file
4. Commit and push changes to distribute via GitHub

## License

Apache License 2.0 - See parent repository for full license text.

Copyright 2025 Moderne, Inc.
