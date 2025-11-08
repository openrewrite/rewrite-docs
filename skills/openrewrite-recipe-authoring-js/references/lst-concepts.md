# LST Core Concepts

Understanding the Lossless Semantic Tree (LST) structure and wrapper types.

## Table of Contents

1. [What is LST?](#what-is-lst)
2. [Wrapper Types](#wrapper-types)
3. [Spacing and Formatting](#spacing-and-formatting)
4. [Working with Wrappers](#working-with-wrappers)
5. [Common Patterns](#common-patterns)

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

## Wrapper Types

LST uses wrapper types to attach formatting information to elements. These wrappers are generic containers that hold both the element and its associated spacing.

### J.RightPadded\<T>

Wraps an element with **trailing** space and comments (space that comes **after** the element).

```typescript
interface RightPadded<T> {
    element: T;           // The wrapped element
    after: J.Space;       // Trailing whitespace and comments
    markers: Markers;     // Metadata markers
}
```

**When used:**
- Method invocation select: `obj.method()` - space after `obj`
- Binary operation left/right sides
- Individual elements in lists (with comma after)

**Example:**
```typescript
// In: obj  /* comment */ .method()
const select: J.RightPadded<Expression> = method.select;
// select.element = Identifier("obj")
// select.after = Space with "  /* comment */ "
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
// args.before = Space with "( "
// args.elements[0].element = Identifier("a")
// args.elements[0].after = Space with " , "
// args.elements[1].element = Identifier("b")
// args.elements[1].after = Space with " , "
// args.elements[2].element = Identifier("c")
// args.elements[2].after = Space with " )"
```

**Important:** The last element's `after` contains the closing delimiter and any space after it.

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
    comments: Comment[];   // List of comments in this space
    whitespace: string;    // Actual whitespace characters
}
```

**Example:**
```typescript
// In:
//   // Line comment
//   const x = 1;

const varDecl: J.VariableDeclarations = ...;
// varDecl.prefix.comments[0] = Comment("// Line comment")
// varDecl.prefix.whitespace = "\n  "
```

### Comment Types

Comments are preserved with their exact content and style:

```typescript
interface Comment {
    text: string;          // Comment content
    multiline: boolean;    // true for /* */, false for //
    // ... other properties
}
```

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
return produce(stmt, draft => {
    draft.prefix = produce(draft.prefix, prefixDraft => {
        prefixDraft.comments = [
            ...prefixDraft.comments,
            {
                text: "// Generated code",
                multiline: false,
                // ... other comment properties
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
    elements: [
        { element: a, after: "," },
        { element: b, after: "" }
    ]
}

// foo( a , b )
arguments: {
    before: " ",
    elements: [
        { element: a, after: " , " },
        { element: b, after: " " }
    ]
}
```

Now formatting is explicit and preserved through transformations.

## Summary

**Key concepts:**
1. **LST preserves everything** - formatting, comments, structure
2. **Wrappers attach spacing** - RightPadded (after), LeftPadded (before), Container (lists)
3. **Every element has prefix** - whitespace and comments before it
4. **Access through properties** - Always unwrap via `.element`
5. **Cursor skips wrappers** - Use `parentTree()` to navigate structure
6. **Templates handle wrappers** - Pass them directly to preserve formatting
7. **Visitor methods exist** - Override to transform wrapped elements

**When to care about wrappers:**
- Navigating AST structure (use `.element` to unwrap)
- Preserving exact formatting (pass wrappers to templates)
- Modifying lists (iterate over `.elements` array)
- Custom visitor logic (override wrapper visitor methods)
