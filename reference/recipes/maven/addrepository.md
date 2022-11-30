# Add Repository

**org.openrewrite.maven.AddRepository**

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.33.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.33.0

## Options

| Type      | Name                    | Description                                             |
| --------- | ----------------------- | ------------------------------------------------------- |
| `String`  | id                      | Repository id                                           |
| `String`  | url                     | Repository URL                                          |
| `String`  | repoName                | _Optional_. Repository name                             |
| `String`  | layout                  | _Optional_. Repository layout                           |
| `Boolean` | snapshotsEnabled        | _Optional_. Snapshots from the repository are available |
| `String`  | snapshotsChecksumPolicy | _Optional_. Snapshots checksum policy                   |
| `String`  | snapshotsUpdatePolicy   | _Optional_. Snapshots update policy policy              |
| `Boolean` | releasesEnabled         | _Optional_. Releases from the repository are available  |
| `String`  | releasesChecksumPolicy  | _Optional_. Releases checksum policy                    |
| `String`  | releasesUpdatePolicy    | _Optional_. Releases update policy                      |

## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddRepositoryExample`. Here's how you can define and customize such a recipe within your rewrite.yml:

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
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("com.yourorg.AddRepositoryExample")
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
        <version>4.37.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.AddRepositoryExample`
