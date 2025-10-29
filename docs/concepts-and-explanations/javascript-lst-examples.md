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

This section contains LST types that are unique to JavaScript and TypeScript. They handle language features that don't exist in Java.

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

A [JS.Binary](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L1779-L1861) represents binary expressions with operators.

**Code example:**

```typescript
1 + 2
```

### ConditionalType

A [JS.ConditionalType](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L469-L543) represents TypeScript conditional types using the `extends` keyword and ternary-like syntax.

**Code example:**

```typescript
T extends null ? never : T
```

### Delete

A [JS.Delete](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L549-L579) represents the delete operator.

**Code example:**

```typescript
delete obj.property
```

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

### Intersection

A [JS.Intersection](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L3598-L3666) represents types combined with the `&` operator in TypeScript.

**Code examples:**

```typescript
User & Timestamped
{ name: string } & { age: number }
Readable & Writable
BaseClass & { id: string }
```

### LiteralType

A [JS.LiteralType](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L1867-L1894) represents TypeScript's literal types - specific string, number, or boolean values used as types.

**Code examples:**

```typescript
// Each string in this union is a separate LiteralType
type Status = 'pending' | 'success' | 'error';

function updateStatus(status: Status) {
  // ...
}

// Mixed literal types in a union
type Response = 200 | 404 | 'timeout' | false;
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

### TypeDeclaration

A [JS.TypeDeclaration](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L3021-L3123) represents TypeScript type aliases.

**Code examples:**

```typescript
type ID = string | number;
type Status = 'active' | 'inactive' | { custom: true };
type NonNull<T> = T extends null ? never : T;
```

### TypeInfo

A [JS.TypeInfo](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L3709-L3740) is a wrapper that represents TypeScript type annotations - the colon and type that follow a variable, parameter, or property name. The TypeInfo itself contains the actual type expression (like `J.Identifier` for simple types or `J.ParameterizedType` for generics).

**Code examples:**

```typescript
name: string        // TypeInfo contains J.Identifier("string")
age: number         // TypeInfo contains J.Identifier("number")
result: Promise<T>  // TypeInfo contains J.ParameterizedType
user: User          // TypeInfo contains J.Identifier("User")
```

### TypeLiteral

A [JS.TypeLiteral](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-javascript/src/main/java/org/openrewrite/javascript/tree/JS.java#L4121-L4150) represents object type literals in TypeScript.

**Code example:**

```typescript
{ custom: true }  // when used as a type
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

Functions in JavaScript/TypeScript are represented using [J.MethodDeclaration](https://github.com/openrewrite/rewrite/blob/v8.65.0/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3881-L4171) for both standalone functions and class methods. This includes async functions, generic functions, and methods with TypeScript type annotations.

**Code examples:**

```typescript
add(item: T): void {
  this.items.push(item);
}

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

### Example 3: Union type with literal types

```typescript
type Result = { success: true; data: string } | { success: false; error: string };
```

This type declaration contains:

- **JS.TypeDeclaration**: The entire type alias
  - **J.Identifier**: `Result`
  - **JS.Union**: The union type
    - **JS.TypeLiteral**: First object type `{ success: true; data: string }`
      - **J.Block**: Contains the properties
        - **J.VariableDeclarations**: `success: true`
          - **JS.TypeInfo**: The type annotation
            - **JS.LiteralType**: The literal type `true`
              - **J.Literal**: `true`
          - **J.VariableDeclarations.NamedVariable**: `success`
        - **J.VariableDeclarations**: `data: string`
          - **JS.TypeInfo**: The type annotation
            - **J.Identifier**: `string`
          - **J.VariableDeclarations.NamedVariable**: `data`
    - **JS.TypeLiteral**: Second object type `{ success: false; error: string }`
      - **J.Block**: Contains the properties
        - **J.VariableDeclarations**: `success: false`
          - **JS.TypeInfo**: The type annotation
            - **JS.LiteralType**: The literal type `false`
              - **J.Literal**: `false`
          - **J.VariableDeclarations.NamedVariable**: `success`
        - **J.VariableDeclarations**: `error: string`
          - **JS.TypeInfo**: The type annotation
            - **J.Identifier**: `string`
          - **J.VariableDeclarations.NamedVariable**: `error`

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