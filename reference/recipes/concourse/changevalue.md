# Change Concourse value

**org.openrewrite.concourse.ChangeValue**

_Change every value matching the key pattern._

## Source

[GitHub](https://github.com/openrewrite/rewrite-concourse/blob/main/src/main/java/org/openrewrite/concourse/ChangeValue.java), [Issue Tracker](https://github.com/openrewrite/rewrite-concourse/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-concourse/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-concourse
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | keyPath | The key to match and replace. |
| `String` | oldValue | *Optional*. Only change if the existing value matches. |
| `String` | newValue | New value to replace the old value with. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|keyPath|`$.resources[?(@.type == 'git')].source.uri`|
|oldValue|`https://github.com/openrewrite/rewrite0`|
|newValue|`git@github.com:openrewrite/rewrite1.git`|
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
-    uri: https://github.com/openrewrite/rewrite0
+    uri: git@github.com:openrewrite/rewrite1.git
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeValueExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeValueExample
displayName: Change Concourse value example
recipeList:
  - org.openrewrite.concourse.ChangeValue:
      keyPath: $.resources[?(@.type == 'git')].source.uri
      oldValue: null
      newValue: null
      fileMatcher: '**/pipeline*.yml'
```
{% endcode %}

Now that `com.yourorg.ChangeValueExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-concourse:2.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.ChangeValueExample")
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
            <recipe>com.yourorg.ChangeValueExample</recipe>
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.concourse.ChangeValue)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
