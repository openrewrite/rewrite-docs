# Find privileged `resource_type` definitions.

** org.openrewrite.concourse.search.FindPrivilegedResourceType**
_By default, `resource_type` definitions are unprivileged._

## Source

[Github](https://github.com/openrewrite/rewrite-concourse), [Issue Tracker](https://github.com/openrewrite/rewrite-concourse/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-concourse/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-concourse
* version: 1.1.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-concourse:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.10")
}

rewrite {
    activeRecipe("org.openrewrite.concourse.search.FindPrivilegedResourceType")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-concourse:1.1.0")
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
        <version>4.19.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.concourse.search.FindPrivilegedResourceType</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-concourse</artifactId>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.concourse.search.FindPrivilegedResourceType`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find YAML entries](../../yaml/search/findkey.md)
  * key: `$.resource_types[*].privileged`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.concourse.search.FindPrivilegedResourceType
displayName: Find privileged `resource_type` definitions.
description: By default, `resource_type` definitions are unprivileged.
recipeList:
  - org.openrewrite.yaml.search.FindKey:
      key: $.resource_types[*].privileged

```
{% endtab %}
{% endtabs %}
