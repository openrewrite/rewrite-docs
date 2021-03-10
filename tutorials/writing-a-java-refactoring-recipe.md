---
description: Adding a method that returns a String to a class
---

# Writing a Java Refactoring Recipe

In this tutorial we'll create a basic refactoring recipe that adds a method returning a `String` to a user specified class. This `SayHelloRecipe` will take a class like this:

```java
package com.yourorg;

class A {

}
```

And refactor it into a class like this:

```java
package com.yourorg;

class A {
    public String hello() {
        return "Hello from com.yourorg.A!";
    }

}
```

## Project Setup

Since this is a Java refactoring visitor, take a compile-scope dependency on rewrite-java. Add test-scoped dependencies on rewrite-test, rewrite-java-8, and rewrite-java-11.

{% tabs %}
{% tab title="Gradle" %}
```kotlin
dependencies {
    implementation("org.openrewrite:rewrite-java:7.0.0-rc.8")

    testImplementation("org.openrewrite:rewrite-test:7.0.0-rc.8")

    testRuntimeOnly("org.openrewrite:rewrite-java-11:7.0.0-rc.8")
    testRuntimeOnly("org.openrewrite:rewrite-java-8:7.0.0-rc.8")
}
```
{% endtab %}

{% tab title="Maven" %}
```markup
<dependencies>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java</artifactId>
        <version>7.0.0-rc.8</version>
        <scope>compile</scope>
    </dependency>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java-8</artifactId>
        <version>7.0.0-rc.8</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java-11</artifactId>
        <version>7.0.0-rc.8</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-test</artifactId>
        <version>7.0.0-rc.8</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
rewrite-java-8 and rewrite-java-11 can peacefully coexist on the same classpath. At runtime one of them will be selected according to the version of the JVM Rewrite is executing on.
{% endhint %}

## Defining SayHelloRecipe

Begin by creating a class that extends `org.openrewrite.Recipe`. This recipe should accept as a configuration parameter the fully qualified name of the class to add a `hello()` method to and it should validate that parameter is configured with a valid value.

```java
package org.openrewrite.samples;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Option;
import org.openrewrite.Recipe;
import org.openrewrite.internal.lang.NonNull;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.tree.J;

public class SayHelloRecipe extends Recipe {
    // Making your recipe immutable helps make them idempotent and eliminates categories of possible bugs
    // Configuring your recipe in this way also guarantees that basic validation of parameters will be done for you by rewrite
    @Option(displayName = "Fully Qualified Class Name",
            description = "A fully-qualified class name indicating which class to add a hello() method.",
            example = "com.yourorg.FooBar")
    @NonNull
    private final String fullyQualifiedClassName;

    // Recipes must be serializable. This is verified by RecipeTest.assertChanged() and RecipeTest.assertUnchanged()
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
        return "Adds a \"hello\" method to the specified class";
    }

    // TODO: Override getVisitor() to return a JavaIsoVisitor to perform the refactoring
}
```
{% hint style="info" %}
The "discover" feature of the Gradle and Maven plugins will display information from the `@Option` annotation to users of your Recipe.
{% endhint %}
So now we have a Recipe implementation that validates that a single parameter is filled in with a non-blank value. It doesn't have any actual refactoring behavior yet, so that's what we'll add next.

### Implementing the Visitor

To actually refactor the code in question we override `Recipe.getVisitor()` to return a new `JavaIsoVisitor<ExecutionContext>` instance that will actually perform the refactoring.

```java
package org.openrewrite.samples;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Option;
import org.openrewrite.Recipe;
import org.openrewrite.internal.lang.NonNull;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.tree.J;

public class SayHelloRecipe extends Recipe {
    // Making your recipe immutable helps make them idempotent and eliminates categories of possible bugs
    // Configuring your recipe in this way also guarantees that basic validation of parameters will be done for you by rewrite
    @Option(displayName = "Fully Qualified Class Name",
            description = "A fully-qualified class name indicating which class to add a hello() method.",
            example = "com.yourorg.FooBar")
    @NonNull
    private final String fullyQualifiedClassName;

    // Recipes must be serializable. This is verified by RecipeTest.assertChanged() and RecipeTest.assertUnchanged()
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
        return "Adds a \"hello\" method to the specified class";
    }

    @Override
    protected JavaIsoVisitor<ExecutionContext> getVisitor() {
        // getVisitor() should always return a new instance of the visitor to avoid any state leaking between cycles
        return new SayHelloVisitor();
    }

    public class SayHelloVisitor extends JavaIsoVisitor<ExecutionContext> {
        private final JavaTemplate helloTemplate =
                template("public String hello() { return \"Hello from #{}!\"; }")
                        .build();

        @Override
        public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext executionContext) {
            // TODO: Filter out classes that don't need refactoring, refactor those that do
            return classDecl;
        }
    }
}
```

Here we override `JavaIsoVisitor.visitClassDeclaration` in preparation for returning a modified class declaration that includes our new `hello()` method. The first step in any refactoring visit method is to _avoid refactoring_ any class which the visitor should not change. In this case that means any class that isn't the one specified in the recipe, or any class that already has a `hello()` method. Adding this filtering to `SayHelloRecipe.SayHelloVisitor.visitClassDeclaration()` looks like this:

```java
@Override
public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext executionContext) {
    // In any visit() method the call to super() is what causes sub-elements of to be visited
    J.ClassDeclaration cd = super.visitClassDeclaration(classDecl, executionContext);

    if (classDecl.getType() == null || !classDecl.getType().getFullyQualifiedName().equals(fullyQualifiedClassName)) {
        // We aren't looking at the specified class so return without making any modifications
        return cd;
    }

    // Check if the class already has a method named "hello" so we don't incorrectly add a second "hello" method
    boolean helloMethodExists = classDecl.getBody().getStatements().stream()
            .filter(statement -> statement instanceof J.MethodDeclaration)
            .map(J.MethodDeclaration.class::cast)
            .anyMatch(methodDeclaration -> methodDeclaration.getName().getSimpleName().equals("hello"));
    if (helloMethodExists) {
        return cd;
    }

    // TODO: Use JavaTemplate to say hello()
    return cd;
}
```

### Using JavaTemplate to say hello\(\)

Templates are created using the `JavaVisitor.template()` method. Within a template `#{}` is the signifier for positional parameter substitution. So to produce the hello\(\) method add this to the visitor:

```java
public class SayHelloVisitor extends JavaIsoVisitor<ExecutionContext> {
    private final JavaTemplate helloTemplate =
            template("public String hello() { return \"Hello from #{}!\"; }")
                    .build();
    ...
}
```

And use that template within `SayHelloVisitor.visitClassDeclaration` like so:

```java
@Override
public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext executionContext) {
    // In any visit() method the call to super() is what causes sub-elements of to be visited
    J.ClassDeclaration cd = super.visitClassDeclaration(classDecl, executionContext);

    if (classDecl.getType() == null || !classDecl.getType().getFullyQualifiedName().equals(fullyQualifiedClassName)) {
        // We aren't looking at the specified class so return without making any modifications
        return cd;
    }

    // Check if the class already has a method named "hello" so we don't incorrectly add a second "hello" method
    boolean helloMethodExists = classDecl.getBody().getStatements().stream()
            .filter(statement -> statement instanceof J.MethodDeclaration)
            .map(J.MethodDeclaration.class::cast)
            .anyMatch(methodDeclaration -> methodDeclaration.getName().getSimpleName().equals("hello"));
    if (helloMethodExists) {
        return cd;
    }

    // Interpolate the fullyQualifiedClassName into the template and use the resulting AST to update the class body
    cd = cd.withBody(
            cd.getBody().withTemplate(
                    helloTemplate,
                    cd.getBody().getCoordinates().lastStatement(),
                    fullyQualifiedClassName
            ));

    return cd;
}
```

Running this visitor on a class like `A { }` will now produce the desired result:

```java
package com.yourorg;

class A {
    public String hello() {
        return "Hello from com.yourorg.A!";
    }

}
```

So the complete `SayHelloRecipe` looks like this:

```java
package org.openrewrite.samples;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Option;
import org.openrewrite.Recipe;
import org.openrewrite.internal.lang.NonNull;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.tree.J;

public class SayHelloRecipe extends Recipe {
    // Making your recipe immutable helps make them idempotent and eliminates categories of possible bugs
    // Configuring your recipe in this way also guarantees that basic validation of parameters will be done for you by rewrite
    @Option(displayName = "Fully Qualified Class Name",
            description = "A fully-qualified class name indicating which class to add a hello() method.",
            example = "com.yourorg.FooBar")
    @NonNull
    private final String fullyQualifiedClassName;

    // Recipes must be serializable. This is verified by RecipeTest.assertChanged() and RecipeTest.assertUnchanged()
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
        return "Adds a \"hello\" method to the specified class";
    }

    @Override
    protected JavaIsoVisitor<ExecutionContext> getVisitor() {
        // getVisitor() should always return a new instance of the visitor to avoid any state leaking between cycles
        return new SayHelloVisitor();
    }

    public class SayHelloVisitor extends JavaIsoVisitor<ExecutionContext> {
        private final JavaTemplate helloTemplate =
                template("public String hello() { return \"Hello from #{}!\"; }")
                        .build();

        @Override
        public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext executionContext) {
            // In any visit() method the call to super() is what causes sub-elements of to be visited
            J.ClassDeclaration cd = super.visitClassDeclaration(classDecl, executionContext);

            if (classDecl.getType() == null || !classDecl.getType().getFullyQualifiedName().equals(fullyQualifiedClassName)) {
                // We aren't looking at the specified class so return without making any modifications
                return cd;
            }

            // Check if the class already has a method named "hello" so we don't incorrectly add a second "hello" method
            boolean helloMethodExists = classDecl.getBody().getStatements().stream()
                    .filter(statement -> statement instanceof J.MethodDeclaration)
                    .map(J.MethodDeclaration.class::cast)
                    .anyMatch(methodDeclaration -> methodDeclaration.getName().getSimpleName().equals("hello"));
            if (helloMethodExists) {
                return cd;
            }

            // Interpolate the fullyQualifiedClassName into the template and use the resulting AST to update the class body
            cd = cd.withBody(
                    cd.getBody().withTemplate(
                            helloTemplate,
                            cd.getBody().getCoordinates().lastStatement(),
                            fullyQualifiedClassName
                    ));

            return cd;
        }
    }
}
```

## Testing

To create automated tests of this visitor we use the [kotlin](https://kotlinlang.org/) language, mostly for convenient access to multi-line Strings, with [JUnit 5](https://junit.org/junit5/docs/current/user-guide/) and `RecipeTest` class provided by rewrite-test. For `SayHelloRecipe` it is sensible to test:

* That a class matching the configured `fullyQualifiedClassName` with no `hello()` method will have a `hello()` method added
* That a class that already has a different `hello()` implementation will be left untouched
* That a class not matching the configured `fullyQualifiedClassName` with no `hello()` method will be left untouched

To assert that a Recipe does make a change, use `RecipeTest.assertChanged`. To assert that a Recipe does _not_ make a change it shouldn't, use `RecipeTest.assertUnchanged`. These methods will default to using the `parser` and `recipe` properties on the class.

```kotlin
package org.openrewrite.samples

import org.junit.jupiter.api.Test
import org.openrewrite.RecipeTest
import org.openrewrite.java.JavaParser

class SayHelloRecipeTest(): RecipeTest {
    override val parser = JavaParser.fromJavaVersion().build()
    override val recipe = SayHelloRecipe().apply { setFullyQualifiedClassName("com.yourorg.A") }

    @Test
    fun addsHelloToA() = assertChanged(
        before = """
            package com.yourorg;

            class A {
            }
        """,
        after = """
            package com.yourorg;

            class A {
                public String hello() {
                    return "Hello from com.yourorg.A!";
                }
            }
        """
    )

    @Test
    fun doesNotChangeExistingHello() = assertUnchanged(
        before = """
            package com.yourorg;

            class A {
                public String hello() { return ""; }
            }
        """
    )

    @Test
    fun doesNotChangeOtherClass() = assertUnchanged(
        before = """
            package com.yourorg;

            class B {
            }
        """
    )
}
```

## Declarative YAML Usage

`SayHelloRecipe` is now ready to be used in code or declaratively from YAML. This Java snippet and YAML snippet are equivalent in their behavior:

```text
SayHelloRecipe sayHelloA = new SayHelloRecipe("com.yourorg.A");
```

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.sayHelloA
recipeList:
  - org.openrewrite.samples.SayHelloRecipe:
      fullyQualifiedClassName: com.yourorg.A
```

