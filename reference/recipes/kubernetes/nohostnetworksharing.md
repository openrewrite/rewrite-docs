# No host network sharing

**org.openrewrite.kubernetes.NoHostNetworkSharing**

_When using the host network mode for a container, that container’s network stack is not isolated from the Docker host, so the container shares the host’s networking namespace and does not get its own IP-address allocation._

### Tags

* kubernetes

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/resources/META-INF/rewrite/kubernetes.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.0.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.0.6


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-kubernetes:2.0.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.0")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.NoHostNetworkSharing")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:2.0.6")
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
    dependencies { classpath("org.openrewrite:plugin:6.5.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-kubernetes:2.0.6")
    }
    rewrite {
        activeRecipe("org.openrewrite.kubernetes.NoHostNetworkSharing")
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
        <version>5.11.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.NoHostNetworkSharing</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>2.0.6</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-kubernetes:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.kubernetes.NoHostNetworkSharing
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe NoHostNetworkSharing
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * resourceKind: `Pod`
  * configurationPath: `$.spec`
  * value: `hostNetwork: false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.kubernetes.NoHostNetworkSharing
displayName: No host network sharing
description: When using the host network mode for a container, that container’s network stack is not isolated from the Docker host, so the container shares the host’s networking namespace and does not get its own IP-address allocation.
tags:
  - kubernetes
recipeList:
  - org.openrewrite.kubernetes.AddConfiguration:
      resourceKind: Pod
      configurationPath: $.spec
      value: hostNetwork: false

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* Tyler Van Gorder
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)
* [Jon Brisbin](mailto:jon@jbrisbin.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.NoHostNetworkSharing)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
