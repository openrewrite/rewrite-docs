# Rename Maven property key

**org.openrewrite.maven.RenamePropertyKey**

_Rename the specified Maven project property key leaving the value unchanged._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RenamePropertyKey.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldKey | The old name of the property key to be replaced. |
| `String` | newKey | The new property name to use. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|oldKey|`guava.version`|
|newKey|`version.com.google.guava`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>

  <properties>
    <guava.version>29.0-jre</guava.version>
  </properties>

  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>

  <dependencies>
    <dependency>
      <groupId>com.google.guava</groupId>
      <artifactId>guava</artifactId>
      <version>${guava.version}</version>
    </dependency>
  </dependencies>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>

  <properties>
    <version.com.google.guava>29.0-jre</version.com.google.guava>
  </properties>

  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>

  <dependencies>
    <dependency>
      <groupId>com.google.guava</groupId>
      <artifactId>guava</artifactId>
      <version>${version.com.google.guava}</version>
    </dependency>
  </dependencies>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -5,1 +5,1 @@

  <properties>
-   <guava.version>29.0-jre</guava.version>
+   <version.com.google.guava>29.0-jre</version.com.google.guava>
  </properties>
@@ -16,1 +16,1 @@
      <groupId>com.google.guava</groupId>
      <artifactId>guava</artifactId>
-     <version>${guava.version}</version>
+     <version>${version.com.google.guava}</version>
    </dependency>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RenamePropertyKeyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RenamePropertyKeyExample
displayName: Rename Maven property key example
recipeList:
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: junit.version
      newKey: version.org.junit
```
{% endcode %}

Now that `com.yourorg.RenamePropertyKeyExample` has been defined activate it in your build file:
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RenamePropertyKeyExample</recipe>
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
* [Geoffrey De Smet](gds.geoffrey.de.smet@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.RenamePropertyKey)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
