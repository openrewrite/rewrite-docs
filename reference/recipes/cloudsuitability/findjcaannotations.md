# Find uses of JCA

**org.openrewrite.cloudsuitability.FindJcaAnnotations**

_Java messaging can present problems in TAS due to its ephemerality. Convert to a backing service or use TKG._

### Tags

* java-jcaAnnotations

## Source

[GitHub](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/blob/main/src/main/resources/META-INF/rewrite/finders.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-cloud-suitability-analyzer/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cloud-suitability-analyzer
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.cloudsuitability.FindJcaAnnotations")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:2.0.1")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.cloudsuitability.FindJcaAnnotations</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cloud-suitability-analyzer</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.cloudsuitability.FindJcaAnnotations
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `javax.resource.AdministeredObjectDefinition`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `javax.resource.ConnectionFactoryDefinition*`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cloudsuitability.FindJcaAnnotations
displayName: Find uses of JCA
description: Java messaging can present problems in TAS due to its ephemerality. Convert to a backing service or use TKG.
tags:
  - java-jcaAnnotations
recipeList:
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: javax.resource.AdministeredObjectDefinition
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: javax.resource.ConnectionFactoryDefinition*

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.cloudsuitability.FindJcaAnnotations)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
