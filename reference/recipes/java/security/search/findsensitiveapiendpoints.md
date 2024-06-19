# Find sensitive API endpoints

**org.openrewrite.java.security.search.FindSensitiveApiEndpoints**

_Find data models exposed by REST APIs that contain sensitive information like PII and secrets._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/java/org/openrewrite/java/security/search/FindSensitiveApiEndpoints.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.10.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.10.2

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `List` | fieldNames | Field names to search for. | `password,dateOfBirth,dob,ssn` |
| `Boolean` | transitive | *Optional*. Find model objects that contain other model objects that contain sensitive data. |  |

## Data Tables

### Sensitive API endpoints

_The API endpoints that expose sensitive data._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the API endpoint definition. |
| Method name | The name of the method that defines the API endpoint. |
| Method | The HTTP method of the API endpoint. |
| Path | The path of the API endpoint. |
| Sensitive field | The piece of sensitive data that is included. |
| Sensitive data path | The sensitive data exposed by the API endpoint. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindSensitiveApiEndpointsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindSensitiveApiEndpointsExample
displayName: Find sensitive API endpoints example
recipeList:
  - org.openrewrite.java.security.search.FindSensitiveApiEndpoints:
      fieldNames: password,dateOfBirth,dob,ssn
```
{% endcode %}

Now that `com.yourorg.FindSensitiveApiEndpointsExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-security:2.10.2 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.FindSensitiveApiEndpointsExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.10.2")
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
            <recipe>com.yourorg.FindSensitiveApiEndpointsExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>2.10.2</version>
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
mod run . --recipe FindSensitiveApiEndpointsExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindSensitiveApiEndpoints)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com)
