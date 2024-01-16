# Maven parent insight

**org.openrewrite.maven.search.ParentPomInsight**

_Find Maven parents matching a `groupId` and `artifactId`._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/search/ParentPomInsight.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.13.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.13.4

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupIdPattern | Group glob pattern used to match dependencies. | `org.springframework.boot` |
| `String` | artifactIdPattern | Artifact glob pattern used to match dependencies. | `spring-boot-starter-*` |
| `String` | version | *Optional*. Match only dependencies with the specified version. Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used.All versions are searched by default. | `1.x` |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Maven parent POMs in use

_Projects, GAVs and relativePaths for Maven parent POMs in use._

| Column Name | Description |
| ----------- | ----------- |
| Project artifactId | The artifactId of the project that contains the parent. |
| Group | The first part of a parent coordinate `org.springframework.boot`. |
| Artifact | The second part of a parent coordinate `spring-boot-starter-*`. |
| Version | The resolved version. |
| Relative path | The relative path to the parent. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ParentPomInsightExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ParentPomInsightExample
displayName: Maven parent insight example
recipeList:
  - org.openrewrite.maven.search.ParentPomInsight:
      groupIdPattern: org.springframework.boot
      artifactIdPattern: spring-boot-starter-*
      version: 1.x
```
{% endcode %}

Now that `com.yourorg.ParentPomInsightExample` has been defined activate it in your build file:
{% tabs %}

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
        <version>5.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ParentPomInsightExample</recipe>
          </activeRecipes>
        </configuration>
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
mod run . --recipe ParentPomInsightExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.search.ParentPomInsight)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
