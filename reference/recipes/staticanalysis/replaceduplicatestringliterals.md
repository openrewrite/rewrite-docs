# Replace duplicate `String` literals

**org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals**

_Replaces `String` literals with a length of 5 or greater repeated a minimum of 3 times. Qualified `String` literals include final Strings, method invocations, and new class invocations. Adds a new `private static final String` or uses an existing equivalent class field. A new variable name will be generated based on the literal value if an existing field does not exist. The generated name will append a numeric value to the variable name if a name already exists in the compilation unit._

### Tags

* [RSPEC-1192](https://sonarsource.github.io/rspec/#/rspec/S1192)
* [RSPEC-1889](https://sonarsource.github.io/rspec/#/rspec/S1889)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ReplaceDuplicateStringLiterals.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.10.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.10.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `Boolean` | includeTestSources | *Optional*. Changes only apply to main by default. `includeTestSources` will apply the recipe to `test` source files. |  |


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.10.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.10.1")
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
        rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.10.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals")
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
            <recipe>org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.10.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE -Drewrite.activeRecipes=org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ReplaceDuplicateStringLiterals
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Kun Li](mailto:kun@moderne.io)
