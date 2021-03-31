# Modifying Methods with JavaTemplate

This tutorial will demonstrate how the JavaTemplate can be used to manipulate and change a method declaration using rewrite's refactoring capabilities. You will build a recipe that modifies the `setCustomerInfo()` method in the following class:

```java
package com.yourorg;

public abstract class Customer {
    private Date dateOfBirth;
    private String firstName;
    private String lastName;

    public abtract void setCustomerInfo(String lastName);
}
```

The recipe and associated visitor will:

* Define a method body and remove the abstract modifier
* Add two additional parameters to the method declaration
* Add two additional statements to the method declaration's body

The resulting refactored class will look like this:

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

This guide assumes you've already set up your [Recipe Development Environment](../getting-started/recipe-development-environment.md).

## Project Setup

This example requires the following dependencies:

* Compile-scope dependency on **rewrite-java**
* Runtime-scope dependency on **rewrite-java-8**
* Runtime-scope dependency on **rewrite-java-11**
* Test-scope dependency on **rewrite-test**

{% tabs %}
{% tab title="Gradle" %}
```groovy
dependencies {
    implementation("org.openrewrite:rewrite-java:7.1.0")

    runtimeOnly("org.openrewrite:rewrite-java-11:7.1.0")
    runtimeOnly("org.openrewrite:rewrite-java-8:7.1.0")

    testImplementation("org.openrewrite:rewrite-test:7.1.0")
}
```
{% endtab %}

{% tab title="Maven" %}
```markup
<dependencies>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java</artifactId>
        <version>7.1.0</version>
        <scope>compile</scope>
    </dependency>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java-8</artifactId>
        <version>7.1.0</version>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java-11</artifactId>
        <version>7.1.0</version>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-test</artifactId>
        <version>7.1.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```
{% endtab %}
{% endtabs %}

## Define a Recipe & Visitor

Create a new class that extends `org.openrewrite.Recipe`. This recipe will act as a wrapper around a visitor we will build to target the method `com.yourorg.Customer.setCustomerInfo()`and this recipe does not require any additional configuration properties. The visitor is defined as an inner class to the recipe because it is not intended to be used outside the context of the recipe.

```java
package org.openrewrite.samples;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.tree.J;
import org.openrewrite.java.tree.J.MethodDeclaration;

public class ExpandCustomerInfo extends Recipe {
    //Rewrite provides a managed environment in which it discovers, instantiates, and wires configuration into Recipes.
    //This recipe has no configuration and delegates to its visitor when it is run.
    @Override
    protected JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new ExpandCustomerInfoVisitor();
    }

    private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {

        //This visitor uses a method matcher, and it's point-cut syntax, to target the method declaration that will be refactored
        private MethodMatcher methodMatcher = new MethodMatcher("com.yourorg.Customer setCustomerInfo(String)");

        @Override
        public MethodDeclaration visitMethodDeclaration(MethodDeclaration method, P p) {
            J.MethodDeclaration m = super.visitMethodDeclaration(method, p);
            if (!methodMatcher.matches(method.getType())) {
                return m;
            }
            //TODO - Implement Refactoring operations on the matching "setCustomerInfo()" method declaration.

            return m;
        }
    }
}
```

## Add a Method Body to `setCustomerInfo()`

Within the `ExpandCustomerInfoVisitor`, we will add logic to remove the abstract modifier from the method and use the JavaTemplate to add a method body to declaration. This is accomplished by defining a JavaTemplate that represents the method body as an instance variable within the ExpandCustomerInfoVisitor:

```java
    private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
        ...
        //Template used to add a method body to "setCustomerInfo()" method declaration.
         private JavaTemplate addMethodBodyTemplate = template("{this.lastName = lastName;}").build();
         ...
    }
```

{% hint style="info" %}
When using a template to replace a method's body, the template must include the open and closing curly braces.
{% endhint %}

The method is then replaced with a copy that remove the abstract modifier and the template is then used within the visitMethodDeclaration\(\) method to replace the method body:

```java
public MethodDeclaration visitMethodDeclaration(MethodDeclaration method, P p) {
    ...
    //Remove the abstract modifier from the method.
    m = m.withModifiers(m.getModifiers().stream().filter(mod -> mod.getType() != Type.Abstract).collect(Collectors.toList()));
    //Add a method body use the JavaTemplate by using the "replaceBody" coordinates.
    m = m.withTemplate(addMethodBodyTemplate, m.getCoordinates().replaceBody());

    return m;
}
```

## Add Parameters to `setCustomerInfo()`

Next we will use the JavaTemplate to add two additional parameters to the method declaration. Again, a template is used to define the snippet of code for the two additional arguments:

```java
private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
    ...
    //Template used to insert two additional parameters into the "setCustomerInfo()" method declaration.
    private JavaTemplate addMethodParametersTemplate = template("Date dateOfBirth, String firstName,")
            .imports("java.util.Date")
            .build();
    ...
}
```

{% hint style="info" %}
NOTE: Because a new type, `java.util.Date`, is being introduced to the template, the type must be added when building the template. This ensures that any generated elements will have correct type attribution.
{% endhint %}

The template is is used to replace the method declaration using `withTemplate()`. Our code must also ensure that `java.util.Date` is added as an import to the compilation unit.

```java
public MethodDeclaration visitMethodDeclaration(MethodDeclaration method, P p) {
    ...
    //Add two parameters to the method declaration by inserting them in front of the first argument.
    m = m.withTemplate(addMethodParametersTemplate, m.getParameters().get(0).getCoordinates().before());

    //Need to make sure that the Date type is added to this compilation unit's list of imports.
    maybeAddImport("java.util.Date");

    return m;
}
```

## Add Additional Statements to `setCustomerInfo()`

A third template will be used to add two additional statements \(as the last two statements in the method body\):

```java
    private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
        ...
         //Template used to add statements to the method body
         private JavaTemplate addStatementsTemplate = template("this.dateOfBirth=dateOfBirth;\nthis.firstName = firstName;")
                 .imports("java.util.Date")
                 .build();
         ...
    }
```

And this template is used to insert those statements into the method declaration's body:

```java
public MethodDeclaration visitMethodDeclaration(MethodDeclaration method, P p) {
    ...
    ////Add two additional statements to method's body by inserting them in front of the first statement
    m = m.withTemplate(addStatementsTemplate, m.getBody().getStatements().get(0).getCoordinates().before());

    return m;
}
```

## Testing The Recipe

After following the steps above, the final recipe will look like the following:

```java
 package org.openrewrite.samples;

import java.util.stream.Collectors;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.tree.J;
import org.openrewrite.java.tree.J.MethodDeclaration;
import org.openrewrite.java.tree.J.Modifier.Type;

public class ExpandCustomerInfo extends Recipe {
    //Rewrite provides a managed environment in which it discovers, instantiates, and wires configuration into Recipes.
    //This recipe has no configuration and when it is executed, it will delegate to its visitor.
    @Override
    protected TreeVisitor<?, ExecutionContext> getVisitor() {
        return new ExpandCustomerInfoVisitor();
    }

    private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {

        //This visitor uses a method matcher, and it's point-cut syntax, to target the method declaration that will be refactored
        private MethodMatcher methodMatcher = new MethodMatcher("com.yourorg.Customer setCustomerInfo(String)");

        //Template used to add a method body to "setCustomerInfo()" method declaration.
        private JavaTemplate addMethodBodyTemplate = template("{this.lastName = lastName;}")
                .build();

        //Template used to insert two additional parameters into the "setCustomerInfo()" method declaration.
        private JavaTemplate addMethodParametersTemplate = template("Date dateOfBirth, String firstName,")
                .imports("java.util.Date")
                .build();

        //Template used to add two initializing statements to the method body
        private JavaTemplate addStatementsTemplate = template("this.dateOfBirth=dateOfBirth;\nthis.firstName = firstName;")
                .imports("java.util.Date")
                .build();

        @Override
        public MethodDeclaration visitMethodDeclaration(MethodDeclaration method, ExecutionContext c) {
            J.MethodDeclaration m = super.visitMethodDeclaration(method, c);
            if (!methodMatcher.matches(method.getType())) {
                return m;
            }
            //Remove the abstract modifier from the method.
            m = m.withModifiers(m.getModifiers().stream().filter(mod -> mod.getType() != Type.Abstract).collect(Collectors.toList()));
            //Add a method body use the JavaTemplate by using the "replaceBody" coordinates.
            m = m.withTemplate(addMethodBodyTemplate, m.getCoordinates().replaceBody());
            //Add two parameters to the method declaration by inserting them in from of the first argument.
            m = m.withTemplate(addMethodParametersTemplate, m.getParameters().get(0).getCoordinates().before());
            //Add two additional statements to method's body by inserting them in front of the first statement
            m = m.withTemplate(addStatementsTemplate, m.getBody().getStatements().get(0).getCoordinates().before());

            //Need to make sure that the Date type is added to this compilation unit's list of imports.
            maybeAddImport("java.util.Date");
            return m;
        }
    }
}
```

Rewrite provides testing infrastructure for recipes via the rewrite-test module. To create automated tests of this recipe we use the [Kotlin](https://kotlinlang.org/) language, mostly for convenient access to multi-line Strings, with [JUnit 5](https://junit.org/junit5/docs/current/user-guide/). To assert that the recipe makes the expected changes to our test class, we will create a new test class that implements the RecipeTest interface and leverage`RecipeTest.assertChanged` ensure the recipe is making the expected changes to the test class.

```kotlin
package org.openrewrite.samples;

import org.openrewrite.RecipeTest
import org.openrewrite.java.JavaParser
import org.junit.jupiter.api.Test

public class ExpandCustomerInfoTest : RecipeTest {

    override val parser = JavaParser.fromJavaVersion()
        .build()
    override val recipe = ExpandCustomerInfo()

    @Test
    fun testExapandCustomerInfo() = assertChanged(
        before = """
            package com.yourorg;

            public abstract class Customer {
                private Date dateOfBirth;
                private String firstName;
                private String lastName;

                public abstract void setCustomerInfo(String lastName);
            }
        """,
        after = """
            package com.yourorg;

            import java.util.Date;

            public abstract class Customer {
                private String lastName;
                private String firstName;
                private Date dateOfBirth;

                public void setCustomerInfo(Date dateOfBirth, String firstName, String lastName) {
                    this.dateOfBirth = dateOfBirth;
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
            }
        """
    )
}
```

