# Find fields

** org.openrewrite.java.search.FindFields**
_Finds declared fields matching a particular class name._

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.7.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.7.0

### Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | fullyQualifiedTypeName | A fully-qualified Java type name, that is used to find matching fields. |
## Usage
This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindFieldsExample`. 
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindFieldsExample
displayName: Find fields example
recipeList:
  - org.openrewrite.java.search.FindFields:
      fullyQualifiedTypeName: org.slf4j.api.Logger
```
{% endcode %}


Now that `com.yourorg.FindFieldsExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("com.yourorg.FindFieldsExample")
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
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindFieldsExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.FindFieldsExample`
