# Migrate deprecated `javax.security.auth.message` packages to `jakarta.security.auth.message`

**org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* security
* javax
* jakarta
* authentication

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.18.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.18.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:1.18.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.38.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.18.0")
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
        <version>4.42.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.18.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:LATEST \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.authentication`
  * artifactId: `jakarta.authentication-api`
  * version: `latest.release`
  * onlyIfUsing: `javax.security.auth.message..*`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.authentication`
  * artifactId: `jakarta.authentication-api`
  * newVersion: `latest.release`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `javax.security.auth.message`
  * newPackageName: `jakarta.security.auth.message`
  * recursive: `true`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `javax.security.auth.message`
  * artifactId: `javax.security.auth.message-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication
displayName: Migrate deprecated `javax.security.auth.message` packages to `jakarta.security.auth.message`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - security
  - javax
  - jakarta
  - authentication
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.authentication
      artifactId: jakarta.authentication-api
      version: latest.release
      onlyIfUsing: javax.security.auth.message..*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.authentication
      artifactId: jakarta.authentication-api
      newVersion: latest.release
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.security.auth.message
      newPackageName: jakarta.security.auth.message
      recursive: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.security.auth.message
      artifactId: javax.security.auth.message-api

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
