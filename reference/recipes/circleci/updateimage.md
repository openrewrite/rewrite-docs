# Update CircleCI image

**org.openrewrite.circleci.UpdateImage**

_See the list of [pre-built CircleCI images](https://circleci.com/docs/2.0/circleci-images/)._

## Source

[Github](https://github.com/openrewrite/rewrite-circleci/blob/main/src/main/java/org/openrewrite/circleci/UpdateImage.java), [Issue Tracker](https://github.com/openrewrite/rewrite-circleci/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-circleci/1.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-circleci
* version: 1.20.0

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | image | Image to use. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateImageExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateImageExample
displayName: Update CircleCI image example
recipeList:
  - org.openrewrite.circleci.UpdateImage:
      image: circleci/openjdk:jdk
```
{% endcode %}

Now that `com.yourorg.UpdateImageExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-circleci:1.20.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("com.yourorg.UpdateImageExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-circleci:1.20.0")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpdateImageExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-circleci</artifactId>
            <version>1.20.0</version>
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

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change value](../yaml/changevalue.md)
  * oldKeyPath: `$.jobs.build.machine.image`
  * value: ``
  * fileMatcher: `.circleci/config.yml`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.circleci.UpdateImage
displayName: Update CircleCI image
description: See the list of [pre-built CircleCI images](https://circleci.com/docs/2.0/circleci-images/).
image: 

recipeList:
  - org.openrewrite.yaml.ChangeValue:
      oldKeyPath: $.jobs.build.machine.image
      value: 
      fileMatcher: .circleci/config.yml

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.circleci.UpdateImage)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
