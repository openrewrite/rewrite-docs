# Migrate deprecated `javax.persistence` packages to `jakarta.persistence`

**org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence**

_Java EE has been rebranded to Jakarta EE, necessitating a package relocation_

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.20.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:1.20.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.20.0")
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
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.20.0</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.persistence`
  * artifactId: `jakarta.persistence-api`
  * version: `latest.release`
  * onlyIfUsing: `javax.persistence.*`
  * acceptTransitive: `true`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.persistence`
  * artifactId: `jakarta.persistence-api`
  * newVersion: `latest.release`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `javax.persistence`
  * newPackageName: `jakarta.persistence`
  * recursive: `true`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `javax.persistence`
  * artifactId: `javax.persistence-api`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.eclipse.persistence`
  * artifactId: `javax.persistence`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
displayName: Migrate deprecated `javax.persistence` packages to `jakarta.persistence`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.persistence
      artifactId: jakarta.persistence-api
      version: latest.release
      onlyIfUsing: javax.persistence.*
      acceptTransitive: true
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.persistence
      artifactId: jakarta.persistence-api
      newVersion: latest.release
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.persistence
      newPackageName: jakarta.persistence
      recursive: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.persistence
      artifactId: javax.persistence-api
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.eclipse.persistence
      artifactId: javax.persistence

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
