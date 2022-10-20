# Cancel in-progress workflow when it is triggered again

** org.openrewrite.github.AutoCancelInProgressWorkflow**
_When a workflow is already running and would be triggered again, cancel the existing workflow. See [`styfle/cancel-workflow-action`](https://github.com/styfle/cancel-workflow-action) for details._

## Source

[Github](https://github.com/openrewrite/rewrite-github-actions), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-github-actions/1.13.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 1.13.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | accessToken | *Optional*. Optionally provide the key name of a repository or organization secret that contains a Github personal access token with permission to cancel workflows. |


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-github-actions:1.13.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("org.openrewrite.github.AutoCancelInProgressWorkflow")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:1.13.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.github.AutoCancelInProgressWorkflow</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>1.13.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-github-actions:1.13.0 \
  -DactiveRecipes=org.openrewrite.github.AutoCancelInProgressWorkflow
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.github.AutoCancelInProgressWorkflow`
