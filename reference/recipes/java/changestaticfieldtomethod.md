# Change static field access to static method access

**org.openrewrite.java.ChangeStaticFieldToMethod**

_Migrate accesses to a static field to invocations of a static method._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeStaticFieldToMethod.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.39.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.39.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldClassName | The fully qualified name of the class containing the field to replace. |
| `String` | oldFieldName | The simple name of the static field to replace. |
| `String` | newClassName | *Optional*. The fully qualified name of the class containing the method to use. Leave empty to keep the same class. |
| `String` | newTarget | *Optional*. An optional method target that can be used to specify a static field within the new class. |
| `String` | newMethodName | The simple name of the method to use. The method must be static and have no arguments. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeStaticFieldToMethodExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeStaticFieldToMethodExample
displayName: Change static field access to static method access example
recipeList:
  - org.openrewrite.java.ChangeStaticFieldToMethod:
      oldClassName: java.util.Collections
      oldFieldName: EMPTY_LIST
      newClassName: java.util.List
      newTarget: OK_RESPONSE
      newMethodName: of
```
{% endcode %}


Now that `com.yourorg.ChangeStaticFieldToMethodExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.39.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeStaticFieldToMethodExample")
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
        <version>4.43.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeStaticFieldToMethodExample</recipe>
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.ChangeStaticFieldToMethod)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
