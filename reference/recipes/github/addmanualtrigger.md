# Add manual workflow trigger

**org.openrewrite.github.AddManualTrigger**

_You can manually trigger workflow runs. To trigger specific workflows in a repository, use the `workflow_dispatch` event._

### Tags

* github

## Source

[GitHub](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/resources/META-INF/rewrite/github.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-github-actions:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.github.AddManualTrigger")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:2.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.github.AddManualTrigger</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>2.0.1</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-github-actions:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.github.AddManualTrigger
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Merge YAML snippet](../yaml/mergeyaml.md)
  * key: `$.on`
  * yaml: `workflow_dispatch:`
  * acceptTheirs: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.github.AddManualTrigger
displayName: Add manual workflow trigger
description: You can manually trigger workflow runs. To trigger specific workflows in a repository, use the `workflow_dispatch` event.
tags:
  - github
recipeList:
  - org.openrewrite.yaml.MergeYaml:
      key: $.on
      yaml: workflow_dispatch:
      acceptTheirs: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.github.AddManualTrigger)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
