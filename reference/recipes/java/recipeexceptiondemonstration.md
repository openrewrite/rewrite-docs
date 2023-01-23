# Demonstrate rendering of recipe exceptions

**org.openrewrite.java.RecipeExceptionDemonstration**
_Show how recipe exceptions are rendered in various forms of OpenRewrite tooling._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.34.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.34.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | throwOnMethodPattern | *Optional*. A [method pattern](/reference/method-patterns.md) that is used to find matching method declarations/invocations. |
| `Boolean` | throwOnVisitAll | *Optional*.  |
| `Boolean` | throwOnVisitAllVisitor | *Optional*.  |
| `Boolean` | throwOnApplicableTest | *Optional*.  |
| `Boolean` | throwOnApplicableTestVisitor | *Optional*.  |
| `Boolean` | throwOnSingleSourceApplicableTest | *Optional*.  |
| `Boolean` | throwOnSingleSourceApplicableTestVisitor | *Optional*.  |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.RecipeExceptionDemonstration")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.RecipeExceptionDemonstration</recipe>
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
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -DactiveRecipes=org.openrewrite.java.RecipeExceptionDemonstration
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.RecipeExceptionDemonstration`
