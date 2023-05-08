# Check for github-actions updates weekly

**org.openrewrite.github.DependabotCheckForGithubActionsUpdatesWeekly**

_Set dependabot to check for github-actions updates weekly._

### Tags

* github
* demo
* dependabot
* dependencies

## Source

[Github](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/resources/META-INF/rewrite/github.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/1.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 1.20.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-github-actions:1.20.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.github.DependabotCheckForGithubActionsUpdatesWeekly")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:1.20.0")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.github.DependabotCheckForGithubActionsUpdatesWeekly</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>1.20.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-github-actions:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.github.DependabotCheckForGithubActionsUpdatesWeekly
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change dependabot schedule interval](../github/changedependabotscheduleinterval.md)
  * packageEcosystem: `github-actions`
  * interval: `weekly`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.github.DependabotCheckForGithubActionsUpdatesWeekly
displayName: Check for github-actions updates weekly
description: Set dependabot to check for github-actions updates weekly.
tags:
  - github
  - demo
  - dependabot
  - dependencies
recipeList:
  - org.openrewrite.github.ChangeDependabotScheduleInterval:
      packageEcosystem: github-actions
      interval: weekly

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.github.DependabotCheckForGithubActionsUpdatesWeekly)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
