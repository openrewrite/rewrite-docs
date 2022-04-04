# Change Concourse value

** org.openrewrite.concourse.ChangeValue**
_Change every value matching the key pattern._

## Source

[Github](https://github.com/openrewrite/rewrite-concourse), [Issue Tracker](https://github.com/openrewrite/rewrite-concourse/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-concourse/1.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-concourse
* version: 1.3.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | keyPath | The key to match and replace. |
| `String` | oldValue | *Optional*. Only change if the existing value matches. |
| `String` | newValue | New value to replace the old value with. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangeValueExample`.
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

Now that `com.yourorg.ChangeValueExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-concourse:1.3.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeValueExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-concourse:1.3.0")
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
        <version>4.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeValueExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-concourse</artifactId>
            <version>1.3.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.ChangeValueExample`
