# OpenRewrite Recipe Writing Skill

A comprehensive Claude Skill for writing OpenRewrite recipes - automated refactoring operations for source code.

## What This Skill Provides

This skill helps you:
- **Choose the right recipe type** (Declarative, Refaster, or Imperative)
- **Structure your recipe code** with proper annotations and patterns
- **Write effective visitors** that traverse and modify LSTs
- **Use JavaTemplate** for complex code generation
- **Test recipes** thoroughly with RewriteTest
- **Follow best practices** like "do no harm" and immutability

## Skill Files

```
openrewrite-recipe-skill/
├── SKILL.md                                # Main skill instructions (~4.5k tokens)
├── README.md                               # This file
├── template-imperative-recipe.java         # Recipe class boilerplate
├── template-declarative-recipe.yml         # YAML recipe template
├── template-recipe-test.java               # Test class template
├── example-say-hello-recipe.java           # Complete simple recipe
├── example-scanning-recipe.java            # Advanced ScanningRecipe
├── example-declarative-migration.yml       # Real-world YAML examples
└── checklist-recipe-development.md         # Comprehensive checklist
```

## Quick Start

For detailed installation and usage instructions, see the [Claude Skill documentation](../docs/reference/claude-skill.md).

### For Claude.ai (Recommended)

```bash
# 1. Clone and navigate
git clone https://github.com/openrewrite/rewrite-docs.git
cd rewrite-docs/claude-skill

# 2. Create ZIP file
zip -r openrewrite-recipe-writer.zip SKILL.md *.java *.yml *.md -x README.md

# 3. Upload to claude.ai
# Go to Settings > Capabilities > Skills and upload the ZIP
```

### For Claude API

```bash
# 1. Navigate to this directory
cd claude-skill

# 2. Set up your API key
echo "your-anthropic-api-key" > anthropic.key

# 3. Upload the skill
./upload-skill.sh
```

The script automatically:
- Creates the skill in your API workspace (first run)
- Saves the skill ID to `skill-id.txt`
- Updates the existing skill on subsequent runs

**Note**: Skills uploaded via API are separate from claude.ai - you must upload to each platform where you want to use it.

### Prerequisites
- For claude.ai: Account at [claude.ai](https://claude.ai)
- For API: API key from [console.anthropic.com](https://console.anthropic.com/)
- Command-line tools: `zip`, `curl`, `jq`

## How the Upload Script Works

The `upload-skill.sh` script intelligently handles both creating and updating the skill:

**First Run (Create):**
1. Checks for `skill-id.txt` - not found
2. Makes a POST request to create a new skill
3. Extracts the skill ID from the response
4. Saves it to `skill-id.txt` for future use

**Subsequent Runs (Update):**
1. Checks for `skill-id.txt` - found
2. Reads the skill ID
3. Makes a PATCH request to update the existing skill
4. Shows the new version number

This means you only need one script for both operations!

## How to Use This Skill

### With Claude API

Once uploaded, the skill activates automatically when users ask recipe-related questions:

```python
import anthropic

client = anthropic.Anthropic()
response = client.messages.create(
    model="claude-sonnet-4-5-20250929",
    max_tokens=4096,
    messages=[{
        "role": "user",
        "content": "How do I write a recipe to rename a Java method?"
    }]
)
```

The skill will automatically load when relevant to the conversation.

### With Claude.ai

1. Upload this skill through the Claude.ai interface
2. Reference it in your conversations
3. Claude will use the skill's knowledge to guide you

### Example Questions to Ask

**Recipe type selection:**
```
I want to replace StringUtils.isEmpty() with Spring's StringUtils.hasText().
What type of recipe should I use?
```

**Get templates:**
```
Generate an imperative recipe template for changing method names.
```

**JavaTemplate help:**
```
How do I use JavaTemplate to add a method to a class?
```

**Testing guidance:**
```
Show me how to test a ScanningRecipe that analyzes multiple files.
```

## Key Features

### Progressive Disclosure Model

The skill uses Claude's progressive disclosure:
1. **Metadata** (always loaded): Skill name and description (~100 tokens)
2. **Instructions** (loaded when triggered): Full SKILL.md content (~4.5k tokens)
3. **Resources** (loaded as needed): Templates, examples, and checklist

This keeps context usage efficient while providing comprehensive guidance.

### Skill Content

#### SKILL.md - Main Instructions
- Recipe type selection guide (Declarative vs Refaster vs Imperative)
- Step-by-step workflows for each recipe type
- Code examples for common patterns
- JavaTemplate usage with typed/untyped substitution
- Testing strategies with RewriteTest
- Critical best practices (do no harm, immutability, etc.)
- ScanningRecipe pattern for multi-file analysis
- Quick reference for key classes and methods

#### Templates
- **Imperative recipe**: Fully annotated with TODO comments, helper methods, and multiple visit examples
- **Declarative YAML**: Comprehensive template with common recipe references
- **Test template**: Multiple test patterns including multi-file, callbacks, and custom specs

#### Examples
- **SayHello Recipe**: Complete working example from the official tutorial
- **ScanningRecipe**: Advanced pattern with accumulator and multi-phase execution
- **Declarative Examples**: Framework migration, security fixes, JUnit 5 migration, code quality

#### Checklist
200+ verification items covering:
- Planning and requirements
- Implementation details
- Testing coverage
- Code quality
- Distribution
- Common pitfalls

## Common Use Cases

This skill helps with:
- Framework migrations (Spring, JUnit, Hibernate, etc.)
- API deprecation fixes
- Package/class/method renaming
- Code modernization (Java version upgrades)
- Security vulnerability fixes
- Style and formatting improvements
- Dependency updates
- Custom refactoring operations

## Example Conversation Flow

```
User: I need to write a recipe that changes all ArrayList to List

Claude: Since you want to change one type to another, you should use a
declarative recipe with the ChangeType recipe. Here's how:

[Provides YAML example from template-declarative-recipe.yml]

User: What if I need to only change it in certain methods?

Claude: In that case, you'll need an imperative recipe with conditional
logic. Let me show you the structure:

[Provides code from template-imperative-recipe.java with customization]

User: Can you help me write the test for this?

Claude: Absolutely! Here's how to structure your test:

[Provides test template with specific examples]
```

## Updating the Skill

When skill files are updated (new examples, improved templates, etc.):

```bash
cd claude-skill
git pull origin master  # Get latest changes
./upload-skill.sh       # Upload the updates
```

The script detects the existing `skill-id.txt` and automatically updates your skill.

## Skill Metadata

- **Name**: OpenRewrite Recipe Writer
- **Description**: Expert guidance for writing OpenRewrite recipes - automated refactoring operations for source code. Helps choose recipe types, structure code, write tests, and follow best practices.
- **Type**: Custom
- **Version**: 1.0
- **Files**: 9 total (1 SKILL.md + 3 templates + 3 examples + 1 checklist + 1 README)

## Integration with OpenRewrite Documentation

This skill is built from the comprehensive OpenRewrite documentation. It synthesizes information from:
- Recipe authoring guides
- Visitor documentation
- JavaTemplate reference
- Testing guides
- Best practices
- Real-world examples

All documentation is available in the parent repository.

## Contributing

To improve this skill:
1. Update SKILL.md for new patterns or best practices
2. Add new template files for common recipe types
3. Include more example files for different use cases
4. Expand the checklist with new verification steps
5. Re-upload using the API

## Technical Details

### File Requirements
- All files must be in the same top-level directory
- Must include SKILL.md at the root
- Files uploaded via multipart/form-data
- Maximum skill size limits apply (check Claude documentation)

### YAML Frontmatter in SKILL.md
```yaml
---
name: OpenRewrite Recipe Writer
description: Expert guidance for writing OpenRewrite recipes...
---
```

This metadata is always loaded and helps Claude determine when to activate the skill.

## Support

For issues or questions:
- OpenRewrite documentation: https://docs.openrewrite.org
- OpenRewrite Slack: https://join.slack.com/t/rewriteoss/shared_invite/...
- OpenRewrite Discord: https://discord.gg/xk3ZKrhWAb
- Claude Skills documentation: https://docs.claude.com/en/docs/agents-and-tools/agent-skills

## License

This skill is part of the OpenRewrite documentation project and is licensed under the Apache License 2.0.

Copyright 2025 Moderne, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

---

**Ready to upload?** Run the cURL command above from this directory!
