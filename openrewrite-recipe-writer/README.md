# OpenRewrite Recipe Writer

A Claude Code plugin that provides expert guidance for writing OpenRewrite recipes - automated refactoring operations for source code.

## Directory Structure

```
openrewrite-recipe-writer/        # Plugin directory
├── .claude-plugin/
│   └── plugin.json               # Plugin manifest
├── commands/                     # Slash commands
│   └── create-recipe.md          # /openrewrite-recipe:create-recipe command
├── README.md                     # This file
├── .gitignore                    # Git configuration
└── skills/                       # Plugin skills
    └── writing-openrewrite-recipes/
        ├── SKILL.md              # Main skill instructions
        ├── assets/               # Templates used in output
        │   ├── template-imperative-recipe.java
        │   ├── template-declarative-recipe.yml
        │   └── template-recipe-test.java
        ├── references/           # Documentation loaded as needed
        │   ├── example-say-hello-recipe.java
        │   ├── example-scanning-recipe.java
        │   ├── example-declarative-migration.yml
        │   ├── checklist-recipe-development.md
        │   ├── recipes-top.csv   # 50 commonly used recipes
        │   ├── recipes-*.csv     # Curated recipe catalogs by category
        │   └── recipes-all.csv   # Complete recipe catalog (4,958 recipes - for maintenance only)
        └── scripts/              # Executable scripts
            ├── upload-skill.sh   # Upload skill via Claude API
            ├── categorize_recipes.py     # Generate category files from recipes-all.csv
            └── create_curated_lists.py   # Create curated -common.csv files
```

## Recipe Catalogs

The skill includes curated CSV files containing OpenRewrite recipes that Claude can reference when helping build declarative YAML recipes:

### Available Catalogs
- `recipes-top.csv` - 50 commonly used recipes (best starting point)
- `recipes-java-basic.csv` - 32 basic Java refactoring operations
- `recipes-spring-boot-common.csv` - 60 Spring Boot migrations and best practices
- `recipes-framework-migrations-common.csv` - 16 major framework migrations (10 diverse frameworks)
- `recipes-testing-common.csv` - 60 most useful testing recipes
- `recipes-dependencies-common.csv` - 49 dependency operations (Maven+Gradle when possible)
- `recipes-security-common.csv` - 30 security vulnerability recipes
- `recipes-xml-yaml-json-common.csv` - 50 configuration file operations
- `recipes-static-analysis-common.csv` - 50 code analysis recipes
- `recipes-logging-common.csv` - 50 logging framework operations
- `recipes-file-operations.csv` - 14 file manipulation recipes

### Maintaining Recipe Catalogs

The `recipes-all.csv` file (1.6MB, 4,958 recipes) is the source data but too large for Claude to read directly. To update the curated catalogs:

```bash
# 1. Update recipes-all.csv with new recipe data

# 2. Regenerate all category files
python3 scripts/categorize_recipes.py

# 3. Regenerate curated -common.csv files
python3 scripts/create_curated_lists.py
```

The scripts automatically select the most useful recipes for each category based on naming patterns and common use cases.

## Installation

> **Note**: This plugin contains a skill (`writing-openrewrite-recipes`) and a slash command (`/openrewrite-recipe:create-recipe`). Plugins can also include agents, hooks, and MCP servers, but this plugin doesn't use those features yet.

### For Claude Code (Plugin - Recommended)

**From GitHub:**

```bash
# Add the OpenRewrite marketplace
/plugin marketplace add openrewrite/rewrite-docs

# Install the plugin (note: plugin name is "openrewrite-recipe", not the directory name)
/plugin install openrewrite-recipe@openrewrite
```

**From a local clone (for development):**

```bash
# 1. Navigate to the repo root
cd ~/Documents/GitHub/openrewrite/rewrite-docs

# 2. Add the local marketplace (uses existing .claude-plugin/marketplace.json)
/plugin marketplace add ~/Documents/GitHub/openrewrite/rewrite-docs

# 3. Install the plugin using the marketplace name from marketplace.json
/plugin install openrewrite-recipe@openrewrite

# 4. Restart Claude Code if needed
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
cp -r openrewrite-recipe-writer/skills/writing-openrewrite-recipes ~/.claude/skills/writing-openrewrite-recipes

# Or symlink for development
ln -s "$(pwd)/openrewrite-recipe-writer/skills/writing-openrewrite-recipes" ~/.claude/skills/writing-openrewrite-recipes
```

### For Claude.ai (Web Interface)

```bash
cd openrewrite-recipe-writer/skills/writing-openrewrite-recipes
zip -r openrewrite-recipe-writer.zip SKILL.md assets/ references/ scripts/
```

Then upload to [claude.ai](https://claude.ai) → Settings → Capabilities → Skills

### For Claude API

```bash
cd openrewrite-recipe-writer/skills/writing-openrewrite-recipes

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
1. Update skill files in `skills/writing-openrewrite-recipes/` (SKILL.md, assets/, references/, scripts/) or commands in `commands/`
2. For Claude Code plugin: Changes in local clone are reflected immediately after reloading
3. For Claude.ai: Re-package and upload the zip file from the skill directory
4. Commit and push changes to distribute via GitHub

## License

Apache License 2.0 - See parent repository for full license text.

Copyright 2025 Moderne, Inc.
