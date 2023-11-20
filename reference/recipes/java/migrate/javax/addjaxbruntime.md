# Use latest JAXB API and runtime for Jakarta EE 8

**org.openrewrite.java.migrate.javax.AddJaxbRuntime**

_Update build files to use the latest JAXB runtime from Jakarta EE 8 to maintain compatibility with Java version 11 or greater. The recipe will add a JAXB run-time, in Gradle `compileOnly`+`testImplementation` and Maven `provided` scope, to any project that has a transitive dependency on the JAXB API. **The resulting dependencies still use the**** ****`javax`**** ****namespace, despite the move to the Jakarta artifact**._

### Tags

* jaxb
* glassfish
* javax
* javaee
* java11
* jakarta

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/javax/AddJaxbRuntime.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.3.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Options

| Type     | Name    | Description                                                                                                                      |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `String` | runtime | Which implementation of the JAXB run-time that will be added to maven projects that have transitive dependencies on the JAXB API |

## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddJaxbRuntimeExample`. Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddJaxbRuntimeExample
displayName: Use latest JAXB API and runtime for Jakarta EE 8 example
recipeList:
  - org.openrewrite.java.migrate.javax.AddJaxbRuntime:
      runtime: glassfish
```
{% endcode %}

Now that `com.yourorg.AddJaxbRuntimeExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-migrate-java:2.3.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:

{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.4")
}

rewrite {
    activeRecipe("com.yourorg.AddJaxbRuntimeExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.3.0")
}
```
{% endcode %}

2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Maven" %}
1. Add the following to your `pom.xml` file:

{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddJaxbRuntimeExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.3.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}

2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AddJaxbRuntime
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use latest JAXB API and runtime for Jakarta EE 8](addjaxbruntime$addjaxbruntimegradle.md)
* [Use latest JAXB API and runtime for Jakarta EE 8](addjaxbruntime$addjaxbruntimemaven.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.AddJaxbRuntime
displayName: Use latest JAXB API and runtime for Jakarta EE 8
description: Update build files to use the latest JAXB runtime from Jakarta EE 8 to maintain compatibility with Java version 11 or greater. The recipe will add a JAXB run-time, in Gradle `compileOnly`+`testImplementation` and Maven `provided` scope, to any project that has a transitive dependency on the JAXB API. **The resulting dependencies still use the `javax` namespace, despite the move to the Jakarta artifact**.
tags:
  - jaxb
  - glassfish
  - javax
  - javaee
  - java11
  - jakarta

recipeList:
  - org.openrewrite.java.migrate.javax.AddJaxbRuntime$AddJaxbRuntimeGradle
  - org.openrewrite.java.migrate.javax.AddJaxbRuntime$AddJaxbRuntimeMaven

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](../../../../../.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.AddJaxbRuntime)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors

[Shannon Pamperl](mailto:shanman190@gmail.com), Tyler Van Gorder, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
