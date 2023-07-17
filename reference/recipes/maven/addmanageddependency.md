# Add managed Maven dependency

**org.openrewrite.maven.AddManagedDependency**

_Add a managed Maven dependency to a `pom.xml` file._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddManagedDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.10/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.10

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.apache.logging.log4j:ARTIFACT_ID:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.apache.logging.log4j:log4j-bom:VERSION'. |
| `String` | version | An exact version number or node-style semver selector used to select the version number. |
| `String` | scope | *Optional*. An optional scope to use for the dependency management tag. |
| `String` | type | *Optional*. An optional type to use for the dependency management tag. |
| `String` | classifier | *Optional*. An optional classifier to use for the dependency management tag |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select 29.0-jre |
| `Boolean` | releasesOnly | *Optional*. Whether to exclude snapshots from consideration when using a semver selector |
| `String` | onlyIfUsing | *Optional*. Only add managed dependencies to projects having a dependency matching the expression. |
| `Boolean` | addToRootPom | *Optional*. Add to the root pom where root is the eldest parent of the pom within the source set. |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Maven metadata failures

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddManagedDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddManagedDependencyExample
displayName: Add managed Maven dependency example
recipeList:
  - org.openrewrite.maven.AddManagedDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-bom
      version: latest.release
      scope: import
      type: pom
      classifier: test
      versionPattern: '-jre'
      releasesOnly: null
      onlyIfUsing: org.apache.logging.log4j:log4j*
      addToRootPom: null
```
{% endcode %}

Now that `com.yourorg.AddManagedDependencyExample` has been defined activate it in your build file:
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddManagedDependencyExample</recipe>
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.AddManagedDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
