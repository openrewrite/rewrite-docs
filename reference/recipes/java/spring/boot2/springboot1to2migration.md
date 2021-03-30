# Spring Boot 2.x migration from Spring Boot 1.x

**org.openrewrite.java.spring.boot2.SpringBoot1To2Migration**  
_Migrates Spring Boot 1.x to 2.x including best practices._

### Tags

* spring
* junit
* testing
* spring-boot
* mockito

## Recipe list

* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: org.springframework.boot
  * newVersion: 2.x
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: org.springframework.boot
  * artifactId: spring-boot-starter-parent
  * newVersion: 2.x
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: org.mockito
* [Remove a Maven project property](../../../maven/removeproperty.md)
  * propertyName: thymeleaf.version
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: org.webjars
  * artifactId: webjars-locator
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: org.springframework.boot.web.support.SpringBootServletInitializer
  * newFullyQualifiedTypeName: org.springframework.boot.web.servlet.support.SpringBootServletInitializer
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.HttpMessageConverters
  * newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.http.HttpMessageConverters
* [Change type](../../../java/changetype.md)
* [Change Deprecated Hibernate validation constraints to their associated javax variant](../../../java/spring/changedeprecatedhibernatevalidationtojavax.md)
* [Add the javax validation-api and spring-boot-starter-validation if necessary](../../../java/spring/maybeaddjavaxvalidationdependencies.md)
  * springBootVersion: 2.x
  * javaxValidationApiVersion: 2.x
* [Remove Autowired Annotation from MethodDeclarations](../../../java/spring/noautowired.md)
* [Convert multi condition ConditionalOnBean Annotations to AnyNestedCondition](../../../java/spring/boot2/conditionalonbeananynestedcondition.md)
* [RestTemplateBuilderRequestFactory](../../../java/spring/boot2/resttemplatebuilderrequestfactory.md)
* [Replace EnvironmentUtils with TestPropertyValues](../../../java/spring/boot2/replacedeprecatedenvironmenttestutils.md)
* [JUnit Jupiter migration from JUnit 4.x for Spring Boot 2.x projects](../../../java/spring/boot2/springboot2junit4to5migration.md)
* [Spring Boot 2.x best practices](../../../java/spring/boot2/springboot2bestpractices.md)
