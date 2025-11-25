---
name: openrewrite-recipe-authoring-js
description: This skill should be used when authoring OpenRewrite recipes in TypeScript for automated code transformations. Covers recipe structure, visitor patterns, pattern matching, templates, testing strategies, and troubleshooting.
---

# Authoring OpenRewrite Recipes in TypeScript

## When NOT to Use This Skill

Do NOT use this skill for:
- Authoring OpenRewrite recipes in **Java** - use the `openrewrite-recipe-writer` skill instead
- General JavaScript/TypeScript programming questions unrelated to OpenRewrite
- Questions about running existing OpenRewrite recipes (use OpenRewrite documentation)
- Build tool configuration unrelated to recipe development
- General refactoring advice without OpenRewrite context

## Skill Resources

This skill includes supporting files organized by purpose:

### Templates (`assets/`)
Starting points for recipe development:
- **assets/template-basic-recipe.ts** - Boilerplate for simple recipe
- **assets/template-recipe-with-options.ts** - Recipe with configurable options
- **assets/template-recipe-test.ts** - Test class template
- **assets/template-pattern-rewrite.ts** - Pattern/template transformation example

**Load when:** Creating a new recipe or needing a template to start from

### Guides (`references/`)
Detailed reference documentation:
- **references/lst-concepts.md** - LST structure, wrapper types, immutability
- **references/patterns-and-templates.md** - Pattern matching and template system
- **references/type-attribution-guide.md** - Type attribution and configure() usage
- **references/testing-recipes.md** - Testing strategies and npm usage

**Load when:** Deep dive into specific concepts or troubleshooting

### Patterns and Examples (`references/`)
Ready-to-use code:
- **references/common-patterns.md** - 18 ready-to-use recipe patterns
- **references/examples.md** - 9 complete recipe examples with tests

**Load when:** Needing to see a complete example or looking for a specific pattern

### Checklist (`references/`)
Verification guide:
- **references/checklist-recipe-development.md** - Comprehensive development checklist

**Load when:** Reviewing a recipe for completeness or ensuring best practices

## Quick Start

**Important:** The OpenRewrite JavaScript/TypeScript API is designed specifically for TypeScript. While it can transform JavaScript code, recipe authoring should be done in TypeScript to leverage:
- Template literal syntax for patterns and templates
- Type-safe capture definitions
- Full IDE autocomplete and type checking
- Decorator support for recipe options

### Installation

```bash
npm install @openrewrite/rewrite@next  # Latest features
npm install --save-dev typescript @types/node immer @jest/globals jest
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "Node16",        // Required for ESM
    "moduleResolution": "node16",
    "strict": true,
    "experimentalDecorators": true  // Required for @Option decorator
  }
}
```

### Recipe Development Workflow

Follow this checklist when creating recipes:
- [ ] Set up project with required dependencies
- [ ] Define recipe class extending `Recipe`
- [ ] Implement `name`, `displayName`, `description` properties
- [ ] Add `@Option` fields if configuration needed
- [ ] Implement `editor()` method returning a visitor
- [ ] Create visitor extending `JavaScriptVisitor`
- [ ] Override visit methods for target AST nodes
- [ ] **For pattern-based transformations:** Use `rewrite()` helper with `tryOn()` method
- [ ] **For manual AST modifications:** Use `produce()` from `immer` for immutable updates
- [ ] **For async operations in produce:** Use `produceAsync()` from `@openrewrite/rewrite`
- [ ] Write tests using `RecipeSpec` and `rewriteRun()`

## Core Concepts

### Recipe Structure

```typescript
import {ExecutionContext, Recipe, TreeVisitor} from "@openrewrite/rewrite";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";
import {J} from "@openrewrite/rewrite/java";

export class MyRecipe extends Recipe {
    name = "org.openrewrite.javascript.MyRecipe";
    displayName = "My Recipe";
    description = "What this recipe does.";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Transform or return unchanged
                return method;
            }
        }
    }
}
```

### Recipe with Options

```typescript
import {Option} from "@openrewrite/rewrite";

export class ConfigurableRecipe extends Recipe {
    @Option({
        displayName: "Method name",
        description: "The method to rename",
        example: "oldMethod"
    })
    methodName!: string;

    constructor(options?: { methodName?: string }) {
        super(options);
        this.methodName ??= 'defaultMethod';
    }

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        const methodName = this.methodName;  // Capture for closure
        return new class extends JavaScriptVisitor<ExecutionContext> {
            // Use captured methodName
        }
    }
}
```

### LST Fundamentals

LST preserves everything about source code. Key wrapper types:
- **`J.RightPadded<T>`** - Element with trailing space/comments
- **`J.LeftPadded<T>`** - Element with leading space/comments
- **`J.Container<T>`** - Delimited lists

```typescript
// Always unwrap elements
const selectExpr = method.select.element;  // Unwrap RightPadded
const firstArg = method.arguments.elements[0].element;  // Unwrap Container
```

📖 See **references/lst-concepts.md** for comprehensive details.

### Pattern Matching

Use patterns for declarative transformations:

```typescript
import {capture, pattern, template} from "@openrewrite/rewrite/javascript";

const args = capture({ variadic: true });
const pat = pattern`oldApi.method(${args})`;  // Lenient type checking by default
const match = await pat.match(node, this.cursor);

if (match) {
    return await template`newApi.methodAsync(${args})`
        .apply(node, this.cursor, { values: match });
}
```

**⚠️ Template Construction Rule:** Templates must produce syntactically valid JavaScript/TypeScript code. Template parameters become placeholders, so surrounding syntax must be complete. For example, `template\`function f() { ${method.body!.statements} }\`` works because braces are included, but `template\`function f() ${method.body}\`` fails because it would generate invalid code.

📖 See **references/patterns-and-templates.md** (section "How Template Construction Works") for complete details on the two-phase template construction process.

Configure patterns for strict type checking, type attribution, or debugging:

```typescript
const tmpl = template`isDate(${capture('value')})`
    .configure({
        lenientTypeMatching: false,  // Override default lenient type matching
        context: ['import { isDate } from "date-utils"'],
        dependencies: {'date-utils': '^2.0.0'},
        debug: true  // Enable debug logging globally, or pass { debug: true } to individual match() calls
    });
```

**🎯 Semantic Matching:** When patterns are configured with `context` and `dependencies`, they use type-based semantic matching instead of syntax-only matching. This means a single pattern like `pattern\`repl.REPLServer()\`` can automatically match `repl.REPLServer()`, `REPLServer()`, and `new REPLServer()` - regardless of import style - because they all resolve to the same type.

📖 See **references/patterns-and-templates.md** for complete guide including semantic matching examples.

### The `rewrite()` Helper (Simple Pattern-to-Template Transformations)

**⭐ RECOMMENDED for simple substitutions:** When you need to replace one subtree with another, use `rewrite()` + `tryOn()` - this is the cleanest and most declarative approach:

```typescript
import {rewrite, capture, pattern, template} from "@openrewrite/rewrite/javascript";

// Define transformation rule
const rule = rewrite(() => {
    const args = capture({ variadic: true });
    return {
        before: pattern`oldApi.method(${args})`,
        after: template`newApi.methodAsync(${args})`
    };
});

// In visitor method
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Try to apply the rule - returns transformed node or undefined
    return await rule.tryOn(this.cursor, method) || method;
}
```

**When `rewrite()` works well:**
- ✅ Simple pattern-to-template substitutions (A → B)
- ✅ Most concise and readable for these cases
- ✅ Combines pattern matching and template application
- ✅ Returns `undefined` if no match, making fallback easy
- ✅ Composable with `orElse()` and `andThen()`
- ✅ Declarative - focuses on "what" not "how"
- ✅ **Auto-formats the generated code** - Templates automatically format output

**When to use `pattern`/`template` directly instead:**
- 🔧 Complex conditional logic based on captured values
- 🔧 Multiple transformations needed on the same node
- 🔧 Need to inspect captured values before deciding on transformation
- 🔧 Building different templates based on runtime conditions
- 🔧 Combining pattern matching with manual AST manipulation
- 🔧 Side effects or state updates during transformation (e.g., collecting information)

**Example - Complex logic requiring direct pattern/template use:**

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    const methodName = capture<J.Identifier>('method');
    const args = capture({ variadic: true });
    const pat = pattern`api.${methodName}(${args})`;

    const match = await pat.match(method, this.cursor);
    if (!match) return method;

    const nameNode = match.get(methodName);
    if (!isIdentifier(nameNode)) return method;

    // Complex conditional logic based on captured values
    let tmpl;
    if (nameNode.simpleName.startsWith('get')) {
        tmpl = template`newApi.${methodName}Sync(${args})`;
    } else if (nameNode.simpleName.startsWith('set')) {
        tmpl = template`newApi.${methodName}Async(${args}, callback)`;
    } else {
        // Don't transform this case
        return method;
    }

    return await tmpl.apply(method, this.cursor, { values: match });
}
```

**Trade-off:** `rewrite()` is more declarative but less flexible. For complex transformations, the procedural approach with direct `pattern`/`template` usage offers full control.

**Important:** `template` (and by extension `rewrite()`) automatically formats the generated code according to OpenRewrite's formatting rules. This means:
- You don't need to worry about spacing/indentation in template strings
- Generated code will be properly formatted regardless of template formatting
- Captured values preserve their original formatting when inserted

**Return value semantics:**
- `tryOn()` returns the transformed node if pattern matches
- `tryOn()` returns `undefined` if pattern doesn't match
- Use `|| node` to fall back to original when no match

**Composing rules:**
```typescript
// Try multiple transformations
const combined = rule1.orElse(rule2).orElse(rule3);
return await combined.tryOn(this.cursor, method) || method;

// Sequential transformations
const pipeline = rule1.andThen(rule2);
return await pipeline.tryOn(this.cursor, method) || method;
```

## Visitor Pattern

Override specific methods in `JavaScriptVisitor`:

```typescript
class MyVisitor extends JavaScriptVisitor<ExecutionContext> {
    // Common visitor methods:
    visitJsCompilationUnit()     // Root file
    visitMethodInvocation()       // Method calls
    visitMethodDeclaration()      // Function declarations
    visitIdentifier()             // Identifiers
    visitLiteral()               // Literals
    visitBinary()                // Binary operations
    visitVariableDeclarations()  // Variable declarations
    visitArrowFunction()         // Arrow functions
    visitClassDeclaration()      // Classes

    // JSX/TSX visitor methods:
    visitJsxTag()                // JSX elements: <Component>...</Component>
    visitJsxAttribute()          // JSX attributes: key="value"
    visitJsxSpreadAttribute()    // JSX spread: {...props}
    visitJsxEmbeddedExpression() // JSX expressions: {value}
}
```

### Critical Rules

1. **Visitor execution order - Call super first (default pattern):**
```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // ✅ DEFAULT: Visit children first by calling super
    method = await super.visitMethodInvocation(method, ctx) as J.MethodInvocation;

    // Then apply transformations
    if (shouldTransform(method)) {
        return transform(method);
    }

    return method;
}
```

**Why call super first:** Most recipes need bottom-up transformation - children are visited before parents. This is the safest default pattern.

**When to skip super:**
- You know the subtree contains nothing to transform (performance optimization)
- You want to prevent child transformations in specific contexts
- You're replacing the entire node and don't need to visit children
- You need to modify the node before traversing children (advanced cases)

```typescript
// Example: Skip super when replacing entire node
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (shouldCompletelyReplace(method)) {
        // Don't call super - we're replacing the whole thing
        return await template`newExpression()`.apply(method, this.cursor);
    }

    // For other cases, visit children first
    return await super.visitMethodInvocation(method, ctx);
}
```

2. **ALWAYS unwrap wrapper types before accessing properties:**
```typescript
// ⚠️ CRITICAL: Wrapper types need unwrapping!
const selectExpr = method.select.element;  // ✅ Use .element to unwrap RightPadded
const firstArg = method.arguments.elements[0].element;  // ✅ Unwrap from Container

// ❌ WRONG - Accessing wrapper directly causes type errors
const selectExpr = method.select;  // This is J.RightPadded<Expression>, not Expression!
```

**Troubleshooting:** If you see "Property X does not exist on type RightPadded<Y>", you forgot to unwrap with `.element`.

3. **Type check before narrowing:**
```typescript
import {isMethodInvocation} from "@openrewrite/rewrite/java";

if (!isMethodInvocation(node)) {
    return node;  // Return unchanged if wrong type
}
// Now TypeScript knows node is J.MethodInvocation
```

4. **Use produce() for modifications:**
```typescript
return produce(node, draft => {
    draft.name = newName;
});
```

5. **Return undefined to delete:**
```typescript
if (shouldDelete) {
    return undefined;
}
```

### Cursor Navigation

```typescript
const cursor = this.cursor;
const parent = cursor.parent?.value;  // Direct parent
const parentTree = cursor.parentTree()?.value;  // Parent skipping wrappers
const enclosing = cursor.firstEnclosing(isMethodDeclaration);
```

## Utility Functions

### Formatting
- `autoFormat(node, ctx, cursor)` - Format entire file
- `maybeAutoFormat(before, after, ctx, cursor)` - Format if changed

### Import Management

Utility functions for managing imports:
- `maybeAddImport(visitor, options)` - Add import if missing
- `maybeRemoveImport(visitor, module, member?)` - Remove unused import

```typescript
protected async visitJsCompilationUnit(
    cu: JS.CompilationUnit,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Add import: import { debounce } from "lodash"
    maybeAddImport(this, { module: "lodash", member: "debounce" });

    // Add default import: import React from "react"
    maybeAddImport(this, { module: "react", member: "default", alias: "React" });

    // Add namespace import: import * as fs from "fs"
    maybeAddImport(this, { module: "fs", member: "*", alias: "fs" });

    // Add side-effect import: import "polyfills"
    maybeAddImport(this, { module: "polyfills", sideEffectOnly: true });

    // Remove import
    maybeRemoveImport(this, "old-lib", "oldFn");

    return cu;
}
```

**⚠️ Known Limitation**: Direct ES6 `import` statement transformations can be challenging due to complex AST structure. Prefer using `maybeAddImport`/`maybeRemoveImport` or transforming import usage instead of the import statement itself.

📖 See **references/common-patterns.md** (Pattern 7) for CommonJS `require()` transformations and ES6 import workarounds.

## Testing

### Basic Testing

```typescript
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript, typescript, jsx, tsx} from "@openrewrite/rewrite/javascript";

test("transforms code", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    return spec.rewriteRun(
        javascript(
            `const x = oldPattern();`,  // before
            `const x = newPattern();`   // after
        )
    );
});
```

**⚠️ Important:** `rewriteRun()` checks the output for **exact formatting match**, including all whitespace, indentation, and newlines. Tests will fail if the transformation produces semantically correct but differently formatted code.

**Common test failures:**
- Minor indentation differences (tabs vs spaces, different indent levels)
- Extra or missing newlines
- Different spacing around operators or punctuation

**Tip:** If tests fail due to formatting, check:
1. Whether your transformation uses `template` (which auto-formats) or manual AST construction
2. The exact whitespace in your expected output string
3. Whether `maybeAutoFormat()` should be applied after transformation

### Testing No-Change Cases

**Important:** Always test cases where your recipe should NOT make changes. This ensures your recipe doesn't transform unrelated code.

```typescript
test("does not transform unrelated code", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    return spec.rewriteRun(
        // Single argument = no change expected
        javascript(`const x = unrelatedPattern();`)
    );
});
```

**Pattern:**
- **Two arguments** `javascript(before, after)` - Expects transformation
- **One argument** `javascript(code)` - Expects NO change (code stays the same)

**Example - Testing both positive and negative cases:**
```typescript
test("transforms only target pattern", () => {
    const spec = new RecipeSpec();
    spec.recipe = new RenameMethodRecipe({ oldName: "oldMethod", newName: "newMethod" });

    return spec.rewriteRun(
        // Should transform
        javascript(
            `obj.oldMethod();`,
            `obj.newMethod();`
        ),
        // Should NOT transform - different method name
        javascript(`obj.differentMethod();`),
        // Should NOT transform - different context
        javascript(`const oldMethod = 'string';`)
    );
});
```

**Best practice:** Include multiple no-change test cases to verify your recipe's specificity and avoid false positives.

### Testing with Dependencies

Use `npm` with `packageJson` for type attribution:

```typescript
import {npm, packageJson, typescript} from "@openrewrite/rewrite/javascript";
import {withDir} from 'tmp-promise';

test("with dependencies", async () => {
    await withDir(async (tmpDir) => {
        const sources = npm(
            tmpDir.path,  // Temp directory for clean tests

            packageJson(JSON.stringify({
                dependencies: {
                    "lodash": "^4.17.21"
                },
                devDependencies: {
                    "@types/lodash": "^4.14.195"
                }
            })),

            typescript(
                `import _ from "lodash";
                 _.debounce(fn, 100);`,
                `import { debounce } from "lodash";
                 debounce(fn, 100);`
            )
        );

        // Convert async generator
        const sourcesArray = [];
        for await (const source of sources) {
            sourcesArray.push(source);
        }

        return spec.rewriteRun(...sourcesArray);
    }, {unsafeCleanup: true});
});
```

📖 See **references/testing-recipes.md** for advanced testing.

## Troubleshooting

### Recipe doesn't transform
- Check `editor()` returns a visitor
- Verify correct visit method overridden
- Ensure modified node is returned
- Check pattern matches AST structure

### Pattern doesn't match

**Quick debugging steps:**
- Print AST structure to debug
- Use `any()` for parts to ignore
- Check variadic captures for lists
- Test pattern in isolation

**Debug Logging (Recommended):**

When pattern matches fail unexpectedly, enable debug logging to see exactly why:

```typescript
const args = capture({ variadic: true });
const pat = pattern`oldApi.method(${args})`;

// Option 1: Enable debug globally for all matches
const patWithDebug = pat.configure({ debug: true });
const match = await patWithDebug.match(node, cursor);

// Option 2: Enable debug for a single match() call
const match2 = await pat.match(node, cursor, { debug: true });

// If match fails, debug logs show:
// - Which AST node caused the mismatch
// - The exact path through the AST where it failed
// - Expected vs actual values at the failure point
// - Backtracking attempts for variadic captures
```

**Debug output example:**

```
[Pattern #1] foo(${args}, 999)
[Pattern #1] ❌ FAILED matching against J$MethodInvocation:
[Pattern #1]   foo(1, 2, 3, 42)
[Pattern #1]    At path:  [J$MethodInvocation#arguments → 3]
[Pattern #1]    Reason:   structural-mismatch
[Pattern #1]    Expected: 999
[Pattern #1]    Actual:   42
```

**What debug logs reveal:**
- **Path** - Shows exactly where in the AST the mismatch occurred (e.g., `[J$MethodInvocation#arguments → 3]` means the 4th argument)
- **Reason** - Type of mismatch (structural-mismatch, kind-mismatch, value-mismatch, constraint-failed, etc.)
- **Expected/Actual** - The values that don't match
- **Backtracking info** - For variadic captures, shows which consumption amounts were tried

**Common mismatch reasons:**
- `structural-mismatch` - Values differ (e.g., different method names, different literal values)
- `kind-mismatch` - AST node types don't match (e.g., expecting Identifier but got Literal)
- `value-mismatch` - Property values don't match
- `constraint-failed` - Capture constraint returned false
- `array-length-mismatch` - Container lengths differ (when no variadic captures present)

**Tip:** Debug logs are especially useful for:
- Understanding why a pattern doesn't match similar-looking code
- Debugging variadic capture behavior
- Verifying that constraints are working as expected
- Identifying subtle AST structure differences

### Type errors with captures
```typescript
// ❌ Wrong - no runtime validation
const x = capture<J.Literal>();

// ✅ Correct - with constraint
const x = capture<J.Literal>({
    constraint: (n) => isLiteral(n)
});
```

### Immer produce() issues
```typescript
// ❌ Wrong - reassigning draft
return produce(node, draft => {
    draft = someOtherNode;  // Won't work
});

// ✅ Correct - modify properties
return produce(node, draft => {
    draft.name = newName;
});
```

### Wrapper unwrapping errors

**Error:** `Property 'simpleName' does not exist on type 'RightPadded<Expression>'`

**Cause:** You forgot to unwrap the wrapper type with `.element`

```typescript
// ❌ Wrong - accessing wrapper directly
const name = method.select.simpleName;  // method.select is RightPadded<Expression>!

// ✅ Correct - unwrap first
const selectExpr = method.select.element;  // Now it's Expression
if (isIdentifier(selectExpr)) {
    const name = selectExpr.simpleName;  // ✅ Works
}
```

**Common unwrapping patterns:**
- `method.select.element` - Unwrap RightPadded
- `method.arguments.elements[0].element` - Unwrap from Container
- `binary.operator.element` - Unwrap LeftPadded

### Test failures due to formatting

**Issue:** Tests fail even though transformation is semantically correct

**Cause:** `rewriteRun()` checks for exact formatting match, including whitespace

```typescript
// ❌ Test fails - formatting mismatch
javascript(
    `const x=1;`,           // before (no spaces)
    `const x = 1;`          // after (spaces added)
)
// If transformation preserves original formatting, test will fail

// ✅ Test passes - expected output matches actual formatting
javascript(
    `const x=1;`,           // before
    `const x=1;`            // after (preserves original spacing)
)
```

**Solutions:**
- Use `template` which auto-formats consistently
- Apply `maybeAutoFormat()` to normalize formatting after transformation
- Match the exact formatting (including whitespace) in your test expectations
- Use manual AST construction only when you need precise control over spacing

## Common Patterns

📖 See **references/common-patterns.md** for 18 ready-to-use patterns including:
- Property renaming
- Method transformations
- Adding/removing arguments
- Arrow function conversion
- Import management
- JSX transformations
- Marker-based reporting
- Statement manipulation

## Complete Examples

📖 See **references/examples.md** for 9 complete recipes including:
- Simple visitor patterns
- Pattern-based transformations
- Configurable recipes
- Scanning recipes
- React codemods
- Type attribution examples

## Package Structure

```typescript
// Core
import {Recipe, TreeVisitor, ExecutionContext} from "@openrewrite/rewrite";

// Java AST and type guards
import {J, isIdentifier, isLiteral} from "@openrewrite/rewrite/java";

// JavaScript/TypeScript
import {JavaScriptVisitor, capture, pattern, template} from "@openrewrite/rewrite/javascript";
import {JSX} from "@openrewrite/rewrite/javascript";  // For JSX/TSX transformations
import {maybeAddImport, maybeRemoveImport} from "@openrewrite/rewrite/javascript";

// Testing
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript, typescript, jsx, tsx, npm, packageJson} from "@openrewrite/rewrite/javascript";
```

## Best Practices

1. **Choose the right tool for pattern-based transformations:**
   - Use `rewrite()` for simple pattern-to-template substitutions (most declarative)
   - Use `pattern`/`template` directly for complex conditional logic or procedural transformations
2. **Call `super.visitX()` first (default)** - Ensures children are visited before parent transformations; skip only when you have a specific reason
3. **Always unwrap wrapper types** - Use `.element` to access actual nodes from RightPadded/Container/LeftPadded
4. **Test edge cases** - Empty arguments, nested calls, different node types
5. **Use type constraints carefully** - Generic parameters are for IDE only, use `constraint` for runtime
6. **Keep recipes focused** - One recipe, one transformation
7. **Document with examples** - Include before/after in description
8. **Handle undefined gracefully** - Check before accessing properties
9. **Use early returns** - Return original when no transformation needed
10. **Capture options in closures** - Recipe options need closure access in visitor