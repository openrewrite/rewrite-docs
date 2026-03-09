---
description: What's changed in OpenRewrite version 8.75.2.
---

# 8.75.2 release (2026-03-09)

_Total recipe count: 4202_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.57.12`
* Staging CLI version: `v3.57.14`

## New Recipes

* [org.openrewrite.gitlab.AddArtifactsExpireIn](https://docs.openrewrite.org/recipes/gitlab/addartifactsexpirein): Set `artifacts:expire_in` in `.gitlab-ci.yml` to prevent storage bloat from indefinitely stored artifacts. 
* [org.openrewrite.gitlab.AddCache](https://docs.openrewrite.org/recipes/gitlab/addcache): Add `cache` configuration to `.gitlab-ci.yml` for faster builds. 
* [org.openrewrite.gitlab.AddDefaultKeyword](https://docs.openrewrite.org/recipes/gitlab/adddefaultkeyword): Add or update a keyword in the `default` section of `.gitlab-ci.yml`. 
* [org.openrewrite.gitlab.AddInterruptible](https://docs.openrewrite.org/recipes/gitlab/addinterruptible): Set `interruptible: true` in `.gitlab-ci.yml` to allow pipelines to be cancelled when superseded. 
* [org.openrewrite.gitlab.AddRetry](https://docs.openrewrite.org/recipes/gitlab/addretry): Add `retry` configuration to `.gitlab-ci.yml` for resilience against infrastructure failures. 
* [org.openrewrite.gitlab.AddTimeout](https://docs.openrewrite.org/recipes/gitlab/addtimeout): Set `timeout` in `.gitlab-ci.yml` to prevent jobs from hanging indefinitely. 
* [org.openrewrite.gitlab.AddWorkflowRules](https://docs.openrewrite.org/recipes/gitlab/addworkflowrules): Add `workflow:rules` to `.gitlab-ci.yml` to control pipeline creation. 
* [org.openrewrite.gitlab.BestPractices](https://docs.openrewrite.org/recipes/gitlab/bestpractices): Apply GitLab CI/CD best practices to `.gitlab-ci.yml`. This includes adding `workflow:rules` to prevent duplicate pipelines, setting `interruptible: true` and `retry` in the `default` section, configuring `artifacts:expire_in`, and setting a job `timeout`. 
* [org.openrewrite.java.logging.slf4j.MessageFormatToParameterizedLogging](https://docs.openrewrite.org/recipes/java/logging/slf4j/messageformattoparameterizedlogging): Replace `MessageFormat.format()` calls in SLF4J logging statements with parameterized placeholders for improved performance. 
* [org.openrewrite.java.logging.slf4j.RemoveUnnecessaryLogLevelGuards](https://docs.openrewrite.org/recipes/java/logging/slf4j/removeunnecessaryloglevelguards): Remove `if` statement guards around SLF4J logging calls when parameterized logging makes them unnecessary. 
* [org.openrewrite.java.logging.slf4j.StringFormatToParameterizedLogging](https://docs.openrewrite.org/recipes/java/logging/slf4j/stringformattoparameterizedlogging): Replace `String.format()` calls in SLF4J logging statements with parameterized placeholders for improved performance. 
* [org.openrewrite.java.migrate.lombok.UseAllArgsConstructor](https://docs.openrewrite.org/recipes/java/migrate/lombok/useallargsconstructor): Prefer the Lombok `@AllArgsConstructor` annotation over explicitly written out constructors that assign all non-static fields. 
* [org.openrewrite.java.migrate.lombok.UseRequiredArgsConstructor](https://docs.openrewrite.org/recipes/java/migrate/lombok/userequiredargsconstructor): Prefer the Lombok `@RequiredArgsConstructor` annotation over explicitly written out constructors that only assign final fields. 
* [org.openrewrite.java.spring.boot4.RenameDeprecatedStartersManagedVersions](https://docs.openrewrite.org/recipes/java/spring/boot4/renamedeprecatedstartersmanagedversions): Renames deprecated Spring Boot starters to their new names without adding explicit versions, for use in projects where the `io.spring.dependency-management` plugin manages versions via BOM. 
* [org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListener](https://docs.openrewrite.org/recipes/java/testing/mockito/replacemockitotestexecutionlistener): Replace `@TestExecutionListeners(MockitoTestExecutionListener.class)` with the appropriate Mockito initialization for the test framework in use: `@ExtendWith(MockitoExtension.class)` for JUnit 5, `@RunWith(MockitoJUnitRunner.class)` for JUnit 4, or `MockitoAnnotations.openMocks(this)` for TestNG. 
* [org.openrewrite.java.testing.mockito.ReplacePowerMockDependencies](https://docs.openrewrite.org/recipes/java/testing/mockito/replacepowermockdependencies): Replaces PowerMock API dependencies with `mockito-inline` when `mockStatic()`, `whenNew()`, or `@PrepareForTest` usage is detected, or `mockito-core` otherwise. PowerMock features like static mocking, constructor mocking, and final class mocking require the inline mock maker which is bundled in `mockito-inline` for Mockito 3.x/4.x. 

