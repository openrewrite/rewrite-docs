# `PlexusStringUtils` Refaster recipes

**org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes**

_Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusStringUtils`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/plexus/PlexusStringUtilsRecipes.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.1.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.1.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.1.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.1.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.4.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.1.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes")
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
        <version>5.9.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.1.1</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run <PATH> --recipe PlexusStringUtilsRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace `StringUtils.abbreviate(String, int)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$abbreviaterecipe.md)
* [Replace `StringUtils.capitalise(String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$capitaliserecipe.md)
* [Replace `StringUtils.defaultString(Object)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$defaultstringrecipe.md)
* [Replace `StringUtils.defaultString(Object, String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$defaultstringfallbackrecipe.md)
* [Replace `StringUtils.deleteWhitespace(String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$deletewhitespacerecipe.md)
* [Replace `StringUtils.equalsIgnoreCase(String, String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$equalsignorecaserecipe.md)
* [Replace `StringUtils.equals(String, String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$equalsrecipe.md)
* [Replace `StringUtils.lowerCase(String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$lowercaserecipe.md)
* [Replace `StringUtils.replace(String, String, String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$replacerecipe.md)
* [Replace `StringUtils.reverse(String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$reverserecipe.md)
* [Replace `StringUtils.split(String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$splitrecipe.md)
* [Replace `StringUtils.strip(String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$striprecipe.md)
* [Replace `StringUtils.trim(String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$trimrecipe.md)
* [Replace `StringUtils.upperCase(String)` with JDK internals](../../../java/migrate/plexus/plexusstringutilsrecipes$uppercaserecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes
displayName: `PlexusStringUtils` Refaster recipes
description: Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusStringUtils`.
recipeList:
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$AbbreviateRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$CapitaliseRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DefaultStringRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DefaultStringFallbackRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DeleteWhitespaceRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$EqualsIgnoreCaseRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$EqualsRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$LowercaseRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$ReplaceRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$ReverseRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$SplitRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$StripRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$TrimRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$UppercaseRecipe

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
