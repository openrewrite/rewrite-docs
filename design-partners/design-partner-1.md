# Design Partner 1

This guide is meant as an evolving document for engineers at Design Partner 1 to integrate Rewrite recipes into their repositories according to their specific needs.

### Goals

| Goal | Progress |
| :--- | :--- |
| Spring Boot 1-2 Migration | ◑ |
|          Configuration Properties | ⬤ |
|          SpringBootServletInitializer relocation | ⬤ |
|          Removal of unused spring starter modules | ◯ |
|          Mockito 1.x-3.x | ⬤ |
|          `@Value` to `@ConfigurationProperties` | ◑ |

### Applying to Maven Projects

Place the following configuration in the root `pom.xml` of a repository. The `execute` block in the plugin configuration causes an AST JAR to be published to Artifactory whenever the project publishes a new version.

```markup
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://maven.apache.org/POM/4.0.0"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    
  <dependencies>
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
        <version>2.0.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.SpringBoot2Migration</recipe>
            <recipe>org.openrewrite.java.Spring</recipe>
            <recipe>org.openrewrite.java.Mockito</recipe>
          </activeRecipes>
          <configLocation>${maven.multiModuleProjectDirectory}/rewrite.yml</configLocation>
        </configuration>
        <executions>
          <execution>
            <goals>
              <goal>jar</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```



```text
---
type: specs.org.openrewrite.org/v1beta/recipe
name: java.Checkstyle 
visitors:
  - 'org.openrewrite.checkstyle.*'
configure:
  org.openrewrite.checkstyle.*
    congFile: ${maven.multiModuleProjectDirectory}/checkstyle.xml
```

