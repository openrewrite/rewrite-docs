# Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement

**org.openrewrite.java.testing.junit5.RemoveObsoleteRunners**

_Some JUnit 4 `@RunWith` annotations do not require replacement with an equivalent JUnit Jupiter `@ExtendsWith` annotation. This can be used to remove those runners that either do not have a JUnit Jupiter equivalent or do not require a replacement as part of JUnit 4 to 5 migration._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/RemoveObsoleteRunners.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.7

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | obsoleteRunners | The fully qualified class names of the JUnit 4 runners to be removed. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|obsoleteRunners|`List.of(
              "org.junit.runners.JUnit4",
              "org.junit.runners.BlockJUnit4ClassRunner"
            )`|


{% tabs %}
{% tab title="Foo.java" %}

###### Before
{% code title="Foo.java" %}
```java
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

@RunWith(JUnit4.class)
public class Foo {
}
```
{% endcode %}

###### After
{% code title="Foo.java" %}
```java
public class Foo {
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Foo.java
+++ Foo.java
@@ -1,4 +1,0 @@
-import org.junit.runner.RunWith;
-import org.junit.runners.JUnit4;
-
-@RunWith(JUnit4.class)
public class Foo {
```
{% endcode %}
{% endtab %}
{% endtabs %}


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

Now that `com.yourorg.RemoveObsoleteRunnersExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:2.0.7 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.18")
}

rewrite {
    activeRecipe("com.yourorg.RemoveObsoleteRunnersExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.7")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RemoveObsoleteRunnersExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.7</version>
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
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* Patrick Way


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.RemoveObsoleteRunners)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
