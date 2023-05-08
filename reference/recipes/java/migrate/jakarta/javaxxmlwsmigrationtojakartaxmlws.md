# Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`

**org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs**

_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* javax
* jaxws
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.21.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.21.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:1.21.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.21.1")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.21.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * version: `latest.release`
  * onlyIfUsing: `javax.xml.ws..*`
  * acceptTransitive: `true`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * newVersion: `latest.release`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `com.sun.xml.ws`
  * artifactId: `jaxws-rt`
  * version: `latest.release`
  * scope: `runtime`
  * onlyIfUsing: `javax.xml.ws..*`
  * acceptTransitive: `true`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `com.sun.xml.ws`
  * artifactId: `jaxws-rt`
  * newVersion: `latest.release`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `javax.xml.ws`
  * newPackageName: `jakarta.xml.ws`
  * recursive: `true`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `javax.xml.ws`
  * artifactId: `jaxws-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs
displayName: Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - javax
  - jaxws
  - jakarta
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.xml.ws
      artifactId: jakarta.xml.ws-api
      version: latest.release
      onlyIfUsing: javax.xml.ws..*
      acceptTransitive: true
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.xml.ws
      artifactId: jakarta.xml.ws-api
      newVersion: latest.release
  - org.openrewrite.maven.AddDependency:
      groupId: com.sun.xml.ws
      artifactId: jaxws-rt
      version: latest.release
      scope: runtime
      onlyIfUsing: javax.xml.ws..*
      acceptTransitive: true
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: com.sun.xml.ws
      artifactId: jaxws-rt
      newVersion: latest.release
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.xml.ws
      newPackageName: jakarta.xml.ws
      recursive: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.xml.ws
      artifactId: jaxws-api

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
