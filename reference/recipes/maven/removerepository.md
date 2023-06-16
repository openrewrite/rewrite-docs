# Remove repository

**org.openrewrite.maven.RemoveRepository**

_Removes a matching Maven repository._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemoveRepository.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | id | *Optional*. Repository id |
| `String` | url | Repository URL |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|id|`myRepo`|
|url|`https://myrepo.maven.com/repo`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <repositories>
    <repository>
      <id>myRepo</id>
      <url>https://myrepo.maven.com/repo</url>
    </repository>
    <repository>
      <id>same_repo_different_id</id>
      <url>https://myrepo.maven.com/repo</url>
    </repository>
  </repositories>
  <pluginRepositories>
    <pluginRepository>
      <id>myRepo</id>
      <url>https://someOtherUrl</url>
    </pluginRepository>
    <pluginRepository>
      <id>identicalRepo</id>
      <url>https://myrepo.maven.com/repo</url>
    </pluginRepository>
  </pluginRepositories>
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
  <repositories>
    <repository>
      <id>same_repo_different_id</id>
      <url>https://myrepo.maven.com/repo</url>
    </repository>
  </repositories>
  <pluginRepositories>
    <pluginRepository>
      <id>myRepo</id>
      <url>https://someOtherUrl</url>
    </pluginRepository>
    <pluginRepository>
      <id>identicalRepo</id>
      <url>https://myrepo.maven.com/repo</url>
    </pluginRepository>
  </pluginRepositories>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -7,4 +7,0 @@
-      <id>myRepo</id>
      <url>https://myrepo.maven.com/repo</url>
    </repository>
    <repository>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveRepositoryExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveRepositoryExample
displayName: Remove repository example
recipeList:
  - org.openrewrite.maven.RemoveRepository:
      id: null
      url: null
```
{% endcode %}

Now that `com.yourorg.RemoveRepositoryExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.RemoveRepositoryExample</recipe>
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
* [smehta23](47726705+smehta23@users.noreply.github.com)
* [Yeikel](email@yeikel.com)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.RemoveRepository)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
