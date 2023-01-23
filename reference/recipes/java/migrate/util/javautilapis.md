# Use modernized `java.util` APIs

**org.openrewrite.java.migrate.util.JavaUtilAPIs**
_Certain java util APIs have been introduced and are favored over previous APIs._

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.16.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.16.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.16.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.34.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.util.JavaUtilAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.16.0")
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
        <version>4.39.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.util.JavaUtilAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.16.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.39.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.16.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.util.JavaUtilAPIs
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.util.JavaUtilAPIs`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Prefer `List.of(..)`](../../../java/migrate/util/migratecollectionssingletonlist.md)
* [Prefer `Map.of(..)`](../../../java/migrate/util/migratecollectionssingletonmap.md)
* [Prefer `Set.of(..)`](../../../java/migrate/util/migratecollectionssingletonset.md)
* [Prefer `List.of(..)`](../../../java/migrate/util/migratecollectionsunmodifiablelist.md)
* [Prefer `Set.of(..)`](../../../java/migrate/util/migratecollectionsunmodifiableset.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.util.JavaUtilAPIs
displayName: Use modernized `java.util` APIs
description: Certain java util APIs have been introduced and are favored over previous APIs.
recipeList:
  - org.openrewrite.java.migrate.util.MigrateCollectionsSingletonList
  - org.openrewrite.java.migrate.util.MigrateCollectionsSingletonMap
  - org.openrewrite.java.migrate.util.MigrateCollectionsSingletonSet
  - org.openrewrite.java.migrate.util.MigrateCollectionsUnmodifiableList
  - org.openrewrite.java.migrate.util.MigrateCollectionsUnmodifiableSet

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.util.JavaUtilAPIs)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
