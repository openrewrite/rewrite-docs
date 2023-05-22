# Use `javax.validation.constraints`

**org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax**

_Use `javax.validation.constraints` instead of the deprecated `org.hibernate.validator.constraints` in Spring Boot 2.0 or higher._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-20.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.37.0-SNAPSHOT/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.37.0-SNAPSHOT


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.37.0-SNAPSHOT` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.6")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.37.0-SNAPSHOT")
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
        <version>4.46.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.37.0-SNAPSHOT</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.hibernate.validator.constraints.NotBlank`
  * newFullyQualifiedTypeName: `javax.validation.constraints.NotBlank`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.hibernate.validator.constraints.NotEmpty`
  * newFullyQualifiedTypeName: `javax.validation.constraints.NotEmpty`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `javax.validation`
  * artifactId: `validation-api`
  * version: `2.x`
  * onlyIfUsing: `javax.validation.constraints.*`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax
displayName: Use `javax.validation.constraints`
description: Use `javax.validation.constraints` instead of the deprecated `org.hibernate.validator.constraints` in Spring Boot 2.0 or higher.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.validator.constraints.NotBlank
      newFullyQualifiedTypeName: javax.validation.constraints.NotBlank
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.validator.constraints.NotEmpty
      newFullyQualifiedTypeName: javax.validation.constraints.NotEmpty
  - org.openrewrite.maven.AddDependency:
      groupId: javax.validation
      artifactId: validation-api
      version: 2.x
      onlyIfUsing: javax.validation.constraints.*

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
