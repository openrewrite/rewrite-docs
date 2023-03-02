# Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement

**org.openrewrite.java.testing.junit5.RemoveObsoleteRunners**
_Some JUnit 4 `@RunWith` annotations do not require replacement with an equivalent JUnit Jupiter `@ExtendsWith` annotation. This can be used to remove those runners that either do not have a JUnit Jupiter equivalent or do not require a replacement as part of JUnit 4 to 5 migration._

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/RemoveObsoleteRunners.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.34.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.34.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | obsoleteRunners | The fully qualified class names of the JUnit 4 runners to be removed. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveObsoleteRunnersExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveObsoleteRunnersExample
displayName: Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement example
recipeList:
  - org.openrewrite.java.testing.junit5.RemoveObsoleteRunners:
      obsoleteRunners: org.junit.runners.JUnit4
```
{% endcode %}

Now that `com.yourorg.RemoveObsoleteRunnersExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.34.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.37.0")
}

rewrite {
    activeRecipe("com.yourorg.RemoveObsoleteRunnersExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.34.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.41.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RemoveObsoleteRunnersExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.34.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=com.yourorg.RemoveObsoleteRunnersExample`

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.junit5.RemoveObsoleteRunners)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
