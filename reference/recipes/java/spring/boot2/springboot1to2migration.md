# Spring Boot 2.x migration from Spring Boot 1.x

** org.openrewrite.java.spring.boot2.SpringBoot1To2Migration**
_Migrates Spring Boot 1.x to 2.x including best practices._

### Tags

* spring
* junit
* testing
* spring-boot
* mockito

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.5.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.5.0

## Recipe list

* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * newVersion: `2.x`
  * trustParent: `true`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.x`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.mockito`
  * newVersion: `3.x`
  * trustParent: `true`
* [Remove a Maven project property](../../../maven/removeproperty.md)
  * propertyName: `thymeleaf.version`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.webjars`
  * artifactId: `webjars-locator`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.web.support.SpringBootServletInitializer`
  * newFullyQualifiedTypeName: `org.springframework.boot.web.servlet.support.SpringBootServletInitializer`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.web.HttpMessageConverters`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.http.HttpMessageConverters`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.web.ErrorController`
  * newFullyQualifiedTypeName: `org.springframework.boot.web.servlet.error.ErrorController`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.hibernate.validator.constraints.NotEmpty`
  * newFullyQualifiedTypeName: `javax.validation.constraints.NotEmpty`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.hibernate.validator.constraints.NotBlank`
  * newFullyQualifiedTypeName: `javax.validation.constraints.NotBlank`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `javax.validation`
  * artifactId: `validation-api`
  * version: `2.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[javax.validation.constraints.NotBlank, javax.validation.constraints.NotEmpty]`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-validation`
  * version: `2.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[javax.validation.constraints.NotBlank, javax.validation.constraints.NotEmpty]`
* [JUnit Jupiter for Spring Boot 2.x projects](../../../java/spring/boot2/springboot2junit4to5migration.md)
* [JUnit Jupiter best practices](../../../java/testing/junit5/junit5bestpractices.md)
* [Migrate Spring Boot properties to 2.0](../../../java/spring/boot2/springbootproperties_2_0.md)
* [Migrate Spring Boot properties to 2.1](../../../java/spring/boot2/springbootproperties_2_1.md)
* [Migrate Spring Boot properties to 2.2](../../../java/spring/boot2/springbootproperties_2_2.md)
* [Migrate Spring Boot properties to 2.3](../../../java/spring/boot2/springbootproperties_2_3.md)
* [Spring Boot 2.x best practices](../../../java/spring/boot2/springboot2bestpractices.md)

## Usage
This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.5.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe":"rewrite-spring":"4.5.0")
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
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBoot1To2Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.5.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.SpringBoot1To2Migration`
