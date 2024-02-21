# Update the Micronaut Data library

**org.openrewrite.java.micronaut.UpdateMicronautData**

_This recipe will make the necessary updates for using Micronaut Data with Micronaut Framework 4._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.2.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.2.4

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.2.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.UpdateMicronautData")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.2.4")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.8.4") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-micronaut:2.2.4")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.UpdateMicronautData")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.23.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.UpdateMicronautData</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.2.4</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.micronaut.UpdateMicronautData
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpdateMicronautData
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove XML tag](../../xml/removexmltag.md)
  * xPath: `/project/properties/micronaut.data.version`
  * fileMatcher: `**/pom.xml`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.transaction`
  * newPackageName: `jakarta.transaction`
  * recursive: `true`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.data.jdbc.annotation.ColumnTransformer`
  * newFullyQualifiedTypeName: `io.micronaut.data.annotation.sql.ColumnTransformer`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.data.jdbc.annotation.JoinColumn`
  * newFullyQualifiedTypeName: `io.micronaut.data.annotation.sql.JoinColumn`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.data.jdbc.annotation.JoinColumns`
  * newFullyQualifiedTypeName: `io.micronaut.data.annotation.sql.JoinColumns`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.data.jdbc.annotation.JoinTable`
  * newFullyQualifiedTypeName: `io.micronaut.data.annotation.sql.JoinTable`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.transaction.annotation.TransactionalAdvice`
  * newFullyQualifiedTypeName: `io.micronaut.transaction.annotation.Transactional`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.UpdateMicronautData
displayName: Update the Micronaut Data library
description: This recipe will make the necessary updates for using Micronaut Data with Micronaut Framework 4.
recipeList:
  - org.openrewrite.xml.RemoveXmlTag:
      xPath: /project/properties/micronaut.data.version
      fileMatcher: **/pom.xml
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.transaction
      newPackageName: jakarta.transaction
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.data.jdbc.annotation.ColumnTransformer
      newFullyQualifiedTypeName: io.micronaut.data.annotation.sql.ColumnTransformer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.data.jdbc.annotation.JoinColumn
      newFullyQualifiedTypeName: io.micronaut.data.annotation.sql.JoinColumn
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.data.jdbc.annotation.JoinColumns
      newFullyQualifiedTypeName: io.micronaut.data.annotation.sql.JoinColumns
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.data.jdbc.annotation.JoinTable
      newFullyQualifiedTypeName: io.micronaut.data.annotation.sql.JoinTable
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.transaction.annotation.TransactionalAdvice
      newFullyQualifiedTypeName: io.micronaut.transaction.annotation.Transactional

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateMicronautData)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
