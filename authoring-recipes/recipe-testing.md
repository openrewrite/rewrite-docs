# Recipe testing

When developing new recipes, it's very important to test them to ensure that they not only make the expected changes but that they also **don't** make unnecessary changes.

To help you create tests that meet those standards, this guide will:

* [Show you what dependencies you need to add to your project to utilize the OpenRewrite testing framework](recipe-testing.md#adding-dependencies)
* [Provide a simple example recipe to discuss writing tests for](recipe-testing.md#sample-recipe)
* [Present you with some examples of good tests for said recipe](recipe-testing.md#writing-tests)
* [Explain the key classes that make up the tests](recipe-testing.md#rewritetest-interface)
* [Give some additional advanced testing tips](recipe-testing.md#advanced-recipe-testing)

{% embed url="https://www.youtube.com/watch?v=JAC9UIE80fs" %}

{% embed url="https://www.youtube.com/watch?v=O9o4y_2TO0w" %}

## Prerequisites

This guide assumes that:

* You've already set up your [recipe development environment](recipe-development-environment.md)
* You're familiar with [creating Java refactoring recipes](writing-a-java-refactoring-recipe.md)

## Adding dependencies

Before you can go about writing tests, you'll want to add some dependencies to your project's build file so that you have all of the tools needed to create said tests:

{% tabs %}
{% tab title="Gradle" %}
```groovy
plugins {
    id("java-library")
}

// ...
dependencies {
    implementation(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest-release"))

    testImplementation("org.openrewrite:rewrite-test")
    testImplementation("org.junit.jupiter:junit-jupiter-api:latest.release")

    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:latest.release")

    // Optional dependency to make SLF4J logging work.
    // Any SLF4J implementation can work here.
    // Also requires a logback.xml file like:
    // https://gist.github.com/mike-solomon/dabcb2cbd9bca33e4ffeee8fc1c09454
    testRuntimeOnly("ch.qos.logback:logback-classic:1.2.+")

    // Optional dependency on assertJ to provide fluent assertions.
    testImplementation("org.assertj:assertj-core:latest.release")
}
```
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<project>
    <properties>
        <junit.version>5.8.2</junit.version>
        <assertj.version>3.23.1</assertj.version>
    </properties>
    ...
    <dependencyManagement>
      <dependencies>
          <dependency>
              <groupId>org.openrewrite.recipe</groupId>
              <artifactId>rewrite-recipe-bom</artifactId>
              <version>2.19.0</version>
              <type>pom</type>
              <scope>import</scope>
          </dependency>
      </dependencies>
    </dependencyManagement>
    ...
    <dependencies>
        <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>${junit.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <version>${junit.version}</version>
            <scope>test</scope>
        </dependency>
        <!-- Optional dependency on assertJ to provide fluent assertions. -->
        <dependency>
            <groupId>org.assertj</groupId>
            <artifactId>assertj-core</artifactId>
            <version>${assertj.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>    
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="info" %}
While recipes should generally be compiled with Java 8 as the target for compatibility, tests can be compiled to target newer versions of the Java Runtime.

We recommend either using Java 17 or Kotlin so that you get access to multi-line strings in your tests.

This tutorial uses Java for tests, but which language you use is a matter of preference.
{% endhint %}

## Sample recipe

With the dependencies set up, we now need a recipe that we can write tests for. For the sake of an example, let's assume we have the following recipe that ensures a class's package declaration is all lowercase:

```java
package com.yourorg;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.internal.lang.Nullable;
import org.openrewrite.java.ChangePackage;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.tree.J;

import java.time.Duration;
import java.util.Collections;
import java.util.Set;

public class LowercasePackage extends Recipe {
    @Override
    public String getDisplayName() {
        return "Rename packages to lowercase";
    }

    @Override
    public String getDescription() {
        return "By convention, all Java package names should contain only lowercase letters, numbers, and dashes. " +
                "This recipe converts any uppercase letters in package names to be lowercase.";
    }

    @Override
    public Set<String> getTags() {
        return Collections.singleton("RSPEC-120");
    }

    @Override
    public @Nullable Duration getEstimatedEffortPerOccurrence() {
        return Duration.ofMinutes(5);
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.Package visitPackage(J.Package pkg, ExecutionContext executionContext) {
                // Grab the package name without spaces
                String packageText = pkg.getExpression().print(getCursor()).replaceAll("\\s", "");
                String lowerCase = packageText.toLowerCase();

                if(!packageText.equals(lowerCase)) {
                    doAfterVisit(new ChangePackage(packageText, lowerCase, true).getVisitor());
                }

                return pkg;
            }
        };
    }
}
```

## Writing tests

Now that we have a recipe to test with, let's go over what every test class should have. At the very least, your tests should:

* Implement the [RewriteTest interface](recipe-testing.md#rewritetest-interface)
* Specify the recipe to test via a [RecipeSpec](recipe-testing.md#recipespec)
* Define one or more source file assertions using the [Fluent API](https://java-design-patterns.com/patterns/fluentinterface/) provided by the interface

First, we'll provide an example of what these tests might look like. After that, we'll provide more context around a few key pieces.

### Example tests

```java
package com.yourorg;

import org.junit.jupiter.api.Test;
import org.openrewrite.PathUtils;
import org.openrewrite.java.JavaParser;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import java.nio.file.Paths;

import static org.openrewrite.java.Assertions.java;
import static org.assertj.core.api.Assertions.assertThat;

class LowercasePackageTest implements RewriteTest {

    // Note, you can define defaults for the RecipeSpec and these defaults will be
    // used for all tests.
    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new LowercasePackage());
    }

    // A Java source file that already has a lowercase package name should be left
    // unchanged.
    @Test
    void packageIsAlreadyLowercase() {
        rewriteRun(
            java(
                """
                    package com.yourorg;

                    class A {}
                """
            )
        );
    }

    // Assert that a Java source file with uppercase letters in its package name
    // is correctly transformed by the recipe.
    @Test
    void lowerCasePackage() {
        // Each test can customize the RecipeSpec before the test is executed.
        // In this case, the recipe has already been defined in defaults(). We
        // can extend that and add a parser that logs warnings and errors for
        // just this test.
        rewriteRun(
            // You'll need to have an SLF4J logger configured to see
            // these warnings and errors.
            spec -> spec
                    .parser(JavaParser.fromJavaVersion()
                            .logCompilationWarningsAndErrors(true)),
            java(
                // The Java source file before the recipe is run:
                """
                    package com.UPPERCASE.CamelCase;
                    class FooBar {}
                """,
                // The expected Java source file after the recipe is run:
                """
                    package com.uppercase.camelcase;
                    class FooBar {}
                """,
                // An optional callback that can be used after the recipe has been
                // executed to assert additional conditions on the resulting source file:
                spec -> spec.afterRecipe(cu -> assertThat(PathUtils.equalIgnoringSeparators(cu.getSourcePath(), Paths.get("com/uppercase/camelcase/FooBar.java"))).isTrue()))
        );
    }

    // Demonstrates how you can do multiple checks in one test.
    //
    // You can also combine different types (such as `java` and `text`) in one test:
    // https://github.com/openrewrite/rewrite-spring/blob/main/src/testWithSpringBoot_2_7/java/org/openrewrite/java/spring/boot2/MoveAutoConfigurationToImportsFileTest.java#L177-L224
    @Test
    void combinedExample() {
        rewriteRun(
            // Assert the first source file is not modified.
            java(
                """
                    package com.lowercase;
                    class A {}
                """
            ),
            // Assert the second source file is modified.
            java(
                """
                    package com.UPPERCASE.CamelCase;
                    class FooBar {}
                """,
                """
                    package com.uppercase.camelcase;
                    class FooBar {}
                """
            )
        );
    }
}
```

### RewriteTest interface

As mentioned above, the first thing all tests need to do is implement the [RewriteTest interface](https://github.com/openrewrite/rewrite/blob/main/rewrite-test/src/main/java/org/openrewrite/test/RewriteTest.java). This interface not only acts as the entry point to testing your recipe, but it also provides a [Fluent API](https://java-design-patterns.com/patterns/fluentinterface/) for expressing recipe and source file configuration.

In the above tests, we utilize two main pieces of this interface:

* The `defaults` method to set up the environment needed for each test (via [RecipeSpecs](recipe-testing.md#recipespec))
* The `rewriteRun` method to assert that the recipe has made the correct transformations on the code (via [SourceSpecs](recipe-testing.md#sourcespecs))

### RecipeSpec

Before you begin writing the core logic for your tests, you'll need to set up your environment. You can do this by utilizing the [RecipeSpec class](https://github.com/openrewrite/rewrite/blob/main/rewrite-test/src/main/java/org/openrewrite/test/RecipeSpec.java). This class serves a few main purposes:

* It allows you to specify which recipe will be executed for any given test
* It allows you to customize the environment in which the recipe runs (such as what parser(s) to use and whether or not you should log Java compilation errors)
* It provides convenient callbacks that can be used to execute code before or after any given test

The `RewriteTest.defaults()` method can be used to define common `RecipeSpec` customizations that should be applied to all of the tests in the testing class. Additionally, there are overloaded versions of the `RewriteTest.runRecipe()` method that allow the `RecipeSpec` to be further customized for a specific test. For instance, you may want different tests to have [different Spring properties](https://github.com/openrewrite/rewrite-spring/blob/main/src/test/java/org/openrewrite/java/spring/AddSpringPropertyTest.java) or [different Java versions](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/test/java/org/openrewrite/java/migrate/jakarta/JavaxToJakartaTest.java).

### SourceSpec

Once you've set up your environment, the next step is to write the tests themselves. The core component of each test is the [SourceSpec class](https://github.com/openrewrite/rewrite/blob/main/rewrite-test/src/main/java/org/openrewrite/test/SourceSpec.java).

At a minimum, a `SourceSpec` will define the type of source file (such as `java` or `text`) and its initial "before" contents. If a test is defined with only these pieces, then the testing infrastructure will pass a test if the specified code has not changed at all after the given recipe has run.

In a majority of cases, though, a `SourceSpec` will also define an "after" state which defines what the source file contents will look like after it has been processed by the given recipe. In this case, the testing framework will pass the test if the source file has been transformed into the "after" state.

A developer can assert additional conditions on a source file by using the `afterRecipe` callback that is defined on the `SourceSpec`. This can be convenient when asserting conditions on the resulting semantic model that are not represented in the rendering of the source code after the recipe has transformed the source file. For instance, you may want to confirm that the path to a file has changed such as in the [sample tests](recipe-testing.md#example-tests) above. This file path is not visible in the "after" code and can only be tested via this callback.

## Advanced recipe testing

### Customizing source file paths and markers

Occasionally, it is desirable to modify a specific source file before it is processed by the recipe testing environment. This type of customization can be achieved by using the callback method provided as an optional parameter on the Fluent API.

As an example, let us assume a recipe has been built to manipulate properties within an `application.properties` source file, but only when its path is `main/resources/application.properties`. To correctly define the path for the source file, a developer can leverage the callback:

```java
@Test
void propertiesChangeTest() {
    rewriteRun(
        properties(
            // Before
            """
                server.port=8080
                """,
            // After
            """
                server.port=80
            """,
            s -> s.path("src/main/resources/application.properties")
        )
    );
}
```

{% hint style="info" %}
You'll need to add `org.openrewrite:rewrite-properties` as a test dependency for `properties` to be available in your tests.
{% endhint %}

### Specifying Java versions

When writing recipes that change the version of Java (such as a migration from 11 to 17), you may want to have tests that run on a different version of Java. To do this, you can use the `RecipeSpec.allSources()` method to configure a default Java version for the sources:

```java
@Override
public void defaults(RecipeSpec spec) {
    spec.recipe(new UseTextBlocks())
        .allSources(s -> s.markers(javaVersion(17)));
}
```

([Recipe example](https://github.com/openrewrite/rewrite-migrate-java/blob/v2.0.2/src/test/java/org/openrewrite/java/migrate/lang/UseTextBlocksTest.java#L41))

You can also specify the version on an individual test basis [like so](https://github.com/openrewrite/rewrite-migrate-java/blob/927b01de8e8fd8f1ab68bc934a860043e0eba441/src/test/java/org/openrewrite/java/migrate/util/RemoveFinalizerFromZipTest.java#L259-L270):

```java
@Test
void noChangeOnJava11() {
    //language=java
    rewriteRun(version(java("""
        import java.util.zip.ZipFile;

        class FooBar extends ZipFile {
            FooBar(){
                super("");
            }
            public void test() {
                finalize();
            }
        }
        """), 11));
}
```

### Specifying the classpath for dependencies

If your tests include code that is not part of the JDK itself, you will want to add a `classpath` or `classpathFromResources` to the test so that OpenRewrite can know where those dependencies are coming from.

For instance, if you want to test that your recipe removes a `junit-jupiter-api` method, you would need to let the parser know that there is a dependency on that library such as in [the RemoveUnneededAssertionTest](https://github.com/openrewrite/rewrite-static-analysis/blob/v1.0.4/src/test/java/org/openrewrite/staticanalysis/RemoveUnneededAssertionTest.java#L105).

If you want to test multiple versions of the same dependency, you'll want to use `classpathFromResources` instead which you can find documentation for in the [using multiple versions of a library guide](https://docs.openrewrite.org/authoring-recipes/multiple-versions).

## Next steps

Now that you're familiar with writing tests, consider reading over the [best practice guide for making recipes](recipe-conventions-and-best-practices.md). You could also check out [the guide that expands on JavaTemplates](modifying-methods-with-javatemplate.md) if you'd like to learn even more about creating recipes.
