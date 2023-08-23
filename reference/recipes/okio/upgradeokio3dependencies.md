# Migrate Okio dependencies to 3.x

**org.openrewrite.okio.UpgradeOkio3Dependencies**

_Migrate Okio dependencies to 3.x._

## Source

[GitHub](https://github.com/openrewrite/rewrite-okhttp/blob/main/src/main/resources/META-INF/rewrite/okio-3.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-okhttp/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-okhttp/0.0.1/jar)

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
    activeRecipe("org.openrewrite.okio.UpgradeOkio3Dependencies")
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
            <recipe>org.openrewrite.okio.UpgradeOkio3Dependencies</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.okio.UpgradeOkio3Dependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `com.squareup.okio`
  * oldArtifactId: `okio-multiplatform`
  * newArtifactId: `okio`
  * newVersion: `3.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `com.squareup.okio`
  * oldArtifactId: `okio`
  * newArtifactId: `okio`
  * newVersion: `3.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.okio.UpgradeOkio3Dependencies
displayName: Migrate Okio dependencies to 3.x
description: Migrate Okio dependencies to 3.x.
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.squareup.okio
      oldArtifactId: okio-multiplatform
      newArtifactId: okio
      newVersion: 3.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.squareup.okio
      oldArtifactId: okio
      newArtifactId: okio
      newVersion: 3.x

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.okio.UpgradeOkio3Dependencies)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
