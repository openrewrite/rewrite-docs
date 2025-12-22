---
description: How to install and use the OpenRewrite Recipe Writer Claude Skill for expert guidance on writing OpenRewrite recipes.
---

# Claude Skill for Recipe Writing

The OpenRewrite Recipe Writer is a Claude Skill that provides expert guidance for writing OpenRewrite recipes. When installed in your Claude account, it automatically activates when you ask questions about recipe development, offering step-by-step instructions, code templates, and best practices.

## What is a Claude Skill?

Claude Skills are modular capabilities that extend Claude's functionality. They package instructions, metadata, and resources that Claude uses automatically when relevant to your conversation. The OpenRewrite Recipe Writer skill includes:

- Recipe type selection guidance (Declarative vs Refaster vs Imperative)
- Step-by-step recipe development workflows
- Code templates for recipes, visitors, and tests
- Complete working examples
- JavaTemplate usage patterns
- Testing strategies with RewriteTest
- Best practices and conventions
- A comprehensive development checklist

## Prerequisites

- **Claude API account** with an API key ([Get one here](https://console.anthropic.com/))
- **Git** (to clone the OpenRewrite documentation repository)
- **curl** and **jq** (command-line tools, usually pre-installed on macOS/Linux)

## Installation

There are two ways to install this skill, depending on where you want to use it:

### Option 1: Install for Claude.ai (Web Interface)

This is the recommended approach for most users.

#### Step 1: Clone the Repository

```bash
git clone https://github.com/openrewrite/rewrite-docs.git
cd rewrite-docs/claude-skill
```

#### Step 2: Create a ZIP File

Create a ZIP file containing all the skill files (do **not** include the parent directory):

```bash
# On macOS/Linux
zip -r openrewrite-recipe-writer.zip SKILL.md *.java *.yml *.md -x README.md

# Or manually: Select all files (not the folder), right-click, and compress
```

**Important**: The ZIP must contain the files at the root level, not in a subdirectory. When you open the ZIP, you should immediately see `SKILL.md`, not a folder.

#### Step 3: Upload to Claude.ai

1. Go to [https://claude.ai](https://claude.ai)
2. Sign in to your account
3. Navigate to **Settings** (gear icon in bottom left)
4. Go to **Capabilities** → **Skills**
5. Click **Upload Skill** (or similar button)
6. Select your `openrewrite-recipe-writer.zip` file
7. Wait for the upload to complete

Once uploaded, the skill will appear in your skills list and automatically activate when you ask questions about OpenRewrite recipe development.

### Option 2: Install via API (For Programmatic Use)

Use this approach if you're building applications that use the Claude API.

#### Step 1: Clone the Repository

```bash
git clone https://github.com/openrewrite/rewrite-docs.git
cd rewrite-docs/claude-skill
```

#### Step 2: Set Up Your API Key

Create a file to store your Anthropic API key (this file is already in `.gitignore` and won't be committed):

```bash
echo "your-anthropic-api-key-here" > anthropic.key
```

Alternatively, you can export it as an environment variable:

```bash
export ANTHROPIC_API_KEY="your-anthropic-api-key-here"
```

#### Step 3: Upload the Skill

Run the upload script to create the skill in your API workspace:

```bash
./upload-skill.sh
```

You should see output like:

```
Loading API key from anthropic.key file...
No existing skill ID found.
Creating new OpenRewrite Recipe Writing skill...

✓ Success! Skill created successfully.

Response:
{
  "type": "skill",
  "id": "skill_xxxxxxxxxxxxx",
  "created_at": "2025-10-17T...",
  "updated_at": "2025-10-17T...",
  "display_title": "OpenRewrite Recipe Writing",
  "source": "custom",
  "latest_version": "..."
}

Skill ID saved to skill-id.txt for future updates.
```

The script automatically saves your skill ID to `skill-id.txt` so future runs will update the existing skill instead of creating duplicates.

**Note**: Skills uploaded via the API are **not** available on claude.ai. You must upload separately to each platform where you want to use the skill.

## Using the Skill

### With Claude.ai

If you uploaded the skill via the web interface (Option 1 above):

1. Go to [https://claude.ai](https://claude.ai)
2. Start a new conversation
3. Ask questions about OpenRewrite recipe development

The skill will automatically activate when your questions are relevant to recipe writing. You can verify it's working if responses include detailed OpenRewrite-specific guidance with code templates and best practices.

### With Claude API

If you uploaded the skill via the API (Option 2 above), the skill automatically activates when you ask questions related to OpenRewrite recipe development:

```python
import anthropic

client = anthropic.Anthropic(api_key="your-api-key")

response = client.messages.create(
    model="claude-sonnet-4-5-20250929",
    max_tokens=4096,
    messages=[{
        "role": "user",
        "content": "How do I write an OpenRewrite recipe to rename a Java method?"
    }]
)

print(response.content[0].text)
```

**Important**: Skills are **not shared** between platforms. A skill uploaded via the API is only available in API calls. A skill uploaded to claude.ai is only available on the web interface. You must upload separately to each platform where you want to use it.

## Example Questions

Here are some questions that will activate the skill:

**Recipe Type Selection:**
- "What type of recipe should I use to replace one method call with another?"
- "Should I use a declarative or imperative recipe for this migration?"

**Getting Started:**
- "Show me a template for an imperative recipe"
- "How do I structure a recipe test?"
- "Give me an example of a simple recipe"

**Specific Techniques:**
- "How do I use JavaTemplate to add a method to a class?"
- "How do I write a ScanningRecipe that analyzes multiple files?"
- "What are preconditions and when should I use them?"

**Best Practices:**
- "What does 'do no harm' mean for recipes?"
- "How do I ensure my recipe is idempotent?"
- "How should I test that my recipe doesn't make unnecessary changes?"

## Updating the Skill

### Updating on Claude.ai

When the skill is updated (new examples, improved templates, etc.):

1. Pull the latest changes:
   ```bash
   cd rewrite-docs/claude-skill
   git pull origin master
   ```

2. Create a new ZIP file:
   ```bash
   zip -r openrewrite-recipe-writer.zip SKILL.md *.java *.yml *.md -x README.md
   ```

3. Go to claude.ai → Settings → Capabilities → Skills
4. Remove the old version of the skill
5. Upload the new ZIP file

### Updating via API

When the skill is updated, you can update your API-installed version:

```bash
cd rewrite-docs/claude-skill
git pull origin master
./upload-skill.sh
```

The script will detect the existing `skill-id.txt` file and update your skill instead of creating a new one.

## What's Included

The skill includes the following resources:

### Templates
- **Imperative Recipe Template** - Boilerplate for Java-based recipes with annotations, visitor patterns, and helper methods
- **Declarative YAML Template** - Structure for composing existing recipes with configuration
- **Recipe Test Template** - Complete test class with multiple testing patterns

### Examples
- **SayHello Recipe** - Complete working example that adds a method to a class
- **ScanningRecipe Example** - Advanced pattern showing multi-file analysis with accumulator
- **Declarative Migration Examples** - Real-world YAML recipes for framework migrations, security fixes, and code quality improvements

### Documentation
- **Development Checklist** - 200+ verification items covering planning, implementation, testing, and distribution

## Skill Capabilities

When you ask recipe-related questions, the skill provides:

- **Contextual Guidance** - Recommendations based on your specific use case
- **Code Generation** - Templates and examples customized to your needs
- **Best Practices** - Conventions for naming, testing, and structuring recipes
- **Troubleshooting** - Help with common issues and pitfalls
- **Decision Support** - Choosing between declarative, Refaster, and imperative approaches

## Progressive Disclosure

The skill uses Claude's progressive disclosure model to be efficient with context:

1. **Metadata** (~100 tokens) - Always loaded, helps Claude know when to activate the skill
2. **Instructions** (~4.5k tokens) - Loaded when the skill is activated
3. **Resources** - Individual files loaded only when needed for specific questions

This means you get comprehensive guidance without consuming your entire context window.

## Troubleshooting

### Skill Not Activating

If the skill doesn't seem to activate:
- Make sure you're signed in to the same Claude account where you uploaded the skill
- Try asking more specific questions about OpenRewrite recipe development
- The skill name is "openrewrite-recipe-writer" - it activates based on conversation context

### Upload Fails

If the upload script fails:
- Verify your API key is correct: `cat anthropic.key`
- Check that all skill files are present: `ls *.md *.java *.yml`
- Ensure you have network connectivity
- Check that `jq` is installed: `jq --version`

### Updating Issues

If updates fail:
- Verify `skill-id.txt` exists and contains a valid skill ID
- Try deleting `skill-id.txt` and running the script again (creates a new skill)
- Check the API response for specific error messages

## Technical Details

### Skill Metadata

- **Name**: `openrewrite-recipe-writer` (lowercase, hyphens only)
- **Display Title**: OpenRewrite Recipe Writing
- **Type**: Custom skill
- **Files**: 9 total (1 SKILL.md + 3 templates + 3 examples + 1 checklist + 1 README)
- **Size**: ~85KB total

### API Requirements

- **API Version**: 2023-06-01
- **Beta Header**: skills-2025-10-02
- **File Format**: Multipart form data with directory prefix
- **Directory Name**: Must match skill name (`openrewrite-recipe-writer`)

## Privacy and Security

- Your API key is stored locally in `anthropic.key` (gitignored)
- Your skill ID is stored locally in `skill-id.txt` (gitignored)
- Skills are private to your account - others cannot see or use your installed skills
- No recipe code you discuss with Claude is shared or stored by the skill

## Source Code and License

The OpenRewrite Recipe Writer skill is open source:

- **Repository**: [openrewrite/rewrite-docs](https://github.com/openrewrite/rewrite-docs)
- **Location**: `/claude-skill` directory
- **License**: Apache 2.0

You can view the source code, contribute improvements, or customize it for your organization's needs.

## Contributing

To improve the skill:

1. Fork the [rewrite-docs repository](https://github.com/openrewrite/rewrite-docs)
2. Make changes to files in the `claude-skill/` directory
3. Test your changes by uploading to your account
4. Submit a pull request

Improvements we welcome:
- New recipe examples
- Additional templates
- Updated best practices
- Bug fixes in existing templates
- Better explanations and documentation

## Support

For help with the skill or recipe development:

- **OpenRewrite Documentation**: [https://docs.openrewrite.org](https://docs.openrewrite.org)
- **OpenRewrite Slack**: [Join here](https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA)
- **OpenRewrite Discord**: [https://discord.gg/xk3ZKrhWAb](https://discord.gg/xk3ZKrhWAb)
- **Claude Skills Documentation**: [https://docs.claude.com/en/docs/agents-and-tools/agent-skills](https://docs.claude.com/en/docs/agents-and-tools/agent-skills)

## See Also

- [Recipe Development Environment](../authoring-recipes/recipe-development-environment.md)
- [Writing a Java Refactoring Recipe](../authoring-recipes/writing-a-java-refactoring-recipe.md)
- [Recipe Testing](../authoring-recipes/recipe-testing.md)
- [Recipe Conventions and Best Practices](../authoring-recipes/recipe-conventions-and-best-practices.md)
- [Declarative YAML Format Reference](./yaml-format-reference.md)
