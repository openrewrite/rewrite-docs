# Spring Boot 2

**org.openrewrite.java.spring.boot2**  
_Spring Boot 2 best practices._

### Recipe list

* [Upgrade Maven dependency version](https://docs.openrewrite.org/reference/recipes/maven/upgradedependencyversion.md)
	* groupId: org.springframework.boot
	* newVersion: 2.x
* [Upgrade Maven parent project version](https://docs.openrewrite.org/reference/recipes/maven/upgradeparentversion.md)
	* groupId: org.springframework.boot
	* artifactId: spring-boot-starter-parent
	* newVersion: 2.x
* [Upgrade Maven dependency version](https://docs.openrewrite.org/reference/recipes/maven/upgradedependencyversion.md)
	* groupId: org.mockito
* [Remove a Maven project property](https://docs.openrewrite.org/reference/recipes/maven/removeproperty.md)
	* propertyName: thymeleaf.version
* [Remove Maven dependency](https://docs.openrewrite.org/reference/recipes/maven/removedependency.md)
	* groupId: org.webjars
	* artifactId: webjars-locator
* [Change type](https://docs.openrewrite.org/reference/recipes/java/changetype.md)
	* oldFullyQualifiedTypeName: org.springframework.boot.web.support.SpringBootServletInitializer
	* newFullyQualifiedTypeName: org.springframework.boot.web.servlet.support.SpringBootServletInitializer
* [Change type](https://docs.openrewrite.org/reference/recipes/java/changetype.md)
	* oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.HttpMessageConverters
	* newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.http.HttpMessageConverters
* [Change type](https://docs.openrewrite.org/reference/recipes/java/changetype.md)
* [Change Deprecated Hibernate validation constraints to their associated javax variant](https://docs.openrewrite.org/reference/recipes/java/spring/changedeprecatedhibernatevalidationtojavax.md)
* [Add the javax validation-api and spring-boot-starter-validation if necessary](https://docs.openrewrite.org/reference/recipes/java/spring/maybeaddjavaxvalidationdependencies.md)
	* springBootVersion: 2.x
	* javaxValidationApiVersion: 2.x
* [Remove Autowired Annotation from MethodDeclarations](https://docs.openrewrite.org/reference/recipes/java/spring/noautowired.md)
* [No Method Declaration Request Mapping Annotations](https://docs.openrewrite.org/reference/recipes/java/spring/norequestmappingannotation.md)
* [Remove Implicit Web Annotation Names](https://docs.openrewrite.org/reference/recipes/java/spring/implicitwebannotationnames.md)
* [Bean Methods Not Public](https://docs.openrewrite.org/reference/recipes/java/spring/beanmethodsnotpublic.md)
* [Replace @RunWith(SpringRunner.class) with @ExtendsWith(SpringExtension.class)](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/springrunnertospringextension.md)
* [Convert multi condition ConditionalOnBean Annotations to AnyNestedCondition](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/conditionalonbeananynestedcondition.md)
* [RestTemplateBuilderRequestFactory](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/resttemplatebuilderrequestfactory.md)
