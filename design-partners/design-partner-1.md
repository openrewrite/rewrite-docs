# Design Partner 1

This guide is an evolving document for engineers at Design Partner 1 to integrate OpenRewrite recipes into their repositories according to their specific needs.

## Goals

| JUnit 4-5 Migration | Progress |
| :--- | :--- |
| Update lifecycle annotations \(e.g.: Before -&gt; BeforeEach\) | ⬤ |
| `@Category` to `@Tag` | ⬤ |
| `Assert` to `Assertions` | ⬤ |
| `org.junit.Test` to `org.junit.jupiter.api.Test` | ⬤ |
| `@RunWith(SpringRunner.class)` to `@ExtendsWith(SpringExtension.class)` | ⬤ |
| `Assertions` to AssertJ | ⬤ |
| Add hamcrest-core dependency if hamcrest matchers are used | ⬤ |
| [Handle ExpectedExceptions rule](https://github.com/openrewrite/rewrite-testing-frameworks/issues/9) | ⬤ |
| Handle `@RunWith(MockitoJUnitRunner.class)` | ⬤ |
| Updates dependencies in pom.xml | ⬤ |
| Update `Assume` to `Assumptions` | ⬤ |
| Remove `JUnit4` and `BlockJUnit4ClassRunner` | ⬤ |
| Update `@FixedMethodOrder` to `@TestMethodOrder` | ⬤ |
| Update `TemporaryFolder` to `TempDir` | ⬤ |
| Update `Parameterized` to JUnit Jupiter Parameterized Tests | ⬤ |
| Update `JUnitParamsRunner` to JUnit Jupiter Parameterized Tests | ⬤ |

| JUnit 4-5 Migration \(Spring Specific\) | Progress |
| :--- | :--- |
| Update `@OutputCaptureRule` to `@ExtendWith(OutputCaptureExtension.class)` | ⬤ |
| Update `SpringRunner` and `SpringJUnit4ClassRunner` to `@ExtendWith(SpringExtension.class)` | ⬤ |
| Update `ModifiedClassPathRunner` to `ModifiedClassPathExtension` | ◑ |

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
| Publishes CycloneDX BOM | ⬤ |

| Code Cleanup & Hygiene | Progress |
| :--- | :--- |
| JUnit tests should include assertions | ⬤ |
| Fix covariant equals\(\) implementations | ⬤ |
| Remove empty code blocks | ⬤ |
| Ensure that `String.equals()` calls avoid NPEs when string literals are involved | ⬤ |
| Remove unnecessary explicit initialization of types to their default values | ⬤ |
| Finalize local variables that can be `final` | ⬤ |
| Make the constructors of static utility classes `private` | ⬤ |
| Ensure that modifiers are declared in the order specified by the Java spec | ⬤ |
| Ensure that method names comply with the appropriate naming convention | ◑ |
| Remove unnecessary intermediate construction of `File` objects | ⬤ |
| Remove meaningless `final` modifier from static methods | ⬤ |
| Simplify unnecessarily complex boolean expressions | ⬤ |
| Remove unnecessary type arguments and use `<>` operator | ⬤ |
| Remove unnecessary parentheses | ⬤ |
| Remove unnecessary throws declarations | ⬤ |
| Replace primitive wrapper class constructor usage with valueOf\(\) | ⬤ |
| Convert `BigDecimal` counding constants to the equivalent `RoundingMode` enum | ⬤ |

| Security | Progress |
| :--- | :--- |
| Find plaintext secrets, such as RSA keys | ⬤ |
| Fix XmlParser XXEVulnerability | ⬤ |
| Find result of File.mkdirs\(\) ignored | ⬤ |

