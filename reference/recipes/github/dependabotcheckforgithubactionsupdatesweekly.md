# Check for github-actions updates weekly

** org.openrewrite.github.DependabotCheckForGithubActionsUpdatesWeekly**
_Set dependabot to check for github-actions updates weekly._

### Tags

* github
* demo
* dependabot
* dependencies

## Source

[Github](https://github.com/openrewrite/rewrite-github-actions), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-github-actions/1.7.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 1.7.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-github-actions:1.7.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.22.2")
}

rewrite {
    activeRecipe("org.openrewrite.github.DependabotCheckForGithubActionsUpdatesWeekly")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:1.7.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.25.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.github.DependabotCheckForGithubActionsUpdatesWeekly</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>1.7.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.github.DependabotCheckForGithubActionsUpdatesWeekly`

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
