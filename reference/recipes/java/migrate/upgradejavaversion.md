# Upgrade Java version

**org.openrewrite.java.migrate.UpgradeJavaVersion**

_Upgrade build plugin configuration to use the specified Java version. This recipe changes `java.toolchain.languageVersion` in `build.gradle(.kts)` of gradle projects, or maven-compiler-plugin target version and related settings. Will not downgrade if the version is newer than the specified version._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/UpgradeJavaVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.1.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.1.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Integer` | version | The Java version to upgrade to. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeJavaVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeJavaVersionExample
displayName: Upgrade Java version example
recipeList:
  - org.openrewrite.java.migrate.UpgradeJavaVersion:
      version: 11
```
{% endcode %}

Now that `com.yourorg.UpgradeJavaVersionExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-migrate-java:2.1.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.1")
}

rewrite {
    activeRecipe("com.yourorg.UpgradeJavaVersionExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.1.1")
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
        <version>5.9.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpgradeJavaVersionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.1.1</version>
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
mod run <PATH> --recipe UpgradeJavaVersion
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Sam Snyder](mailto:sam@moderne.io)
* Kun Li
* [Shannon Pamperl](mailto:shanman190@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Tim te Beek](mailto:tim@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeJavaVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
