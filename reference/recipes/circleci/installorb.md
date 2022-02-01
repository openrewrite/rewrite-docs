# Install an orb

** org.openrewrite.circleci.InstallOrb**
_Install a CircleCI [orb](https://circleci.com/docs/2.0/orb-intro/) if it is not already installed._

## Source

[Github](https://github.com/openrewrite/rewrite-circleci), [Issue Tracker](https://github.com/openrewrite/rewrite-circleci/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-circleci/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-circleci
* version: 1.1.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | orbKey | The orb key to be followed by an orb slug identifying a specific orb version. |
| `String` | slug | A specific orb to install, in the form `<namespace>/<orb-name>@1.2.3`. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.InstallOrbExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.InstallOrbExample
displayName: Install an orb example
recipeList:
  - org.openrewrite.circleci.InstallOrb:
      orbKey: kube
      slug: circleci/kubernetes@0.11.0
```
{% endcode %}

Now that `com.yourorg.InstallOrbExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-circleci:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.8")
}

rewrite {
    activeRecipe("com.yourorg.InstallOrbExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-circleci:1.1.0")
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
        <version>4.17.4</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.InstallOrbExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-circleci</artifactId>
            <version>1.1.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipes=com.yourorg.InstallOrbExample`
