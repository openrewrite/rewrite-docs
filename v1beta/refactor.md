---
description: >-
  Applies a series of visitors to a set of source files and either overwrites
  the sources or generates a diff.
---

# Refactor

One or more [Visitors ](visitor.md)are added to a `Refactor` to perform a transformation task. Supported transformation workflows like the Rewrite fix tasks provided by the [Maven](../getting-started/rewrite-maven-plugin/) and [Gradle](../getting-started/rewrite-gradle-plugin.md) plugins build an [Environment](environment.md), iterate over all of the active [Recipes](recipes.md), and add each recipe's visitors to a `Refactor` instance. Refactor is then given a set of source files to process and maintains the intermediate state of those source files as the transformation is happening. At the end, `Refactor` generates a change set for all affected source files.

### Defining Programmatically

You can also instantiate `Refactor`directly in code if you are building a main method or other process to process code.

```java
// parsed from one or more language-specific Parsers.
Iterable<SourceFile> sources = ...

Iterable<RefactorVisitor<?>> visitors = ...

Refactor refactor = new Refactor().visit(visitors);
Collection<Change> changeSet = refactor
    .setMeterRegistry(registry) // optional, to ship metrics via Micrometer
    .fix(sources);
```

### Change Sets

The `Change` collection that is returned will only have results for source files that changed. `Change` has the following data and behavior:

| Method | Description |
| :--- | :--- |
| `getOriginal()` | The original `SourceFile`, or null if the change represents a new file. |
| `getFixed()` | The fixed `SourceFile`, or null if the change represents a file deletion. |
| `getVisitorsThatMadeChanges()` | The visitor names changing this source. |
| `diff()`/`diff(Path)` | A git-style diff \(with an optional path to relativize file paths in the output\) |

Below is a snippet demonstrating how you can overwrite source files on disk with the changes made by a refactoring operation by using the `print()` method on the fixed AST.

```java
for (Change change : changes) {
  Path file = projectDir.resolve(change.getOriginal().getSourcePath());
  try (BufferedWriter sourceFileWriter = Files.newBufferedWriter(file)) {  
    sourceFileWriter.write(change.getFixed().print());
  }
}
```

### Refactor Cycles

The visitors in a refactoring operation may produce changes that in turn cause another visitor to do further work. As a result, `Refactor` performs multiple passes \(or cycles\) over visitors until either no changes are made in a pass or some maximum number of passes is reached \(by default 3\).

For example, suppose we add a whitespace-formatting Checkstyle and a code-generating Spring visitor to a refactor in that order. If we just run the source files through each visitor once, the Checkstyle rule runs first and doesn't change anything. Then the Spring visitor runs and maybe generates some code that doesn't match the style of the project. If we did another loop, the Checkstyle visitor would effectively see this generated code and transform it to look idiomatically consistent in the context of this project. Then the Spring visitor runs again and doesn't have anything further to do.

In this way, individual visitors can support one another without requiring any explicit dependencies between them!

### Next Steps

In [Styles](styles.md), we'll show how to configure styles that are stored with the AST that make these refactoring operations produce changes that look idiomatically consistent with the surrounding project.

