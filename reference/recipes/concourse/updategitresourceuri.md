# Update git resource `source.uri` references

**org.openrewrite.concourse.UpdateGitResourceUri**

_Update git resource `source.uri` URI values to point to a new URI value._

## Source

[GitHub](https://github.com/openrewrite/rewrite-concourse/blob/main/src/main/java/org/openrewrite/concourse/UpdateGitResourceUri.java), [Issue Tracker](https://github.com/openrewrite/rewrite-concourse/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-concourse/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-concourse
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldURIPattern | *Optional*. The old URI value to replace. This can be a regex pattern. If left empty, replace all occurrences. |
| `String` | newURI | New URI value to replace the old URI value with. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|oldURIPattern|`https://github.com/openrewrite/rewrite0`|
|newURI|`git@github.com:openrewrite/rewrite1.git`|
|fileMatcher|`null`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
resources:
- name: git-repo
  type: git
  source:
    uri: https://github.com/openrewrite/rewrite0
- name: custom
  type: custom-type
  source:
    uri: https://github.com/openrewrite/rewrite0
```
{% endcode %}

###### After
{% code title="null" %}
```yaml
resources:
- name: git-repo
  type: git
  source:
    uri: git@github.com:openrewrite/rewrite1.git
- name: custom
  type: custom-type
  source:
    uri: https://github.com/openrewrite/rewrite0
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -5,1 +5,1 @@
  type: git
  source:
-   uri: https://github.com/openrewrite/rewrite0
+   uri: git@github.com:openrewrite/rewrite1.git
- name: custom
```
{% endcode %}
{% endtab %}
{% endtabs %}


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

Now that `com.yourorg.UpdateGitResourceUriExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-concourse:2.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.UpdateGitResourceUriExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-concourse:2.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpdateGitResourceUriExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-concourse</artifactId>
            <version>2.0.1</version>
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
* [Change Concourse value](../concourse/changevalue.md)
  * keyPath: `$.resources[?(@.type == 'git')].source.uri`
  * oldValue: ``
  * newValue: ``
  * fileMatcher: ``

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.concourse.UpdateGitResourceUri
displayName: Update git resource `source.uri` references
description: Update git resource `source.uri` URI values to point to a new URI value.
oldURIPattern: 

newURI: 

fileMatcher: 

recipeList:
  - org.openrewrite.concourse.ChangeValue:
      keyPath: $.resources[?(@.type == 'git')].source.uri
      oldValue: 
      newValue: 
      fileMatcher: 

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.concourse.UpdateGitResourceUri)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
