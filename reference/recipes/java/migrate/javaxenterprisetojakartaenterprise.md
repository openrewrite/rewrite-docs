# Migrate deprecated `javax.enterprise` packages to `jakarta.enterprise`

** org.openrewrite.java.migrate.JavaxEnterpriseToJakartaEnterprise**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

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
    activeRecipe("org.openrewrite.java.migrate.JavaxEnterpriseToJakartaEnterprise")
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
            <recipe>org.openrewrite.java.migrate.JavaxEnterpriseToJakartaEnterprise</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.migrate.JavaxEnterpriseToJakartaEnterprise`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.enterprise`
  * artifactId: `jakarta.enterprise.cdi-api`
  * version: `3.0.1`
  * onlyIfUsing: `javax.enterprise.+`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.enterprise`
  * artifactId: `jakarta.enterprise.cdi-api`
  * newVersion: `3.0.1`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.enterprise`
  * newPackageName: `jakarta.enterprise`
  * recursive: `true`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.enterprise`
  * artifactId: `cdi-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxEnterpriseToJakartaEnterprise
displayName: Migrate deprecated `javax.enterprise` packages to `jakarta.enterprise`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.enterprise
      artifactId: jakarta.enterprise.cdi-api
      version: 3.0.1
      onlyIfUsing: javax.enterprise.+
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.enterprise
      artifactId: jakarta.enterprise.cdi-api
      newVersion: 3.0.1
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.enterprise
      newPackageName: jakarta.enterprise
      recursive: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.enterprise
      artifactId: cdi-api

```
{% endtab %}
{% endtabs %}
