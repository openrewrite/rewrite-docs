# Common Recipe Patterns

Quick reference patterns for common recipe scenarios.

## Pattern 1: Simple Property Renaming

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

## Pattern 2: Method Call Transformation

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

## Pattern 3: Add Method Arguments

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

## Pattern 4: Replace Binary Operators

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

## Pattern 5: Transform Arrow Functions

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

## Pattern 6: Async/Await Conversion

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

## Pattern 7: Import Management

### Basic Import Add/Remove

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

### CommonJS require() Transformations

CommonJS transformations work well using pattern matching:

```typescript
// Transform: const crypto = require('crypto')
// To: const tls = require('tls')

protected async visitVariableDeclarations(
    varDecls: J.VariableDeclarations,
    ctx: ExecutionContext
): Promise<J | undefined> {
    const rule = rewrite(() => {
        const varName = capture();
        return {
            before: pattern`const ${varName} = require('crypto')`,
            after: template`const ${varName} = require('tls')`
        };
    });

    return await rule.tryOn(this.cursor, varDecls) || varDecls;
}
```

### ES6 Import Transformations

**⚠️ Known Limitation**: Direct transformation of ES6 `import` statements can be challenging due to complex AST structure.

**Recommended approach** - Use helper functions instead of direct AST manipulation:

```typescript
protected async visitJsCompilationUnit(
    cu: JS.CompilationUnit,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Remove old import, add new one
    let modified = await maybeRemoveImport(cu, "old-module", "oldExport", ctx);
    modified = await maybeAddImport(modified, "new-module", "newExport", null, ctx);
    return modified;
}
```

**Alternative approach** - Transform the import usage instead of the import statement:

```typescript
// Instead of changing: import { old } from "lib"
// Change the usage: old() -> new()
// Then use maybeAddImport/maybeRemoveImport to fix imports

protected async visitMethodInvocation(
    method: J.MethodInvocation,
    ctx: ExecutionContext
): Promise<J | undefined> {
    const rule = rewrite(() => {
        const args = capture({ variadic: true });
        return {
            before: pattern`oldExport(${args})`,
            after: template`newExport(${args})`
        };
    });

    return await rule.tryOn(this.cursor, method) || method;
}

// In visitJsCompilationUnit:
protected async visitJsCompilationUnit(
    cu: JS.CompilationUnit,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Cleanup imports after transforming usage
    let modified = await maybeRemoveImport(cu, "old-module", "oldExport", ctx);
    modified = await maybeAddImport(modified, "new-module", "newExport", null, ctx);
    return modified;
}
```

## Pattern 8: Class Property Addition

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

## Pattern 9: Conditional Deletion

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

## Pattern 10: Using Execution Context

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

## Pattern 11: Pattern Matching with Constraints

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

## Pattern 12: Using rewrite() Helper

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

## Pattern 13: Marker-Based Reporting

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

## Pattern 14: Type-Safe Visitor Navigation

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

## Pattern 15: Statement Manipulation

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

## Pattern 16: Working with JSX/TSX

```typescript
import {JSX} from "@openrewrite/rewrite/javascript";
import {isIdentifier} from "@openrewrite/rewrite/java";

protected async visitJsxTag(
    tag: JSX.Tag,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Visit children first
    tag = await super.visitJsxTag(tag, ctx) as JSX.Tag;

    // Check if this is a specific component by name
    const openName = tag.openName;
    if (isIdentifier(openName) && openName.simpleName === 'OldComponent') {
        // Transform to new component name using template
        return await template`<NewComponent {...${tag.attributes}}>
            ${tag.children}
        </NewComponent>`.apply(this.cursor, tag);
    }

    return tag;
}
```

**JSX Structure:**
- `JSX.Tag` - Main JSX element (`<Component>...</Component>` or `<Component />`)
- `tag.openName` - Opening tag name (NameTree: Identifier or FieldAccess)
- `tag.attributes` - List of JSX attributes and spread attributes
- `tag.children` - Child elements/expressions (null for self-closing tags)
- `tag.isSelfClosing()` - Check if self-closing tag
- `tag.hasChildren()` - Check if has children

**Other JSX types:**
- `JSX.Attribute` - Regular attribute (`key="value"`)
- `JSX.SpreadAttribute` - Spread syntax (`{...props}`)
- `JSX.EmbeddedExpression` - JavaScript expressions in JSX (`{expression}`)
- `JSX.NamespacedName` - Namespaced names (`React.Fragment`)

## Pattern 17: Type Annotation Handling

```typescript
protected async visitVariableDeclarations(
    varDecls: J.VariableDeclarations,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Add type annotations
    if (varDecls.typeExpression === null) {
        return produce(varDecls, draft => {
            draft.typeExpression = J.createTypeExpression('string');
        });
    }
    return varDecls;
}
```

## Pattern 18: Scanning with Accumulator

```typescript
// In scanner phase
protected async visitIdentifier(
    ident: J.Identifier,
    ctx: ExecutionContext
): Promise<J | undefined> {
    this.accumulate(ident.simpleName);
    return ident;
}

// In editor phase
async editor(identifiers: Set<string>): Promise<TreeVisitor<any, ExecutionContext>> {
    return new class extends JavaScriptVisitor<ExecutionContext> {
        // Use accumulated identifiers
    };
}
```