# Find secrets with regular expressions

**org.openrewrite.java.security.secrets.FindSecretsByPattern**

_A secret is a literal that matches any one of the provided patterns._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/java/org/openrewrite/java/security/secrets/FindSecretsByPattern.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.1.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.1.3

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | secretName | The type of secret that this recipe is looking for. | `AWS Access Key` |
| `String` | keyPattern | *Optional*. A regular expression to match a 'key' against. For example, a key  | `[a-zA-Z0-9+\/=]{88}` |
| `String` | valuePattern | A regular expression to search for. | `[a-zA-Z0-9+\/=]{88}` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindSecretsByPatternExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindSecretsByPatternExample
displayName: Find secrets with regular expressions example
recipeList:
  - org.openrewrite.java.security.secrets.FindSecretsByPattern:
      secretName: AWS Access Key
      keyPattern: '[a-zA-Z0-9+\/=]{88}'
      valuePattern: '[a-zA-Z0-9+\/=]{88}'
```
{% endcode %}

Now that `com.yourorg.FindSecretsByPatternExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-security:2.1.3 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.2")
}

rewrite {
    activeRecipe("com.yourorg.FindSecretsByPatternExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.1.3")
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
        <version>5.17.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindSecretsByPatternExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>2.1.3</version>
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
mod run . --recipe FindSecretsByPattern
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.security.secrets.FindSecretsByPattern)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schnéider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io)
