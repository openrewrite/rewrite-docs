# OpenRewrite Recipe Examples

Complete, real-world examples of OpenRewrite recipes in TypeScript.

## Table of Contents

1. [Simple Visitor-Based Recipe](#example-1-simple-visitor-based-recipe)
2. [Pattern-Based Transformation](#example-2-pattern-based-transformation)
3. [Recipe with Options](#example-3-recipe-with-options)
4. [Method Renaming with Variadic Arguments](#example-4-method-renaming-with-variadic-arguments)
5. [Scanning Recipe](#example-5-scanning-recipe)
6. [Complex Pattern Matching](#example-6-complex-pattern-matching)
7. [Conditional Transformation](#example-7-conditional-transformation)

## Example 1: Simple Visitor-Based Recipe

**Goal:** Modernize octal literals from old style (`0777`) to ES6 style (`0o777`)

### Recipe Implementation

```typescript
/*
 * rewrite-javascript/rewrite/src/javascript/migrate/es6/modernize-octal-literals.ts
 */
import {ExecutionContext, Recipe, TreeVisitor} from "@openrewrite/rewrite";
import {J} from "@openrewrite/rewrite/java";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";
import {produce} from "immer";

export class ModernizeOctalLiterals extends Recipe {
    name = "org.openrewrite.javascript.migrate.es6.modernize-octal-literals";
    displayName = "Modernize octal literals";
    description = "Convert old-style octal literals (e.g., `0777`) to modern ES6 syntax (e.g., `0o777`).";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        return new class extends JavaScriptVisitor<ExecutionContext> {

            protected async visitLiteral(
                literal: J.Literal,
                _ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Only process numeric literals
                if (typeof literal.value !== 'number') {
                    return literal;
                }

                const valueSource = literal.valueSource;
                if (!valueSource) {
                    return literal;
                }

                // Check if this is an old-style octal literal
                // Old-style: starts with 0 followed by one or more octal digits (0-7)
                const oldStyleOctalPattern = /^0([0-7]+)$/;
                const match = valueSource.match(oldStyleOctalPattern);

                if (match) {
                    // Convert to modern ES6 octal syntax
                    const octalDigits = match[1];
                    const modernOctal = `0o${octalDigits}`;

                    return produce(literal, draft => {
                        draft.valueSource = modernOctal;
                    });
                }

                return literal;
            }
        }
    }
}
```

### Tests

```typescript
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript} from "@openrewrite/rewrite/javascript";
import {ModernizeOctalLiterals} from "./modernize-octal-literals";

describe("modernize-octal-literals", () => {
    test("convert octal literal", () => {
        const spec = new RecipeSpec();
        spec.recipe = new ModernizeOctalLiterals();

        return spec.rewriteRun(
            javascript(
                `const permissions = 0777;`,
                `const permissions = 0o777;`
            )
        );
    });
});
```

For more test examples including multiple literals, edge cases, and negative tests, see [Testing Recipes Guide](./testing-recipes.md).

### Key Takeaways

- **Override specific visit methods** - `visitLiteral()` for literal nodes
- **Type check values** - Ensure `literal.value` is a number
- **Use regex for pattern matching** - String manipulation for source code
- **Use `produce()` for immutability** - Modify draft, not original
- **Return original if no change** - Early returns for efficiency
- **Test edge cases** - Zero, hex, binary, already-modern octals

## Example 2: Pattern-Based Transformation

**Goal:** Transform `console.log()` calls to use a custom logger

### Recipe Implementation

```typescript
/*
 * Hypothetical: rewrite-javascript/rewrite/src/javascript/logging/use-custom-logger.ts
 */
import {ExecutionContext, Recipe, TreeVisitor} from "@openrewrite/rewrite";
import {J} from "@openrewrite/rewrite/java";
import {capture, pattern, template, rewrite} from "@openrewrite/rewrite/javascript";

export class UseCustomLogger extends Recipe {
    name = "org.openrewrite.javascript.logging.use-custom-logger";
    displayName = "Use custom logger";
    description = "Replace `console.log()` with custom logger.";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        // Define the rewrite rule once
        const rule = rewrite(() => {
            const args = capture({ variadic: true });
            return {
                before: pattern`console.log(${args})`,
                after: template`logger.info(${args})`
            };
        });

        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Match: console.log(...)
                // Replace with: logger.info(...)
                return await rule.tryOn(this.cursor, method) || method;
            }
        }
    }
}
```

### Tests

```typescript
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {UseCustomLogger} from "./use-custom-logger";
import {javascript} from "@openrewrite/rewrite/javascript";

describe("use-custom-logger", () => {
    test("transform console.log", () => {
        const spec = new RecipeSpec();
        spec.recipe = new UseCustomLogger();

        return spec.rewriteRun(
            javascript(
                `console.log("hello");`,
                `logger.info("hello");`
            )
        );
    });
});
```

For variadic argument testing and negative test cases, see [Testing Recipes Guide](./testing-recipes.md).

### Key Takeaways

- **Variadic captures** - `capture({ variadic: true })` matches any number of arguments
- **rewrite() helper** - Returns a `RewriteRule` that combines pattern matching and template application
- **Builder function pattern** - Define captures inside `rewrite(() => {...})` builder
- **tryOn() method** - Call `rule.tryOn(cursor, node)` to apply the transformation
- **`|| method` fallback** - Returns original if no match
- **Test variadic cases** - 0 args, 1 arg, many args

## Example 3: Recipe with Options

**Goal:** Rename a configurable method name

### Recipe Implementation

```typescript
/*
 * Hypothetical: rewrite-javascript/rewrite/src/javascript/refactor/rename-method.ts
 */
import {Option, Recipe} from "@openrewrite/rewrite";
import {TreeVisitor} from "@openrewrite/rewrite";
import {ExecutionContext} from "@openrewrite/rewrite";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";
import {J, isIdentifier} from "@openrewrite/rewrite/java";
import {capture, pattern, template, rewrite} from "@openrewrite/rewrite/javascript";

export class RenameMethod extends Recipe {
    name = "org.openrewrite.javascript.refactor.rename-method";
    displayName = "Rename method";
    description = "Rename a method to a new name.";

    @Option({
        displayName: "Old method name",
        description: "The current method name to be renamed",
        example: "oldMethod"
    })
    oldMethodName!: string;

    @Option({
        displayName: "New method name",
        description: "The new name for the method",
        example: "newMethod"
    })
    newMethodName!: string;

    @Option({
        displayName: "Match owner",
        description: "Only rename methods called on this receiver (optional)",
        example: "api",
        required: false
    })
    matchOwner?: string;

    constructor(options?: { oldMethodName?: string; newMethodName?: string; matchOwner?: string }) {
        super(options);
        this.oldMethodName ??= '';
        this.newMethodName ??= '';
    }

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        // Capture options in closure for visitor access
        const oldName = this.oldMethodName;
        const newName = this.newMethodName;
        const owner = this.matchOwner;

        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Check method name matches
                if (!isIdentifier(method.name) ||
                    method.name.simpleName !== oldName) {
                    return method;
                }

                // If owner specified, check it matches
                if (owner && isIdentifier(method.select) &&
                    method.select.simpleName !== owner) {
                    return method;
                }

                // Build rule based on whether owner is specified
                const rule = rewrite(() => {
                    const args = capture({ variadic: true });
                    if (owner) {
                        return {
                            before: pattern`${owner}.${oldName}(${args})`,
                            after: template`${owner}.${newName}(${args})`
                        };
                    } else {
                        return {
                            before: pattern`${oldName}(${args})`,
                            after: template`${newName}(${args})`
                        };
                    }
                });

                return await rule.tryOn(this.cursor, method) || method;
            }
        }
    }
}
```

### Tests

```typescript
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {RenameMethod} from "./rename-method";
import {javascript} from "@openrewrite/rewrite/javascript";

describe("rename-method", () => {
    test("rename method", () => {
        const spec = new RecipeSpec();
        spec.recipe = new RenameMethod({
            oldMethodName: "getData",
            newMethodName: "fetchData"
        });

        return spec.rewriteRun(
            javascript(
                `getData();`,
                `fetchData();`
            )
        );
    });
});
```

For comprehensive testing examples including edge cases, optional parameters, and negative tests, see [Testing Recipes Guide](./testing-recipes.md).

### Key Takeaways

- **@Option decorator** - Declares configurable parameters
- **Capture in closure** - Options must be captured for visitor access
- **Conditional logic** - Check conditions before pattern matching
- **Dynamic patterns** - Build different patterns based on configuration
- **Each test configures recipe** - Create new recipe instance per test

## Example 4: Method Renaming with Variadic Arguments

**Goal:** Add "Async" suffix to method calls and preserve all arguments

### Recipe Implementation

```typescript
/*
 * Hypothetical: rewrite-javascript/rewrite/src/javascript/migrate/add-async-suffix.ts
 */
import {Recipe} from "@openrewrite/rewrite";
import {TreeVisitor} from "@openrewrite/rewrite";
import {ExecutionContext} from "@openrewrite/rewrite";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";
import {J, isIdentifier} from "@openrewrite/rewrite/java";
import {capture, pattern, template} from "@openrewrite/rewrite/javascript";

export class AddAsyncSuffix extends Recipe {
    name = "org.openrewrite.javascript.migrate.add-async-suffix";
    displayName = "Add async suffix";
    description = "Add 'Async' suffix to async method calls.";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        const methodName = capture<J.Identifier>('methodName');
        const args = capture({ variadic: true });

        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Match: api.methodName(...)
                const match = await pattern`api.${methodName}(${args})`.match(method, this.cursor);

                if (match) {
                    const name = match.get(methodName);
                    if (isIdentifier(name)) {
                        // Build new name with Async suffix
                        const newName = name.simpleName + 'Async';

                        // Use property access in template
                        return await template`api.${newName}(${args})`.apply(this.cursor, method, match);
                    }
                }

                return method;
            }
        }
    }
}
```

### Tests

```typescript
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {AddAsyncSuffix} from "./add-async-suffix";
import {javascript} from "@openrewrite/rewrite/javascript";

describe("add-async-suffix", () => {
    test("add async suffix to method", () => {
        const spec = new RecipeSpec();
        spec.recipe = new AddAsyncSuffix();

        return spec.rewriteRun(
            javascript(
                `api.getData();`,
                `api.getDataAsync();`
            )
        );
    });
});
```

For examples with variadic arguments, complex expressions, and argument preservation, see [Testing Recipes Guide](./testing-recipes.md).

### Key Takeaways

- **Property access in templates** - `${methodName}` extracts the name
- **String interpolation** - Build new names from captured values
- **Variadic preservation** - All arguments passed through unchanged
- **Complex argument preservation** - Nested structures maintained

## Example 5: Scanning Recipe

**Goal:** Find all function names in first pass, then mark ones that are called

### Recipe Implementation

```typescript
/*
 * Hypothetical: rewrite-javascript/rewrite/src/javascript/analysis/mark-called-functions.ts
 */
import {ScanningRecipe} from "@openrewrite/rewrite";
import {TreeVisitor} from "@openrewrite/rewrite";
import {ExecutionContext} from "@openrewrite/rewrite";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";
import {J, isIdentifier} from "@openrewrite/rewrite/java";
import {SearchResult} from "@openrewrite/rewrite";
import {randomId} from "@openrewrite/rewrite";

export class MarkCalledFunctions extends ScanningRecipe<Set<string>, ExecutionContext> {
    name = "org.openrewrite.javascript.analysis.mark-called-functions";
    displayName = "Mark called functions";
    description = "Mark functions that are actually called.";

    // First pass: collect all function call names
    async scanner(): Promise<TreeVisitor<any, ExecutionContext>> {
        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Collect function names
                if (isIdentifier(method.name)) {
                    this.accumulate(method.name.simpleName);
                }
                return method;
            }
        }
    }

    // Second pass: mark function declarations that are called
    async editor(calledNames: Set<string>): Promise<TreeVisitor<any, ExecutionContext>> {
        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitFunctionDeclaration(
                func: J.FunctionDeclaration,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                if (isIdentifier(func.name) &&
                    calledNames.has(func.name.simpleName)) {
                    // Mark this function as called
                    return func.withMarkers(
                        func.markers.add(
                            new SearchResult(randomId(), "Function is called")
                        )
                    );
                }
                return func;
            }
        }
    }
}
```

### Tests

```typescript
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {MarkCalledFunctions} from "./mark-called-functions";
import {javascript} from "@openrewrite/rewrite/javascript";

describe("mark-called-functions", () => {
    test("mark called function", () => {
        const spec = new RecipeSpec();
        spec.recipe = new MarkCalledFunctions();

        return spec.rewriteRun(
            javascript(
                `
                function used() {}
                function unused() {}
                used();
                `,
                `
                /*~~>*/function used() {}
                function unused() {}
                used();
                `
            )
        );
    });
});
```

For examples using `afterRecipe` to verify markers and scanning recipe edge cases, see [Testing Recipes Guide](./testing-recipes.md).

### Key Takeaways

- **ScanningRecipe** - Two-pass recipe for analysis
- **scanner()** - First pass collects data
- **editor()** - Second pass uses collected data
- **accumulate()** - Stores data in accumulator
- **Markers** - Attach metadata without changing AST structure
- **SearchResult marker** - Standard marker for highlighting

## Example 6: Complex Pattern Matching

**Goal:** Transform chained method calls with constraints

### Recipe Implementation

```typescript
/*
 * Hypothetical: rewrite-javascript/rewrite/src/javascript/refactor/simplify-chain.ts
 */
import {Recipe} from "@openrewrite/rewrite";
import {TreeVisitor} from "@openrewrite/rewrite";
import {ExecutionContext} from "@openrewrite/rewrite";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";
import {J} from "@openrewrite/rewrite/java";
import {capture, pattern, template, rewrite} from "@openrewrite/rewrite/javascript";

export class SimplifyChain extends Recipe {
    name = "org.openrewrite.javascript.refactor.simplify-chain";
    displayName = "Simplify method chain";
    description = "Simplify `.map().filter()` to `.flatMap()`.";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        const rule = rewrite(() => {
            const mapArg = capture<J.ArrowFunction>({
                name: 'mapArg',
                constraint: (n) => n.kind === J.Kind.Lambda &&
                                   (n as J.Lambda).body.kind === J.Kind.Block
            });
            const filterArg = capture({ name: 'filterArg' });
            const array = capture({ name: 'array' });

            return {
                before: pattern`${array}.map(${mapArg}).filter(${filterArg})`,
                after: template`${array}.flatMap((x) => {
                    const result = ${mapArg}(x);
                    return result ? [result.filter(${filterArg})] : [];
                })`
            };
        });

        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Match: array.map(x => {...}).filter(predicate)
                // Transform to: array.flatMap(x => {...}.filter(predicate))
                return await rule.tryOn(this.cursor, method) || method;
            }
        }
    }
}
```

### Key Takeaways

- **Kind-based constraints** - Use `node.kind === J.Kind.Lambda` to check types in constraints
- **Chained kind checks** - Check nested properties like `(n as J.Lambda).body.kind === J.Kind.Block`
- **Nested patterns** - Match chained method calls
- **Complex templates** - Generate multi-line code structures
- **Named captures** - Improve readability with names

## Example 7: Conditional Transformation

**Goal:** Different transformations based on argument types

### Recipe Implementation

```typescript
/*
 * Hypothetical: rewrite-javascript/rewrite/src/javascript/migrate/optimize-assertions.ts
 */
import {Recipe} from "@openrewrite/rewrite";
import {TreeVisitor} from "@openrewrite/rewrite";
import {ExecutionContext} from "@openrewrite/rewrite";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";
import {J, isLiteral} from "@openrewrite/rewrite/java";
import {capture, pattern, template} from "@openrewrite/rewrite/javascript";

export class OptimizeAssertions extends Recipe {
    name = "org.openrewrite.javascript.migrate.optimize-assertions";
    displayName = "Optimize assertions";
    description = "Optimize `assert.equal()` calls based on argument types.";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        const left = capture('left');
        const right = capture('right');

        return new class extends JavaScriptVisitor<ExecutionContext> {
            protected async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Match: assert.equal(left, right)
                const pat = pattern`assert.equal(${left}, ${right})`;
                const match = await pat.match(method, this.cursor);

                if (!match) {
                    return method;
                }

                const leftVal = match.get(left);
                const rightVal = match.get(right);

                // Choose template based on argument types
                let tmpl;
                if (isLiteral(leftVal) && isLiteral(rightVal)) {
                    // Both literals: use strict equality
                    tmpl = template`assert.strictEqual(${left}, ${right})`;
                } else if (this.isObjectExpression(leftVal) ||
                           this.isObjectExpression(rightVal)) {
                    // Object comparison: use deep equal
                    tmpl = template`assert.deepEqual(${left}, ${right})`;
                } else {
                    // Default: keep as-is
                    return method;
                }

                return await tmpl.apply(this.cursor, method, match);
            }

            private isObjectExpression(node: J | undefined): boolean {
                return node?.kind === J.Kind.NewArray ||
                       node?.kind === J.Kind.NewClass;
            }
        }
    }
}
```

### Tests

```typescript
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {OptimizeAssertions} from "./optimize-assertions";
import {javascript} from "@openrewrite/rewrite/javascript";

describe("optimize-assertions", () => {
    test("optimize literal comparison", () => {
        const spec = new RecipeSpec();
        spec.recipe = new OptimizeAssertions();

        return spec.rewriteRun(
            javascript(
                `assert.equal(1, 2);`,
                `assert.strictEqual(1, 2);`
            )
        );
    });
});
```

For examples with object comparisons, negative tests, and conditional transformation cases, see [Testing Recipes Guide](./testing-recipes.md).

### Key Takeaways

- **Post-match logic** - Check captured values after successful match
- **Multiple templates** - Choose template based on captured values
- **Helper methods** - Extract type checking to helper methods
- **Type guard functions** - Use `isLiteral()` or check `node?.kind === J.Kind.Literal`
- **Selective transformation** - Return original when no optimization applies

## Running Examples

Build and test:

```bash
# Install dependencies
./gradlew :rewrite-javascript:npmInstall

# Run all tests
./gradlew :rewrite-javascript:npm_test

# Run specific test
cd rewrite-javascript/rewrite
npm test -- modernize-octal-literals.test.ts

# Build
./gradlew :rewrite-javascript:npm_run_build
```

## Summary

Key patterns across all examples:

1. **Extend Recipe or ScanningRecipe**
2. **Implement editor() returning a visitor**
3. **Override specific visit methods**
4. **Use produce() for immutable updates**
5. **Pattern matching for declarative transformations**
6. **Variadic captures for flexible argument matching**
7. **Options for configurable recipes**
8. **Comprehensive tests with edge cases**
9. **Early returns when no transformation needed**
10. **Type guards or kind checks** - Use `isIdentifier()` or `node.kind === J.Kind.Identifier` instead of `instanceof`
