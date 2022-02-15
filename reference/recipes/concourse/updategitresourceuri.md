# Update git resource `source.uri` references

** org.openrewrite.concourse.UpdateGitResourceUri**
_Update git resource `source.uri` URI values to point to a new URI value._

## Source

[Github](https://github.com/openrewrite/rewrite-concourse), [Issue Tracker](https://github.com/openrewrite/rewrite-concourse/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-concourse/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-concourse
* version: 1.1.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldURIPattern | *Optional*. The old URI value to replace. This can be a regex pattern. If left empty, replace all occurrences. |
| `String` | newURI | New URI value to replace the old URI value with. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.UpdateGitResourceUriExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateGitResourceUriExample
displayName: Update git resource `source.uri` references example
recipeList:
  - org.openrewrite.concourse.UpdateGitResourceUri:
      oldURIPattern: https://github.com/openrewrite/rewrite
      newURI: git@gitlab.com:openrewrite/rewrite.git
      fileMatcher: **/pipeline*.yml
```
{% endcode %}

Now that `com.yourorg.UpdateGitResourceUriExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-concourse:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.10")
}

rewrite {
    activeRecipe("com.yourorg.UpdateGitResourceUriExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-concourse:1.1.0")
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
        <version>4.19.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpdateGitResourceUriExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-concourse</artifactId>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.UpdateGitResourceUriExample`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Concourse value](../concourse/changevalue.md)
  * keyPath: `$.resources[?(@.type == 'git')].source.uri`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.concourse.UpdateGitResourceUri
displayName: Update git resource `source.uri` references
description: Update git resource `source.uri` URI values to point to a new URI value.



recipeList:
  - org.openrewrite.concourse.ChangeValue:
      keyPath: $.resources[?(@.type == 'git')].source.uri

```
{% endtab %}
{% endtabs %}
