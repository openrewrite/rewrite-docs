---
sidebar_label: Automating breaking changes
description: How to create a recipe that automates breaking changes.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to automate breaking changes

Imagine you are an author of a popular library and you've come to realize that one of your core methods needs to be changed. Unfortunately, making such a change would break all of your user's code. While you _could_ release the change and let your users know so they can manually fix it – there is a much better approach: write a recipe to automatically fix these breaking changes. This saves your users time and reduces their frustration, while also ensuring a smoother transition to the new version.

In this guide, we'll walk you through creating such a recipe. By the end, you should have a working recipe bundled up that can be easily shared with others, making it simple for them to upgrade to the latest version of your library.

## Step 1: Figure out what's going to change

When creating your own recipe, before you do anything, you should take the time to truly think through what you want to change with your recipe/recipes. Remember that you can build simpler recipes first and then combine them into larger, more complex ones.

For the sake of having an example for this guide, let's imagine that we have an internal Spring Boot 2 library that we want to make some changes to. 

Specifically, we want to:

1. Rename the package `com.example.springboot2.starter` to `com.example.springboot3.starter`
  * This can be done with the [org.openrewrite.java.ChangePackage recipe](../recipes/java/changepackage.md).
2. Change the type of `com.example.springboot2.starter.MyConfig` to `com.example.springboot3.starter.MyNewConfig`
  * This can be done with the [org.openrewrite.java.ChangeType recipe](../recipes/java/changetype.md)
3. Upgrade the version of our library from `1.0.0` to `2.0.x` in the Gradle or Maven build file (e.g., `com.acme:inhouse-starter:1.0.0` --> `com.acme:inhouse-starter:2.0.x`)
  * This can be done with the [org.openrewrite.java.dependencies.UpgradeDependencyVersion recipe](../recipes/java/dependencies/upgradedependencyversion.md)

### Example changes

Below you can find a simple example of what code/build files might look like before/after the recipe is run.

<Tabs>
<TabItem value="java" label="Java">
```java title="Before"
import com.example.springboot2.starter.foo;
import com.example.springboot2.starter.MyConfig;

public class MyApp {
  public static void main(String[] args) {
    MyConfig config = new MyConfig();
    config.setTimeout(1000);
    System.out.println(config.getTimeout());
  }
}
```

```java title="After"
import com.example.springboot3.starter.foo;
import com.example.springboot3.starter.MyNewConfig;

public class MyApp {
  public static void main(String[] args) {
    MyNewConfig config = new MyNewConfig();
    config.setTimeout(1000);
    System.out.println(config.getTimeout());
  }
}
```
</TabItem>
<TabItem value="gradle" label="Gradle">
```groovy title="Before"
plugins {
  id 'java-library'
}

repositories {
  mavenCentral()
}

dependencies {
  implementation("com.acme:inhouse-starter:1.0.0")
}
```

```groovy title="After"
plugins {
  id 'java-library'
}

repositories {
  mavenCentral()
}

dependencies {
  implementation("com.acme:inhouse-starter:2.0.x")
}
```
</TabItem>
</Tabs>

## Step 2: Fork the `rewrite-recipe-starter` project

To assist with recipe development, we've created a [rewrite-recipe-starter repository](https://github.com/moderneinc/rewrite-recipe-starter) that contains all the things you need to get started with recipe development – along with example recipes you can borrow from.

Fork this repository and clone your fork down to your local machine. Test that it builds and runs by running either `./gradlew build` or `./mvnw verify`.

## Step 3: Write the recipe

Remember the best practice tip of [if it can be declarative, it should be declarative](./recipe-conventions-and-best-practices.md#if-it-can-be-declarative-it-should-be-declarative). For complex or custom recipes, this may not be possible, but for our example we can create a declarative recipe.

:::tip
If you need help with recipe creation, consider working through our [recipe authoring workshop](https://docs.moderne.io/hands-on-learning/fundamentals/workshop-overview) or jumping back to the [writing a Java refactoring recipe guide](./writing-a-java-refactoring-recipe.md).
:::

Here is what our declarative recipe looks like:

```yaml title="our-test-recipe.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.acme.UpgradeToSpringBoot3
displayName: Upgrade internal tools to Spring Boot 3
description: Upgrades our imaginary internal tools to Spring Boot 3.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.example.springboot2.starter.MyConfig
      newFullyQualifiedTypeName: com.example.springboot3.starter.MyNewConfig
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.example.springboot2.starter
      newPackageName: com.example.springboot3.starter
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: com.acme
      artifactId: inhouse-starter
      newVersion: 2.0.x
```

:::warning
This recipe **must** exist inside of the `src/main/resources/META-INF/rewrite` directory. This is necessary both for testing (see below) and for packaging/sharing the recipe.
:::

## Step 4: Test the recipe

After creating a recipe, it's extremely important to test it so that we can ensure [we are doing no harm](./recipe-conventions-and-best-practices.md#do-no-harm). This is true even for declarative recipes.

Declarative recipes can be tested like any other Java recipe – with a few minor differences. Assuming you correctly created the declarative recipe inside of the `src/main/resources/META-INF/rewrite` directory, you can point your tests to it via the `recipeFromResources` method:

```java
@Override
public void defaults(RecipeSpec spec) {
  spec.recipeFromResources("com.acme.UpgradeToSpringBoot3");
}
```

Another point worth noting is that you can test multiple types of files at once in a single test. In our recipe, for instance, we update both a `build.gradle` file _and_ a Java class.

<details>
<summary>
Here is an example of what a test might look like that tests both Gradle and Java changes:
</summary>

```java title="UpgradeToSpringBoot3Test.java"
package com.acme;

import org.junit.jupiter.api.Test;
import org.openrewrite.java.JavaParser;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;
import static org.openrewrite.gradle.Assertions.buildGradle;

class UpgradeToSpringBoot3Test implements RewriteTest {

  @Override
  public void defaults(RecipeSpec spec) {
      // Note: You normally wouldn't have the snippet of `dependsOn`. 
      //       This was done simply for having an example that works.
      spec.recipeFromResources("com.acme.UpgradeToSpringBoot3")
        .parser(JavaParser.fromJavaVersion().dependsOn(
          """
          package com.example.springboot2.starter;

          public class MyConfig {
              void setTimeout(int t) {}
              int getTimeout() { return 10; }
          }
          """));
  }

  @Test
  void replacesStringEquals() {
    rewriteRun(
      // Note: This test will actually fail due to the fact that `inhouse-starter` doesn't exist 
      //       so `2.0.x` won't figure out the latest minor version as there is none. 
      //       For a real library, this would work fine, though.
      //language=groovy
      buildGradle(
        """
            plugins {
                id 'java-library'
            }
            repositories {
                mavenCentral()
            }
            dependencies {
                implementation("com.acme:inhouse-starter:1.0.0")
            }
            """,
        """
            plugins {
                id 'java-library'
            }
            repositories {
                mavenCentral()
            }
            dependencies {
                implementation("com.acme:inhouse-starter:2.0.x")
            }
            """
      ),
      //language=java
      java(
        """
          import com.example.springboot2.starter.foo;
          import com.example.springboot2.starter.MyConfig;
          
          public class MyApp {
              public static void main(String[] args) {
                  MyConfig config = new MyConfig();
                  config.setTimeout(1000);
                  System.out.println(config.getTimeout());
              }
          }
          """,
        """
          import com.example.springboot3.starter.foo;
          import com.example.springboot3.starter.MyNewConfig;

          public class MyApp {
              public static void main(String[] args) {
                  MyNewConfig config = new MyNewConfig();
                  config.setTimeout(1000);
                  System.out.println(config.getTimeout());
              }
          }
          """
      )
    );
  }
}
```
</details>

## Step 5: Package/distribute the recipe

Once you've finished creating/testing your recipe, the next thing you'll need to do is figure out how you want to distribute it to others.

You can package and distribute recipes as you would any other library – via Maven Central or via an in-house Artifactory/Nexus repository.

We'd recommend **creating a separate library** to contain the recipes rather than merging recipes into any existing library. This will make it easier to independently develop and release recipes for upcoming versions. Furthermore, it will allow you to chain your recipes together to make larger migration recipes.

## Step 6: Run the recipe in the repositories that need it

The last thing you'll need to do is run your recipe in the appropriate places. To activate/run a recipe inside of a repository, check out our [quickstart guide on setting up a project and running recipes](../running-recipes/getting-started.md).

Or, if you think you'll need to do this on a large-scale, consider checking out [Moderne](https://docs.moderne.io/). With Moderne, you can run recipes against thousands of repositories at once – without having to manually configure or change anything.
