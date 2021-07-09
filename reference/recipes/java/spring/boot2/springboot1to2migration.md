# Spring Boot 2.x migration from Spring Boot 1.x

 **org.openrewrite.java.spring.boot2.SpringBoot1To2Migration** _Migrates Spring Boot 1.x to 2.x including best practices._

### Tags

* spring
* junit
* testing
* spring-boot
* mockito

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.6.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.6.1

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.6.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.6.1")
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
        <version>4.6.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBoot1To2Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.6.1</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.SpringBoot1To2Migration`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
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
* [Remove Maven project property](../../../maven/removeproperty.md)
  * propertyName: `thymeleaf.version`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.webjars`
  * artifactId: `webjars-locator`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.web.support.SpringBootServletInitializer`
  * newFullyQualifiedTypeName: `org.springframework.boot.web.servlet.support.SpringBootServletInitializer`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.web.HttpMessageConverters`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.http.HttpMessageConverters`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.web.ErrorController`
  * newFullyQualifiedTypeName: `org.springframework.boot.web.servlet.error.ErrorController`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.hibernate.validator.constraints.NotEmpty`
  * newFullyQualifiedTypeName: `javax.validation.constraints.NotEmpty`
* [Change type](../../changetype.md)
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
* [JUnit Jupiter for Spring Boot 2.x projects](springboot2junit4to5migration.md)
* [Remove the `@Autowired` annotation on inferred constructor](../noautowiredonconstructor.md)
* [Migrate multi-condition `@ConditionalOnBean` annotations](conditionalonbeananynestedcondition.md)
* [Migrate `RestTemplateBuilder`](resttemplatebuilderrequestfactory.md)
* [Replace `EnvironmentTestUtils` with `TestPropertyValues`](replacedeprecatedenvironmenttestutils.md)
* [Migrate Spring Boot properties to 2.0](springbootproperties_2_0.md)
* [Migrate Spring Boot properties to 2.1](springbootproperties_2_1.md)
* [Migrate Spring Boot properties to 2.2](springbootproperties_2_2.md)
* [Migrate Spring Boot properties to 2.3](springbootproperties_2_3.md)
* [Spring Boot 2.x best practices](springboot2bestpractices.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
displayName: Spring Boot 2.x migration from Spring Boot 1.x
description: Migrates Spring Boot 1.x to 2.x including best practices.
tags:
  - spring
  - junit
  - testing
  - spring-boot
  - mockito
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      newVersion: 2.x
      trustParent: true
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.x
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.mockito
      newVersion: 3.x
      trustParent: true
  - org.openrewrite.maven.RemoveProperty:
      propertyName: thymeleaf.version
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.webjars
      artifactId: webjars-locator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.web.support.SpringBootServletInitializer
      newFullyQualifiedTypeName: org.springframework.boot.web.servlet.support.SpringBootServletInitializer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.HttpMessageConverters
      newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.http.HttpMessageConverters
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.ErrorController
      newFullyQualifiedTypeName: org.springframework.boot.web.servlet.error.ErrorController
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.validator.constraints.NotEmpty
      newFullyQualifiedTypeName: javax.validation.constraints.NotEmpty
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.validator.constraints.NotBlank
      newFullyQualifiedTypeName: javax.validation.constraints.NotBlank
  - org.openrewrite.maven.AddDependency:
      groupId: javax.validation
      artifactId: validation-api
      version: 2.x
      releasesOnly: false
      onlyIfUsing: [javax.validation.constraints.NotBlank, javax.validation.constraints.NotEmpty]
  - org.openrewrite.maven.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-validation
      version: 2.x
      releasesOnly: false
      onlyIfUsing: [javax.validation.constraints.NotBlank, javax.validation.constraints.NotEmpty]
  - org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
  - org.openrewrite.java.spring.NoAutowiredOnConstructor
  - org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedCondition
  - org.openrewrite.java.spring.boot2.RestTemplateBuilderRequestFactory
  - org.openrewrite.java.spring.boot2.ReplaceDeprecatedEnvironmentTestUtils
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_1
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_2
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_3
  - org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
```
{% endtab %}
{% endtabs %}

