# Migrate to Spring Boot 3.2

**org.openrewrite.java.spring.boot3.UpgradeSpringBoot\_3\_2**

_Migrate applications to the latest Spring Boot 3.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.1._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-32.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.13.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.13.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.13.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.13.2")
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
        rewrite("org.openrewrite.recipe:rewrite-spring:5.13.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2")
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
            <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.13.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeSpringBoot_3_2
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 3.1](../../../java/spring/boot3/upgradespringboot_3_1.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `3.2.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework`
  * artifactId: `*`
  * newVersion: `6.1.x`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `3.2.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `org.springframework.boot`
  * newVersion: `3.2.x`
* [Migrate to Spring Security 6.2](../../../java/spring/security6/upgradespringsecurity_6_2.md)
* [Migrate Spring Boot properties to 3.2](../../../java/spring/boot3/springbootproperties_3_2.md)
* [Enable Virtual Threads on Java 21](../../../java/spring/boot3/enablevirtualthreads.md)
* [Migrate to Spring Cloud 2023](../../../java/spring/cloud2023/upgradespringcloud_2023.md)
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.task.TaskSchedulerBuilder`
  * newFullyQualifiedTypeName: `org.springframework.boot.task.ThreadPoolTaskExecutorBuilder`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.task.TaskSchedulerCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.boot.task.ThreadPoolTaskSchedulerCustomizer`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.task.TaskExecutorBuilder`
  * newFullyQualifiedTypeName: `org.springframework.boot.task.ThreadPoolTaskExecutorBuilder`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.task.TaskExecutorCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.boot.task.ThreadPoolTaskExecutorCustomizer`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.transaction.PlatformTransactionManagerCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.transaction.TransactionManagerCustomizer`
* [Migrate to Hibernate 6.3.x](../../../hibernate/migratetohibernate63.md)
* [Relocate Launcher Classes](../../../java/spring/boot3/relocatelauncherclasses.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2
displayName: Migrate to Spring Boot 3.2
description: Migrate applications to the latest Spring Boot 3.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.1.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 3.2.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework
      artifactId: *
      newVersion: 6.1.x
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 3.2.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
      newVersion: 3.2.x
  - org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_2
  - org.openrewrite.java.spring.boot3.SpringBootProperties_3_2
  - org.openrewrite.java.spring.boot3.EnableVirtualThreads
  - org.openrewrite.java.spring.cloud2023.UpgradeSpringCloud_2023
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.task.TaskSchedulerBuilder
      newFullyQualifiedTypeName: org.springframework.boot.task.ThreadPoolTaskExecutorBuilder
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.task.TaskSchedulerCustomizer
      newFullyQualifiedTypeName: org.springframework.boot.task.ThreadPoolTaskSchedulerCustomizer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.task.TaskExecutorBuilder
      newFullyQualifiedTypeName: org.springframework.boot.task.ThreadPoolTaskExecutorBuilder
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.task.TaskExecutorCustomizer
      newFullyQualifiedTypeName: org.springframework.boot.task.ThreadPoolTaskExecutorCustomizer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.transaction.PlatformTransactionManagerCustomizer
      newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.transaction.TransactionManagerCustomizer
  - org.openrewrite.hibernate.MigrateToHibernate63
  - org.openrewrite.java.spring.boot3.RelocateLauncherClasses

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Alex Boyko](mailto:aboyko@vmware.com), [Tim te Beek](mailto:tim@moderne.io), Chuka Obinabo, [Jonathan Schneider](mailto:jkschneider@gmail.com), Patrick Way, Kun Li, [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Kyle Scully](mailto:scullykns@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Shannon Pamperl](mailto:shanman190@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Satvika Eda](mailto:satvika164.reddy@gmail.com), [Kun Li](mailto:kun@moderne.io), [Greg Adams](mailto:gadams@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), Simon Zilliken, [Kevin McCarpenter](mailto:kevin@moderne.io), [Greg Adams](mailto:greg@moderne.io), Fabian Krüger, [Johannes Jank](mailto:johannes.wengert@googlemail.com), Michel Gonzalez, Anu Ramamoorthy, [magicwerk](mailto:magicwerk@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), Evie Lau, [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), Adam Slaski, Aaron Gershman, nbruno, ranuradh, Daryl Robbins, Sandeep Nagaraj, [Michael Keppler](mailto:bananeweizen@gmx.de), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), [BoykoAlex](mailto:aboyko@pivotal.io), [Joan Viladrosa](mailto:joan@moderne.io), [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com), John Burns, Josh Soref, Aakarshit Uppal, [Amitoj Duggal](mailto:amitojduggal@gmail.com), [Scott Jungling](mailto:scott.jungling@gmail.com), Peter Puškár, [Mike Solomon](mailto:mikesol@hey.com)
