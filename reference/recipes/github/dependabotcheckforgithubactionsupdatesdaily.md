# Check for github-actions updates daily

** org.openrewrite.github.DependabotCheckForGithubActionsUpdatesDaily**
_Set dependabot to check for github-actions updates daily._

### Tags

* github
* demo
* dependabot
* dependencies

## Source

[Github](https://github.com/openrewrite/rewrite-github-actions), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-github-actions/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 1.1.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-github-actions:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.0")
}

rewrite {
    activeRecipe("org.openrewrite.github.DependabotCheckForGithubActionsUpdatesDaily")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:1.1.0")
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
        <version>4.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.github.DependabotCheckForGithubActionsUpdatesDaily</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>1.1.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.github.DependabotCheckForGithubActionsUpdatesDaily`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change dependabot schedule interval](../github/changedependabotscheduleinterval.md)
  * packageEcosystem: `github-actions`
  * interval: `daily`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.github.DependabotCheckForGithubActionsUpdatesDaily
displayName: Check for github-actions updates daily
description: Set dependabot to check for github-actions updates daily.
tags:
  - github
  - demo
  - dependabot
  - dependencies
recipeList:
  - org.openrewrite.github.ChangeDependabotScheduleInterval:
      packageEcosystem: github-actions
      interval: daily

```
{% endtab %}
{% endtabs %}
