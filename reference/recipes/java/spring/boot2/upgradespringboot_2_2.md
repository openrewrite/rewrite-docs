# Migrate to Spring Boot 2.2

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_2**

_Migrate applications to the latest Spring Boot 2.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.2._

### Tags

* spring
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-22.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

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
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 2.1](../../../java/spring/boot2/upgradespringboot_2_1.md)
* [Migrate to Spring Framework 5.2](../../../java/spring/framework/upgradespringframework_5_2.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.2.x`
  * overrideManagedVersion: `false`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.2.x`
* [Use `PingHealthIndicator`](../../../java/spring/boot2/migrateapplicationhealthindicatortopinghealthindicator.md)
* [Use `WebTestClientBuilderCustomizer`](../../../java/spring/boot2/migratewebtestclientbuildercustomizerpackagename.md)
* [Use `EnableConfigurationProperties.VALIDATOR_BEAN_NAME`](../../../java/spring/boot2/migrateconfigurationpropertiesbindingpostprocessorvalidatorbeanname.md)
* [Use `spring-boot.run.agents` configuration key in `spring-boot-maven-plugin`](../../../java/spring/boot2/springbootmavenpluginmigrateagenttoagents.md)
* [Migrate Spring Boot properties to 2.2](../../../java/spring/boot2/springbootproperties_2_2.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
displayName: Migrate to Spring Boot 2.2
description: Migrate applications to the latest Spring Boot 2.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.2.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.2.x
      overrideManagedVersion: false
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.2.x
  - org.openrewrite.java.spring.boot2.MigrateApplicationHealthIndicatorToPingHealthIndicator
  - org.openrewrite.java.spring.boot2.MigrateWebTestClientBuilderCustomizerPackageName
  - org.openrewrite.java.spring.boot2.MigrateConfigurationPropertiesBindingPostProcessorValidatorBeanName
  - org.openrewrite.java.spring.boot2.SpringBootMavenPluginMigrateAgentToAgents
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_2

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Nick McKinney](mckinneynichoals@gmail.com)
* [Patrick](patway99@gmail.com)
* [Patrick Way](pway99@users.noreply.github.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Kyle Scully](scullykns@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Kevin McCarpenter](kevin@moderne.io)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Kun Li](kun@moderne.io)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)
* [nbruno](nbruno@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
