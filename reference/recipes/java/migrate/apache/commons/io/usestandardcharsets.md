# Use `java.nio.charset.StandardCharsets`

** org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets**
_Migrate `org.apache.commons.io.Charsets` to `java.nio.charset.StandardCharsets`._

### Tags

* apache

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.0.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.0.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.0.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.8")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.0.0")
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
        <version>4.17.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.0.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.ISO_8859_1`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.ISO_8859_1`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.US_ASCII`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.US_ASCII`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.UTF_8`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.UTF_8`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.UTF_16`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.UTF_16`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.UTF_16BE`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.UTF_16BE`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.UTF_16LE`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.UTF_16LE`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets
displayName: Use `java.nio.charset.StandardCharsets`
description: Migrate `org.apache.commons.io.Charsets` to `java.nio.charset.StandardCharsets`.
tags:
  - apache
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.ISO_8859_1
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.ISO_8859_1
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.US_ASCII
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.US_ASCII
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.UTF_8
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.UTF_8
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.UTF_16
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.UTF_16
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.UTF_16BE
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.UTF_16BE
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.UTF_16LE
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.UTF_16LE

```
{% endtab %}
{% endtabs %}
