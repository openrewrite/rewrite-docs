# Migrate to Hibernate 6.1.x

**org.openrewrite.hibernate.MigrateToHibernate61**

_This recipe will apply changes commonly needed when migrating to Hibernate 6.1.x. The hibernate dependencies will   be updated to use the new org.hibernate.orm group ID and the recipe will make changes necessary to use Hibernate with Jakarta EE 9.0._

## Source

[GitHub](https://github.com/openrewrite/rewrite-hibernate/blob/main/src/main/resources/META-INF/rewrite/hibernate-6.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-hibernate/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-hibernate/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-hibernate
* version: 1.0.3


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-hibernate:1.0.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("org.openrewrite.hibernate.MigrateToHibernate61")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-hibernate:1.0.3")
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
    dependencies { classpath("org.openrewrite:plugin:6.3.5") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-hibernate:1.0.3")
    }
    rewrite {
        activeRecipe("org.openrewrite.hibernate.MigrateToHibernate61")
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
        <version>5.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.hibernate.MigrateToHibernate61</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-hibernate</artifactId>
            <version>1.0.3</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-hibernate:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.hibernate.MigrateToHibernate61
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate Hibernate dependencies to 6.1.x](../hibernate/migratetohibernatedependencies61.md)
* [@Type annotation type parameter migration](../hibernate/typeannotationparameter.md)
* [Rename `JavaTypeDescriptor` and `SqlTypeDescriptor` to `JavaType` and `SqlType`](../hibernate/typedescriptortotype.md)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](../java/migrate/jakarta/javaxpersistencetojakartapersistence.md)
* [Migrate xmlns entries in `persistence.xml` files](../java/migrate/jakarta/javaxpersistencexmltojakartapersistencexml.md)
* [Migrate Hibernate Types to Hypersistence Utils 6.0](../hibernate/migratetohypersistenceutilshibernate6/0.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.hibernate.MigrateToHibernate61
displayName: Migrate to Hibernate 6.1.x
description: This recipe will apply changes commonly needed when migrating to Hibernate 6.1.x. The hibernate dependencies will   be updated to use the new org.hibernate.orm group ID and the recipe will make changes necessary to use Hibernate with Jakarta EE 9.0.

recipeList:
  - org.openrewrite.hibernate.MigrateToHibernateDependencies61
  - org.openrewrite.hibernate.TypeAnnotationParameter
  - org.openrewrite.hibernate.TypeDescriptorToType
  - org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
  - org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml
  - org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate6.0

```
{% endtab %}
{% endtabs %}

## Contributors
* [Alex Boyko](mailto:aboyko@vmware.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.hibernate.MigrateToHibernate61)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
