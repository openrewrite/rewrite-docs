# Reformat local variable names to camelCase

**org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase**

_Reformat local variable and method parameter names to camelCase to comply with Java naming convention. The recipe will not rename variables declared in for loop controls or catches with a single character. The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and `_` are removed (unless the name starts with one). If a special character is removed the next valid alphanumeric will be capitalized. Currently, does not support renaming members of classes. The recipe will not rename a variable if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank._

### Tags

* RSPEC-117

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RenameLocalVariablesToCamelCase.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.1.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.1.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.4")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.1.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.5.4") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.1.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase")
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
        <version>5.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.1.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe RenameLocalVariablesToCamelCase
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
* [Kun Li](mailto:kun@moderne.io), * [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), * [Knut Wannheden](mailto:knut@moderne.io), * [Joan Viladrosa](mailto:joan@moderne.io), * [Sam Snyder](mailto:sam@moderne.io), * [Aaron Gershman](mailto:aegershman@gmail.com), * [Peter Streef](mailto:peter@moderne.io), * [pstreef](mailto:p.streef@gmail.com), * [Tim te Beek](mailto:timtebeek@gmail.com)
