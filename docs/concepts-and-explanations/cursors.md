---
sidebar_label: Cursors
description: A comprehensive guide to the Cursor API, tree navigation, and inter-visitor messaging in OpenRewrite.
---

# Cursors

## Overview

A `Cursor` is a linked path of LST elements that tracks a visitor's position within the tree during traversal. Since [Lossless Semantic Trees](./lossless-semantic-trees.md) are acyclic and do not contain references to their parent elements, the cursor is the primary mechanism by which parent or ancestor elements may be accessed.

Logically, a cursor is a stack. Whenever an LST element is visited, a cursor pointing to it is pushed on top of the stack. When the visit completes, its cursor is removed. In this way, the cursor always reflects the visitor's current position and the full path from the current element up to the root.

## The Cursor class

### Accessing the current value

- **`getValue()`** — Returns the object at this cursor position. The return type is generic, so it can be cast to the expected type:

```java
J.ClassDeclaration classDecl = getCursor().getValue();
```

- **`isRoot()`** — Returns `true` if this cursor represents the root of the cursor stack (its value equals `Cursor.ROOT_VALUE`).

### Parent navigation

There are several ways to navigate upward from the current cursor position:

| Method | Returns | Skips padding? | On missing parent |
|--------|---------|---------------|-------------------|
| `getParent()` | `@Nullable Cursor` | No | Returns `null` |
| `getParentOrThrow()` | `Cursor` | No | Throws `IllegalStateException` |
| `getParentTreeCursor()` | `Cursor` | Yes | Returns root cursor |

The distinction between `getParent()` and `getParentTreeCursor()` matters because the cursor stack includes non-tree padding elements (such as `JRightPadded` and `JLeftPadded`) that wrap the actual AST nodes. When you want to access the parent AST node, `getParentTreeCursor()` is almost always what you want:

```java
// getParent() might return a cursor pointing at JRightPadded, JLeftPadded, etc.
// getParentTreeCursor() skips these to return the actual parent Tree element.
Cursor parentTree = getCursor().getParentTreeCursor();
J parent = parentTree.getValue();

if (parent instanceof J.If) {
    // Apply if-specific logic
} else if (parent instanceof J.MethodDeclaration) {
    // Apply method-specific logic
}
```

**`getRoot()`** walks all the way up the cursor stack and returns the root cursor.

### Ancestor search

These methods search upward through the cursor stack to find specific ancestor elements:

#### firstEnclosing

`firstEnclosing(Class<T>)` walks up the cursor path looking for the first value that is an instance of the given type. Returns `null` if no match is found. `firstEnclosingOrThrow(Class<T>)` is the variant that throws instead.

```java
// Detect whether a class declaration is the top-level class
@Override
public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration cd, ExecutionContext ctx) {
    J.ClassDeclaration classDecl = super.visitClassDeclaration(cd, ctx);

    // If the parent cursor has no enclosing ClassDeclaration, this is the top-level class
    if (getCursor().getParentOrThrow().firstEnclosing(J.ClassDeclaration.class) == null) {
        // Make changes only to the top-level class
    }

    return classDecl;
}
```

#### dropParentUntil / dropParentWhile

`dropParentUntil(Predicate<Object>)` walks up the cursor stack and returns the first cursor whose value **matches** the predicate. `dropParentWhile(Predicate<Object>)` walks up **while** the predicate is true and returns the first cursor where it becomes false. Both throw `IllegalStateException` if they reach the end of the stack without finding a match.

```java
// Find the enclosing scope boundary (method, class, or block)
Cursor scopeCursor = getCursor().dropParentUntil(is ->
    is instanceof J.MethodDeclaration ||
    is instanceof J.ClassDeclaration ||
    is instanceof J.Block
);
```

Use `Cursor.ROOT_VALUE` as a sentinel in predicates to avoid exceptions when the search might reach the root:

```java
Cursor enclosing = getCursor().dropParentUntil(is ->
    is instanceof J.ClassDeclaration || is == Cursor.ROOT_VALUE
);
```

### Path iteration

- **`getPath()`** — Returns an `Iterator<Object>` of values from the current cursor up to the root.
- **`getPathAsCursors()`** — Returns an `Iterator<Cursor>` of cursor objects from the current up to the root.
- **`getPathAsStream()`** — Stream variant of `getPath()`. Both `getPath()` and `getPathAsStream()` accept an optional `Predicate` filter.

### Forking

**`fork()`** creates a deep copy of the cursor stack with its own independent message maps. This is useful when you need to pass a cursor to a sub-visitor without it being mutated by the sub-visitor's operations.

## Cursor messaging

### Why messaging exists

OpenRewrite visitors traverse the LST depth-first. This means a child's visit method runs and completes **before** the parent's visit method finishes. When a child visit method discovers something that should influence a change at a parent level, it needs a way to communicate this information upward. Cursor messages provide this mechanism.

Messages are stored in a `Map<String, Object>` on each cursor and are automatically discarded when visiting completes. This means there is no risk of messages leaking between visitors or recipes.

### Writing messages

- **`putMessage(String key, Object value)`** — Stores a message on **this** cursor.
- **`putMessageOnFirstEnclosing(Class<?> enclosing, String key, Object value)`** — Walks up the cursor stack to find the first cursor whose value is an instance of the given class, then stores the message there. This is the most common way to send information from a child visit method to a parent.

### Reading messages

| Method | Scope | Removes message? |
|--------|-------|-----------------|
| `getMessage(key)` | This cursor only | No |
| `getNearestMessage(key)` | Walks up the stack | No |
| `pollMessage(key)` | This cursor only | Yes |
| `pollNearestMessage(key)` | Walks up the stack | Yes |

- **`getMessage(key)`** — Reads from this cursor only. Returns `null` if not found. An overload accepts a default value.
- **`getNearestMessage(key)`** — Walks up the cursor stack and returns the first message found with the given key. Useful when a message was placed on an ancestor and you want to read it from anywhere below.
- **`pollMessage(key)`** — Reads **and removes** the message from this cursor. Use this for one-shot consumption where you don't want a message to be read twice.
- **`pollNearestMessage(key)`** — Combines the walk-up behavior of `getNearestMessage` with the removal behavior of `pollMessage`.
- **`computeMessageIfAbsent(key, Function)`** — Lazily initializes a message value. Useful for accumulating collections:

```java
Set<String> imports = getCursor().computeMessageIfAbsent("IMPORTS", k -> new HashSet<>());
imports.add("java.util.List");
```

### Example: inter-method communication

A common pattern is to discover information in a child visit method and act on it in the parent. Because `super.visitClassDeclaration()` triggers the depth-first traversal of all child elements, any messages placed during child visits are available after the `super` call returns:

```java
public class ChangesClassBasedOnMethod extends JavaIsoVisitor<ExecutionContext> {
    @Override
    public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration cd, ExecutionContext ctx) {
        // super call triggers visiting of all child elements (including methods)
        J.ClassDeclaration classDecl = super.visitClassDeclaration(cd, ctx);

        // After super returns, any messages placed by visitMethodDeclaration are available
        J.MethodDeclaration found = getCursor().pollMessage("FOUND_METHOD");
        if (found != null) {
            // Modify the class based on what was found in the method
        }

        return classDecl;
    }

    @Override
    public J.MethodDeclaration visitMethodDeclaration(J.MethodDeclaration md, ExecutionContext ctx) {
        if (/* method meets some criteria */) {
            // Place message on the enclosing ClassDeclaration cursor
            getCursor().putMessageOnFirstEnclosing(
                J.ClassDeclaration.class, "FOUND_METHOD", md
            );
        }
        return md;
    }
}
```

`pollMessage` is used here because the message should be consumed once. If you needed to read the same message from multiple visit methods, use `getMessage` instead.

## Working with cursors in visitors

The `TreeVisitor` base class provides methods for accessing and updating the cursor during visitation.

### getCursor()

Returns the cursor pointing at the element currently being visited. This is the most common way to access the cursor and is available in all visit methods:

```java
@Override
public J.MethodInvocation visitMethodInvocation(J.MethodInvocation mi, ExecutionContext ctx) {
    // getCursor() points at `mi`
    J.ClassDeclaration enclosingClass = getCursor().firstEnclosing(J.ClassDeclaration.class);
    // ...
}
```

### updateCursor(T newValue)

Replaces the value in the current cursor position. The new value **must** have the same `Tree` ID as the original (i.e., it must be a mutation of the same element, not a completely different element).

This is required when you modify an LST element and then need to pass the cursor to `JavaTemplate.apply()` or perform another operation that reads from the cursor. Without `updateCursor`, the cursor still points at the **old** pre-modification element:

```java
@Override
public J.MethodDeclaration visitMethodDeclaration(J.MethodDeclaration md, ExecutionContext ctx) {
    J.MethodDeclaration method = super.visitMethodDeclaration(md, ctx);

    // Step 1: Remove the abstract modifier
    method = method.withModifiers(
        method.getModifiers().stream()
            .filter(mod -> mod.getType() != J.Modifier.Type.Abstract)
            .collect(toList())
    );

    // Step 2: Apply a template — must use updateCursor because method was modified above.
    // Without updateCursor, the cursor would still reference the old method with the abstract modifier.
    method = addParametersTemplate.apply(
        updateCursor(method),
        method.getCoordinates().replaceParameters(),
        method.getParameters().get(0)
    );

    return method;
}
```

### new Cursor(getCursor(), child)

Creates a new cursor with the current cursor as parent, pointing at a child element. This is used when the cursor currently points at a parent element but a template needs to be applied to one of its children:

```java
@Override
public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration cd, ExecutionContext ctx) {
    J.ClassDeclaration classDecl = super.visitClassDeclaration(cd, ctx);

    // The cursor points at the ClassDeclaration, but we want to add a method
    // to its body (a J.Block). Create a new cursor pointing at the block.
    classDecl = addMethodTemplate.apply(
        new Cursor(getCursor(), classDecl.getBody()),
        classDecl.getBody().getCoordinates().lastStatement()
    );

    return classDecl;
}
```

### Invoking another visitor with a cursor

When calling another visitor from within a visit method, pass the parent tree cursor so the invoked visitor has correct context about its position in the tree:

```java
method = (J.MethodDeclaration) new OtherJavaVisitor<>()
    .visit(method, ctx, getCursor().getParentTreeCursor());
```

Using `getCursor().getParentTreeCursor()` rather than `getCursor()` ensures the sub-visitor sees the correct parent context (the element enclosing the current one) rather than the current element itself.

## Further reading

- [Visitors](./visitors.md) — The visitor pattern and language-specific visitors
- [Modifying methods with JavaTemplate](../authoring-recipes/modifying-methods-with-javatemplate.md) — Step-by-step example using `updateCursor` and `new Cursor`
- [Recipe conventions and best practices](../authoring-recipes/recipe-conventions-and-best-practices.md) — When to use cursor messaging vs. execution context
- [Cursor.java source](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/Cursor.java) — Full API source code
