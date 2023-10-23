# Use modernized `java.util.concurrent` APIs

**org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs**

_The Java concurrent APIs were updated in Java 9 and those changes resulted in certain APIs being deprecated. This recipe update an application to replace the deprecated APIs with their modern alternatives._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-concurrent-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.1.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.1.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.1.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.1.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.4.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.1.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs")
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
        <version>5.9.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.1.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run <PATH> --recipe JavaConcurrentAPIs
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `AtomicBoolean#weakCompareAndSetPlain(boolean, boolean)`](../../../java/migrate/concurrent/migrateatomicbooleanweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicInteger#weakCompareAndSetPlain(int, int)`](../../../java/migrate/concurrent/migrateatomicintegerweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicIntegerArray#weakCompareAndSetPlain(int, int, int)`](../../../java/migrate/concurrent/migrateatomicintegerarrayweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicLong#weakCompareAndSetPlain(long, long)`](../../../java/migrate/concurrent/migrateatomiclongweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicLongArray#weakCompareAndSetPlain(int, long, long)`](../../../java/migrate/concurrent/migrateatomiclongarrayweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicReference#weakCompareAndSetPlain(T, T)`](../../../java/migrate/concurrent/migrateatomicreferenceweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicReferenceArray#weakCompareAndSetPlain(int, T, T)`](../../../java/migrate/concurrent/migrateatomicreferencearrayweakcompareandsettoweakcompareandsetplain.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs
displayName: Use modernized `java.util.concurrent` APIs
description: The Java concurrent APIs were updated in Java 9 and those changes resulted in certain APIs being deprecated. This recipe update an application to replace the deprecated APIs with their modern alternatives. 

recipeList:
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicBooleanWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicIntegerWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicIntegerArrayWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicLongWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicLongArrayWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicReferenceWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicReferenceArrayWeakCompareAndSetToWeakCompareAndSetPlain

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
