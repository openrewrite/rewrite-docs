# Ensure liveness probe is configured

**org.openrewrite.kubernetes.MissingPodLivenessProbe**

_The kubelet uses liveness probes to know when to schedule restarts for containers. Restarting a container in a deadlock state can help to make the application more available, despite bugs._

### Tags

* kubernetes

## Source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/resources/META-INF/rewrite/kubernetes.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.0.3


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-kubernetes:2.0.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.MissingPodLivenessProbe")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:2.0.3")
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
        <version>5.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.MissingPodLivenessProbe</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>2.0.3</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-kubernetes:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.kubernetes.MissingPodLivenessProbe
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find missing configuration](../kubernetes/search/findresourcemissingconfiguration.md)
  * resourceKind: `Pod`
  * configurationPath: `$.spec.containers[:1].livenessProbe`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.kubernetes.MissingPodLivenessProbe
displayName: Ensure liveness probe is configured
description: The kubelet uses liveness probes to know when to schedule restarts for containers. Restarting a container in a deadlock state can help to make the application more available, despite bugs.
tags:
  - kubernetes
recipeList:
  - org.openrewrite.kubernetes.search.FindResourceMissingConfiguration:
      resourceKind: Pod
      configurationPath: $.spec.containers[:1].livenessProbe

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Jon Brisbin](mailto:jon@moderne.io)
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.MissingPodLivenessProbe)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
