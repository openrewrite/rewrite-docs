---
name: openrewrite-recipe-writer
description: Expert guidance for writing OpenRewrite recipes - automated refactoring operations for source code. Helps choose recipe types, structure code, write tests, and follow best practices.
---

# OpenRewrite Recipe Writing Skill

## Overview

OpenRewrite recipes are automated refactoring operations that modify Lossless Semantic Trees (LSTs) representing source code. This skill guides you through creating recipes efficiently and correctly.

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

### Refaster Template Recipes
**Use when:** Simple expression/statement replacements
**Advantages:** Faster than imperative, type-aware
**Example use case:** Replace `StringUtils.equals()` with `Objects.equals()`

### Imperative Java Recipes
**Use when:** Complex logic, conditional transformations, custom analysis
**Advantages:** Full control, complex transformations
**Example use case:** Add modifiers only to variables that aren't reassigned

**Decision Rule:** If it can be declarative, make it declarative. Use imperative only when necessary.

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
- All recipes must be serializable.
- Options define configurable parameters
- `getVisitor()` returns a NEW instance each time (no caching)

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
- Use `JavaIsoVisitor` when returning same type (most common)
- Use `JavaVisitor` only when changing LST types
- Usually call `super.visitX()` to traverse subtree. Only when the state of the recipe is such that you know there could be no further edits below the current LST element should you omit the `super` call.
- Return unchanged LST if no change needed (referential equality check)
- LSTs are immutable. Use `.withX()` methods.

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
- Context-free templates (default) are faster
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

**Benefits:** Recipes only run on relevant files

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
- Be aware that the test harness runs multiple cycles - ensures idempotence
- Always add `//language=XXX` comments to the highest level statement whose string arguments entirely consist of code snippets of that same language. This helps the IDE syntax highlight the test code.

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

This skill includes several supporting files:

- **Templates:**
  - `template-imperative-recipe.java` - Boilerplate for imperative recipes
  - `template-declarative-recipe.yml` - YAML recipe template
  - `template-recipe-test.java` - Test class template

- **Examples:**
  - `example-say-hello-recipe.java` - Complete working recipe
  - `example-scanning-recipe.java` - Advanced ScanningRecipe pattern
  - `example-declarative-migration.yml` - Real-world YAML examples

- **Checklist:**
  - `checklist-recipe-development.md` - Comprehensive verification checklist

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

**Ask me for help with:**
- Choosing the right recipe type
- Structuring your recipe class
- Writing visitor logic
- Using JavaTemplate
- Writing tests
- Debugging common issues
- Understanding LST structure
