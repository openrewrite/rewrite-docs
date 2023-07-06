# Use modernized `java.util` APIs

**org.openrewrite.java.migrate.util.JavaUtilAPIs**

_Certain java util APIs have been introduced and are favored over previous APIs._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-util-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.6


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.util.JavaUtilAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.6")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.util.JavaUtilAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.6</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.util.JavaUtilAPIs
```
{% endcode %}
{% endtab %}
{% endtabs %}

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

## Contributors
* Yeikel
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* Kun Li
* [Patrick](mailto:patway99@gmail.com)
* Tyler Van Gorder
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.util.JavaUtilAPIs)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
