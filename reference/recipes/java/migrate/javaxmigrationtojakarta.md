# Migrate deprecated `javax` packages to `jakarta`

** org.openrewrite.java.migrate.JavaxMigrationToJakarta**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* jaxb
* jaxws
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.11.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.11.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:0.11.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxMigrationToJakarta")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:0.11.0")
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
        <version>4.16.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxMigrationToJakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>0.11.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.JavaxMigrationToJakarta`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](../../java/migrate/javaxactivationmigrationtojakartaactivation.md)
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](../../java/migrate/javaxannotationmigrationtojakartaannotation.md)
* [Migrate deprecated `javax.batch` packages to `jakarta.batch`](../../java/migrate/javaxbatchmigrationtojakartabatch.md)
* [Migrate deprecated `javax.inject` packages to `jakarta.inject`](../../java/migrate/javaxinjectmigrationtojakartainject.md)
* [Migrate deprecated `javax.transaction` packages to `jakarta.transaction`](../../java/migrate/javaxtransactionmigrationtojakartatransaction.md)
* [Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`](../../java/migrate/javaxxmlbindmigrationtojakartaxmlbind.md)
* [Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`](../../java/migrate/javaxxmlwsmigrationtojakartaxmlws.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxMigrationToJakarta
displayName: Migrate deprecated `javax` packages to `jakarta`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - jaxb
  - jaxws
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.JavaxActivationMigrationToJakartaActivation
  - org.openrewrite.java.migrate.JavaxAnnotationMigrationToJakartaAnnotation
  - org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch
  - org.openrewrite.java.migrate.JavaxInjectMigrationToJakartaInject
  - org.openrewrite.java.migrate.JavaxTransactionMigrationToJakartaTransaction
  - org.openrewrite.java.migrate.JavaxXmlBindMigrationToJakartaXmlBind
  - org.openrewrite.java.migrate.JavaxXmlWsMigrationToJakartaXmlWs

```
{% endtab %}
{% endtabs %}
