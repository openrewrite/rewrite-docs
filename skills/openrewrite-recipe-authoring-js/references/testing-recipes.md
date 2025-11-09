# Testing OpenRewrite Recipes

Comprehensive guide to testing JavaScript/TypeScript recipes using the OpenRewrite test framework.

## Table of Contents

1. [Basic Testing](#basic-testing)
2. [RecipeSpec Configuration](#recipespec-configuration)
3. [Source Specifications](#source-specifications)
4. [AST Assertions with afterRecipe](#ast-assertions-with-afterrecipe)
5. [Pre-Recipe Transformations with beforeRecipe](#pre-recipe-transformations-with-beforerecipe)
6. [Dynamic After Validation](#dynamic-after-validation)
7. [Testing Generated Files](#testing-generated-files)
8. [Data Table Assertions](#data-table-assertions)
9. [Testing Edge Cases](#testing-edge-cases)

## Basic Testing

The simplest recipe test compares before and after source code:

```typescript
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript} from "@openrewrite/rewrite/javascript";
import {MyRecipe} from "./my-recipe";

describe("my-recipe", () => {
    test("basic transformation", () => {
        const spec = new RecipeSpec();
        spec.recipe = new MyRecipe();

        return spec.rewriteRun(
            javascript(
                `console.log("before");`,
                `logger.info("before");`
            )
        );
    });
});
```

## RecipeSpec Configuration

`RecipeSpec` provides several configuration options:

### Parse-Print Idempotence

By default, tests verify that parsing and printing is idempotent (round-trip preserves formatting):

```typescript
const spec = new RecipeSpec();
spec.checkParsePrintIdempotence = true;  // Default

// Disable if you know formatting might change
spec.checkParsePrintIdempotence = false;
```

### Execution Context

Control parsing and recipe execution contexts:

```typescript
const spec = new RecipeSpec();

// Same context for parsing and execution (default)
spec.executionContext = new ExecutionContext();

// Different context for recipe execution
spec.recipeExecutionContext = new ExecutionContext();
// Now parsing uses executionContext, recipe uses recipeExecutionContext
```

### Recipe Configuration

Set the recipe with options:

```typescript
const spec = new RecipeSpec();

// Using constructor
spec.recipe = new RenameMethod({
    oldMethodName: "foo",
    newMethodName: "bar"
});

// Or set properties
const recipe = new RenameMethod();
recipe.oldMethodName = "foo";
recipe.newMethodName = "bar";
spec.recipe = recipe;
```

## Source Specifications

OpenRewrite provides several functions to create source specifications for different file types:

### Available Source Functions

```typescript
import {
    javascript,   // JavaScript files
    typescript,   // TypeScript files
    jsx,         // JSX files (React)
    tsx,         // TSX files (TypeScript React)
    npm,         // Multi-file projects with package.json
    packageJson  // package.json files
} from "@openrewrite/rewrite/javascript";

// JavaScript
javascript(
    `const x = 1;`,
    `const y = 1;`
)

// TypeScript
typescript(
    `let x: number = 1;`,
    `let y: number = 1;`
)

// JSX (React)
jsx(
    `<Button onClick={handler}>Click</Button>`,
    `<Button onClick={newHandler}>Click</Button>`
)

// TSX (TypeScript React)
tsx(
    `<Button<string> onClick={handler}>Click</Button>`,
    `<Button<string> onClick={newHandler}>Click</Button>`
)

// With custom path
javascript(
    `const x = 1;`,
    `const y = 1;`,
    {
        path: "src/custom-file.js"
    }
)
```

### No Change Expected

When you expect no changes, omit the `after` parameter:

```typescript
// File should not be modified
javascript(`const x = 1;`)
tsx(`<App />`)  // TSX with no expected changes
```

### Source Spec Object Structure

The full `SourceSpec` interface:

```typescript
interface SourceSpec<T extends SourceFile> {
    kind: string;                    // Language kind (e.g., "javascript")
    before: string | null;           // Source before recipe
    after?: AfterRecipeText;         // Expected result (string or validator)
    path?: string;                   // File path
    parser: (ctx) => Parser;         // Parser to use
    beforeRecipe?: (sourceFile: T) => T | void | Promise<T> | Promise<void>;
    afterRecipe?: (sourceFile: T) => T | void | Promise<T> | Promise<void>;
    ext: string;                     // File extension
}
```

## Testing with npm and package.json

The `npm` function enables testing recipes in a realistic Node.js environment with dependencies installed. This is crucial for **type attribution** when your recipe needs to understand external library types.

### Basic npm Usage

```typescript
import {npm, javascript, packageJson} from "@openrewrite/rewrite/javascript";

test("transform with dependencies", async () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    // Use npm to create a project environment
    const sources = npm(
        __dirname,  // Directory for node_modules installation

        // Define package.json with dependencies
        packageJson(JSON.stringify({
            name: "test-project",
            version: "1.0.0",
            dependencies: {
                "lodash": "^4.17.21",
                "react": "^18.0.0"
            },
            devDependencies: {
                "@types/lodash": "^4.14.195",
                "@types/react": "^18.0.0"
            }
        })),

        // JavaScript files can now use types from dependencies
        javascript(
            `import _ from "lodash";
             const result = _.debounce(fn, 100);`,
            `import { debounce } from "lodash";
             const result = debounce(fn, 100);`
        ).withPath("src/index.js")
    );

    // Convert async generator to array
    const sourcesArray = [];
    for await (const source of sources) {
        sourcesArray.push(source);
    }

    return spec.rewriteRun(...sourcesArray);
});
```

### Type Attribution with package.json

When testing recipes that generate code using external libraries, proper type attribution requires the dependencies to be available:

```typescript
test("add typed library call", async () => {
    const spec = new RecipeSpec();
    spec.recipe = new AddDateValidation();

    const sources = npm(
        __dirname,

        // Dependencies needed for type attribution
        packageJson(JSON.stringify({
            dependencies: {
                "date-fns": "^2.30.0"
            },
            devDependencies: {
                "@types/node": "^20.0.0"
            }
        })),

        typescript(
            `function processDate(input: string) {
                 // Process date
             }`,
            `import { isValid, parseISO } from "date-fns";

             function processDate(input: string) {
                 const date = parseISO(input);
                 if (!isValid(date)) {
                     throw new Error("Invalid date");
                 }
                 // Process date
             }`
        ).withPath("src/dates.ts")
    );

    const sourcesArray = [];
    for await (const source of sources) {
        sourcesArray.push(source);
    }

    return spec.rewriteRun(...sourcesArray);
});
```

### Testing React Components with npm

```typescript
test("transform React component", async () => {
    const spec = new RecipeSpec();
    spec.recipe = new ConvertClassToFunction();

    const sources = npm(
        __dirname,

        packageJson(JSON.stringify({
            dependencies: {
                "react": "^18.0.0",
                "react-dom": "^18.0.0"
            },
            devDependencies: {
                "@types/react": "^18.0.0",
                "@types/react-dom": "^18.0.0"
            }
        })),

        tsx(
            `import React from 'react';

             class MyComponent extends React.Component {
                 render() {
                     return <div>Hello</div>;
                 }
             }`,
            `import React from 'react';

             function MyComponent() {
                 return <div>Hello</div>;
             }`
        ).withPath("src/MyComponent.tsx")
    );

    const sourcesArray = [];
    for await (const source of sources) {
        sourcesArray.push(source);
    }

    return spec.rewriteRun(...sourcesArray);
});
```

### Important Notes about npm Function

1. **Caching**: The `npm` function caches installed dependencies to avoid redundant installations
2. **Relative Path**: The first argument to `npm` is the directory where `node_modules` will be created
3. **Async Generator**: `npm` returns an async generator, so you need to iterate over it to get the sources
4. **Type Resolution**: Having the actual packages installed enables proper type resolution in patterns and templates
5. **Performance**: First test run may be slower due to npm install, subsequent runs use cache

### Using packageJson Separately

You can also test transformations on `package.json` itself:

```typescript
test("update package.json dependencies", () => {
    const spec = new RecipeSpec();
    spec.recipe = new UpdateDependencyVersion();

    return spec.rewriteRun(
        packageJson(
            JSON.stringify({
                dependencies: {
                    "lodash": "^3.0.0"
                }
            }, null, 2),
            JSON.stringify({
                dependencies: {
                    "lodash": "^4.17.21"
                }
            }, null, 2)
        )
    );
});
```

## AST Assertions with afterRecipe

Use `afterRecipe` to make assertions about the AST structure after the recipe runs:

### Basic AST Inspection

```typescript
import {JS} from "@openrewrite/rewrite/javascript";
import {J} from "@openrewrite/rewrite/java";

test("verify AST structure", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    return spec.rewriteRun({
        ...javascript(
            `if (true) foo();`,
            `if (bar()) bar();`
        ),
        afterRecipe: (cu: JS.CompilationUnit) => {
            // Navigate to the if statement
            const ifStmt = cu.statements[0].element as J.If;

            // Assert on condition
            const condition = ifStmt.ifCondition.tree.element;
            expect(condition.kind).toBe(J.Kind.MethodInvocation);
            expect((condition as J.MethodInvocation).name.simpleName).toBe('bar');

            // Assert on body
            const body = ifStmt.thenPart.element;
            expect(body.kind).toBe(JS.Kind.ExpressionStatement);
        }
    });
});
```

### Verifying Markers

Check that specific markers are added:

```typescript
import {SearchResult, randomId} from "@openrewrite/rewrite";

test("verify markers added", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MarkDeprecatedApis();

    return spec.rewriteRun({
        ...javascript(
            `oldApi.deprecated();`,
            `oldApi.deprecated();`  // No text change, but marker added
        ),
        afterRecipe: (cu: JS.CompilationUnit) => {
            const methodInvocation = cu.statements[0].element;

            // Verify SearchResult marker was added
            const searchResult = methodInvocation.markers.markers.find(
                m => m instanceof SearchResult
            );
            expect(searchResult).toBeDefined();
            expect((searchResult as SearchResult).description)
                .toContain("deprecated");
        }
    });
});
```

### Counting Elements with Visitor

Use a visitor to count or validate elements:

```typescript
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";

test("verify comment preservation", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    return spec.rewriteRun({
        ...javascript(`
            /*1*/
            const /*2*/ x /*3*/ = /*4*/ 10;/*5*/
        `),
        afterRecipe: async (cu: JS.CompilationUnit) => {
            let commentCount = 0;

            const countComments = new class extends JavaScriptVisitor<void> {
                public override async visitSpace(space: J.Space, p: void): Promise<J.Space> {
                    const ret = await super.visitSpace(space, p);
                    commentCount += ret.comments.length;
                    return ret;
                }
            }

            await countComments.visit(cu, undefined);
            expect(commentCount).toBe(5);
        }
    });
});
```

### Complex Assertions

Perform deep validation of transformations:

```typescript
test("verify nested structure", () => {
    const spec = new RecipeSpec();
    spec.recipe = new WrapInTryCatch();

    return spec.rewriteRun({
        ...javascript(
            `doSomething();`,
            `try { doSomething(); } catch (e) { handleError(e); }`
        ),
        afterRecipe: (cu: JS.CompilationUnit) => {
            const tryStmt = cu.statements[0].element as J.Try;

            // Verify try block
            expect(tryStmt.body.statements.length).toBe(1);
            const tryBody = tryStmt.body.statements[0].element;
            expect(tryBody.kind).toBe(JS.Kind.ExpressionStatement);

            // Verify catch block
            expect(tryStmt.catches.length).toBe(1);
            const catchClause = tryStmt.catches[0].element;
            expect(catchClause.parameter.tree.element.simpleName).toBe('e');

            const catchBody = catchClause.body.statements[0].element as JS.ExpressionStatement;
            const catchCall = catchBody.expression as J.MethodInvocation;
            expect(catchCall.name.simpleName).toBe('handleError');
        }
    });
});
```

## Pre-Recipe Transformations with beforeRecipe

Use `beforeRecipe` to modify the AST before the recipe runs:

### Adding Markers

```typescript
import {produce} from "immer";

test("recipe handles existing markers", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    return spec.rewriteRun({
        ...javascript(
            `foo();`,
            `bar();`
        ),
        beforeRecipe: (cu: JS.CompilationUnit) => {
            // Add a marker before recipe runs
            const stmt = cu.statements[0];
            return produce(cu, draft => {
                draft.statements[0] = produce(stmt, s => {
                    s.element.markers = s.element.markers.add(
                        new SearchResult(randomId(), "test marker")
                    );
                });
            });
        },
        afterRecipe: (cu: JS.CompilationUnit) => {
            // Verify recipe preserved or transformed the marker
            const marker = cu.statements[0].element.markers.markers.find(
                m => m instanceof SearchResult
            );
            expect(marker).toBeDefined();
        }
    });
});
```

### Setting Up Test Data

```typescript
test("recipe with pre-configured AST", () => {
    const spec = new RecipeSpec();
    spec.recipe = new ProcessAnnotatedMethods();

    return spec.rewriteRun({
        ...typescript(`
            class MyClass {
                myMethod() {}
            }
        `),
        beforeRecipe: async (cu: JS.CompilationUnit) => {
            // Add type information or annotations programmatically
            // This is useful when testing recipes that depend on
            // specific AST structures that are hard to write directly
            return produce(cu, draft => {
                // Modify the AST as needed
            });
        }
    });
});
```

## Dynamic After Validation

The `after` parameter can be a function for dynamic validation:

### Custom Validation Function

```typescript
test("dynamic after validation", () => {
    const spec = new RecipeSpec();
    spec.recipe = new InjectTimestamp();

    return spec.rewriteRun({
        before: `const x = 1;`,
        after: (actual: string) => {
            // Verify structure but allow dynamic content
            expect(actual).toMatch(/const x = 1;.*\/\/ Generated at \d{4}-\d{2}-\d{2}/);
            return undefined;  // Don't compare string equality
        },
        ...javascript.defaults()
    });
});
```

### Regex Matching

```typescript
test("validate with regex", () => {
    const spec = new RecipeSpec();
    spec.recipe = new GenerateId();

    return spec.rewriteRun({
        before: `const obj = {};`,
        after: (actual: string) => {
            // Validate UUID was inserted
            expect(actual).toMatch(/const obj = \{ id: '[0-9a-f-]{36}' \};/);
            return undefined;
        },
        ...javascript.defaults()
    });
});
```

## Testing Generated Files

Test recipes that create new files:

```typescript
test("recipe generates new file", () => {
    const spec = new RecipeSpec();
    spec.recipe = new GenerateIndexFile();

    return spec.rewriteRun(
        // Input file
        javascript(`export const foo = 1;`),

        // Generated file (no 'before', only 'after')
        {
            before: null,  // Indicates this file doesn't exist yet
            after: `export * from './file.js';`,
            path: "index.js",
            ...javascript.defaults()
        }
    );
});
```

## Data Table Assertions

Test recipes that populate data tables:

```typescript
test("recipe populates data table", () => {
    const spec = new RecipeSpec();
    spec.recipe = new FindDeprecatedApis();

    // Register data table assertion
    spec.dataTable("deprecated-apis", (rows: DeprecatedApiRow[]) => {
        expect(rows.length).toBe(2);
        expect(rows[0].apiName).toBe("oldMethod");
        expect(rows[1].apiName).toBe("legacyFunction");
    });

    return spec.rewriteRun(
        javascript(`
            oldMethod();
            legacyFunction();
        `)
    );
});
```

## Testing Edge Cases

### Multiple Files

Test transformations across multiple files:

```typescript
test("cross-file transformation", () => {
    const spec = new RecipeSpec();
    spec.recipe = new UpdateImports();

    return spec.rewriteRun(
        javascript(
            `import {oldName} from './utils';`,
            `import {newName} from './utils';`,
            { path: "src/main.js" }
        ),
        javascript(
            `export const oldName = 1;`,
            `export const newName = 1;`,
            { path: "src/utils.js" }
        )
    );
});
```

### No Change Scenarios

Verify recipe doesn't modify files it shouldn't:

```typescript
test("recipe ignores unrelated code", () => {
    const spec = new RecipeSpec();
    spec.recipe = new RenameSpecificMethod({
        oldName: "foo",
        newName: "bar"
    });

    return spec.rewriteRun(
        // Should be modified
        javascript(
            `foo();`,
            `bar();`
        ),

        // Should NOT be modified (different method name)
        javascript(`baz();`)
    );
});
```

### Error Handling

Test that recipes handle malformed input gracefully:

```typescript
test("recipe handles invalid syntax", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();
    spec.checkParsePrintIdempotence = false;  // Parsing will fail

    // This should either skip the file or handle the error gracefully
    expect(() => spec.rewriteRun(
        javascript(`this is not valid JavaScript`)
    )).not.toThrow();
});
```

### Whitespace Preservation

Verify formatting is preserved:

```typescript
test("preserves whitespace", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    return spec.rewriteRun(
        javascript(
            `
                function   foo(  )   {
                    return   1  ;
                }
            `,
            `
                function   bar(  )   {
                    return   1  ;
                }
            `
        )
    );
});
```

### Comments Preservation

Verify comments are not lost:

```typescript
test("preserves comments", () => {
    const spec = new RecipeSpec();
    spec.recipe = new RenameFunction();

    return spec.rewriteRun(
        javascript(
            `
                // Important comment
                function foo() {
                    /* Block comment */
                    return 1;
                }
            `,
            `
                // Important comment
                function bar() {
                    /* Block comment */
                    return 1;
                }
            `
        )
    );
});
```

## Best Practices

### 1. Test Multiple Scenarios

```typescript
describe("rename-method", () => {
    test("with no arguments", () => { /* ... */ });
    test("with single argument", () => { /* ... */ });
    test("with multiple arguments", () => { /* ... */ });
    test("with spread arguments", () => { /* ... */ });
    test("nested in expression", () => { /* ... */ });
});
```

### 2. Use Descriptive Test Names

```typescript
// Good
test("renames method but preserves chained calls", () => { /* ... */ });

// Less helpful
test("test rename", () => { /* ... */ });
```

### 3. Verify Both Text and AST

Combine text assertions with AST assertions for comprehensive testing:

```typescript
test("comprehensive validation", () => {
    const spec = new RecipeSpec();
    spec.recipe = new MyRecipe();

    return spec.rewriteRun({
        ...javascript(
            `foo();`,
            `bar();`  // Text assertion
        ),
        afterRecipe: (cu: JS.CompilationUnit) => {
            // AST assertion
            const call = cu.statements[0].element as JS.ExpressionStatement;
            const method = call.expression as J.MethodInvocation;
            expect(method.name.simpleName).toBe('bar');
            expect(method.methodType).toBeDefined();  // Type info preserved
        }
    });
});
```

### 4. Test Idempotence

Verify recipes are idempotent (running twice produces same result):

```typescript
test("recipe is idempotent", async () => {
    const spec1 = new RecipeSpec();
    spec1.recipe = new MyRecipe();
    await spec1.rewriteRun(javascript(`foo();`, `bar();`));

    // Run again on already-transformed code
    const spec2 = new RecipeSpec();
    spec2.recipe = new MyRecipe();
    await spec2.rewriteRun(javascript(`bar();`));  // Should not change
});
```

### 5. Isolate Test Cases

Keep tests independent and focused on one thing:

```typescript
// Good - focused test
test("renames method name only", () => { /* ... */ });

// Less good - testing multiple things
test("renames method and adds comments and reformats", () => { /* ... */ });
```
