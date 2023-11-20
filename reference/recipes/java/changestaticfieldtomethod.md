# Change static field access to static method access

**org.openrewrite.java.ChangeStaticFieldToMethod**

_Migrate accesses to a static field to invocations of a static method._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeStaticFieldToMethod.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.9.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.9.4

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
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.4")
}

rewrite {
    activeRecipe("com.yourorg.ChangeStaticFieldToMethodExample")
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
        <version>5.13.0</version>
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
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ChangeStaticFieldToMethod
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.ChangeStaticFieldToMethod)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Christian Semrau, [Jonathan Schnéider](mailto:jkschneider@gmail.com), Tyler Van Gorder, [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut.wannheden@gmail.com), [Thomas Zub](mailto:thomas.zub@outlook.de), [Aaron Gershman](mailto:aegershman@gmail.com)
