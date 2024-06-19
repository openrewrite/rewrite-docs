# Change a SQL function name

**org.openrewrite.sql.ChangeFunctionName**

_When migrating between dialects, often one name can be substituted for another. For example, Oracle's NVL function can be replaced with Postgres COALESCE._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-sql/blob/main/src/main/java/org/openrewrite/sql/ChangeFunctionName.java), [Issue Tracker](https://github.com/openrewrite/rewrite-sql/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-sql/1.6.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-sql
* version: 1.6.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldFunctionName | The name of the function to find, case insensitive. | `NVL` |
| `String` | newFunctionName | The new name to use. This will match the casing of the original method when a replacement is made. | `COALESCE` |

## Data Tables

### SQL queries

_Shows matching SQL queries._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file. |
| Query | The text of the query. |

### SQL functions in use

_Shows matching SQL functions and the queries that contain them._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file. |
| Query | The text of the query. |
| Function | Function name. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeFunctionNameExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeFunctionNameExample
displayName: Change a SQL function name example
recipeList:
  - org.openrewrite.sql.ChangeFunctionName:
      oldFunctionName: NVL
      newFunctionName: COALESCE
```
{% endcode %}

Now that `com.yourorg.ChangeFunctionNameExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-sql:1.6.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.ChangeFunctionNameExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-sql:1.6.1")
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
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.ChangeFunctionNameExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-sql</artifactId>
            <version>1.6.1</version>
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
mod run . --recipe ChangeFunctionNameExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.sql.ChangeFunctionName)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
