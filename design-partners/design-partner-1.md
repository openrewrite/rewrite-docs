# Design Partner 1

This guide is an evolving document for engineers at Design Partner 1 to integrate Rewrite recipes into their repositories according to their specific needs.

## Goals

| JUnit 4-5 Migration | Progress |
| :--- | :--- |
| Update lifecycle annotations (e.g.: Before -> BeforeEach)| ⬤ |
| `@Category` to `@Tag` | ⬤ |
| `Assert` to `Assertions` | ⬤ |
| `org.junit.Test` to `org.junit.jupiter.api.Test` | ⬤ |
| `@RunWith(SpringRunner.class)` to `@ExtendsWith(SpringExtension.class)` | ⬤ |
| `Assertions` to AssertJ | ◑ |
| [Hamcrest to AssertJ](https://github.com/openrewrite/rewrite-testing-frameworks/issues/8) | ◑ |
| [Handle ExpectedExceptions rule](https://github.com/openrewrite/rewrite-testing-frameworks/issues/9) | ◯ |
| Handle `@RunWith(MockitoJUnitRunner.class)` | ◯ |
| Updates dependencies in pom.xml | ◯ |

| Mockito 1-3 Migration | Progress |
| :--- | :--- |
| `org.mockito.MockitoAnnotations.Mock` to `org.mockito.Mock` | ⬤ |
| `org.mockito.Matchers` -> `org.mockito.ArgumentMatchers` | ⬤ |
| `org.mockito.Matchers` -> `org.mockito.ArgumentMatchers` | ⬤ |
| `InvocationOnMock.getArgumentAt()` -> `InvocationOnMock.getArgument()` | ⬤ |
| `org.mockito.runners.MockitoJUnitRunner` -> `org.mockito.junit.MockitoJUnitRunner` | ⬤ |
| Updates dependencies in pom.xml | ◯ |

| Spring Boot 1-2 Migration | Progress |
| :--- | :--- |
| [Configuration Properties](../java/spring/spring-boot-2-migration/springbootconfiguration.md) | ⬤ |
| [`SpringBootServletInitializer` relocation](../java/spring/spring-boot-2-migration/springbootservletinitializerpackage.md) | ⬤ |
| [Remove implicit web annotations](../java/spring/best-practices/implicitwebannotationnames.md) | ⬤ |
| [`@RequestMapping` Cross-Site Request Forgery Vulnerability](../java/spring/best-practices/norequestmappingannotation.md) | ⬤ |
| [Remove @Autowired on constructors](../java/spring/best-practices/noautowired.md) | ⬤ |
| [Bean methods don't need to be public](../java/spring/best-practices/beanmethodsnotpublic.md) | ⬤ |
| Maven Dependency Management | ⬤ |
| [UpgradeDependencyVersion](../maven/transforming-maven-poms/upgradedependencyversion.md) | ⬤ |
| [UpgradeParentVersion](../maven/transforming-maven-poms/upgradeparentversion.md) | ⬤ |
| `@Value` to `@ConfigurationProperties` | ◑ |
| Spring Best Practices | ◑ |
| [Constructor injection](../java/spring/best-practices/constructorinjection.md) \(still needs updating of call sites\) | ◑ |
| `@Component` to `@Bean` | ◑ |
| Removal of unused spring starter modules | ◯ |
| Spring Data migration to `Optional` | ◯ |
| `javax` package migration to `jakarta` dependency migration | ◯ |
| Servlet | ◯ |
| XML RPC | ◯ |
| Persistence | ◯ |
| XML SOAP | ◯ |
| Updates dependencies in pom.xml | ◑ |

| Software Composition Analysis | Progress |
| :--- | :---: |
| Publishes CycloneDX BOM | ⬤ |

## Applying to Maven Projects

Place the following configuration in the root `pom.xml` of a repository. The `execute` block in the plugin configuration causes an AST JAR and a CycloneDX BOM to be published to Artifactory whenever the project publishes a new version.

```xml
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://maven.apache.org/POM/4.0.0"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-spring</artifactId>
      <version>3.0.1</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-checkstyle</artifactId>
      <version>2.0.1</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-testing-frameworks</artifactId>
      <version>0.7.0</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>2.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.SpringBoot2Migration</recipe>
            <recipe>org.openrewrite.java.testing.JUnit5Migration</recipe>
            <recipe>org.openrewrite.java.testing.Mockito1to3Migration</recipe>
          </activeRecipes>
        </configuration>
        <executions>
          <execution>
            <goals>
              <goal>publish</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```

