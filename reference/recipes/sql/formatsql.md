# Format SQL in String Text Blocks

**org.openrewrite.sql.FormatSql**

_Checks whether a text block may contain SQL, and if so, formats the text accordingly._

## Source

[GitHub](https://github.com/openrewrite/rewrite-sql/blob/main/src/main/java/org/openrewrite/sql/FormatSql.java), [Issue Tracker](https://github.com/openrewrite/rewrite-sql/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-sql/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-sql
* version: 1.0.4

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | sqlDialect | *Optional*. Check out https://github.com/vertical-blank/sql-formatter#dialect for supported dialects. |
| `String` | indent | *Optional*. Defaults to two spaces. |
| `Integer` | maxColumnLength | *Optional*. Defaults to 50. |
| `Boolean` | uppercase | *Optional*. Defaults to false (not safe to use when SQL dialect has case-sensitive identifiers). |


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-sql:1.0.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.1")
}

rewrite {
    activeRecipe("org.openrewrite.sql.FormatSql")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-sql:1.0.4")
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
    dependencies { classpath("org.openrewrite:plugin:6.4.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-sql:1.0.4")
    }
    rewrite {
        activeRecipe("org.openrewrite.sql.FormatSql")
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
            <recipe>org.openrewrite.sql.FormatSql</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-sql</artifactId>
            <version>1.0.4</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-sql:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.sql.FormatSql
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run <PATH> --recipe FormatSql
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Mahatma_Fatal_Error


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.sql.FormatSql)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
