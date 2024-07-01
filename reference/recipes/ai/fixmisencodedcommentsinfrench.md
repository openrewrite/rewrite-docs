# Fix mis-encoded French comments, javadocs and pom.xml comments

**io.moderne.ai.FixMisencodedCommentsInFrench**

_Fixes mis-encoded French comments in your code, javadocs and in your pom.xml files. Mis-encoded comments contain a ? or � character._

### Tags

* ai

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-ai-search/blob/main/src/main/resources/META-INF/rewrite/misencoded-french.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-ai-search/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-ai-search/0.14.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-ai-search
* version: 0.14.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-ai-search:0.14.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("io.moderne.ai.FixMisencodedCommentsInFrench")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-ai-search:0.14.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-ai-search:0.14.1")
    }
    rewrite {
        activeRecipe("io.moderne.ai.FixMisencodedCommentsInFrench")
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
        <version>5.34.1</version>
        <configuration>
          
          <activeRecipes>
            <recipe>io.moderne.ai.FixMisencodedCommentsInFrench</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-ai-search</artifactId>
            <version>0.14.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-ai-search:RELEASE -Drewrite.activeRecipes=io.moderne.ai.FixMisencodedCommentsInFrench 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe FixMisencodedCommentsInFrench
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Fix mis-encoded comments in French](../ai/spellcheckcommentsinfrench.md)
* [Fix mis-encoded comments in French in pom.xml files](../ai/spellcheckcommentsinfrenchpomxml.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.ai.FixMisencodedCommentsInFrench
displayName: Fix mis-encoded French comments, javadocs and pom.xml comments
description: Fixes mis-encoded French comments in your code, javadocs and in your pom.xml files. Mis-encoded comments contain a ? or � character.
tags:
  - ai
recipeList:
  - io.moderne.ai.SpellCheckCommentsInFrench
  - io.moderne.ai.SpellCheckCommentsInFrenchPomXml

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.moderne.ai.FixMisencodedCommentsInFrench)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[juju](mailto:justine.gehring@gmail.com), [Tim te Beek](mailto:tim@moderne.io), justine-gehring
