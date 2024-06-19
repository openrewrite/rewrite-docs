# Migrate Log4j 1.x to Log4j 2.x

**org.openrewrite.java.logging.log4j.Log4j1ToLog4j2**

_Migrates Log4j 1.x to Log4j 2.x._

### Tags

* logging
* log4j

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/log4j.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.9.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.9.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.9.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.log4j.Log4j1ToLog4j2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.9.1")
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
        rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.9.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.logging.log4j.Log4j1ToLog4j2")
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
            <recipe>org.openrewrite.java.logging.log4j.Log4j1ToLog4j2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.9.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.log4j.Log4j1ToLog4j2 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe Log4j1ToLog4j2
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace any Lombok log annotations with target logging framework annotation](../../../java/logging/changelomboklogannotation.md)
  * loggingFramework: `Log4J2`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.apache.log4j.Logger getLogger(..)`
  * fullyQualifiedTargetTypeName: `org.apache.logging.log4j.LogManager`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.apache.log4j.Logger getRootLogger()`
  * fullyQualifiedTargetTypeName: `org.apache.logging.log4j.LogManager`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `org.apache.log4j`
  * newPackageName: `org.apache.logging.log4j`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.apache.logging.log4j.Category getEffectiveLevel()`
  * newMethodName: `getLevel`
* [Parameterize Log4j 2.x logging statements](../../../java/logging/log4j/parameterizedlogging.md)
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-api`
  * version: `2.x`
  * onlyIfUsing: `org.apache.log4j.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-core`
  * version: `2.x`
  * onlyIfUsing: `org.apache.log4j.*`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `log4j`
  * artifactId: `log4j`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `ch.qos.reload4j`
  * artifactId: `reload4j`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-api`
  * version: `2.x`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-core`
  * version: `2.x`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.slf4j`
  * oldArtifactId: `slf4j-log4j12`
  * newGroupId: `org.apache.logging.log4j`
  * newArtifactId: `log4j-slf4j-impl`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.slf4j`
  * oldArtifactId: `slf4j-reload4j`
  * newGroupId: `org.apache.logging.log4j`
  * newArtifactId: `log4j-slf4j-impl`
  * newVersion: `2.x`
* [Upgrade Log4j 2.x dependency version](../../../java/logging/log4j/upgradelog4j2dependencyversion.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.log4j.Log4j1ToLog4j2
displayName: Migrate Log4j 1.x to Log4j 2.x
description: Migrates Log4j 1.x to Log4j 2.x. 

tags:
  - logging
  - log4j
recipeList:
  - org.openrewrite.java.logging.ChangeLombokLogAnnotation:
      loggingFramework: Log4J2
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.log4j.Logger getLogger(..)
      fullyQualifiedTargetTypeName: org.apache.logging.log4j.LogManager
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.log4j.Logger getRootLogger()
      fullyQualifiedTargetTypeName: org.apache.logging.log4j.LogManager
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.log4j
      newPackageName: org.apache.logging.log4j
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.logging.log4j.Category getEffectiveLevel()
      newMethodName: getLevel
  - org.openrewrite.java.logging.log4j.ParameterizedLogging
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-api
      version: 2.x
      onlyIfUsing: org.apache.log4j.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-core
      version: 2.x
      onlyIfUsing: org.apache.log4j.*
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: log4j
      artifactId: log4j
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: ch.qos.reload4j
      artifactId: reload4j
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-api
      version: 2.x
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-core
      version: 2.x
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.slf4j
      oldArtifactId: slf4j-log4j12
      newGroupId: org.apache.logging.log4j
      newArtifactId: log4j-slf4j-impl
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.slf4j
      oldArtifactId: slf4j-reload4j
      newGroupId: org.apache.logging.log4j
      newArtifactId: log4j-slf4j-impl
      newVersion: 2.x
  - org.openrewrite.java.logging.log4j.UpgradeLog4J2DependencyVersion

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.log4j.Log4j1ToLog4j2)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Aaron Gershman, [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:tim@moderne.io), Adriano Machado, [Jonathan Schnéider](mailto:jkschneider@gmail.com)
