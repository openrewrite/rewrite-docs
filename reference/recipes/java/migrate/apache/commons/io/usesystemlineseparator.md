# Use `System.lineSeparator()`

** org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator**
_Migrate `IOUtils.LINE_SEPARATOR` to `System.lineSeparator()`._

### Tags

* apache

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.1.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.10")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.1.0")
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
            <recipe>org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.1.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change static field access to static method access](../../../../../java/changestaticfieldtomethod.md)
  * oldClassName: `org.apache.commons.io.IOUtils`
  * oldFieldName: `LINE_SEPARATOR`
  * newClassName: `java.lang.System`
  * newMethodName: `lineSeparator`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator
displayName: Use `System.lineSeparator()`
description: Migrate `IOUtils.LINE_SEPARATOR` to `System.lineSeparator()`.
tags:
  - apache
recipeList:
  - org.openrewrite.java.ChangeStaticFieldToMethod:
      oldClassName: org.apache.commons.io.IOUtils
      oldFieldName: LINE_SEPARATOR
      newClassName: java.lang.System
      newMethodName: lineSeparator

```
{% endtab %}
{% endtabs %}
