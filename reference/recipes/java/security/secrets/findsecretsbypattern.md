# Find secrets with regular expressions

**org.openrewrite.java.security.secrets.FindSecretsByPattern**
_A secret is a literal that matches any one of the provided patterns._

## Source

[Github](https://github.com/openrewrite/rewrite-java-security), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-java-security/1.19.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 1.19.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | secretName | The type of secret that this recipe is looking for. |
| `String` | keyPattern | *Optional*. A regular expression to match a 'key' against. For example, a key  |
| `String` | valuePattern | A regular expression to search for. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindSecretsByPatternExample`.
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

Now that `com.yourorg.FindSecretsByPatternExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-security:1.19.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("com.yourorg.FindSecretsByPatternExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:1.19.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindSecretsByPatternExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>1.19.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.FindSecretsByPatternExample`
