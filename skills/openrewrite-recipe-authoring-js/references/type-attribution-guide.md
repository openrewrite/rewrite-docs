# Type Attribution Guide for OpenRewrite TypeScript Recipes

## Overview

Type attribution is the process of associating type information with AST nodes during parsing and transformation. This guide explains how to ensure proper type attribution when using patterns and templates in OpenRewrite TypeScript recipes.

## Table of Contents

1. [Understanding Type Attribution](#understanding-type-attribution)
2. [When Type Attribution Is Needed](#when-type-attribution-is-needed)
3. [Using configure() for Type Context](#using-configure-for-type-context)
4. [Common Type Attribution Patterns](#common-type-attribution-patterns)
5. [Debugging Type Attribution Issues](#debugging-type-attribution-issues)
6. [Best Practices](#best-practices)

## Understanding Type Attribution

Type attribution in OpenRewrite:
- Associates semantic type information with AST nodes
- Enables type-aware transformations
- Ensures generated code has correct type references
- Maintains import relationships

### The Type System

```typescript
// Every TypedTree node can have type information
interface TypedTree extends J {
    readonly type?: Type;
}

// Types include:
// - Primitive types (string, number, boolean)
// - Class types (React.Component, Date)
// - Array types
// - Function types
// - Generic types
```

## When Type Attribution Is Needed

Type attribution is essential when:

1. **Creating new code that references external types**
2. **Using method calls on typed objects**
3. **Working with generics**
4. **Ensuring proper import management**

### Example: When Attribution Matters

```typescript
// Without type attribution - may not compile
const tmpl = template`isDate(${capture('value')})`;

// With type attribution - ensures isDate is properly imported/typed
const tmpl = template`isDate(${capture('value')})`
    .configure({
        context: ['import { isDate } from "date-utils"'],
        dependencies: {'date-utils': '^2.0.0'}
    });
```

## Using configure() for Type Context

The `configure()` method provides type context for patterns and templates:

### Basic Configuration

```typescript
const tmpl = template`React.useState(${capture('initialValue')})`
    .configure({
        context: [
            'import React from "react"'
        ],
        dependencies: {
            'react': '^18.0.0',
            '@types/react': '^18.0.0'
        }
    });
```

### Configuration Options

```typescript
interface PatternConfiguration {
    // Type matching mode (default: true for lenient matching)
    lenientTypeMatching?: boolean;

    // Import statements and type declarations for context
    context?: string[];

    // Package dependencies for type resolution
    dependencies?: Record<string, string>;

    // Parser options (mainly for templates, not patterns)
    parserOptions?: {
        jsx?: boolean;
        tsx?: boolean;
    };
}
```

## Common Type Attribution Patterns

### Pattern 1: External Library Functions

```typescript
// Using lodash function with proper typing
const tmpl = template`_.debounce(${capture('fn')}, ${capture('delay')})`
    .configure({
        context: ['import _ from "lodash"'],
        dependencies: {
            'lodash': '^4.17.0',
            '@types/lodash': '^4.17.0'
        }
    });
```

### Pattern 2: React Components

```typescript
// Creating JSX with proper React types
const tmpl = template`<Button onClick={${capture('handler')}}>${capture('children')}</Button>`
    .configure({
        context: [
            'import React from "react"',
            'import { Button } from "./components"'
        ],
        dependencies: {
            'react': '^18.0.0'
        },
        parserOptions: { jsx: true }
    });
```

### Pattern 3: TypeScript Generics

```typescript
// Working with generic types
const tmpl = template`new Map<string, ${capture('valueType')}>()`
    .configure({
        context: ['// TypeScript environment'],
        parserOptions: { tsx: true }
    });
```

### Pattern 4: Class Members

```typescript
// Adding typed class members
const tmpl = template`
    private cache: Map<string, any> = new Map();
`
    .configure({
        context: [
            'class MyClass {',
            '}'
        ]
    });
```

### Pattern 5: Async/Promise Types

```typescript
// Async function with proper return type
const tmpl = template`
    async function ${capture('name')}(): Promise<${capture('returnType')}> {
        ${capture('body')}
    }
`
    .configure({
        context: ['// TypeScript async context']
    });
```

## Debugging Type Attribution Issues

### Common Issues and Solutions

#### Issue 1: Missing Type Information

**Symptom:** Generated code lacks proper type annotations

```typescript
// Problem: Type not attributed
const tmpl = template`new Date(${capture('timestamp')})`;

// Solution: Provide context
const tmpl = template`new Date(${capture('timestamp')})`
    .configure({
        context: ['// Global Date constructor available']
    });
```

#### Issue 2: Unresolved Imports

**Symptom:** Import statements not generated or incorrect

```typescript
// Problem: axios not imported
const tmpl = template`axios.get(${capture('url')})`;

// Solution: Specify import context
const tmpl = template`axios.get(${capture('url')})`
    .configure({
        context: ['import axios from "axios"'],
        dependencies: {'axios': '^1.0.0'}
    });
```

#### Issue 3: Generic Type Loss

**Symptom:** Generic type parameters are lost in transformation

```typescript
// Problem: Array<T> becomes Array
const result = await template`[${items}]`.apply(cursor, node);

// Solution: Preserve type with raw()
const result = await template`${raw('Array<T>')}(${items})`.apply(cursor, node);
```

### Debugging Techniques

1. **Log Type Information:**
```typescript
protected async visitExpression(
    expr: Expression,
    ctx: ExecutionContext
): Promise<J | undefined> {
    if ('type' in expr && expr.type) {
        console.log(`Expression type: ${expr.type}`);
    }
    return expr;
}
```

2. **Verify Import Context:**
```typescript
const pat = pattern`someFunction()`
    .configure({
        context: [
            '// Debug: This context is parsed',
            'import { someFunction } from "lib"'
        ]
    });

// Test the pattern in isolation
const match = await pat.match(testNode);
console.log('Match result:', match);
```

3. **Check AST Structure:**
```typescript
// Print full AST with types
console.log(JSON.stringify(node, (key, value) => {
    if (key === 'type' && value) {
        return `Type<${value.toString()}>`;
    }
    return value;
}, 2));
```

## Best Practices

### 1. Always Configure External References

```typescript
// ❌ Bad: No context for external function
const tmpl = template`moment(${date})`;

// ✅ Good: Proper context provided
const tmpl = template`moment(${date})`
    .configure({
        context: ['import moment from "moment"'],
        dependencies: {'moment': '^2.29.0'}
    });
```

### 2. Use Type-Safe Captures

```typescript
// ❌ Bad: No type constraint
const value = capture();

// ✅ Good: Type constraint ensures proper matching
const value = capture<J.Literal>({
    constraint: (n) => isLiteral(n) && typeof n.value === 'string'
});
```

### 3. Preserve Existing Types

```typescript
protected async visitNewClass(
    newClass: J.NewClass,
    ctx: ExecutionContext
): Promise<J | undefined> {
    // Preserve the original type when transforming
    const modified = produce(newClass, draft => {
        // Modifications...
    });

    // Ensure type is preserved
    if (newClass.type && modified.type !== newClass.type) {
        return {...modified, type: newClass.type};
    }

    return modified;
}
```

### 4. Context Should Be Minimal but Complete

```typescript
// ❌ Bad: Too much context
const tmpl = template`console.log(${msg})`
    .configure({
        context: [
            'import React from "react"',  // Not needed
            'import lodash from "lodash"', // Not needed
            'const x = 1;'                 // Not needed
        ]
    });

// ✅ Good: Only necessary context
const tmpl = template`console.log(${msg})`
    .configure({
        context: ['// console is global']
    });
```

### 5. Handle TypeScript-Specific Features

```typescript
// For TypeScript-specific syntax
const tmpl = template`
    function identity<T>(value: T): T {
        return value;
    }
`
    .configure({
        parserOptions: { tsx: true }
    });
```

### 6. Test Type Attribution

```typescript
test("preserves type information", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    return spec.rewriteRun({
        ...typescript(
            `const date: Date = new Date();`,
            `const date: Date = new DateTime();`
        ),
        afterRecipe: (cu: JS.CompilationUnit) => {
            const varDecl = cu.statements[0].element as J.VariableDeclarations;
            const variable = varDecl.variables[0].element;

            // Verify type is preserved
            expect(variable.type).toBeDefined();
            expect(variable.type?.toString()).toContain('Date');
        }
    });
});
```

## Testing Type Attribution with npm and package.json

When testing recipes that require type attribution from external libraries, use the `npm` function with `packageJson` to create a realistic Node.js environment:

### Basic Setup for Type Attribution Testing

```typescript
import {npm, typescript, packageJson} from "@openrewrite/rewrite/javascript";
import {RecipeSpec} from "@openrewrite/rewrite/test";

test("recipe with proper type attribution", async () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    const sources = npm(
        __dirname,  // Where node_modules will be created

        // Define dependencies for type attribution
        packageJson(JSON.stringify({
            name: "test-project",
            dependencies: {
                "axios": "^1.4.0",
                "lodash": "^4.17.21"
            },
            devDependencies: {
                "@types/lodash": "^4.14.195"
            }
        })),

        // Your test file can now resolve types from dependencies
        typescript(
            `import axios from 'axios';
             const data = await axios.get('/api/data');`,
            `import axios from 'axios';
             const { data } = await axios.get('/api/data');`
        )
    );

    // npm returns async generator, convert to array
    const sourcesArray = [];
    for await (const source of sources) {
        sourcesArray.push(source);
    }

    return spec.rewriteRun(...sourcesArray);
});
```

### Complex Type Attribution Example

```typescript
test("transform with full type context", async () => {
    const spec = new RecipeSpec();
    spec.recipe = new AddTypeValidation();

    const sources = npm(
        __dirname,

        packageJson(JSON.stringify({
            dependencies: {
                "zod": "^3.22.0",
                "react": "^18.0.0"
            },
            devDependencies: {
                "@types/react": "^18.0.0"
            }
        })),

        tsx(
            `import React from 'react';

             interface UserProps {
                 name: string;
                 age: number;
             }

             function UserComponent(props: UserProps) {
                 return <div>{props.name}</div>;
             }`,

            `import React from 'react';
             import { z } from 'zod';

             const UserPropsSchema = z.object({
                 name: z.string(),
                 age: z.number()
             });

             type UserProps = z.infer<typeof UserPropsSchema>;

             function UserComponent(props: UserProps) {
                 const validated = UserPropsSchema.parse(props);
                 return <div>{validated.name}</div>;
             }`
        ).withPath("src/components/User.tsx")
    );

    const sourcesArray = [];
    for await (const source of sources) {
        sourcesArray.push(source);
    }

    return spec.rewriteRun(...sourcesArray);
});
```

### Recipe Implementation with Type Context

When your recipe's patterns/templates need type attribution, ensure the test provides the necessary dependencies:

```typescript
export class AddDateValidation extends Recipe {
    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodDeclaration(
                method: J.MethodDeclaration,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // This template requires date-fns types to be available
                const validationCode = template`
                    if (!isValid(date)) {
                        throw new Error("Invalid date");
                    }
                `.configure({
                    context: ['import { isValid } from "date-fns"'],
                    dependencies: {'date-fns': '^2.30.0'}
                });

                // Template can only resolve isValid if date-fns is in package.json
                // during testing
                return await this.insertValidation(method, validationCode);
            }
        };
    }
}

// Test with proper dependencies
test("add date validation", async () => {
    const sources = npm(
        __dirname,
        packageJson(JSON.stringify({
            dependencies: {
                "date-fns": "^2.30.0"  // Required for type attribution
            }
        })),
        typescript(/* test code */)
    );
    // ... rest of test
});
```

### Key Points for Testing Type Attribution

1. **Always include type dependencies**: Both runtime and @types packages
2. **Use npm() for realistic environment**: Simulates actual project setup
3. **Match configure() dependencies**: Test dependencies should match what's in configure()
4. **Cache optimization**: npm() caches installations for faster subsequent runs
5. **Async handling**: Remember npm() returns an async generator

## Advanced Topics

### Custom Type Resolution

For complex scenarios, you might need custom type resolution:

```typescript
class MyVisitor extends JavaScriptVisitor<ExecutionContext> {
    private resolveType(node: J): Type | undefined {
        // Custom type resolution logic
        if (isIdentifier(node)) {
            // Look up type from symbol table or context
            const typeMap = this.ctx.getMessage<Map<string, Type>>('types');
            return typeMap?.get(node.simpleName);
        }
        return undefined;
    }

    protected async visitIdentifier(
        ident: J.Identifier,
        ctx: ExecutionContext
    ): Promise<J | undefined> {
        const type = this.resolveType(ident);
        if (type) {
            return {...ident, type};
        }
        return ident;
    }
}
```

### Working with Type Parameters

```typescript
// Handling generic type parameters
const tmpl = template`
    class Container<T> {
        private value: T;
        constructor(value: T) {
            this.value = value;
        }
    }
`
    .configure({
        parserOptions: { tsx: true }
    });

// Using with specific type
const instantiated = await template`new Container<${raw('string')}>(${value})`
    .apply(cursor, node);
```

## Conclusion

Proper type attribution is crucial for:
- Generating valid TypeScript/JavaScript code
- Maintaining type safety
- Ensuring proper imports
- Preserving semantic meaning

Always consider type context when creating patterns and templates, especially when working with external libraries, TypeScript features, or complex type hierarchies.