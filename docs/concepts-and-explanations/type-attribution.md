---
description: Understanding how OpenRewrite enriches code with type information for accurate transformations
---

# Type attribution

Type attribution is the process of adding type information to every element in your code. When OpenRewrite reads your source files, it doesn't just understand the text and structure – it also understands what each piece of code actually means in the context of your entire project.

Think of it this way: when you read code, you understand that `String` refers to `java.lang.String`, that `list.add()` is calling a specific method from the `List` interface, and that different classes might have methods with the same name. Type attribution gives OpenRewrite this same understanding.

## Why type attribution matters

Consider this simple Java method call:

```java
logger.info("Processing request");
```

From the text alone, we can see this is a method invocation on something called `logger`. That being said, there are some key questions that remain unanswered:

* Is this an SLF4J logger, Log4j, `java.util.logging`, or something else?
* What is the exact signature of the `info` method being called?
* Are there overloaded versions of this method we need to consider?

Without type attribution, automated refactoring tools would be limited to simple find-and-replace operations. They couldn't reliably distinguish between different logging frameworks, understand inheritance relationships, or ensure type-safe transformations.

## How OpenRewrite captures type information

When you compile code, your compiler does extensive work to understand types:

1. **Type resolution** – Figuring out that `String` means `java.lang.String`
2. **Method binding** – Matching each method call to its actual definition
3. **Inheritance analysis** – Understanding which methods come from parent classes
4. **Generic type inference** – Resolving `List<String>` vs. `List<Integer>`

Normally, all this valuable information is thrown away after compilation. Instead of throwing it away, though, OpenRewrite captures and preserves this information.

When OpenRewrite parses your source code:

1. It invokes your language's compiler (JavaC for Java, TypeScript Compiler for TypeScript, etc.)
2. It captures both the structure of your code AND all the type information the compiler computed
3. It combines these into an enriched tree structure (the LST)
4. It preserves type relationships even across file and module boundaries

This is why OpenRewrite needs access to your dependencies and classpath – it needs the same information your compiler needs to understand your code completely.

## How type attribution enables precise transformations

Type attribution transforms OpenRewrite from a sophisticated find-and-replace tool into something that truly understands your code. Because of type attribution, OpenRewrite can:

### 1. Search for code semantically

Type attribution enables precise, type-aware search that goes far beyond text matching. When searching for code, OpenRewrite can:

* Find all calls to a specific method from a specific class (e.g., `java.util.List.add()` but not `java.util.Set.add()`)
* Distinguish between identically-named methods from different frameworks (e.g., SLF4J's `logger.info()` vs Log4j's `logger.info()`)
* Locate all usages of a particular type, even when referenced through imports, inheritance, or qualified names
* Search across method overloads and overrides, understanding the exact signature being invoked

This semantic search capability is foundational for both writing recipes and understanding codebases – you can find exactly what you're looking for without getting false positives from similar-looking code.

### 2. Perform framework-specific migrations

When migrating from JUnit 4 to JUnit 5, OpenRewrite can distinguish between:

* JUnit 4's `@Test` annotation vs. other frameworks' `@Test` annotations
* Static imports from `org.junit.Assert` vs. `org.hamcrest.MatcherAssert`
* Exception testing patterns specific to JUnit 4

### 3. Safely upgrade dependencies

Type information allows OpenRewrite to:

* Identify all usages of a library across your codebase
* Detect breaking changes in method signatures
* Add necessary adapters or compatibility layers
* Update imports and fully-qualified references

### 4. Refactor across many files

Because type attribution preserves relationships between files, OpenRewrite can:

* Rename a method and update all its call sites across a project
* Change a class's package and update all imports and references
* Extract interfaces while maintaining type correctness

### 5. Develop language-agnostic patterns

While type attribution comes from language-specific compilers, OpenRewrite maps these concepts into a common model. This allows similar refactoring patterns to work across multiple languages that share concepts (like Java, Kotlin, and Groovy all running on the JVM).

## The cost and benefit of type attribution

Type attribution requires additional computational resources and access to your project's full compilation classpath. This is why running OpenRewrite requires build tool integration – it needs the same dependencies your compiler needs.

However, this investment enables transformations that would be impossible or extremely error-prone with text-based approaches:

* **100% accurate method matching** – No false positives from similar-looking code
* **Type-safe transformations** – Changes maintain compilation and type correctness
* **Understanding of code behavior** – Recipes can reason about what code does, not just what it looks like

## Relationship to LSTs

Type attribution is one of the key characteristics that makes OpenRewrite's LSTs "semantic" rather than just "syntactic":

* **Syntax** (from the parser) tells us the structure: "This is a method call"
* **Types** (from attribution) tell us the meaning: "This calls `java.util.List.add(Object)`"
* **Formatting** (preserved in LST) tells us the style: "There's a space after the comma"

Together, these three elements give OpenRewrite a more complete understanding of your code – enough to accurately transform it while preserving both correctness and style.

## Type attribution across languages

While this document uses Java examples, type attribution works similarly for other languages OpenRewrite supports:

* **Kotlin** – Uses the Kotlin compiler's type information
* **Groovy** - Leverages Groovy's type system (even with dynamic typing)
* **TypeScript/JavaScript** – Uses TypeScript's type inference and checking
* **Python** – Captures type hints and inferred types where available

Each language's parser extracts whatever type information is available from that language's compiler or type system.

## Further reading

* For technical details on working with type attribution, see our [type attribution for recipe authors doc](../reference/type-attribution.md)
* To understand what a Lossless Semantic Tree is, see our [LST reference doc](./lossless-semantic-trees.md)