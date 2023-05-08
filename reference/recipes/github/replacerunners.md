# Replace runners for a job

**org.openrewrite.github.ReplaceRunners**

_Replaces the runners of a given job._

## Source

[Github](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/ReplaceRunners.java), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/1.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 1.20.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | jobName | The name of the job to update |
| `List` | runners | The new list of runners to set |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceRunnersExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceRunnersExample
displayName: Replace runners for a job example
recipeList:
  - org.openrewrite.github.ReplaceRunners:
      jobName: build
      runners: ubuntu-latest
```
{% endcode %}

Now that `com.yourorg.ReplaceRunnersExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-github-actions:1.20.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceRunnersExample")
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
{% tab title="Maven" %}
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
            <recipe>com.yourorg.ReplaceRunnersExample</recipe>
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
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change value](../yaml/changevalue.md)
  * oldKeyPath: `$.jobs..runs-on`
  * value: `[]`
  * fileMatcher: `.github/workflows/*.yml`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.github.ReplaceRunners
displayName: Replace runners for a job
description: Replaces the runners of a given job.
jobName: 

runners: []

recipeList:
  - org.openrewrite.yaml.ChangeValue:
      oldKeyPath: $.jobs..runs-on
      value: []
      fileMatcher: .github/workflows/*.yml

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.github.ReplaceRunners)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
