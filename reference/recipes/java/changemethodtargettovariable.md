# Change method target to variable

** org.openrewrite.java.ChangeMethodTargetToVariable**
_Change method invocations to method calls on a variable._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.8.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.8.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | methodPattern | A method pattern, expressed as a [pointcut expression](/v1beta/pointcut-expressions), that is used to find matching method invocations. |
| `String` | variableName | Name of variable to use as target for the modified method invocation. |
| `String` | variableType | Type attribution to use for the return type of the modified method invocation. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangeMethodTargetToVariableExample`.
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
```
{% endcode %}


Now that `com.yourorg.ChangeMethodTargetToVariableExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.1")
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
        <version>4.6.2</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.ChangeMethodTargetToVariableExample`
