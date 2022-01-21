# Find JSON object members

** org.openrewrite.json.search.FindKey**
_Find JSON object members by JsonPath expression._

## Source

[Github](https://github.com/openrewrite/rewrite-json), [Issue Tracker](https://github.com/openrewrite/rewrite-json/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-json/7.17.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-json
* version: 7.17.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | key | A JsonPath expression used to find matching keys. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindKeyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindKeyExample
displayName: Find JSON object members example
recipeList:
  - org.openrewrite.json.search.FindKey:
      key: $.subjects.kind
```
{% endcode %}

Now that `com.yourorg.FindKeyExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-json:7.17.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.5")
}

rewrite {
    activeRecipe("com.yourorg.FindKeyExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-json:7.17.0")
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
        <version>4.17.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindKeyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-json</artifactId>
            <version>7.17.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipes=com.yourorg.FindKeyExample`
