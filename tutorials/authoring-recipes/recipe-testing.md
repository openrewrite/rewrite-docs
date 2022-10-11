# Recipe Testing

OpenRewrite provides infrastructure that allows developers to quickly build tests to exercise their recipe and then assert that the recipe has made the correct changes. To leverage Rewrite's testing facilities, you can add the following dependencies to your project's build file:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<project>
    <properties>
        <junit.version>5.8.2</junit.version>
        <kotlin.version>1.5.31</kotlin.version>
        <assertj.version>3.23.1</assertj.version>
    </properties>
    ...
    <dependencyManagement>
      <dependencies>
          <dependency>
              <groupId>org.openrewrite.recipe</groupId>
              <artifactId>rewrite-recipe-bom</artifactId>
              <version>1.10.0</version>
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
        <!-- Optional dependencies and only needed if writing tests in Kotlin. -->
        <dependency>
            <groupId>org.jetbrains.kotlin</groupId>
            <artifactId>kotlin-reflect</artifactId>
            <version>${kotlin.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.jetbrains.kotlin</groupId>
            <artifactId>kotlin-stdlib-jdk8</artifactId>
            <version>${kotlin.version}</version>
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

{% tab title="Gradle" %}
```groovy
plugins {
    `java-library`

    id("org.jetbrains.kotlin.jvm") version "1.5.21"
}

val rewriteBomVersion = "1.4.0"
...
dependencies {
    implementation(platform("org.openrewrite.recipe:rewrite-recipe-bom:${rewriteBomVersion}"))

    testImplementation("org.openrewrite:rewrite-test")
    testImplementation("org.junit.jupiter:junit-jupiter-api:latest.release")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:latest.release")

    // Optional dependencies and only needed if writing tests in Kotlin.
    testImplementation("org.jetbrains.kotlin:kotlin-reflect")
    testImplementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    // Optional dependency on assertJ to provide fluent assertions.
    testImplementation("org.assertj:assertj-core:latest.release")
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
The tests in this guide are written in Kotlin to take advantage of multi-line strings. This is completely optional but makes it easier to express source code (as strings) when providing the before/after state that is processed by a recipe.
{% endhint %}

### `RewriteTest` Interface

OpenRewrite provides a convenient interface that acts as both an entry point in which to exercise recipes in tests and also provides a fluent API for expressing recipe and source file configuration. For the sake of this guide, let's assume we have the following recipe that ensures a class's package declaration is all lowercase:

```java
package org.openrewrite.java.cleanup;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
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
    protected JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.Package visitPackage(J.Package pkg, ExecutionContext executionContext) {
                String packageText = pkg.getExpression().print(getCursor()).replaceAll("\\s", "");
                String lowerCase = packageText.toLowerCase();
                if(!packageText.equals(lowerCase)) {
                    doNext(new ChangePackage(packageText, lowerCase, true));
                }
                return pkg;
            }
        };
    }
}
```

In order to test this recipe, at a minimum the testing class will implement `RewriteTest` , define recipe/parser configuration via `RecipeSpec`, and define one or more source file assertions using the fluent API provided by the interface. As an example, the following test class overrides the `defaults(`RecipeSpec`)`method to define which recipe will be used by all tests defined in the class. Each of the three tests demonstrates how the fluent API is used to create source files and then assert the recipe has made the correct transformations to those files.

```kotlin
package org.openrewrite.java.cleanup

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.openrewrite.PathUtils
import org.openrewrite.java.JavaParser
import org.openrewrite.test.RecipeSpec
import org.openrewrite.test.RewriteTest
import java.nio.file.Paths

interface LowercasePackageTest : RewriteTest {

    // Note, you can define defaults for the RecipeSpec and these defaults will be
    // used for all tests.
    override fun defaults(spec: RecipeSpec) {
        spec
            .recipe(LowercasePackage()) // Which recipe each test should run
    }

    // A java source file that already has a lowercase package name should be left
    // unchanged.
    @Test
    fun packageIsAlreadyLowercase() = rewriteRun(
        java("""
            package com.lowercase;
            class A {}
        """),
    )

    // Assert that a java source file with uppercase letters in its package name
    // is correctly transformed by the recipe.
    @Test
    fun lowerCasePackage() = rewriteRun(
        // Each test can customize the RecipeSpec prior to execution of the test.
        // In this case, the recipe has already been defined in defaults(), and
        // this test will use a parser that logs warnings and errors
        { spec -> spec
            .parser(JavaParser.fromJavaVersion()
                .logCompilationWarningsAndErrors(false)
                .build())
        },
        java(
            // The Java source file before transformation:
            """
                package com.UPPERCASE.CamelCase;
                class A {}
            """,
            // The expected Java source file after transformation.
            """
                package com.uppercase.camelcase;
                class A {}
            """)
            // An optional callback that can be used after the recipe has been
            // executed to assert additional conditions on the resulting source file.
            { spec ->
                spec.afterRecipe { cu ->
                    assertThat(PathUtils.equalIgnoringSeparators(cu.sourcePath, Paths.get("com/uppercase/camelcase/A.java"))).isTrue
            }
        }
    )
    
    // This test defines both source files and asserts that each file is correctly
    // handled by the recipe.
    @Test
    fun combinedExample() = rewriteRun(
        // Assert the first source file is not modified.
        java("""
            package com.lowercase;
            class A {}
        """),
        //Assert the second source file is modified.
        java(
            """
                package com.UPPERCASE.CamelCase;
                class A {}
            """,
            """
                package com.uppercase.camelcase;
                class A {}
            """)
        }
    )
}
```

#### `RecipeSpec`

The `RecipeSpec` class drives which recipe will be executed for a given test and allows a developer to customize aspects of the environment in which the recipe runs. The [`RecipeSpec`](https://github.com/openrewrite/rewrite/blob/main/rewrite-test/src/main/java/org/openrewrite/test/RecipeSpec.java) can be used to customize the parser(s) that will be used to compile source files, manipulate the \`ExecutionContext\`, and provides convinient callbacks that can be used to execute code before/after the test.

The `RewriteTest.defaults()` method can be used to define common RecipeSpec customizations that should be applied for all tests in the testing class. Additionally, there are overloaded versions of `RewriteTest.runRecipe` that allow the `RecipeSpec` to be further customized for that specific test.

#### SourceSpecs

A `SourceSpec` is used to define a source file that will be parsed during a test and then processed within the environment defined by the `RecipeSpec`. At a bare minimum a `SourceSpec` will define the type of source file and its initial ("before") contents. The testing infrastructure will select the appropriate parser based on the source file type and parser the contents into a `SourceFile`. \`\`

In a majority of cases, a SourceSpec will also define an "after" state which defines what the source file contents will look like after it has been processed by the given recipe environment. The testing framework will automatically fail a given test if the source file has not been transformed into its "after" state. Any SourceSpec that does not define an "after" state is implicitly saying "the recipe should not make any changes to this source file.

A developer can assert additional conditions on a source file by using the `afterRecipe` callback that is defined on the `SourceSpec`. This can be convenient when asserting conditions on the resulting semantic model that are not represented in the rendering of the source code after the recipe has transformed the source file.

The `RewriteTest` interface provides fluent entry points to create the various types of source specs.

### Advanced Recipe Testing

#### Customizing Source File Paths and Markers

Occasionally, it is desirable to modify a specific source file prior to being processed through the Recipe testing environment. This type of customization can be achieved by using the callback method provided as an optional parameter on the fluent API. As an example, let us assume a recipe has been built to manipulate properties within an "application.properties" source file but only when its path is "main/resources/application.properties". To correctly define the path for the source file, a developer can leverage the callback:

```kotlin
fun propertiesChangeTest() = rewriteRun(
    properties(
        // Before
        """
            server.port=8080
        """,
        // After
        """
            server.port=80
        """
    ) {p -> p.path(Paths.get("main/resources/application.properties")
) 
```
