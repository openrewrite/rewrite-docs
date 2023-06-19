# Remove Maven plugin

**org.openrewrite.maven.RemovePlugin**

_Remove the specified Maven plugin from the pom.xml._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemovePlugin.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`org.apache.avro`|
|artifactId|`avro-maven-plugin`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>

  <groupId>org.openrewrite.example</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>

  <properties>
    <avro-maven-plugin.version>1.10.2</avro-maven-plugin.version>
  </properties>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.avro</groupId>
        <artifactId>avro-maven-plugin</artifactId>
        <version>${avro-maven-plugin.version}</version>
        <executions>
          <execution>
            <id>schemas</id>
            <phase>generate-sources</phase>
            <goals>
              <goal>schema</goal>
              <goal>protocol</goal>
              <goal>idl-protocol</goal>
            </goals>
            <configuration>
              <sourceDirectory>${project.basedir}/src/main/resources/</sourceDirectory>
              <outputDirectory>${project.basedir}/src/main/java/</outputDirectory>
            </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>

  <groupId>org.openrewrite.example</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>

  <properties>
    <avro-maven-plugin.version>1.10.2</avro-maven-plugin.version>
  </properties>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -11,25 +11,0 @@
    <avro-maven-plugin.version>1.10.2</avro-maven-plugin.version>
  </properties>
-
- <build>
-   <plugins>
-     <plugin>
-       <groupId>org.apache.avro</groupId>
-       <artifactId>avro-maven-plugin</artifactId>
-       <version>${avro-maven-plugin.version}</version>
-       <executions>
-         <execution>
-           <id>schemas</id>
-           <phase>generate-sources</phase>
-           <goals>
-             <goal>schema</goal>
-             <goal>protocol</goal>
-             <goal>idl-protocol</goal>
-           </goals>
-           <configuration>
-             <sourceDirectory>${project.basedir}/src/main/resources/</sourceDirectory>
-             <outputDirectory>${project.basedir}/src/main/java/</outputDirectory>
-           </configuration>
-         </execution>
-       </executions>
-     </plugin>
-   </plugins>
- </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemovePluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemovePluginExample
displayName: Remove Maven plugin example
recipeList:
  - org.openrewrite.maven.RemovePlugin:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
```
{% endcode %}

Now that `com.yourorg.RemovePluginExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.RemovePluginExample</recipe>
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
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.RemovePlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
