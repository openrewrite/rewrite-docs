---
description: A Search or Refactoring operation
---

# Recipes

Recipes are searching or refactoring operations that can be chained together to accomplish some higher-level task like a framework migration. For example, migrating from JUnit 4 to JUnit 5 involves a number of individual actions, including but not limited to:

* Changing the type `org.junit.Test` to `org.junit.jupiter.api.Test`.
* Changing assertion types.
* Removing public visibility from test classes and methods that no longer need to be `public` in JUnit 5 
* Modifying the Maven pom.xml to include dependencies on JUnit5, and remove dependencies on JUnit 4

Each of these items would be defined as its own Recipe. They are then grouped together into a single Recipe which runs them in sequence to accomplish the whole migration. Recipes make it easy to apply a migration playbook without knowing all the specifics of what needs to happen to accomplish the migration.

## Declarative Recipes

Declarative recipes are defined in YAML and read into an [Environment](environment.md). These compose and configure other recipes into a single operation. For example, this excerpt from [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks/blob/master/src/main/resources/META-INF/rewrite/junit5.yml) configuress instances of the ChangeType recipe to replace JUnit 4 types with their JUnit 5 successors.  

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.JUnit5Migration
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Ignore
      newFullyQualifiedTypeName: org.junit.jupiter.api.Disabled
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Assume
      newFullyQualifiedTypeName: org.junit.jupiter.api.Assumptions
```

