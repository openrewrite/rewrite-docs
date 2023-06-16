# Change XML Tag Name

**org.openrewrite.xml.ChangeTagName**

_Alters the name of XML tags matching the provided expression._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/ChangeTagName.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-xml/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-xml
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | elementName | The name of the element whose attribute's value is to be changed. Interpreted as an XPath Expression. |
| `String` | newName | The new name for the tag. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|elementName|`/virtual-patches/enhanced-virtual-patch/whitelist-pattern`|
|newName|`allowlist-pattern`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```xml
<virtual-patches>
    <enhanced-virtual-patch id="evp-name" path="/[request-path]" variable="request.parameters.[paramName]" message="alphabet validation failed" enableAntisamy="false">
        <whitelist-pattern>^[a-zA-Z]+${'$'}</whitelist-pattern>
    </enhanced-virtual-patch>
</virtual-patches>
```
{% endcode %}

###### After
{% code title="null" %}
```xml
<virtual-patches>
    <enhanced-virtual-patch id="evp-name" path="/[request-path]" variable="request.parameters.[paramName]" message="alphabet validation failed" enableAntisamy="false">
        <allowlist-pattern>^[a-zA-Z]+${'$'}</allowlist-pattern>
    </enhanced-virtual-patch>
</virtual-patches>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -3,1 +3,1 @@
-        <whitelist-pattern>^[a-zA-Z]+${'$'}</whitelist-pattern>
+        <allowlist-pattern>^[a-zA-Z]+${'$'}</allowlist-pattern>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeTagNameExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeTagNameExample
displayName: Change XML Tag Name example
recipeList:
  - org.openrewrite.xml.ChangeTagName:
      elementName: /settings/servers/server/username
      newName: user
```
{% endcode %}

Now that `com.yourorg.ChangeTagNameExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.ChangeTagNameExample")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeTagNameExample</recipe>
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

## Contributors
* [Nick McKinney](mckinneynicholas@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.xml.ChangeTagName)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
