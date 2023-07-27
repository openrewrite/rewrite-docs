# Migrate to Spring Boot 2.6

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_6**

_Migrate applications to the latest Spring Boot 2.6 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.6._

### Tags

* spring
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-26.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade to Spring Boot 2.5](../../../java/spring/boot2/upgradespringboot_2_5.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.6.x`
  * overrideManagedVersion: `false`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.6.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `org.springframework.boot`
  * newVersion: `2.6.x`
* [Migrate Spring Boot properties to 2.6](../../../java/spring/boot2/springbootproperties_2_6.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-dependencies`
  * newVersion: `2021.0.X`
  * overrideManagedVersion: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
displayName: Migrate to Spring Boot 2.6
description: Migrate applications to the latest Spring Boot 2.6 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.6.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.6.x
      overrideManagedVersion: false
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.6.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
      newVersion: 2.6.x
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_6
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-dependencies
      newVersion: 2021.0.X
      overrideManagedVersion: false

```
{% endtab %}
{% endtabs %}

## Contributors
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Nick McKinney](mailto:mckinneynichoals@gmail.com)
* Patrick Way
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Greg Adams](mailto:gadams@gmail.com)
* [Tim te Beek](mailto:tim.te.beek@jdriven.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* Yeikel
* [Greg Adams](mailto:greg@moderne.io)
* [Kyle Scully](mailto:scullykns@gmail.com)
* [Kevin McCarpenter](mailto:kevin@moderne.io)
* Fabian Krüger
* Kun Li
* [Tim te Beek](mailto:tim@moderne.io)
* [Alex Boyko](mailto:aboyko@vmware.com)
* nbruno
* [Shannon Pamperl](mailto:shanman190@gmail.com)
* [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com)
* [Kun Li](mailto:kun@moderne.io)
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* [Scott Jungling](mailto:scott.jungling@gmail.com)
* Ties van de Ven
* Peter Puškár
* [Tim te Beek](mailto:timtebeek@gmail.com)
* [Joan Viladrosa](mailto:joan@moderne.io)
* Josh Soref


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
