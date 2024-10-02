# Spring Boot 2.x

## Categories

* [Search](/recipes/java/spring/boot2/search)

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Add `javax.validation-api` dependency](./maybeaddjavaxvalidationapi.md)
* [Migrate Spring Boot 2.x projects to JUnit 5 from JUnit 4](./springboot2junit4to5migration.md)
* [Migrate Spring Boot properties to 2.0](./springbootproperties_2_0.md)
* [Migrate Spring Boot properties to 2.1](./springbootproperties_2_1.md)
* [Migrate Spring Boot properties to 2.2](./springbootproperties_2_2.md)
* [Migrate Spring Boot properties to 2.3](./springbootproperties_2_3.md)
* [Migrate Spring Boot properties to 2.4](./springbootproperties_2_4.md)
* [Migrate Spring Boot properties to 2.5](./springbootproperties_2_5.md)
* [Migrate Spring Boot properties to 2.6](./springbootproperties_2_6.md)
* [Migrate Spring Boot properties to 2.7](./springbootproperties_2_7.md)
* [Migrate flyway and liquibase credentials](./migratedatabasecredentials.md)
* [Migrate from Spring Boot 1.x to 2.0](./upgradespringboot_2_0.md)
* [Migrate to Spring Boot 2.1](./upgradespringboot_2_1.md)
* [Migrate to Spring Boot 2.2](./upgradespringboot_2_2.md)
* [Migrate to Spring Boot 2.3](./upgradespringboot_2_3.md)
* [Migrate to Spring Boot 2.4](./upgradespringboot_2_4.md)
* [Migrate to Spring Boot 2.6](./upgradespringboot_2_6.md)
* [Migrate to Spring Boot 2.7](./upgradespringboot_2_7.md)
* [Spring Boot 2.x best practices](./springboot2bestpractices.md)
* [Upgrade to Spring Boot 2.5](./upgradespringboot_2_5.md)
* [Use `WebServerFactoryCustomizer`](./migratetowebserverfactorycustomizer.md)
* [Use `javax.validation.constraints`](./migratehibernateconstraintstojavax.md)

## Recipes

* [Add missing `@Configuration` annotation](./addconfigurationannotationifbeanspresent.md)
* [Adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`](./databasecomponentandbeaninitializationordering.md)
* [Adjust configuration classes to use the `WebServerFactoryCustomizer` interface](./changeembeddedservletcontainercustomizer.md)
* [Convert `HeadersConfigurer` chained calls into Lambda DSL](./headersconfigurerlambdadsl.md)
* [Convert `HttpSecurity` chained calls into Lambda DSL](./httpsecuritylambdadsl.md)
* [Convert `ServerHttpSecurity` chained calls into Lambda DSL](./serverhttpsecuritylambdadsl.md)
* [Merge Spring `bootstrap.yml` with `application.yml`](./mergebootstrapyamlwithapplicationyaml.md)
* [Migrate `@OutputCaptureRule` to `@ExtendWith(OutputCaptureExtension.class)`](./outputcaptureextension.md)
* [Migrate `RestTemplateBuilder`](./resttemplatebuilderrequestfactory.md)
* [Migrate deprecated `ActuatorMediaType` to `ApiVersion#getProducedMimeType`](./migrateactuatormediatypetoapiversion.md)
* [Migrate deprecated Spring-Boot `EmbeddedDatabaseConnection.HSQL`](./migratehsqlembeddeddatabaseconnection.md)
* [Migrate multi-condition `@ConditionalOnBean` annotations](./conditionalonbeananynestedcondition.md)
* [Migrate to recommended constants in `LogbackLoggingSystemProperties` from deprecated values in `LoggingSystemProperties`](./migrateloggingsystempropertyconstants.md)
* [Move SAML relying party identity provider property to asserting party](./samlrelyingpartypropertyapplicationpropertiesmove.md)
* [Remove `@SpringExtension`](./unnecessaryspringextension.md)
* [Remove obsolete Spring JUnit runners](./removeobsoletespringrunners.md)
* [Remove unnecessary Spring `@RunWith`](./unnecessaryspringrunwith.md)
* [Replace `@ExtendWith` and `@ContextConfiguration` with `@SpringJunitConfig`](./replaceextendwithandcontextconfiguration.md)
* [Replace `EnvironmentTestUtils` with `TestPropertyValues`](./replacedeprecatedenvironmenttestutils.md)
* [Use `AutoConfiguration#imports`](./moveautoconfigurationtoimportsfile.md)
* [Use `DiskSpaceHealthIndicator(File, DataSize)`](./migratediskspacehealthindicatorconstructor.md)
* [Use `EnableConfigurationProperties.VALIDATOR_BEAN_NAME`](./migrateconfigurationpropertiesbindingpostprocessorvalidatorbeanname.md)
* [Use `ErrorAttributes#getErrorAttributes(WebRequest, ErrorAttributeOptions)`](./geterrorattributes.md)
* [Use `ErrorProperties#IncludeStacktrace.ON_PARAM`](./migrateerrorpropertiesincludestacktraceconstants.md)
* [Use `MultipartConfigFactory` with `DataSize` arguments](./migratemultipartconfigfactory.md)
* [Use `PingHealthIndicator`](./migrateapplicationhealthindicatortopinghealthindicator.md)
* [Use `RestClientBuilderCustomizer`](./migraterestclientbuildercustomizerpackagename.md)
* [Use `RestTemplateBuilder#basicAuthentication`](./migrateresttemplatebuilderbasicauthorization.md)
* [Use `RestTemplateBuilder#setConnectTimeout(Duration)` and `RestTemplateBuilder#setReadTimeout(Duration)`](./migrateresttemplatebuildertimeoutbyint.md)
* [Use `WebTestClientBuilderCustomizer`](./migratewebtestclientbuildercustomizerpackagename.md)
* [Use `isEagerFilterInit()`](./migrateundertowservletwebserverfactoryiseagerinitfilters.md)
* [Use `org.springframework.boot.autoconfigure.http.HttpMessageConverters`](./migratehttpmessageconverterspackagename.md)
* [Use `org.springframework.boot.web.server.LocalServerPort`](./migratelocalserverportannotation.md)
* [Use `org.springframework.boot.web.servlet.error.ErrorController`](./migrateerrorcontrollerpackagename.md)
* [Use `org.springframework.boot.web.servlet.support.SpringBootServletInitializer`](./migratespringbootservletinitializerpackagename.md)
* [Use `setEagerFilterInit(boolean)`](./migrateundertowservletwebserverfactoryseteagerinitfilters.md)
* [Use `spring-boot.run.agents` configuration key in `spring-boot-maven-plugin`](./springbootmavenpluginmigrateagenttoagents.md)


