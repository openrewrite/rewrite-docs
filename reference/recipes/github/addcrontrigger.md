# Add cron workflow trigger

** org.openrewrite.github.AddCronTrigger**
_The `schedule` [event](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events) allows you to trigger a workflow at a scheduled time._

## Source

[Github](https://github.com/openrewrite/rewrite-github-actions), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-github-actions/0.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 0.4.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | cron | Using the [POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddCronTriggerExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddCronTriggerExample
displayName: Add cron workflow trigger example
recipeList:
  - org.openrewrite.github.AddCronTrigger:
      cron: 0 18 * * *
```
{% endcode %}

Now that `com.yourorg.AddCronTriggerExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-github-actions:0.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("com.yourorg.AddCronTriggerExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:0.4.0")
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
        <version>4.15.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddCronTriggerExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>0.4.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.AddCronTriggerExample`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Merge YAML snippet](../yaml/mergeyaml.md)
  * key: `$.on`
  * yaml: `schedule:
  - cron: "0 18 * * *"`
  * acceptTheirs: `true`
  * fileMatcher: `.github/workflows/*.yml`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.github.AddCronTrigger
displayName: Add cron workflow trigger
description: The `schedule` [event](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events) allows you to trigger a workflow at a scheduled time.

recipeList:
  - org.openrewrite.yaml.MergeYaml:
      key: $.on
      yaml: schedule:
  - cron: "0 18 * * *"
      acceptTheirs: true
      fileMatcher: .github/workflows/*.yml

```
{% endtab %}
{% endtabs %}
