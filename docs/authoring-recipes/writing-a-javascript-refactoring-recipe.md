---
description: A step-by-step guide to creating imperative JavaScript/TypeScript recipes and their corresponding tests.
---

import ReactPlayer from 'react-player';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Writing a JavaScript refactoring recipe

Ready to write your first JavaScript recipe? This guide will walk you through creating a real-world refactoring recipe. 

We'll tackle a common migration scenario: replacing deprecated Node.js `util` type-checking methods with native JavaScript alternatives. 

For example, our recipe will transform code like this:

```javascript
import * as util from 'util';

// highlight-next-line
if (util.isArray(arr)) {
    console.log('is array');
}
```

Into code like this:

```javascript
import * as util from 'util';

// highlight-next-line
if (Array.isArray(arr)) {
    console.log('is array');
}
```

## Prerequisites

This guide assumes you have already [set up your JavaScript recipe development environment](./javascript-recipe-development-environment.md) and have basic familiarity with TypeScript.

:::tip
If you use our [javascript-recipe-starter template](https://github.com/moderneinc/javascript-recipe-starter), you will already have all the necessary configuration in place!

This template repository also contains all of the code we will be using throughout this guide.
:::

## Outlining the recipe

Let's start by creating a TypeScript class called `MigrateUtilFunctions` that extends `Recipe` from `@openrewrite/rewrite`. At a minimum, this recipe should have:

* A unique `name` property that identifies the recipe.
* A `displayName` property that provides a human-readable name.
* A `description` property that explains what the recipe does.
* An `editor()` method that returns a visitor to perform the transformation.

Here is what that class would look like with just these basics defined:

```typescript title='migrate-util-functions.ts'
import { ExecutionContext, Recipe, TreeVisitor } from '@openrewrite/rewrite';
import { JavaScriptVisitor } from '@openrewrite/rewrite/javascript';

export class MigrateUtilFunctions extends Recipe {
    readonly name = "com.yourorg.MigrateUtilFunctions";
    readonly displayName = "Migrate util type checking functions";
    readonly description = "Replace deprecated util.isX() methods with native JavaScript equivalents";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        // TODO: Return a visitor that performs the transformation
        return new JavaScriptVisitor<ExecutionContext>();
    }
}
```

Note that this recipe doesn't _do_ anything, yet - we'll get to that later.

## Registering your recipe

Next, let's ensure your recipe can be discovered and run by the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro). Update your `src/index.ts` to export and register the recipe:

```typescript title="index.ts"
import { RecipeRegistry } from '@openrewrite/rewrite';
import { MigrateUtilFunctions } from './migrate-util-functions';

export { MigrateUtilFunctions } from './migrate-util-functions';

/**
 * Activates and registers all recipes in this module.
 * This function is called by OpenRewrite to discover available recipes.
 *
 * @param registry The recipe registry to register recipes with
 */
export function activate(registry: RecipeRegistry) {
    registry.register(MigrateUtilFunctions);
}
```

The `activate()` function is called by the Moderne CLI when loading your package and registers your recipes so they can be used with `mod run`. **Without this function, the CLI will not be able to find or run your recipes**.

## Writing tests

Now that we have a basic recipe defined (albeit one that doesn't actually _do_ anything), let's write tests to define our expected behavior. This will not only allow us to confirm that we've set everything up correctly so far, but it will also ensure that we've thought more about how this recipe will work.

For our `MigrateUtilFunctions` recipe, we want to ensure:

* That `util.isArray()` calls are replaced with `Array.isArray()`
* That `util.isBoolean()` calls are replaced with `typeof x === 'boolean'`
* That `util.isString()` calls are replaced with `typeof x === 'string'`
* That non-util method calls are left unchanged
* That the recipe handles complex expressions as arguments
* That the recipe handles different types of ways people may import and use util functions (such as named imports or namespaces)

<details>
<summary>
Below is an example of what all these tests might look like:
</summary>

```typescript title="migrate-util-functions.test.ts"
import { RecipeSpec } from '@openrewrite/rewrite/test';
import { typescript } from '@openrewrite/rewrite/javascript';
import { MigrateUtilFunctions } from '../src';

describe('MigrateUtilFunctions', () => {
    const spec = new RecipeSpec();

    beforeEach(() => {
        spec.recipe = new MigrateUtilFunctions();
    });

    test('migrates util.isArray to Array.isArray', async () => {
        await spec.rewriteRun(
            typescript(
                `
                import * as util from 'util';

                const arr = [1, 2, 3];
                if (util.isArray(arr)) {
                    console.log('is array');
                }
                `,
                `
                import * as util from 'util';

                const arr = [1, 2, 3];
                if (Array.isArray(arr)) {
                    console.log('is array');
                }
                `
            )
        );
    });

    test('migrates util.isBoolean to typeof check', async () => {
        await spec.rewriteRun(
            typescript(
                `
                import * as util from 'util';

                const value = true;
                if (util.isBoolean(value)) {
                    console.log('is boolean');
                }
                `,
                `
                import * as util from 'util';

                const value = true;
                if (typeof value === 'boolean') {
                    console.log('is boolean');
                }
                `
            )
        );
    });

    test('migrates util.isString to typeof check', async () => {
        await spec.rewriteRun(
            typescript(
                `
                import * as util from 'util';

                const text = "hello";
                if (util.isString(text)) {
                    console.log('is string');
                }
                `,
                `
                import * as util from 'util';

                const text = "hello";
                if (typeof text === 'string') {
                    console.log('is string');
                }
                `
            )
        );
    });

    test('migrates multiple util calls in the same file', async () => {
        await spec.rewriteRun(
            typescript(
                `
                import * as util from 'util';

                function checkType(value) {
                    if (util.isArray(value)) {
                        return 'array';
                    }
                    if (util.isBoolean(value)) {
                        return 'boolean';
                    }
                    if (util.isString(value)) {
                        return 'string';
                    }
                    return 'unknown';
                }
                `,
                `
                import * as util from 'util';

                function checkType(value) {
                    if (Array.isArray(value)) {
                        return 'array';
                    }
                    if (typeof value === 'boolean') {
                        return 'boolean';
                    }
                    if (typeof value === 'string') {
                        return 'string';
                    }
                    return 'unknown';
                }
                `
            )
        );
    });

    test('does not modify non-util method calls', async () => {
        await spec.rewriteRun(
            typescript(
                `
                const myObj = {
                    isArray: (x) => Array.isArray(x),
                    isString: (x) => typeof x === 'string'
                };

                myObj.isArray([]);
                myObj.isString("test");
                `
            )
        );
    });

    test('handles complex expressions as arguments', async () => {
        await spec.rewriteRun(
            typescript(
                `
                import * as util from 'util';

                const result = util.isArray(getData().items);
                `,
                `
                import * as util from 'util';

                const result = Array.isArray(getData().items);
                `
            )
        );
    });

    // Ensure we handle different types of ways people
    // may import and use the util functions.
    test('handles named imports', async () => {
        await spec.rewriteRun(
            typescript(
                `
                import { isArray } from 'util';

                const arr = [1, 2, 3];
                if (isArray(arr)) {
                    console.log('is array');
                }
                `,
                `
                import { isArray } from 'util';

                const arr = [1, 2, 3];
                if (Array.isArray(arr)) {
                    console.log('is array');
                }
                `
            )
        );
    });

    test('handles different namespace name', async () => {
        await spec.rewriteRun(
            typescript(
                `
                import * as nodeUtil from 'util';

                const arr = [1, 2, 3];
                if (nodeUtil.isArray(arr)) {
                    console.log('is array');
                }
                `,
                `
                import * as nodeUtil from 'util';

                const arr = [1, 2, 3];
                if (Array.isArray(arr)) {
                    console.log('is array');
                }
                `
            )
        );
    });
});
```

</details>

Please note that:

* The test file uses `RecipeSpec` from `@openrewrite/rewrite/test` to provide the testing infrastructure.
* We use the `typescript()` helper to create TypeScript source files for testing.
* When providing two arguments to `typescript()`, the first is the "before" state and the second is the expected "after" state.
* When providing only one argument, the test expects no changes to the code.
* Tests check for exact formatting match, including all whitespace and indentation.

## Understanding JavaScript LST structure

Now that we have tests defined - it's time to get started with making them pass. Before we can implement the visitor, though, it's crucial to understand how JavaScript/TypeScript code is represented in the LST.

JavaScript uses a hybrid approach where it shares some LST types from the Java LST and then adds JavaScript-specific types for pieces that are substantially different.

Please read through our [JavaScript LST examples doc](../concepts-and-explanations/javascript-lst-examples.md) for a better understanding of this.

For our recipe, we'll work primarily with `J.MethodInvocation` since `util.isArray()` is represented as a method invocation in the LST.

## Implementing the rest of the recipe

Since we now know what LST elements we need to work with, we can begin filling out the rest of our recipe.

### Update the `editor` method

To begin, let's update our `editor` method to add two things:

1. A check that ensures the recipe will only be run on files where it makes sense to run this recipe (i.e., files that contain util functions).
2. A link to the visitor class where all the replacement logic will be defined.

```typescript
import { check, ExecutionContext, Recipe, TreeVisitor } from '@openrewrite/rewrite';
import {
    JavaScriptVisitor,
    pattern,
    capture,
    rewrite,
    template,
    usesMethod
} from '@openrewrite/rewrite/javascript';
import { J } from '@openrewrite/rewrite/java';

export class MigrateUtilFunctions extends Recipe {
    readonly name = "com.yourorg.MigrateUtilFunctions";
    readonly displayName = "Migrate util type checking functions";
    readonly description = "Replace deprecated util.isX() methods with native JavaScript equivalents";

    // highlight-start
    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        // Use check() to only run this visitor on files that use util methods
        return check(
            usesMethod("util is*(..)"),
            new MigrateUtilFunctionsVisitor()
        );
    }
    // highlight-end
}

// highlight-start
class MigrateUtilFunctionsVisitor extends JavaScriptVisitor<ExecutionContext> {
    // TODO fill me out
}
// highlight-end
```

Our updated `editor` will now only run on files that contain a `util` method that starts with `is` (e.g., `isArray()` or `isBoolean()`). We also now have a clean spot that we can write the business logic of the recipe (the `MigrateUtilFunctionsVisitor`).

### Define the basic visitor structure

The next thing we need to do is fill out this visitor. We'll walk through it in logical chunks and introduce concepts as they become necessary.

First, we need a visitor that examines method calls. Every time the visitor encounters a method invocation in the code, it will call our `visitMethodInvocation` method:

```typescript
class MigrateUtilFunctionsVisitor extends JavaScriptVisitor<ExecutionContext> {
    protected async visitMethodInvocation(
        method: J.MethodInvocation,
        ctx: ExecutionContext
    ): Promise<J | undefined> {
        // We'll add transformation logic here
        return await super.visitMethodInvocation(method, ctx);
    }
}
```

### Find/replace a method

Next, let's pick a method to find and replace such as `util.isArray(...)`. We need to replace that with `Array.isArray(...)` but, **also**, preserve whatever is inside the parenthesis.

We can do this by utilizing the `capture()` function in combination with a simple OpenRewrite rule:

```typescript
class MigrateUtilFunctionsVisitor extends JavaScriptVisitor<ExecutionContext> {
    // highlight-start
    // Capture variable acts like a placeholder that matches any expression
    private arg = capture();

    // Rewrite rule: "Find X, replace with Y"
    private isArrayRule = rewrite(() => ({
        before: pattern`util.isArray(${this.arg})`,  // Match this pattern
        after: template`Array.isArray(${this.arg})`  // Replace with this
    }));
    // highlight-end

    protected async visitMethodInvocation(
        method: J.MethodInvocation,
        ctx: ExecutionContext
    ): Promise<J | undefined> {
        // Try to apply the transformation
        // highlight-next-line
        return await this.isArrayRule.tryOn(this.cursor, method)
            || await super.visitMethodInvocation(method, ctx);
    }
}
```

The `${this.arg}` acts like a variable - it matches any argument and reuses it in the output. For example:

* `util.isArray(myArray)` → `Array.isArray(myArray)`
* `util.isArray(getData().items)` → `Array.isArray(getData().items)`

### Add semantic checking

You may have noticed that the recipe so far has a bug in it. Our pattern would match _any_ variable named `util` – even if it wasn't the Node.js `util` module:

```javascript
// ⚠️ Our recipe would incorrectly replace this!
const util = { isArray: () => false };
util.isArray(x);
```

We can fix this by updating our `isArrayRule` to only run on `util` methods from the NodeJS `util` package:

```typescript
class MigrateUtilFunctionsVisitor extends JavaScriptVisitor<ExecutionContext> {
    // This pattern describes what we want to limit our search to: code that
    // uses the NodeJS `util` package (rather than any object named util).
    // highlight-start
    private patternConfig = {
        context: ["import * as util from 'util';"]
    };
    // highlight-end

    private arg = capture();

    // We pass the above pattern into the `.configure()` method. After doing so,
    // we will only change `util.isArray(..)` to `Array.isArray(..)` if `util`
    // is from the NodeJS `util` package.
    private isArrayRule = rewrite(() => ({
        // highlight-next-line
        before: pattern`util.isArray(${this.arg})`.configure(this.patternConfig),
        after: template`Array.isArray(${this.arg})`
    }));

    protected async visitMethodInvocation(
        method: J.MethodInvocation,
        ctx: ExecutionContext
    ): Promise<J | undefined> {
        return await this.isArrayRule.tryOn(this.cursor, method)
            || await super.visitMethodInvocation(method, ctx);
    }
}
```

:::tip **Semantic matching**
While it might appear that the above code will _only_ match imports that are exactly like `import * as util from 'util';` - that's not the case.

OpenRewrite can intelligently detect most types of importing. For instance, our pattern would match all of the following code snippets:

```javascript
// Namespace import
import * as util from 'util';
util.isArray(arr);

// Named import (no "util." prefix!)
import { isArray } from 'util';
isArray(arr);

// Different namespace name
import * as nodeUtil from 'util';
nodeUtil.isArray(arr);

// CommonJS
const util = require('util');
util.isArray(arr);
```
:::

### Add more patterns

Right now, our recipe only replaces the `isArray` method. Let's add additional `util` methods that should be replaced - following the same pattern as above.

```typescript title="migrate-util-functions.ts"
class MigrateUtilFunctionsVisitor extends JavaScriptVisitor<ExecutionContext> {
    private patternConfig = { context: ["import * as util from 'util';"] };
    private arg = capture();

    private isArrayRule = rewrite(() => ({
        before: pattern`util.isArray(${this.arg})`.configure(this.patternConfig),
        after: template`Array.isArray(${this.arg})`
    }));

    // highlight-start
    private isBooleanRule = rewrite(() => ({
        before: pattern`util.isBoolean(${this.arg})`.configure(this.patternConfig),
        after: template`typeof ${this.arg} === 'boolean'`
    }));
    // highlight-end

    // highlight-start
    private isStringRule = rewrite(() => ({
        before: pattern`util.isString(${this.arg})`.configure(this.patternConfig),
        after: template`typeof ${this.arg} === 'string'`
    }));
    // highlight-end

    protected async visitMethodInvocation(
        method: J.MethodInvocation,
        ctx: ExecutionContext
    ): Promise<J | undefined> {
        // Try each transformation in sequence
        return await this.isArrayRule.tryOn(this.cursor, method)
            // highlight-start
            || await this.isBooleanRule.tryOn(this.cursor, method)
            || await this.isStringRule.tryOn(this.cursor, method)
            // highlight-end
            || await super.visitMethodInvocation(method, ctx);
    }
}
```

With that, our visitor is complete! When the recipe runs, it will look for method calls and then check each rule one at a time. If any of them match, it will transform the code. If none of them match, the visitor will move on to the next part of the file.

## Complete recipe implementation

For ease, you can find the full recipe below. It's also available in our [javascript-recipe-starter repository](https://github.com/moderneinc/javascript-recipe-starter).

```typescript title="migrate-util-functions.ts"
import { check, ExecutionContext, Recipe, TreeVisitor } from '@openrewrite/rewrite';
import { JavaScriptVisitor, pattern, capture, rewrite, template, usesMethod } from '@openrewrite/rewrite/javascript';
import { J } from '@openrewrite/rewrite/java';

/**
 * Replace deprecated Node.js util type checking methods with native JavaScript equivalents.
 *
 * This recipe demonstrates:
 * - Using pattern matching with capture() to match code patterns
 * - Using rewrite rules with before/after patterns (similar to Refaster)
 * - Declarative transformations without manual LST manipulation
 *
 * Examples:
 * - util.isArray(x) -> Array.isArray(x)
 * - util.isBoolean(x) -> typeof x === 'boolean'
 * - util.isString(x) -> typeof x === 'string'
 */
export class MigrateUtilFunctions extends Recipe {
    readonly name = "com.yourorg.MigrateUtilFunctions";
    readonly displayName = "Migrate util type checking functions";
    readonly description = "Replace deprecated util.isX() methods with native JavaScript equivalents";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        // Use check() to only run this visitor on files that use util methods
        return check(
            usesMethod("util is*(..)"),
            new MigrateUtilFunctionsVisitor()
        );
    }
}

/**
 * Visitor that replaces util method calls using pattern-based rewrite rules.
 */
class MigrateUtilFunctionsVisitor extends JavaScriptVisitor<ExecutionContext> {
    // This pattern describes what we want to limit our search to: code that
    // uses the NodeJS `util` package (rather than any object named util).
    private patternConfig = {
        context: ["import * as util from 'util';"],
        // Not necessary for this recipe as OpenRewrite can detect that this util is the NodeJS util.
        // However, it's included here to demonstrate that you can provide a dependency to the pattern.
        dependencies: { '@types/node': '^22.0.0' }
    };

    // Capture variable acts like a placeholder that matches any expression
    private arg = capture();

    // We pass the above pattern into the `.configure()` method. After doing so,
    // we will only change `util.isArray(..)` to `Array.isArray(..)` if `util`
    // is from the NodeJS `util` package.
    private isArrayRule = rewrite(() => ({
        before: pattern`util.isArray(${this.arg})`.configure(this.patternConfig),
        after: template`Array.isArray(${this.arg})`
    }));

    private isBooleanRule = rewrite(() => ({
        before: pattern`util.isBoolean(${this.arg})`.configure(this.patternConfig),
        after: template`typeof ${this.arg} === 'boolean'`
    }));

    private isStringRule = rewrite(() => ({
        before: pattern`util.isString(${this.arg})`.configure(this.patternConfig),
        after: template`typeof ${this.arg} === 'string'`
    }));

    protected async visitMethodInvocation(
        method: J.MethodInvocation,
        ctx: ExecutionContext
    ): Promise<J | undefined> {
        // Try each rewrite rule in sequence, returning the first match
        return await this.isArrayRule.tryOn(this.cursor, method)
            || await this.isBooleanRule.tryOn(this.cursor, method)
            || await this.isStringRule.tryOn(this.cursor, method)
            || await super.visitMethodInvocation(method, ctx);
    }
}
```

## Running the recipe locally

Now that your recipe is complete, you should test it on real code. To do this, follow along with the instructions for [testing recipes locally in our JavaScript recipe development environment guide](./javascript-recipe-development-environment.md#testing-recipes-locally).

## Next steps

Congratulations on creating your first JavaScript recipe! You may find it useful to:

* Explore the [JavaScript LST examples](../concepts-and-explanations/javascript-lst-examples.md).
* Learn how to [configure the Moderne CLI to run JavaScript recipes](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript)
