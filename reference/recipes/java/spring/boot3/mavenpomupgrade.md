# Upgrade Maven POM to Spring Boot 3.0 from 2.x

**org.openrewrite.java.spring.boot3.MavenPomUpgrade**

_Upgrade Maven POM to Spring Boot 3.0 from prior 2.x version._

### Tags

* spring
* boot

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-30.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.36.0/jar)

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
    activeRecipe("org.openrewrite.java.spring.boot3.MavenPomUpgrade")
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
            <recipe>org.openrewrite.java.spring.boot3.MavenPomUpgrade</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.MavenPomUpgrade
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Maven Java version property values to 17](../../../java/migrate/javaversion17.md)
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `true`
  * retainVersions: `[org.thymeleaf:thymeleaf-spring5, org.thymeleaf.extras:thymeleaf-extras-springsecurity5]`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `3.0.x`
  * retainVersions: `[org.thymeleaf:thymeleaf-spring5, org.thymeleaf.extras:thymeleaf-extras-springsecurity5]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.MavenPomUpgrade
displayName: Upgrade Maven POM to Spring Boot 3.0 from 2.x
description: Upgrade Maven POM to Spring Boot 3.0 from prior 2.x version.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.migrate.JavaVersion17
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 3.0.x
      overrideManagedVersion: true
      retainVersions: [org.thymeleaf:thymeleaf-spring5, org.thymeleaf.extras:thymeleaf-extras-springsecurity5]
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 3.0.x
      retainVersions: [org.thymeleaf:thymeleaf-spring5, org.thymeleaf.extras:thymeleaf-extras-springsecurity5]

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot3.MavenPomUpgrade)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
