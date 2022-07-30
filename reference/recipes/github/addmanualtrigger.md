# Add manual workflow trigger

** org.openrewrite.github.AddManualTrigger**
_You can manually trigger workflow runs. To trigger specific workflows in a repository, use the `workflow_dispatch` event._

### Tags

* github

## Source

[Github](https://github.com/openrewrite/rewrite-github-actions), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-github-actions/1.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 1.8.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-github-actions:1.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.25.0")
}

rewrite {
    activeRecipe("org.openrewrite.github.AddManualTrigger")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:1.8.0")
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
        <version>4.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.github.AddManualTrigger</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>1.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.github.AddManualTrigger`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Merge YAML snippet](../yaml/mergeyaml.md)
  * key: `$.on`
  * yaml: `workflow_dispatch:`
  * acceptTheirs: `true`
  * fileMatcher: `.github/workflows/*.yml`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.github.AddManualTrigger
displayName: Add manual workflow trigger
description: You can manually trigger workflow runs. To trigger specific workflows in a repository, use the `workflow_dispatch` event.
tags:
  - github
recipeList:
  - org.openrewrite.yaml.MergeYaml:
      key: $.on
      yaml: workflow_dispatch:
      acceptTheirs: true
      fileMatcher: .github/workflows/*.yml

```
{% endtab %}
{% endtabs %}
