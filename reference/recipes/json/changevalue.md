# Change value

** org.openrewrite.json.ChangeValue**
_Change a JSON mapping entry value leaving the key intact._

## Source

[Github](https://github.com/openrewrite/rewrite-json), [Issue Tracker](https://github.com/openrewrite/rewrite-json/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-json/7.22.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-json
* version: 7.22.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldKeyPath | A JsonPath expression to locate a JSON entry. |
| `String` | value | The new value to set for the key identified by oldKeyPath. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangeValueExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeValueExample
displayName: Change value example
recipeList:
  - org.openrewrite.json.ChangeValue:
      oldKeyPath: $.subjects.kind
      value: 'Deployment'
      fileMatcher: '**/application-*.json'
```
{% endcode %}

Now that `com.yourorg.ChangeValueExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-json:7.22.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.20.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeValueExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-json:7.22.0")
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
        <version>4.23.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeValueExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-json</artifactId>
            <version>7.22.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.ChangeValueExample`
