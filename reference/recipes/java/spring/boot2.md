# Spring Boot 2

**org.openrewrite.java.spring.boot2**  
_Spring Boot 2 best practices._

### Recipe list

* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
	* groupId: org.springframework.boot
	* newVersion: 2.x
* [Upgrade Maven parent project version](../../maven/upgradeparentversion.md)
	* groupId: org.springframework.boot
	* artifactId: spring-boot-starter-parent
	* newVersion: 2.x
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
	* groupId: org.mockito
* [Remove a Maven project property](../../maven/removeproperty.md)
	* propertyName: thymeleaf.version
* [Remove Maven dependency](../../maven/removedependency.md)
	* groupId: org.webjars
	* artifactId: webjars-locator
* [Change type](../../java/changetype.md)
	* oldFullyQualifiedTypeName: org.springframework.boot.web.support.SpringBootServletInitializer
	* newFullyQualifiedTypeName: org.springframework.boot.web.servlet.support.SpringBootServletInitializer
* [Change type](../../java/changetype.md)
	* oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.HttpMessageConverters
	* newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.http.HttpMessageConverters
* [Change type](../../java/changetype.md)
* [Change Deprecated Hibernate validation constraints to their associated javax variant](../../java/spring/changedeprecatedhibernatevalidationtojavax.md)
* [Add the javax validation-api and spring-boot-starter-validation if necessary](../../java/spring/maybeaddjavaxvalidationdependencies.md)
	* springBootVersion: 2.x
	* javaxValidationApiVersion: 2.x
* [Remove Autowired Annotation from MethodDeclarations](../../java/spring/noautowired.md)
* [No Method Declaration Request Mapping Annotations](../../java/spring/norequestmappingannotation.md)
* [Remove Implicit Web Annotation Names](../../java/spring/implicitwebannotationnames.md)
* [Bean Methods Not Public](../../java/spring/beanmethodsnotpublic.md)
* [Replace @RunWith(SpringRunner.class) with @ExtendsWith(SpringExtension.class)](../../java/spring/boot2/springrunnertospringextension.md)
* [Convert multi condition ConditionalOnBean Annotations to AnyNestedCondition](../../java/spring/boot2/conditionalonbeananynestedcondition.md)
* [RestTemplateBuilderRequestFactory](../../java/spring/boot2/resttemplatebuilderrequestfactory.md)
