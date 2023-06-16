# Add Maven plugin

**org.openrewrite.maven.AddPlugin**

_Add the specified Maven plugin to the pom.xml._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddPlugin.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | version | A fixed version of the plugin to add. |
| `String` | configuration | *Optional*. Optional plugin configuration provided as raw XML |
| `String` | dependencies | *Optional*. Optional plugin dependencies provided as raw XML. |
| `String` | executions | *Optional*. Optional executions provided as raw XML. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`org.openrewrite.maven`|
|artifactId|`rewrite-maven-plugin`|
|version|`100.0`|
|configuration|`<configuration>
<activeRecipes>
<recipe>io.moderne.FindTest</recipe>
</activeRecipes>
</configuration>`|
|dependencies|`null`|
|executions|`null`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>100.0</version>
        <configuration>
          <activeRecipes>
            <recipe>io.moderne.FindTest</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -5,0 +5,14 @@
+  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>100.0</version>
        <configuration>
          <activeRecipes>
            <recipe>io.moderne.FindTest</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddPluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddPluginExample
displayName: Add Maven plugin example
recipeList:
  - org.openrewrite.maven.AddPlugin:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
      version: 1.0.0
      configuration: <configuration><foo>foo</foo></configuration>
      dependencies: <dependencies><dependency><groupId>com.yourorg</groupId><artifactId>core-lib</artifactId><version>1.0.0</version></dependency></dependencies>
      executions: <execution><phase>generate-sources</phase><goals><goal>add-source</goal></goals></execution>
```
{% endcode %}

Now that `com.yourorg.AddPluginExample` has been defined activate it in your build file:
{% tabs %}

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
            <recipe>com.yourorg.AddPluginExample</recipe>
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
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Greg Adams](greg@moderne.io)
* [Alex Boyko](aboyko@pivotal.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.AddPlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
