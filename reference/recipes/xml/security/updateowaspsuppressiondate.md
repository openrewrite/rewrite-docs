# Update OWASP suppression date bounds

**org.openrewrite.xml.security.UpdateOwaspSuppressionDate**

_Updates the expiration date for OWASP suppressions having a matching cve tag. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/security/UpdateOwaspSuppressionDate.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-xml/8.7.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-xml
* version: 8.7.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | cveList | Update suppressions having any of the specified CVE tags. |
| `String` | untilDate | *Optional*. Optional. The date to add to the suppression. Default will be 30 days from today. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateOwaspSuppressionDateExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateOwaspSuppressionDateExample
displayName: Update OWASP suppression date bounds example
recipeList:
  - org.openrewrite.xml.security.UpdateOwaspSuppressionDate:
      cveList: CVE-2022-1234
      untilDate: 2023-01-01
```
{% endcode %}

Now that `com.yourorg.UpdateOwaspSuppressionDateExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.18")
}

rewrite {
    activeRecipe("com.yourorg.UpdateOwaspSuppressionDateExample")
}

repositories {
    mavenCentral()
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
        <version>5.8.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpdateOwaspSuppressionDateExample</recipe>
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
{% endtabs %}

## Contributors
* Patrick Way
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.xml.security.UpdateOwaspSuppressionDate)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
