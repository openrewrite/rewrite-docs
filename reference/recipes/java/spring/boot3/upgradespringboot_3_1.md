# Migrate to Spring Boot 3.1

**org.openrewrite.java.spring.boot3.UpgradeSpringBoot\_3\_1**

_Upgrade to Spring Boot 3.1_

### Tags

* spring
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-31.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.7


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.7")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.7</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 3.0](../../../java/spring/boot3/upgradespringboot_3_0.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `3.1.x`
  * overrideManagedVersion: `false`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `3.1.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `org.springframework.boot`
  * newVersion: `3.1.x`
* [Migrate Spring Boot properties to 3.1](../../../java/spring/boot3/springbootproperties_3_1.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
displayName: Migrate to Spring Boot 3.1
description: Upgrade to Spring Boot 3.1
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 3.1.x
      overrideManagedVersion: false
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 3.1.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
      newVersion: 3.1.x
  - org.openrewrite.java.spring.boot3.SpringBootProperties_3_1

```
{% endtab %}
{% endtabs %}

## Contributors
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut@moderne.io)
* [Nick McKinney](mailto:mckinneynichoals@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* Patrick Way
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Tim te Beek](mailto:tim.te.beek@jdriven.com)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* Kun Li
* [Kyle Scully](mailto:scullykns@gmail.com)
* [Shannon Pamperl](mailto:shanman190@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Greg Adams](mailto:gadams@gmail.com)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Alex Boyko](mailto:aboyko@vmware.com)
* Yeikel
* [Greg Adams](mailto:greg@moderne.io)
* [Kevin McCarpenter](mailto:kevin@moderne.io)
* [Tim te Beek](mailto:tim@moderne.io)
* [Kun Li](mailto:kun@moderne.io)
* Fabian Krüger
* Aaron Gershman
* nbruno
* [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com)
* Sandeep Nagaraj
* [BoykoAlex](mailto:aboyko@pivotal.io)
* [Johannes Jank](mailto:johannes.wengert@googlemail.com)
* John Burns
* [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* [Scott Jungling](mailto:scott.jungling@gmail.com)
* Aakarshit Uppal
* Ties van de Ven
* Peter Puškár
* Josh Soref
* [Tim te Beek](mailto:timtebeek@gmail.com)
* [Joan Viladrosa](mailto:joan@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
