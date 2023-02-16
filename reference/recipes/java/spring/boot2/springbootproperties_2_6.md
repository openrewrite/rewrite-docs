# Migrate Spring Boot properties to 2.6

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_6**
_Migrate properties found in `application.properties` and `application.yml`._

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-26.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.33.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.33.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.33.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.36.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_6")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.33.0")
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
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_6</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.33.0</version>
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
  -DactiveRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_6
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_6`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.mongodb.grid-fs-database`
  * newPropertyKey: `spring.data.mongodb.gridfs.database`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.mvc.locale`
  * newPropertyKey: `spring.web.locale`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.mvc.locale-resolver`
  * newPropertyKey: `spring.web.locale-resolver`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.add-mappings`
  * newPropertyKey: `spring.web.resources.add-mappings`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.cache-private`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.cache-private`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.cache-public`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.cache-public`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.max-age`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.max-age`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.must-revalidate`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.must-revalidate`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.no-cache`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.no-cache`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.no-store`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.no-store`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.no-transform`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.no-transform`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.proxy-revalidate`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.proxy-revalidate`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.s-max-age`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.s-max-age`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.stale-if-error`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.stale-if-error`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.stale-while-revalidate`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.stale-while-revalidate`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.period`
  * newPropertyKey: `spring.web.resources.cache.period`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache.use-last-modified`
  * newPropertyKey: `spring.web.resources.cache.use-last-modified`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.chain.cache`
  * newPropertyKey: `spring.web.resources.chain.cache`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.chain.compressed`
  * newPropertyKey: `spring.web.resources.chain.compressed`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.chain.enabled`
  * newPropertyKey: `spring.web.resources.chain.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.chain.strategy.content.enabled`
  * newPropertyKey: `spring.web.resources.chain.strategy.content.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.chain.strategy.content.paths`
  * newPropertyKey: `spring.web.resources.chain.strategy.content.paths`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.chain.strategy.fixed.enabled`
  * newPropertyKey: `spring.web.resources.chain.strategy.fixed.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.chain.strategy.fixed.paths`
  * newPropertyKey: `spring.web.resources.chain.strategy.fixed.paths`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.chain.strategy.fixed.version`
  * newPropertyKey: `spring.web.resources.chain.strategy.fixed.version`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.static-locations`
  * newPropertyKey: `spring.web.resources.static-locations`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.server.servlet.context-path`
  * newPropertyKey: `management.server.base-path`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_6
displayName: Migrate Spring Boot properties to 2.6
description: Migrate properties found in `application.properties` and `application.yml`.
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.grid-fs-database
      newPropertyKey: spring.data.mongodb.gridfs.database
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.mvc.locale
      newPropertyKey: spring.web.locale
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.mvc.locale-resolver
      newPropertyKey: spring.web.locale-resolver
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.add-mappings
      newPropertyKey: spring.web.resources.add-mappings
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.cache-private
      newPropertyKey: spring.web.resources.cache.cachecontrol.cache-private
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.cache-public
      newPropertyKey: spring.web.resources.cache.cachecontrol.cache-public
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.max-age
      newPropertyKey: spring.web.resources.cache.cachecontrol.max-age
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.must-revalidate
      newPropertyKey: spring.web.resources.cache.cachecontrol.must-revalidate
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.no-cache
      newPropertyKey: spring.web.resources.cache.cachecontrol.no-cache
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.no-store
      newPropertyKey: spring.web.resources.cache.cachecontrol.no-store
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.no-transform
      newPropertyKey: spring.web.resources.cache.cachecontrol.no-transform
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.proxy-revalidate
      newPropertyKey: spring.web.resources.cache.cachecontrol.proxy-revalidate
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.s-max-age
      newPropertyKey: spring.web.resources.cache.cachecontrol.s-max-age
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.stale-if-error
      newPropertyKey: spring.web.resources.cache.cachecontrol.stale-if-error
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.stale-while-revalidate
      newPropertyKey: spring.web.resources.cache.cachecontrol.stale-while-revalidate
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.period
      newPropertyKey: spring.web.resources.cache.period
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.use-last-modified
      newPropertyKey: spring.web.resources.cache.use-last-modified
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.cache
      newPropertyKey: spring.web.resources.chain.cache
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.compressed
      newPropertyKey: spring.web.resources.chain.compressed
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.enabled
      newPropertyKey: spring.web.resources.chain.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.strategy.content.enabled
      newPropertyKey: spring.web.resources.chain.strategy.content.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.strategy.content.paths
      newPropertyKey: spring.web.resources.chain.strategy.content.paths
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.strategy.fixed.enabled
      newPropertyKey: spring.web.resources.chain.strategy.fixed.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.strategy.fixed.paths
      newPropertyKey: spring.web.resources.chain.strategy.fixed.paths
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.strategy.fixed.version
      newPropertyKey: spring.web.resources.chain.strategy.fixed.version
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.static-locations
      newPropertyKey: spring.web.resources.static-locations
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.server.servlet.context-path
      newPropertyKey: management.server.base-path

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_6)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
