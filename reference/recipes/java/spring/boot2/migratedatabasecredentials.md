# Migrate flyway and liquibase credentials.

** org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials**
_If you currently define a `spring.flyway.url` or `spring.liquibase.url` you may need to provide additional username and password properties. In earlier versions of Spring Boot, these settings were derived from `spring.datasource` properties but this turned out to be problematic for people that provided their own `DataSource` beans._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.17.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.17.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.17.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.17.0")
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
        <version>4.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.17.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate flyway credentials](../../../java/spring/boot2/migratedatabasecredentials$migratedatabasecredentialsfortoolyaml.md)
* [Migrate flyway credentials](../../../java/spring/boot2/migratedatabasecredentials$migratedatabasecredentialsfortoolproperties.md)
* [Migrate liquibase credentials](../../../java/spring/boot2/migratedatabasecredentials$migratedatabasecredentialsfortoolyaml.md)
* [Migrate liquibase credentials](../../../java/spring/boot2/migratedatabasecredentials$migratedatabasecredentialsfortoolproperties.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials
displayName: Migrate flyway and liquibase credentials.
description: If you currently define a `spring.flyway.url` or `spring.liquibase.url` you may need to provide additional username and password properties. In earlier versions of Spring Boot, these settings were derived from `spring.datasource` properties but this turned out to be problematic for people that provided their own `DataSource` beans.
recipeList:
  - org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials$MigrateDatabaseCredentialsForToolYaml
  - org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials$MigrateDatabaseCredentialsForToolProperties
  - org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials$MigrateDatabaseCredentialsForToolYaml
  - org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials$MigrateDatabaseCredentialsForToolProperties

```
{% endtab %}
{% endtabs %}
