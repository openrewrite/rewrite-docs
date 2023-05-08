# Find label

**org.openrewrite.kubernetes.search.FindMissingOrInvalidLabel**

_Find labels that optionally match a given regex._

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/search/FindMissingOrInvalidLabel.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.30.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.30.0

## Contributors
* [Jon Brisbin](jon@moderne.io)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | labelName | The name of the label to search for the existence of. |
| `String` | value | *Optional*. An optional regex that will validate values that match. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindMissingOrInvalidLabelExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

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
      fileMatcher: '**/pod-*.yml'
```
{% endcode %}

Now that `com.yourorg.FindMissingOrInvalidLabelExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.30.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("com.yourorg.FindMissingOrInvalidLabelExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.30.0")
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
            <recipe>com.yourorg.FindMissingOrInvalidLabelExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.30.0</version>
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.kubernetes.search.FindMissingOrInvalidLabel)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
