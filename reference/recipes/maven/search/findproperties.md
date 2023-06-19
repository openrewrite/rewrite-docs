# Find Maven project properties

**org.openrewrite.maven.search.FindProperties**

_Finds the specified Maven project properties within a pom.xml._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/search/FindProperties.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | propertyPattern | Regular expression pattern used to match property tag names. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyPattern|`guava*`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <properties>
    <someNullProp/>
    <guava.version>28.2-jre</guava.version>
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
  <properties>
    <someNullProp/>
    <!--~~>--><guava.version>28.2-jre</guava.version>
  </properties>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <dependencies>
    <dependency>
        <groupId>com.google.guava</groupId>
        <artifactId>guava</artifactId>
        <version><!--~~(28.2-jre)~~>-->${guava.version}</version>
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
@@ -4,1 +4,1 @@
  <properties>
    <someNullProp/>
-   <guava.version>28.2-jre</guava.version>
+   <!--~~>--><guava.version>28.2-jre</guava.version>
  </properties>
@@ -13,1 +13,1 @@
        <groupId>com.google.guava</groupId>
        <artifactId>guava</artifactId>
-       <version>${guava.version}</version>
+       <version><!--~~(28.2-jre)~~>-->${guava.version}</version>
    </dependency>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindPropertiesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindPropertiesExample
displayName: Find Maven project properties example
recipeList:
  - org.openrewrite.maven.search.FindProperties:
      propertyPattern: guava*
```
{% endcode %}

Now that `com.yourorg.FindPropertiesExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.FindPropertiesExample</recipe>
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
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Greg Adams](greg@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.search.FindProperties)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
