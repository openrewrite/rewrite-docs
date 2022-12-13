# Migrate to Jakarta EE 9 from Jakarta EE 8

**org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta**
_Jakarta EE 9 is the first version of Jakarta EE that uses the new `jakarta` namespace._

### Tags

* jaxb
* jaxws
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.15.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.15.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.15.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.15.0")
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
        <version>4.38.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.15.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.15.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](../../../java/migrate/jakarta/javaxactivationmigrationtojakartaactivation.md)
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](../../../java/migrate/jakarta/javaxannotationmigrationtojakartaannotation.md)
* [Migrate deprecated `javax.batch` packages to `jakarta.batch`](../../../java/migrate/jakarta/javaxbatchmigrationtojakartabatch.md)
* [Migrate deprecated `javax.decorator` packages to `jakarta.decorator`](../../../java/migrate/jakarta/javaxdecoratortojakartadecorator.md)
* [Migrate deprecated `javax.ejb` packages to `jakarta.ejb`](../../../java/migrate/jakarta/javaxejbtojakartaejb.md)
* [Migrate deprecated `javax.el` packages to `jakarta.el`](../../../java/migrate/jakarta/javaxeltojakartael.md)
* [Migrate deprecated `javax.enterprise` packages to `jakarta.enterprise`](../../../java/migrate/jakarta/javaxenterprisetojakartaenterprise.md)
* [Migrate deprecated `javax.faces` packages to `jakarta.faces`](../../../java/migrate/jakarta/javaxfacestojakartafaces.md)
* [Migrate deprecated `javax.inject` packages to `jakarta.inject`](../../../java/migrate/jakarta/javaxinjectmigrationtojakartainject.md)
* [Migrate deprecated `javax.interceptor` packages to `jakarta.interceptor`](../../../java/migrate/jakarta/javaxinterceptortojakartainterceptor.md)
* [Migrate deprecated `javax.jms` packages to `jakarta.jms`](../../../java/migrate/jakarta/javaxjmstojakartajms.md)
* [Migrate deprecated `javax.json` packages to `jakarta.json`](../../../java/migrate/jakarta/javaxjsontojakartajson.md)
* [Migrate deprecated `javax.jws` packages to `jakarta.jws`](../../../java/migrate/jakarta/javaxjwstojakartajws.md)
* [Migrate deprecated `javax.mail` packages to `jakarta.mail`](../../../java/migrate/jakarta/javaxmailtojakartamail.md)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](../../../java/migrate/jakarta/javaxpersistencetojakartapersistence.md)
* [Migrate deprecated `javax.resource` packages to `jakarta.resource`](../../../java/migrate/jakarta/javaxresourcetojakartaresource.md)
* [Migrate deprecated `javax.security` packages to `jakarta.security`](../../../java/migrate/jakarta/javaxsecuritytojakartasecurity.md)
* [Migrate deprecated `javax.servlet` packages to `jakarta.servlet`](../../../java/migrate/jakarta/javaxservlettojakartaservlet.md)
* [Migrate deprecated `javax.transaction` packages to `jakarta.transaction`](../../../java/migrate/jakarta/javaxtransactionmigrationtojakartatransaction.md)
* [Migrate deprecated `javax.validation` packages to `jakarta.validation`](../../../java/migrate/jakarta/javaxvalidationmigrationtojakartavalidation.md)
* [Migrate deprecated `javax.websocket` packages to `jakarta.websocket`](../../../java/migrate/jakarta/javaxwebsockettojakartawebsocket.md)
* [Migrate deprecated `javax.ws` packages to `jakarta.ws`](../../../java/migrate/jakarta/javaxwstojakartaws.md)
* [Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`](../../../java/migrate/jakarta/javaxxmlbindmigrationtojakartaxmlbind.md)
* [Migrate deprecated `javax.soap` packages to `jakarta.soap`](../../../java/migrate/jakarta/javaxxmlsoaptojakartaxmlsoap.md)
* [Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`](../../../java/migrate/jakarta/javaxxmlwsmigrationtojakartaxmlws.md)
* [Migrate Jackson from javax to jakarta namespace](../../../java/migrate/jakarta/jacksonjavaxtojakarta.md)
* [Migrate Ehcache from javax to jakarta namespace](../../../java/migrate/jakarta/ehcachejavaxtojakarta.md)
* [Migrate Johnzon from javax to jakarta namespace](../../../java/migrate/jakarta/johnzonjavaxtojakarta.md)
* [Migrate RestAssured from javax to jakarta namespace by upgrading to a version compatible with J2EE9](../../../java/migrate/jakarta/restassuredjavaxtojakarta.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
displayName: Migrate to Jakarta EE 9 from Jakarta EE 8
description: Jakarta EE 9 is the first version of Jakarta EE that uses the new `jakarta` namespace.
tags:
  - jaxb
  - jaxws
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.jakarta.JavaxActivationMigrationToJakartaActivation
  - org.openrewrite.java.migrate.jakarta.JavaxAnnotationMigrationToJakartaAnnotation
  - org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch
  - org.openrewrite.java.migrate.jakarta.JavaxDecoratorToJakartaDecorator
  - org.openrewrite.java.migrate.jakarta.JavaxEjbToJakartaEjb
  - org.openrewrite.java.migrate.jakarta.JavaxElToJakartaEl
  - org.openrewrite.java.migrate.jakarta.JavaxEnterpriseToJakartaEnterprise
  - org.openrewrite.java.migrate.jakarta.JavaxFacesToJakartaFaces
  - org.openrewrite.java.migrate.jakarta.JavaxInjectMigrationToJakartaInject
  - org.openrewrite.java.migrate.jakarta.JavaxInterceptorToJakartaInterceptor
  - org.openrewrite.java.migrate.jakarta.JavaxJmsToJakartaJms
  - org.openrewrite.java.migrate.jakarta.JavaxJsonToJakartaJson
  - org.openrewrite.java.migrate.jakarta.JavaxJwsToJakartaJws
  - org.openrewrite.java.migrate.jakarta.JavaxMailToJakartaMail
  - org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
  - org.openrewrite.java.migrate.jakarta.JavaxResourceToJakartaResource
  - org.openrewrite.java.migrate.jakarta.JavaxSecurityToJakartaSecurity
  - org.openrewrite.java.migrate.jakarta.JavaxServletToJakartaServlet
  - org.openrewrite.java.migrate.jakarta.JavaxTransactionMigrationToJakartaTransaction
  - org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
  - org.openrewrite.java.migrate.jakarta.JavaxWebsocketToJakartaWebsocket
  - org.openrewrite.java.migrate.jakarta.JavaxWsToJakartaWs
  - org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind
  - org.openrewrite.java.migrate.jakarta.JavaxXmlSoapToJakartaXmlSoap
  - org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs
  - org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta
  - org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta
  - org.openrewrite.java.migrate.jakarta.JohnzonJavaxToJakarta
  - org.openrewrite.java.migrate.jakarta.RestAssuredJavaxToJakarta

```
{% endtab %}
{% endtabs %}
