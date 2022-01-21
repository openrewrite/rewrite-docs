# Change Maven Parent Pom

** org.openrewrite.maven.ChangeParentPom**
_Change the parent pom of a Maven pom.xml. Identifies the parent pom to be changed by its groupId and artifactId._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.17.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.17.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldGroupId | The groupId of the maven parent pom to be changed away from. |
| `String` | newGroupId | *Optional*. The groupId of the new maven parent pom to be adopted. If this argument is omitted it defaults to the value of `oldGroupId`. |
| `String` | oldArtifactId | The artifactId of the maven parent pom to be changed away from. |
| `String` | newArtifactId | *Optional*. The artifactId of the new maven parent pom to be adopted. If this argument is omitted it defaults to the value of `oldArtifactId`. |
| `String` | newVersion | An exact version number, or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |
| `boolean` | allowVersionDowngrades | *Optional*. If the new parent has the same group/artifact, this flag can be used to only upgrade the version if the target version is newer than the current. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangeParentPomExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeParentPomExample
displayName: Change Maven Parent Pom example
recipeList:
  - org.openrewrite.maven.ChangeParentPom:
      oldGroupId: org.springframework.boot
      newGroupId: org.springframework.boot
      oldArtifactId: spring-boot-starter-parent
      newArtifactId: spring-boot-starter-parent
      newVersion: 29.X
      versionPattern: -jre
      allowVersionDowngrades: false
```
{% endcode %}


Now that `com.yourorg.ChangeParentPomExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.5")
}

rewrite {
    activeRecipe("com.yourorg.ChangeParentPomExample")
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
        <version>4.17.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeParentPomExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipes=com.yourorg.ChangeParentPomExample`
