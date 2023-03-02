# Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`

**org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* jaxb
* javax
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.17.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.17.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.17.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.37.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.17.1")
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
        <version>4.41.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.17.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:LATEST \
  -DactiveRecipes=org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * version: `latest.release`
  * onlyIfUsing: `javax.xml.bind..*`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * newVersion: `latest.release`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.glassfish.jaxb`
  * artifactId: `jaxb-runtime`
  * version: `latest.release`
  * scope: `runtime`
  * onlyIfUsing: `javax.xml.bind..*`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.glassfish.jaxb`
  * artifactId: `jaxb-runtime`
  * newVersion: `latest.release`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `javax.xml.bind`
  * newPackageName: `jakarta.xml.bind`
  * recursive: `true`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `javax.xml.bind`
  * artifactId: `jaxb-api`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `com.sun.xml.bind`
  * artifactId: `jaxb-impl`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind
displayName: Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - jaxb
  - javax
  - jakarta
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      version: latest.release
      onlyIfUsing: javax.xml.bind..*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      newVersion: latest.release
  - org.openrewrite.maven.AddDependency:
      groupId: org.glassfish.jaxb
      artifactId: jaxb-runtime
      version: latest.release
      scope: runtime
      onlyIfUsing: javax.xml.bind..*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.glassfish.jaxb
      artifactId: jaxb-runtime
      newVersion: latest.release
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.xml.bind
      newPackageName: jakarta.xml.bind
      recursive: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.xml.bind
      artifactId: jaxb-api
  - org.openrewrite.maven.RemoveDependency:
      groupId: com.sun.xml.bind
      artifactId: jaxb-impl

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
