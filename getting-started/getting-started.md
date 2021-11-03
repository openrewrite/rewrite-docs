---
description: >-
  This quick-start guide covers configuring rewrite with Maven and Gradle and
  using it to apply refactoring recipes.
---

# Quickstart: Maven and Gradle

Following this guide you will learn:

* How to apply the rewrite-maven-plugin to a Maven project
* How to apply the rewrite-gradle-plugin to a Gradle project
* How to configure, run, and inspect the results of built-in and external refactoring recipes

## Step 1: Clone sample project

{% hint style="warning" %}
The sample spring-petclinic project is based on an older version of project that requires a JDK version 1.8 to build. Newer JDK versions will not work. Get OpenJDK 8 [here](https://adoptopenjdk.net) if you do not already have one.
{% endhint %}

This guide uses a fork of [spring-petclinic](https://github.com/openrewrite/spring-petclinic-migration). Clone it by running:

```
git clone https://github.com/openrewrite/spring-petclinic-migration.git
```

{% hint style="info" %}
The steps in this guide are applicable to any Java project built with Maven or Gradle. Feel free to use your own project instead.
{% endhint %}

## Step 2: Apply rewrite-maven-plugin or rewrite-gradle-plugin

In the pom.xml or build.gradle, add this entry to the `plugins` section to apply the rewrite plugin to the project.

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>4.14.1</version>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    
    // apply only to the root project
    id("org.openrewrite.rewrite") version("5.14.0")
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

At this point, you're able to run any of the Maven goals or Gradle tasks provided by the plugins. See [Maven Plugin Configuration](../reference/rewrite-maven-plugin.md) and [Gradle Plugin Configuration](../reference/gradle-plugin-configuration.md) for the full set of options. Try running `./mvnw rewrite:discover` or `./gradlew rewriteDiscover` to see a listing of all the recipes available for execution. Until we add dependencies on recipe-providing modules this will list only the recipes built-in to OpenRewrite.

{% hint style="warning" %}
The Gradle plugin can only be applied to the _root_ project. The tasks on the root project will orchestrate running recipes on all subprojects.
{% endhint %}

## Step 3: Execute a Refactoring Recipe

Before any recipe will be executed it must be listed as "active" in the plugin configuration. For the sake of example, we will activate the included `org.openrewrite.java.format.AutoFormat` recipe. This recipe will format the source code in the project according to the styles specified in the rewrite.yml file, or according to Jetbrains IntelliJ's default Java style if no other style is specified.

To configure this recipe to be active add this configuration to the plugin in the pom.xml or build.gradle:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>4.14.1</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.format.AutoFormat</recipe>
    </activeRecipes>
  </configuration>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.format.AutoFormat")
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
Starting with java 16, the default JVM behavior is not to allow access to protected modules. The workaround for this issue is to add explicit exports for packages used by rewrite's java parser.
{% endhint %}

{% tabs %}
{% tab title="Gradle" %}
{% code title="gradle.properties" %}
```
org.gradle.jvmargs=--add-exports jdk.compiler/com.sun.tools.javac.code=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.comp=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.file=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.jvm=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.main=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.model=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.processing=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.tree=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="MAVEN:OPS environment variable" %}
```
MAVEN_OPTS="--add-exports jdk.compiler/com.sun.tools.javac.code=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.comp=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.file=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.jvm=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.main=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.model=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.processing=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.tree=ALL-UNNAMED--add-exports jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED"
```
{% endcode %}
{% endtab %}
{% endtabs %}

With `AutoFormat` activated we can now apply it to the project. Run:

{% tabs %}
{% tab title="Maven" %}
```markup
./mvnw rewrite:run
```
{% endtab %}

{% tab title="Gradle" %}
```
./gradlew rewriteRun
```
{% endtab %}
{% endtabs %}

![Console output from running ./mvnw rewrite:run with AutoFormat set as an active recipe on spring-petclinic-migration](<../.gitbook/assets/image (11).png>)

Run `git diff`, or use your preferred IDE's diff viewer, to inspect the changes.

![Sample of formatting changes made to spring-petclinic-migration by AutoFormat](../.gitbook/assets/image.png)

That's all you need to do to run zero-configuration recipes like AutoFormat. But some recipes require you to tell them what you want them to do.

## Step 4: Execute a Recipe with Yaml Configuration

The built-in recipe `org.openrewrite.java.ChangePackage` will move Java classes between package names you specify and update references and imports accordingly. To rename the `org.springframework.samples.petclinic.vet` package to `org.springframework.samples.petclinic.veterinary`, create a rewrite.yml file at the project root and give it these contents:

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
Yaml files are very sensitive to indentation. If you find a recipe you've configured in yaml not producing the expected result, double-check that its arguments are indented as shown here.
{% endhint %}

This creates a new recipe called `com.yourorg.VetToVeterinary`. Now add it to the active recipe list:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>4.14.1</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.format.AutoFormat</recipe>
      <recipe>com.yourorg.VetToVeterinary</recipe>
    </activeRecipes>
  </configuration>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe(
        "org.openrewrite.java.format.AutoFormat",
        "com.yourorg.VetToVeterinary")
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

Run `./mvnw rewrite:run` or `./gradlew rewriteRun` to perform the package relocation. Afterwards you'll see both that the sources in the vet package have been moved to the new directory, and references such as import statements have been updated accordingly.

![Git diff showing updated import statements](<../.gitbook/assets/image (10).png>)

You can test that spring-petclinic-migrations still builds & passes its tests by running `./mvnw clean install` or `./gradlew build`. At this point you know how to configure and run any recipe included in rewrite itself.

## Step 5: Running Recipes from External Modules

Not all rewrite recipes are bundled into the core libraries. In this example we'll use [rewrite-spring](https://github.com/openrewrite/rewrite-spring), a rewrite-maintained module which contains spring, mockito, junit, and assertJ related refactoring recipes.

1. Add a `rewrite` dependency on rewrite-spring
2. Set the `org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration` recipe as active.

After applying these steps, the relevant portions of your build file will look like this:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>4.14.1</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.format.AutoFormat</recipe>
      <recipe>com.yourorg.VetToVeterinary</recipe>
      <recipe>org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration</recipe>
    </activeRecipes>
  </configuration>
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-spring</artifactId>
      <version>4.14.1</version>
    </dependency>
  </dependencies>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe(
        "org.openrewrite.java.format.AutoFormat",
        "com.yourorg.VetToVeterinary",
        "org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.13.1")

    // Other project dependencies
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

Run `./mvnw rewrite:run` or `./gradlew rewriteRun` and observe that the project has been upgraded to Spring Boot 2 and the test classes are all updated to be JUnit 5 tests. If you're using Maven, the pom.xml will also have had the Spring dependencies updated, the Junit 4 dependency removed and Junit 5 dependencies added. OpenRewrite does not yet support automatic update of Gradle dependencies. Gradle users will have to manually make the corresponding changes.

{% hint style="info" %}
If you want to know when dependency management for Gradle will be added to rewrite, follow [this issue](https://github.com/openrewrite/rewrite-roadmap/issues/7) on our roadmap.
{% endhint %}

## Next Steps

Now that you're up and running with the rewrite-maven-plugin, you may be interested in these topics:

* [Writing a Java Refactoring Recipe](../tutorials/writing-a-java-refactoring-recipe.md)
* [Maven Plugin Configuration](../reference/rewrite-maven-plugin.md)
* [Gradle Plugin Configuration](../reference/gradle-plugin-configuration.md)
* [Declarative YAML Format](../reference/yaml-format-reference.md)
