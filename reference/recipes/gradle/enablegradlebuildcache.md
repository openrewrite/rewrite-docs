# Enable Gradle build cache

**org.openrewrite.gradle.EnableGradleBuildCache**

_Enable the Gradle build cache. By enabling build cache the build outputs are stored externally and fetched from the cache when it is determined that those inputs have no changed, avoiding the expensive work of regenerating them. See the [Gradle Build Cache](https://docs.gradle.org/current/userguide/build_cache.html) for more information._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/resources/META-INF/rewrite/gradle.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/7.40.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.40.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.EnableGradleBuildCache")
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
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.gradle.EnableGradleBuildCache</recipe>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.gradle.EnableGradleBuildCache
```
{% endcode %}
{% endtab %}
{% endtabs %}


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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.EnableGradleBuildCache)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
