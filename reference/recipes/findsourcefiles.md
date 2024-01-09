# Find files

**org.openrewrite.FindSourceFiles**

_Find files by source path._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/FindSourceFiles.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/8.13.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 8.13.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | filePattern | *Optional*. A glob expression representing a file path to search for (relative to the project root). Blank/null matches all. | `.github/workflows/*.yml` |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Source files that matched

_Source files that matched some criteria._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. |
| LST type | The LST model type that the file is parsed as. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.4")
}

rewrite {
    activeRecipe("org.openrewrite.FindSourceFiles")
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
        activeRecipe("org.openrewrite.FindSourceFiles")
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
        <version>5.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.FindSourceFiles</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.FindSourceFiles
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe FindSourceFiles
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.FindSourceFiles)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Shannon Pamperl](mailto:shanman190@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Sam Snyder](mailto:sam@moderne.io)
