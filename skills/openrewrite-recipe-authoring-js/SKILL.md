---
name: openrewrite-recipe-authoring-js
description: This skill should be used when authoring OpenRewrite recipes in TypeScript for automated code transformations. Covers recipe structure, visitor patterns, pattern matching, templates, testing strategies, and troubleshooting.
---

# Authoring OpenRewrite Recipes in TypeScript

Guide for creating and testing OpenRewrite recipes in TypeScript.

## Skill Resources

This skill includes additional reference materials:
- **references/patterns-and-templates.md** - Comprehensive guide to pattern matching and template system
- **references/examples.md** - Complete recipe examples with detailed explanations
- **references/testing-recipes.md** - Advanced testing strategies with AST assertions and validation

Load these references as needed for detailed information on specific topics.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Recipe Structure](#recipe-structure)
3. [Visitor Pattern](#visitor-pattern)
4. [Pattern Matching & Templates](#pattern-matching--templates)
5. [Testing Recipes](#testing-recipes)
6. [Common Patterns](#common-patterns)
7. [Troubleshooting](#troubleshooting)
8. [Package Structure](#package-structure)

## Quick Start

### Recipe Development Workflow

Follow this checklist when creating a new recipe:

- [ ] Define recipe class extending `Recipe`
- [ ] Implement `name`, `displayName`, `description` properties
- [ ] Add `@Option` fields if recipe needs configuration
- [ ] Implement `editor()` method returning a visitor
- [ ] Create visitor extending `JavaScriptVisitor` or `JavaScriptIsoVisitor`
- [ ] Override visit methods for target AST nodes
- [ ] Use `produce()` from `immer` for immutable updates
- [ ] Write tests using `RecipeSpec` and `rewriteRun()`
- [ ] Verify tests pass with `./gradlew :rewrite-javascript:npm_test`
- [ ] Run license format with `./gradlew licenseFormat`

## Recipe Structure

### Basic Recipe Template

```typescript
import {ExecutionContext, Recipe, TreeVisitor} from "@openrewrite/rewrite";
import {J} from "@openrewrite/rewrite/java";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";
import {produce} from "immer";

export class MyRecipe extends Recipe {
    name = "org.openrewrite.javascript.category.MyRecipe";
    displayName = "My Recipe Display Name";
    description = "What this recipe does and why.";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        return new class extends JavaScriptVisitor<ExecutionContext> {
            // Override visit methods here
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Transform logic here
                return method;
            }
        }
    }
}
```

### Recipe with Options

```typescript
import {ExecutionContext, Option, Recipe, TreeVisitor} from "@openrewrite/rewrite";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";

export class ConfigurableRecipe extends Recipe {
    name = "org.openrewrite.javascript.category.ConfigurableRecipe";
    displayName = "Configurable Recipe";
    description = "Recipe with configuration options.";

    @Option({
        displayName: "Method name",
        description: "The method name to match",
        example: "oldMethod"
    })
    methodName!: string;

    @Option({
        displayName: "New method name",
        description: "The new method name",
        example: "newMethod"
    })
    newMethodName!: string;

    constructor(options?: { methodName?: string; newMethodName?: string }) {
        super(options);
        this.methodName ??= 'defaultOldMethod';
        this.newMethodName ??= 'defaultNewMethod';
    }

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        const methodName = this.methodName;  // Capture for closure
        const newMethodName = this.newMethodName;

        return new class extends JavaScriptVisitor<ExecutionContext> {
            // Use methodName and newMethodName in visitor
        }
    }
}
```

### Scanning Recipe (Two-Pass)

To collect information in a first pass before making changes, use `ScanningRecipe`:

```typescript
import {ExecutionContext, ScanningRecipe, TreeVisitor} from "@openrewrite/rewrite";
import {J} from "@openrewrite/rewrite/java";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";

export class MyScanningRecipe extends ScanningRecipe<Set<string>, ExecutionContext> {
    name = "org.openrewrite.javascript.category.MyScanningRecipe";
    displayName = "My Scanning Recipe";
    description = "Recipe that scans before transforming.";

    // First pass: collect information
    async scanner(): Promise<TreeVisitor<any, ExecutionContext>> {
        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitIdentifier(
                ident: J.Identifier,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Collect identifier names
                this.accumulate(ident.name);
                return ident;
            }
        }
    }

    // Second pass: transform using collected data
    async editor(acc: Set<string>): Promise<TreeVisitor<any, ExecutionContext>> {
        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Use accumulated data: acc.has(...)
                return method;
            }
        }
    }
}
```

## Visitor Pattern

### JavaScriptVisitor Base Class

The visitor pattern is the core mechanism for traversing and transforming ASTs.

**Key Methods to Override:**

- `visitJsCompilationUnit()` - Visit the root JavaScript/TypeScript file
- `visitMethodInvocation()` - Visit method calls like `foo()`
- `visitMethodDeclaration()` - Visit function/method declarations
- `visitIdentifier()` - Visit identifiers like `foo`
- `visitLiteral()` - Visit literals like `42`, `"string"`, `true`
- `visitBinary()` - Visit binary operations like `a + b`
- `visitVariableDeclarations()` - Visit variable declarations (`let`, `const`, `var`)
- `visitArrowFunction()` - Visit arrow functions `() => {}`
- `visitClassDeclaration()` - Visit class declarations

**Critical Rules:**

1. **Always check types before narrowing:**
   ```typescript
   import {isMethodInvocation} from "@openrewrite/rewrite/java";

   // ❌ WRONG - Don't cast without checking
   const call = node as J.MethodInvocation;

   // ✅ CORRECT - Use type guard function
   if (!isMethodInvocation(node)) {
       return node;
   }
   const call = node;  // TypeScript knows node is J.MethodInvocation

   // ✅ ALSO CORRECT - Use kind discriminant
   if (node.kind !== J.Kind.MethodInvocation) {
       return node;
   }
   const call = node as J.MethodInvocation;
   ```

   **Note:** J types are interfaces, not classes. Use type guard functions like `isMethodInvocation()`, `isIdentifier()`, or check the `kind` discriminant property.

2. **Return the original node if no changes:**
   ```typescript
   if (shouldNotTransform) {
       return node;  // Return original
   }
   ```

3. **Use `produce()` for modifications:**
   ```typescript
   return produce(node, draft => {
       draft.name = newName;
   });
   ```

   **Alternative: Object spread for simple updates:**
   ```typescript
   // For top-level property changes, object spread is more succinct
   return {...node, name: newName};

   // But use produce() for nested property updates
   return produce(node, draft => {
       draft.methodType.returnType = newType;  // Nested update
   });
   ```

4. **Return `undefined` to delete a node:**
   ```typescript
   if (shouldDelete) {
       return undefined;  // Removes node from AST
   }
   ```

### Cursor Context

The `Cursor` provides context about the current position in the AST:

```typescript
import {isMethodDeclaration} from "@openrewrite/rewrite/java";

protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    const cursor = this.cursor;

    // Get parent node (includes padding/container nodes)
    const parent = cursor.parent?.value;

    // Get parent skipping whitespace nodes
    const parentTree = cursor.parentTree()?.value;

    // Find enclosing method/function
    const enclosingFunc = cursor.firstEnclosing(isMethodDeclaration);

    return method;
}
```

**Cursor methods:**
- `cursor.parent?.value` - Direct parent (may be padding/container node)
- `cursor.parentTree()?.value` - Parent tree node (skips J.RightPadded, J.LeftPadded, J.Container)
- `cursor.firstEnclosing(predicate)` - Find first ancestor matching predicate

## Pattern Matching & Templates

**For comprehensive details, see [references/patterns-and-templates.md](references/patterns-and-templates.md).**

### Quick Overview

The pattern/template system provides a declarative way to match and transform code:

```typescript
import {capture, pattern, template} from "@openrewrite/rewrite/javascript";

// Define captures
const oldMethod = capture<J.Identifier>('oldMethod');
const args = capture({ variadic: true });

// Match pattern
const pat = pattern`foo.${oldMethod}(${args})`;
const match = await pat.match(node);

if (match) {
    // Generate replacement
    const tmpl = template`bar.${oldMethod}Async(${args})`;
    return await tmpl.apply(cursor, node, match);
}
```

### When to Use Patterns vs Visitors

**Use Patterns When:**
- Matching specific code structures
- Need declarative, readable transformations
- Working with method calls, property access, literals
- Want to capture and reuse parts of matched code

**Use Visitors When:**
- Need conditional logic based on context
- Traversing entire files or large subtrees
- Complex transformations requiring multiple steps
- Need access to parent/ancestor nodes via Cursor

**Combine Both:**
```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Use visitor to narrow scope, pattern to match
    const pat = pattern`oldApi.${capture()}(${capture()})`;
    const match = await pat.match(method, this.cursor);

    if (match) {
        return await template`newApi.${capture()}(${capture()})`.apply(this.cursor, method, match);
    }

    return method;
}
```

## Testing Recipes

### Basic Test Structure

```typescript
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript} from "@openrewrite/rewrite/javascript";
import {MyRecipe} from "./my-recipe";  // Your recipe implementation

describe("my-recipe", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    test("transforms old pattern to new pattern", () => {
        return spec.rewriteRun(
            //language=javascript
            javascript(
                `const x = oldPattern();`,
                `const x = newPattern();`
            )
        );
    });

    test("does not transform unrelated code", () => {
        return spec.rewriteRun(
            //language=javascript
            javascript(
                `const x = unrelatedCode();`
            )
        );
    });
});
```

### Testing with Recipe Options

```typescript
describe("configurable-recipe", () => {
    test("uses custom method name with constructor", () => {
        const spec = new RecipeSpec();
        // Instantiate with options via constructor
        spec.recipe = new ConfigurableRecipe({
            methodName: "customMethod",
            newMethodName: "newCustomMethod"
        });

        return spec.rewriteRun(
            javascript(
                `customMethod();`,
                `newCustomMethod();`
            )
        );
    });

    test("uses custom method name with property assignment", () => {
        const spec = new RecipeSpec();
        // Alternative: set properties after instantiation
        const recipe = new ConfigurableRecipe();
        recipe.methodName = "customMethod";
        recipe.newMethodName = "newCustomMethod";
        spec.recipe = recipe;

        return spec.rewriteRun(
            javascript(
                `customMethod();`,
                `newCustomMethod();`
            )
        );
    });
});
```

### Pattern-Based Testing

For recipes using patterns/templates, test edge cases:

```typescript
describe("pattern-based-recipe", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyPatternRecipe();

    test("matches simple case", () => {
        return spec.rewriteRun(
            javascript(`foo.bar()`, `baz.bar()`)
        );
    });

    test("matches with arguments", () => {
        return spec.rewriteRun(
            javascript(`foo.bar(a, b)`, `baz.bar(a, b)`)
        );
    });

    test("preserves nested structure", () => {
        return spec.rewriteRun(
            javascript(
                `foo.bar(x.y())`,
                `baz.bar(x.y())`
            )
        );
    });

    test("does not match different pattern", () => {
        return spec.rewriteRun(
            javascript(`other.method()`)
        );
    });
});
```

### Advanced Testing

For comprehensive testing strategies including:

- **AST Assertions** - Use `afterRecipe` to inspect the transformed AST structure
- **Pre-Recipe Setup** - Use `beforeRecipe` to prepare test data
- **Dynamic Validation** - Use function-based `after` for flexible assertions
- **Data Table Testing** - Validate data collected during recipe execution
- **Cross-File Testing** - Test transformations across multiple files
- **Generated Files** - Test recipes that create new files

See the detailed [Testing Recipes Guide](./references/testing-recipes.md) for examples and patterns.

Quick example of AST assertions:

```typescript
test("verify AST structure", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    return spec.rewriteRun({
        ...javascript(
            `if (true) foo();`,
            `if (bar()) bar();`
        ),
        afterRecipe: (cu: JS.CompilationUnit) => {
            // Navigate and assert on the transformed AST
            const ifStmt = cu.statements[0].element as J.If;
            const condition = ifStmt.ifCondition.tree.element;

            expect(condition.kind).toBe(J.Kind.MethodInvocation);
            expect((condition as J.MethodInvocation).name.simpleName).toBe('bar');
        }
    });
});
```

## Common Patterns

### Pattern: Simple AST Modification

```typescript
protected async visitLiteral(
    literal: J.Literal,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (typeof literal.value === 'string' && literal.value === 'old') {
        return produce(literal, draft => {
            draft.value = 'new';
            draft.valueSource = '"new"';
        });
    }
    return literal;
}
```

### Pattern: Conditional Transformation

```typescript
import {isIdentifier} from "@openrewrite/rewrite/java";

protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Check if method name matches
    if (!isIdentifier(method.name)) {
        return method;
    }

    if (method.name.simpleName !== 'oldMethod') {
        return method;
    }

    // Transform
    return produce(method, draft => {
        if (isIdentifier(draft.name)) {
            draft.name = draft.name.withName('newMethod');
        }
    });
}
```

### Pattern: Using Helper Function

For complex logic, extract to the `rewrite` helper:

```typescript
import {rewrite, capture, pattern, template} from "@openrewrite/rewrite/javascript";

protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    const rule = rewrite(() => {
        const methodName = capture();
        const args = capture({ variadic: true });
        return {
            before: pattern`oldApi.${methodName}(${args})`,
            after: template`newApi.${methodName}Async(${args})`
        };
    });

    return await rule.tryOn(this.cursor, method) || method;
}
```

### Pattern: Marker-Based Tracking

Use markers to track changes or metadata:

```typescript
import {SearchResult} from "@openrewrite/rewrite";

protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (matchesPattern(method)) {
        // Mark for reporting
        return method.withMarkers(
            method.markers.add(new SearchResult(randomId(), "Found match"))
        );
    }
    return method;
}
```

## Troubleshooting

### Common Issues

**Issue: Recipe doesn't transform anything**

Checklist:
- [ ] Is `editor()` method implemented and returning a visitor?
- [ ] Are you overriding the correct visit method for your target AST node?
- [ ] Is the pattern matching the actual AST structure?
- [ ] Are you returning the modified node (not `undefined` unless deleting)?
- [ ] Did you call `await super.visitXxx()` if you need default behavior?

**Issue: Pattern doesn't match**

Checklist:
- [ ] Print the AST structure to understand node types
- [ ] Use `any()` instead of `capture()` for parts you don't need
- [ ] Check if you need variadic captures for argument lists
- [ ] Verify type constraints aren't too restrictive
- [ ] Test pattern in isolation with a simple test case

**Issue: Type errors with captures**

```typescript
import {isLiteral, J} from "@openrewrite/rewrite/java";
import {pattern} from "@openrewrite/rewrite/javascript";

// ❌ WRONG - Generic parameter doesn't enforce runtime type
const x = capture<J.Literal>();
pattern`${x}`.match(node);  // Could match anything!

// ✅ CORRECT - Use constraint for runtime validation
const x = capture<J.Literal>({
    constraint: (n) => isLiteral(n)
});
```

**Issue: Immer produce() not working**

```typescript
// ❌ WRONG - Don't reassign draft itself
return produce(node, draft => {
    draft = someOtherNode;  // Won't work!
});

// ✅ CORRECT - Modify draft properties
return produce(node, draft => {
    draft.name = newName;
    draft.arguments = newArgs;
});

// ✅ ALSO CORRECT - Use object spread for top-level changes when a new object is required
return {...node, name: newName, arguments: newArgs};
```

### Debugging Tips

**1. Log AST structure:**
```typescript
console.log(JSON.stringify(node, null, 2));
```

**2. Test patterns in isolation:**
```typescript
test("debug pattern matching", async () => {
    const pat = pattern`foo(${capture()})`;
    const parser = new JavaScriptParser();
    const cu = await parser.parse(`foo(42)`, new InMemoryExecutionContext());
    const match = await pat.match(cu.statements[0]);
    console.log("Match result:", match);
});
```

**3. Use type guards consistently:**
```typescript
import {isMethodInvocation} from "@openrewrite/rewrite/java";

// Use built-in type guards
if (isMethodInvocation(node)) {
    // TypeScript knows node is J.MethodInvocation here
}

// Or create custom type guards using kind discriminant
function isAsyncMethod(node: J): node is J.MethodDeclaration {
    return node.kind === J.Kind.MethodDeclaration &&
           (node as J.MethodDeclaration).modifiers.some(m => m.type === 'async');
}
```

## Package Structure

The OpenRewrite JavaScript implementation is published as the NPM package **`@openrewrite/rewrite`**.

**Key directories when working in the repository:**

- **Recipe implementations**: `src/javascript/migrate/`
- **Core types**: `src/java/tree.ts` and `src/javascript/tree.ts`
- **Visitor base**: `src/javascript/visitor.ts`
- **Pattern/Template system**: `src/javascript/templating/`

**Note:** Source code includes JSDoc documentation. Explore the source when additional context is needed beyond this skill.

## Further Reading

- **[references/patterns-and-templates.md](references/patterns-and-templates.md)** - Deep dive into pattern matching and templates
- **[references/examples.md](references/examples.md)** - Complete recipe examples with explanations
- **[OpenRewrite Documentation](https://docs.openrewrite.org/)** - Official documentation
- **[GitHub Repository](https://github.com/openrewrite/rewrite)** - Browse source code and examples

## Best Practices

1. **Start with visitors, add patterns as needed** - Visitors give you full control; patterns simplify common cases
2. **Test edge cases** - Empty arguments, nested calls, different node types
3. **Use type constraints carefully** - Generic parameters are for IDE autocomplete only
4. **Keep recipes focused** - One recipe should do one thing well
5. **Document with examples** - Include before/after in description
6. **Handle undefined gracefully** - Always check before accessing properties
7. **Use early returns** - Return original node when no transformation needed
8. **Capture options in closures** - Recipe options need to be captured for visitor access
