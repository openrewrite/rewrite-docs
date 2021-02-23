---
description: >-
  This tutorial covers configuring rewritewith maven and applying pre-packaged
  recipes.
---

# Getting Started: Java and Maven

Following this guide you will learn:

* How to apply the rewrite-maven-plugin to a Maven project
* How to configure, run, and inspect the results of built-in and external refactoring recipes

## Step 1: Clone sample project

This guide uses a fork of [spring-petclinic-migration](https://github.com/openrewrite/spring-petclinic-migration). Clone it by running:

```text
git clone https://github.com/openrewrite/spring-petclinic-migration.git
```

{% hint style="warning" %}
This is based on an older project that requires a JDK version 1.8 to build. Newer JDK versions will not work. Get OpenJDK 8 [here](https://adoptopenjdk.net/) if you don't already have one.
{% endhint %}

{% hint style="info" %}
The steps in this guide are equally applicable to any Maven-built Java project. Feel free to use your own project instead.
{% endhint %}

## Step 2:  Apply rewrite-maven-plugin

In the pom.xml, add this entry to the `<plugins>` section to apply the rewrite-maven-plugin to the project.

```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>3.0.0-rc.2</version>
</plugin>
```

At this point you're able to run any of the goals provided by the plugin. See [Maven Plugin Configuration](../reference-1/rewrite-maven-plugin.md) for the full set of options. Try running `mvn rewrite:discover` to see a listing of all the recipes available for execution. Until we add dependencies on recipe-providing modules this will list only the recipes built-in to openrewrite.

## Step 3: Execut**e** a Refactoring Recipe

Before any recipe will be executed it must be listed as "active" in the plugin configuration within the pom.xml. For the sake of example, we'll run the included `org.openrewrite.java.format.AutoFormat` recipe. This recipe will format the source code in the project according to the styles specified in the rewrite.yml file, or according to Jetbrains IntelliJ's default Java style if no other style is specified. To configure this recipe to be active add this configuration to the plugin in the pom.xml:

```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>3.0.0-rc.3</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.format.AutoFormat</recipe>
    </activeRecipes>
  </configuration>
</plugin>
```

With `AutoFormat` activated we can now apply it to the project. Run:

```markup
mvn rewrite:fix
```

![Console output from running rewrite:fix with AutoFormat set as an active recipe on spring-petclinic-migration](../../.gitbook/assets/image%20%2811%29.png)

Run `git diff`, or use your preferred IDE's diff viewer, to inspect the changes.

![Sample of formatting changes made to spring-petclinic-migration by AutoFormat](../../.gitbook/assets/image.png)

That's all you need to do to run zero-configuration recipes like AutoFormat. But some recipes require you to tell them what you want them to do. 

## Step 4: Execute a Recipe with Yaml Configuration

The built-in recipe `org.openrewrite.java.ChangePackage` will move Java classes between package names you specify and update references and imports accordingly. To rename the `org.springframework.samples.petclinic.vet` package to `org.springframework.samples.petclinic.veterinary`, create a rewrite.yml file at the project root and give it these contents:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.VetToVeterinary
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldFullyQualifiedPackageName: org.springframework.samples.petclinic.vet
      newFullyQualifiedPackageName: org.springframework.samples.petclinic.veterinary
```

{% hint style="warning" %}
Yaml files are indentation-sensitive. If you find a recipe you've configured in yaml not producing the expected result, double-check the indentation of its arguments. 
{% endhint %}

This creates a new recipe called `com.yourorg.VetToVeterinary`. To run as part of `rewrite:fix`, add it to the active recipe list in the pom.xml:

```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>3.0.0-rc.3</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.format.AutoFormat</recipe>
      <recipe>com.yourorg.VetToVeterinary</recipe>
    </activeRecipes>
  </configuration>
</plugin>
```

Run `mvn rewrite:fix` will to perform the package relocation. Afterwards you'll see both that the sources in the vet package have been moved to the new directory, and references such as import statements have been updated accordingly.

![Git diff showing successful package relocation](../../.gitbook/assets/image%20%2810%29.png)

You can test that spring-petclinic-migrations still builds & passes its tests by running `mvn clean install`. At this point you know how to configure and run any recipe included in rewrite itself.

## Step 5: Running Recipes from External Modules

To run recipes from a rewrite module that isn't part of the core rewrite libraries, add a plugin dependency on the module to your pom.xml. In this example we'll use rewrite-testing-frameworks, a rewrite-provided module which contains mockito, junit, and assertJ related refactoring recipes.

1. Add a &lt;plugin&gt; dependency on rewrite-testing-frameworks
2. Set the `org.openrewrite.java.testing.JUnit5Migration` recipe as active.

After applying these steps, the &lt;plugin&gt; entry in your pom.xml will look like this:

```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>3.0.0-rc.3</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.format.AutoFormat</recipe>
      <recipe>com.yourorg.VetToVeterinary</recipe>
      <recipe>org.openrewrite.java.testing.JUnit5Migration</recipe>
    </activeRecipes>
  </configuration>
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-testing-frameworks</artifactId>
      <version>1.0.0-rc.1</version>
    </dependency>
  </dependencies>
</plugin>
```

Run `mvn rewrite:fix` and observe that the test classes are all updated to be JUnit 5 tests, and the pom.xml has had the junit 4 dependency removed and the junit 5 dependencies added.

## Next Steps

Now that you're up and running with the rewrite-maven-plugin, you may be interested in these topics:

* [Writing a Java Refactoring Recipe](../tutorials-and-guides/writing-a-java-refactoring-recipe.md)
* [Declarative Recipes](../tutorials-and-guides/declarative-recipes.md)
* [Dependency Management](../tutorials-and-guides/dependency-management.md)

















