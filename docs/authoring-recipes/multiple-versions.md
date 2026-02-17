---
sidebar_label: Multiple versions of a library
description: How to add and use multiple versions of a library in a recipe.
---

# Using multiple versions of a library in a project

Recipes are commonly grouped based on their goals. Maven recipes are put in the same project as other Maven recipes, Gradle recipes are put in the same project as other Gradle recipes, and so on. This has a variety of benefits: it's easier to share logic between recipes, fewer dependencies are needed, and it's easier to find recipes you care about.

However, what if you're making migration recipes that help others get to the latest version? Your project might need many different versions of the same library. For instance, a Mockito migration project might need Mockito versions 1, 2, 3, and 4.

If you tried to add many versions of the same library in your `build.gradle` or `pom.xml` file, you would find that, by default, only the newest one is used. Without multiple versions, though, you wouldn't be able to test that your recipes were performing correctly as the expected code might not even compile.

Fortunately, OpenRewrite has added some functionality to help with this predicament. Below we'll walk through how to add multiple versions of a library to a project and how to use those different versions in different tests.

## OpenRewrite recipe library for Gradle projects

For Gradle projects, you can use the OpenRewrite [recipe-library plugin](https://github.com/openrewrite/rewrite-build-gradle-plugin/blob/main/src/main/java/org/openrewrite/gradle/RewriteRecipeLibraryPlugin.java). You can apply this plugin by adding this to your `build.gradle` file:

```groovy
plugins {
    id("org.openrewrite.build.recipe-library") version "latest.release"
}
```

With the `recipe-library` plugin added, you can then add a `recipeDependencies` section in your `build.gradle` file. In there, you can add a `parserClasspath` that specifies a dependency and its corresponding version:

```groovy
recipeDependencies {
    parserClasspath("org.mockito:mockito-core:2.16.0")
    parserClasspath("org.mockito:mockito-core:3.12.4")
    parserClasspath("junit:junit:3.7")
    parserClasspath("junit:junit:4.13.2")
}
```

### TypeTables

After the plugin has been applied, you can run the `createTypeTable` task. This will create a `classpath.tsv.gz` file inside of the `src/main/resources/META-INF/rewrite` directory.

That file is a [TypeTable](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/internal/parser/TypeTable.java) – which is a tab separated values file that contains references to public API elements such as methods or fields.

The benefit of a TypeTable is that you don't need to pull down the entire JAR to be able to compile specific types. As this TypeTable is not a class, and it can't be re-hydrated into anything executable, it does not trigger security vulnerability scanners ([which was a concern with the previous recipeDependencies task](../reference/faq.md#why-do-artifact-scanners-detect-vulnerabilities-in-recipe-artifactsjars) – more on that below). Furthermore, it greatly reduces the size of your dependencies (by roughly 90%), which makes releases significantly smaller.

### `downloadRecipeDependencies` task

Similar to the above `createTypeTable` task, there is also a `downloadRecipeDependencies` task available. This will download the corresponding JAR for _every_ dependency specified in `recipeDependencies` and put them in the `src/main/resources/META-INF/rewrite` directory. From there, you could use the `classpathFromResources` function.

The main downside of this task is that it can [result in security vulnerability scanners incorrectly flagging these JARs as a concern](../reference/faq.md#why-do-artifact-scanners-detect-vulnerabilities-in-recipe-artifactsjars).

That being said, there may be some cases where you want to use this task – such as when there are meta annotations and TypeTables don't work.

## TypeTable generation for Maven projects

For Maven projects, we've updated the [rewrite-maven-plugin](https://github.com/openrewrite/rewrite-maven-plugin) to include support for multiple versions of a library and TypeTables. You can get this functionality by updating your `pom.xml` and adding a section like:

```xml title="pom.xml"
<profiles>
    <!--
        When you want to generate a TypeTable for use in JavaParser for JavaTemplate, run the following command:
        ./mvnw generate-resources -Ptypetable
    -->
    <profile>
        <id>typetable</id>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.openrewrite.maven</groupId>
                    <artifactId>rewrite-maven-plugin</artifactId>
                    <version>6.9.0-SNAPSHOT</version>
                    <executions>
                        <execution>
                            <goals>
                                <goal>typetable</goal>
                            </goals>
                            <phase>generate-resources</phase>
                            <configuration>
                                <recipeArtifactCoordinates>
                                    junit:junit:3.8.1,
                                    junit:junit:4.13.2,
                                    org.mockito:mockito-core:2.16.0,
                                    org.mockito:mockito-core:3.12.4
                                </recipeArtifactCoordinates>
                            </configuration>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>
```

With this profile defined, you can generate a Typetable by running:

```bash
./mvnw generate-resources -Ptypetable
```

This will create a TypeTable in the `src/main/resources/META-INF/rewrite` directory, which you can then use in your tests with the `classpathFromResources` function, similar to how it's used in Gradle projects.

## Manually copying JARs and using the `classpathFromResources` function

Another option you have if the above steps don't work for you is to put many different versions (JARs) of the same library in the `src/main/resources/META-INF/rewrite/classpath` directory. Then, in your tests, you can specify which one(s) you want to use by utilizing the `classpathFromResources` function.

For instance, if you wanted to default to using `junit-4.13.2` and `mockito-core-3.12.4` in your tests, you could add this to your test file:

```java
@Override
public void defaults(RecipeSpec spec) {
    spec
        .parser(JavaParser.fromJavaVersion()
            .classpathFromResources(new InMemoryExecutionContext(), "junit-4.13.2", "mockito-core-3.12.4"));
}
```

If you wanted to use a different version of these libraries in another test or in another file, all you would need to do is add the corresponding JAR to the `src/main/resources/META-INF/rewrite/classpath` directory and specify the new version in the `classpathFromResources` function.

:::info
`classpathFromResources` _does not_ add transitive dependencies by default. For example, if the class you use from `spring-boot-test` needs a class from `spring-core` or `spring-web`, then those also need to be added to the [type table](#typetables) and `classpathFromResources`.
:::
