---
description: >-
  Encapsulates a collection of operations to accomplish some higher-level task
  like a framework migration.
---

# Recipes

A recipe, in the context of Rewrite, represents a group of search and refactoring operations that can be applied to an abstract syntax tree. A recipe can represent a single, stand-alone operation or, in a more typical setting, can be chained together with additional recipes to accomplish a higher level task such as a framework migration.

There are three important characteristics about a recipe:

* OpenRewrite provides a managed environment for discovering, instantiating and configuring a recipe.
* A recipe has an optional, peer relationship with a single visitor and when a recipe is executed with a set of source files, it delegates to its peer to manipulate the ASTs. 
* A recipe can imperatively or declaratively be linked to additional recipes to perform a series of operations to accomplish a higher level task.

## Imperative Recipes

An imperative recipe is built by extending the `Recipe` class and any configurable values are injected into the recipe via it's constructor.

### Stand-Alone Recipes

A stand-alone recipe acts as a managed, configurable wrapper to its associated visitor and delegates to that visitor to perform the actual work on the set of abstract syntax trees.  

Let's look at a simple example where a Java recipe performs an operation to change all references of an original type to a new type.

```java
public class ChangeType extends Recipe {

    private final String oldFullyQualifiedTypeName;
    private final String newFullyQualifiedTypeName;

    public ChangeType(String oldFullyQualifiedTypeName, String newFullQualifiedTypeName) {
        this.oldFullyQualifiedTypeName = oldFullyQualifiedTypeName;
        this.newFullQualifiedTypeName = newFullQualifiedTypeName;
    }
    
    @Override
    protected TreeVisitor<?, ExecutionContext> getVisitor() {
        return new ChangeTypeVisitor(oldFullyQualifiedTypeName, newFullyQualifiedTypeName);
    }
    
    private class ChangeTypeVisitor extends JavaVisitor<ExecutionContext> {
        ...
    }
    
}

```

This recipe accepts two configuration parameters via its constructor and when the recipe is executed within the context of Rewrite's managed environment, the framework will instantiate and configure the recipe. The recipe overrides the getVisitor method and constructs its delegate visitor passing along any configuration that it requires to perform a transformation on the set of ASTs.

### Composite Recipes

A composite recipe encapsulates a set of nested recipes that are chained together to perform some higher level operation over the set of abstract syntax trees.

As an example, let's examine how one would build a recipe to migrate a project from JUnit 4 to JUnit 5 using the follow steps \(by no means an exhaustive list\):

* Changing the type `org.junit.Test` to `org.junit.jupiter.api.Test`.
* Changing assertion types.
* Removing public visibility from test classes and methods that no longer need to be `public` in JUnit 5 
* Modifying the Maven pom.xml to include dependencies on JUnit 5, and remove dependencies on JUnit 4

An imperative recipe is built by extending the `Recipe` class and any configurable values are injected into the recipe via it's constructor. A recipe can chain additional recipes to the execution pipeline by adding those recipes with the `doNext()` method.

In our above example, the "Migrate to JUnit 5" recipe might look similar to the following:

```java
package org.example.testing;

import org.openrewrite.java.ChangeType;

public class JUnit5Migration extends Recipe {
    
    public JUnit5Migration(boolean addJunit5Dependencies) {
        
        doNext(new ChangeType("org.junit.Test", "org.junit.jupiter.api.Test"));
        doNext(new AssertToAssertions());
        doNext(new RemovePublicTestModifiers());

        //Recipe can be optionally configured to add the JUnit 5 dependencies
        if (addJUnitDependencies) {
            doNext(new AddJUnit5Dependencies());
        }
    }
}
```

This recipe does not have an associated peer visitor and instead groups a set of nested recipes that will be added to the execution pipeline when the recipe is executed. Again, Rewrite's managed environment provides facilities to activate, configure and instantiate the composite recipe.

## Declarative Recipes

Declarative recipes are defined in YAML and loaded as part of Rewrite's managed [Environment](environment.md). A declarative recipe composes and configures other recipes via the Rewrite configuration file. In our above example, the declarative version of the "Migrate JUnit 5" recipe might look similar to the following:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.example.testing.JUnit5Migration
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Test
      newFullyQualifiedTypeName: org.junit.jupiter.api.Test
  - org.example.testing.AssertToAssertions
  - org.example.testing.RemovePublicTestModifiers
  - org.example.testing.AddJUnitDependencies
  
```

## Recipe Configuration & Validation

OpenRewrite provides a managed environment in which a set of recipes are executed. It will instantiate recipe instances and often inject configuration properties that have been defined within configuration files. Due to the declarative nature of the settings, the Recipe class has a validate\(\) method that is called by the framework prior to executing the recipe. This is useful place where a recipe can ensure it is  pre-configured with any inputs that it needs to perform its work.

### Default Validation

The `Recipe` class provides a default implementation of the `validate()` method that will provide basic required/optional validation checks on a recipe if a recipe's fields are annotated with `@NonNull`. 

{% hint style="success" %}
The default logic will look for both package level annotations \(NonNullFields\) and field level annotations \(NonNull, Nullable, etc\).
{% endhint %}

In the event that a recipe requires custom validation rules above and beyond the default behavior, a subclass can simply override the validate method.

## Recipe Execution Pipeline



![Execution Order For The JUnit Sample Recipe](../../.gitbook/assets/image%20%2813%29.png)

### Execution Context

#### Error Handling



