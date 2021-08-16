# Change method name

 **org.openrewrite.java.ChangeMethodName** _Rename a method._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.11.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.11.0

## Options

| Type | Name | Description |
| :--- | :--- | :--- |
| `String` | methodPattern | A method pattern, expressed as a [pointcut expression](https://github.com/openrewrite/rewrite-docs/tree/fcd79cf8679bfcc827f963b3427a70c58baa44dc/v1beta/pointcut-expressions/README.md), that is used to find matching method declarations/invocations. |
| `String` | newMethodName | The method name that will replace the existing name. |

## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangeMethodNameExample`. Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodNameExample
displayName: Change method name example
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.Matchers anyVararg()
      newMethodName: any
```
{% endcode %}

Now that `com.yourorg.ChangeMethodNameExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.7.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeMethodNameExample")
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
        <version>4.9.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeMethodNameExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.ChangeMethodNameExample`

