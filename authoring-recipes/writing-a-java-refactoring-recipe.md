---
description: Adding a method to a class that returns a String
---

# Writing a Java Refactoring Recipe

To help you get started with writing recipes, this guide will walk you through all the steps needed to create a basic refactoring recipe. This `SayHelloRecipe` will add a `hello()` method to a user specified class if that class does not already have one.&#x20;

For example, it would take a class like this:

```java
package com.yourorg;

class FooBar {

}
```

And refactor it into a class like this:

```java
package com.yourorg;

class FooBar {
    public String hello() {
        return "Hello from com.yourorg.FooBar!";
    }
}
```

## Prerequisites

This guide assumes you've already set up your [Recipe Development Environment](recipe-development-environment.md) and that you are familiar with writing Java code.

## Outlining SayHelloRecipe

Let's begin by creating a Java class that extends `org.openrewrite.Recipe`. At a minimum, this recipe should have:

* An `Option` that is the fully qualified name of the class you want to add the `hello()` method to.
* A serializable constructor that takes in the fully qualified class name.
* A `getDisplayName()` method that returns the display name for this recipe.
* A `getDescription()` method that returns the description for this recipe.

Here is what the class should look like with just these things defined:

```java
package com.yourorg;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.Option;
import org.openrewrite.Recipe;
import org.openrewrite.internal.lang.NonNull;

// Making your recipe immutable helps make them idempotent and eliminates a variety of possible bugs.
// Configuring your recipe in this way also guarantees that basic validation of parameters will be done for you by rewrite.
// Also note: All recipes must be serializable. This is verified by RewriteTest.rewriteRun() in your tests.
@Value
@EqualsAndHashCode(callSuper = false)
public class SayHelloRecipe extends Recipe {
    @Option(displayName = "Fully Qualified Class Name",
            description = "A fully qualified class name indicating which class to add a hello() method to.",
            example = "com.yourorg.FooBar")
    @NonNull
    String fullyQualifiedClassName;

    // All recipes must be serializable. This is verified by RewriteTest.rewriteRun() in your tests.
    @JsonCreator
    public SayHelloRecipe(@NonNull @JsonProperty("fullyQualifiedClassName") String fullyQualifiedClassName) {
        this.fullyQualifiedClassName = fullyQualifiedClassName;
    }

    @Override
    public String getDisplayName() {
        return "Say Hello";
    }

    @Override
    public String getDescription() {
        return "Adds a \"hello\" method to the specified class.";
    }

    // TODO: Override getVisitor() to return a JavaIsoVisitor to perform the refactoring
}
```

{% hint style="info" %}
If you don't use Lombok's `@Value` annotation, it will be up to you to ensure that the recipe is serializable (possibly via `@JsonCreator` and `@JsonProperty`). 
{% endhint %}

## Writing Tests

Now that we have a basic recipe defined (albeit one that doesn't _do_ anything yet), it's a good idea to write some tests. This will not only allow us to confirm that we've set everything up correctly so far, but it will also ensure that we've thought more about how this recipe will work.

{% hint style="info" %}
For a more extensive look into recipe testing, check out the [Recipe Testing Guide](/authoring-recipes/recipe-testing.md)
{% endhint %}

For our `SayHelloRecipe`, we want to ensure:

* That a class matching the configured `fullyQualifiedClassName` with no `hello()` method will have a `hello()` method added
* That a class that already has a different `hello()` implementation will be left untouched
* That a class not matching the configured `fullyQualifiedClassName` with no `hello()` method will be left untouched

Below is an example of what these tests might look like:

```java
package com.yourorg;

import org.junit.jupiter.api.Test;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

class SayHelloRecipeTest implements RewriteTest {
    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new SayHelloRecipe("com.yourorg.FooBar"));
    }

    @Test
    void addsHelloToFooBar() {
        rewriteRun(
            java(
                """
                    package com.yourorg;

                    class FooBar {
                    }
                """,
                """
                    package com.yourorg;

                    class FooBar {
                        public String hello() {
                            return "Hello from com.yourorg.FooBar!";
                        }
                    }
                """
            )
        );
    }

    @Test
    void doesNotChangeExistingHello() {
        rewriteRun(
            java(
                """
                    package com.yourorg;
        
                    class FooBar {
                        public String hello() { return ""; }
                    }
                """
            )
        );
    }

    @Test
    void doesNotChangeOtherClasses() {
        rewriteRun(
            java(
                """
                    package com.yourorg;
        
                    class Bash {
                    }
                """
            )
        );
    }
}
```

Please note that:

* The test file implements the `RewriteTest` interface, which provides an entry point to the testing infrastructure via the method variants of `rewriteRun()`.
* It is possible to set up defaults for all of the tests via the `defaults()` method so that you don't have to repeat the same code in each test.
* Each test, at a minimum, will define the initial source code (the "before" state).
  * If there _is_ a second argument included (the "after" state), then the testing infrastructure will assert that the source file has been transformed into this new state after the recipe has been executed.
  * If there _is not_ a second argument, then the testing infrastructure will assert that the source file has not been changed after the recipe has been executed.

If you run the tests right now, you should see that the tests that expect no changes pass, whereas the test that expects changes does not. This is expected as we haven't added a visitor responsible for potentially making changes to the source code.

## Implementing the visitor

Now that we have a basic outline of a recipe and the tests, it's time to make the rest of our recipe.

There are two main pieces to this:

1. Figure out [which ASTs](../concepts-and-explanations/ast-examples.md) have the data we need to make the changes we want.
2. Override the `Recipe.getVisitor()` method to return a visitor that is responsible for refactoring the code as desired. This visitor is where all of our core logic will live. It should ensure:
   * That we don't change classes that don't match the specified fully qualified class name
   * That we don't change existing `hello()` methods.
   * That we _do_ add a `hello()` method to a class that matches that fully qualified class name and doesn't have an existing `hello()` method.

### Figure out which ASTs are needed

Before we begin writing any code, it's a good idea to figure out which ASTs contain the data we need and which ASTs we might need to change to get the results we want. Using an AST that's too broad in scope will result in us having to do much more work than necessary, but using an AST that's too narrow in scope will result in us being unable to make the changes we need to.

For our use case, we care about reading class names and, potentially, changing methods inside of the class.

If we take a look at the [AST Examples doc](https://docs.openrewrite.org/concepts-and-explanations/ast-examples#ast-diagram), we can see that a [J.ClassDeclaration](https://github.com/openrewrite/rewrite/blob/v7.34.0/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L1062-L1336) has the information we need. It has a `FullyQualified` type that we can use to ensure we're only making changes on the specified class, and it contains a `Block` that includes `Statements` that may be `MethodDeclarations`, so we can check for a `hello()` method and potentially add one if it doesn't exist.

### Override the visitor

With the knowledge of the AST we need obtained, let's make an outline of what our visitor should look like and do:

```java
// ...
public class SayHelloRecipe extends Recipe {
    // ...

    @Override
    protected JavaIsoVisitor<ExecutionContext> getVisitor() {
        // getVisitor() should always return a new instance of the visitor to avoid any state leaking between cycles
        return new SayHelloVisitor();
    }

    public class SayHelloVisitor extends JavaIsoVisitor<ExecutionContext> {
        @Override
        public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext executionContext) {
            // TODO: Filter out classes that don't match the fully qualified name

            // TODO: Filter out classes that already have a `hello()` method

            // TODO: Add a `hello()` method to classes that need it
            return classDecl;
        }
    }
}
```

Now, let's work through each of those TODOs.

#### Filtering out classes that don't match the fully qualified name

All of our logic lives inside of the `visitClassDeclaration` method. To filter out classes that don't match the fully qualified class name, we need to do grab some information from the `type` field in `ClassDecalaration`:

```java
// ...
public class SayHelloRecipe extends Recipe {
    // ...

    public class SayHelloVisitor extends JavaIsoVisitor<ExecutionContext> {
        @Override
        public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext executionContext) {
            // Don't make changes to classes that don't match the fully qualified name
            if (classDecl.getType() == null || !classDecl.getType().getFullyQualifiedName().equals(fullyQualifiedClassName)) {
                return classDecl;
            }

            // TODO: Filter out classes that already have a `hello()` method

            // TODO: Add a `hello()` method to classes that need it
            return classDecl;
        }
    }
}
```

#### Filtering out classes that already have a hello() method

To filter out classes that already have a `hello()` method, we need to first figure out how to check for that. A good understanding of the [ASTs](../concepts-and-explanations/ast-examples.md) is necessary for this type of filtering. With that knowledge, we can build up a stream, filter it down, and check for any matches by doing something like:

```java
// ...
public class SayHelloRecipe extends Recipe {
    // ...

    public class SayHelloVisitor extends JavaIsoVisitor<ExecutionContext> {
        @Override
        public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext executionContext) {
            // Don't make changes to classes that don't match the fully qualified name
            if (classDecl.getType() == null || !classDecl.getType().getFullyQualifiedName().equals(fullyQualifiedClassName)) {
                return classDecl;
            }

            // Check if the class already has a method named "hello"
            boolean helloMethodExists = classDecl.getBody().getStatements().stream()
                    .filter(statement -> statement instanceof J.MethodDeclaration)
                    .map(J.MethodDeclaration.class::cast)
                    .anyMatch(methodDeclaration -> methodDeclaration.getName().getSimpleName().equals("hello"));

            // If the class already has a `hello()` method, don't make any changes to it.
            if (helloMethodExists) {
                return classDecl;
            }

            // TODO: Add a `hello()` method to classes that need it
            return classDecl;
        }
    }
}
```

#### Adding a hello() method to the classes that need it

In order to create complex AST elements such as a new method, it's a good idea to use a [Java Template](../concepts-and-explanations/javatemplate.md). At a high-level, Java Templates simplify the creation of ASTs by converting code snippets into fully created ASTs.

Templates are created using the `JavaTemplate.builder()` method. Within a template, `#{}` can be used to signify that a value will be substituted there later on. In our recipe, for instance, we don't know what the fully qualified class name is when we're compiling the program. Instead, we need to rely on the user to provide that later.

Here is what a template like that might look like for our recipe:

```java
// ...
public class SayHelloRecipe extends Recipe {
    // ...

    public class SayHelloVisitor extends JavaIsoVisitor<ExecutionContext> {
        private final JavaTemplate helloTemplate =
                JavaTemplate.builder(this::getCursor, "public String hello() { return \"Hello from #{}!\"; }")
                        .build();

        @Override
        public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext executionContext) {
            // ...
        }
    }
}
```

We then could use that template to add a `hello()` method as desired by:

```java
// ...
public class SayHelloRecipe extends Recipe {
    // ...

    public class SayHelloVisitor extends JavaIsoVisitor<ExecutionContext> {
        private final JavaTemplate helloTemplate =
                JavaTemplate.builder(this::getCursor, "public String hello() { return \"Hello from #{}!\"; }")
                        .build();

        @Override
        public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext executionContext) {
            // Don't make changes to classes that don't match the fully qualified name
            if (classDecl.getType() == null || !classDecl.getType().getFullyQualifiedName().equals(fullyQualifiedClassName)) {
                return classDecl;
            }

            // Check if the class already has a method named "hello"
            boolean helloMethodExists = classDecl.getBody().getStatements().stream()
                    .filter(statement -> statement instanceof J.MethodDeclaration)
                    .map(J.MethodDeclaration.class::cast)
                    .anyMatch(methodDeclaration -> methodDeclaration.getName().getSimpleName().equals("hello"));

            // If the class already has a `hello()` method, don't make any changes to it.
            if (helloMethodExists) {
                return classDecl;
            }

            // Interpolate the fullyQualifiedClassName into the template and use the resulting AST to update the class body
            classDecl = classDecl.withBody(
                    classDecl.getBody().withTemplate(
                            helloTemplate,
                            classDecl.getBody().getCoordinates().lastStatement(),
                            fullyQualifiedClassName
                    ));

            return classDecl;
        }
    }
}
```

## Completed visitor

With all of that done, the complete `SayHelloRecipe` looks like this:

```java
package com.yourorg;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Option;
import org.openrewrite.Recipe;
import org.openrewrite.internal.lang.NonNull;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.tree.J;

// Making your recipe immutable helps make them idempotent and eliminates categories of possible bugs.
// Configuring your recipe in this way also guarantees that basic validation of parameters will be done for you by rewrite.
// Also note: All recipes must be serializable. This is verified by RewriteTest.rewriteRun() in your tests.
@Value
@EqualsAndHashCode(callSuper = false)
public class SayHelloRecipe extends Recipe {
    @Option(displayName = "Fully Qualified Class Name",
            description = "A fully qualified class name indicating which class to add a hello() method to.",
            example = "com.yourorg.FooBar")
    @NonNull
    String fullyQualifiedClassName;

    @Override
    public String getDisplayName() {
        return "Say Hello";
    }

    @Override
    public String getDescription() {
        return "Adds a \"hello\" method to the specified class.";
    }

    @Override
    protected JavaIsoVisitor<ExecutionContext> getVisitor() {
        // getVisitor() should always return a new instance of the visitor to avoid any state leaking between cycles
        return new SayHelloVisitor();
    }

    public class SayHelloVisitor extends JavaIsoVisitor<ExecutionContext> {
        private final JavaTemplate helloTemplate =
                JavaTemplate.builder(this::getCursor, "public String hello() { return \"Hello from #{}!\"; }")
                        .build();

        @Override
        public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext executionContext) {
            // Don't make changes to classes that don't match the fully qualified name
            if (classDecl.getType() == null || !classDecl.getType().getFullyQualifiedName().equals(fullyQualifiedClassName)) {
                return classDecl;
            }

            // Check if the class already has a method named "hello".
            boolean helloMethodExists = classDecl.getBody().getStatements().stream()
                    .filter(statement -> statement instanceof J.MethodDeclaration)
                    .map(J.MethodDeclaration.class::cast)
                    .anyMatch(methodDeclaration -> methodDeclaration.getName().getSimpleName().equals("hello"));

            // If the class already has a `hello()` method, don't make any changes to it.
            if (helloMethodExists) {
                return classDecl;
            }

            // Interpolate the fullyQualifiedClassName into the template and use the resulting AST to update the class body
            classDecl = classDecl.withBody(
                    classDecl.getBody().withTemplate(
                            helloTemplate,
                            classDecl.getBody().getCoordinates().lastStatement(),
                            fullyQualifiedClassName
                    ));

            return classDecl;
        }
    }
}
```

If you run the tests, they should all pass. Running this recipe on a class like `FooBar { }` should now produce the desired result:

```java
package com.yourorg;

class FooBar {
    public String hello() {
        return "Hello from com.yourorg.FooBar!";
    }
}
```

## Declarative YAML Usage

`SayHelloRecipe` is now ready to be used in code or declaratively from YAML:

{% tabs %}
{% tab title="YAML" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.sayHelloToFooBar
recipeList:
  - org.openrewrite.samples.SayHelloRecipe:
      fullyQualifiedClassName: com.yourorg.FooBar
```
{% endtab %}
{% endtabs %}

## Next Steps

Congratulations on finishing your first recipe! Before you begin making your own recipe, please consider checking out these other docs:

* [A deeper look into testing](recipe-testing.md)
* [A best practice guide for making recipes](recipe-conventions-and-best-practices.md)
* [A more complex recipe creation tutorial](modifying-methods-with-javatemplate.md)
