# io.quarkus.updates.core.quarkus32.ApplicationProperties

**io.quarkus.updates.core.quarkus32.ApplicationProperties**


## Recipe source

[GitHub](https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus32.ApplicationProperties), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.2/jar)

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
    activeRecipe("io.quarkus.updates.core.quarkus32.ApplicationProperties")
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
        activeRecipe("io.quarkus.updates.core.quarkus32.ApplicationProperties")
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
            <recipe>io.quarkus.updates.core.quarkus32.ApplicationProperties</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=io.quarkus.updates.core.quarkus32.ApplicationProperties 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ApplicationProperties
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change property key](../../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.transaction-manager.object-store-directory`
  * newPropertyKey: `quarkus.transaction-manager.object-store.directory`
* [Change property key](../../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.opentelemetry.enabled`
  * newPropertyKey: `quarkus.otel.enabled`
* [Change property key](../../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.enabled`
  * newPropertyKey: `quarkus.otel.traces.enabled`
* [Change property key](../../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.suppress-non-application-uris`
  * newPropertyKey: `quarkus.otel.traces.suppress-non-application-uris`
* [Change property key](../../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.include-static-resources`
  * newPropertyKey: `quarkus.otel.traces.include-static-resources`
* [Change property key](../../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.opentelemetry.propagators`
  * newPropertyKey: `quarkus.otel.propagators`
* [Change property key](../../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.resource-attributes`
  * newPropertyKey: `quarkus.otel.resource.attributes`
* [Change property key](../../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.exporter.otlp.enabled`
  * newPropertyKey: `quarkus.otel.exporter.otlp.enabled`
* [Change property key](../../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.exporter.otlp.headers`
  * newPropertyKey: `quarkus.otel.exporter.otlp.traces.headers`
* [Change property key](../../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.exporter.otlp.endpoint`
  * newPropertyKey: `quarkus.otel.exporter.otlp.traces.legacy-endpoint`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.quarkus.updates.core.quarkus32.ApplicationProperties
displayName: io.quarkus.updates.core.quarkus32.ApplicationProperties
description: null
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.transaction-manager.object-store-directory
      newPropertyKey: quarkus.transaction-manager.object-store.directory
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.enabled
      newPropertyKey: quarkus.otel.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.enabled
      newPropertyKey: quarkus.otel.traces.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.suppress-non-application-uris
      newPropertyKey: quarkus.otel.traces.suppress-non-application-uris
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.include-static-resources
      newPropertyKey: quarkus.otel.traces.include-static-resources
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.propagators
      newPropertyKey: quarkus.otel.propagators
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.resource-attributes
      newPropertyKey: quarkus.otel.resource.attributes
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.exporter.otlp.enabled
      newPropertyKey: quarkus.otel.exporter.otlp.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.exporter.otlp.headers
      newPropertyKey: quarkus.otel.exporter.otlp.traces.headers
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.exporter.otlp.endpoint
      newPropertyKey: quarkus.otel.exporter.otlp.traces.legacy-endpoint

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus32.ApplicationProperties)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
