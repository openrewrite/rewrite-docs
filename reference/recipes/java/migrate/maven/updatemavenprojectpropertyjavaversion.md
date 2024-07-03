# Update Maven Java project properties

**org.openrewrite.java.migrate.maven.UpdateMavenProjectPropertyJavaVersion**

_The Java version is determined by several project properties, including:

 * `java.version`
 * `jdk.version`
 * `javaVersion`
 * `jdkVersion`
 * `maven.compiler.source`
 * `maven.compiler.target`
 * `maven.compiler.release`
 * `release.version`

 These project properties are not added if they are not currently set, but only updated in place._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/maven/UpdateMavenProjectPropertyJavaVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.19.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.19.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `Integer` | version | The Java version to upgrade to. | `11` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateMavenProjectPropertyJavaVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateMavenProjectPropertyJavaVersionExample
displayName: Update Maven Java project properties example
recipeList:
  - org.openrewrite.java.migrate.maven.UpdateMavenProjectPropertyJavaVersion:
      version: 11
```
{% endcode %}

Now that `com.yourorg.UpdateMavenProjectPropertyJavaVersionExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-migrate-java:2.19.0 in your build file:
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
        <version>5.35.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.UpdateMavenProjectPropertyJavaVersionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.19.0</version>
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
mod run . --recipe UpdateMavenProjectPropertyJavaVersionExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.maven.UpdateMavenProjectPropertyJavaVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), Chuka Obinabo, [Tim te Beek](mailto:timtebeek@gmail.com)
