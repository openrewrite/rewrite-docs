# Replace calls to `Thread.run()` with `Thread.start()`

**org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart**
_`Thread.run()` should not be called directly._

### Tags

* RSPEC-1217

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.34.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.34.3


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
    activeRecipe("org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart")
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
            <recipe>org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart</recipe>
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
  -DactiveRecipes=org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `java.lang.Thread run()`
  * newMethodName: `start`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart
displayName: Replace calls to `Thread.run()` with `Thread.start()`
description: `Thread.run()` should not be called directly.
tags:
  - RSPEC-1217
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.lang.Thread run()
      newMethodName: start

```
{% endtab %}
{% endtabs %}
