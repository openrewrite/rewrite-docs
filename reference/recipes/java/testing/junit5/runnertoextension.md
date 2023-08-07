# JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`

**org.openrewrite.java.testing.junit5.RunnerToExtension**

_Replace runners with the JUnit Jupiter extension equivalent._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/RunnerToExtension.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.9/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.9

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | runners | The fully qualified class names of the JUnit 4 runners to replace. Sometimes several runners are replaced by a single JUnit Jupiter extension. |
| `String` | extension | The fully qualified class names of the JUnit Jupiter extension. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RunnerToExtensionExample`.
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

Now that `com.yourorg.RunnerToExtensionExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:2.0.9 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("com.yourorg.RunnerToExtensionExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.9")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RunnerToExtensionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.9</version>
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

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Greg Adams](mailto:greg@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Scott Jungling](mailto:scott.jungling@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* Tyler Van Gorder
* Patrick Way
* [Tim te Beek](mailto:tim.te.beek@jdriven.com)
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* [Patrick](mailto:patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.RunnerToExtension)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
