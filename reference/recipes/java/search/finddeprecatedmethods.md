# Find uses of deprecated methods

** org.openrewrite.java.search.FindDeprecatedMethods**
_Find uses of deprecated methods in any API._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.16.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.16.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | methodPattern | *Optional*. A [method pattern](/reference/method-patterns) that is used to find matching method invocations. |
| `Boolean` | ignoreDeprecatedScopes | *Optional*. When a deprecated method is used in a deprecated method or class, ignore it. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.search.FindDeprecatedMethods")
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
        <version>4.15.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.search.FindDeprecatedMethods</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.search.FindDeprecatedMethods`
