# Design Partner 1

This guide is an evolving document for engineers at Design Partner 1 to integrate Rewrite recipes into their repositories according to their specific needs.

## Goals

| JUnit 4-5 Migration | Progress |
| :--- | :--- |
| Update lifecycle annotations \(e.g.: Before -&gt; BeforeEach\) | ⬤ |
| `@Category` to `@Tag` | ⬤ |
| `Assert` to `Assertions` | ⬤ |
| `org.junit.Test` to `org.junit.jupiter.api.Test` | ⬤ |
| `@RunWith(SpringRunner.class)` to `@ExtendsWith(SpringExtension.class)` | ⬤ |
| `Assertions` to AssertJ | ◑ |
| [Hamcrest to AssertJ](https://github.com/openrewrite/rewrite-testing-frameworks/issues/8) | ◯ |
| [Handle ExpectedExceptions rule](https://github.com/openrewrite/rewrite-testing-frameworks/issues/9) | ⬤ |
| Handle `@RunWith(MockitoJUnitRunner.class)` | ⬤ |
| Updates dependencies in pom.xml | ⬤ |

| Mockito 1-3 Migration | Progress |
| :--- | :--- |
| `org.mockito.MockitoAnnotations.Mock` to `org.mockito.Mock` | ⬤ |
| `org.mockito.Matchers` -&gt; `org.mockito.ArgumentMatchers` | ⬤ |
| `org.mockito.Matchers` -&gt; `org.mockito.ArgumentMatchers` | ⬤ |
| `InvocationOnMock.getArgumentAt()` -&gt; `InvocationOnMock.getArgument()` | ⬤ |
| `org.mockito.runners.MockitoJUnitRunner` -&gt; `org.mockito.junit.MockitoJUnitRunner` | ⬤ |
| Updates dependencies in pom.xml | ⬤ |

| Spring Boot 1-2 Migration | Progress |
| :--- | :--- |
| [Configuration Properties](design-partner-1.md) | ⬤ |
| [`SpringBootServletInitializer` relocation](design-partner-1.md) | ⬤ |
| [Remove implicit web annotations](design-partner-1.md) | ⬤ |
| [`@RequestMapping` Cross-Site Request Forgery Vulnerability](design-partner-1.md) | ⬤ |
| [Remove @Autowired on constructors](design-partner-1.md) | ⬤ |
| [Bean methods don't need to be public](design-partner-1.md) | ⬤ |
| Maven Dependency Management | ⬤ |
| [UpgradeDependencyVersion](design-partner-1.md) | ⬤ |
| [UpgradeParentVersion](design-partner-1.md) | ⬤ |
| `@Value` to `@ConfigurationProperties` | ◑ |
| Spring Best Practices | ◑ |
| [Constructor injection](design-partner-1.md) \(still needs updating of call sites\) | ◑ |
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
| Publishes CycloneDX BOM | ◑ |

