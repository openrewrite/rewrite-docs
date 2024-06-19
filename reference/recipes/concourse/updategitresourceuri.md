# Update git resource `source.uri` references

**org.openrewrite.concourse.UpdateGitResourceUri**

_Update git resource `source.uri` URI values to point to a new URI value._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-concourse/blob/main/src/main/java/org/openrewrite/concourse/UpdateGitResourceUri.java), [Issue Tracker](https://github.com/openrewrite/rewrite-concourse/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-concourse/2.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-concourse
* version: 2.5.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldURIPattern | *Optional*. The old URI value to replace. This can be a regex pattern. If left empty, replace all occurrences. | `https://github.com/openrewrite/rewrite` |
| `String` | newURI | New URI value to replace the old URI value with. | `git@gitlab.com:openrewrite/rewrite.git` |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. | `**/pipeline*.yml` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateGitResourceUriExample`.
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
      fileMatcher: '**/pipeline*.yml'
```
{% endcode %}

Now that `com.yourorg.UpdateGitResourceUriExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-concourse:2.5.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.UpdateGitResourceUriExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-concourse:2.5.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven" %}
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
            <recipe>com.yourorg.UpdateGitResourceUriExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-concourse</artifactId>
            <version>2.5.1</version>
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
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpdateGitResourceUriExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.concourse.UpdateGitResourceUri)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), Kun Li, [Aaron Gershman](mailto:aegershman@gmail.com)
