# Migrate from OpenJPA to EclipseLink JPA

**org.openrewrite.java.migrate.javax.openJPAToEclipseLink**

_These recipes help migrate Java Persistence applications using OpenJPA to EclipseLink JPA._

### Tags

* javaee7
* deprecated

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/openjpa-to-eclipselink.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.18.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.18.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.18.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.openJPAToEclipseLink")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.18.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.18.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.javax.openJPAToEclipseLink")
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.openJPAToEclipseLink</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.18.1</version>
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

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.openJPAToEclipseLink 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe openJPAToEclipseLink
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [`@ElementCollection` annotations must be accompanied by a defined `@Column` annotation](../../../java/migrate/javax/addcolumnannotation.md)
* [`@Entity` objects with constructors must also have a default constructor](../../../java/migrate/javax/adddefaultconstructortoentityclass.md)
* [Attributes with automatically generated values require configuration](../../../java/migrate/javax/addtablegenerator.md)
* [Unannotated collection attributes require a Transient annotation](../../../java/migrate/javax/addtransientannotationtocollections.md)
* [Unannotated entity attributes require a Transient annotation](../../../java/migrate/javax/addtransientannotationtoentity.md)
* [Private accessor methods must have a `@Transient` annotation](../../../java/migrate/javax/addtransientannotationtoprivateaccessor.md)
* [`@Embeddable` classes cannot have an `@Id` annotation when referenced by an `@EmbeddedId` annotation](../../../java/migrate/javax/removeembeddableid.md)
* [Remove the `@Temporal` annotation for some `java.sql` attributes](../../../java/migrate/javax/removetemporalannotation.md)
* [`@JoinColumn` annotations must be used with relationship mappings](../../../java/migrate/javax/usejoincolumnformapping.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.openJPAToEclipseLink
displayName: Migrate from OpenJPA to EclipseLink JPA
description: These recipes help migrate Java Persistence applications using OpenJPA to EclipseLink JPA.
tags:
  - javaee7
  - deprecated
recipeList:
  - org.openrewrite.java.migrate.javax.AddColumnAnnotation
  - org.openrewrite.java.migrate.javax.AddDefaultConstructorToEntityClass
  - org.openrewrite.java.migrate.javax.AddTableGenerator
  - org.openrewrite.java.migrate.javax.AddTransientAnnotationToCollections
  - org.openrewrite.java.migrate.javax.AddTransientAnnotationToEntity
  - org.openrewrite.java.migrate.javax.AddTransientAnnotationToPrivateAccessor
  - org.openrewrite.java.migrate.javax.RemoveEmbeddableId
  - org.openrewrite.java.migrate.javax.RemoveTemporalAnnotation
  - org.openrewrite.java.migrate.javax.UseJoinColumnForMapping

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.openJPAToEclipseLink)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Evie Lau, Chuka Obinabo, [Tim te Beek](mailto:timtebeek@gmail.com)
