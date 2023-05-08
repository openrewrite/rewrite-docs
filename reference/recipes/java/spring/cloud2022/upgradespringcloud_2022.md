# Migrate to Spring Cloud 2022

**org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud\_2022**

_Migrate applications to the latest Spring Cloud 2022 (Kilburn) release._

### Tags

* spring
* cloud

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-cloud-2022.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.36.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.36.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.36.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud_2022")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.36.0")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud_2022</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.36.0</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud_2022
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven POM to Spring Cloud 2022](../../../java/spring/cloud2022/mavenpomupgrade.md)
* [Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0](../../../java/spring/cloud2022/migratecloudsleuthtomicrometertracing.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud_2022
displayName: Migrate to Spring Cloud 2022
description: Migrate applications to the latest Spring Cloud 2022 (Kilburn) release.
tags:
  - spring
  - cloud
recipeList:
  - org.openrewrite.java.spring.cloud2022.MavenPomUpgrade
  - org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud_2022)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
