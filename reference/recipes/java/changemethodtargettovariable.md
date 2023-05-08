# Change method target to variable

**org.openrewrite.java.ChangeMethodTargetToVariable**

_Change method invocations to method calls on a variable._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeMethodTargetToVariable.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.40.6

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Greg Adams](greg@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Aaron Gershman](aegershman@gmail.com)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | methodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching method invocations. |
| `String` | variableName | Name of variable to use as target for the modified method invocation. |
| `String` | variableType | Type attribution to use for the return type of the modified method invocation. |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeMethodTargetToVariableExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodTargetToVariableExample
displayName: Change method target to variable example
recipeList:
  - org.openrewrite.java.ChangeMethodTargetToVariable:
      methodPattern: org.mycorp.A method(..)
      variableName: foo
      variableType: java.lang.String
      matchOverrides: null
```
{% endcode %}

Now that `com.yourorg.ChangeMethodTargetToVariableExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("com.yourorg.ChangeMethodTargetToVariableExample")
}

repositories {
    mavenCentral()
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeMethodTargetToVariableExample</recipe>
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.ChangeMethodTargetToVariable)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
