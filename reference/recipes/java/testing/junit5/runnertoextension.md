# JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`

**org.openrewrite.java.testing.junit5.RunnerToExtension**
_Replace runners with the JUnit Jupiter extension equivalent._

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.32.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.32.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | runners | The fully qualified class names of the JUnit 4 runners to replace. Sometimes several runners are replaced by a single JUnit Jupiter extension. |
| `String` | extension | The fully qualified class names of the JUnit Jupiter extension. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.RunnerToExtensionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RunnerToExtensionExample
displayName: JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith` example
recipeList:
  - org.openrewrite.java.testing.junit5.RunnerToExtension:
      runners: org.springframework.test.context.junit4.SpringRunner
      extension: org.springframework.test.context.junit.jupiter.SpringExtension
```
{% endcode %}

Now that `com.yourorg.RunnerToExtensionExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.32.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("com.yourorg.RunnerToExtensionExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.32.0")
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
        <version>4.38.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RunnerToExtensionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.32.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.RunnerToExtensionExample`
