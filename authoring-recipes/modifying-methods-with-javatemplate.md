# Modifying methods with JavaTemplate

Previously, we wrote a Java recipe that [added a hello() method to a class if it didn't already have one](/authoring-recipes/writing-a-java-refactoring-recipe.md). In that guide, we used a `JavaTemplate` to create a basic method. However, a `JavaTemplate` can be used for much more complicated changes, such as refactoring existing methods. Let's explore that.

In this guide, you will build a recipe that [finds a specific abstract method](#limit-the-visitors-scope) and:

* [Remove the abstract modifier from it](#remove-the-abstract-modifier)
* [Define a method body for it](#build-the-template-for-the-setcustomerinfo-method-body)
* [Fix the formatting issues that arise](#fixing-formatting)
* [Add two additional parameters to the method declaration](#add-parameters-to-setcustomerinfo)
* [Add two additional statements to the method's body](#add-additional-statements-to-setcustomerinfo)

This recipe will refactor code like this:

```java
package com.yourorg;

import java.util.Date;

public abstract class Customer {
    private Date dateOfBirth;
    private String firstName;
    private String lastName;

    public abstract void setCustomerInfo(String lastName);
}
```

Into code like this:

```java
package com.yourorg;

import java.util.Date;

public abstract class Customer {
    private Date dateOfBirth;
    private String firstName;
    private String lastName;

    public void setCustomerInfo(Date dateOfBirth, String firstName, String lastName) {
        this.dateOfBirth = dateOfBirth;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

## Prerequisites

This guide assumes that:

* You're familiar with writing Java code
* You've already set up your [Recipe Development Environment](recipe-development-environment.md)
* You've read through the [Java refactoring recipe guide](/authoring-recipes/writing-a-java-refactoring-recipe.md) and the [recipe testing guide](/authoring-recipes/recipe-testing.md)

## Outline the recipe

Let's begin by outlining our recipe. As before, we'll extend `org.openrewrite.Recipe`, add the basic methods (`getDisplayName()`, `getDescription()`, and `getVisitor()`), and then define our own `ExpandCustomerInfoVisitor`:

```java
package com.yourorg;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.java.JavaIsoVisitor;

public class ExpandCustomerInfo extends Recipe {
    @Override
    public String getDisplayName() {
        return "Expand Customer Info";
    }

    @Override
    public String getDescription() {
        return "Expand the `CustomerInfo` class with new fields.";
    }

    @Override
    public JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {

    private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
        // TODO: Implement the visitor
    }
}

```

{% hint style="info" %}
The `ExpandCustomerInfoVisitor` is defined in an inner class to the recipe because it is not intended to be used outside the context of the recipe.
{% endhint %}

## Write tests

Once the recipe has been outlined, the next step is to write some tests. It's important to write these tests early so you can make sure you truly understand what the recipe you're writing is doing. 

For our recipe, let's write two tests: 

* A test that ensures that we do not modify methods that do not match the method we want to change
* A test that is an exact copy of the before and after code provided at the beginning of this guide

{% hint style="info" %}
If you don't remember how to write tests or want more information about writing them, please see our [recipe testing guide](/authoring-recipes/recipe-testing.md)
{% endhint %}

Here is what these tests should look like:

```java
package com.yourorg;

import org.junit.jupiter.api.Test;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

public class ExpandCustomerInfoTest implements RewriteTest {
    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new ExpandCustomerInfo());
    }

    @Test
    void doesNotModifyUnexpectedMethods() {
        rewriteRun(
            java(
                """
                    package com.yourorg;

                    import java.util.Date;

                    public abstract class Customer {
                        private Date dateOfBirth;
                        private String firstName;
                        private String lastName;

                        public abstract void setOtherCustomerInfo(String lastName);

                        public void setCustomerInfo(int meow) {
                            System.out.println("Hello " + meow);
                        }
                    }
                """
            )
        );
    }

    @Test
    void expandsExpectedCustomerInfoMethod() {
        rewriteRun(
            java(
                """
                    package com.yourorg;

                    import java.util.Date;

                    public abstract class Customer {
                        private Date dateOfBirth;
                        private String firstName;
                        private String lastName;

                        public abstract void setCustomerInfo(String lastName);
                    }
                """,
                """
                    package com.yourorg;

                    import java.util.Date;

                    public abstract class Customer {
                        private Date dateOfBirth;
                        private String firstName;
                        private String lastName;

                        public void setCustomerInfo(Date dateOfBirth, String firstName, String lastName) {
                            this.dateOfBirth = dateOfBirth;
                            this.firstName = firstName;
                            this.lastName = lastName;
                        }
                    }
                """
            )
        );
    }
}
```

## Code the visitor

### Limit the visitor's scope

When making a visitor, one of the first things you should do is ensure that your visitor does not run on code it shouldn't. For our recipe, that means it should only run on a method that is in the package `com.yourorg.Customer` and has a signature of `setCustomerInfo(String)`.

We can make a [MethodMatcher](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/MethodMatcher.java) that looks for a method like that. Once that's made, we can override the `visitMethodDeclaration()` function to check if any method matches the one we want. If the match fails, we should return the method as is:

```java
private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
    // Used to identify the method declaration that will be refactored
    private final MethodMatcher methodMatcher = new MethodMatcher("com.yourorg.Customer setCustomerInfo(String)");

    @Override
    public MethodDeclaration visitMethodDeclaration(MethodDeclaration methodDeclaration, ExecutionContext executionContext) {
        if (!methodMatcher.matches(methodDeclaration.getMethodType())) {
            return methodDeclaration;
        }

        // TODO: Implement refactoring operations on the matching "setCustomerInfo()" method declaration.

        return methodDeclaration;
    }
}
```

{% hint style="success" %}
If you need help deciding what [LST](/concepts-and-explanations/lossless-semantic-trees.md) to interact with (such as `MethodDeclaration` vs. `MethodInvocation`), check out our [Java LST examples guide](/concepts-and-explanations/lst-examples.md).
{% endhint %}

### Remove the abstract modifier

Next up on our list of tasks is to remove the `abstract` modifier from our `setCustomerInfo()` method. [MethodDeclarations](/concepts-and-explanations/lst-examples.md#methoddeclaration) have a list of `Modifiers` in them. We can use a Java stream and the `filter` function to remove the `abstract` modifier:

```java
private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
    // ...

    @Override
    public MethodDeclaration visitMethodDeclaration(MethodDeclaration methodDeclaration, ExecutionContext executionContext) {
        // ...

        // Remove the abstract modifier from the method
        methodDeclaration = methodDeclaration.withModifiers(methodDeclaration.getModifiers().stream()
                .filter(modifier -> modifier.getType() != Type.Abstract)
                .collect(Collectors.toList()));

        // ...

        return methodDeclaration;
    }
}
```

If you run the tests now, you should see that:

* The `doesNotModifyUnexpectedMethods` test passes
* The `expandsExpectedCustomerInfoMethod` test fails but correctly removes the `abstract` modifier from the expected method:

```java
public void setCustomerInfo(String lastName);
```

### Add parameters to `setCustomerInfo()`

Now that we've limited our scope to the correct method and removed the `abstract` modifier from it, let's update the method parameters for the `setCustomerInfo()` method.

As mentioned in our [best practice guide](/authoring-recipes/recipe-conventions-and-best-practices.md#avoid-constructing-lst-elements-by-hand), you should avoid constructing LST elements by hand. Instead, you should use the `JavaTemplate` class to construct any objects you need.

Worth noting is that these templates will completely replace the existing data unless we specify otherwise. While we technically could write a template that specifies three new parameters, let's write one that utilizes the existing `lastName` parameter so you can see what that looks like. To do that, we will use an interpolation marker (`#{}`). When we are visiting the method later, we can replace it with the existing argument.

```java
private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
    // ...

    // Template used to insert two additional parameters into the "setCustomerInfo()" method declaration
    private final JavaTemplate addMethodParametersTemplate = JavaTemplate.builder(this::getCursor, "Date dateOfBirth, String firstName, #{}")
            .imports("java.util.Date")
            .build();

    // ...
}
```

{% hint style="info" %}
Note: When building a template, if you use a type that's not a base Java type, you will need to specify what package that type comes from. In our case, since we're adding a `Date` to the `MethodDeclaration`, we need to specify that this is a `java.util.Date` and not some other type of date. You can do that by adding an `imports` function with the packages for the types used in the template.
{% endhint %}

With that template defined, we can now use it to replace the existing parameters via the `withTemplate()` function. This function takes in a `JavaTemplate`, some coordinates (where our template should be applied), and then 0 or more optional parameters (which will replace the interpolation marker we specified earlier):

```java
private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
    // ...

    // Template used to insert two additional parameters into the "setCustomerInfo()" method declaration
    private final JavaTemplate addMethodParametersTemplate = JavaTemplate.builder(this::getCursor, "Date dateOfBirth, String firstName, #{}")
            .imports("java.util.Date")
            .build();

    @Override
    public MethodDeclaration visitMethodDeclaration(MethodDeclaration methodDeclaration, ExecutionContext executionContext) {
        // ...

        // Add two parameters to the method declaration by inserting them in from of the first argument
        methodDeclaration = methodDeclaration.withTemplate(addMethodParametersTemplate,
                methodDeclaration.getCoordinates().replaceParameters(),
                methodDeclaration.getParameters().get(0));

        return methodDeclaration;
    }
}
```

If you run the tests now, you should see that the new method has no `abstract` modifier and that the new method has the correct parameters in the expected order:

```java
public void setCustomerInfo(Date dateOfBirth, String firstName, String lastName);
```

### Build the template for the `setCustomerInfo()` method body

The next thing we need to do with our recipe is add a body to our `setCustomerInfo()` method. As before, we will use a `JavaTemplate` to add build up the method body.

For this recipe, we want to add a `MethodBody` to our `setCustomerInfo()` method. However, if we started trying to add statements to it, we'd get a `NullPointerException` as the `MethodBody` has not been instantiated.

Let's define a `JavaTemplate` that we can use to create the empty method body and then use it to replace the null body that currently exists in our method:

```java
private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
    // ...

    // Template used to add a method body to the "setCustomerInfo()" method declaration
    private final JavaTemplate addMethodBodyTemplate = JavaTemplate.builder(this::getCursor, "").build();

    @Override
    public MethodDeclaration visitMethodDeclaration(MethodDeclaration methodDeclaration, ExecutionContext executionContext) {
        // ...

        // Add a method body
        methodDeclaration = methodDeclaration.withTemplate(addMethodBodyTemplate, methodDeclaration.getCoordinates().replaceBody());

        return methodDeclaration;
    }
}
```

If you run the tests now, you will see something a bit strange. Our `setCustomerInfo` method does indeed have a method body, but the curly braces aren't formatted correctly. Instead of having a space between the last parenthesis and the first curly brace, everything is smushed together:

```java
public void setCustomerInfo(Date dateOfBirth, String firstName, String lastName){
}
```

#### Fixing formatting

When making changes in a recipe, OpenRewrite tries to keep the existing styles as much as possible. However, there are times when that styling either doesn't exist (such as in our case) or when the style doesn't match what you want.

To address this, you can use the [maybeAutoFormat function](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-java/src/main/java/org/openrewrite/java/JavaVisitor.java#L66-L79). This function takes in a before and after state as well as the execution context. The before state is the current `methodDeclaration` and the after state is what we already defined above with the template.

Using that function, we can change our visitor to fix the formatting of the body: 

```java
private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
    // ...

    // Template used to add a method body to "setCustomerInfo()" method declaration.
    private final JavaTemplate addMethodBodyTemplate = JavaTemplate.builder(this::getCursor, "").build();

    @Override
    public MethodDeclaration visitMethodDeclaration(MethodDeclaration methodDeclaration, ExecutionContext executionContext) {
        // ...

        // Add a method body and format it
        methodDeclaration = maybeAutoFormat(
                methodDeclaration,
                methodDeclaration.withTemplate(addMethodBodyTemplate, methodDeclaration.getCoordinates().replaceBody()),
                executionContext
        );

        return methodDeclaration;
    }
}
```

If you run the tests now, you should correctly see the space after the function name:

```java
public void setCustomerInfo(Date dateOfBirth, String firstName, String lastName) {
}
```

### Add additional statements to `setCustomerInfo()`

All that's left to do now is add the assignment statements to the method body. As before, we'll make a `JavaTemplate` that creates these statements:

```java
private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
    // ...

    // Template used to add statements to the method body of the "setCustomerInfo()" method
    private final JavaTemplate addStatementsTemplate = JavaTemplate.builder(this::getCursor,
            "this.dateOfBirth = dateOfBirth;\n" +
                    "this.firstName = firstName;\n" +
                    "this.lastName = lastName;\n")
            .build();

    // ...
}
```

We can then use this `JavaTemplate` in our visitor to add statements to the `setCustomerInfo()` method body:

```java
public MethodDeclaration visitMethodDeclaration(MethodDeclaration methodDeclaration, ExecutionContext executionContext) {
    // ...

    // Safe to assert since we just added a body to the method
    assert methodDeclaration.getBody() != null;

    // Add the assignment statements to the "setCustomerInfo()" method body
    methodDeclaration = methodDeclaration.withTemplate(addStatementsTemplate, methodDeclaration.getBody().getCoordinates().lastStatement());

    return methodDeclaration;
}
```

If you run the tests now they should all pass. Success!

### Final recipe code

Below you can find the entire recipe:

```java
package com.yourorg;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.tree.J.MethodDeclaration;
import org.openrewrite.java.tree.J.Modifier.Type;

import java.util.stream.Collectors;

public class ExpandCustomerInfo extends Recipe {

    @Override
    public String getDisplayName() {
        return "Expand Customer Info";
    }

    @Override
    public String getDescription() {
        return "Expand the `CustomerInfo` class with new fields.";
    }

    // OpenRewrite provides a managed environment in which it discovers, instantiates, and wires configuration into Recipes.
    // This recipe has no configuration and delegates to its visitor when it is run.
    @Override
    protected JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new ExpandCustomerInfoVisitor();
    }

    private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
        // Used to identify the method declaration that will be refactored
        private final MethodMatcher methodMatcher = new MethodMatcher("com.yourorg.Customer setCustomerInfo(String)");

        // Template used to insert two additional parameters into the "setCustomerInfo()" method declaration
        private final JavaTemplate addMethodParametersTemplate = JavaTemplate.builder(this::getCursor, "Date dateOfBirth, String firstName, #{}")
                .imports("java.util.Date")
                .build();

        // Template used to add a method body to the "setCustomerInfo()" method declaration
        private final JavaTemplate addMethodBodyTemplate = JavaTemplate.builder(this::getCursor, " ").build();

        // Template used to add statements to the method body of the "setCustomerInfo()" method
        private final JavaTemplate addStatementsTemplate = JavaTemplate.builder(this::getCursor,
                        "this.dateOfBirth = dateOfBirth;\n" +
                                "this.firstName = firstName;\n" +
                                "this.lastName = lastName;\n")
                .build();

        @Override
        public MethodDeclaration visitMethodDeclaration(MethodDeclaration methodDeclaration, ExecutionContext executionContext) {
            if (!methodMatcher.matches(methodDeclaration.getMethodType())) {
                return methodDeclaration;
            }

            // Remove the abstract modifier from the method
            methodDeclaration = methodDeclaration.withModifiers(methodDeclaration.getModifiers().stream()
                    .filter(modifier -> modifier.getType() != Type.Abstract)
                    .collect(Collectors.toList()));

            // Add two parameters to the method declaration by inserting them in from of the first argument
            methodDeclaration = methodDeclaration.withTemplate(addMethodParametersTemplate,
                    methodDeclaration.getCoordinates().replaceParameters(),
                    methodDeclaration.getParameters().get(0));

            // Add a method body and format it
            methodDeclaration = maybeAutoFormat(
                    methodDeclaration,
                    methodDeclaration.withTemplate(addMethodBodyTemplate, methodDeclaration.getCoordinates().replaceBody()),
                    executionContext
            );

            // Safe to assert since we just added a body to the method
            assert methodDeclaration.getBody() != null;

            // Add the assignment statements to the "setCustomerInfo()" method body
            methodDeclaration = methodDeclaration.withTemplate(addStatementsTemplate, methodDeclaration.getBody().getCoordinates().lastStatement());

            return methodDeclaration;
        }
    }
}
```
