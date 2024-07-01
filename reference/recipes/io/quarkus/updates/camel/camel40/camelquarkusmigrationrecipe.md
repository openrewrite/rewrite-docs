# Migrate `camel3` application to `camel4.`

**io.quarkus.updates.camel.camel40.CamelQuarkusMigrationRecipe**

_Migrate `camel3` quarkus application to `camel4` quarkus._

## Recipe source

[GitHub](https://github.com/search?type=code&q=io.quarkus.updates.camel.camel40.CamelQuarkusMigrationRecipe), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("io.quarkus.updates.camel.camel40.CamelQuarkusMigrationRecipe")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
    }
    rewrite {
        activeRecipe("io.quarkus.updates.camel.camel40.CamelQuarkusMigrationRecipe")
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
        <version>5.34.1</version>
        <configuration>
          
          <activeRecipes>
            <recipe>io.quarkus.updates.camel.camel40.CamelQuarkusMigrationRecipe</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=io.quarkus.updates.camel.camel40.CamelQuarkusMigrationRecipe 
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
* [Camel XMl DSL changes](../../../../../io/quarkus/updates/camel/camel40/xml/xmldslrecipe.md)
* [Camel XMl DSL Circuit Breaker changes](../../../../../io/quarkus/updates/camel/camel40/xml/circuitbreakerxmldslrecipe.md)
* [Camel Yaml changes regarding route-configuration children](../../../../../io/quarkus/updates/camel/camel40/yaml/camelquarkusyamlrouteconfigurationsequencerecipe.md)
* [Camel Yaml steps not allowed as route child](../../../../../io/quarkus/updates/camel/camel40/yaml/camelquarkusyamlstepsinfromrecipe.md)
* [Camel API changes](../../../../../io/quarkus/updates/camel/camel40/java/camelapisrecipe.md)
* [Replaces removed method camel EIP](../../../../../io/quarkus/updates/camel/camel40/java/cameleiprecipe.md)
* [Camel bean recipe](../../../../../io/quarkus/updates/camel/camel40/java/camelbeanrecipe.md)
* [Camel Http Extension changes](../../../../../io/quarkus/updates/camel/camel40/java/camelhttprecipe.md)
* [Replace context.getExtension(ExtendedCamelContext.class).get* with PluginHelper.get*(context)](../../../../../io/quarkus/updates/camel/camel40/usepluginhelperforcontextgetters.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.quarkus.updates.camel.camel40.CamelQuarkusMigrationRecipe
displayName: Migrate `camel3` application to `camel4.`
description: Migrate `camel3` quarkus application to `camel4` quarkus.
recipeList:
  - io.quarkus.updates.camel.camel40.xml.XmlDslRecipe
  - io.quarkus.updates.camel.camel40.xml.CircuitBreakerXmlDslRecipe
  - io.quarkus.updates.camel.camel40.yaml.CamelQuarkusYamlRouteConfigurationSequenceRecipe
  - io.quarkus.updates.camel.camel40.yaml.CamelQuarkusYamlStepsInFromRecipe
  - io.quarkus.updates.camel.camel40.java.CamelAPIsRecipe
  - io.quarkus.updates.camel.camel40.java.CamelEIPRecipe
  - io.quarkus.updates.camel.camel40.java.CamelBeanRecipe
  - io.quarkus.updates.camel.camel40.java.CamelHttpRecipe
  - io.quarkus.updates.camel.camel40.UsePluginHelperForContextGetters

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.quarkus.updates.camel.camel40.CamelQuarkusMigrationRecipe)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
