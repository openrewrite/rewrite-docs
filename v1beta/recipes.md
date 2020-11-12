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

Recipes are defined declaratively in YML and read into an [Environment](environment.md). There isn't a direct corollary to declarative recipes in code. They are mainly a packaging convenience used to add sets of visitors to a [Refactor ](refactor.md)operation.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.Spring
include:
  - 'org.openrewrite.spring.*'

exclude:
  - org.openrewrite.spring.ConstructorInjection
  - org.openrewrite.spring.ComponentToBeanConfiguration
```

### Next Steps

In [Styles](styles.md), we'll cover how Rewrite keeps track of the stylistic expectations of a source repository, things like whitespace and indentation, in order to generate transformations that look consistent with surrounding code.

