# Use modernized `java.util` APIs

**org.openrewrite.java.migrate.util.JavaUtilAPIs**

_Certain java util APIs have been introduced and are favored over previous APIs._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-util-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.18.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.18.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.18.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.util.JavaUtilAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.18.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.18.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.util.JavaUtilAPIs")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.util.JavaUtilAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.18.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.util.JavaUtilAPIs 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JavaUtilAPIs
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
* [Replace `Stream.collect(Collectors.toUnmodifiableList())` with `Stream.toList()`](../../../java/migrate/util/replacestreamcollectwithtolist.md)

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
  - org.openrewrite.java.migrate.util.ReplaceStreamCollectWithToList

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.util.JavaUtilAPIs)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Yeikel, [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Laurens-W](mailto:laurens.w@live.nl), [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), Michel Gonzalez, [Patrick](mailto:patway99@gmail.com), Tyler Van Gorder, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Knut Wannheden](mailto:knut.wannheden@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)
