---
description: Examples and explanations of the various JavaScript/TypeScript LST components.
---

# JavaScript LST examples

When building recipes for JavaScript and TypeScript code, it's important to understand how OpenRewrite [Lossless Semantic Trees](./lossless-semantic-trees.md) (LSTs) correspond to code. You couldn't, for example, properly transform an arrow function without knowing that [JS.ArrowFunction](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L398-L434) is the class used to represent arrow functions.

This doc will walk you through everything you need to know to begin working with the JavaScript LST.

## The hybrid LST approach

JavaScript and TypeScript code in OpenRewrite is represented using a hybrid approach:

* **JavaScript-specific LST types (JS.*)** - These handle JavaScript and TypeScript-specific features like arrow functions, template literals, destructuring, type annotations, and ES6 modules.
* **Shared Java LST types (J.*)** - OpenRewrite reuses [Java LST nodes](./lst-examples.md) for constructs that are semantically similar between the two languages, such as classes, method declarations, variable declarations, and literals.

This design choice avoids code duplication and enables recipes that work on shared constructs to potentially work across both languages. While this may seem unusual at first, understanding this hybrid approach is important when working with JavaScript LSTs as you'll encounter both types in practice.

:::tip
To see how these LST types work together in real code, check out the [putting it all together section](#putting-it-all-together) at the end of this document.
:::

## JavaScript-specific LST types

This section covers some of the most important JS types that are unique to JavaScript and TypeScript. These types handle language features that don't exist in Java.

:::note
This is not an exhaustive list. Instead, this section contains the most common LST elements you'll use when writing recipes.
:::

### CompilationUnit

A [JS.CompilationUnit](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L80-L304) is the root of the JavaScript/TypeScript LST. All other elements must be contained inside of this to represent valid JavaScript or TypeScript code.

**Code example:**

```javascript title="hello.js"
// This entire file is a CompilationUnit
import { greeting } from './messages';

function sayHello(name) {
  console.log(greeting + name);
}

export default sayHello;
```

### ArrowFunction

A [JS.ArrowFunction](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L398-L434) represents arrow function expressions (`() => {}`). It contains a Lambda for parameters and body, and optional TypeInfo for the return type.

**Code example:**

```typescript
const greet = ({ name }: User): string => {
  return `Hello, ${name}!`;
};
```

### Await

A [JS.Await](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L441-L463) represents an await expression in async functions. It contains the expression being awaited.

**Code example:**

```typescript
await fetch(url)
```

### Binary

A [JS.Binary](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L1779-L1861) represents binary expressions with JavaScript-specific operators that don't exist in Java, such as strict equality/inequality operators.

**Code example:**

```typescript
value === null       // strict equality
obj !== undefined    // strict inequality
```

:::note
Common binary operators like `+`, `-`, `*` are represented using `J.Binary` (the shared Java type) – not `JS.Binary`.
:::

### Delete

A [JS.Delete](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L549-L579) represents the delete operator.

**Code example:**

```typescript
delete obj.property
```

### FunctionCall

A [JS.FunctionCall](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L715-L864) represents function/method calls in JavaScript that cannot be modeled as `J.MethodInvocation`. This is used for call syntax that's not possible in Java.

**Code example:**

```typescript
function greet(name: string) {
  return function (greeting: string) {
    return `${greeting}, ${name}!`;
  };
}

// The interesting part: greet("Alice")("Hello")
console.log(greet("Alice")("Hello"));
```

In the expression `greet("Alice")("Hello")`:

* `greet("Alice")` is modeled as a `J.MethodInvocation`
* `("Hello")` is modeled as a `JS.FunctionCall` (this type of functionality is not possible in Java)

### Export

A [JS.ExportDeclaration](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L4458-L4556) represents named exports, while [JS.ExportAssignment](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L4562-L4632) represents default exports.

**Code examples:**

```typescript
export { Store, greet };   // ExportDeclaration
export default User;       // ExportAssignment
```

### Import

A [JS.Import](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L1202-L1304) represents an ES6 import statement. It contains an [ImportClause](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L1310-L1381) (what is being imported) and the module path as a Literal.

**Code examples:**

```typescript
import { Helper } from './utils';
import type { Config } from './types';
```

:::note
CommonJS `require()` calls are not represented as `JS.Import`. Instead, they're modeled as `J.MethodInvocation`, which illustrates the hybrid nature of JavaScript LST modeling. 

For example, `const fs = require('fs')` would be represented as a `J.VariableDeclarations` – with a `J.MethodInvocation` as its initializer.
:::

### Intersection

A [JS.Intersection](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L3598-L3666) represents types combined with the `&` operator in TypeScript.

**Code examples:**

```typescript
User & Timestamped
{ name: string } & { age: number }
Readable & Writable
BaseClass & { id: string }
```


### ObjectBindingPattern

A [JS.ObjectBindingPattern](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L2220-L2362) represents destructuring patterns in function parameters or variable declarations.

**Code example:**

```typescript
({ name }: User)
```

### TemplateExpression

A [JS.TemplateExpression](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L2837-L2939) represents template literals (backtick strings) that can contain embedded expressions using `${}`.

**Code example:**

```typescript
`Hello, ${name}!`
```


### Union

A [JS.Union](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L3523-L3591) represents types combined with the `|` operator in TypeScript.

**Code examples:**

```typescript
string | number
'active' | 'inactive' | 'pending'
User | null
{ status: 'ok' } | { error: string }
```

## Shared types with Java

These LST types are shared between JavaScript and Java, as the constructs they represent are semantically similar in both languages. When you see these in a JavaScript/TypeScript LST, they're using the same classes that Java uses, which enables cross-language recipe patterns.

:::info
Understanding these shared types is important because:

* You'll see `J.*` prefixes in JavaScript LST trees
* Recipes written for Java constructs might also work on JavaScript code
* The API and structure are consistent across both languages
:::

### ClassDeclaration

A [J.ClassDeclaration](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L1234-L1499) is used for JavaScript/TypeScript classes, interfaces, and enums. This is a shared type with Java since the class syntax is similar.

**Code examples:**

```typescript
interface User {
  id: ID;
  name: string;
  active?: boolean;
}

class Store<T> {
  private items: T[] = [];
  // ...
}
```

### FieldAccess

A [J.FieldAccess](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L2060-L2194) represents property access using dot notation.

**Code examples:**

```typescript
this.items
response.json
obj.property
```

### Identifier

A [J.Identifier](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L2638-L2678) represents any name in the code.

**Code examples:**

```typescript
Helper, Config, ID, User, Store, greet, name, items
```

### Literal

A [J.Literal](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3628-L3727) represents literal values.

**Code examples:**

```typescript
'./utils'
'./types'
1
2
'value'
```

### MethodDeclaration

Functions in JavaScript/TypeScript are represented using [J.MethodDeclaration](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3881-L4171) for function declarations and class methods. This includes async functions, generic functions, and methods with TypeScript type annotations.

**Code examples:**

```typescript
// Function declaration
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Class method
add(item: T): void {
  this.items.push(item);
}

// Async function
async fetch(url: string): Promise<T[]> {
  const response = await fetch(url);
  return response.json();
}
```

### MethodInvocation

A [J.MethodInvocation](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L4177-L4347) represents function and method calls. The structure is similar to Java, with a select expression (for method calls) and arguments.

**Code examples:**

```typescript
this.items.push(item)
fetch(url)
response.json()
```

### VariableDeclarations

A [J.VariableDeclarations](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L6078-L6362) represents variable declarations with `const`, `let`, or `var`. In TypeScript, these can include type annotations via JS.TypeInfo.

**Code examples:**

```typescript
const greet = ({ name }: User): string => { ... };
const sum = 1 + 2;
private items: T[] = [];
```

## Putting it all together

One of the key aspects of LSTs is that they're compositional - complex code structures are built from simpler LST components nested within each other. A single line of code often contains many different LST types working together.

Let's look at some examples to see how this works. 

### Example 1: Arrow function with destructuring

```typescript
const greet = ({ name, age }: Person): string => {
  return `Hello ${name}, you are ${age} years old`;
};
```

This code breaks down into:

- **J.VariableDeclarations**: The entire `const greet = ...` declaration
  - **J.VariableDeclarations.NamedVariable**: Contains the variable name and value
    - **J.Identifier**: The variable name `greet`
    - **JS.ArrowFunction**: The arrow function
      - **J.Lambda**: Contains parameters and body
        - **J.Lambda.Parameters**: The function parameters
          - **J.VariableDeclarations**: The parameter declaration
            - **JS.TypeInfo**: The `: Person` type annotation
              - **J.Identifier**: `Person`
            - **JS.ObjectBindingPattern**: The `{ name, age }` destructuring
              - **JS.BindingElement**: `name`
              - **JS.BindingElement**: `age`
        - **J.Block**: The function body
          - **J.Return**: The return statement
            - **JS.TemplateExpression**: The template literal
              - **J.Literal**: `"Hello ${"`
              - **JS.TemplateExpression.Span**: First interpolation
                - **J.Identifier**: `name`
                - **J.Literal**: `"}, you are ${"`
              - **JS.TemplateExpression.Span**: Second interpolation
                - **J.Identifier**: `age`
                - **J.Literal**: `"} years old"`
      - **JS.TypeInfo**: The `: string` return type
        - **J.Identifier**: `string`

### Example 2: Async function with await

```typescript
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  return response.text();
}
```

This function contains:

- **J.MethodDeclaration**: The entire function declaration
  - **J.Modifier**: `async` modifier
  - **JS.TypeInfo**: The `: Promise<string>` return type
    - **J.ParameterizedType**: `Promise<string>`
      - **J.Identifier**: `Promise`
      - **J.Identifier**: `string`
  - **J.Identifier**: The function name `fetchData`
  - **J.VariableDeclarations**: The `url` parameter
    - **JS.TypeInfo**: The `: string` type annotation
      - **J.Identifier**: `string`
    - **J.VariableDeclarations.NamedVariable**: `url`
  - **J.Block**: The function body
    - **J.VariableDeclarations**: `const response = await fetch(url)`
      - **J.VariableDeclarations.NamedVariable**
        - **J.Identifier**: `response`
        - **JS.Await**: The await expression
          - **J.MethodInvocation**: `fetch(url)`
            - **J.Identifier**: `fetch`
            - **J.Identifier**: `url`
    - **J.Return**: `return response.text()`
      - **J.MethodInvocation**: `response.text()`
        - **J.Identifier**: `response`
        - **J.Identifier**: `text`

### Example 3: Function chaining with JS.FunctionCall

```typescript
function createValidator(type: string) {
  return function(value: any) {
    if (type === 'email') {
      return value !== null && value.includes('@');
    }
    return value !== undefined;
  };
}

const isValid = createValidator('email')('test@example.com');
```

This example demonstrates both `JS.Binary` operators and `JS.FunctionCall`:

- **J.MethodDeclaration**: `createValidator` function
  - **J.Identifier**: `createValidator`
  - **J.VariableDeclarations**: The `type` parameter
    - **JS.TypeInfo**: The `: string` type annotation
      - **J.Identifier**: `string`
    - **J.VariableDeclarations.NamedVariable**: `type`
  - **J.Block**: Function body
    - **J.Return**: Returns the inner function
      - **JS.StatementExpression**: Wraps the function expression
        - **J.MethodDeclaration**: The anonymous inner function
          - **J.VariableDeclarations**: The `value` parameter with `: any`
          - **J.Block**: Inner function body
            - **J.If**: The email check
              - **J.ControlParentheses**: Wraps condition
                - **JS.Binary**: `type === 'email'` (JS-specific operator)
                  - **J.Identifier**: `type`
                  - **J.Literal**: `'email'`
              - **J.Block**: If body
                - **J.Return**: Compound boolean expression
                  - **J.Binary**: `&&` (standard operator)
                    - **JS.Binary**: `value !== null` (JS-specific)
                      - **J.Identifier**: `value`
                      - **J.Literal**: `null`
                    - **J.MethodInvocation**: `value.includes('@')`
            - **J.Return**: Default return
              - **JS.Binary**: `value !== undefined` (JS-specific)
                - **J.Identifier**: `value`
                - **J.Identifier**: `undefined`
- **J.VariableDeclarations**: The `isValid` constant
  - **J.VariableDeclarations.NamedVariable**: `isValid`
    - **JS.FunctionCall**: The chained function call
      - **J.MethodInvocation**: `createValidator('email')`
        - **J.Identifier**: `createValidator`
        - **J.Literal**: `'email'`
      - **J.Literal**: `'test@example.com'` (the argument to the returned function)

### Example 4: Class with generics

```typescript
class DataStore<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }
}
```

This class contains:

- **J.ClassDeclaration**: The entire class
  - **J.Identifier**: `DataStore`
  - **J.TypeParameter**: The generic parameter `T`
    - **J.Identifier**: `T`
  - **J.Block**: The class body
    - **J.VariableDeclarations**: `private items: T[] = []`
      - **J.Modifier**: `private`
      - **JS.TypeInfo**: The `: T[]` type annotation
        - **J.ArrayType**: `T[]`
          - **J.Identifier**: `T`
      - **J.VariableDeclarations.NamedVariable**: `items = []`
        - **J.Identifier**: `items`
        - **J.NewArray**: The empty array initializer
    - **J.MethodDeclaration**: The `add` method
      - **JS.TypeInfo**: The `: void` return type
        - **J.Identifier**: `void`
      - **J.Identifier**: `add`
      - **J.VariableDeclarations**: The `item` parameter
        - **JS.TypeInfo**: The `: T` type annotation
          - **J.Identifier**: `T`
        - **J.VariableDeclarations.NamedVariable**: `item`
      - **J.Block**: The method body
        - **J.MethodInvocation**: `this.items.push(item)`
          - **J.FieldAccess**: `this.items`
            - **J.Identifier**: `this`
            - **J.Identifier**: `items`
          - **J.Identifier**: `push`
          - **J.Identifier**: `item`

### Key insights

1. **Hierarchical structure**: LSTs form a tree structure where complex expressions contain simpler ones
2. **Mixed types**: JavaScript code often mixes `JS.*` types (JavaScript-specific) with `J.*` types (shared with Java)
3. **Recursive composition**: The same LST type can appear at multiple levels (e.g., `J.Identifier` appears throughout)
4. **Semantic preservation**: Each LST preserves not just the code's meaning but also its exact formatting and structure

Understanding this compositional nature is crucial when writing recipes, as you'll often need to:

* Navigate through multiple layers of LSTs to find the element you want to modify
* Understand the parent-child relationships between different LST types
* Preserve the structure while making targeted changes