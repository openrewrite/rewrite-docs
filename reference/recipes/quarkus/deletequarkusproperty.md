# Delete Quarkus configuration property

**org.openrewrite.quarkus.DeleteQuarkusProperty**

_Delete a property from Quarkus configuration files._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/java/org/openrewrite/quarkus/DeleteQuarkusProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/2.7.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-quarkus
* version: 2.7.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | propertyKey | The name of the property key whose value is to be deleted. | `quarkus.hibernate-search-orm.indexing.plan.synchronization.strategy` |
| `String` | oldValue | *Optional*. Only delete the property value if it matches the configured `oldValue`. | `read-sync` |
| `String` | profile | *Optional*. The profile where the property should be deleted. If not specified, the property will be deleted from all profiles by default. | `dev` |
| `Boolean` | deleteFromAllProfiles | *Optional*. If set to true, the property will be removed from all available profiles. Defaults to `true`. | `false` |
| `List` | pathExpressions | *Optional*. Each value in this list represents a glob expression that is used to match which files will be modified. If this value is not present, this recipe will query the execution context for reasonable defaults. ("**/application.yml", "**/application.yaml", "**/application.properties" and "**/META-INF/microprofile-config.properties". | `["**/application.yaml"]` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DeleteQuarkusPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DeleteQuarkusPropertyExample
displayName: Delete Quarkus configuration property example
recipeList:
  - org.openrewrite.quarkus.DeleteQuarkusProperty:
      propertyKey: quarkus.hibernate-search-orm.indexing.plan.synchronization.strategy
      oldValue: read-sync
      profile: dev
      deleteFromAllProfiles: false
      pathExpressions: ["**/application.yaml"]
```
{% endcode %}

Now that `com.yourorg.DeleteQuarkusPropertyExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-quarkus:2.7.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.DeleteQuarkusPropertyExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:2.7.1")
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
          
          <activeRecipes>
            <recipe>com.yourorg.DeleteQuarkusPropertyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>2.7.1</version>
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
mod run . --recipe DeleteQuarkusPropertyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.quarkus.DeleteQuarkusProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Adriano Machado, [Guillaume Smet](mailto:guillaume.smet@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
