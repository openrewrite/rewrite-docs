---
description: >-
  This guide covers configuring OpenRewrite with Maven or Gradle and using it to
  run refactoring recipes.
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Quickstart: Setting up your project and running recipes

To help orient you to OpenRewrite, let's walk through configuring a project to use the Maven or Gradle OpenRewrite plugin. Then let's walk through running various types of recipes on said project and talk through the results.

In this guide, you will:

* [Clone a sample project](getting-started.md#step-1-clone-sample-project)
* [Add the rewrite-maven-plugin or rewrite-gradle-plugin to your project](getting-started.md#step-2-add-rewrite-maven-plugin-or-rewrite-gradle-plugin-to-your-project)
* [Activate a recipe so it can be run](getting-started.md#step-3-activate-a-recipe)
* [Run a simple refactoring recipe](getting-started.md#step-4-run-a-simple-refactoring-recipe)
* [Run a recipe with YAML configuration](getting-started.md#step-5-run-a-recipe-with-yaml-configuration)
* [Add and run an externally created recipe](getting-started.md#step-6-running-recipes-from-external-modules)

{% hint style="info" %}
If you are a Moderne customer, you should use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) or the [Moderne Platform](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/running-your-first-recipe) to run recipes rather than following the instructions in this doc.
{% endhint %}

## Prerequisites

This quickstart guide assumes that you:

* Are somewhat familiar with Java
* Have worked with a Maven or a Gradle project before
* Know how to run commands in the command line
* Can run basic Git commands

## Step 1: Clone sample project

The first step in this process is making sure you have some code to work with. We've prepared a [sample repository](https://github.com/openrewrite/spring-petclinic-migration) that you can use if you'd like. However, as all of the steps in this guide apply to any Java project built with Maven or Gradle, please feel free to use your own and skip to [Step 2](getting-started.md#step-2-add-rewrite-maven-plugin-or-rewrite-gradle-plugin-to-your-project).

{% hint style="warning" %}
The sample **spring-petclinic project** requires JDK version 11 to build (OpenRewrite does not have this requirement -- just this sample project). Newer JDK versions will not work. Get OpenJDK 11 [here](https://adoptium.net/temurin/releases/?version=11) if you do not already have that version installed.

If you are building the project in IntelliJ and are using Gradle, make sure that you set your Gradle JVM to 11 (Build, Execution, Deployment → Build Tools → Gradle → Gradle JVM).
{% endhint %}

To clone the [openrewrite/spring-petclinic-migration](https://github.com/openrewrite/spring-petclinic-migration) repository, please run this command:

```
git clone https://github.com/openrewrite/spring-petclinic-migration.git
```

## Step 2: Add rewrite-maven-plugin or rewrite-gradle-plugin to your project

Once you've checked out your project, the next step is to add the OpenRewrite plugin to Maven or Gradle. Please follow the instructions in the Maven or Gradle tab to do that:

{% tabs %}
{% tab title="Maven" %}
Add a new `<plugin>` in the `<plugins>` section of your `pom.xml` that looks like:

{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>5.40.2</version>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle (Groovy)" %}
* Add the OpenRewrite plugin to the `plugins` section of your `build.gradle` file
* Make sure `mavenCentral()` is included in the `repositories` section
* Add a `rewrite` section that will be filled in later

Your file should look similar to:

{% code title="build.gradle" %}
```groovy
plugins {
    id 'java'
    id 'maven-publish'
    id 'org.openrewrite.rewrite' version '6.23.3'
}

repositories {
  // The root project doesn't have to be a Java project, but this is necessary
  // to resolve recipe artifacts.
  mavenCentral()
}

rewrite {
    // Will configure in subsequent steps
}

// ...
```
{% endcode %}
{% endtab %}

{% tab title="Gradle (Kotlin)" %}
* Add the OpenRewrite plugin to the `plugins` section of your `build.gradle.kts` file
* Make sure `mavenCentral()` is included in the `repositories` section
* Add a `rewrite` section that will be filled in later

Your file should look similar to:

{% code title="build.gradle.kts" %}
```kotlin
plugins {
    `java-library`
    `maven-publish`
    id("org.openrewrite.rewrite") version "6.23.3"
}

repositories {
  // The root project doesn't have to be a Java project, but this is necessary
  // to resolve recipe artifacts.
  mavenCentral()
}

rewrite {
    // Will configure in subsequent steps
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're able to run any of the Maven goals or Gradle tasks provided by the OpenRewrite plugin. See [Maven Plugin Configuration](../reference/rewrite-maven-plugin.md) or [Gradle Plugin Configuration](../reference/gradle-plugin-configuration.md) for the full set of options.

From the command line, try running `mvn rewrite:discover` or `gradle rewriteDiscover` to see a list of all the recipes available for execution. Initially, this will list only the recipes built-in to OpenRewrite.

## Step 3: Activate a recipe

Before you can run any of the recipes, you will need to update the plugin configuration to mark the desired recipe(s) as "active". Let's use the [org.openrewrite.java.OrderImports](https://docs.openrewrite.org/recipes/java/orderimports) recipe as an example (which will ensure your imports follow a standard order). To activate this recipe, please modify your `pom.xml` or `build.gradle(.kts)` file so that the sections you modified earlier look like the below example:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>5.40.2</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.OrderImports</recipe>
    </activeRecipes>
  </configuration>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle (Groovy)" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id 'java'
    id 'maven-publish'
    id 'org.openrewrite.rewrite' version '6.23.3'
}

rewrite {
    activeRecipe(
        'org.openrewrite.java.OrderImports',
    )
}
```
{% endcode %}
{% endtab %}

{% tab title="Gradle (Kotlin)" %}
{% code title="build.gradle.kts" %}
```kotlin
plugins {
    `java-library`
    `maven-publish`
    id("org.openrewrite.rewrite") version "6.23.3"
}

rewrite {
    activeRecipe(
        "org.openrewrite.java.OrderImports",
    )
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Step 4: Run a simple refactoring recipe

Now that you've activated the `OrderImports` recipe, you can run it by executing the command:

{% tabs %}
{% tab title="Maven" %}
```sh
mvn rewrite:run
```
{% endtab %}

{% tab title="Gradle" %}
```sh
gradle rewriteRun
```
{% endtab %}
{% endtabs %}

After running it, you will be notified of all of the files that have been changed:

![Console output from running mvn rewrite:run with OrderImports set as an active recipe in the spring-petclinic-migration repository](../.gitbook/assets/order-imports-run.png)

To see what has changed in the code, run `git diff` or use your preferred IDE's diff viewer:

![Sample of formatting changes made to spring-petclinic-migration by OrderImports](../.gitbook/assets/order-imports-2.png)

From there, you can commit the changes or add additional recipes based on your needs.

## Step 5: Run a recipe with YAML configuration

Some recipes are more complex than `OrderImports` and require configuration (in a `rewrite.yml` file) to run them. For instance, the built-in recipe [org.openrewrite.java.ChangePackage](https://docs.openrewrite.org/reference/recipes/java/changepackage) has three options that need to be configured:

| Type      | Name           | Description                                                        |
| --------- | -------------- | ------------------------------------------------------------------ |
| `String`  | oldPackageName | The package name to replace.                                       |
| `String`  | newPackageName | New package name to replace the old package name with.             |
| `Boolean` | recursive      | _Optional_. Whether or not to recursively change subpackage names. |

To use this recipe to rename the package `org.springframework.samples.petclinic.vet` to `org.springframework.samples.petclinic.veterinary`, create a `rewrite.yml` file at the root of your project that looks like:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.VetToVeterinary
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.samples.petclinic.vet
      newPackageName: org.springframework.samples.petclinic.veterinary
```
{% endcode %}

{% hint style="warning" %}
YAML files are very sensitive to indentation. If you are not seeing the expected results from a YAML-configured recipe, please double-check that its arguments are indented like the above example.
{% endhint %}

If the file was created correctly, you should see `com.yourorg.VetToVeterinary` listed under available recipes if you run the discover command again. Also, as mentioned earlier, in order to use this recipe, you'll need to add it to your list of active recipes:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.openrewrite.maven</groupId>
      <artifactId>rewrite-maven-plugin</artifactId>
      <version>5.40.2</version>
      <configuration>
        <activeRecipes>
          <recipe>org.openrewrite.java.OrderImports</recipe>
          <recipe>com.yourorg.VetToVeterinary</recipe>
        </activeRecipes>
      </configuration>
    </plugin>
  </plugins>
</build>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle (Groovy)" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id 'java'
    id 'maven-publish'
    id 'org.openrewrite.rewrite' version '6.23.3'
}

rewrite {
    activeRecipe(
        'org.openrewrite.java.OrderImports',
        'com.yourorg.VetToVeterinary'
    )
}
```
{% endcode %}
{% endtab %}

{% tab title="Gradle (Kotlin)" %}
{% code title="build.gradle.kts" %}
```kotlin
plugins {
    `java-library`
    `maven-publish`
    id("org.openrewrite.rewrite") version "6.23.3"
}

rewrite {
    activeRecipe(
        "org.openrewrite.java.OrderImports",
        "com.yourorg.VetToVeterinary"
    )
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

Once this recipe has been added to your active recipes, you can run either `mvn rewrite:run` or `gradle rewriteRun` to execute all of your active recipes. Afterward, you'll see that:

* The source files in the `vet` package have been moved to the newly created `veterinary` package
* References such as import statements have been updated to reflect the new name
* All of the files have been formatted according to the previously defined `OrderImports` rules

![Git diff showing updated import statements](../.gitbook/assets/update-import.png)

From there, you can confirm that everything still builds and passes its tests by running `mvn clean install` or `gradle build`.

## Step 6: Running Recipes from External Modules

At this point, you know how to configure and run any recipe included in OpenRewrite itself. However, many recipes are not bundled into the core library. For example, all of the Spring, Mockito, JUnit, and AssertJ-related recipes maintained by the OpenRewrite team live in the [rewrite-spring repository](https://github.com/openrewrite/rewrite-spring).

{% hint style="info" %}
You can search through all of the recipes in the [OpenRewrite docs](https://docs.openrewrite.org/reference/recipes). Each recipe page has instructions for how to import the recipe and what parameters (if any) need to be included.
{% endhint %}

Let's pretend that you want to migrate JUnit 4 to JUnit 5 in a Spring project you have. If you take a look at the [Usage section](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/springboot2junit4to5migration#usage) in the [JUnit 4 to 5 migration recipe](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/springboot2junit4to5migration), you'll see what you need to include in your `build.gradle(.kts)` or `pom.xml` file in order to use this recipe.

Below, we'll walk through the [Maven](getting-started.md#maven--external-modules) and [Gradle](getting-started.md#gradle--external-modules) changes and provide some additional context around said changes.

### Maven + external modules

For Maven projects, you'll need to:

* Add the recipe to the `activeRecipes` list
* Add a dependency on the library where the desired recipe lives (JUnit 4 to 5 lives in the ][rewrite-spring](https://github.com/openrewrite/rewrite-spring) repository)
* Specify a version of `rewrite-spring` to use

After doing that, your `pom.xml` file should look similar to this:

{% code title="pom.xml" %}
```xml
<build>
  <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.OrderImports</recipe>
            <recipe>com.yourorg.VetToVeterinary</recipe>
            <recipe>org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.16.0</version>
          </dependency>
        </dependencies>
      </plugin>
  </plugins>
<build>
```
{% endcode %}

To double-check that everything is working, run the command `mvn rewrite:run`. Your project should be upgraded to Spring Boot 2 and all of the test classes should be updated to JUnit 5. Your `pom.xml` file will also have had its Spring dependencies updated, the JUnit 4 dependency removed, and the JUnit 5 dependency added.

{% hint style="info" %}
Maven does not currently support using a bill of materials (BOM) to specify plugin versions or dependencies. This means that you will have to specify the versions of each plugin by hand, unlike in the Gradle section below.
{% endhint %}

### Gradle + external modules

Unlike Maven projects, Gradle projects have two options for specifying recipe versions. You can:

1. Add `rewrite-recipe-bom` as a [bill of materials (BOM) dependency](https://docs.gradle.org/current/userguide/platforms.html#sub:bom\_import)
2. Add the specific dependency and version that you want (in this case `rewrite-spring`)

If you choose to use the `rewrite-recipe-bom`, you won't have to worry about specifying versions for your OpenRewrite recipes as all of the recipes you include in your `dependencies` section will have an appropriate version specified in the bill of materials (BOM). **For Gradle projects, this is the recommended approach.**

If you choose to not use `rewrite-recipe-bom`, you'll need to specify the version of each OpenRewrite recipe module you use.

Presuming you chose to use the `rewrite-recipe-bom`, your Gradle setup should look similar to this:

{% tabs %}
{% tab title="Groovy" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id 'java'
    id 'maven-publish'
    id 'org.openrewrite.rewrite' version '6.23.3'
}

rewrite {
    activeRecipe(
        'org.openrewrite.java.OrderImports',
        'com.yourorg.VetToVeterinary',
        'org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration'
    )
}

dependencies {
    rewrite platform('org.openrewrite.recipe:rewrite-recipe-bom:latest-release')
    rewrite('org.openrewrite.recipe:rewrite-spring')

    // Other project dependencies
}
```
{% endcode %}
{% endtab %}

{% tab title="Kotlin" %}
{% code title="build.gradle.kts" %}
```kotlin
plugins {
    `java-library`
    `maven-publish`
    id("org.openrewrite.rewrite") version "6.23.3"
}

rewrite {
    activeRecipe(
        "org.openrewrite.java.OrderImports",
        "com.yourorg.VetToVeterinary",
        "org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration"
    )
}

dependencies {
    rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest-release"))
    rewrite("org.openrewrite.recipe:rewrite-spring")

    // Other project dependencies
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

To check that everything worked correctly, run the command `gradle rewriteRun`. You should see that the project has been upgraded to Spring Boot 2 and all of the test classes have been updated to JUnit 5.

Please note, though, that your `build.gradle(.kts)` file _will not_ be updated as part of this. You will manually have to change the Spring and JUnit dependencies to reflect the appropriate versions.

{% hint style="info" %}
Dependency management for Gradle is not yet available but this feature is on OpenRewrite's roadmap.
{% endhint %}

## Next steps

Now that you know how to configure and run recipes, you may be interested in these topics:

{% hint style="info" %}
Before making any recipes or configuring any plugins, please [ensure your recipe development environment is set up](../authoring-recipes/recipe-development-environment.md). There are steps in there that are important to configure that go beyond what was included in this quick start guide.
{% endhint %}

* [Writing a Java refactoring recipe](../authoring-recipes/writing-a-java-refactoring-recipe.md)
* [Maven plugin configuration](../reference/rewrite-maven-plugin.md)
* [Gradle plugin configuration](../reference/gradle-plugin-configuration.md)
* [Declarative YAML format](../reference/yaml-format-reference.md)
