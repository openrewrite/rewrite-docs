# Overview

### Semantic Code Search and Transformation

The Rewrite project is a semantic code search and transformation ecosystem for Java and other source code. It consists of a platform of prepackaged refactoring recipes for common framework migration and stylistic consistency tasks. It also allows you to define custom recipes to achieve a wide range of source code transformations.

### What Does Rewrite Do?

Rewrite works by making changes to [Abstract Syntax Trees](abstract-syntax-trees.md) \(AST\) representing your source code and printing the modified trees back into source code. You can then review the changes in your code and commit. Modifications to the AST are performed in [Visitors](v1beta/visitor.md) and visitors are aggregated into [Recipes](v1beta/recipes.md). Rewrite recipes make minimally invasive changes to your source code that honor the original formatting.

For example, if you want to consistently use static imports across all of your test files, rather than doing this manually, you could use the [UseStaticImport](java/refactoring-java-source-code/usestaticimport.md) visitor provided by Rewrite. Applied to the file below, you can see the changes this generates. 

```java
// Before Rewrite
import org.junit.Assert;
...

Assert.assertTrue(condition);
```

```java
// After Rewrite
import static org.junit.Assert.assertTrue;
...

assertTrue(condition);
```

### Next Steps

In [Getting Started](quickstart.md), we'll learn how to implement this example by crafting a custom JUnit recipe that will refactor any JUnit `assertXXX(..)` calls to use static imports.

