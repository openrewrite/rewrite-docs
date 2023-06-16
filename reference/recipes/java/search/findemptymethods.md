# Find methods with empty bodies

**org.openrewrite.java.search.FindEmptyMethods**

_Find methods with empty bodies and single public no arg constructors._

### Tags

* RSPEC-1186

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/FindEmptyMethods.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|matchOverrides|`true`|


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.Collection;

class Test implements Collection<String> {
    @Override
    public boolean isEmpty() {
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.Collection;

class Test implements Collection<String> {
    /*~~>*/@Override
    public boolean isEmpty() {
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
@@ -4,1 +4,1 @@
-    @Override
+    /*~~>*/@Override
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.search.FindEmptyMethods")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
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
            <recipe>org.openrewrite.java.search.FindEmptyMethods</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.search.FindEmptyMethods
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Patrick](patway99@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.search.FindEmptyMethods)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
