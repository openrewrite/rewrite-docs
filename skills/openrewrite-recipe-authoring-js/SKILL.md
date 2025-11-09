---
name: openrewrite-recipe-authoring-js
description: This skill should be used when authoring OpenRewrite recipes in TypeScript for automated code transformations. Covers recipe structure, visitor patterns, pattern matching, templates, testing strategies, and troubleshooting.
---

# Authoring OpenRewrite Recipes in TypeScript

## Skill Resources

Load these references as needed for detailed information:
- **references/lst-concepts.md** - LST structure, wrapper types, immutability
- **references/patterns-and-templates.md** - Pattern matching and template system
- **references/type-attribution-guide.md** - Type attribution and configure() usage
- **references/common-patterns.md** - 18 ready-to-use recipe patterns
- **references/examples.md** - 9 complete recipe examples with tests
- **references/testing-recipes.md** - Testing strategies and npm usage

## Quick Start

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
    "experimentalDecorators": true
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
- [ ] Use `produceAsync()` for async operations (pattern matching)
- [ ] Use `produce()` from `immer` for immutable updates
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
const match = await pat.match(node);

if (match) {
    return await template`newApi.methodAsync(${args})`
        .apply(cursor, node, match);
}
```

Configure patterns for strict type checking or type attribution:

```typescript
const tmpl = template`isDate(${capture('value')})`
    .configure({
        lenientTypeMatching: false,  // Override default lenient type matching
        context: ['import { isDate } from "date-utils"'],
        dependencies: {'date-utils': '^2.0.0'}
    });
```

📖 See **references/patterns-and-templates.md** for complete guide.

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
}
```

### Critical Rules

1. **Type check before narrowing:**
```typescript
import {isMethodInvocation} from "@openrewrite/rewrite/java";

if (!isMethodInvocation(node)) {
    return node;  // Return unchanged if wrong type
}
// Now TypeScript knows node is J.MethodInvocation
```

2. **Use produce() for modifications:**
```typescript
return produce(node, draft => {
    draft.name = newName;
});
```

3. **Return undefined to delete:**
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
- `maybeAddImport(cu, pkg, member, alias, ctx)` - Add import if missing
- `maybeRemoveImport(cu, pkg, member, ctx)` - Remove unused import

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
- Print AST structure to debug
- Use `any()` for parts to ignore
- Check variadic captures for lists
- Test pattern in isolation

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
import {maybeAddImport, maybeRemoveImport} from "@openrewrite/rewrite/javascript";

// Testing
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript, typescript, jsx, tsx, npm, packageJson} from "@openrewrite/rewrite/javascript";
```

## Best Practices

1. **Start with visitors, add patterns as needed** - Full control vs declarative simplicity
2. **Test edge cases** - Empty arguments, nested calls, different node types
3. **Use type constraints carefully** - Generic parameters are for IDE only
4. **Keep recipes focused** - One recipe, one transformation
5. **Document with examples** - Include before/after in description
6. **Handle undefined gracefully** - Check before accessing properties
7. **Use early returns** - Return original when no transformation needed
8. **Capture options in closures** - Recipe options need closure access