---
description: >-
  Encapsulates a collection of visitors to accomplish some higher-level task
  like a framework migration.
---

# Recipes

Recipes bring together a group of [Visitors](visitor.md) that perform the individual operations necessary to accomplish some higher-level task like a framework migration. For example, migrating from JUnit 4 to JUnit 5 involves a number of individual actions \(by no means an exhaustive list\):

* Changing the type `org.junit.Test` to `org.junit.jupiter.api.Test`.
* Changing assertion types.
* Removing public visibility from test classes and methods.
* Changing lifecycle methods.

Each of these items would be defined as a separate visitor. Together they accomplish the migration. Recipes make it easy to apply a migration playbook without knowing all the specifics of what needs to happen to accomplish the migration.

### Declarative Recipes

Recipes are defined declaratively in YML and read into an [Environment](environment.md).

```text
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.spring
include:
  - 'org.openrewrite.spring.*'

exclude:
  - org.openrewrite.spring.ConstructorInjection
  - org.openrewrite.spring.ComponentToBeanConfiguration
```

### The Alternative to Recipes in Code

You can also instantiate recipes directly in code if you are building a main method or other process to process code.

```java
// parsed from one or more language-specific Parsers.
Iterable<SourceFile> sources = ...

Iterable<RefactorVisitor<?>> visitors = ...


```

### Next Steps

In [Styles](styles.md), we'll cover how Rewrite keeps track of the stylistic expectations of a source repository, things like whitespace and indentation, in order to generate transformations that look consistent with surrounding code.

