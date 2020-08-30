# Refactor

One or more [Visitors ](visitor.md)are added to a `Refactor` to perform a transformation task. Supported transformation workflows like the Rewrite fix tasks provided by the [Maven](../java/rewrite-maven-plugin.md) and [Gradle](../java/rewrite-gradle-plugin.md) plugins build an [Environment](environment.md), iterate over all of the active [Recipes](recipes.md), and add each recipe's visitors to a `Refactor` instance. Refactor is then given a set of source files to process and maintains the intermediate state of those source files as the transformation is happening. At the end, `Refactor` generates a change set for all affected source files.

### Defining Programmatically

You can also instantiate `Refactor`directly in code if you are building a main method or other process to process code.

```java
// parsed from one or more language-specific Parsers.
Iterable<SourceFile> sources = ...

Iterable<RefactorVisitor<?>> visitors = ...

Refactor refactor = new Refactor().visit(visitors);
Collection<Change> changeSet = refactor.fix(sources);
```

### Change Sets



