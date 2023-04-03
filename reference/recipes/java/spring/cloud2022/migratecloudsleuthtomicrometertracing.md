# Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0

**org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing**

_Spring Cloud Sleuth has been discontinued and only compatible with Spring Boot 2.x._

### Tags

* spring
* cloud
* tracing
* sleuth
* micrometer

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-cloud-2022.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.35.0-SNAPSHOT/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.35.0-SNAPSHOT


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.35.0-SNAPSHOT` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.38.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.35.0-SNAPSHOT")
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
        <version>4.42.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.35.0-SNAPSHOT</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-starter-sleuth`
  * newGroupId: `io.micrometer`
  * newArtifactId: `micrometer-tracing-bridge-brave`
  * newVersion: `1.0.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-sleuth-api`
  * newGroupId: `io.micrometer`
  * newArtifactId: `micrometer-tracing`
  * newVersion: `1.0.x`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-starter-sleuth`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-sleuth-*`
* [Remove Maven managed dependency](../../../maven/removemanageddependency.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-sleuth-*`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `org.springframework.cloud.sleuth`
  * newPackageName: `io.micrometer.tracing`
  * recursive: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing
displayName: Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0
description: Spring Cloud Sleuth has been discontinued and only compatible with Spring Boot 2.x.
tags:
  - spring
  - cloud
  - tracing
  - sleuth
  - micrometer
recipeList:
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-starter-sleuth
      newGroupId: io.micrometer
      newArtifactId: micrometer-tracing-bridge-brave
      newVersion: 1.0.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-sleuth-api
      newGroupId: io.micrometer
      newArtifactId: micrometer-tracing
      newVersion: 1.0.x
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-starter-sleuth
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-sleuth-*
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-sleuth-*
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.cloud.sleuth
      newPackageName: io.micrometer.tracing
      recursive: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
