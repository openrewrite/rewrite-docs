# LST Core Concepts

Understanding the Lossless Semantic Tree (LST) structure and wrapper types.

## Table of Contents

1. [What is LST?](#what-is-lst)
2. [Immutability and Change Detection](#immutability-and-change-detection) **(CRITICAL)**
3. [Wrapper Types](#wrapper-types)
4. [Spacing and Formatting](#spacing-and-formatting)
5. [Markers](#markers)
6. [Utility Functions](#utility-functions)
7. [Creating AST Elements](#creating-ast-elements)
   - [Using Object Literals](#using-object-literals)
   - [Using the `template` Tagged Template](#using-the-template-tagged-template)
   - [Choosing Between Approaches](#choosing-between-approaches)
8. [Working with Wrappers](#working-with-wrappers)
9. [Common Patterns](#common-patterns)
   - [Pattern 1: Navigate to Actual Element](#pattern-1-navigate-to-actual-element)
   - [Pattern 2: Preserve Formatting](#pattern-2-preserve-formatting-with-direct-wrapper-usage)
   - [Pattern 3: Check Wrapper Existence](#pattern-3-check-wrapper-existence)
   - [Pattern 4: Iterate Container Elements](#pattern-4-iterate-container-elements)
   - [Pattern 5: Modify Spacing](#pattern-5-modify-spacing)
   - [Pattern 6: Filter/Remove Elements (CRITICAL)](#pattern-6-filterremove-elements-from-container-critical)

## What is LST?

LST (Lossless Semantic Tree) is OpenRewrite's AST representation that preserves **all** source code information:

- **Semantic structure** - Type information, AST hierarchy
- **Syntactic details** - Exact formatting, whitespace
- **Comments** - All comment styles preserved
- **Source positions** - Exact character locations

**Key principle:** Parse → Transform → Print produces identical output when no changes are made.

```typescript
// Original source
const   x  =  1  ;  // comment

// After parse → print (identical)
const   x  =  1  ;  // comment
```

### JavaScript/TypeScript LST Model

The JavaScript/TypeScript LST model reuses the Java LST model (`J`) where possible and only introduces new types (`JS`) when necessary.

**Shared from Java (`J`):**
- Method invocations (`J.MethodInvocation`)
- Identifiers (`J.Identifier`)
- Literals (`J.Literal`)
- Binary operations (`J.Binary`)
- Variable declarations (`J.VariableDeclarations`)
- If statements (`J.If`)
- Class declarations (`J.ClassDeclaration`)
- Method declarations (`J.MethodDeclaration`)
- Many other common structures

**JavaScript-specific (`JS`):**
- Arrow functions (`J.Lambda` - reused, but with JS-specific printing)
- Template literals (`JS.TemplateLiteral`)
- JSX elements (`JSX.Tag`, `JSX.Attribute`)
- Await expressions (`JS.Await`)
- TypeScript-specific types (`JS.TypeOperator`, `JS.MappedType`)
- Export/Import statements (`JS.Export`, `JS.Import`)

**Why this matters:**
- Recipes can use familiar `J.*` types for common structures
- Most visitor methods work on `J.*` types
- JavaScript-specific features are in `JS.*` namespace
- TypeScript is treated as JavaScript with type annotations

**Example:**
```typescript
// These are J types (shared with Java)
J.MethodInvocation     // foo()
J.Identifier           // foo
J.Literal              // 42, "string", true
J.Binary               // a + b
J.If                   // if (condition) { }

// These are JS types (JavaScript-specific)
JS.Await               // await promise
JS.TemplateLiteral     // `hello ${name}`
JSX.Tag                // <div>...</div>
JS.Export              // export const x = 1
```

This design allows OpenRewrite to leverage existing infrastructure while supporting JavaScript/TypeScript-specific features.

## Immutability and Change Detection

**CRITICAL CONCEPT:** OpenRewrite uses **referential equality** (`===`) to detect changes made by visitors.

### How Change Detection Works

When a visitor method returns:
- **Same object reference** (`node === result`) → No change detected, original node preserved
- **Different object reference** (`node !== result`) → Change detected, transformed node used

```typescript
protected async visitLiteral(
    literal: J.Literal,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (literal.value === 0) {
        // Return SAME object → OpenRewrite knows nothing changed
        return literal;
    }

    // Return DIFFERENT object → OpenRewrite detects a change
    return produce(literal, draft => {
        draft.value = literal.value + 1;
    });
}
```

### Why This Matters

1. **Performance** - OpenRewrite skips reprinting unchanged subtrees
2. **Correctness** - Only modified code is affected
3. **Tracking** - OpenRewrite knows exactly what changed

### Why Use Immer

**OpenRewrite visitor methods are async** - they return `Promise<T>` to support async operations like pattern matching and type resolution. This is why Immer is essential for LST transformations.

Immer's `produce()` is **strongly recommended** because it automatically handles referential equality:

```typescript
import {produce} from "immer";

// ✅ CORRECT - Immer returns original if no changes made
const result = produce(node, draft => {
    // If you don't modify draft, immer returns original node
    // referential equality is preserved!
});

// result === node if no modifications were made
// result !== node only if draft was actually modified
```

**Immer guarantees:**
- If you modify the draft → returns new object (`result !== original`)
- If you don't modify the draft → returns original object (`result === original`)
- You never need to manually check "did I change anything?"

### Why `produceAsync()` is Provided

Since visitor methods are async and many operations (pattern matching, type checks) require `await`, OpenRewrite provides `produceAsync()`:

```typescript
import {produceAsync} from "@openrewrite/rewrite";

// ✅ Use produceAsync() for async operations
protected async visitMethodDeclaration(
    method: J.MethodDeclaration,
    ctx: ExecutionContext
): Promise<J | undefined> {
    return await produceAsync(method, async draft => {
        // Can use await here for pattern matching!
        const match = await pattern.match(draft.body.statements[0], this.cursor);

        if (match) {
            draft.body.statements = []; // Modify based on async check
        }
        // produceAsync() still preserves referential equality
    });
}
```

**When to use each:**
- **`produce()`** - For synchronous transformations (use regular immer)
- **`produceAsync()`** - For async transformations (pattern matching, type checks, etc.) - import from `@openrewrite/rewrite`

Both preserve referential equality automatically!

### Manual Immutability (NOT Recommended)

Without immer, you must manually preserve referential equality:

```typescript
// ❌ BAD - Always creates new object even if no change needed
return {
    ...literal,
    value: literal.value  // Same value but new object!
};
// This tells OpenRewrite there was a change even though value is identical

// ✅ BETTER - Manual check
if (literal.value !== newValue) {
    return {...literal, value: newValue};  // Changed
}
return literal;  // Unchanged - same reference
```

**Always prefer immer's `produce()`** - it handles this automatically and correctly.

### Example: Conditional Transformation

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Check if this needs transformation
    if (!shouldTransform(method)) {
        // Return original → no change detected
        return method;
    }

    // Use produce() → automatically handles referential equality
    return produce(method, draft => {
        // Only modify if needed
        if (draft.select) {
            draft.select.element = newExpression;
        }
        // If no modifications happen in this branch,
        // immer returns original method
    });
}
```

### Key Takeaways

1. **OpenRewrite uses `===` for change detection** - Same reference = no change
2. **Visitor methods are async** - They return `Promise<T>` to support pattern matching and type resolution
3. **Use `produceAsync()` for async operations** - Pattern matching, type checks, etc. (import from `@openrewrite/rewrite`)
4. **Use `produce()` for synchronous operations** - Simple transformations without async logic (from `immer`)
5. **Both preserve referential equality** - Automatically return original if no modifications made
6. **Return original object when no changes** - Don't create unnecessary new objects
7. **Never manually spread/copy unless necessary** - Let immer decide
8. **Performance benefit** - Unchanged subtrees are not reprinted

This is why the pattern examples throughout this guide always use `produce()` or `produceAsync()` - they're the safest and most efficient way to transform LST nodes.

## Wrapper Types

LST uses wrapper types to attach formatting information to elements. These wrappers are generic containers that hold both the element and its associated spacing.

### J.RightPadded\<T>

Wraps an element with **trailing** space and comments (space that comes **after** the element).

```typescript
interface RightPadded<T> {
    element: T;           // The wrapped element - ALWAYS use .element to access!
    after: J.Space;       // Trailing whitespace and comments
    markers: Markers;     // Metadata markers
}
```

**IMPORTANT:** When navigating the LST model, you must use the `.element` property to access the actual element inside the wrapper.

**When used:**
- Method invocation select: `obj.method()` - space after `obj`
- Binary operation left/right sides
- Individual elements in lists (with comma after)

**Example:**
```typescript
// In: obj  /* comment */ .method()
const select: J.RightPadded<Expression> = method.select;
// select.element = Identifier("obj")  ← Access via .element property
// select.after = Space with "  /* comment */ "

// ✅ Correct - Access the element
if (isIdentifier(select.element)) {
    console.log(select.element.simpleName);
}

// ❌ Wrong - Don't use the wrapper directly
if (isIdentifier(select)) {  // Type error! select is RightPadded, not Identifier
    // ...
}
```

**Visitor method:**
```typescript
protected async visitRightPadded<T extends J>(
    right: J.RightPadded<T>,
    p: ExecutionContext
): Promise<J.RightPadded<T>> {
    // Visit the element and preserve spacing
    return await super.visitRightPadded(right, p);
}
```

### J.LeftPadded\<T>

Wraps an element with **leading** space and comments (space that comes **before** the element).

```typescript
interface LeftPadded<T> {
    before: J.Space;      // Leading whitespace and comments
    element: T;           // The wrapped element
    markers: Markers;     // Metadata markers
}
```

**When used:**
- Binary operator: the operator token itself
- Ternary operator parts
- Array access index

**Example:**
```typescript
// In: x  +  y
const binary: J.Binary = ...;
// binary.operator.before = Space with "  "
// binary.operator.element = Operator.Add
```

**Visitor method:**
```typescript
protected async visitLeftPadded<T extends J>(
    left: J.LeftPadded<T>,
    p: ExecutionContext
): Promise<J.LeftPadded<T>> {
    // Visit the element and preserve spacing
    return await super.visitLeftPadded(left, p);
}
```

### J.Container\<T>

Represents a **delimited list** of elements with opening/closing markers and separators.

```typescript
interface Container<T extends J> {
    before: J.Space;              // Space before opening delimiter
    markers: Markers;             // Metadata markers
    elements: J.RightPadded<T>[]; // List elements (each with trailing space)
}
```

**When used:**
- Method arguments: `foo(a, b, c)`
- Array elements: `[1, 2, 3]`
- Type parameters: `Map<K, V>`

**Example:**
```typescript
// In: foo( a , b , c )
const args: J.Container<Expression> = method.arguments;
// args.before = { kind: J.Kind.Space, comments: [], whitespace: " " }  // Space AFTER "("
// args.elements[0].element = Identifier("a")
// args.elements[0].after = { kind: J.Kind.Space, comments: [], whitespace: " " }  // Space AFTER "a" (before comma)
// args.elements[1].element = Identifier("b")
// args.elements[1].after = { kind: J.Kind.Space, comments: [], whitespace: " " }  // Space AFTER "b" (before comma)
// args.elements[2].element = Identifier("c")
// args.elements[2].after = { kind: J.Kind.Space, comments: [], whitespace: " " }  // Space AFTER "c" (before ")")
```

**Important:** Delimiters like `(`, `)`, `,` are **NOT** stored in the LST. The printer adds them based on context:
- Opening delimiter (e.g., `(`) is printed before `container.before`
- Commas are printed between elements
- Closing delimiter (e.g., `)`) is printed after the last element's `after` space

**Visitor method:**
```typescript
protected async visitContainer<T extends J>(
    container: J.Container<T>,
    p: ExecutionContext
): Promise<J.Container<T>> {
    // Visit all elements in the container
    return await super.visitContainer(container, p);
}
```

## Spacing and Formatting

### The `prefix` Property

**Every LST element** has a `prefix` property of type `J.Space` containing the whitespace and comments **before** that element.

```typescript
interface J {
    prefix: J.Space;     // Whitespace and comments before this element
    markers: Markers;    // Metadata markers
    // ... other properties
}
```

### J.Space

Represents whitespace and comments:

```typescript
interface Space {
    kind: typeof J.Kind.Space;  // Type discriminant
    comments: Comment[];        // List of comments in this space
    whitespace: string;         // Actual whitespace characters
}
```

**Example:**
```typescript
// In:
//   // Line comment
//   const x = 1;

const varDecl: J.VariableDeclarations = ...;
// varDecl.prefix = {
//     kind: J.Kind.Space,
//     comments: [{
//         kind: J.Kind.TextComment,
//         text: " Line comment",  // No "//" prefix
//         multiline: false,
//         suffix: "\n",
//         markers: emptyMarkers
//     }],
//     whitespace: "  "  // Leading spaces before "const"
// }
```

### Comment Types

Comments are preserved with their exact content and style:

```typescript
interface TextComment extends Comment {
    kind: typeof J.Kind.TextComment;  // Type discriminant
    text: string;                     // Comment content (WITHOUT delimiters like // or /* */)
    multiline: boolean;               // true for /* */, false for //
    suffix: string;                   // Whitespace immediately after the comment (often empty)
    markers: Markers;                 // Metadata markers
}
```

**Important:** The `text` field contains **only the comment content**, not the delimiters (`//`, `/*`, `*/`). The parser strips these during parsing.

**Example:**
```typescript
// Source: "// This is a comment\n"
{
    kind: J.Kind.TextComment,
    text: " This is a comment",  // Note: no "//" prefix
    multiline: false,
    suffix: "\n",
    markers: emptyMarkers
}

// Source: "/* comment */ "
{
    kind: J.Kind.TextComment,
    text: " comment ",  // Note: no "/*" or "*/" delimiters
    multiline: true,
    suffix: " ",
    markers: emptyMarkers
}

// Often suffix is empty and whitespace is in next element's prefix
// Source: "// comment" followed by "\nconst x = 1;"
{
    kind: J.Kind.TextComment,
    text: " comment",
    multiline: false,
    suffix: "",  // Empty - the \n is in the next element's prefix
    markers: emptyMarkers
}
```

## Markers

Markers attach metadata to LST elements without modifying the tree structure. They are used for:
- Marking search results
- Storing transformation metadata
- Tracking recipe execution state
- Attaching custom data to elements

### Markers Structure

```typescript
interface Markers {
    kind: typeof MarkersKind.Markers;  // Type discriminant
    id: UUID;                          // Unique identifier
    markers: Marker[];                 // Array of marker instances
}

interface Marker {
    kind: string;  // Marker type identifier
    id: UUID;      // Unique identifier
    // ... additional marker-specific properties
}
```

### Common Marker Types

**SearchResult** - Marks elements found by search recipes:

```typescript
interface SearchResult extends Marker {
    kind: typeof MarkersKind.SearchResult;
    description?: string;  // Optional description of what was found
}
```

**Example:**
```typescript
import {findMarker, MarkersKind} from "@openrewrite/rewrite";

// Check if an element has a SearchResult marker
const searchResult = findMarker(element, MarkersKind.SearchResult);
if (searchResult) {
    console.log("Found:", searchResult.description);
}
```

### Working with Markers

**Finding markers:**
```typescript
import {findMarker, MarkersKind} from "@openrewrite/rewrite";

// Find a specific marker type
const searchResult = findMarker<SearchResult>(
    element,
    MarkersKind.SearchResult
);
```

**Adding markers (with produce):**
```typescript
import {produce} from "immer";
import {marker, markers, randomId} from "@openrewrite/rewrite";

// Add a custom marker
return produce(element, draft => {
    const newMarker = marker(randomId(), {
        customProperty: "value"
    });

    draft.markers = markers(...draft.markers.markers, newMarker);
});
```

**Checking for markers:**
```typescript
// Check if element has any markers
if (element.markers.markers.length > 0) {
    // Has markers
}

// Check for specific marker type
const hasSearchResult = element.markers.markers.some(
    m => m.kind === MarkersKind.SearchResult
);
```

## Utility Functions

OpenRewrite provides utility functions for creating common LST structures:

### Space Utilities

**`emptySpace`** - Constant for space with no whitespace or comments:
```typescript
import {emptySpace} from "@openrewrite/rewrite/java";

const emptySpace: J.Space = {
    kind: J.Kind.Space,
    comments: [],
    whitespace: ""
};
```

**`singleSpace`** - Constant for a single space character:
```typescript
import {singleSpace} from "@openrewrite/rewrite/java";

const singleSpace: J.Space = {
    kind: J.Kind.Space,
    comments: [],
    whitespace: " "
};
```

**`space(whitespace: string)`** - Creates a Space with specific whitespace:
```typescript
import {space} from "@openrewrite/rewrite/java";

// Create space with newline and indentation
const indentedSpace = space("\n    ");
// Returns: { kind: J.Kind.Space, comments: [], whitespace: "\n    " }

// Create space with tabs
const tabbedSpace = space("\t\t");
```

### Markers Utilities

**`emptyMarkers`** - Constant for markers with no attached markers:
```typescript
import {emptyMarkers} from "@openrewrite/rewrite";

const emptyMarkers: Markers = {
    kind: MarkersKind.Markers,
    id: randomId(),
    markers: []
};
```

**`markers(...markers: Marker[])`** - Creates a Markers object:
```typescript
import {markers, marker, randomId} from "@openrewrite/rewrite";

// Create markers with one or more markers
const myMarkers = markers(
    marker(randomId(), { type: "custom" }),
    marker(randomId(), { type: "other" })
);
```

**`marker(id: UUID, data?: {})`** - Creates a generic marker:
```typescript
import {marker, randomId} from "@openrewrite/rewrite";

// Create a marker with custom data
const customMarker = marker(randomId(), {
    source: "my-recipe",
    timestamp: Date.now()
});
```

**`findMarker<T>(o: { markers: Markers }, kind: T["kind"])`** - Finds a marker by type:
```typescript
import {findMarker, MarkersKind} from "@openrewrite/rewrite";

// Find specific marker type
const searchResult = findMarker<SearchResult>(
    element,
    MarkersKind.SearchResult
);

if (searchResult) {
    console.log(searchResult.description);
}
```

### Container Utilities

**`emptyContainer<T>()`** - Creates an empty container:
```typescript
import {emptyContainer} from "@openrewrite/rewrite/java";

// Create empty argument list
const emptyArgs: J.Container<Expression> = emptyContainer();
// Returns: {
//     kind: J.Kind.Container,
//     before: emptySpace,
//     elements: [],
//     markers: emptyMarkers
// }
```

### When to Use Utility Functions

- **Use `emptySpace`** when creating new LST elements with no preceding whitespace
- **Use `singleSpace`** for normalized spacing between tokens
- **Use `space(whitespace)`** when you need specific whitespace (newlines, indentation)
- **Use `emptyMarkers`** when creating new LST elements that don't need markers
- **Use `markers(...)`** when building elements with multiple markers
- **Use `emptyContainer()`** when creating elements with empty lists (no arguments, no parameters)

**Example - Creating a method invocation from scratch:**
```typescript
import {emptySpace, singleSpace, space, emptyMarkers, emptyContainer} from "@openrewrite/rewrite/java";
import {J} from "@openrewrite/rewrite/java";

// Create: console.log()
const methodInvocation: J.MethodInvocation = {
    kind: J.Kind.MethodInvocation,
    prefix: emptySpace,
    markers: emptyMarkers,
    select: {
        element: {
            kind: J.Kind.Identifier,
            prefix: emptySpace,
            markers: emptyMarkers,
            simpleName: "console",
            type: null
        },
        after: emptySpace,
        markers: emptyMarkers
    },
    name: {
        kind: J.Kind.Identifier,
        prefix: emptySpace,
        markers: emptyMarkers,
        simpleName: "log",
        type: null
    },
    arguments: emptyContainer(),
    methodType: null
};
```

## Creating AST Elements

There are two primary ways to create new LST nodes in JavaScript/TypeScript recipes:

1. **Object literals with `kind` property** - For direct, low-level AST construction
2. **`template` tagged template** - For declarative, high-level code generation

**Important:** Unlike some AST frameworks, OpenRewrite does **not** provide dedicated factory functions for creating AST elements. Instead, you construct them using one of these two approaches.

### Using Object Literals

**⚠️ WARNING: This approach is NOT recommended for most use cases. Use templates instead (see next section).**

Create AST nodes directly using object literals with the corresponding `kind` property. This approach is extremely verbose and makes type attribution very difficult to get right. Use only for very simple cases like creating a single identifier or literal.

```typescript
import {emptySpace, singleSpace, emptyMarkers, emptyContainer} from "@openrewrite/rewrite/java";
import {J} from "@openrewrite/rewrite/java";

// Create an identifier
const identifier: J.Identifier = {
    kind: J.Kind.Identifier,
    prefix: emptySpace,
    markers: emptyMarkers,
    simpleName: "myVariable",
    type: null
};

// Create a literal
const literal: J.Literal = {
    kind: J.Kind.Literal,
    prefix: emptySpace,
    markers: emptyMarkers,
    value: 42,
    valueSource: "42",
    type: null
};

// Create a complex structure: console.log("hello")
const methodInvocation: J.MethodInvocation = {
    kind: J.Kind.MethodInvocation,
    prefix: emptySpace,
    markers: emptyMarkers,
    select: {
        element: {
            kind: J.Kind.Identifier,
            prefix: emptySpace,
            markers: emptyMarkers,
            simpleName: "console",
            type: null
        },
        after: emptySpace,
        markers: emptyMarkers
    },
    name: {
        kind: J.Kind.Identifier,
        prefix: emptySpace,
        markers: emptyMarkers,
        simpleName: "log",
        type: null
    },
    arguments: {
        kind: J.Kind.Container,
        before: emptySpace,
        markers: emptyMarkers,
        elements: [
            {
                element: {
                    kind: J.Kind.Literal,
                    prefix: emptySpace,
                    markers: emptyMarkers,
                    value: "hello",
                    valueSource: '"hello"',
                    type: null
                },
                after: emptySpace,
                markers: emptyMarkers
            }
        ]
    },
    methodType: null
};
```

**When to use object literals:**
- **Only for very simple cases** - single identifiers or literals
- Making small modifications to existing nodes with `produce()`

**Drawbacks:**
- **Extremely verbose** - Even simple structures require many lines of code
- **Type attribution is very difficult to get right** - Manual type construction is error-prone and complex
- Must manually handle all wrapper types and spacing
- Easy to create invalid AST structures
- Not recommended for anything beyond trivial nodes

### Using the `template` Tagged Template

Create AST nodes declaratively by writing code as a template string. The template system parses the code and generates a properly attributed AST. This is the **preferred approach** for most code generation.

```typescript
import {template} from "@openrewrite/rewrite/javascript";

// Simple template - creates console.log("hello")
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    return await template`console.log("hello")`.apply(this.cursor, method);
}
```

**With captured values:**
```typescript
import {capture, pattern, template} from "@openrewrite/rewrite/javascript";

const msg = capture('msg');
const pat = pattern`oldLogger(${msg})`;
const match = await pat.match(method, this.cursor);

if (match) {
    // Reuse captured value in new template
    return await template`console.log(${msg})`.apply(this.cursor, method, match);
}
```

**With type attribution configuration:**
```typescript
// Configure template with context for proper type attribution
const tmpl = template`isDate(${capture('value')})`
    .configure({
        context: [
            'import { isDate } from "util"'
        ],
        dependencies: {
            '@types/node': '^20.0.0'
        }
    });

return await tmpl.apply(this.cursor, method, match);
```

**When to use templates:**
- Generating new code from scratch (most common case)
- Transforming matched patterns
- Need automatic type attribution
- Want readable, maintainable code generation
- Replacing complex AST structures

**Benefits:**
- Concise and readable - write code as code, not as AST
- Automatic type attribution when configured
- Preserves formatting from captured values
- Less error-prone than manual construction
- Handles wrapper types automatically

### Choosing Between Approaches

**Use object literals ONLY when:**
- Creating very simple primitive nodes (single identifier or literal)
- Making small modifications to existing nodes with `produce()`
- **Warning:** Avoid object literals for anything more complex - type attribution is extremely difficult to get right manually

**Use templates when (almost always):**
- **Generating any expression or statement** (99% of cases)
- Replacing matched code patterns
- Need type information on generated code
- Creating anything beyond a single identifier or literal
- Readability and maintainability matter
- Working with any nested structures

**Example comparison:**

```typescript
// Object literal approach - verbose but precise
const call = {
    kind: J.Kind.MethodInvocation,
    prefix: emptySpace,
    markers: emptyMarkers,
    select: {
        element: {
            kind: J.Kind.Identifier,
            prefix: emptySpace,
            markers: emptyMarkers,
            simpleName: "logger",
            type: null
        },
        after: emptySpace,
        markers: emptyMarkers
    },
    name: {
        kind: J.Kind.Identifier,
        prefix: emptySpace,
        markers: emptyMarkers,
        simpleName: "info",
        type: null
    },
    arguments: {
        kind: J.Kind.Container,
        before: emptySpace,
        markers: emptyMarkers,
        elements: [
            {
                element: messageExpr,  // Existing expression
                after: emptySpace,
                markers: emptyMarkers
            }
        ]
    },
    methodType: null
};

// Template approach - concise and readable
const msg = capture('msg');
const match = await pattern`console.log(${msg})`.match(method, this.cursor);
if (match) {
    return await template`logger.info(${msg})`.apply(this.cursor, method, match);
}
```

**Recommendation:** **Always use templates unless you're creating a single, simple identifier or literal.** Object literals are extremely verbose and type attribution is very difficult to get right manually. Even for simple nodes, templates are often the better choice for correctness and maintainability.

For comprehensive documentation on templates, see [Pattern Matching and Templates](patterns-and-templates.md).

## Working with Wrappers

### Accessing Elements

Always access through wrapper properties:

```typescript
// ✅ Correct
const selectExpr = method.select.element;  // Access element inside RightPadded
const firstArg = method.arguments.elements[0].element;  // Access element inside Container

// ❌ Wrong - mixing wrapper and element
const selectExpr = method.select;  // This is J.RightPadded, not Expression
```

### Cursor Navigation

The cursor API has methods to handle wrappers:

```typescript
// Skip over wrapper types to get parent element
const parent = cursor.parentTree?.value;  // Skips RightPadded, Container, etc.

// Get immediate parent (may be a wrapper)
const immediateParent = cursor.parent?.value;
```

### Using Wrappers in Templates

Templates can accept wrapper types directly and will automatically extract/expand them:

```typescript
// J.RightPadded<Expression> - extracts element
const selectExpr = method.select;
return await template`${selectExpr}.newMethod()`.apply(cursor, method);
// Produces: obj.newMethod() (preserves formatting from select)

// J.Container<Expression> - expands all elements
const args = method.arguments;
return await template`newMethod(${args})`.apply(cursor, method);
// Produces: newMethod(a, b, c) (preserves all formatting)

// J.RightPadded<Expression>[] - expands array of elements
const argElements = method.arguments.elements;
return await template`foo(${argElements})`.apply(cursor, method);
// Produces: foo(a, b, c) (preserves element formatting)
```

See [Templates - LST Container Types](patterns-and-templates.md#lst-container-types-as-parameters) for more details.

### Modifying Wrappers with Immer

When modifying elements, use `produce()` to update wrappers immutably:

```typescript
import {produce} from "immer";

// Modify element inside RightPadded
return produce(method, draft => {
    if (draft.select) {
        draft.select = produce(draft.select, selectDraft => {
            // Modify selectDraft.element
            selectDraft.element = newExpression;
        });
    }
});

// Modify elements in Container
return produce(method, draft => {
    draft.arguments = produce(draft.arguments, argsDraft => {
        argsDraft.elements = argsDraft.elements.map(elem =>
            produce(elem, elemDraft => {
                // Modify elemDraft.element
                elemDraft.element = transformExpression(elemDraft.element);
            })
        );
    });
});
```

### Visitor Methods for Wrappers

Override wrapper visitor methods to transform elements while preserving formatting:

```typescript
class MyVisitor extends JavaScriptVisitor<ExecutionContext> {
    // Visit individual RightPadded elements
    protected async visitRightPadded<T extends J>(
        right: J.RightPadded<T>,
        p: ExecutionContext
    ): Promise<J.RightPadded<T>> {
        // Transform the wrapped element
        const element = await this.visit(right.element, p);

        // Return new RightPadded with transformed element
        return produce(right, draft => {
            draft.element = element as T;
        });
    }

    // Visit containers
    protected async visitContainer<T extends J>(
        container: J.Container<T>,
        p: ExecutionContext
    ): Promise<J.Container<T>> {
        // Visit all elements in the container
        const elements = await Promise.all(
            container.elements.map(elem => this.visitRightPadded(elem, p))
        );

        return produce(container, draft => {
            draft.elements = elements as J.RightPadded<T>[];
        });
    }
}
```

## Common Patterns

### Pattern 1: Navigate to Actual Element

When working with method invocations or other constructs with wrappers:

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Access the actual expression, not the wrapper
    const selectExpr = method.select?.element;  // RightPadded → element

    if (isIdentifier(selectExpr) && selectExpr.simpleName === "oldApi") {
        // Transform...
    }

    return method;
}
```

### Pattern 2: Preserve Formatting with Direct Wrapper Usage

Use wrappers directly in templates to preserve exact formatting:

```typescript
// Instead of pattern matching, use direct properties
const select = method.select;  // J.RightPadded<Expression>
const args = method.arguments;  // J.Container<Expression>

return await template`${select}.newMethod(${args})`.apply(cursor, method);
// Preserves all original spacing and comments
```

### Pattern 3: Check Wrapper Existence

Wrappers may be undefined (e.g., static method calls have no select):

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Check wrapper exists before accessing element
    if (method.select && isIdentifier(method.select.element)) {
        const receiver = method.select.element;
        // Safe to use receiver
    }

    return method;
}
```

### Pattern 4: Iterate Container Elements

When processing list elements:

```typescript
protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Iterate over arguments
    const args = method.arguments.elements;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i].element;  // Extract element from RightPadded

        if (isLiteral(arg)) {
            // Process literal argument
        }
    }

    return method;
}
```

### Pattern 5: Modify Spacing

Adjust whitespace or comments while preserving structure:

```typescript
import {produce} from "immer";

// Add a comment before an element
import {emptyMarkers} from "@openrewrite/rewrite";

return produce(stmt, draft => {
    draft.prefix = produce(draft.prefix, prefixDraft => {
        prefixDraft.comments = [
            ...prefixDraft.comments,
            {
                kind: J.Kind.TextComment,
                text: " Generated code",  // Note: no "//" prefix - just the content
                multiline: false,
                suffix: "\n",
                markers: emptyMarkers
            }
        ];
    });
});

// Adjust trailing space in RightPadded
return produce(method, draft => {
    if (draft.select) {
        draft.select = produce(draft.select, selectDraft => {
            selectDraft.after = produce(selectDraft.after, afterDraft => {
                afterDraft.whitespace = " ";  // Normalize to single space
            });
        });
    }
});
```

### Pattern 6: Filter/Remove Elements from Container (CRITICAL)

**Preferred Pattern:** Use `produceAsync()` to enable async operations (like pattern matching) inside the callback.

**Why `produceAsync()` is better:**
- **Supports async callbacks** - You can use `await` for pattern matching inside the callback
- **Keeps logic together** - All transformation logic in one place
- **Automatic referential equality** - Returns original if no modifications made
- **Cleaner code** - No need to build arrays outside and check lengths

```typescript
import {produceAsync} from "@openrewrite/rewrite";
import {J, Statement} from "@openrewrite/rewrite/java";

// ✅ PREFERRED - Use produceAsync() for async operations
protected async visitMethodDeclaration(
    method: J.MethodDeclaration,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (!method.body) return method;

    return await produceAsync(method, async draft => {
        if (draft.body) {
            const newStatements: J.RightPadded<Statement>[] = [];

            for (const stmt of draft.body.statements) {
                // ✅ Can use await here because produceAsync supports async!
                const match = await pattern.match(stmt.element, this.cursor);

                if (!match) {
                    newStatements.push(stmt);  // Keep non-matching statements
                }
            }

            // Only modify if we removed something (automatic referential equality)
            if (newStatements.length !== draft.body.statements.length) {
                draft.body.statements = newStatements;
            }
        }
    });
}
```

**Alternative Pattern:** If not using pattern matching or other async operations, build array outside `produce()`:

```typescript
import {produce} from "immer";

// ✅ ALTERNATIVE - Build filtered array outside produce() (synchronous operations)
protected async visitMethodDeclaration(
    method: J.MethodDeclaration,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if (!method.body) return method;

    // Build filtered array using original (non-draft) wrappers
    const newStatements: J.RightPadded<Statement>[] = [];

    for (const stmt of method.body.statements) {
        if (!shouldRemove(stmt.element)) {
            newStatements.push(stmt);  // Keep statements we want
        }
    }

    // Only use produce if we actually removed something
    if (newStatements.length !== method.body.statements.length) {
        return produce(method, draft => {
            if (draft.body) {
                draft.body.statements = newStatements;
            }
        });
    }

    return method;
}
```

**Key Points:**
1. **Use `produceAsync()` for async operations** - Pattern matching, type checks, etc.
2. **Import from `@openrewrite/rewrite`** - Not from the language-specific packages
3. **Automatic referential equality** - Both `produce()` and `produceAsync()` preserve it
4. **Check before modifying** - Only modify `draft.body.statements` if length changed

**Real-world example - Remove binding statements from React constructor:**
```typescript
import {produceAsync} from "@openrewrite/rewrite";
import {pattern, capture} from "@openrewrite/rewrite/javascript";
import {J, Statement} from "@openrewrite/rewrite/java";

// Pattern: this.method = this.method.bind(this)
const methodName = capture<J.Identifier>({name: 'methodName'});
const bindingPattern = pattern`this.${methodName} = this.${methodName}.bind(this)`;

// Use produceAsync to enable async pattern matching inside callback
return await produceAsync(constructor, async draft => {
    if (draft.body) {
        const newStatements: J.RightPadded<Statement>[] = [];

        for (const stmt of draft.body.statements) {
            const match = await bindingPattern.match(stmt.element, this.cursor);

            if (!match) {
                newStatements.push(stmt);  // Keep non-binding statements
            }
        }

        // Only modify if we removed something
        if (newStatements.length !== draft.body.statements.length) {
            draft.body.statements = newStatements;
        }
    }
});
```

**This pattern applies to:**
- Removing statements from method bodies with async pattern matching
- Filtering arguments based on async type checks
- Removing elements from arrays based on async validation
- Any container filtering that requires async operations

## Why Wrappers Exist

**Purpose:** Enable lossless transformation by explicitly tracking where whitespace and comments belong.

**Without wrappers:**
```
foo(a,b)  vs  foo( a , b )
```
Both would have the same AST, losing formatting information.

**With wrappers:**
```typescript
// foo(a,b)
arguments: {
    before: { kind: J.Kind.Space, comments: [], whitespace: "" },
    elements: [
        { element: a, after: { kind: J.Kind.Space, comments: [], whitespace: "" } },
        { element: b, after: { kind: J.Kind.Space, comments: [], whitespace: "" } }
    ]
}

// foo( a , b )
arguments: {
    before: { kind: J.Kind.Space, comments: [], whitespace: " " },
    elements: [
        { element: a, after: { kind: J.Kind.Space, comments: [], whitespace: " " } },
        { element: b, after: { kind: J.Kind.Space, comments: [], whitespace: " " } }
    ]
}
```

**Using utility functions:**
```typescript
import {emptySpace, singleSpace} from "@openrewrite/rewrite/java";

// foo(a,b)
arguments: {
    before: emptySpace,
    elements: [
        { element: a, after: emptySpace },
        { element: b, after: emptySpace }
    ]
}

// foo( a , b )
arguments: {
    before: singleSpace,
    elements: [
        { element: a, after: singleSpace },
        { element: b, after: singleSpace }
    ]
}
```

Now formatting is explicit and preserved through transformations. The printer knows to add `(`, `,`, and `)` in the right places.

## Summary

**Key concepts:**
1. **LST preserves everything** - formatting, comments, structure, type information
2. **Wrappers attach spacing** - RightPadded (after), LeftPadded (before), Container (lists)
3. **Every element has prefix** - J.Space with whitespace and comments before it
4. **Every element has markers** - Markers for attaching metadata without modifying structure
5. **Space structure** - Always includes `kind`, `comments`, and `whitespace` properties
6. **Markers structure** - Contains `kind`, `id`, and `markers` array
7. **Access through properties** - Always unwrap via `.element`
8. **Cursor skips wrappers** - Use `parentTree()` to navigate structure
9. **Templates handle wrappers** - Pass them directly to preserve formatting
10. **Visitor methods exist** - Override to transform wrapped elements

**Creating AST elements:**
- **No factory functions** - OpenRewrite does not provide dedicated factory functions
- **Object literals** - Use object literals with `kind` property ONLY for very simple cases (single identifiers/literals)
- **Templates** - Use `template` tagged template for declarative code generation (strongly preferred - use for 99% of cases)
- **Type attribution warning** - Object literals make type attribution extremely difficult to get right
- **Recommendation** - Always use templates unless creating a single, trivial node

**Utility functions:**
- **Space:** `emptySpace`, `singleSpace`, `space(whitespace)`
- **Markers:** `emptyMarkers`, `markers(...)`, `marker(id, data)`, `findMarker(o, kind)`
- **Container:** `emptyContainer<T>()`

**When to care about wrappers:**
- Navigating AST structure (use `.element` to unwrap)
- Preserving exact formatting (pass wrappers to templates)
- Modifying lists (iterate over `.elements` array)
- Custom visitor logic (override wrapper visitor methods)

**When to use utility functions:**
- Creating new LST elements with object literals (use `emptySpace`, `emptyMarkers`)
- Normalizing spacing (use `singleSpace`)
- Setting specific whitespace (use `space(whitespace)`)
- Creating empty lists (use `emptyContainer()`)
- Working with markers (use `markers()`, `findMarker()`)
