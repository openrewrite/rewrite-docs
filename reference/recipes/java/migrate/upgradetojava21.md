# Migrate to Java 21

**org.openrewrite.java.migrate.UpgradeToJava21**

_This recipe will apply changes commonly needed when migrating to Java 21. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 21 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 21._

### Tags

* java21

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-21.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.10.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.10.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.10.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.9.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.UpgradeToJava21")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.10.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.9.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.10.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.UpgradeToJava21")
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
        <version>5.24.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.UpgradeToJava21</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.10.0</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.UpgradeToJava21
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeToJava21
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Java 17](../../java/migrate/upgradetojava17.md)
* [Change Maven Java version property values to 21](../../java/migrate/javaversion21.md)
* [Remove illegal semicolons](../../java/migrate/removeillegalsemicolons.md)
* [Replace `Thread.stop()` with `throw new UnsupportedOperationException()`](../../java/migrate/lang/threadstopunsupported.md)
* [`URLConstructorsToURI` Refaster recipes](../../java/migrate/net/urlconstructorstourirecipes.md)
* [Adopt `SequencedCollection`](../../java/migrate/util/sequencedcollection.md)
* [Prefer `Locale.of(..)` over `new Locale(..)`](../../java/migrate/util/uselocaleof.md)
* [Replace deprecated `Runtime#exec()` methods](../../staticanalysis/replacedeprecatedruntimeexecmethods.md)
* [Upgrade `actions/setup-java` `java-version`](../../github/setupjavaupgradejavaversion.md)
* [Update Gradle wrapper](../../gradle/updategradlewrapper.md)
  * version: `8.5`
  * addIfMissing: `false`
* [Upgrade Maven plugin version](../../maven/upgradepluginversion.md)
  * groupId: `org.jacoco`
  * artifactId: `jacoco-maven-plugin`
  * newVersion: `0.8.+`
* [Upgrade Maven plugin version](../../maven/upgradepluginversion.md)
  * groupId: `com.sonatype.clm`
  * artifactId: `clm-maven-plugin`
  * newVersion: `2.47.8-01`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion.md)
  * groupId: `com.google.guava`
  * artifactId: `guava`
  * newVersion: `29.0`
  * versionPattern: `-jre`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion.md)
  * groupId: `net.bytebuddy`
  * artifactId: `byte-buddy`
  * newVersion: `1.14.11`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.UpgradeToJava21
displayName: Migrate to Java 21
description: This recipe will apply changes commonly needed when migrating to Java 21. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 21 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 21.

tags:
  - java21
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava17
  - org.openrewrite.java.migrate.JavaVersion21
  - org.openrewrite.java.migrate.RemoveIllegalSemicolons
  - org.openrewrite.java.migrate.lang.ThreadStopUnsupported
  - org.openrewrite.java.migrate.net.URLConstructorsToURIRecipes
  - org.openrewrite.java.migrate.util.SequencedCollection
  - org.openrewrite.java.migrate.util.UseLocaleOf
  - org.openrewrite.staticanalysis.ReplaceDeprecatedRuntimeExecMethods
  - org.openrewrite.github.SetupJavaUpgradeJavaVersion:
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: 8.5
      addIfMissing: false
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.jacoco
      artifactId: jacoco-maven-plugin
      newVersion: 0.8.+
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: com.sonatype.clm
      artifactId: clm-maven-plugin
      newVersion: 2.47.8-01
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: com.google.guava
      artifactId: guava
      newVersion: 29.0
      versionPattern: -jre
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: net.bytebuddy
      artifactId: byte-buddy
      newVersion: 1.14.11

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava21)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Chuka Obinabo, [Tim te Beek](mailto:tim@moderne.io), [Sam Snyder](mailto:sam@moderne.io), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Satvika Eda](mailto:satvika164.reddy@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Knut Wannheden](mailto:knut@moderne.io), [traceyyoshima](mailto:tracey.yoshima@gmail.com), Tyler Van Gorder, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), Adam Slaski, Kun Li, Aaron Gershman, [Patrick](mailto:patway99@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Joan Viladrosa](mailto:joan@moderne.io), [Kun Li](mailto:kun@moderne.io), [Michael Keppler](mailto:bananeweizen@gmx.de), [Shannon Pamperl](mailto:shanman190@gmail.com), Aakarshit Uppal, [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), Josh Soref
