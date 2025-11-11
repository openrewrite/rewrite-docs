# Pattern Matching and Templates

Comprehensive guide to the pattern/template system for declarative code transformations.

## Table of Contents

1. [Overview](#overview)
2. [Basic Concepts](#basic-concepts)
3. [Captures](#captures)
4. [Patterns](#patterns)
5. [Templates](#templates)
6. [The rewrite() Helper](#the-rewrite-helper)
7. [Advanced Features](#advanced-features)
8. [Common Pitfalls](#common-pitfalls)

## Overview

The pattern/template system provides a declarative way to match and transform JavaScript/TypeScript code:

- **Patterns** match code structures and capture parts for reuse
- **Templates** generate new code using captured values
- **Captures** bind matched AST nodes to variables
- **rewrite()** combines pattern matching with template application into simple substitution rules
- **Direct pattern/template** provides full procedural control for complex transformations

**API Design Philosophy:**

This API is designed specifically for **TypeScript recipe authoring**. The use of TypeScript enables:
- **Template literals** - Natural syntax for patterns and templates using tagged template literals
- **Type parameters** - IDE autocomplete and type hints for captures (e.g., `capture<J.Identifier>()`)
- **Type safety** - Compile-time checking and IntelliSense support
- **Modern JavaScript features** - Leverages TypeScript's advanced type system

While recipes can transform JavaScript code, the recipe authoring experience is optimized for TypeScript developers.

**Benefits:**
- More readable than manual AST manipulation
- Automatically handles parsing and type attribution
- Captures preserve all formatting and comments
- Type-safe with TypeScript
- Flexible: use declarative `rewrite()` for simple cases, procedural pattern/template for complex logic

## Basic Concepts

### Simple Match and Replace

```typescript
import {capture, pattern, template, rewrite} from "@openrewrite/rewrite/javascript";

// In a visitor method:
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Match: foo.bar()
    const match = await pattern`foo.bar()`.match(method, this.cursor);

    if (match) {
        // Replace with: baz.qux()
        return await template`baz.qux()`.apply(this.cursor, method, match);
    }

    return method;
}
```

### With Captures

```typescript
// Capture the method name and reuse it
const methodName = capture<J.Identifier>('methodName');

const pat = pattern`foo.${methodName}()`;
const match = await pat.match(method, this.cursor);

if (match) {
    // Use captured method name in template
    return await template`bar.${methodName}()`.apply(this.cursor, method, match);
}

// Example: foo.getData() -> bar.getData()
```

## Captures

### Creating Captures

```typescript
// Unnamed capture
const x = capture();

// Named capture (useful for debugging)
const x = capture('x');

// Typed capture (for IDE autocomplete only - not runtime enforcement!)
const x = capture<J.Identifier>('x');

// Capture with runtime constraint
import {isLiteral} from "@openrewrite/rewrite/java";

const num = capture<J.Literal>({
    constraint: (node) =>
        isLiteral(node) && typeof node.value === 'number'
});

// Wildcard alias for capture (shorter syntax)
import {_} from "@openrewrite/rewrite/javascript";
const x = _();  // Equivalent to capture()
const y = _('name');  // Equivalent to capture('name')
```

**Important:** Generic type parameters (`<J.Identifier>`) are only for IDE autocomplete. They do NOT enforce types at runtime. Use `constraint` for runtime validation.

**Design note:** The type parameter syntax is a TypeScript-specific feature that provides IDE support. This is one example of how the API is designed to leverage TypeScript's type system for a better developer experience.

### Capture Options

```typescript
interface CaptureOptions {
    // Human-readable name for debugging
    name?: string;

    // Runtime validation function
    constraint?: (node: J) => boolean;

    // Variadic capture (matches 0 or more elements)
    variadic?: boolean;
}
```

### Constraint Functions

Constraints validate captures after structural matching:

```typescript
// Simple constraint
import {isLiteral} from "@openrewrite/rewrite/java";

const evenNumber = capture<J.Literal>({
    constraint: (node) =>
        isLiteral(node) &&
        typeof node.value === 'number' &&
        node.value % 2 === 0
});

// Constraint composition
import {and, or, not} from "@openrewrite/rewrite/javascript";

const positiveEven = capture<J.Literal>({
    constraint: and(
        isLiteral,
        (n) => typeof (n as J.Literal).value === 'number',
        (n) => (n as J.Literal).value > 0,
        (n) => (n as J.Literal).value % 2 === 0
    )
});

// Union type with constraint
const stringOrNumber = capture<J.Literal>({
    constraint: or(
        (n) => isLiteral(n) && typeof n.value === 'string',
        (n) => isLiteral(n) && typeof n.value === 'number'
    )
});
```

### Variadic Captures

Variadic captures match 0 or more elements (typically function arguments):

```typescript
const args = capture({ variadic: true });

// Matches any number of arguments
const pat = pattern`foo(${args})`;

// Matches:
// foo()         -> args = []
// foo(a)        -> args = [a]
// foo(a, b, c)  -> args = [a, b, c]

// Use in template
const tmpl = template`bar(${args})`;  // Expands all arguments
```

### Variadic Constraints

For variadic captures, constraints receive the entire array:

```typescript
// At least 2 arguments
const args = capture({
    variadic: true,
    constraint: (arr) => arr.length >= 2
});

// All arguments must be literals
import {isLiteral} from "@openrewrite/rewrite/java";

const literalArgs = capture({
    variadic: true,
    constraint: (arr) => arr.every(arg => isLiteral(arg))
});
```

### Variadic Array Operations

Access and slice variadic captures in templates:

```typescript
const args = capture({ variadic: true });

// First argument only
template`foo(${args[0]})`

// All but first
template`foo(${args.slice(1)})`

// Last argument
template`foo(${args[args.length - 1]})`

// Spread in middle
template`foo(x, ${args}, y)`
```

### Non-Capturing Matches

Use `any()` when you need to match but not capture:

```typescript
import {any} from "@openrewrite/rewrite/javascript";

// Match foo(something) but don't capture the argument
const pat = pattern`foo(${any()})`;

// Variadic non-capturing
const pat = pattern`foo(${any({ variadic: true })})`;
```

**When to use `any()`:**
- You need to match structure but don't use the value
- Avoiding unused capture warnings
- Clearer intent than unused captures

## Patterns

### Pattern Creation

```typescript
// Template literal syntax (preferred)
const pat = pattern`foo.bar(${capture()})`;

// Builder API (for dynamic construction)
import {PatternBuilder} from "@openrewrite/rewrite/javascript";

const builder = new PatternBuilder();
builder.add('foo.bar(');
builder.addCapture(capture());
builder.add(')');
const pat = builder.build();
```

### Pattern Matching

```typescript
const pat = pattern`foo(${capture()})`;

// Match returns MatchResult | undefined
const match = await pat.match(node, cursor);

if (match) {
    // match is a Map<Capture, J>
    const captured = match.get(capture());
}
```

### MatchResult API

```typescript
interface MatchResult extends Map<Capture, J> {
    // Get captured value by capture object
    get(capture: Capture): J | undefined;

    // Get captured value by name
    get(name: string): J | undefined;

    // Check if capture exists
    has(capture: Capture): boolean;

    // Iterate over captures
    forEach((value: J, key: Capture) => void): void;
}
```

### Structural Matching

Patterns match based on AST structure, not text:

```typescript
// This pattern:
pattern`foo(${capture()})`

// Matches all of these (same structure):
foo(42)
foo( 42 )  // Different whitespace
foo(
    42     // Different formatting
)
foo(/* comment */ 42)  // With comments
```

### Pattern Scope

Use patterns to narrow the scope within visitor methods:

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Only match specific structure
    const pat = pattern`api.call(${capture()}, ${capture()})`;

    const match = await pat.match(method, this.cursor);
    if (!match) {
        return method;  // Not our pattern, no change
    }

    // Transform matched pattern
    // ...
}
```

## Templates

### Template Creation

```typescript
// Template literal syntax (preferred)
const tmpl = template`foo.bar(${capture()})`;

// Builder API
import {TemplateBuilder} from "@openrewrite/rewrite/javascript";

const builder = new TemplateBuilder();
builder.add('foo.bar(');
builder.addCapture(capture());
builder.add(')');
const tmpl = builder.build();
```

### How Template Construction Works

**⚠️ CRITICAL CONCEPT:** Templates undergo a two-phase process that determines how template parameters are handled:

**Phase 1: Template Construction (happens once when template is created)**

When you write `template\`...\``, the system constructs valid JavaScript/TypeScript code string that will be parsed into an AST:

1. **`raw()` parameters** - String expressions are **evaluated immediately** and **directly spliced** into the code string
2. **Other parameters** (captures, params) - Substituted with **unique placeholder identifiers**
3. The resulting code string **must be syntactically valid JS/TS** - it gets parsed!

**Phase 2: Template Application (happens each time template.apply() is called)**

When you call `template.apply()`, the placeholder identifiers are replaced with actual captured AST nodes.

**Example - What gets constructed:**

```typescript
const method: J.MethodDeclaration = /* some method */;
const args = capture({ variadic: true });

// ❌ WRONG - Invalid code will be constructed!
template`function f() ${method.body}`
// Constructs: "function f() <PLACEHOLDER_1>"
// This is INVALID - missing { } braces!
// Parser will fail during template construction

// ✅ CORRECT - Valid code will be constructed
template`function f() { ${method.body!.statements} }`
// Constructs: "function f() { <PLACEHOLDER_1> }"
// This is VALID - proper function body syntax
// Parser succeeds, placeholder replaced during apply()
```

**Why This Matters:**

The template string must represent **syntactically valid code structure**. Think of template parameters as placeholders that will be filled in later - the surrounding code must still parse correctly.

**Common Mistakes:**

```typescript
// ❌ Missing braces for block
template`function f() ${block}`
// Becomes: "function f() <ID>" - Invalid!

// ✅ Include the braces
template`function f() { ${block.statements} }`
// Becomes: "function f() { <ID> }" - Valid!

// ❌ Missing parentheses for arguments
template`foo${args}`
// Becomes: "foo<ID>" - Invalid function call!

// ✅ Include the parentheses
template`foo(${args})`
// Becomes: "foo(<ID>)" - Valid!

// ❌ Missing property access dot
template`obj${prop}`
// Becomes: "obj<ID>" - Invalid!

// ✅ Include the dot
template`obj.${prop}`
// Becomes: "obj.<ID>" - Valid!
```

**Using `raw()` for Dynamic Code:**

Since `raw()` strings are spliced in at construction time, they're perfect for dynamic code that comes from recipe options:

```typescript
const logLevel = this.logLevel;  // Recipe option: "info", "warn", "error"

// raw() evaluated at construction time
template`logger.${raw(logLevel)}(${msg})`
// Constructs: "logger.info(<ID>)" or "logger.warn(<ID>)" etc.
// The method name is baked into the template AST
```

**Key Principle:** Always ensure your template string, with placeholders substituted by identifiers, represents valid JavaScript/TypeScript syntax.

### Template Application

```typescript
const tmpl = template`foo.bar(${capture()})`;

// Apply template with match result
const result = await tmpl.apply(
    cursor,      // Current cursor position
    node,        // Node being replaced
    matchResult  // Captures from pattern match
);
```

### Property Access on Captures

Navigate AST structure within templates:

```typescript
const method = capture<J.MethodInvocation>('method');

// Access properties
template`${method.name}`  // Just the method name

// Deep property access
template`${method.name.simpleName}`  // String name

// Select (receiver)
template`${method.select}`  // The object being called on

// Complex navigation
template`foo(${method.select.name}, ${method.name})`
```

**Available Properties (examples):**
- `J.MethodInvocation`: `select`, `name`, `arguments`
- `J.Identifier`: `simpleName`, `name`
- `J.FieldAccess`: `target`, `name`
- `J.Binary`: `left`, `operator`, `right`

### Parameters

Use `param()` for template-only values not from captures:

```typescript
import {param} from "@openrewrite/rewrite/javascript";

const newName = param('newName');

const tmpl = template`function ${newName}() { ... }`;

// Apply with parameters
await tmpl.apply(cursor, node, matchResult, {
    [newName]: someValue
});
```

### Raw Code Insertion

Use `raw()` to insert literal code strings into templates at construction time. This is useful when you need to dynamically generate code based on recipe options or runtime values.

```typescript
import {raw, template} from "@openrewrite/rewrite/javascript";

// Example: Recipe option determines the log level
class MyRecipe extends Recipe {
    @Option({
        displayName: "Log level",
        description: "The logging level to use",
        example: "info"
    })
    logLevel!: string;

    constructor(options?: { logLevel?: string }) {
        super(options);
        this.logLevel ??= 'info';
    }

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        // Template constructed with dynamic method name
        const logLevel = this.logLevel;

        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                const msg = capture('msg');
                const pat = pattern`console.log(${msg})`;
                const match = await pat.match(method, this.cursor);

                if (match) {
                    // Insert log level as raw code at construction time
                    return await template`logger.${raw(logLevel)}(${msg})`.apply(this.cursor, method, match);
                    // Produces: logger.info(...) or logger.warn(...) etc.
                }
                return method;
            }
        }
    }
}
```

**When to use `raw()` vs `param()` vs `capture()`:**

- **`raw(code)`** - Insert a **code string** at **template construction time**
  - Use for: method names, operators, field names from recipe options
  - Timing: Spliced into template before parsing
  - Example: `raw(this.logLevel)` → becomes part of template AST

- **`param(name)`** - Substitute an **AST node** at **template application time**
  - Use for: AST nodes passed as parameters to `apply()`
  - Timing: Replaced during template application
  - Example: `param('value')` → placeholder replaced when applying

- **`capture(name)`** - Reference **matched values** from patterns
  - Use for: Values captured by pattern matching
  - Timing: Replaced during template application with match results
  - Example: `capture('expr')` → bound to matched AST from pattern

**Additional `raw()` Examples:**

```typescript
// Build object literal from collected field names
const fields = ["userId", "timestamp", "status"];
template`{ ${raw(fields.join(', '))} }`
// Produces: { userId, timestamp, status }

// Dynamic import path
const modulePath = "./utils";
template`import { helper } from ${raw(`'${modulePath}'`)}`
// Produces: import { helper } from './utils'

// Configurable operator
const operator = ">=";
template`${capture('value')} ${raw(operator)} threshold`
// Produces: value >= threshold
```

**Safety Considerations:**
- No validation is performed on the code string
- The code must be syntactically valid at the position where it's inserted
- Recipe authors are trusted to provide valid code

### LST Container Types as Parameters

Templates support passing AST container types directly, enabling precise control over formatting and structure. This is often simpler and more readable than using patterns when you only need to preserve parts of the original AST.

**J.RightPadded<T>** - A node with trailing whitespace/comments:
```typescript
// Pass method select (receiver) directly
const selectExpr = method.select;  // J.RightPadded<Expression>
return await template`${selectExpr}.newMethod()`.apply(cursor, method);
```

**J.Container<T>** - A list of elements with delimiters:
```typescript
// Pass entire argument list with formatting
const args = method.arguments;  // J.Container<Expression>
return await template`newMethod(${args})`.apply(cursor, method);
```

**J.RightPadded<T>[]** - Array of right-padded elements:
```typescript
// Pass individual argument elements preserving their formatting
const argElements = method.arguments.elements;  // J.RightPadded<Expression>[]
return await template`foo(${argElements})`.apply(cursor, method);
```

These types preserve exact formatting, whitespace, and comments from the original AST.

### Complete Example: Direct AST Property Usage

When you know the exact structure you're transforming, directly referencing AST properties is often clearer than pattern matching:

```typescript
import {ExecutionContext} from "@openrewrite/rewrite";
import {JavaScriptVisitor, template} from "@openrewrite/rewrite/javascript";
import {J, isMethodInvocation, MethodMatcher} from "@openrewrite/rewrite/java";

export class BufferSliceToSubarray extends Recipe {
    name = "org.openrewrite.javascript.migrate.buffer-slice-to-subarray";
    displayName = "Use Buffer.subarray() instead of slice()";
    description = "Replace Buffer.slice() with Buffer.subarray()";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        const sliceMatcher = new MethodMatcher("Buffer slice(..)");

        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Match using MethodMatcher instead of patterns
                if (sliceMatcher.matches(method.methodType)) {
                    if (method.select) {
                        // Directly use AST properties in template:
                        // - method.select is J.RightPadded<Expression>
                        // - method.arguments is J.Container<Expression>
                        // Both preserve all original formatting
                        return await template`${method.select}.subarray(${method.arguments})`.apply(
                            this.cursor,
                            method
                        );
                    }
                }
                return method;
            }
        }
    }
}
```

**Why this approach works well:**
- No pattern matching overhead when structure is known
- More readable: `${method.select}.subarray(${method.arguments})`
- Preserves all formatting from `method.select` and `method.arguments`
- Type-safe: TypeScript knows the property types

**When to use this instead of patterns:**
- Transforming specific method calls with `MethodMatcher`
- Simple structural changes (rename method, reorder arguments)
- You need precise control over what's preserved vs. regenerated

### Configuring Templates and Patterns for Type Attribution

Templates and patterns can be configured with `context` and `dependencies` to enable proper type attribution. This is essential when your transformation uses types or functions that need to be resolved.

**Using `configure()` method:**

```typescript
import {capture, pattern, template} from "@openrewrite/rewrite/javascript";

// Configure a template with context and dependencies
// Note: dependencies should use @types/ packages for type definitions
const tmpl = template`isDate(${capture('value')})`
    .configure({
        context: [
            'import { isDate } from "util"'
        ],
        dependencies: {
            '@types/node': '^20.0.0'  // util is built-in, types from @types/node
        }
    });
```

**Context options:**

```typescript
interface TemplateOptions {
    // Import statements or other context code needed for type resolution
    context?: string[];

    // Package dependencies with versions
    dependencies?: Record<string, string>;
}
```

**Complete example with type attribution:**

```typescript
import {ExecutionContext, Recipe, TreeVisitor} from "@openrewrite/rewrite";
import {JavaScriptVisitor, capture, pattern, template} from "@openrewrite/rewrite/javascript";
import {J} from "@openrewrite/rewrite/java";

export class UseDateValidator extends Recipe {
    name = "org.openrewrite.javascript.migrate.use-date-validator";
    displayName = "Use date validator";
    description = "Replace custom date checks with library function";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        const value = capture('value');

        // Pattern doesn't need configuration for matching
        const pat = pattern`isValidDate(${value})`;

        // Template needs configuration for type attribution
        const tmpl = template`isDate(${value})`
            .configure({
                context: [
                    'import { isDate } from "date-fns"'
                ],
                dependencies: {
                    '@types/date-fns': '^2.6.0'  // Use @types/ for type definitions
                }
            });

        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                const match = await pat.match(method, this.cursor);
                if (match) {
                    return await tmpl.apply(this.cursor, method, match);
                }
                return method;
            }
        }
    }
}
```

**Multiple imports and dependencies:**

```typescript
const tmpl = template`
    const result = await fetch(${url});
    const data = await result.json();
    validate(data);
`.configure({
    context: [
        'import { fetch } from "node-fetch"',
        'import { validate } from "./validators"'
    ],
    dependencies: {
        '@types/node-fetch': '^2.6.0'  // Use @types/ packages for type definitions
    }
});
```

**When to use configuration:**
- Your template references external types or functions
- You need type information for the generated code
- You're adding imports that need to be resolved
- Your transformation depends on specific package versions

**When configuration is NOT needed:**
- Simple code restructuring (renaming, reordering)
- Template only uses captured values from the pattern
- No external types or imports are referenced

### Semantic Matching with Type Attribution

**🎯 KEY FEATURE:** When patterns are configured with `context` and `dependencies`, they use **semantic matching** based on type information, not just syntax. This means a single pattern can match multiple syntactic forms automatically.

**Example - Matching both qualified and unqualified calls:**

```typescript
import {ExecutionContext, Recipe, TreeVisitor} from "@openrewrite/rewrite";
import {JavaScriptVisitor, capture, pattern, template, rewrite} from "@openrewrite/rewrite/javascript";

export class MigrateReplServer extends Recipe {
    name = "org.openrewrite.nodejs.migrate-repl-server";
    displayName = "Migrate REPL Server API";
    description = "Migrate deprecated repl API usage";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        const rule = rewrite(() => {
            const args = capture({ variadic: true });
            return {
                // Configure pattern with context for semantic matching
                before: pattern`repl.REPLServer(${args})`.configure({
                    context: ['const repl = require("repl")'],
                    dependencies: {
                        '@types/node': '^20.0.0'
                    }
                }),
                after: template`repl.Server(${args})`
            };
        });

        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                return await rule.tryOn(this.cursor, method) || method;
            }
        }
    }
}
```

**What this pattern matches automatically:**

```typescript
// ✅ Matches qualified call
const repl = require("repl");
const server = new repl.REPLServer();

// ✅ ALSO matches unqualified call (semantic matching!)
const { REPLServer } = require("repl");
const server = new REPLServer();

// ✅ ALSO matches with import
import { REPLServer } from "repl";
const server = new REPLServer();

// ✅ ALSO matches with namespace import
import * as repl from "repl";
const server = new repl.REPLServer();
```

**Why semantic matching works:**
1. Pattern is configured with `context` that imports `repl`
2. Pattern matcher resolves the type of `repl.REPLServer` using context
3. When matching code, it checks if `REPLServer` resolves to the same type
4. If types match, the pattern matches - regardless of syntax differences

**Without configuration (syntax-only matching):**

```typescript
// ❌ Only matches exact syntax
const pat = pattern`repl.REPLServer(${args})`;  // No configure()

// Matches: repl.REPLServer()
// Does NOT match: REPLServer() (different syntax)
```

**Benefits of semantic matching:**
- **One pattern matches many forms** - No need to write separate patterns for each import style
- **More robust** - Works with different import styles (require, import, destructuring)
- **Type-safe** - Only matches when types actually match, preventing false positives
- **Simpler recipes** - Less pattern matching code to maintain

**Best practice:** Always configure patterns with `context` and `dependencies` when matching API calls or type-specific code. This enables powerful semantic matching instead of brittle syntax matching.

## The rewrite() Helper

The `rewrite()` function creates a reusable transformation rule that combines pattern matching and template application. It's ideal for simple pattern-to-template substitutions but has limitations for complex transformations.

```typescript
import {rewrite, capture, pattern, template} from "@openrewrite/rewrite/javascript";

protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Create a rewrite rule with a builder function
    const rule = rewrite(() => {
        const methodName = capture();
        const args = capture({ variadic: true });
        return {
            before: pattern`oldApi.${methodName}(${args})`,
            after: template`newApi.${methodName}Async(${args})`
        };
    });

    // Try to apply the rule
    return await rule.tryOn(this.cursor, method) || method;
}
```

**What `rewrite()` does:**
1. Takes a builder function that returns a `RewriteConfig` object
2. Returns a `RewriteRule` that can be applied to AST nodes
3. The rule's `tryOn()` method tries to match the pattern and applies the template
4. Returns the transformed node or `undefined` if no match

**Best for:** Simple pattern-to-template substitutions where one AST subtree is replaced with another.

**Limitations:** Cannot handle:
- Complex conditional logic based on captured values
- Multiple templates selected dynamically
- Inspecting captured values before deciding on transformation
- Side effects (e.g., collecting statistics, adding markers)
- Combining pattern matching with manual AST manipulation

**Builder function pattern:**
```typescript
const rule = rewrite(() => {
    // Define captures inside the builder
    const x = capture();
    return {
        before: pattern`...`,   // Pattern to match
        after: template`...`    // Template to apply
    };
});

// Apply with tryOn()
return await rule.tryOn(this.cursor, node) || node;
```

### When to Use `rewrite()` vs Direct Pattern/Template

**Use `rewrite()` when:**
- Transformation is a straightforward A → B substitution
- No conditional logic needed beyond pattern matching
- Single template applies to all matches
- Composing multiple simple transformations with `orElse()`/`andThen()`

**Use direct `pattern`/`template` when:**
- Need conditional logic based on captured values
- Different templates for different conditions
- Combining pattern matching with other transformations
- Inspecting matched values before deciding what to do
- Need side effects (tracking, logging, markers)
- Building templates dynamically from captured data

**Example requiring direct pattern/template approach:**

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

    // Complex conditional logic - can't use rewrite() for this
    let tmpl;
    if (nameNode.simpleName.startsWith('get')) {
        tmpl = template`newApi.${methodName}Sync(${args})`;
    } else if (nameNode.simpleName.startsWith('set')) {
        // Different template with extra parameter
        tmpl = template`newApi.${methodName}Async(${args}, callback)`;
    } else if (nameNode.simpleName.includes('Stream')) {
        // Yet another template
        tmpl = template`newApi.stream.${methodName}(${args})`;
    } else {
        // Don't transform
        return method;
    }

    return await tmpl.apply(this.cursor, method, match);
}
```

**Key difference:** `rewrite()` is declarative (what to transform) while direct pattern/template is procedural (how to transform). Use whichever fits your transformation's complexity.

### rewrite() with Conditional Logic

Add context-aware validation with the `where` predicate. This provides some flexibility but is still limited to yes/no decisions - you cannot choose different templates based on conditions:

```typescript
import {_} from "@openrewrite/rewrite/javascript";

const rule = rewrite(() => {
    const promise = _('promise');
    return {
        before: pattern`await ${promise}`,
        after: template`await ${promise}.catch(handleError)`,
        // Only apply inside async functions
        where: (node, cursor) => {
            const method = cursor.firstEnclosing((n): n is J.MethodDeclaration =>
                n.kind === J.Kind.MethodDeclaration
            );
            return method?.modifiers.some(m => m.type === 'async') ?? false;
        }
    };
});

return await rule.tryOn(this.cursor, method) || method;
```

The `where` predicate receives:
- `node`: The matched AST node
- `cursor`: Cursor at the matched node for context inspection
- Returns: `true` to apply transformation, `false` to skip

**Limitation:** The `where` predicate only decides whether to apply the transformation - it cannot select between different templates. For that, use the direct pattern/template approach.

**Post-transformation modifications:**

You can modify the result of a `rewrite()` transformation, but this is often a sign that direct pattern/template would be cleaner:

```typescript
const rule = rewrite(() => {
    const methodName = capture();
    const args = capture({ variadic: true });
    return {
        before: pattern`api.${methodName}(${args})`,
        after: template`newApi.${methodName}(${args})`
    };
});

const result = await rule.tryOn(this.cursor, method);

if (result) {
    // Additional transformation after rewrite
    // This works, but direct pattern/template might be clearer
    return produce(result, draft => {
        // Modify draft
    });
}

return method;
```

**Note:** If you need post-transformation modifications, consider whether the direct pattern/template approach would be more straightforward.

### Combining Rules

Rules can be composed using `andThen()` and `orElse()` for cleaner chaining:

**Using `orElse()` for fallback behavior:**

```typescript
// Try first rule, if it doesn't match try second rule
const rule1 = rewrite(() => {
    const args = capture({ variadic: true });
    return {
        before: pattern`console.log(${args})`,
        after: template`logger.info(${args})`
    };
});

const rule2 = rewrite(() => {
    const args = capture({ variadic: true });
    return {
        before: pattern`console.error(${args})`,
        after: template`logger.error(${args})`
    };
});

// Combine: try rule1, if no match try rule2
const combinedRule = rule1.orElse(rule2);
return await combinedRule.tryOn(this.cursor, method) || method;
```

**Using `andThen()` for sequential transformations:**

```typescript
// Apply first rule, then apply second rule to the result
const addAwait = rewrite(() => {
    const call = capture();
    return {
        before: pattern`fetch(${call})`,
        after: template`await fetch(${call})`
    };
});

const addErrorHandling = rewrite(() => {
    const expr = capture();
    return {
        before: pattern`await ${expr}`,
        after: template`await ${expr}.catch(handleError)`
    };
});

// Combine: apply addAwait, then apply addErrorHandling to result
const combinedRule = addAwait.andThen(addErrorHandling);
return await combinedRule.tryOn(this.cursor, method) || method;
```

**Chaining multiple rules:**

```typescript
const rule1 = rewrite(() => { /* ... */ });
const rule2 = rewrite(() => { /* ... */ });
const rule3 = rewrite(() => { /* ... */ });

// Try rule1, fallback to rule2, fallback to rule3
const combined = rule1.orElse(rule2).orElse(rule3);
return await combined.tryOn(this.cursor, method) || method;

// Or apply sequentially
const sequential = rule1.andThen(rule2).andThen(rule3);
return await sequential.tryOn(this.cursor, method) || method;
```

**Comparison with manual approach:**

```typescript
// Manual approach (verbose)
let result = await rule1.tryOn(this.cursor, method);
if (!result) {
    result = await rule2.tryOn(this.cursor, method);
}
if (!result) {
    result = await rule3.tryOn(this.cursor, method);
}
return result || method;

// Using orElse() (cleaner)
const combined = rule1.orElse(rule2).orElse(rule3);
return await combined.tryOn(this.cursor, method) || method;
```

**When to use:**
- `orElse()` - When you have multiple alternative transformations (try each until one matches)
- `andThen()` - When transformations should be applied sequentially (pipeline pattern)
- Both can be chained for complex transformation logic

## Advanced Features

### Multiple Patterns

Try multiple patterns in sequence. While you can do this manually, prefer using `orElse()` for cleaner code (see [Combining Rules](#combining-rules)):

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Manual approach
    const rule1 = rewrite(() => {
        const methodName = capture();
        return {
            before: pattern`foo.${methodName}()`,
            after: template`bar.${methodName}()`
        };
    });
    let result = await rule1.tryOn(this.cursor, method);
    if (result) return result;

    const rule2 = rewrite(() => {
        const methodName = capture();
        const arg = capture();
        return {
            before: pattern`baz.${methodName}(${arg})`,
            after: template`qux.${methodName}(${arg})`
        };
    });
    result = await rule2.tryOn(this.cursor, method);
    if (result) return result;

    return method;
}
```

**Better approach using `orElse()`:**

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    const rule1 = rewrite(() => {
        const methodName = capture();
        return {
            before: pattern`foo.${methodName}()`,
            after: template`bar.${methodName}()`
        };
    });

    const rule2 = rewrite(() => {
        const methodName = capture();
        const arg = capture();
        return {
            before: pattern`baz.${methodName}(${arg})`,
            after: template`qux.${methodName}(${arg})`
        };
    });

    // Cleaner: try rule1, if no match try rule2
    return await rule1.orElse(rule2).tryOn(this.cursor, method) || method;
}
```

### Pattern Tables

For many similar transformations, create multiple rules:

```typescript
async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
    // Create rewrite rules for each transformation
    const rules = [
        rewrite(() => {
            const args = capture({ variadic: true });
            return {
                before: pattern`oldMethod1(${args})`,
                after: template`newMethod1(${args})`
            };
        }),
        rewrite(() => {
            const args = capture({ variadic: true });
            return {
                before: pattern`oldMethod2(${args})`,
                after: template`newMethod2(${args})`
            };
        }),
        // ... more transformations
    ];

    return new class extends JavaScriptVisitor<ExecutionContext> {
        protected async visitMethodInvocation(
            method: J.MethodInvocation,
            ctx: ExecutionContext
        ): Promise<J | undefined> {
            // Try each rule in sequence
            for (const rule of rules) {
                const result = await rule.tryOn(this.cursor, method);
                if (result) return result;
            }
            return method;
        }
    }
}
```

### Conditional Templates

Select template based on captured values:

```typescript
const method = capture<J.Identifier>('method');
const args = capture({ variadic: true });

const pat = pattern`api.${method}(${args})`;
const match = await pat.match(node, this.cursor);

if (match) {
    const methodName = match.get(method);

    let tmpl;
    if (isIdentifier(methodName) &&
        methodName.simpleName.startsWith('get')) {
        tmpl = template`newApi.${method}Sync(${args})`;
    } else {
        tmpl = template`newApi.${method}Async(${args})`;
    }

    return await tmpl.apply(this.cursor, node, match);
}
```

### Nested Patterns

Match nested structures:

```typescript
const inner = capture('inner');
const outer = capture('outer');

// Match: outer(inner())
const pat = pattern`${outer}(${inner}())`;

const match = await pat.match(node, cursor);
if (match) {
    // Transform: outer(inner()) -> newOuter(newInner())
    const innerName = match.get(inner);
    const outerName = match.get(outer);
    // ... construct new template
}
```

### Builder API for Dynamic Construction

When patterns/templates need to be constructed dynamically:

```typescript
function buildPattern(methodNames: string[]): Pattern {
    const builder = new PatternBuilder();

    // Build pattern dynamically
    builder.add(methodNames[0]);
    for (let i = 1; i < methodNames.length; i++) {
        builder.add('.');
        builder.add(methodNames[i]);
    }
    builder.add('(');
    builder.addCapture(capture({ variadic: true }));
    builder.add(')');

    return builder.build();
}

// Use: buildPattern(['obj', 'nested', 'method'])
// Creates: pattern`obj.nested.method(${capture({ variadic: true })})`
```

### Type Checking in Patterns

**Important:** By default, pattern matching uses **lenient type checking**. This means patterns will match code even when types don't exactly match, which is useful during development and prototyping.

#### Default Lenient Behavior

```typescript
// Pattern with lenient type checking (default)
const pat = pattern`someApi.method(${capture()})`;

// Will match all of these despite different types:
// - someApi.method(42)          // number literal
// - someApi.method("string")    // string literal
// - someApi.method(variable)    // identifier
// - someApi.method(obj.prop)    // field access
```

#### Strict Type Checking

To enforce strict type checking, set `lenientTypeMatching` to `false`:

```typescript
// Enable strict type checking
const pat = pattern`someApi.method(${capture()})`
    .configure({
        lenientTypeMatching: false  // Enforce exact type matches
    });

// Now pattern only matches if types align exactly
```

#### Configuration Options

```typescript
const pat = pattern`...`.configure({
    // Type matching mode
    lenientTypeMatching?: boolean,  // Default: true (lenient matching)

    // Other configuration options
    context?: [...],          // Import context for type resolution
    dependencies?: {...}      // Package dependencies for type attribution
});
```

#### When to Use Each Mode

**Use Lenient (default, `lenientTypeMatching: true`):**
- During initial development and prototyping
- When matching patterns across different type contexts
- For flexible transformations that work with various types
- When exact type information isn't critical
- When patterns without type annotations should match typed code

**Use Strict (`lenientTypeMatching: false`):**
- For type-sensitive transformations
- When ensuring type safety is critical
- In production recipes requiring exact type matches
- When working with overloaded methods where type matters
- When both pattern and target must have matching type annotations

```typescript
// Example: Strict mode for overloaded method disambiguation
const datePattern = pattern`new Date(${capture()})`
    .configure({
        lenientTypeMatching: false,  // Only match Date constructors with correct arg types
        context: ['// Date constructor context']
    });
```

**Note:** While lenient mode is convenient for development, consider using strict type checking in production recipes where type safety is important.

## Common Pitfalls

### Pitfall 1: Type Parameter Doesn't Enforce Types

```typescript
// ❌ WRONG - Type parameter is documentation only!
const x = capture<J.Literal>();
pattern`${x}`.match(someIdentifier, cursor);  // WILL match even though not a literal!

// ✅ CORRECT - Use constraint for runtime enforcement
import {isLiteral} from "@openrewrite/rewrite/java";

const x = capture<J.Literal>({
    constraint: isLiteral
});
```

### Pitfall 2: Forgetting Variadic for Arguments

```typescript
// ❌ WRONG - Won't match multi-argument calls
pattern`foo(${capture()}, ${capture()})`  // Only matches 2 args exactly

// ✅ CORRECT - Variadic matches any number
pattern`foo(${capture({ variadic: true })})`  // Matches 0+ args
```

### Pitfall 3: Not Handling Match Failure

```typescript
// ❌ WRONG - match() returns undefined if no match
const match = await pat.match(node, cursor);
const value = match.get(capture());  // TypeError if match is undefined!

// ✅ CORRECT - Always check match result
const match = await pat.match(node, cursor);
if (match) {
    const value = match.get(capture());
    // ...
}
```

### Pitfall 4: Reusing Captures Incorrectly

```typescript
// ❌ WRONG - Different capture objects
pattern`${capture()} + ${capture()}`
template`${capture()} * 2`  // These are different captures!

// ✅ CORRECT - Reuse the same capture object
const x = capture();
pattern`${x} + ${x}`  // Both positions reference same value
template`${x} * 2`     // Same capture used in template
```

### Pitfall 5: Incorrect Property Access

```typescript
const method = capture<J.MethodInvocation>();

// ❌ WRONG - Not all nodes have all properties
template`${method.name.simpleName}`  // Might fail if name isn't J.Identifier

// ✅ CORRECT - Use constraints to ensure type
import {isMethodInvocation, isIdentifier} from "@openrewrite/rewrite/java";

const method = capture<J.MethodInvocation>({
    constraint: (n) =>
        isMethodInvocation(n) &&
        isIdentifier(n.name)
});
template`${method.name.simpleName}`  // Safe now
```

### Pitfall 6: Not Using Cursor Context

```typescript
// ❌ WRONG - Template needs cursor context for proper attribution
await tmpl.apply(null, node, match);  // Might not type-attribute properly

// ✅ CORRECT - Always pass current cursor
await tmpl.apply(this.cursor, node, match);
```

## Performance Tips

1. **Reuse capture objects** - Create captures once, reuse in pattern and template
2. **Use structural patterns first** - Narrow scope with patterns before complex logic
3. **Cache compiled patterns** - Don't recreate pattern objects in hot paths
4. **Prefer `any()` over unused captures** - Slightly more efficient
5. **Use constraints sparingly** - They're evaluated after structural match succeeds
