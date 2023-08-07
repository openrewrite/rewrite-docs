# Parameterize logging statements

**org.openrewrite.java.logging.ParameterizedLogging**

_Transform logging statements using concatenation for messages and variables into a parameterized format. For example, `logger.info("hi " + userName)` becomes `logger.info("hi {}", userName)`._

### Tags

* RSPEC-2629
* RSPEC-3457

## Source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/ParameterizedLogging.java), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.0.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | methodPattern | A method used to find matching statements to parameterize. |
| `Boolean` | removeToString | *Optional*. Optionally remove `toString(`) method invocations from Object parameters. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|methodPattern|`org.slf4j.Logger info(..)`|
|removeToString|`false`|


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.slf4j.Logger;

class Test {
    static void method(Logger logger, String name) {
        logger.info("Hello " + name + ", nice to meet you " + name);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.slf4j.Logger;

class Test {
    static void method(Logger logger, String name) {
        logger.info("Hello {}, nice to meet you {}", name, name);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -5,1 +5,1 @@
class Test {
    static void method(Logger logger, String name) {
-       logger.info("Hello " + name + ", nice to meet you " + name);
+       logger.info("Hello {}, nice to meet you {}", name, name);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ParameterizedLoggingExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ParameterizedLoggingExample
displayName: Parameterize logging statements example
recipeList:
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger info(..)
      removeToString: null
```
{% endcode %}

Now that `com.yourorg.ParameterizedLoggingExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-logging-frameworks:2.0.2 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("com.yourorg.ParameterizedLoggingExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.0.2")
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
            <recipe>com.yourorg.ParameterizedLoggingExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.0.2</version>
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
* Aaron Gershman
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.ParameterizedLogging)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
