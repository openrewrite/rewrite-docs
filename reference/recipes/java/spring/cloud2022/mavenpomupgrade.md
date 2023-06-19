# Upgrade Maven POM to Spring Cloud 2022

**org.openrewrite.java.spring.cloud2022.MavenPomUpgrade**

_Upgrade Maven POM to Spring Cloud 2022 from prior 2021.x version._

### Tags

* spring
* cloud

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-cloud-2022.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.cloud2022.MavenPomUpgrade")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.cloud2022.MavenPomUpgrade</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.cloud2022.MavenPomUpgrade
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `*`
  * newVersion: `4.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-starter-parent`
  * newVersion: `2022.0.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-starter-feign`
  * newArtifactId: `spring-cloud-starter-openfeign`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-dependencies`
  * newVersion: `2022.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-starter-circuitbreaker-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-circuitbreaker-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-starter-kubernetes-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-kubernetes-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-starter-task-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-task-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.cloud2022.MavenPomUpgrade
displayName: Upgrade Maven POM to Spring Cloud 2022
description: Upgrade Maven POM to Spring Cloud 2022 from prior 2021.x version.
tags:
  - spring
  - cloud
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: *
      newVersion: 4.0.x
      overrideManagedVersion: false
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-starter-parent
      newVersion: 2022.0.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-starter-feign
      newArtifactId: spring-cloud-starter-openfeign
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-dependencies
      newVersion: 2022.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-starter-circuitbreaker-*
      newVersion: 3.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-circuitbreaker-*
      newVersion: 3.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-starter-kubernetes-*
      newVersion: 3.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-kubernetes-*
      newVersion: 3.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-starter-task-*
      newVersion: 3.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-task-*
      newVersion: 3.0.x
      overrideManagedVersion: false

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.cloud2022.MavenPomUpgrade)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
