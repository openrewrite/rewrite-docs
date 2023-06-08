# Introduction to OpenRewrite

![OpenRewrite](.gitbook/assets/OpenRewrite.gif)

## **Large-scale automated source code refactoring**

OpenRewrite enables large-scale distributed source code refactoring for framework migrations, vulnerability patches, and API migrations with an early focus on the Java language ([see supported languages](/reference/supported-languages.md)).

## Semantic code search and transformation

The OpenRewrite project is a [semantic code search](https://en.wikipedia.org/wiki/Semantic\_search) and transformation ecosystem for Java and other source code. It consists of a platform of prepackaged refactoring recipes for common framework migration and stylistic consistency tasks. It also allows you to define custom recipes to achieve a wide range of source code transformations.

## What does OpenRewrite do?

OpenRewrite works by making changes to [Lossless Semantic Trees](concepts-and-explanations/lossless-semantic-trees.md) (LST) representing your source code and printing the modified trees back into source code. You can then review the changes in your code and commit. Modifications to the LST are performed in [Visitors](concepts-and-explanations/visitors.md) and visitors are aggregated into [Recipes](concepts-and-explanations/recipes.md). OpenRewrite recipes make minimally invasive changes to your source code that honor the original formatting.

For example, if you want to consistently use static imports across all of your test files, rather than doing this manually, you could use the UseStaticImport visitor provided by OpenRewrite. Applied to the file below, you can see the changes this generates.

```java
// Before OpenRewrite
import org.junit.Assert;
...

Assert.assertTrue(condition);
```

```java
// After OpenRewrite
import static org.junit.Assert.assertTrue;
...

assertTrue(condition);
```

## Next steps

* If you want to learn how to use OpenRewrite to perform code transformations in a Maven or Gradle project, check out the [Setting Up Your Project and Running Recipes Guide](running-recipes/getting-started.md).
* If you want to learn how to create your own recipes, start with the [Recipe Development Environment guide](authoring-recipes/recipe-development-environment.md) and then work through the [Writing a Java Refactoring Recipe guide](authoring-recipes/writing-a-java-refactoring-recipe.md).
