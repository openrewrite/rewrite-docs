# Migrate deprecated `javax` packages to `jakarta`

** org.openrewrite.java.migrate.JavaxMigrationToJakarta**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* jaxb
* jaxws
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.8.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.23.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxMigrationToJakarta")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.8.0")
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
        <version>4.26.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxMigrationToJakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.migrate.JavaxMigrationToJakarta`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](../../java/migrate/javaxactivationmigrationtojakartaactivation.md)
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](../../java/migrate/javaxannotationmigrationtojakartaannotation.md)
* [Migrate deprecated `javax.batch` packages to `jakarta.batch`](../../java/migrate/javaxbatchmigrationtojakartabatch.md)
* [Migrate deprecated `javax.validation` packages to `jakarta.validation`](../../java/migrate/javaxvalidationmigrationtojakartavalidation.md)
* [Migrate deprecated `javax.decorator` packages to `jakarta.decorator`](../../java/migrate/javaxdecoratortojakartadecorator.md)
* [Migrate deprecated `javax.ejb` packages to `jakarta.ejb`](../../java/migrate/javaxejbtojakartaejb.md)
* [Migrate deprecated `javax.el` packages to `jakarta.el`](../../java/migrate/javaxeltojakartael.md)
* [Migrate deprecated `javax.enterprise` packages to `jakarta.enterprise`](../../java/migrate/javaxenterprisetojakartaenterprise.md)
* [Migrate deprecated `javax.faces` packages to `jakarta.faces`](../../java/migrate/javaxfacestojakartafaces.md)
* [Migrate deprecated `javax.inject` packages to `jakarta.inject`](../../java/migrate/javaxinjectmigrationtojakartainject.md)
* [Migrate deprecated `javax.interceptor` packages to `jakarta.interceptor`](../../java/migrate/javaxinterceptortojakartainterceptor.md)
* [Migrate deprecated `javax.jms` packages to `jakarta.jms`](../../java/migrate/javaxjmstojakartajms.md)
* [Migrate deprecated `javax.json` packages to `jakarta.json`](../../java/migrate/javaxjsontojakartajson.md)
* [Migrate deprecated `javax.jws` packages to `jakarta.jws`](../../java/migrate/javaxjwstojakartajws.md)
* [Migrate deprecated `javax.mail` packages to `jakarta.mail`](../../java/migrate/javaxmailtojakartamail.md)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](../../java/migrate/javaxpersistencetojakartapersistence.md)
* [Migrate deprecated `javax.resource` packages to `jakarta.resource`](../../java/migrate/javaxresourcetojakartaresource.md)
* [Migrate deprecated `javax.security` packages to `jakarta.security`](../../java/migrate/javaxsecuritytojakartasecurity.md)
* [Migrate deprecated `javax.servlet` packages to `jakarta.servlet`](../../java/migrate/javaxservlettojakartaservlet.md)
* [Migrate deprecated `javax.transaction` packages to `jakarta.transaction`](../../java/migrate/javaxtransactionmigrationtojakartatransaction.md)
* [Migrate deprecated `javax.websocket` packages to `jakarta.websocket`](../../java/migrate/javaxwebsockettojakartawebsocket.md)
* [Migrate deprecated `javax.ws` packages to `jakarta.ws`](../../java/migrate/javaxwstojakartaws.md)
* [Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`](../../java/migrate/javaxxmlbindmigrationtojakartaxmlbind.md)
* [Migrate deprecated `javax.soap` packages to `jakarta.soap`](../../java/migrate/javaxxmlsoaptojakartaxmlsoap.md)
* [Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`](../../java/migrate/javaxxmlwsmigrationtojakartaxmlws.md)
* [migrate persistence.xml files](../../java/migrate/javaxperistencexmltojakartapersistencexml.md)

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
  - org.openrewrite.java.migrate.JavaxValidationMigrationToJakartaValidation
  - org.openrewrite.java.migrate.JavaxDecoratorToJakartaDecorator
  - org.openrewrite.java.migrate.JavaxEjbToJakartaEjb
  - org.openrewrite.java.migrate.JavaxElToJakartaEl
  - org.openrewrite.java.migrate.JavaxEnterpriseToJakartaEnterprise
  - org.openrewrite.java.migrate.JavaxFacesToJakartaFaces
  - org.openrewrite.java.migrate.JavaxInjectMigrationToJakartaInject
  - org.openrewrite.java.migrate.JavaxInterceptorToJakartaInterceptor
  - org.openrewrite.java.migrate.JavaxJmsToJakartaJms
  - org.openrewrite.java.migrate.JavaxJsonToJakartaJson
  - org.openrewrite.java.migrate.JavaxJwsToJakartaJws
  - org.openrewrite.java.migrate.JavaxMailToJakartaMail
  - org.openrewrite.java.migrate.JavaxPersistenceToJakartaPersistence
  - org.openrewrite.java.migrate.JavaxResourceToJakartaResource
  - org.openrewrite.java.migrate.JavaxSecurityToJakartaSecurity
  - org.openrewrite.java.migrate.JavaxServletToJakartaServlet
  - org.openrewrite.java.migrate.JavaxTransactionMigrationToJakartaTransaction
  - org.openrewrite.java.migrate.JavaxWebsocketToJakartaWebsocket
  - org.openrewrite.java.migrate.JavaxWsToJakartaWs
  - org.openrewrite.java.migrate.JavaxXmlBindMigrationToJakartaXmlBind
  - org.openrewrite.java.migrate.JavaxXmlSoapToJakartaXmlSoap
  - org.openrewrite.java.migrate.JavaxXmlWsMigrationToJakartaXmlWs
  - org.openrewrite.java.migrate.JavaxPeristenceXmlToJakartaPersistenceXml

```
{% endtab %}
{% endtabs %}
