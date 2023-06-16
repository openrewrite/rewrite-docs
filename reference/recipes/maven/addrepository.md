# Add Repository

**org.openrewrite.maven.AddRepository**

_Adds a new Maven Repository or Update a matching repository._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddRepository.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | id | Repository id |
| `String` | url | Repository URL |
| `String` | repoName | *Optional*. Repository name |
| `String` | layout | *Optional*. Repository layout |
| `Boolean` | snapshotsEnabled | *Optional*. Snapshots from the repository are available |
| `String` | snapshotsChecksumPolicy | *Optional*. Snapshots checksum policy |
| `String` | snapshotsUpdatePolicy | *Optional*. Snapshots update policy policy |
| `Boolean` | releasesEnabled | *Optional*. Releases from the repository are available |
| `String` | releasesChecksumPolicy | *Optional*. Releases checksum policy |
| `String` | releasesUpdatePolicy | *Optional*. Releases update policy |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|id|`myRepo`|
|url|`http://myrepo.maven.com/repo`|
|repoName|`null`|
|layout|`null`|
|snapshotsEnabled|`null`|
|snapshotsChecksumPolicy|`null`|
|snapshotsUpdatePolicy|`null`|
|releasesEnabled|`null`|
|releasesChecksumPolicy|`null`|
|releasesUpdatePolicy|`null`|


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
  <repositories>
    <repository>
      <id>myRepo</id>
      <url>http://myrepo.maven.com/repo</url>
    </repository>
  </repositories>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -5,0 +5,6 @@
+  <repositories>
    <repository>
      <id>myRepo</id>
      <url>http://myrepo.maven.com/repo</url>
    </repository>
  </repositories>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddRepositoryExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddRepositoryExample
displayName: Add Repository example
recipeList:
  - org.openrewrite.maven.AddRepository:
      id: null
      url: null
      repoName: null
      layout: null
      snapshotsEnabled: null
      snapshotsChecksumPolicy: null
      snapshotsUpdatePolicy: null
      releasesEnabled: null
      releasesChecksumPolicy: null
      releasesUpdatePolicy: null
```
{% endcode %}

Now that `com.yourorg.AddRepositoryExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.AddRepositoryExample</recipe>
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
* [Alex Boyko](aboyko@vmware.com)
* [Patrick Way](pway99@users.noreply.github.com)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.AddRepository)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
