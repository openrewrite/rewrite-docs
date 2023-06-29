# Transform classes that extend a given Class to implement the given Interface instead

**org.openrewrite.java.spring.batch.ReplaceSupportClassWithItsInterface**

_As of Spring-Batch 5.0 Listeners has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/batch/ReplaceSupportClassWithItsInterface.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | fullyQualifiedClassName | A fully-qualified class name to be replaced. |
| `String` | fullyQualifiedInterfaceName | A fully-qualified Interface name to replace by. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|fullyQualifiedClassName|`org.springframework.batch.core.listener.ChunkListenerSupport`|
|fullyQualifiedInterfaceName|`org.springframework.batch.core.ChunkListener`|


{% tabs %}
{% tab title="MyClass.java" %}

###### Before
{% code title="MyClass.java" %}
```java
import org.springframework.batch.core.listener.ChunkListenerSupport;

public class MyClass extends ChunkListenerSupport {

}
```
{% endcode %}

###### After
{% code title="MyClass.java" %}
```java
import org.springframework.batch.core.ChunkListener;

public class MyClass implements ChunkListener {

}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MyClass.java
+++ MyClass.java
@@ -1,1 +1,1 @@
-import org.springframework.batch.core.listener.ChunkListenerSupport;
+import org.springframework.batch.core.ChunkListener;

@@ -3,1 +3,1 @@
import org.springframework.batch.core.listener.ChunkListenerSupport;

-public class MyClass extends ChunkListenerSupport {
+public class MyClass implements ChunkListener {

```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceSupportClassWithItsInterfaceExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceSupportClassWithItsInterfaceExample
displayName: Transform classes that extend a given Class to implement the given Interface instead example
recipeList:
  - org.openrewrite.java.spring.batch.ReplaceSupportClassWithItsInterface:
      fullyQualifiedClassName: org.springframework.batch.core.listener.JobExecutionListenerSupport
      fullyQualifiedInterfaceName: org.springframework.batch.core.JobExecutionListener
```
{% endcode %}

Now that `com.yourorg.ReplaceSupportClassWithItsInterfaceExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-spring:5.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceSupportClassWithItsInterfaceExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ReplaceSupportClassWithItsInterfaceExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
* [pdesprez](35764353+desprez@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.batch.ReplaceSupportClassWithItsInterface)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
