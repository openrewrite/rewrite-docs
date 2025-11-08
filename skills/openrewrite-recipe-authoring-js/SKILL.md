---
name: openrewrite-recipe-authoring-js
description: This skill should be used when authoring OpenRewrite recipes in TypeScript for automated code transformations. Covers recipe structure, visitor patterns, pattern matching, templates, testing strategies, and troubleshooting.
---

# Authoring OpenRewrite Recipes in TypeScript

Guide for creating and testing OpenRewrite recipes in TypeScript.

## Skill Resources

This skill includes additional reference materials:
- **references/lst-concepts.md** - Core LST concepts: wrapper types (RightPadded, LeftPadded, Container), spacing, and formatting
- **references/patterns-and-templates.md** - Comprehensive guide to pattern matching and template system
- **references/examples.md** - Complete recipe examples with detailed explanations
- **references/testing-recipes.md** - Advanced testing strategies with AST assertions and validation

Load these references as needed for detailed information on specific topics.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Recipe Structure](#recipe-structure)
3. [LST Core Concepts](#lst-core-concepts)
4. [Visitor Pattern](#visitor-pattern)
5. [Pattern Matching & Templates](#pattern-matching--templates)
6. [Utility Functions](#utility-functions)
7. [Testing Recipes](#testing-recipes)
8. [Common Patterns](#common-patterns)
9. [Troubleshooting](#troubleshooting)
10. [Package Structure](#package-structure)
11. [Further Reading](#further-reading)
12. [Best Practices](#best-practices)

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
- [ ] Use `maybeAddImport()` / `maybeRemoveImport()` for import management as needed
- [ ] Use `maybeAutoFormat()` to format modified code
- [ ] Write tests using `RecipeSpec` and `rewriteRun()`

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

## LST Core Concepts

**For comprehensive details, see [references/lst-concepts.md](references/lst-concepts.md).**

### What is LST?

LST (Lossless Semantic Tree) is OpenRewrite's AST representation that preserves **everything** about your source code:
- Type information and semantic structure
- Exact formatting and whitespace
- All comments
- Source positions

**Key principle:** Parse → Transform → Print produces identical output when no changes are made.

### Wrapper Types

LST uses wrapper types to preserve formatting information on AST elements.

**J.RightPadded\<T>** - Wraps an element with trailing space/comments:
```typescript
// In: obj  /* comment */ .method()
const select: J.RightPadded<Expression> = method.select;
// select.element = Identifier("obj")
// select.after = Space with "  /* comment */ "
```

**J.LeftPadded\<T>** - Wraps an element with leading space/comments:
```typescript
// In: x  +  y
const binary: J.Binary = ...;
// binary.operator.before = Space with "  "
// binary.operator.element = Operator.Add
```

**J.Container\<T>** - Represents delimited lists (arguments, array elements):
```typescript
// In: foo( a , b , c )
const args: J.Container<Expression> = method.arguments;
// args.before = Space with "( "
// args.elements[0].element = Identifier("a")
// args.elements[0].after = Space with " , "
```

### The `prefix` Property

**Every LST element** has a `prefix: J.Space` property containing whitespace and comments before that element:

```typescript
// In:
//   // Line comment
//   const x = 1;

const varDecl: J.VariableDeclarations = ...;
// varDecl.prefix.comments[0] = Comment("// Line comment")
// varDecl.prefix.whitespace = "\n  "
```

### Accessing Wrapped Elements

Always access through wrapper properties:

```typescript
// ✅ Correct - access element inside wrapper
const selectExpr = method.select.element;  // RightPadded → element
const firstArg = method.arguments.elements[0].element;  // Container → element

// ❌ Wrong - this is the wrapper, not the element
const selectExpr = method.select;  // This is J.RightPadded<Expression>
```

### Using Wrappers in Templates

Templates can accept wrapper types directly:

```typescript
// J.RightPadded - extracts and preserves formatting
const select = method.select;
return await template`${select}.newMethod()`.apply(cursor, method);

// J.Container - expands all elements with formatting
const args = method.arguments;
return await template`newMethod(${args})`.apply(cursor, method);
```

### Visitor Methods for Wrappers

Override these to visit wrapped elements:

```typescript
// Visit RightPadded elements
protected async visitRightPadded<T extends J>(
    right: J.RightPadded<T>,
    p: ExecutionContext
): Promise<J.RightPadded<T>>

// Visit LeftPadded elements
protected async visitLeftPadded<T extends J>(
    left: J.LeftPadded<T>,
    p: ExecutionContext
): Promise<J.LeftPadded<T>>

// Visit Container elements
protected async visitContainer<T extends J>(
    container: J.Container<T>,
    p: ExecutionContext
): Promise<J.Container<T>>
```

See [LST Core Concepts Guide](references/lst-concepts.md) for detailed examples and patterns.

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
- `cursor.parent?.value` - Direct parent (may be wrapper like J.RightPadded or J.Container)
- `cursor.parentTree()?.value` - Parent tree node (skips wrappers: J.RightPadded, J.LeftPadded, J.Container)
- `cursor.firstEnclosing(predicate)` - Find first ancestor matching predicate

See [LST Core Concepts](references/lst-concepts.md) for details on wrapper types.

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

**Type Attribution with `configure()`:**

When templates reference external types or imports, use `configure()` to enable proper type attribution:

```typescript
const tmpl = template`isDate(${capture('value')})`
    .configure({
        context: ['import { isDate } from "date-utils"'],
        dependencies: {'date-utils': '^2.0.0'}
    });
```

See [Configuring Templates for Type Attribution](references/patterns-and-templates.md#configuring-templates-and-patterns-for-type-attribution) for complete details.

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

## Utility Functions

OpenRewrite provides several utility functions to help with common recipe tasks like formatting and import management.

### Formatting Functions

**autoFormat()**

Automatically formats a source file according to language conventions and detected style:

```typescript
import {autoFormat} from "@openrewrite/rewrite";

// In your visitor method
protected async visitJsCompilationUnit(
    cu: JS.CompilationUnit,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Make transformations
    const modified = produce(cu, draft => {
        // ... modifications
    });

    // Apply automatic formatting to entire file
    return await autoFormat(modified, ctx, this.cursor);
}
```

**What it does:**
- Normalizes whitespace and indentation
- Applies consistent formatting across the file
- Uses detected style conventions from the existing code
- Ensures code looks professionally formatted after transformation

**When to use:**
- After significant structural changes
- When generated code needs formatting
- At the end of a transformation to ensure consistency

**maybeAutoFormat()**

Conditionally formats code only if it was modified:

```typescript
import {maybeAutoFormat} from "@openrewrite/rewrite";

protected async visitMethodDeclaration(
    method: J.MethodDeclaration,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Only format if we actually changed something
    if (shouldTransform(method)) {
        const modified = transformMethod(method);
        return await maybeAutoFormat(method, modified, ctx, this.cursor);
    }

    return method;
}
```

**What it does:**
- Compares the original and modified nodes
- Only applies formatting if changes were detected
- Avoids unnecessary formatting operations
- More efficient than unconditional `autoFormat()`

**Parameters:**
- `before` - Original node before transformation
- `after` - Modified node after transformation
- `ctx` - Execution context
- `cursor` - Current cursor position

**When to use:**
- In visitor methods where changes are conditional
- When you want to avoid formatting unchanged code
- For performance optimization in large codebases

### Import Management Functions

**maybeAddImport()**

Adds an import statement if it doesn't already exist:

```typescript
import {maybeAddImport} from "@openrewrite/rewrite/javascript";

protected async visitJsCompilationUnit(
    cu: JS.CompilationUnit,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Ensure the import exists
    let modified = await maybeAddImport(
        cu,
        "lodash",           // Package name
        "isEqual",          // Named import
        null,               // Alias (null for no alias)
        ctx
    );

    // Or add a default import
    modified = await maybeAddImport(
        cu,
        "react",            // Package name
        null,               // null for default import
        "React",            // Default import name
        ctx
    );

    // Or add namespace import
    modified = await maybeAddImport(
        cu,
        "fs",               // Package name
        "*",                // Wildcard for namespace
        "fs",               // Namespace alias
        ctx
    );

    return modified;
}
```

**What it does:**
- Checks if the import already exists
- Adds the import only if not present
- Places import in appropriate location (top of file)
- Handles different import styles:
  - Named imports: `import { isEqual } from "lodash"`
  - Default imports: `import React from "react"`
  - Namespace imports: `import * as fs from "fs"`

**Parameters:**
- `cu` - Compilation unit to modify
- `packageName` - Package to import from
- `member` - Member to import (null for default, "*" for namespace)
- `alias` - Alias name (member alias for named, default name for default, namespace name for wildcard)
- `ctx` - Execution context

**When to use:**
- After adding code that requires new imports
- When transforming to use different APIs/libraries
- To ensure dependencies are properly imported

**maybeRemoveImport()**

Removes an import statement if it's no longer used:

```typescript
import {maybeRemoveImport} from "@openrewrite/rewrite/javascript";

protected async visitJsCompilationUnit(
    cu: JS.CompilationUnit,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Remove unused named import
    let modified = await maybeRemoveImport(
        cu,
        "lodash",           // Package name
        "oldFunction",      // Named import to remove
        ctx
    );

    // Remove entire import if all members unused
    modified = await maybeRemoveImport(
        cu,
        "unused-package",   // Package name
        null,               // null removes entire import
        ctx
    );

    return modified;
}
```

**What it does:**
- Scans the file to check if import is used
- Removes import only if no references found
- Can remove individual named imports or entire import statements
- Keeps imports that are still referenced

**Parameters:**
- `cu` - Compilation unit to modify
- `packageName` - Package name
- `member` - Member to remove (null to remove entire import)
- `ctx` - Execution context

**When to use:**
- After removing code that used certain imports
- When refactoring to eliminate dependencies
- To clean up unused imports automatically

### Combining Utilities

Common pattern combining import management and formatting:

```typescript
protected async visitJsCompilationUnit(
    cu: JS.CompilationUnit,
    ctx: ExecutionContext
): Promise<J | undefined> {
    let modified = cu;

    // Add new import
    modified = await maybeAddImport(
        modified,
        "new-library",
        "newFunction",
        null,
        ctx
    );

    // Remove old import
    modified = await maybeRemoveImport(
        modified,
        "old-library",
        "oldFunction",
        ctx
    );

    // Format if changes were made
    return await maybeAutoFormat(cu, modified, ctx, this.cursor);
}
```

### Best Practices

1. **Use maybeAutoFormat() in visitor methods** - More efficient than unconditional formatting

2. **Manage imports at CompilationUnit level** - Always apply import functions to `JS.CompilationUnit`

3. **Check before removing imports** - `maybeRemoveImport()` already checks usage, safe to call

4. **Chain import operations** - Apply to the result of previous operations

5. **Format after all changes** - Apply formatting once at the end, not after each change

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

Quick reference patterns for common recipe scenarios. For complete recipe examples, see [references/examples.md](references/examples.md).

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

OpenRewrite for JavaScript/TypeScript is published as the NPM package **`@openrewrite/rewrite`**.

**Import structure:**

```typescript
// Core types and utilities
import {Recipe, TreeVisitor, ExecutionContext, autoFormat, maybeAutoFormat} from "@openrewrite/rewrite";

// Java AST types and type guards
import {J, isIdentifier, isLiteral, isMethodInvocation} from "@openrewrite/rewrite/java";

// JavaScript/TypeScript specific
import {JavaScriptVisitor, capture, pattern, template, rewrite} from "@openrewrite/rewrite/javascript";
import {maybeAddImport, maybeRemoveImport} from "@openrewrite/rewrite/javascript";

// Testing utilities
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript, typescript} from "@openrewrite/rewrite/javascript";
```

## Further Reading

- **[references/lst-concepts.md](references/lst-concepts.md)** - LST structure and wrapper types
- **[references/patterns-and-templates.md](references/patterns-and-templates.md)** - Pattern matching and template system
- **[references/examples.md](references/examples.md)** - Complete recipe examples
- **[references/testing-recipes.md](references/testing-recipes.md)** - Testing strategies
- **[OpenRewrite Documentation](https://docs.openrewrite.org/)** - Official documentation

## Best Practices

1. **Start with visitors, add patterns as needed** - Visitors give you full control; patterns simplify common cases
2. **Test edge cases** - Empty arguments, nested calls, different node types
3. **Use type constraints carefully** - Generic parameters are for IDE autocomplete only
4. **Keep recipes focused** - One recipe should do one thing well
5. **Document with examples** - Include before/after in description
6. **Handle undefined gracefully** - Always check before accessing properties
7. **Use early returns** - Return original node when no transformation needed
8. **Capture options in closures** - Recipe options need to be captured for visitor access
