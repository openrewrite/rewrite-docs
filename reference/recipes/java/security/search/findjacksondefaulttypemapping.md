# Find Jackson default type mapping enablement

** org.openrewrite.java.security.search.FindJacksonDefaultTypeMapping**
_`ObjectMapper#enableTypeMapping(..)` can lead to vulnerable deserialization._

## Source

[Github](https://github.com/openrewrite/rewrite-java-security), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-java-security/1.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 1.6.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-java-security:1.6.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.search.FindJacksonDefaultTypeMapping")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:1.6.0")
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
        <version>4.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.search.FindJacksonDefaultTypeMapping</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>1.6.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.security.search.FindJacksonDefaultTypeMapping`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find method usages](../../../java/search/findmethods.md)
  * methodPattern: `com.fasterxml.jackson.databind.ObjectMapper enableDefaultTyping(..)`
  * matchOverrides: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.search.FindJacksonDefaultTypeMapping
displayName: Find Jackson default type mapping enablement
description: `ObjectMapper#enableTypeMapping(..)` can lead to vulnerable deserialization.
recipeList:
  - org.openrewrite.java.search.FindMethods:
      methodPattern: com.fasterxml.jackson.databind.ObjectMapper enableDefaultTyping(..)
      matchOverrides: true

```
{% endtab %}
{% endtabs %}
