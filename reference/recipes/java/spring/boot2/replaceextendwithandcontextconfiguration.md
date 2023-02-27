# Replace `@ExtendWith` and `@ContextConfiguration` with `@SpringJunitConfig`

**org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration**
_Replaces `@ExtendWith(SpringRunner.class)` and `@ContextConfiguration` with `@SpringJunitConfig`, preserving attributes on `@ContextConfiguration`, unless `@ContextConfiguration(loader = ...)` is used._

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/ReplaceExtendWithAndContextConfiguration.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.34.0-SNAPSHOT/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.34.0-SNAPSHOT


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.34.0-SNAPSHOT in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.36.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.34.0-SNAPSHOT")
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
        <version>4.40.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.34.0-SNAPSHOT</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:LATEST \
  -DactiveRecipes=org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove `@SpringExtension`](../../../java/spring/boot2/unnecessaryspringextension.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration
displayName: Replace `@ExtendWith` and `@ContextConfiguration` with `@SpringJunitConfig`
description: Replaces `@ExtendWith(SpringRunner.class)` and `@ContextConfiguration` with `@SpringJunitConfig`, preserving attributes on `@ContextConfiguration`, unless `@ContextConfiguration(loader = ...)` is used.
recipeList:
  - org.openrewrite.java.spring.boot2.UnnecessarySpringExtension

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.