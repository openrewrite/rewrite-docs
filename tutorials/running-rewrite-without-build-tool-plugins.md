---
description: For less common situations when one of the build tool plugins isn't possible.
---

# Running Rewrite without build tool plugins

It's simple to run Rewrite from a regular Java main method outside of the build tool plugins. The hardest part is determining the classpath that is relevant for each set of Java files. In the case of Maven and Gradle projects, locating each source set and the classpath that applies to them is non-trivial enough that it's much easier to use the build tool plugins instead.

This tutorial is useful primarily for projects that have a simpler structure then, e.g. a project with a simple source directory and a lib directory with all the JARs for its classpath already downloaded.

In this example, we are going to show running common static analysis issues cleanup over Java code, This recipe that exists in the `rewrite-java` package. For parsing other languages or running other recipes, the process is very similar just with other dependencies (e.g. `rewrite-yaml` for working with YAML).

At a minimum for this example, you need the following dependencies:

{% tabs %}
{% tab title="Maven" %}
```xml
<properties>
  <rewrite.version>7.17.0</rewrite.version>
</properties>
<dependencies>
  <dependency>
    <groupId>org.openrewrite</groupId>
    <artifactId>rewrite-java</artifactId>
    <version>${rewrite.version}</version>
  </dependency>
  <dependency>
    <groupId>org.openrewrite</groupId>
    <artifactId>rewrite-java-11</artifactId>
    <version>${rewrite.version}</version>
    <scope>runtime</scope>
  </dependency>
</dependencies>
```
{% endtab %}

{% tab title="Gradle" %}
```kotlin
dependencies {
    implementation("org.openrewrite:rewrite-java:latest.release")
    runtimeOnly("org.openrewrite:rewrite-java-11:latest.release")
}
```
{% endtab %}
{% endtabs %}

And here is a main method that is mostly complete. You just need to change the `projectDir` and `classpath` variables at the top to point to the root of your Java source files and determine your classpath.

```java
package org.openrewrite.java;

import org.openrewrite.InMemoryExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.Result;
import org.openrewrite.config.Environment;
import org.openrewrite.java.tree.J;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.Collections.emptyList;

public class RunRewriteManually {
    public static void main(String[] args) throws IOException {
        // determine your project directory and provide a list of
        // paths to jars that represent the project's classpath
        Path projectDir = Paths.get(".");
        List<Path> classpath = emptyList();


        // put any rewrite recipe jars on this main method's runtime classpath
        // and either construct the recipe directly or via an Environment
        Environment environment = Environment.builder().scanRuntimeClasspath().build();
        Recipe recipe = environment.activateRecipes("org.openrewrite.java.cleanup.CommonStaticAnalysis");

        // create a JavaParser instance with your classpath
        JavaParser javaParser = JavaParser.fromJavaVersion()
                .classpath(classpath)
                .build();

        // walk the directory structure where your Java sources are located
        // and create a list of them
        List<Path> sourcePaths = Files.find(projectDir, 999, (p, bfa) ->
                        bfa.isRegularFile() && p.getFileName().toString().endsWith(".java"))
                .collect(Collectors.toList());

        // parser the source files into ASTs
        List<J.CompilationUnit> cus = javaParser.parse(sourcePaths, projectDir,
                new InMemoryExecutionContext(Throwable::printStackTrace));

        // collect results
        List<Result> results = recipe.run(cus);

        for (Result result : results) {
            // print diffs to the console
            System.out.println(result.diff(projectDir));

            // or overwrite the file on disk with changes.
            // Files.writeString(result.getAfter().getSourcePath(),
            //        result.getAfter().printAll());
        }

    }
}

```
