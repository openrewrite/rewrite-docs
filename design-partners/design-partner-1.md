# Design Partner 1

This guide is meant as an evolving document for engineers at Design Partner 1 to integrate Rewrite recipes into their repositories according to their specific needs.

### Goals

| Goal | Progress |
| :--- | :--- |
| Spring Boot 1-2 Migration | ◑ |
|         [Configuration Properties](../java/spring/spring-boot-2-migration/springbootconfiguration.md) | ⬤ |
|         [`SpringBootServletInitializer` relocation](../java/spring/spring-boot-2-migration/springbootservletinitializerpackage.md) | ⬤ |
|         Removal of unused spring starter modules | ◯ |
|         [Mockito 1.x-3.x](../java/mockito/) | ⬤ |
|         `@Value` to `@ConfigurationProperties` | ⬤ |
|         Spring Data migration to `Optional` | ◯ |
| Spring Best Practices | ◑ |
|         [Remove implicit web annotations](../java/spring/best-practices/implicitwebannotationnames.md) | ⬤ |
|         [`@RequestMapping` Cross-Site Request Forgery Vulnerability](../java/spring/best-practices/norequestmappingannotation.md) | ⬤ |
|         [Remove @Autowired on constructors](../java/spring/best-practices/noautowired.md) | ⬤ |
|         [Bean methods don't need to be public](../java/spring/best-practices/beanmethodsnotpublic.md) | ⬤ |
|         [Constructor injection](../java/spring/best-practices/constructorinjection.md) \(still needs updating of call sites\) | ◑ |
|         `@Component` to `@Bean` | ◑ |
| Maven Dependency Management | ⬤ |
|         [UpgradeDependencyVersion](../maven/transforming-maven-poms/upgradedependencyversion.md) | ⬤ |
|         [UpgradeParentVersion](../maven/transforming-maven-poms/upgradeparentversion.md) | ⬤ |
| `javax` package migration to `jakarta` dependency migration | ◯ |
|          Servlet | ◯ |
|          XML RPC | ◯ |
|          Persistence | ◯ |
|          XML SOAP | ◯ |
| JUnit 4 to 5 | ◯ |
|          `@Category` to `@Tag` | ◯ |

### Applying to Maven Projects

Place the following configuration in the root `pom.xml` of a repository. The `execute` block in the plugin configuration causes an AST JAR and a CycloneDX BOM to be published to Artifactory whenever the project publishes a new version.

```markup
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://maven.apache.org/POM/4.0.0"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.plan</groupId>
      <artifactId>rewrite-spring</artifactId>
      <version>2.1.0</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>org.openrewrite.plan</groupId>
      <artifactId>rewrite-checkstyle</artifactId>
      <version>1.1.0</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>
    
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>2.1.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.SpringBoot2Migration</recipe>
            <recipe>org.openrewrite.java.Spring</recipe>
            <recipe>org.openrewrite.java.Mockito</recipe>
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

