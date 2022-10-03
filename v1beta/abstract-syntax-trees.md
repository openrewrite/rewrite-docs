---
description: The "semantic" behind "semantic code search and transformation."
---

# Abstract Syntax Trees

An Abstract Syntax Tree (AST) is a tree representation of code. [Traditionally](https://en.wikipedia.org/wiki/Abstract\_syntax\_tree), a lot of details like types or whitespace were not included as the trees were mainly used for analysis purposes.

OpenRewrite's AST differs from the traditional AST. It has a unique set of characteristics that make it suitable for both single-repository and mass transformation operations:

* **Type-attributed**. Each AST element is imbued with type information. For example, when referencing a field, the source code may just refer to it as `myField`. The OpenRewrite AST element for `myField`, on the other hand, would contain additional information about what the type of `myField` is, even if it isn't defined in the same source file or even the same project.
* **Format-preserving**. Whitespace before and after AST elements is preserved in the tree so the tree can be printed out to reconstitute the original source code without clobbering formatting. Additionally, refactoring operations that insert code are sensitive to the local style of the code around them, and match the local style.
* **Acyclic and serializable**. Most AST's containing type information are potentially _cyclic_. Cycles usually come from generic type signatures like `class A<T extends A<T>>`. This kind of pattern is generally found in things like abstract builder types in Java. OpenRewrite cuts these cycles off and adds serialization annotations to its types so the AST can be serialized/deserialized with libraries like Jackson.

All of these properties are necessary for scalable organization-wide search and transformation.

Format-preservation is necessary in any organization that doesn't have absolutely consistent formatting across its whole codebase.

Type attribution is necessary for the accurate matching of patterns. For example, if we are looking for [SLF4J ](http://www.slf4j.org/)log statements and we see a statement like the following, without type attribution how do we know if `logger` is an SLF4J or a Logback logger?

```java
logger.info("Hi");
```

The production of type-attributed ASTs for a whole organization is arbitrarily computationally complex, since it requires dependency resolution, parsing of the source code, and type attribution (basically Java compilation up to the point of bytecode generation). Since OpenRewrite ASTs are serializable, we can store them off centrally as a byproduct of compilation and then operate on them _en masse_ later.

Once we have a serialized AST for a particular source file, and since it also contains type information, it can be refactored/searched completely independently of other source files in the same source package or repository. This makes mass search and refactoring an approximately linearly scalable operation.
