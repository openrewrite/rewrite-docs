# Find vulnerable uses of Jackson `@JsonTypeInfo`

** org.openrewrite.java.security.search.FindVulnerableJacksonJsonTypeInfo**
_Identify where attackers can deserialize gadgets into a target field._

## Source

[Github](https://github.com/openrewrite/rewrite-java-security), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-java-security/1.8.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 1.8.2


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-java-security:1.8.2 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.search.FindVulnerableJacksonJsonTypeInfo")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:1.8.2")
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
        <version>4.22.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.search.FindVulnerableJacksonJsonTypeInfo</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>1.8.2</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.security.search.FindVulnerableJacksonJsonTypeInfo`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find annotations](../../../java/search/findannotations.md)
  * annotationPattern: `@com.fasterxml.jackson.annotation.JsonTypeInfo(use=com.fasterxml.jackson.annotation.JsonTypeInfo.Id.CLASS)`
* [Find annotations](../../../java/search/findannotations.md)
  * annotationPattern: `@com.fasterxml.jackson.annotation.JsonTypeInfo(use=com.fasterxml.jackson.annotation.JsonTypeInfo.Id.MINIMAL_CLASS)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.search.FindVulnerableJacksonJsonTypeInfo
displayName: Find vulnerable uses of Jackson `@JsonTypeInfo`
description: Identify where attackers can deserialize gadgets into a target field.
recipeList:
  - org.openrewrite.java.search.FindAnnotations:
      annotationPattern: @com.fasterxml.jackson.annotation.JsonTypeInfo(use=com.fasterxml.jackson.annotation.JsonTypeInfo.Id.CLASS)
  - org.openrewrite.java.search.FindAnnotations:
      annotationPattern: @com.fasterxml.jackson.annotation.JsonTypeInfo(use=com.fasterxml.jackson.annotation.JsonTypeInfo.Id.MINIMAL_CLASS)

```
{% endtab %}
{% endtabs %}
