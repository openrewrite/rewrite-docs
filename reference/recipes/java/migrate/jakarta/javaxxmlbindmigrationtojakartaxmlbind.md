# Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`

**org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind**

_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* jaxb
* javax
* jakarta

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.6


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.6")
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
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.6</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * version: `latest.release`
  * onlyIfUsing: `javax.xml.bind..*`
  * acceptTransitive: `true`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * newVersion: `latest.release`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.glassfish.jaxb`
  * artifactId: `jaxb-runtime`
  * version: `latest.release`
  * onlyIfUsing: `javax.xml.bind..*`
  * scope: `runtime`
  * acceptTransitive: `true`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.glassfish.jaxb`
  * artifactId: `jaxb-runtime`
  * newVersion: `latest.release`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `javax.xml.bind`
  * newPackageName: `jakarta.xml.bind`
  * recursive: `true`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `javax.xml.bind`
  * artifactId: `jaxb-api`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
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
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      version: latest.release
      onlyIfUsing: javax.xml.bind..*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      newVersion: latest.release
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.glassfish.jaxb
      artifactId: jaxb-runtime
      version: latest.release
      onlyIfUsing: javax.xml.bind..*
      scope: runtime
      acceptTransitive: true
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.glassfish.jaxb
      artifactId: jaxb-runtime
      newVersion: latest.release
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.xml.bind
      newPackageName: jakarta.xml.bind
      recursive: true
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: javax.xml.bind
      artifactId: jaxb-api
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: com.sun.xml.bind
      artifactId: jaxb-impl

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
