# 8.32.0 Release (2024-07-31)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Artifacts

* rewrite-all
* rewrite-docker

## New Recipes

* [io.quarkus.updates.core.quarkus313.WithTestResource](../recipes/io/quarkus/updates/core/quarkus313/withtestresource):
* [io.quarkus.updates.core.quarkus313.WithTestResourceRestrictToAnnotatedClassValue](../recipes/io/quarkus/updates/core/quarkus313/withtestresourcerestricttoannotatedclassvalue):
* [org.axonframework.migration.UpgradeAxonFramework\_4\_Jakarta](../recipes/org/axonframework/migration/upgradeaxonframework\_4\_jakarta): Migration file to upgrade from an Axon Framework Javax-specific project to Jakarta.
* [org.axonframework.migration.UpgradeAxonFramework\_4\_Javax](../recipes/org/axonframework/migration/upgradeaxonframework\_4\_javax): Migration file to upgrade an Axon Framework Javax-specific project and remain on Javax.
* [org.openrewrite.FindCallGraph](../recipes/core/findcallgraph): Produces a data table where each row represents a method call.
* [org.openrewrite.FindDuplicateSourceFiles](../recipes/core/findduplicatesourcefiles): Record the presence of LSTs with duplicate paths, indicating that the same file was parsed more than once.
* [org.openrewrite.LanguageComposition](../recipes/core/languagecomposition): Counts the number of lines of the various kinds of source code and data formats parsed by OpenRewrite. Comments are not included in line counts. This recipe emits its results as two data tables, making no changes to any source file. One data table is per-file, the other is per-repository.
* [org.openrewrite.docker.search.FindDockerImageUses](../recipes/docker/search/finddockerimageuses): Produce an impact analysis of base images used in Dockerfiles.
* [org.openrewrite.hcl.search.FindAndReplaceLiteral](../recipes/hcl/search/findandreplaceliteral): Find and replace literal values in HCL files. This recipe parses the source files on which it runs as HCL, meaning you can execute HCL language-specific recipes before and after this recipe in a single recipe run.
* [org.openrewrite.java.migrate.nio.file.PathsGetToPathOf](../recipes/java/migrate/nio/file/pathsgettopathof): The `java.nio.file.Paths.get` method was introduced in Java SE 7. The `java.nio.file.Path.of` method was introduced in Java SE 11. This recipe replaces all usages of `Paths.get` with `Path.of` for consistency.
* [org.openrewrite.java.spring.boot2.MaybeAddJavaxValidationApi](../recipes/java/spring/boot2/maybeaddjavaxvalidationapi): Conditional on the application using a version of Spring Boot which uses javax but provides a hibernate-validator version which exports the jakarta.validation-api instead
* [org.openrewrite.maven.AddRuntimeConfig](../recipes/maven/addruntimeconfig): Add a new configuration option for the Maven runtime if not already present.
* [org.openrewrite.staticanalysis.NullableOnMethodReturnType](../recipes/staticanalysis/nullableonmethodreturntype): This is the way the cool kids do it.
* [org.openrewrite.xml.style.AutodetectDebug](../recipes/xml/style/autodetectdebug): Runs XML Autodetect and records the results in data tables and search markers. A debugging tool for figuring out why XML documents get styled the way they do.

## Removed Recipes

* **org.axonframework.migration.UpgradeAxonFramework\_4\_7\_Jakarta**: Migration file to upgrade from an Axon Framework Javax-specific project to Jakarta.
* **org.axonframework.migration.UpgradeAxonFramework\_4\_7\_Javax**: Migration file to upgrade an Axon Framework Javax-specific project and remain on Javax.
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithThrowableRecipe**: Recipe created for the following Refaster template:

```java
static final class FailWithThrowable {
    
    @BeforeTemplate
    void before(Throwable throwable) {
        Assertions.fail(throwable);
    }
    
    @AfterTemplate
    @DoNotCall
    void after(Throwable throwable) {
        throw new AssertionError(throwable);
    }
}
```

.

* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$ThrowNewAssertionErrorRecipe**: Recipe created for the following Refaster template:

```java
static final class ThrowNewAssertionError {
    
    @BeforeTemplate
    void before() {
        Assertions.fail();
    }
    
    @AfterTemplate
    @DoNotCall
    void after() {
        throw new AssertionError();
    }
}
```

.

* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxJustRecipe**: Recipe created for the following Refaster template:

```java
static final class FluxJust {
    
    @BeforeTemplate
    Flux<Integer> before(int start) {
        return Flux.range(start, 1);
    }
    
    @AfterTemplate
    Flux<Integer> after(int start) {
        return Flux.just(start);
    }
}
```

.
