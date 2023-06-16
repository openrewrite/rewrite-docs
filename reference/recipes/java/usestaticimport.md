# Use static import

**org.openrewrite.java.UseStaticImport**

_Removes unnecessary receiver types from static method invocations. For example, `Collections.emptyList()` becomes `emptyList()`._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/UseStaticImport.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | methodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching method invocations. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|methodPattern|`org.junit.jupiter.api.Assertions assert*(..)`|


{% tabs %}
{% tab title="org/openrewrite/SampleTest.java" %}

###### Before
{% code title="org/openrewrite/SampleTest.java" %}
```java
package org.openrewrite;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

class SampleTest {
    @Test
    void sample() {
        Assertions.assertEquals(42, 21*2);
    }
}
```
{% endcode %}

###### After
{% code title="org/openrewrite/SampleTest.java" %}
```java
package org.openrewrite;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SampleTest {
    @Test
    void sample() {
        assertEquals(42, 21*2);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/openrewrite/SampleTest.java
+++ org/openrewrite/SampleTest.java
@@ -4,1 +4,0 @@
-import org.junit.jupiter.api.Assertions;
@@ -6,0 +5,2 @@
+import static org.junit.jupiter.api.Assertions.assertEquals;

@@ -9,1 +10,1 @@
-        Assertions.assertEquals(42, 21*2);
+        assertEquals(42, 21*2);
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UseStaticImportExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseStaticImportExample
displayName: Use static import example
recipeList:
  - org.openrewrite.java.UseStaticImport:
      methodPattern: java.util.Collections emptyList()
```
{% endcode %}

Now that `com.yourorg.UseStaticImportExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.UseStaticImportExample")
}

repositories {
    mavenCentral()
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UseStaticImportExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.UseStaticImport)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
