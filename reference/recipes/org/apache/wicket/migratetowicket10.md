# Migrate to Wicket 10.x

**org.apache.wicket.MigrateToWicket10**

_Migrates Wicket 9.x to Wicket 10.x, as well as Java 17 and Jakarta._

## Recipe source

[GitHub](https://github.com/search?type=code&q=org.apache.wicket.MigrateToWicket10), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.3")
}

rewrite {
    activeRecipe("org.apache.wicket.MigrateToWicket10")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.2")
    }
    rewrite {
        activeRecipe("org.apache.wicket.MigrateToWicket10")
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
        <version>5.35.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.apache.wicket.MigrateToWicket10</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=org.apache.wicket.MigrateToWicket10 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MigrateToWicket10
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Java 17](../../../java/migrate/upgradetojava17.md)
* [Migrate to Jakarta EE 9](../../../java/migrate/jakarta/javaxmigrationtojakarta.md)
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.apache.wicket`
  * artifactId: `wicket-tester`
  * version: `10.x`
  * onlyIfUsing: `org.apache.wicket.util.tester.*`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.wicket.http2.markup.head.PushHeaderItem`
  * newFullyQualifiedTypeName: `org.apache.wicket.markup.head.http2.PushHeaderItem`
  * ignoreDefinition: `true`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.apache.wicket.experimental.wicket8`
  * artifactId: `wicket-http2-*`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.apache.wicket.experimental.wicket9`
  * artifactId: `wicket-http2-*`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.apache.wicket`
  * artifactId: `*`
  * newVersion: `10.x`
  * versionPattern: `-SNAPSHOT`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.apache.wicket.experimental.wicket9`
  * artifactId: `*`
  * newVersion: `10.x`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.apache.wicket.experimental.wicket9`
  * artifactId: `*`
  * newVersion: `10.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.apache.wicket.MigrateToWicket10
displayName: Migrate to Wicket 10.x
description: Migrates Wicket 9.x to Wicket 10.x, as well as Java 17 and Jakarta.
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava17
  - org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.wicket
      artifactId: wicket-tester
      version: 10.x
      onlyIfUsing: org.apache.wicket.util.tester.*
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.wicket.http2.markup.head.PushHeaderItem
      newFullyQualifiedTypeName: org.apache.wicket.markup.head.http2.PushHeaderItem
      ignoreDefinition: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.wicket.experimental.wicket8
      artifactId: wicket-http2-*
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.wicket.experimental.wicket9
      artifactId: wicket-http2-*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.apache.wicket
      artifactId: *
      newVersion: 10.x
      versionPattern: -SNAPSHOT
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.apache.wicket.experimental.wicket9
      artifactId: *
      newVersion: 10.x
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.apache.wicket.experimental.wicket9
      artifactId: *
      newVersion: 10.x

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.apache.wicket.MigrateToWicket10)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Chuka Obinabo, [Satvika Eda](mailto:satvika164.reddy@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), Anu Ramamoorthy, Tyler Van Gorder, Evie Lau, [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), Adam Slaski, Aaron Gershman, [Patrick](mailto:patway99@gmail.com), ranuradh, Daryl Robbins, [Tim te Beek](mailto:timtebeek@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Kun Li](mailto:kun@moderne.io), [Michael Keppler](mailto:bananeweizen@gmx.de), Aakarshit Uppal, eocantu, [Shannon Pamperl](mailto:shanman190@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), Josh Soref, Kun Li
