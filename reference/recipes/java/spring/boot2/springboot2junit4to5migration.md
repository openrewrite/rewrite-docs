# JUnit Jupiter migration from JUnit 4.x for Spring Boot 2.x projects

**org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration**  
_Migrates Spring Boot 2.x projects having JUnit 4.x tests to JUnit Jupiter_

### Tags

* spring
* junit
* testing
* spring-boot

## Recipe list

* [`@OutputCaptureRule` to `@ExtendWith(OutputCaptureExtension.class)`](outputcaptureextension.md)
* [JUnit4 @RunWith to JUnit Jupiter @ExtendWith](../../testing/junit5/runnertoextension.md)
  * runners: \[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner\]
  * extension: org.springframework.test.context.junit.jupiter.SpringExtension
* [Remove JUnit4 @RunWith annotations that do not require an @ExtendsWith replacement.](../../testing/junit5/removeobsoleterunners.md)
  * obsoleteRunners: \[org.springframework.boot.junit.runner.classpath.ModifiedClassPathRunner, org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathRunner\]
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: org.springframework.boot
  * artifactId: spring-boot-tools
  * version: 2.x
  * releasesOnly: false
  * scope: test
  * onlyIfUsing: \[org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathExtension\]

