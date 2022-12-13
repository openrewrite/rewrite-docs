# Find uses of deprecated classes, methods, and fields

**org.openrewrite.java.search.FindDeprecatedUses**
_Find deprecated uses of methods, fields, and types. Optionally ignore those classes that are inside deprecated scopes._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.34.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.34.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | typePattern | *Optional*. A type pattern that is used to find deprecations from certain types. |
| `Boolean` | matchInherited | *Optional*. When enabled, find types that inherit from a deprecated type. |
| `Boolean` | ignoreDeprecatedScopes | *Optional*. When a deprecated type is used in a deprecated method or class, ignore it. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.search.FindDeprecatedUses")
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
        <version>4.38.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.search.FindDeprecatedUses</recipe>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.0:run \
  -DactiveRecipes=org.openrewrite.java.search.FindDeprecatedUses
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.search.FindDeprecatedUses`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find uses of deprecated methods](../../java/search/finddeprecatedmethods.md)
  * methodPattern: ` *(..)`
* [Find uses of deprecated classes](../../java/search/finddeprecatedclasses.md)
  * typePattern: ``
* [Find uses of deprecated fields](../../java/search/finddeprecatedfields.md)
  * typePattern: ``

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.search.FindDeprecatedUses
displayName: Find uses of deprecated classes, methods, and fields
description: Find deprecated uses of methods, fields, and types. Optionally ignore those classes that are inside deprecated scopes.
typePattern: 



recipeList:
  - org.openrewrite.java.search.FindDeprecatedMethods:
      methodPattern:  *(..)
  - org.openrewrite.java.search.FindDeprecatedClasses:
      typePattern: 
  - org.openrewrite.java.search.FindDeprecatedFields:
      typePattern: 

```
{% endtab %}
{% endtabs %}
