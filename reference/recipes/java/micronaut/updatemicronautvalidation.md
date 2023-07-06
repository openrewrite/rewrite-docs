# Update to Micronaut Validation 4.x

**org.openrewrite.java.micronaut.UpdateMicronautValidation**

_This recipe will add jakarta validation dependency if needed, migrate from javax.validation if needed, and update micronaut validation dependencies._

## Source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.UpdateMicronautValidation")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.0.1")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.UpdateMicronautValidation</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.micronaut.UpdateMicronautValidation
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate deprecated `javax.validation` packages to `jakarta.validation`](../../java/migrate/jakarta/javaxvalidationmigrationtojakartavalidation.md)
* [Change Gradle dependency group](../../gradle/changedependencygroupid.md)
  * groupId: `io.micronaut`
  * artifactId: `micronaut-validation`
  * newGroupId: `io.micronaut.validation`
  * configuration: `implementation`
* [Change Gradle dependency group](../../gradle/changedependencygroupid.md)
  * groupId: `io.micronaut`
  * artifactId: `micronaut-http-validation`
  * newGroupId: `io.micronaut.validation`
  * configuration: `annotationProcessor`
* [Change Gradle dependency artifact](../../gradle/changedependencyartifactid.md)
  * groupId: `io.micronaut.validation`
  * artifactId: `micronaut-http-validation`
  * newArtifactId: `micronaut-validation-processor`
  * configuration: `annotationProcessor`
* [Change Maven dependency groupId, artifactId and/or the version](../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `io.micronaut`
  * oldArtifactId: `micronaut-validation`
  * newGroupId: `io.micronaut.validation`
  * newVersion: `LATEST`
* [Change Maven annotation processor path](../../java/micronaut/changeannotationprocessorpath.md)
  * oldGroupId: `io.micronaut`
  * oldArtifactId: `micronaut-http-validation`
  * newGroupId: `io.micronaut.validation`
  * newArtifactId: `micronaut-validation-processor`
  * newVersion: `${micronaut.validation.version}`
  * exclusions: `[io.micronaut:micronaut-inject]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.UpdateMicronautValidation
displayName: Update to Micronaut Validation 4.x
description: This recipe will add jakarta validation dependency if needed, migrate from javax.validation if needed, and update micronaut validation dependencies.
recipeList:
  - org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
  - org.openrewrite.gradle.ChangeDependencyGroupId:
      groupId: io.micronaut
      artifactId: micronaut-validation
      newGroupId: io.micronaut.validation
      configuration: implementation
  - org.openrewrite.gradle.ChangeDependencyGroupId:
      groupId: io.micronaut
      artifactId: micronaut-http-validation
      newGroupId: io.micronaut.validation
      configuration: annotationProcessor
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: io.micronaut.validation
      artifactId: micronaut-http-validation
      newArtifactId: micronaut-validation-processor
      configuration: annotationProcessor
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: io.micronaut
      oldArtifactId: micronaut-validation
      newGroupId: io.micronaut.validation
      newVersion: LATEST
  - org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath:
      oldGroupId: io.micronaut
      oldArtifactId: micronaut-http-validation
      newGroupId: io.micronaut.validation
      newArtifactId: micronaut-validation-processor
      newVersion: ${micronaut.validation.version}
      exclusions: [io.micronaut:micronaut-inject]

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jeremy Grelle](mailto:grellej@unityfoundation.io)
* [Tim te Beek](mailto:tim@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateMicronautValidation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
