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
- **references/type-attribution-guide.md** - Type attribution, configure() usage, and ensuring proper type context
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

### Project Setup

**Required Dependencies:**

```json
{
  "dependencies": {
    "@openrewrite/rewrite": "^8.66.1"
  },
  "devDependencies": {
    "@types/jest": "^29.5.13",
    "@types/node": "^22.5.4",
    "immer": "^10.0.0",
    "jest": "^29.7.0",
    "typescript": "^5.6.2"
  }
}
```

**TypeScript Configuration:**

Use `module: "Node16"` and `moduleResolution: "node16"` for proper ESM support:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "Node16",
    "moduleResolution": "node16",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "experimentalDecorators": true,
    "declaration": true
  }
}
```

**Installation:**

```bash
npm install @openrewrite/rewrite@next  # Use @next for latest features
npm install --save-dev typescript @types/node immer @jest/globals jest
```

### Recipe Development Workflow

Follow this checklist when creating a new recipe:

- [ ] Set up project with required dependencies
- [ ] Configure TypeScript with Node16 module resolution
- [ ] Define recipe class extending `Recipe`
- [ ] Implement `name`, `displayName`, `description` properties
- [ ] Add `@Option` fields if recipe needs configuration
- [ ] Implement `editor()` method returning a visitor
- [ ] Create visitor extending `JavaScriptVisitor` or `JavaScriptIsoVisitor`
- [ ] Override visit methods for target AST nodes
- [ ] **Use `produceAsync()` for async operations** (pattern matching, type checks) - import from `@openrewrite/rewrite`
- [ ] Use `produce()` from `immer` for synchronous immutable updates
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

LST (Lossless Semantic Tree) is OpenRewrite's AST representation that preserves **everything** about your source code - formatting, whitespace, comments, and type information. The key principle: Parse → Transform → Print produces identical output when no changes are made.

### Quick Reference

LST uses wrapper types to preserve formatting around AST elements:
- **`J.RightPadded<T>`** - Element with trailing space/comments
- **`J.LeftPadded<T>`** - Element with leading space/comments
- **`J.Container<T>`** - Delimited lists (arguments, array elements)

```typescript
// Always access the element inside wrappers:
const selectExpr = method.select.element;  // ✅ Correct - unwrap RightPadded
const firstArg = method.arguments.elements[0].element;  // ✅ Correct - unwrap Container element

// Templates handle wrappers automatically:
const args = method.arguments;  // J.Container
await template`newMethod(${args})`.apply(cursor, method);  // Expands with formatting
```

**Important:** Every LST element has a `prefix: J.Space` property containing whitespace/comments before it.

📖 **See [references/lst-concepts.md](references/lst-concepts.md) for comprehensive coverage including:**
- Detailed wrapper type explanations with examples
- Immutability and referential equality patterns
- Spacing and formatting preservation
- Advanced visitor methods for wrappers

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

The pattern/template system provides a declarative way to match and transform code:

```typescript
import {capture, pattern, template} from "@openrewrite/rewrite/javascript";

// Match and transform
const args = capture({ variadic: true });
const pat = pattern`oldApi.method(${args})`;
const match = await pat.match(node);

if (match) {
    return await template`newApi.methodAsync(${args})`.apply(cursor, node, match);
}

// Configure templates for type attribution when needed
const tmpl = template`isDate(${capture('value')})`
    .configure({
        context: ['import { isDate } from "date-utils"'],
        dependencies: {'date-utils': '^2.0.0'}
    });
```

**Decision Guide:** Use patterns for declarative transformations of specific structures. Use visitors for conditional logic and context-aware transformations. Combine both for maximum flexibility.

📖 **See [references/patterns-and-templates.md](references/patterns-and-templates.md) for comprehensive coverage including:**
- Capture types and constraints
- Variadic and any() placeholders
- Type attribution with configure()
- The rewrite() helper function
- Advanced matching patterns

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

Use `RecipeSpec` with `rewriteRun()` to test transformations:

```typescript
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript} from "@openrewrite/rewrite/javascript";

describe("my-recipe", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    test("transforms old to new pattern", () => {
        return spec.rewriteRun(
            javascript(
                `const x = oldPattern();`,  // before
                `const x = newPattern();`   // after
            )
        );
    });

    test("with recipe options", () => {
        spec.recipe = new MyRecipe({ option: "value" });
        return spec.rewriteRun(
            javascript(`// test code`)
        );
    });
});
```

📖 **See [references/testing-recipes.md](references/testing-recipes.md) for advanced testing including:**
- AST assertions with `afterRecipe`
- Pre/post recipe hooks
- Cross-file transformations
- Data table validation
- Testing generated files

## Common Patterns

Quick reference patterns for common recipe scenarios. For complete recipe examples, see [references/examples.md](references/examples.md).

### Pattern 1: Simple Property Renaming

```typescript
protected async visitIdentifier(
    ident: J.Identifier,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (ident.simpleName === 'oldName') {
        return ident.withName('newName');
    }
    return ident;
}
```

### Pattern 2: Method Call Transformation

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (!isIdentifier(method.name) || method.name.simpleName !== 'oldMethod') {
        return method;
    }

    return produce(method, draft => {
        if (isIdentifier(draft.name)) {
            draft.name = draft.name.withName('newMethod');
        }
    });
}
```

### Pattern 3: Add Method Arguments

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (isIdentifier(method.name) && method.name.simpleName === 'targetMethod') {
        // Add a new argument to existing ones
        return await template`${method.select}.${method.name}(${method.arguments}, "newParam")`
            .apply(this.cursor, method);
    }
    return method;
}
```

### Pattern 4: Replace Binary Operators

```typescript
protected async visitBinary(
    binary: J.Binary,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (binary.operator.element === J.Binary.Type.Equal) {
        // Change == to ===
        return produce(binary, draft => {
            draft.operator = draft.operator.withElement(J.Binary.Type.TripleEqual);
        });
    }
    return binary;
}
```

### Pattern 5: Transform Arrow Functions

```typescript
protected async visitArrowFunction(
    arrow: JS.ArrowFunction,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Convert arrow function to regular function
    const params = arrow.parameters;
    const body = arrow.body;

    return await template`function(${params}) ${body}`
        .apply(this.cursor, arrow);
}
```

### Pattern 6: Async/Await Conversion

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (isIdentifier(method.name) && method.name.simpleName === 'then') {
        // Convert promise.then() to await
        const promise = method.select.element;
        return await template`await ${promise}`.apply(this.cursor, method);
    }
    return method;
}
```

### Pattern 7: Import Management

```typescript
protected async visitJsCompilationUnit(
    cu: JS.CompilationUnit,
    ctx: ExecutionContext
): Promise<J | undefined> {
    let modified = cu;

    // Add new import if needed
    modified = await maybeAddImport(modified, "lodash", "debounce", null, ctx);

    // Remove old import
    modified = await maybeRemoveImport(modified, "old-library", "oldFunction", ctx);

    return await maybeAutoFormat(cu, modified, ctx, this.cursor);
}
```

### Pattern 8: Class Property Addition

```typescript
protected async visitClassDeclaration(
    classDecl: J.ClassDeclaration,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Add a new property to the class
    const newProperty = await template`state = { count: 0 };`.build<JS.PropertyAssignment>();

    return produce(classDecl, draft => {
        if (draft.body) {
            draft.body.statements.unshift(J.rightPadded(newProperty, J.space()));
        }
    });
}
```

### Pattern 9: Conditional Deletion

```typescript
protected async visitVariableDeclarations(
    varDecls: J.VariableDeclarations,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Delete unused variables
    if (varDecls.variables.some(v => isIdentifier(v.element.name) &&
        v.element.name.simpleName === 'deprecatedVar')) {
        return undefined; // Returning undefined deletes the node
    }
    return varDecls;
}
```

### Pattern 10: Using Execution Context

```typescript
protected async visitClassDeclaration(
    classDecl: J.ClassDeclaration,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Store data in context for later passes
    if (isIdentifier(classDecl.name)) {
        let classNames = ctx.getMessage<Set<string>>('classNames') || new Set();
        classNames.add(classDecl.name.simpleName);
        ctx.putMessage('classNames', classNames);
    }
    return classDecl;
}
```

### Pattern 11: Pattern Matching with Constraints

```typescript
const methodName = capture<J.Identifier>({
    constraint: (n) => isIdentifier(n) && n.simpleName.startsWith('handle')
});
const args = capture({ variadic: true });

const pat = pattern`this.${methodName}(${args})`;
const match = await pat.match(node);

if (match) {
    const name = match.get(methodName);
    return await template`this.${name}Async(${args})`.apply(cursor, node, match);
}
```

### Pattern 12: Using rewrite() Helper

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

### Pattern 13: Marker-Based Reporting

```typescript
import {SearchResult} from "@openrewrite/rewrite";

protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (matchesPattern(method)) {
        // Mark for reporting without transformation
        return method.withMarkers(
            method.markers.add(new SearchResult(randomId(), "Found deprecated API usage"))
        );
    }
    return method;
}
```

### Pattern 14: Type-Safe Visitor Navigation

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Find enclosing class
    const enclosingClass = this.cursor.firstEnclosing(isClassDeclaration);

    if (enclosingClass && isIdentifier(enclosingClass.name)) {
        console.log(`Method ${method.name} is in class ${enclosingClass.name.simpleName}`);
    }

    return method;
}
```

### Pattern 15: Statement Manipulation

```typescript
protected async visitBlock(
    block: J.Block,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Remove all console.log statements
    return produce(block, draft => {
        draft.statements = draft.statements.filter(stmt => {
            const s = stmt.element;
            if (s.kind !== J.Kind.MethodInvocation) return true;

            const method = s as J.MethodInvocation;
            if (!isFieldAccess(method.select.element)) return true;

            const fieldAccess = method.select.element as J.FieldAccess;
            return !(isIdentifier(fieldAccess.target) &&
                    fieldAccess.target.simpleName === 'console' &&
                    isIdentifier(fieldAccess.name.element) &&
                    fieldAccess.name.element.simpleName === 'log');
        });
    });
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
- **[references/type-attribution-guide.md](references/type-attribution-guide.md)** - Type attribution and configure() usage
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
