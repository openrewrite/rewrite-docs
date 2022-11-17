# Use `Map#containsKey`

** org.openrewrite.java.cleanup.UseMapContainsKey**
_`map.keySet().contains(a)` can be simplified to `map.containsKey(a)`._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.32.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.32.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.UseMapContainsKey")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.UseMapContainsKey</recipe>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -DactiveRecipes=org.openrewrite.java.cleanup.UseMapContainsKey
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.cleanup.UseMapContainsKey`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Simplify a call chain](../../java/simplifymethodchain.md)
  * methodPatternChain: `[java.util.Map keySet(), java.util.Set contains(..)]`
  * newMethodName: `containsKey`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.cleanup.UseMapContainsKey
displayName: Use `Map#containsKey`
description: `map.keySet().contains(a)` can be simplified to `map.containsKey(a)`.
recipeList:
  - org.openrewrite.java.SimplifyMethodChain:
      methodPatternChain: [java.util.Map keySet(), java.util.Set contains(..)]
      newMethodName: containsKey

```
{% endtab %}
{% endtabs %}
