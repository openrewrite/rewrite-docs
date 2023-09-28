# Lossless Semantic Trees (LST)

![LST comparison](/.gitbook/assets/LST-comparison.png)

A Lossless Semantic Tree (LST) is a tree representation of code. Unlike the traditional [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract\_syntax\_tree) (AST), OpenRewrite's LST offers a unique set of characteristics that make it suitable for both single-repository and mass transformation operations:

* **Type-attributed**. Each LST is imbued with type information. For example, when referencing a field, the source code may just refer to it as `myField`. The OpenRewrite LST for `myField`, on the other hand, would contain additional information about what the type of `myField` is, even if it isn't defined in the same source file or even the same project.
* **Format-preserving**. Whitespace before and after LSTs are preserved in the tree so the tree can be printed out to reconstitute the original source code without clobbering formatting. Additionally, refactoring operations that insert code are sensitive to the local style of the code around them and match the local style.
* **Acyclic and serializable**. Most LSTs containing type information are potentially _cyclic_. Cycles usually come from generic type signatures like `class A<T extends A<T>>`. This kind of pattern is generally found in things like abstract builder types in Java. OpenRewrite cuts these cycles off and adds serialization annotations to its types so the LST can be serialized/deserialized with libraries like Jackson.

All of these properties are necessary for scalable organization-wide search and transformation.

Format preservation is necessary in any organization that doesn't have 100% consistent formatting across its whole codebase.

Type attribution is necessary for the accurate matching of patterns. For example, if we are looking for [SLF4J](http://www.slf4j.org/) log statements and we see a statement like the following, without type attribution how do we know if `logger` is an SLF4J or a Logback logger?

```java
logger.info("Hi");
```

The production of type-attributed LSTs for a whole organization is arbitrarily computationally complex since it requires dependency resolution, parsing of the source code, and type attribution (basically Java compilation up to the point of bytecode generation). Since OpenRewrite LSTs are serializable, we can store them as a byproduct of compilation and then operate on them _en masse_ later.

Once we have a serialized LST for a particular source file, and since it also contains type information, it can be refactored/searched completely independently of other source files in the same source package or repository. This makes mass search and refactoring an approximately linearly scalable operation.

{% hint style="info" %}
If you want to see specific examples of Java LSTs, please read our [Java LST Examples doc](lst-examples.md).&#x20;
{% endhint %}

## LST lifecycle

When you run an OpenRewrite recipe locally:

1. An LST is created and stored in memory.
2. The recipe will read this LST from memory and begin making transformations on it. This could be adding a search marker (`~~>`) if the recipe is a search recipe -- or it could be more significant code changes.
3. Once the recipe finishes running, the LST is converted back to text which then is used to overwrite any existing files that have changed.
4. After all of the files have been overwritten, the LST is thrown away. 
5. If you go to run another recipe after the first one is done, a new LST will be generated at that time.
6. If the previous recipe made changes and those changes exist locally, then the newly generated LST will have all of those changes. If the previous recipe made no changes, then the LST will effectively be the same one as before (but regenerated as the previous one was deleted).

{% hint style="info" %}
In order for OpenRewrite to work locally, the LST **must** fit into memory. This is in contrast with [Moderne](https://docs.moderne.io/) where the LST can be built and used in pieces.
{% endhint %}
