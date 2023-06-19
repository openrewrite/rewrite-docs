# Move content to another file

**org.openrewrite.hcl.MoveContentToFile**

_Move content to another HCL file, deleting it in the original file._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-hcl/src/main/java/org/openrewrite/hcl/MoveContentToFile.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-hcl/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-hcl
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | contentPath | A JSONPath expression specifying the block to move. |
| `String` | fromPath | The source path of the file from which content is being moved. |
| `String` | destinationPath | The source path of the file to move the content to. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|contentPath|`$.before`|
|fromPath|`from.tf`|
|destinationPath|`to.tf`|


{% tabs %}
{% tab title="from.tf" %}

###### Before
{% code title="from.tf" %}
```hcl
after {
}
before {
}
```
{% endcode %}

###### After
{% code title="from.tf" %}
```hcl
after {
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- from.tf
+++ from.tf
@@ -3,2 +3,0 @@
after {
}
-before {
-}

```
{% endcode %}
{% endtab %}
{% endtabs %}

###### Before
{% code title="to.tf" %}
```hcl
null```
{% endcode %}

###### New file
{% code title="to.tf" %}
```hcl
before {
}
```
{% endcode %}



## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.MoveContentToFileExample`.
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

Now that `com.yourorg.MoveContentToFileExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.MoveContentToFileExample")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.MoveContentToFileExample</recipe>
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.hcl.MoveContentToFile)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
