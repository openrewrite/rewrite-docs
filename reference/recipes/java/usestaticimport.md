# Use static import

**org.openrewrite.java.UseStaticImport** _Removes unnecessary receiver types from static method invocations. For example, `Collections.emptyList()` becomes `emptyList()`._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.33.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.33.0

## Options

| Type     | Name          | Description                                                                                    |
| -------- | ------------- | ---------------------------------------------------------------------------------------------- |
| `String` | methodPattern | A [method pattern](../../method-patterns.md) that is used to find matching method invocations. |

## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.UseStaticImportExample`. Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseStaticImportExample
displayName: Use static import example
recipeList:
  - org.openrewrite.java.UseStaticImport:
      methodPattern: java.util.Collections emptyList()
```
{% endcode %}

Now that `com.yourorg.UseStaticImportExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("com.yourorg.UseStaticImportExample")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UseStaticImportExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.UseStaticImportExample`
