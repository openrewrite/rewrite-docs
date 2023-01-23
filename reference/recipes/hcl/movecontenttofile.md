# Move content to another file

**org.openrewrite.hcl.MoveContentToFile**
_Move content to another HCL file, deleting it in the original file._

## Source

[Github](https://github.com/openrewrite/rewrite-hcl), [Issue Tracker](https://github.com/openrewrite/rewrite-hcl/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-hcl/7.35.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-hcl
* version: 7.35.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | contentPath | A JSONPath expression specifying the block to move. |
| `String` | fromPath | The source path of the file from which content is being moved. |
| `String` | destinationPath | The source path of the file to move the content to. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.MoveContentToFileExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MoveContentToFileExample
displayName: Move content to another file example
recipeList:
  - org.openrewrite.hcl.MoveContentToFile:
      contentPath: $.provider
      fromPath: from.tf
      destinationPath: to.tf
```
{% endcode %}

Now that `com.yourorg.MoveContentToFileExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-hcl:7.35.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.34.0")
}

rewrite {
    activeRecipe("com.yourorg.MoveContentToFileExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-hcl:7.35.0")
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
        <version>4.39.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.MoveContentToFileExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-hcl</artifactId>
            <version>7.35.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=com.yourorg.MoveContentToFileExample`

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.hcl.MoveContentToFile)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
