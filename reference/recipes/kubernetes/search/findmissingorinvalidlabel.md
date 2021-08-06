# Find label

 **org.openrewrite.kubernetes.search.FindMissingOrInvalidLabel** _Find labels that optionally match a given regex._

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.4.0

## Options

| Type | Name | Description |
| :--- | :--- | :--- |
| `String` | labelName | The name of the label to search for the existence of. |
| `String` | value | _Optional_. An optional regex that will validate values that match. |

## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindMissingOrInvalidLabelExample`. Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindMissingOrInvalidLabelExample
displayName: Find label example
recipeList:
  - org.openrewrite.kubernetes.search.FindMissingOrInvalidLabel:
      labelName: mylabel
      value: value(.*)
```
{% endcode %}

Now that `com.yourorg.FindMissingOrInvalidLabelExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.5.0")
}

rewrite {
    activeRecipe("com.yourorg.FindMissingOrInvalidLabelExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.4.0")
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
        <version>4.8.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindMissingOrInvalidLabelExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.4.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.FindMissingOrInvalidLabelExample`

