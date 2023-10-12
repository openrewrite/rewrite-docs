# Upgrade un-managed spring project dependencies

**org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies**

_Upgrades un-managed spring-boot project dependencies according to the specified spring-boot version._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/maven/spring/UpgradeExplicitSpringBootDependencies.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.11/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.11

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | fromVersion | XRage pattern for spring version used to limit which projects should be updated |
| `String` | toVersion | Upgrade version of `org.springframework.boot` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeExplicitSpringBootDependenciesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeExplicitSpringBootDependenciesExample
displayName: Upgrade un-managed spring project dependencies example
recipeList:
  - org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies:
      fromVersion:  2.7.+
      toVersion: 3.0.0-M3
```
{% endcode %}

Now that `com.yourorg.UpgradeExplicitSpringBootDependenciesExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-spring:5.0.11 in your build file:
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
        <version>5.8.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpgradeExplicitSpringBootDependenciesExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.11</version>
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
mod run <PATH> --recipe UpgradeExplicitSpringBootDependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Andrei Shakirin](mailto:andrei.shakirin@gmail.com)
* [Joan Viladrosa](mailto:joan@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* Patrick Way
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* Kun Li
* [Kyle Scully](mailto:scullykns@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
