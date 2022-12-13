# Add license header

**org.openrewrite.java.AddLicenseHeader**
_Adds license headers to Java source files when missing. Does not override existing license headers._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.34.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.34.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | licenseText | The license header text without the block comment. May contain ${CURRENT_YEAR} property. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddLicenseHeaderExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddLicenseHeaderExample
displayName: Add license header example
recipeList:
  - org.openrewrite.java.AddLicenseHeader:
      licenseText: Copyright ${CURRENT_YEAR} the original author or authors...
```
{% endcode %}


Now that `com.yourorg.AddLicenseHeaderExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("com.yourorg.AddLicenseHeaderExample")
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
        <version>4.38.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddLicenseHeaderExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.AddLicenseHeaderExample`
