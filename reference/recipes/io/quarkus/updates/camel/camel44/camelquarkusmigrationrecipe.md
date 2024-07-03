# Migrates `camel 4.0` application to `camel 4.4`

**io.quarkus.updates.camel.camel44.CamelQuarkusMigrationRecipe**

_Migrates `camel 4.0` quarkus application to `camel 4.4`._

## Recipe source

[GitHub](https://github.com/search?type=code&q=io.quarkus.updates.camel.camel44.CamelQuarkusMigrationRecipe), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.3")
}

rewrite {
    activeRecipe("io.quarkus.updates.camel.camel44.CamelQuarkusMigrationRecipe")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.2")
    }
    rewrite {
        activeRecipe("io.quarkus.updates.camel.camel44.CamelQuarkusMigrationRecipe")
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
        <version>5.35.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>io.quarkus.updates.camel.camel44.CamelQuarkusMigrationRecipe</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=io.quarkus.updates.camel.camel44.CamelQuarkusMigrationRecipe 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe CamelQuarkusMigrationRecipe
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Camel Core changes](../../../../../io/quarkus/updates/camel/camel41/camelcorerecipe.md)
* [Camel XMl DSL changes](../../../../../io/quarkus/updates/camel/camel41/xmldslrecipe.md)
* [Changes for creation of inlined beans.](../../../../../io/quarkus/updates/camel/camel41/yamldslrecipe.md)
* [Tag Enum has been deprecated](../../../../../io/quarkus/updates/camel/camel41/tracingtag.md)
* [The option camel.main.debugger has been renamed](../../../../../io/quarkus/updates/camel/camel42/camelmaindebugger.md)
* [Camel Core changes](../../../../../io/quarkus/updates/camel/camel42/camelsagarecipe.md)
* [MemoryStateRepository and FileStateRepository were moved to another package and library](../../../../../io/quarkus/updates/camel/camel43/staterepository.md)
* [Camel Resequence DSL changes](../../../../../io/quarkus/updates/camel/camel43/camelresequenceeipxmlrecipe.md)
* [Camel Core changes](../../../../../io/quarkus/updates/camel/camel43/camelthrottleeiprecipe.md)
* [The header name for the List metadata has changed](../../../../../io/quarkus/updates/camel/camel43/kafkametadata.md)
* [Camel Core changes](../../../../../io/quarkus/updates/camel/camel44/camelcorerecipe.md)
* [Replace 'camel.main.routeController' with `camel.routecontroller'](../../../../../io/quarkus/updates/camel/camel44/routecontrollerproperties.md)
* [Replace depricated DefaultJsonSchemaLoader with DefaultJsonUriSchemaLoader](../../../../../io/quarkus/updates/camel/camel44/defaultjsonschemaloader.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.quarkus.updates.camel.camel44.CamelQuarkusMigrationRecipe
displayName: Migrates `camel 4.0` application to `camel 4.4`
description: Migrates `camel 4.0` quarkus application to `camel 4.4`.
recipeList:
  - io.quarkus.updates.camel.camel41.CamelCoreRecipe
  - io.quarkus.updates.camel.camel41.XmlDslRecipe
  - io.quarkus.updates.camel.camel41.YamlDslRecipe
  - io.quarkus.updates.camel.camel41.TracingTag
  - io.quarkus.updates.camel.camel42.CamelMainDebugger
  - io.quarkus.updates.camel.camel42.CamelSagaRecipe
  - io.quarkus.updates.camel.camel43.StateRepository
  - io.quarkus.updates.camel.camel43.CamelResequenceEIPXmlRecipe
  - io.quarkus.updates.camel.camel43.CamelThrottleEIPRecipe
  - io.quarkus.updates.camel.camel43.KafkaMetadata
  - io.quarkus.updates.camel.camel44.CamelCoreRecipe
  - io.quarkus.updates.camel.camel44.RouteControllerProperties
  - io.quarkus.updates.camel.camel44.DefaultJsonSchemaLoader

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.quarkus.updates.camel.camel44.CamelQuarkusMigrationRecipe)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
