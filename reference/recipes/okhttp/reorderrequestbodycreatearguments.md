# Reorder the arguments of `RequestBody.create()`

**org.openrewrite.okhttp.ReorderRequestBodyCreateArguments**

_Reorder the arguments of `RequestBody.create() to put the `MediaType` argument after the `String` body._

## Source

[GitHub](https://github.com/openrewrite/rewrite-okhttp/blob/main/src/main/resources/META-INF/rewrite/okhttp-5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-okhttp/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-okhttp/0.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-okhttp
* version: 0.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-okhttp:0.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.26")
}

rewrite {
    activeRecipe("org.openrewrite.okhttp.ReorderRequestBodyCreateArguments")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-okhttp:0.0.1")
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
        <version>5.4.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.okhttp.ReorderRequestBodyCreateArguments</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-okhttp</artifactId>
            <version>0.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-okhttp:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.okhttp.ReorderRequestBodyCreateArguments
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Reorder method arguments](../java/reordermethodarguments.md)
  * methodPattern: `okhttp3.RequestBody create(okhttp3.MediaType, java.lang.String)`
  * newParameterNames: `[contentType, content]`
  * oldParameterNames: `[content, contentType]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.okhttp.ReorderRequestBodyCreateArguments
displayName: Reorder the arguments of `RequestBody.create()`
description: Reorder the arguments of `RequestBody.create() to put the `MediaType` argument after the `String` body.
recipeList:
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: okhttp3.RequestBody create(okhttp3.MediaType, java.lang.String)
      newParameterNames: [contentType, content]
      oldParameterNames: [content, contentType]

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.okhttp.ReorderRequestBodyCreateArguments)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
