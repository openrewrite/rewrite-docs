---
description: How to install and use the OpenRewrite Recipe Writer Claude AI Skill for expert guidance on writing OpenRewrite recipes.
---

# Claude AI Skill for Recipe Writing

The OpenRewrite Recipe Writer is a Claude AI Skill that provides expert guidance for writing OpenRewrite recipes. When installed in your Claude account, it automatically activates when you ask questions about recipe development, offering step-by-step instructions, code templates, and best practices.

## What is a Claude Skill?

Claude Skills are modular capabilities that extend Claude's functionality. They package instructions, metadata, and resources that Claude uses automatically when relevant to your conversation. The OpenRewrite Recipe Writer skill includes:

- Recipe type selection guidance (Declarative vs Refaster vs Imperative)
- Step-by-step recipe development workflows
- Code templates for recipes, visitors, and tests
- Complete working examples
- JavaTemplate usage patterns
- Testing strategies with `RewriteTest`
- Best practices and conventions
- A comprehensive development checklist

## Prerequisites

- **Claude API account** with an API key ([Get one here](https://console.anthropic.com/))
- **Git** (to clone the OpenRewrite documentation repository)
- **curl** and **jq** (command-line tools, usually pre-installed on macOS/Linux)

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/openrewrite/rewrite-docs.git
cd rewrite-docs/claude-skill
```

### Step 2: Set Up Your API Key

Create a file to store your Anthropic API key (this file is already in `.gitignore` and won't be committed if you wish to edit and propose improvements to the skill):

```bash
echo "your-anthropic-api-key-here" > anthropic.key
```

Alternatively, you can export it as an environment variable:

```bash
export ANTHROPIC_API_KEY="your-anthropic-api-key-here"
```

### Step 3: Upload the Skill

Run the upload script to create the skill in your Claude account:

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

Your skill is now available! Use it with:
  - Claude API (automatically activates for OpenRewrite recipe questions)
  - Claude.ai web interface
```

The script automatically saves your skill ID to `skill-id.txt` so future runs will update the existing skill instead of creating duplicates.

## Using the Skill

Once installed, the skill is available in two ways:

### Option 1: Claude API

The skill automatically activates when you ask questions related to OpenRewrite recipe development:

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

### Option 2: Claude.ai Web Interface

1. Go to [https://claude.ai](https://claude.ai)
2. Sign in with the same account you used to upload the skill
3. Start a new conversation
4. Ask questions about OpenRewrite recipe development

The skill will automatically load when your questions are relevant to recipe writing.

## Example Questions

Here are some questions that will activate the skill:

**Getting Started:**
- "Show me a template for an imperative recipe"
- "How do I structure a recipe test?"
- "Give me an example of a simple recipe"

**Specific Techniques:**
- "How do I use `JavaTemplate` to add a method to a class?"
- "How do I write a `ScanningRecipe` that analyzes multiple files?"
- "What are preconditions and when should I use them?"

**Best Practices:**
- "What does 'do no harm' mean for recipes?"
- "How do I ensure my recipe is idempotent?"
- "How should I test that my recipe doesn't make unnecessary changes?"

## Updating the Skill

As we improve the skill (adding new examples, updating best practices, etc.), you can update your installed version:

```bash
cd rewrite-docs/claude-skill
git pull origin master
./upload-skill.sh
```

The script will detect the existing `skill-id.txt` file and update your skill instead of creating a new one.

## Progressive Disclosure

The skill uses Claude's progressive disclosure model to be efficient with context:

1. **Metadata** (~100 tokens) - Always loaded, helps Claude know when to activate the skill
2. **Instructions** (~4.5k tokens) - Loaded when the skill is activated
3. **Resources** - Individual files loaded only when needed for specific questions

This means you get comprehensive guidance without consuming your entire context window.
