# Find pinned resources by type

** org.openrewrite.concourse.search.FindPinnedResource**
_Find resources of a particular type that have pinned versions._

## Source

[Github](https://github.com/openrewrite/rewrite-concourse), [Issue Tracker](https://github.com/openrewrite/rewrite-concourse/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-concourse/1.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-concourse
* version: 1.8.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | resourceType | *Optional*. The resource type to search for. Leave empty to find all pins. |


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-concourse:1.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.25.0")
}

rewrite {
    activeRecipe("org.openrewrite.concourse.search.FindPinnedResource")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-concourse:1.8.0")
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
        <version>4.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.concourse.search.FindPinnedResource</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-concourse</artifactId>
            <version>1.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.concourse.search.FindPinnedResource`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find YAML entries](../../yaml/search/findkey.md)
  * key: `$.resources[?(@.type == '')].version`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.concourse.search.FindPinnedResource
displayName: Find pinned resources by type
description: Find resources of a particular type that have pinned versions.
resourceType: 

recipeList:
  - org.openrewrite.yaml.search.FindKey:
      key: $.resources[?(@.type == '')].version

```
{% endtab %}
{% endtabs %}
