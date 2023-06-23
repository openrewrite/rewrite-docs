# Does not include Maven dependency

**org.openrewrite.maven.search.DoesNotIncludeDependency**

_An applicability test which returns false if visiting a Maven pom which includes the specified dependency in the classpath of some scope. For compatibility with multimodule projects, this should most often be applied as a single-source applicability test._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/search/DoesNotIncludeDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. |
| `Boolean` | onlyDirect | *Optional*. Default false. If enabled, transitive dependencies will not be considered. |
| `String` | scope | *Optional*. Default any. If specified, only the requested scope's classpaths will be checked. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DoesNotIncludeDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DoesNotIncludeDependencyExample
displayName: Does not include Maven dependency example
recipeList:
  - org.openrewrite.maven.search.DoesNotIncludeDependency:
      groupId: com.google.guava
      artifactId: guava
      onlyDirect: true
      scope: compile
```
{% endcode %}

Now that `com.yourorg.DoesNotIncludeDependencyExample` has been defined activate it in your build file:
{% tabs %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.DoesNotIncludeDependencyExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.search.DoesNotIncludeDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
