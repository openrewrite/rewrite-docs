---
name: writing-openrewrite-recipes
description: Use when creating/writing/building OpenRewrite recipes, working with .java recipe files, RewriteTest files, recipe YAML files, LST visitors, JavaTemplate, visitor patterns, or when discussing recipe types (declarative YAML, Refaster templates, imperative Java recipes) - guides creation of OpenRewrite recipes for automated code transformations, AST manipulation, custom refactoring rules, and code migration.
allowed-tools: Read, Write, Edit, Bash, Grep, Glob
---

# OpenRewrite Recipe Writing Skill

## Overview

OpenRewrite recipes are automated refactoring operations that modify Lossless Semantic Trees (LSTs) representing source code. This skill guides through creating recipes efficiently and correctly.

## When NOT to Use This Skill

Do NOT use this skill for:
- General Java programming questions unrelated to OpenRewrite
- Questions about running existing OpenRewrite recipes (use OpenRewrite documentation)
- Build tool configuration unrelated to recipe development
- General refactoring advice without OpenRewrite context

## Quick Start Decision Tree

To determine the best approach quickly:

1. Can the transformation be expressed by composing existing recipes?
   → **Use Declarative YAML** (see Declarative YAML Recipes section below)

2. Is it a simple expression/statement replacement pattern?
   → **Use Refaster Template** (see Refaster Template Recipes section below)

3. Requires complex logic, conditional transformations, or custom analysis?
   → **Use Imperative Java Recipe** (see Imperative Recipe Development Workflow below)

For imperative recipes, proceed to "Imperative Recipe Development Workflow" below.

## Recipe Type Selection

Choose the appropriate recipe type based on your needs:

### Declarative YAML Recipes (Preferred)

**Use when:** Composing existing recipes with configuration

**Advantages:** No code, simple, maintainable

**Example use case:** Combining framework migration steps

```yaml
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MyMigration
displayName: Migrate to Framework X
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: old.Type
      newFullyQualifiedTypeName: new.Type
  - com.yourorg.OtherRecipe
```

**Finding Recipes to Use:**
When building declarative YAML recipes, consult the recipe catalog CSV files in the `references/` directory:

- `references/recipes-top.csv` - 50 commonly used recipes across all categories (best starting point)
- `references/recipes-java-basic.csv` - 32 basic Java refactoring operations
- `references/recipes-spring-boot-common.csv` - 60 Spring Boot migrations and best practices
- `references/recipes-framework-migrations-common.csv` - 16 major framework migrations (diverse frameworks)
- `references/recipes-testing-common.csv` - 60 most useful testing recipes (JUnit, Mockito, AssertJ)
- `references/recipes-dependencies-common.csv` - 49 dependency operations (Maven+Gradle when possible)
- `references/recipes-security-common.csv` - 30 security vulnerability detection and fixes
- `references/recipes-xml-yaml-json-common.csv` - 50 configuration file operations
- `references/recipes-static-analysis-common.csv` - 50 code analysis and search recipes
- `references/recipes-logging-common.csv` - 50 logging framework operations
- `references/recipes-file-operations.csv` - 14 file and text manipulation operations

**Usage Pattern:** Start with `recipes-top.csv`, then consult the specific category file based on what the user needs. These curated lists contain the most practical and commonly used recipes for each category.

### Refaster Template Recipes

**Use when:** Simple expression/statement replacements

**Advantages:** Faster than imperative, type-aware

**Example use case:** Replace `StringUtils.equals()` with `Objects.equals()`

### Imperative Java Recipes

**Use when:** Complex logic, conditional transformations, custom analysis

**Advantages:** Full control, complex transformations

**Example use case:** Add modifiers only to variables that aren't reassigned

**Decision Rule:** If it can be declarative, make it declarative. Use imperative only when necessary.

## Examples Quick Reference

Navigate to the right example based on your needs:

- **New to recipes?** Start with `references/example-say-hello-recipe.java`
- **Need multi-file analysis?** See `references/example-scanning-recipe.java`
- **Composing recipes?** Check `references/example-declarative-migration.yml`

## Imperative Recipe Development Workflow

### 1. Set Up Recipe Class

```java
@Value
@EqualsAndHashCode(callSuper = false)
public class YourRecipe extends Recipe {

    @Option(displayName = "Display Name",
            description = "Clear description.",
            example = "com.example.Type")
    String parameterName;

    @Override
    public String getDisplayName() {
        return "Your recipe name";
    }

    @Override
    public String getDescription() {
        return "What this recipe does.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new YourVisitor();
    }
}
```

**Key Points:**

- Use `@Value` and `@EqualsAndHashCode(callSuper = false)` for immutability
- Ensure all recipes are serializable
- Define configurable parameters using `@Option` fields
- Return a NEW instance from `getVisitor()` each time (no caching)

### 2. Implement the Visitor

```java
public class YourVisitor extends JavaIsoVisitor<ExecutionContext> {

    @Override
    public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext ctx) {
        // ALWAYS call super to traverse the tree
        J.ClassDeclaration cd = super.visitClassDeclaration(classDecl, ctx);

        // Check if change is needed (do no harm)
        if (!shouldChange(cd)) {
            return cd;
        }

        // Make changes using JavaTemplate or LST methods
        cd = makeChanges(cd);

        return cd;
    }
}
```

**Visitor Guidelines:**

- Use `JavaIsoVisitor` when returning the same type (most common)
- Use `JavaVisitor` only when changing LST types
- Call `super.visitX()` to traverse subtree in most cases. Omit the `super` call only when certain there could be no further edits below the current LST element
- Return unchanged LST if no change needed (referential equality check)
- Treat LSTs as immutable. Use `.withX()` methods for modifications

### 3. Use JavaTemplate for Complex Changes

```java
private final JavaTemplate template = JavaTemplate
    .builder("public String hello() { return \"Hello from #{}!\"; }")
    .build();

// In visitor method:
classDecl = template.apply(
    new Cursor(getCursor(), classDecl.getBody()),
    classDecl.getBody().getCoordinates().lastStatement(),
    fullyQualifiedClassName
);
```

**Template Tips:**

- Use `#{}` for string parameters
- Use `#{any(Type)}` for typed LST elements
- Declare imports: `.imports("java.util.List")`
- Add classpath: `.javaParser(JavaParser.fromJavaVersion().classpath("library-name"))`
- Prefer context-free templates (default) as they are faster
- Use `.contextSensitive()` only when referencing local scope

### 4. Add Preconditions (Performance)

```java
@Override
public TreeVisitor<?, ExecutionContext> getVisitor() {
    return Preconditions.check(
        Preconditions.and(
            new UsesType<>("com.example.Type", true),
            new UsesJavaVersion<>(17)
        ),
        new YourVisitor()
    );
}
```

**Benefits:** Limits recipe execution to relevant files only, improving performance

## Testing Recipes

### Test Structure

```java
class YourRecipeTest implements RewriteTest {

    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new YourRecipe("parameter-value"));
    }

    @Test
    void makesExpectedChange() {
        rewriteRun(
            //language=java
            java(
                // Before
                """
                  package com.example;
                  class Before { }
                  """,
                // After
                """
                  package com.example;
                  class After { }
                  """
            )
        );
    }

    @Test
    void doesNotChangeWhenNotNeeded() {
        rewriteRun(
            //language=java
            java(
                """
                  package com.example;
                  class AlreadyCorrect { }
                  """
                // No second argument = no change expected
            )
        );
    }
}
```

Notice how in Java template strings, the end `"""` delimiter is one indent to the right of the open delimiter. Java trims everything to the left of that same column.

**Testing Best Practices:**

- Test both changes AND no-changes cases
- Test edge cases
- Note that the test harness runs multiple cycles to ensure idempotence
- Add `//language=XXX` comments to the highest level statement whose string arguments entirely consist of code snippets of that same language. This helps the IDE syntax highlight the test code

## ScanningRecipe Pattern

Use when you need to:

- See all files before making changes
- Generate new files based on analysis
- Share data across multiple files

```java
@Value
@EqualsAndHashCode(callSuper = false)
public class YourScanningRecipe extends ScanningRecipe<YourAccumulator> {

    public static class YourAccumulator {
        Map<JavaProject, Boolean> projectData = new HashMap<>();
    }

    @Override
    public YourAccumulator getInitialValue(ExecutionContext ctx) {
        return new YourAccumulator();
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getScanner(YourAccumulator acc) {
        return new JavaIsoVisitor<>() {
            @Override
            public J.CompilationUnit visitCompilationUnit(J.CompilationUnit cu, ExecutionContext ctx) {
                // Collect data into accumulator
                return cu;
            }
        };
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor(YourAccumulator acc) {
        return new JavaIsoVisitor<>() {
            @Override
            public J.CompilationUnit visitCompilationUnit(J.CompilationUnit cu, ExecutionContext ctx) {
                // Use data from accumulator to make changes
                return cu;
            }
        };
    }
}
```

## Critical Best Practices

### Do No Harm

- If unsure whether a change is safe, DON'T make it
- Make minimal, least invasive changes
- Respect existing formatting

### Immutability & Idempotence

- Recipes must be immutable (no mutable state)
- Same input → same output, always
- Use `@Value` and `@EqualsAndHashCode(callSuper = false)`
- `getVisitor()` must return NEW instance

### Never Mutate LSTs

```java
// WRONG
method.getArguments().remove(0);

// CORRECT
method.withArguments(ListUtils.map(method.getArguments(), (i, arg) ->
    i == 0 ? null : arg
));
```

### Naming Conventions

- Display names: Sentence case, code in backticks, end with period
- Example: "Change type from `OldType` to `NewType`."
- Recipe names: `com.yourorg.VerbNoun` (e.g., `com.yourorg.ChangePackage`)

### State Management

- Within visitor: Use Cursor messaging (`getCursor().putMessage()`)
- Between visitors: Use ScanningRecipe accumulator
- Never use ExecutionContext for visitor state

### Multi-Module Projects

- Track per-project data: `Map<JavaProject, T>`
- Don't assume single project per repository

## Common Patterns

### Adding Imports

```java
maybeAddImport("java.util.List");
maybeAddImport("java.util.Collections", "emptyList");
```

### Removing Imports

```java
maybeRemoveImport("old.package.Type");
```

### Chaining Visitors

```java
doAfterVisit(new OtherRecipe().getVisitor());
```

### Checking Types

```java
if (methodInvocation.getType() != null &&
    TypeUtils.isOfClassType(methodInvocation.getType(), "com.example.Type")) {
    // ...
}
```

## Resources

This skill includes several supporting files organized by purpose:

- **Templates** (`assets/`) - Files used as starting points for recipe development:

  - `assets/template-imperative-recipe.java` - Boilerplate for imperative recipes
  - `assets/template-declarative-recipe.yml` - YAML recipe template
  - `assets/template-recipe-test.java` - Test class template

  **Load when:** Creating a new recipe or needing a template to start from

- **Examples** (`references/`) - Reference documentation loaded as needed:

  - `references/example-say-hello-recipe.java` - Complete working recipe with test and YAML usage
  - `references/example-scanning-recipe.java` - Advanced ScanningRecipe pattern for multi-file analysis
  - `references/example-declarative-migration.yml` - Real-world YAML migration examples

  **Load when:** Needing to see a complete example, asking "show me an example", or understanding advanced patterns

- **Recipe Catalogs** (`references/`) - Curated lists for finding recipes when building declarative YAML recipes:
  - `references/recipes-top.csv` - 50 commonly used recipes (best starting point)
  - `references/recipes-java-basic.csv` - 32 basic Java refactoring operations
  - `references/recipes-spring-boot-common.csv` - 60 Spring Boot migrations and best practices
  - `references/recipes-framework-migrations-common.csv` - 16 major framework migrations (10 different frameworks)
  - `references/recipes-testing-common.csv` - 60 most useful testing recipes
  - `references/recipes-dependencies-common.csv` - 49 dependency operations (Maven+Gradle when possible)
  - `references/recipes-security-common.csv` - 30 security vulnerability recipes
  - `references/recipes-xml-yaml-json-common.csv` - 50 configuration file operations
  - `references/recipes-static-analysis-common.csv` - 50 code analysis recipes
  - `references/recipes-logging.csv` - 153 logging framework recipes
  - `references/recipes-file-operations.csv` - 14 file manipulation recipes
  - Note: `references/recipes-all.csv` exists for maintenance/script purposes but is too large (4,958 recipes) to be used directly

  **Load when:** Looking for existing recipes
  
- **Checklist** (`references/`) - Verification guide:

  - `references/checklist-recipe-development.md` - Comprehensive verification checklist covering planning, implementation, testing, and distribution

  **Load when:** Reviewing a recipe for completeness, ensuring best practices, or preparing for distribution

- **Scripts** (`scripts/`) - Utility scripts:

  - `scripts/upload-skill.sh` - Script to upload/update the skill via API

  **Load when:** Managing the skill itself (meta-operation)

## Quick Reference

**Key Classes:**

- `Recipe` - Base class for all recipes
- `JavaIsoVisitor<ExecutionContext>` - Most common visitor
- `JavaTemplate` - For generating code snippets
- `RewriteTest` - Testing interface
- `ScanningRecipe<T>` - Multi-file analysis

**Key Methods:**

- `getVisitor()` - Returns visitor instance
- `super.visitX()` - Traverse subtree
- `.withX()` - Create modified LST copy
- `ListUtils.map()` - Transform lists without mutation
- `doAfterVisit()` - Chain additional visitors

**Use this skill for help with:**

- Choosing the right recipe type
- Structuring recipe classes
- Writing visitor logic
- Using JavaTemplate
- Writing tests
- Debugging common issues
- Understanding LST structure
