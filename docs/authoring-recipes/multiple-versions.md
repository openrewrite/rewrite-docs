# Using multiple versions of a library in a project

Recipes are commonly grouped based on their goals. Maven recipes are put in the same project as other Maven recipes, Gradle recipes are put in the same project as other Gradle recipes, and so on. This has a variety of benefits: it's easier to share logic between recipes, fewer dependencies are needed, and it's easier to find recipes you care about.

However, what if you're making migration recipes that help others get to the latest version? Your project might need many different versions of the same library. For instance, a Mockito migration project might need Mockito versions 1, 2, 3, and 4.

If you tried to add many versions of the same library in your `build.gradle` or `pom.xml` file, you would find that, by default, only the newest one is used. Without multiple versions, though, you wouldn't be able to test that your recipes were performing correctly as the expected code might not even compile.

Fortunately, OpenRewrite has added some functionality to help with this predicament. Below we'll walk through how to add multiple versions of a library to a project and how to use those different versions in different tests.

## Manually copying jars and using the `classpathFromResources` function

In your project, you can put many different versions (jars) of the same library in the `src/main/resources/META-INF/rewrite/classpath` directory. Then, in your tests, you can specify which one(s) you want to use by utilizing the `classpathFromResources` function.

For instance, if you wanted to default to using `junit-4.13.2` and `mockito-core-3.12.4` in your tests, you could add this to your test file:

```java
@Override
public void defaults(RecipeSpec spec) {
    spec
        .parser(JavaParser.fromJavaVersion()
            .classpathFromResources(new InMemoryExecutionContext(), "junit-4.13.2", "mockito-core-3.12.4"));
}
```

If you wanted to use a different version of these libraries in another test or in another file, all you would need to do is add the corresponding jar to the `src/main/resources/META-INF/rewrite/classpath` directory and specify the new version in the `classpathFromResources` function.

### OpenRewrite recipe library

The above solution works and is what you'll need to do for Maven projects. For Gradle projects, however, there's an easier option than manually downloading and copying the jars into the `src/main/resources/META-INF/rewrite` directory.

You can, instead, use the OpenRewrite [recipe-library plugin](https://github.com/openrewrite/rewrite-build-gradle-plugin/blob/main/src/main/java/org/openrewrite/gradle/RewriteRecipeLibraryPlugin.java). You can apply this plugin by adding this to your `build.gradle` file:

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

After the plugin has been applied, you can run the `downloadRecipeDependencies` task. This will download the corresponding jar for every dependency specified in `recipeDependencies` and put them in the `src/main/resources/META-INF/rewrite` directory. From there, you could use the `classpathFromResources` function in the same way as above.
