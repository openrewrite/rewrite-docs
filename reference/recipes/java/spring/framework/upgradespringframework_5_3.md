# Migrate to Spring Framework 5.3

**org.openrewrite.java.spring.framework.UpgradeSpringFramework\_5\_3**

_Migrate applications to the latest Spring Framework 5.3 release._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-framework-53.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.13.2/jar)

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
    activeRecipe("org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3")
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
        activeRecipe("org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3")
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
            <recipe>org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeSpringFramework_5_3
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Framework 5.2](../../../java/spring/framework/upgradespringframework_5_2.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework`
  * artifactId: `*`
  * newVersion: `5.3.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.security`
  * artifactId: `*`
  * newVersion: `5.3.x`
  * overrideManagedVersion: `false`
* [Use `ObjectUtils#isEmpty(Object)`](../../../java/spring/framework/useobjectutilsisempty.md)
* [Migrate `HandlerInterceptorAdapter` to `HandlerInterceptor`](../../../java/spring/framework/migratehandlerinterceptor.md)
* [Convert `InstantiationAwareBeanPostProcessorAdapter` to `SmartInstantiationAwareBeanPostProcessor`](../../../java/spring/framework/migrateinstantiationawarebeanpostprocessoradapter.md)
* [Use varargs equivalents for deprecated JdbcTemplate signatures](../../../java/spring/framework/jdbctemplateobjectarrayargtovarargs.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.hibernate`
  * artifactId: `hibernate-search-orm`
  * newVersion: `5.11.x`
  * overrideManagedVersion: `false`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `org.aspectj`
  * artifactId: `aspectjrt`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `aopalliance`
  * artifactId: `aopalliance`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `cglib`
  * artifactId: `cglib`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3
displayName: Migrate to Spring Framework 5.3
description: Migrate applications to the latest Spring Framework 5.3 release.
recipeList:
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework
      artifactId: *
      newVersion: 5.3.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.security
      artifactId: *
      newVersion: 5.3.x
      overrideManagedVersion: false
  - org.openrewrite.java.spring.framework.UseObjectUtilsIsEmpty
  - org.openrewrite.java.spring.framework.MigrateHandlerInterceptor
  - org.openrewrite.java.spring.framework.MigrateInstantiationAwareBeanPostProcessorAdapter
  - org.openrewrite.java.spring.framework.JdbcTemplateObjectArrayArgToVarArgs
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.hibernate
      artifactId: hibernate-search-orm
      newVersion: 5.11.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.aspectj
      artifactId: aspectjrt
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: aopalliance
      artifactId: aopalliance
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: cglib
      artifactId: cglib

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Patrick Way, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Patrick](mailto:patway99@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), Kun Li, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [traceyyoshima](mailto:tracey.yoshima@gmail.com)
