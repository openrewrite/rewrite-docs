#!/bin/bash

# OpenRewrite Recipe Writing Skill - Upload Script
# This script creates or updates the skill in Claude's Skills API
#
# Usage:
#   Option 1: Use anthropic.key file (recommended)
#     echo "your-api-key" > anthropic.key
#     ./upload-skill.sh
#
#   Option 2: Export environment variable
#     export ANTHROPIC_API_KEY="your-api-key-here"
#     ./upload-skill.sh

set -e  # Exit on error

# Change to script directory
cd "$(dirname "$0")"

# Try to load API key from anthropic.key file if it exists and ANTHROPIC_API_KEY is not set
if [ -z "$ANTHROPIC_API_KEY" ] && [ -f "anthropic.key" ]; then
    echo "Loading API key from anthropic.key file..."
    ANTHROPIC_API_KEY=$(cat anthropic.key | tr -d '[:space:]')
fi

# Check if API key is set
if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo "Error: ANTHROPIC_API_KEY not found"
    echo ""
    echo "Usage (option 1 - recommended):"
    echo "  echo 'your-api-key' > anthropic.key"
    echo "  ./upload-skill.sh"
    echo ""
    echo "Usage (option 2):"
    echo "  export ANTHROPIC_API_KEY='your-api-key-here'"
    echo "  ./upload-skill.sh"
    exit 1
fi

# Check if skill ID file exists
SKILL_ID_FILE="skill-id.txt"
if [ -f "$SKILL_ID_FILE" ]; then
    SKILL_ID=$(cat "$SKILL_ID_FILE" | tr -d '[:space:]')
    ACTION="update"
    HTTP_METHOD="PATCH"
    echo "Found existing skill ID: $SKILL_ID"
    echo "Updating OpenRewrite Recipe Writing skill..."
else
    ACTION="create"
    HTTP_METHOD="POST"
    echo "No existing skill ID found."
    echo "Creating new OpenRewrite Recipe Writing skill..."
fi

echo ""

# Skill directory name (must match 'name' field in SKILL.md)
SKILL_DIR="openrewrite-recipe-writer"

# Build curl command based on action
if [ "$ACTION" = "create" ]; then
    # Create new skill
    response=$(curl -s -w "\n%{http_code}" https://api.anthropic.com/v1/skills \
      -X POST \
      -H "x-api-key: $ANTHROPIC_API_KEY" \
      -H "anthropic-version: 2023-06-01" \
      -H "anthropic-beta: skills-2025-10-02" \
      -F "display_title=OpenRewrite Recipe Writing" \
      -F "files[]=@SKILL.md;filename=$SKILL_DIR/SKILL.md" \
      -F "files[]=@template-imperative-recipe.java;filename=$SKILL_DIR/template-imperative-recipe.java" \
      -F "files[]=@template-declarative-recipe.yml;filename=$SKILL_DIR/template-declarative-recipe.yml" \
      -F "files[]=@template-recipe-test.java;filename=$SKILL_DIR/template-recipe-test.java" \
      -F "files[]=@example-say-hello-recipe.java;filename=$SKILL_DIR/example-say-hello-recipe.java" \
      -F "files[]=@example-scanning-recipe.java;filename=$SKILL_DIR/example-scanning-recipe.java" \
      -F "files[]=@example-declarative-migration.yml;filename=$SKILL_DIR/example-declarative-migration.yml" \
      -F "files[]=@checklist-recipe-development.md;filename=$SKILL_DIR/checklist-recipe-development.md")
else
    # Update existing skill
    response=$(curl -s -w "\n%{http_code}" https://api.anthropic.com/v1/skills/$SKILL_ID \
      -X PATCH \
      -H "x-api-key: $ANTHROPIC_API_KEY" \
      -H "anthropic-version: 2023-06-01" \
      -H "anthropic-beta: skills-2025-10-02" \
      -F "files[]=@SKILL.md;filename=$SKILL_DIR/SKILL.md" \
      -F "files[]=@template-imperative-recipe.java;filename=$SKILL_DIR/template-imperative-recipe.java" \
      -F "files[]=@template-declarative-recipe.yml;filename=$SKILL_DIR/template-declarative-recipe.yml" \
      -F "files[]=@template-recipe-test.java;filename=$SKILL_DIR/template-recipe-test.java" \
      -F "files[]=@example-say-hello-recipe.java;filename=$SKILL_DIR/example-say-hello-recipe.java" \
      -F "files[]=@example-scanning-recipe.java;filename=$SKILL_DIR/example-scanning-recipe.java" \
      -F "files[]=@example-declarative-migration.yml;filename=$SKILL_DIR/example-declarative-migration.yml" \
      -F "files[]=@checklist-recipe-development.md;filename=$SKILL_DIR/checklist-recipe-development.md")
fi

# Extract HTTP status code (last line)
http_code=$(echo "$response" | tail -n1)

# Extract response body (everything except last line)
body=$(echo "$response" | sed '$d')

# Check status code
if [ "$http_code" -eq 200 ]; then
    if [ "$ACTION" = "create" ]; then
        echo "✓ Success! Skill created successfully."
        echo ""
        echo "Response:"
        echo "$body" | jq '.' 2>/dev/null || echo "$body"
        echo ""

        # Extract and save skill ID
        new_skill_id=$(echo "$body" | jq -r '.id' 2>/dev/null)
        if [ -n "$new_skill_id" ] && [ "$new_skill_id" != "null" ]; then
            echo "$new_skill_id" > "$SKILL_ID_FILE"
            echo "Skill ID saved to $SKILL_ID_FILE for future updates."
            echo ""
            echo "Your skill is now available! Use it with:"
            echo "  - Claude API (automatically activates for OpenRewrite recipe questions)"
            echo "  - Claude.ai web interface"
        else
            echo "Warning: Could not extract skill ID from response."
            echo "You may need to save it manually from the response above."
        fi
    else
        echo "✓ Success! Skill updated successfully."
        echo ""
        echo "Response:"
        echo "$body" | jq '.' 2>/dev/null || echo "$body"
        echo ""
        echo "The skill has been updated to a new version."
    fi
else
    echo "✗ Error: $ACTION failed with status code $http_code"
    echo ""
    echo "Response:"
    echo "$body"
    exit 1
fi
