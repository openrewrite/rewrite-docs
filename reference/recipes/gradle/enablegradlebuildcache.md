# Enable Gradle build cache

**org.openrewrite.gradle.EnableGradleBuildCache**
_Enable the Gradle build cache. By enabling build cache the build outputs are stored externally and fetched from the cache when it is determined that those inputs have no changed, avoiding the expensive work of regenerating them. See the [Gradle Build Cache](https://docs.gradle.org/current/userguide/build_cache.html) for more information._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.35.0-SNAPSHOT/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.35.0-SNAPSHOT


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite:rewrite-gradle:7.35.0-SNAPSHOT in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.EnableGradleBuildCache")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.35.0-SNAPSHOT")
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
            <recipe>org.openrewrite.gradle.EnableGradleBuildCache</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.35.0-SNAPSHOT</version>
          </dependency>
        </dependencies>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite:rewrite-gradle:7.35.0-SNAPSHOT \
  -DactiveRecipes=org.openrewrite.gradle.EnableGradleBuildCache
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.gradle.EnableGradleBuildCache`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Gradle property](../gradle/addproperty.md)
  * key: `org.gradle.caching`
  * value: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.gradle.EnableGradleBuildCache
displayName: Enable Gradle build cache
description: Enable the Gradle build cache. By enabling build cache the build outputs are stored externally and fetched from the cache when it is determined that those inputs have no changed, avoiding the expensive work of regenerating them. See the [Gradle Build Cache](https://docs.gradle.org/current/userguide/build_cache.html) for more information.
recipeList:
  - org.openrewrite.gradle.AddProperty:
      key: org.gradle.caching
      value: true

```
{% endtab %}
{% endtabs %}
