# Find LST provenance

**org.openrewrite.FindLstProvenance**

_Produces a data table showing what versions of OpenRewrite/Moderne tooling was used to produce a given LST._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/FindLstProvenance.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/8.11.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 8.11.0

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### LST provenance

_Table showing which tools were used to produce LSTs._

| Column Name | Description |
| ----------- | ----------- |
| Build tool type | The type of tool which produced the LST. |
| Build tool version | The version of the build tool which produced the LST. |
| LST serializer version | The version of LST serializer which produced the LST. |
| Timestamp (epoch millis) | UTC timestamp describing when the LST was produced, in milliseconds since the unix epoch. |
| Timestamp | UTC timestamp describing when the LST was produced, in ISO-8601 format. e.g.: "2023‐08‐07T22:24:06+00:00 UTC+00:00" |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.10")
}

rewrite {
    activeRecipe("org.openrewrite.FindLstProvenance")
}

repositories {
    mavenCentral()
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
    dependencies { classpath("org.openrewrite:plugin:latest.release") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite:rewrite-java")
    }
    rewrite {
        activeRecipe("org.openrewrite.FindLstProvenance")
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
        <version>5.14.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.FindLstProvenance</recipe>
          </activeRecipes>
        </configuration>
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
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.FindLstProvenance
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe FindLstProvenance
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.FindLstProvenance)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Sam Snyder](mailto:sam@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com)
