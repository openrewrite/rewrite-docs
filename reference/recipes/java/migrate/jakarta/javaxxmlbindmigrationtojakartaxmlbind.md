# Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`

**org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind**

_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* jaxb
* javax
* jakarta

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.16.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.16.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.16.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.16.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.14.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.16.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind")
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
        <version>5.32.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.16.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JavaxXmlBindMigrationToJakartaXmlBind
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `javax.xml.bind`
  * oldArtifactId: `jaxb-api`
  * newGroupId: `jakarta.xml.bind`
  * newArtifactId: `jakarta.xml.bind-api`
  * newVersion: `latest.release`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `com.sun.xml.bind`
  * oldArtifactId: `jaxb-impl`
  * newGroupId: `org.glassfish.jaxb`
  * newArtifactId: `jaxb-runtime`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.glassfish.jaxb`
  * artifactId: `jaxb-runtime`
  * newVersion: `latest.release`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `javax.xml.bind`
  * newPackageName: `jakarta.xml.bind`
  * recursive: `true`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `org.codehaus.mojo`
  * artifactId: `jaxb2-maven-plugin`
  * newVersion: `3.x`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `org.codehaus.mojo`
  * artifactId: `jaxb-maven-plugin`
  * newVersion: `4.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind
displayName: Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - jaxb
  - javax
  - jakarta
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: javax.xml.bind
      oldArtifactId: jaxb-api
      newGroupId: jakarta.xml.bind
      newArtifactId: jakarta.xml.bind-api
      newVersion: latest.release
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.sun.xml.bind
      oldArtifactId: jaxb-impl
      newGroupId: org.glassfish.jaxb
      newArtifactId: jaxb-runtime
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.glassfish.jaxb
      artifactId: jaxb-runtime
      newVersion: latest.release
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.xml.bind
      newPackageName: jakarta.xml.bind
      recursive: true
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.codehaus.mojo
      artifactId: jaxb2-maven-plugin
      newVersion: 3.x
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.codehaus.mojo
      artifactId: jaxb-maven-plugin
      newVersion: 4.x

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
