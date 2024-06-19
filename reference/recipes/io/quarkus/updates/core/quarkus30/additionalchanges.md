# io.quarkus.updates.core.quarkus30.AdditionalChanges

**io.quarkus.updates.core.quarkus30.AdditionalChanges**


## Recipe source

[GitHub](https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus30.AdditionalChanges), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

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
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("io.quarkus.updates.core.quarkus30.AdditionalChanges")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
    }
    rewrite {
        activeRecipe("io.quarkus.updates.core.quarkus30.AdditionalChanges")
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
            <recipe>io.quarkus.updates.core.quarkus30.AdditionalChanges</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=io.quarkus.updates.core.quarkus30.AdditionalChanges 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AdditionalChanges
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.core.multipart.MultipartFormDataOutput`
  * newFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.multipart.MultipartFormDataOutput`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.core.multipart.PartItem`
  * newFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.multipart.PartItem`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.core.multipart.FormData.FormValue`
  * newFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.multipart.FormValue`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.test.junit.NativeImageTest`
  * newFullyQualifiedTypeName: `io.quarkus.test.junit.QuarkusIntegrationTest`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.test.junit.DisabledOnNativeImage`
  * newFullyQualifiedTypeName: `io.quarkus.test.junit.DisabledOnIntegrationTest`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.jboss.resteasy.reactive.MultipartForm`
  * newFullyQualifiedTypeName: `jakarta.ws.rs.BeanParam`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.smallrye.reactive.messaging.providers.connectors.InMemoryConnector`
  * newFullyQualifiedTypeName: `io.smallrye.reactive.messaging.memory.InMemoryConnector`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.hibernate.reactive.panache.common.runtime.ReactiveTransactional`
  * newFullyQualifiedTypeName: `io.quarkus.hibernate.reactive.panache.common.WithTransaction`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.arc.Priority`
  * newFullyQualifiedTypeName: `jakarta.annotation.Priority`
* [Change Maven plugin group and artifact ID](../../../../../maven/changeplugingroupidandartifactid.md)
  * oldGroupId: `io.quarkus`
  * oldArtifactId: `quarkus-bootstrap-maven-plugin`
  * newGroupId: `io.quarkus`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.quarkus.updates.core.quarkus30.AdditionalChanges
displayName: io.quarkus.updates.core.quarkus30.AdditionalChanges
description: null
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.core.multipart.MultipartFormDataOutput
      newFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.multipart.MultipartFormDataOutput
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.core.multipart.PartItem
      newFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.multipart.PartItem
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.core.multipart.FormData.FormValue
      newFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.multipart.FormValue
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.test.junit.NativeImageTest
      newFullyQualifiedTypeName: io.quarkus.test.junit.QuarkusIntegrationTest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.test.junit.DisabledOnNativeImage
      newFullyQualifiedTypeName: io.quarkus.test.junit.DisabledOnIntegrationTest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.resteasy.reactive.MultipartForm
      newFullyQualifiedTypeName: jakarta.ws.rs.BeanParam
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.smallrye.reactive.messaging.providers.connectors.InMemoryConnector
      newFullyQualifiedTypeName: io.smallrye.reactive.messaging.memory.InMemoryConnector
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.hibernate.reactive.panache.common.runtime.ReactiveTransactional
      newFullyQualifiedTypeName: io.quarkus.hibernate.reactive.panache.common.WithTransaction
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.arc.Priority
      newFullyQualifiedTypeName: jakarta.annotation.Priority
  - org.openrewrite.maven.ChangePluginGroupIdAndArtifactId:
      oldGroupId: io.quarkus
      oldArtifactId: quarkus-bootstrap-maven-plugin
      newGroupId: io.quarkus

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus30.AdditionalChanges)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
